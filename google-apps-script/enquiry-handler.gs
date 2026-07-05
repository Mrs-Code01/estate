/**
 * Paste this into Extensions > Apps Script for the Google Sheet that will
 * store enquiry submissions. See README.md in this folder for setup steps.
 *
 * Flow: website submits an enquiry -> row is logged -> if a Gemini API key
 * is configured, the enquiry is matched against the Listings tab and an AI
 * agent drafts a reply. Anything it isn't confident about is left for a
 * human instead of being auto-replied to.
 */

const SUBMISSIONS_SHEET = "Submissions";
const LISTINGS_SHEET = "Listings";
const SUBMISSIONS_HEADER = [
  "Timestamp",
  "Name",
  "Email",
  "Phone",
  "Interest",
  "Property",
  "Message",
  "Status",
  "AI Draft",
  "Escalation Reason",
];
const DEMO_LISTINGS = [
  ["Serenity by the Lake", "$250.00", 4, 2, "2569 sqft", "Lakefront home for rent with private dock access."],
  ["Urban Nest Realty", "$250.00", 4, 2, "2569 sqft", "Modern city-center apartment close to transit."],
  ["Prime Property Group", "$250.00", 4, 2, "2569 sqft", "Contemporary family home with open-plan living."],
  ["KeyStone Estates", "$250.00", 4, 2, "2569 sqft", "Coastal property with pool and panoramic views."],
  ["Blue Horizon Realty", "$250.00", 4, 2, "2569 sqft", "Classic suburban house with a large garden."],
  ["NextDoor Real Estate", "$250.00", 4, 2, "2569 sqft", "Minimalist new-build with a private courtyard."],
];

function doPost(e) {
  try {
    const payload = JSON.parse(e.postData.contents);

    const props = PropertiesService.getScriptProperties();
    const expectedSecret = props.getProperty("SHARED_SECRET");
    if (expectedSecret && payload.secret !== expectedSecret) {
      return jsonResponse({ ok: false, error: "Unauthorized" });
    }

    const sheet = getOrCreateSubmissionsSheet();
    sheet.appendRow([
      payload.submittedAt || new Date().toISOString(),
      payload.name || "",
      payload.email || "",
      payload.phone || "",
      payload.interest || "",
      payload.property || "",
      payload.message || "",
      "Processing",
      "",
      "",
    ]);
    const rowIndex = sheet.getLastRow();

    runAgent(payload, sheet, rowIndex, props);

    return jsonResponse({ ok: true });
  } catch (err) {
    return jsonResponse({ ok: false, error: String(err) });
  }
}

function runAgent(payload, sheet, rowIndex, props) {
  const statusCol = SUBMISSIONS_HEADER.indexOf("Status") + 1;
  const draftCol = SUBMISSIONS_HEADER.indexOf("AI Draft") + 1;
  const reasonCol = SUBMISSIONS_HEADER.indexOf("Escalation Reason") + 1;

  const apiKey = props.getProperty("GEMINI_API_KEY");
  if (!apiKey) {
    sheet.getRange(rowIndex, statusCol).setValue("Needs review");
    sheet.getRange(rowIndex, reasonCol).setValue("AI not configured - review manually");
    return;
  }

  try {
    const listing = findListing(payload.property);
    const agentResult = callGemini(payload, listing, apiKey, props);

    sheet.getRange(rowIndex, draftCol).setValue(agentResult.reply);

    if (agentResult.escalate) {
      sheet.getRange(rowIndex, statusCol).setValue("Needs review");
      sheet.getRange(rowIndex, reasonCol).setValue(agentResult.reason || "Flagged by AI");
      notifyOwner(payload, agentResult, props);
    } else {
      sendReply(payload, agentResult.reply, props);
      sheet.getRange(rowIndex, statusCol).setValue("Reply sent");
    }
  } catch (err) {
    sheet.getRange(rowIndex, statusCol).setValue("Needs review");
    sheet.getRange(rowIndex, reasonCol).setValue("Agent error: " + err);
  }
}

function findListing(propertyName) {
  if (!propertyName) return null;
  const sheet = getOrCreateListingsSheet();
  const rows = sheet.getDataRange().getValues();
  for (let i = 1; i < rows.length; i++) {
    if (String(rows[i][0]).trim().toLowerCase() === String(propertyName).trim().toLowerCase()) {
      return {
        name: rows[i][0],
        price: rows[i][1],
        beds: rows[i][2],
        baths: rows[i][3],
        area: rows[i][4],
        description: rows[i][5],
      };
    }
  }
  return null;
}

function callGemini(payload, listing, apiKey, props) {
  const model = props.getProperty("GEMINI_MODEL") || "gemini-2.5-flash";
  const agencyName = props.getProperty("AGENCY_NAME") || "Estate";

  const systemInstruction =
    "You are an enquiry assistant for a real estate agency called " +
    agencyName +
    ". A prospective client submitted an enquiry through the website. " +
    "1) Draft a warm, professional, concise email reply (3-6 sentences) that confirms the property details " +
    "if a specific listing was referenced, answers any obvious questions in their message, and offers to " +
    "schedule a viewing or call. Sign off as 'The " +
    agencyName +
    " Team'. " +
    "2) Decide whether this enquiry should be escalated to a human agent instead of receiving this automated " +
    "reply. Escalate if the message involves a cash or off-market offer, a price negotiation, a commercial or " +
    "bulk/investor enquiry, an urgent or unusual request, a complaint, or anything you can't confidently answer. " +
    'Respond with ONLY compact JSON in this exact shape: {"reply": string, "escalate": boolean, "reason": string}. ' +
    "If escalate is false, reason must be an empty string.";

  const userContent =
    "Enquiry details:\n" +
    "Name: " + (payload.name || "") + "\n" +
    "Email: " + (payload.email || "") + "\n" +
    "Phone: " + (payload.phone || "") + "\n" +
    "Interested in: " + (payload.interest || "") + "\n" +
    "Property of interest: " + (payload.property || "") + "\n" +
    "Message: " + (payload.message || "") + "\n\n" +
    "Matched listing info: " +
    (listing
      ? JSON.stringify(listing)
      : "No exact listing match found - treat as a general enquiry.");

  const url =
    "https://generativelanguage.googleapis.com/v1beta/models/" +
    model +
    ":generateContent?key=" +
    apiKey;

  const response = UrlFetchApp.fetch(url, {
    method: "post",
    contentType: "application/json",
    muteHttpExceptions: true,
    payload: JSON.stringify({
      systemInstruction: { parts: [{ text: systemInstruction }] },
      contents: [{ parts: [{ text: userContent }] }],
      generationConfig: { responseMimeType: "application/json" },
    }),
  });

  const body = JSON.parse(response.getContentText());
  if (response.getResponseCode() !== 200) {
    throw new Error("Gemini error: " + response.getContentText());
  }

  const text = body.candidates[0].content.parts[0].text;
  const parsed = JSON.parse(text);
  return {
    reply: parsed.reply || "",
    escalate: !!parsed.escalate,
    reason: parsed.reason || "",
  };
}

function sendReply(payload, reply, props) {
  const agencyName = props.getProperty("AGENCY_NAME") || "Estate";
  GmailApp.sendEmail(
    payload.email,
    "Re: Your enquiry with " + agencyName,
    reply
  );
}

function notifyOwner(payload, agentResult, props) {
  const ownerEmail = props.getProperty("OWNER_EMAIL");
  if (!ownerEmail) return;

  MailApp.sendEmail({
    to: ownerEmail,
    subject: "Enquiry needs your review: " + (payload.name || "Unknown"),
    body:
      "A new enquiry was flagged for manual review.\n\n" +
      "Reason: " + agentResult.reason + "\n\n" +
      "Name: " + (payload.name || "") + "\n" +
      "Email: " + (payload.email || "") + "\n" +
      "Phone: " + (payload.phone || "") + "\n" +
      "Property: " + (payload.property || "") + "\n" +
      "Message: " + (payload.message || "") + "\n\n" +
      "Suggested reply (not sent):\n" + agentResult.reply,
  });
}

function getOrCreateSubmissionsSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SUBMISSIONS_SHEET);
  if (!sheet) {
    sheet = ss.insertSheet(SUBMISSIONS_SHEET);
  }
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(SUBMISSIONS_HEADER);
  }
  return sheet;
}

function getOrCreateListingsSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(LISTINGS_SHEET);
  if (!sheet) {
    sheet = ss.insertSheet(LISTINGS_SHEET);
    sheet.appendRow(["Name", "Price", "Beds", "Baths", "Area", "Description"]);
    DEMO_LISTINGS.forEach((row) => sheet.appendRow(row));
  }
  return sheet;
}

function jsonResponse(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON
  );
}
