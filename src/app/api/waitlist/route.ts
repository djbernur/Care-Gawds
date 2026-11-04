import { NextResponse } from "next/server";

const CARE_TYPES = ["Nanny", "Babysitter", "Childcare Provider", "Not sure yet"];
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const ZIP_RE = /^\d{5}$/;

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: real visitors never see or fill this field.
  if (typeof body.company === "string" && body.company.trim() !== "") {
    return NextResponse.json({ ok: true });
  }
  // Very fast submissions are almost always bots.
  if (typeof body.startedAt === "number" && Date.now() - body.startedAt < 2000) {
    return NextResponse.json({ ok: true });
  }

  const email = String(body.email ?? "").trim().toLowerCase();
  const zip = String(body.zip ?? "").trim();
  const careType = String(body.careType ?? "");
  const consent = body.consent === true;

  if (!EMAIL_RE.test(email) || email.length > 254) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 422 });
  }
  if (!ZIP_RE.test(zip)) {
    return NextResponse.json({ error: "Please enter a 5-digit ZIP code." }, { status: 422 });
  }
  if (!CARE_TYPES.includes(careType)) {
    return NextResponse.json({ error: "Please choose a type of care." }, { status: 422 });
  }
  if (!consent) {
    return NextResponse.json({ error: "Please agree to receive updates." }, { status: 422 });
  }

  const entry = { email, zip, careType, submittedAt: new Date().toISOString() };

  // Storage is not chosen yet. Set WAITLIST_WEBHOOK_URL to deliver entries to a
  // configured service. Without it, production refuses submissions so no one's
  // sign-up is silently lost.
  const webhook = process.env.WAITLIST_WEBHOOK_URL;
  if (webhook) {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: "family_waitlist", ...entry }),
    });
    if (!res.ok) {
      return NextResponse.json({ error: "We couldn't save your sign-up. Please try again." }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  }

  if (process.env.NODE_ENV !== "production") {
    console.log("[waitlist] (dev, not stored)", entry);
    return NextResponse.json({ ok: true });
  }

  return NextResponse.json(
    { error: "Sign-ups open very soon. Please check back shortly." },
    { status: 503 },
  );
}
