import { NextResponse } from "next/server";

type EnquiryPayload = {
  name?: string;
  email?: string;
  phone?: string;
  interest?: string;
  property?: string;
  message?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: EnquiryPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const phone = body.phone?.trim() ?? "";
  const interest = body.interest?.trim() ?? "General enquiry";
  const property = body.property?.trim() ?? "Not sure / general enquiry";
  const message = body.message?.trim() ?? "";

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const scriptUrl = process.env.GOOGLE_SCRIPT_URL;
  const sharedSecret = process.env.ENQUIRY_SHARED_SECRET;

  if (!scriptUrl) {
    console.error("GOOGLE_SCRIPT_URL is not configured.");
    return NextResponse.json(
      { error: "Form submission is not configured yet. Please try again later." },
      { status: 500 }
    );
  }

  try {
    const scriptResponse = await fetch(scriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        secret: sharedSecret,
        name,
        email,
        phone,
        interest,
        property,
        message,
        submittedAt: new Date().toISOString(),
      }),
    });

    if (!scriptResponse.ok) {
      throw new Error(`Sheet script responded with ${scriptResponse.status}`);
    }

    const result = await scriptResponse.json().catch(() => ({ ok: true }));
    if (result.ok === false) {
      throw new Error(result.error || "Sheet script rejected the submission.");
    }
  } catch (err) {
    console.error("Failed to forward enquiry to Google Sheet:", err);
    return NextResponse.json(
      { error: "We couldn't save your enquiry right now. Please try again shortly." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
