import { NextResponse } from "next/server";
import { AVAILABILITY, CARE_TYPES, EXPERIENCE, QUALIFICATIONS, US_STATES } from "@/data/options";
import { EMAIL_RE, ZIP_RE, clean, cleanList, rateLimited } from "@/lib/forms";

const PHONE_RE = /^\+?1?[\s.-]?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
const fail = (error: string, status = 422) => NextResponse.json({ error }, { status });

export async function POST(req: Request) {
  if (rateLimited(req)) return fail("Too many submissions. Please try again later.", 429);

  let b: Record<string, unknown>;
  try {
    b = await req.json();
  } catch {
    return fail("Invalid request.", 400);
  }

  // Spam protection: hidden honeypot field and minimum time on the form.
  if (clean(b.company, 100) !== "") return NextResponse.json({ ok: true });
  if (typeof b.startedAt === "number" && Date.now() - b.startedAt < 4000) return NextResponse.json({ ok: true });

  const app = {
    firstName: clean(b.firstName, 50),
    lastName: clean(b.lastName, 50),
    email: clean(b.email, 254).toLowerCase(),
    phone: clean(b.phone, 25),
    city: clean(b.city, 80),
    state: clean(b.state, 10),
    zip: clean(b.zip, 5),
    experience: clean(b.experience, 40),
    careTypes: cleanList(b.careTypes, CARE_TYPES),
    availability: cleanList(b.availability, AVAILABILITY),
    qualifications: cleanList(b.qualifications, QUALIFICATIONS),
    otherQualifications: clean(b.otherQualifications, 300),
    introduction: String(b.introduction ?? "").trim().slice(0, 1200),
    over18: b.over18 === true,
    consent: b.consent === true,
  };

  if (!app.firstName || !app.lastName) return fail("Please enter your first and last name.");
  if (!EMAIL_RE.test(app.email)) return fail("Please enter a valid email address.");
  if (!PHONE_RE.test(app.phone)) return fail("Please enter a valid 10-digit phone number.");
  if (!app.city) return fail("Please enter your city.");
  if (!(US_STATES as readonly string[]).includes(app.state)) return fail("Please choose your state.");
  if (!ZIP_RE.test(app.zip)) return fail("Please enter a 5-digit ZIP code.");
  if (!(EXPERIENCE as readonly string[]).includes(app.experience)) return fail("Please choose your years of experience.");
  if (app.careTypes.length === 0) return fail("Please choose at least one type of care.");
  if (app.availability.length === 0) return fail("Please choose your general availability.");
  if (app.introduction.length < 50) return fail("Please write a short introduction (at least 50 characters).");
  if (!app.over18) return fail("You must be 18 or older to apply.");
  if (!app.consent) return fail("Please agree to the privacy notice to continue.");

  const entry = { type: "caregiver_application", ...app, submittedAt: new Date().toISOString() };

  // Storage is not chosen yet. Set CAREGIVER_APPLICATION_WEBHOOK_URL to deliver applications to a
  // configured service. Without it, production refuses submissions so no application is silently lost.
  const webhook = process.env.CAREGIVER_APPLICATION_WEBHOOK_URL;
  if (webhook) {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(entry),
    });
    if (!res.ok) return fail("We couldn't submit your application. Please try again.", 502);
    return NextResponse.json({ ok: true });
  }

  if (process.env.NODE_ENV !== "production") {
    console.log("[caregiver-application] (dev, not stored)", entry);
    return NextResponse.json({ ok: true });
  }

  return fail("Applications open very soon. Please check back shortly.", 503);
}
