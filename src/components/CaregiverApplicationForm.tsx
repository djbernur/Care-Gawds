"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { CheckCircleIcon } from "./Icons";
import { AVAILABILITY, CARE_TYPES, EXPERIENCE, QUALIFICATIONS, US_STATES } from "@/data/options";

type Status = "idle" | "sending" | "done" | "error";

const field =
  "h-12 w-full rounded-xl border border-lavender-deep bg-cream/60 px-4 text-[15px] text-ink transition-colors placeholder:text-muted/60 hover:border-violet/40 focus:border-violet focus:bg-white focus:outline-none focus:ring-4 focus:ring-violet/15";
const label = "mb-1.5 block text-[13.5px] font-semibold text-ink";

function Group({ step, title, children }: { step: number; title: string; children: React.ReactNode }) {
  return (
    <fieldset className="border-t border-lavender-deep/70 pt-7 first:border-0 first:pt-0">
      <legend className="float-left mb-5 flex w-full items-center gap-3 text-lg font-bold tracking-tight text-plum">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-lavender text-[13px] font-bold text-violet">{step}</span>
        {title}
      </legend>
      <div className="clear-both">{children}</div>
    </fieldset>
  );
}

function Chips({ name, options, hint }: { name: string; options: readonly string[]; hint?: string }) {
  return (
    <div>
      {hint && <p className="mb-2.5 text-[13px] text-muted">{hint}</p>}
      <div className="flex flex-wrap gap-2">
        {options.map((o) => (
          <label key={o} className="cursor-pointer">
            <input type="checkbox" name={name} value={o} className="peer sr-only" />
            <span className="inline-flex items-center rounded-full border border-lavender-deep bg-white px-4 py-2 text-[14px] font-semibold text-ink transition-all hover:border-violet/50 peer-checked:border-violet peer-checked:bg-violet peer-checked:text-white peer-focus-visible:ring-4 peer-focus-visible:ring-violet/25">
              {o}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}

export function CaregiverApplicationForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [introLen, setIntroLen] = useState(0);
  const startedAt = useRef(Date.now());
  const topRef = useRef<HTMLDivElement>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const d = new FormData(form);
    const careTypes = d.getAll("careTypes");
    const availability = d.getAll("availability");
    if (careTypes.length === 0 || availability.length === 0) {
      setError(careTypes.length === 0 ? "Please choose at least one type of care." : "Please choose your general availability.");
      setStatus("error");
      return;
    }
    if (!form.reportValidity()) return;
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/caregiver-application", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: d.get("firstName"),
          lastName: d.get("lastName"),
          email: d.get("email"),
          phone: d.get("phone"),
          city: d.get("city"),
          state: d.get("state"),
          zip: d.get("zip"),
          experience: d.get("experience"),
          careTypes,
          availability,
          qualifications: d.getAll("qualifications"),
          otherQualifications: d.get("otherQualifications"),
          introduction: d.get("introduction"),
          over18: d.get("over18") === "on",
          consent: d.get("consent") === "on",
          company: d.get("company"),
          startedAt: startedAt.current,
        }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error ?? "Something went wrong. Please try again.");
      setStatus("done");
      topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div ref={topRef} role="status" className="rounded-[28px] bg-white p-8 text-center shadow-lifted ring-1 ring-lavender-deep/70 sm:p-12">
        <CheckCircleIcon className="mx-auto h-14 w-14 text-violet" />
        <h3 className="mt-4 text-2xl font-extrabold tracking-tight text-plum">Thank you for applying!</h3>
        <p className="mx-auto mt-2 max-w-md text-muted">
          We&apos;ve received your application. We&apos;ll review it and email you about next steps as Care Gawds opens in
          your area.
        </p>
        <Link href="/" className="btn-secondary mt-7 h-12">Back to Home</Link>
      </div>
    );
  }

  return (
    <div ref={topRef} className="scroll-mt-24">
      <form onSubmit={onSubmit} className="space-y-7 rounded-[28px] bg-white p-6 shadow-lifted ring-1 ring-lavender-deep/70 sm:p-10">
        <Group step={1} title="About you">
          <div className="grid grid-cols-2 gap-3.5 sm:gap-4">
            <label>
              <span className={label}>First name</span>
              <input name="firstName" required maxLength={50} autoComplete="given-name" className={field} />
            </label>
            <label>
              <span className={label}>Last name</span>
              <input name="lastName" required maxLength={50} autoComplete="family-name" className={field} />
            </label>
            <label className="col-span-2 sm:col-span-1">
              <span className={label}>Email address</span>
              <input name="email" type="email" required autoComplete="email" placeholder="you@example.com" className={field} />
            </label>
            <label className="col-span-2 sm:col-span-1">
              <span className={label}>Phone number</span>
              <input name="phone" type="tel" required autoComplete="tel" placeholder="(555) 555-0123" pattern="^\+?1?[\s.\-]?\(?\d{3}\)?[\s.\-]?\d{3}[\s.\-]?\d{4}$" className={field} />
            </label>
          </div>
        </Group>

        <Group step={2} title="Where you’re located">
          <div className="grid grid-cols-6 gap-3.5 sm:gap-4">
            <label className="col-span-6 sm:col-span-3">
              <span className={label}>City</span>
              <input name="city" required maxLength={80} autoComplete="address-level2" placeholder="Victorville" className={field} />
            </label>
            <label className="col-span-3 sm:col-span-1">
              <span className={label}>State</span>
              <select name="state" required defaultValue="CA" className={field}>
                {US_STATES.map((s) => <option key={s}>{s}</option>)}
              </select>
            </label>
            <label className="col-span-3 sm:col-span-2">
              <span className={label}>ZIP code</span>
              <input name="zip" required inputMode="numeric" pattern="\d{5}" maxLength={5} autoComplete="postal-code" className={field} />
            </label>
          </div>
          <p className="mt-2.5 text-[13px] text-muted">We only ask for your general area. Please don&apos;t include a street address.</p>
        </Group>

        <Group step={3} title="Your experience">
          <div className="space-y-6">
            <label className="block sm:max-w-xs">
              <span className={label}>Years of caregiving experience</span>
              <select name="experience" required defaultValue="" className={field}>
                <option value="" disabled>Choose one</option>
                {EXPERIENCE.map((x) => <option key={x}>{x}</option>)}
              </select>
            </label>
            <div>
              <p className={label}>Types of care offered</p>
              <Chips name="careTypes" options={CARE_TYPES} hint="Choose all that apply." />
            </div>
            <div>
              <p className={label}>General availability</p>
              <Chips name="availability" options={AVAILABILITY} hint="Choose all that apply." />
            </div>
            <div>
              <p className={label}>Relevant qualifications <span className="font-normal text-muted">(optional)</span></p>
              <Chips name="qualifications" options={QUALIFICATIONS} hint="Self-reported. We may ask for documentation later." />
              <input name="otherQualifications" maxLength={300} placeholder="Anything else? (optional)" className={`${field} mt-3`} />
            </div>
          </div>
        </Group>

        <Group step={4} title="Introduce yourself">
          <label className="block">
            <span className={label}>A short personal introduction</span>
            <textarea
              name="introduction"
              required
              minLength={50}
              maxLength={1200}
              rows={5}
              onChange={(e) => setIntroLen(e.target.value.length)}
              placeholder="Tell families a little about yourself, your caregiving style, and what you love about working with children."
              className={`${field} h-auto py-3 leading-relaxed`}
            />
            <span className="mt-1.5 block text-right text-[12px] text-muted">{introLen} / 1200 · at least 50 characters</span>
          </label>
        </Group>

        <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
          <label>Company <input name="company" tabIndex={-1} autoComplete="off" /></label>
        </div>

        <div className="space-y-3.5 rounded-2xl bg-lavender/60 p-5">
          <p className="text-[13.5px] leading-relaxed text-ink/80">
            <strong className="text-plum">Your privacy:</strong> We use this information only to review your application
            and contact you about Care Gawds. Please don&apos;t include your Social Security number, ID numbers, or other
            sensitive details. Any future identity or background checks will use a separate, secure process with your
            permission.
          </p>
          <label className="flex items-start gap-3">
            <input name="over18" type="checkbox" required className="mt-1 h-4 w-4 accent-violet" />
            <span className="text-[14px] text-ink">I confirm I am 18 years of age or older.</span>
          </label>
          <label className="flex items-start gap-3">
            <input name="consent" type="checkbox" required className="mt-1 h-4 w-4 accent-violet" />
            <span className="text-[14px] text-ink">
              I agree that Care Gawds may store this information and contact me about my application, as described in the{" "}
              <Link href="/privacy" className="font-semibold text-violet underline-offset-2 hover:underline">Privacy Policy</Link>.
            </span>
          </label>
        </div>

        {status === "error" && (
          <p role="alert" className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>
        )}
        <button type="submit" disabled={status === "sending"} className="btn-primary h-14 w-full text-[17px] disabled:translate-y-0 disabled:opacity-60">
          {status === "sending" ? "Submitting…" : "Submit Application"}
        </button>
      </form>
    </div>
  );
}
