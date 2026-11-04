"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { CheckCircleIcon } from "./Icons";

type Status = "idle" | "sending" | "done" | "error";

export function WaitlistForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const startedAt = useRef(Date.now());

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: data.get("email"),
          zip: data.get("zip"),
          careType: data.get("careType"),
          consent: data.get("consent") === "on",
          company: data.get("company"),
          startedAt: startedAt.current,
        }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error ?? "Something went wrong. Please try again.");
      setStatus("done");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div role="status" className="flex items-start gap-4 rounded-[28px] bg-white p-7 shadow-lifted ring-1 ring-lavender-deep/70 sm:p-9">
        <CheckCircleIcon className="h-8 w-8 shrink-0 text-violet" />
        <div>
          <p className="text-lg font-bold text-plum">You&apos;re on the list!</p>
          <p className="mt-1 text-muted">We&apos;ll email you when caregivers are available in your area.</p>
        </div>
      </div>
    );
  }

  const field =
    "h-12 w-full rounded-xl border border-lavender-deep bg-cream/60 px-4 text-[15px] text-ink transition-colors placeholder:text-muted/60 hover:border-violet/40 focus:border-violet focus:bg-white focus:outline-none focus:ring-4 focus:ring-violet/15";

  return (
    <form onSubmit={onSubmit} noValidate={false} className="rounded-[28px] bg-white p-6 shadow-lifted ring-1 ring-lavender-deep/70 sm:p-9">
      <p className="text-xl font-extrabold tracking-tight text-plum">Get notified at launch</p>
      <p className="mt-1 text-[14.5px] text-muted">Be first to know when caregivers are available near you.</p>
      <div className="mt-6 grid grid-cols-2 gap-3.5 sm:gap-4">
        <label className="col-span-2">
          <span className="mb-1.5 block text-[13.5px] font-semibold text-ink">Email address</span>
          <input name="email" type="email" required autoComplete="email" placeholder="you@example.com" className={field} />
        </label>
        <label>
          <span className="mb-1.5 block text-[13.5px] font-semibold text-ink">ZIP code</span>
          <input name="zip" required inputMode="numeric" pattern="\d{5}" maxLength={5} autoComplete="postal-code" placeholder="92392" className={field} />
        </label>
        <label>
          <span className="mb-1.5 block text-[13.5px] font-semibold text-ink">Type of care</span>
          <select name="careType" required defaultValue="" className={field}>
            <option value="" disabled>Select</option>
            <option>Nanny</option>
            <option>Babysitter</option>
            <option>Childcare Provider</option>
            <option>Not sure yet</option>
          </select>
        </label>
        {/* Honeypot field, hidden from people and screen readers */}
        <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
          <label>
            Company <input name="company" tabIndex={-1} autoComplete="off" />
          </label>
        </div>
        <label className="col-span-2 flex items-start gap-3">
          <input name="consent" type="checkbox" required className="mt-1 h-4 w-4 accent-violet" />
          <span className="text-sm text-muted">
            Email me Care Gawds launch updates. I can unsubscribe at any time. See our{" "}
            <Link href="/privacy" className="font-semibold text-violet underline-offset-2 hover:underline">
              Privacy Policy
            </Link>
            .
          </span>
        </label>
      </div>
      {status === "error" && (
        <p role="alert" className="mt-4 rounded-lg bg-red-50 px-4 py-2 text-sm text-red-700">{error}</p>
      )}
      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-primary mt-6 h-13 w-full text-[16px] disabled:translate-y-0 disabled:opacity-60"
      >
        {status === "sending" ? "Signing you up…" : "Notify Me at Launch"}
      </button>
    </form>
  );
}
