# Enquiry form → Google Sheets → AI quote & enquiry agent

Manual setup (only you can do this — it requires your Google account):

## 1. Base setup (save every enquiry to a Sheet)

1. **Create a Google Sheet** (any name, e.g. "Real Estate Enquiries").
2. In the Sheet, go to **Extensions > Apps Script**.
3. Delete the placeholder `Code.gs` content and paste in `enquiry-handler.gs` from this folder.
4. Set a shared secret so random people can't spam your sheet:
   - In the Apps Script editor, click the gear icon **Project Settings**.
   - Under **Script Properties**, add a property named `SHARED_SECRET` with any random value (e.g. generate one with `openssl rand -hex 16`).
5. **Deploy the script:**
   - Click **Deploy > New deployment**.
   - Type: **Web app**.
   - Execute as: **Me**.
   - Who has access: **Anyone**.
   - Click **Deploy**, authorize the permissions it asks for (it needs to edit the Sheet, and — once you enable the AI agent below — send email as you).
   - Copy the **Web app URL** it gives you.
6. **Add these to `.env.local`** in the project root (create the file if it doesn't exist):
   ```
   GOOGLE_SCRIPT_URL=<the web app URL from step 5>
   ENQUIRY_SHARED_SECRET=<the same value you put in SHARED_SECRET>
   ```
7. Restart `npm run dev` so the new env vars are picked up.
8. Submit the form on the site — a new row should appear in the "Submissions" tab of your Sheet, and a "Listings" tab will be auto-created with the 6 demo properties from the site. **Replace those rows with your real inventory** (same columns: Name, Price, Beds, Baths, Area, Description) — the "Name" must match the property names shown in the form's "Property of interest" dropdown.

At this point every submission is saved. The agent below is optional and additive.

## 2. Enable the AI quote & enquiry agent (optional)

This step makes the script read each enquiry, match it to a listing, draft a reply, and either send it automatically or flag it for manual review if something looks unusual (a cash offer, a negotiation, a complaint, etc.).

Uses **Google Gemini** (free tier) — no Anthropic/OpenAI key needed.

1. Get a free API key at [aistudio.google.com/apikey](https://aistudio.google.com/apikey) (sign in with the same Google account as the Sheet).
2. Back in the Apps Script editor's **Project Settings > Script Properties**, add:
   - `GEMINI_API_KEY` — the key from step 1.
   - `OWNER_EMAIL` — your email address, where flagged/escalated enquiries get sent.
   - `AGENCY_NAME` — optional, defaults to "Estate". Used in the drafted email sign-off.
3. Re-deploy: **Deploy > Manage deployments > edit (pencil icon) > New version > Deploy**. The first time this runs it will ask you to authorize Gmail send access — approve it.
4. Submit a test enquiry. Check the "Submissions" tab:
   - `Status` will show **"Reply sent"** (the agent emailed the enquirer directly) or **"Needs review"** (something was flagged — check the "Escalation Reason" column and your inbox for the notification).
   - `AI Draft` shows what the agent wrote, even for escalated ones, so you have a record of it.

**The agent auto-sends replies** via `sendReply` (`GmailApp.sendEmail`) for anything it doesn't escalate — nothing sits in a drafts folder waiting for approval. If you ever want to go back to a human-approves-first flow instead, swap `GmailApp.sendEmail` for `GmailApp.createDraft` in `sendReply` (same three arguments) and redeploy.

## Notes

- If you ever change the script code, you need to create a **new deployment version** (Deploy > Manage deployments > edit > new version) for the changes to go live — saving the script alone isn't enough.
- If `GEMINI_API_KEY` isn't set, the script just logs submissions with `Status = "Needs review"` and skips the AI step — the base save-to-sheet flow always works even without the AI agent configured.
- Gemini model name is configurable via a `GEMINI_MODEL` script property if `gemini-2.5-flash` (the default) is ever deprecated.
