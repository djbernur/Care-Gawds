"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { Caregiver } from "@/data/caregivers";
import { AVAILABILITY, CARE_TYPES, QUALIFICATIONS } from "@/data/options";
import { ArrowRightIcon, CalendarIcon, ChecklistIcon, CloseIcon, PinIcon, SearchIcon } from "./Icons";
import { WaitlistForm } from "./WaitlistForm";

const EXPERIENCE_FILTERS = [
  { label: "Any", min: 0 },
  { label: "1+ years", min: 1 },
  { label: "3+ years", min: 3 },
  { label: "5+ years", min: 5 },
];

const control =
  "h-12 w-full rounded-xl border border-lavender-deep bg-white px-4 text-[15px] text-ink transition-colors placeholder:text-muted/60 hover:border-violet/40 focus:border-violet focus:outline-none focus:ring-4 focus:ring-violet/15";

function toggle<T>(list: T[], v: T) {
  return list.includes(v) ? list.filter((x) => x !== v) : [...list, v];
}

function CheckList({ title, options, value, onChange }: { title: string; options: readonly string[]; value: string[]; onChange: (v: string[]) => void }) {
  return (
    <fieldset>
      <legend className="text-[14px] font-bold text-plum">{title}</legend>
      <div className="mt-3 space-y-2.5">
        {options.map((o) => (
          <label key={o} className="flex cursor-pointer items-center gap-3 text-[14.5px] text-ink/85">
            <input type="checkbox" checked={value.includes(o)} onChange={() => onChange(toggle(value, o))} className="h-4 w-4 rounded accent-violet" />
            {o}
          </label>
        ))}
      </div>
    </fieldset>
  );
}

export function Directory({ caregivers }: { caregivers: Caregiver[] }) {
  const [location, setLocation] = useState("");
  const [careTypes, setCareTypes] = useState<string[]>([]);
  const [availability, setAvailability] = useState<string[]>([]);
  const [minYears, setMinYears] = useState(0);
  const [maxRate, setMaxRate] = useState(50);
  const [quals, setQuals] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  const results = useMemo(() => {
    const q = location.trim().toLowerCase();
    return caregivers.filter(
      (c) =>
        (!q || c.location.toLowerCase().includes(q)) &&
        (careTypes.length === 0 || careTypes.some((t) => c.careTypes.includes(t as Caregiver["careTypes"][number]))) &&
        (availability.length === 0 || availability.some((a) => c.availability.includes(a as Caregiver["availability"][number]))) &&
        c.yearsExperience >= minYears &&
        c.hourlyRate.min <= maxRate &&
        quals.every((q2) => c.qualifications.some((x) => x.label === q2)),
    );
  }, [caregivers, location, careTypes, availability, minYears, maxRate, quals]);

  const activeCount = careTypes.length + availability.length + quals.length + (minYears ? 1 : 0) + (maxRate < 50 ? 1 : 0);
  const reset = () => {
    setCareTypes([]);
    setAvailability([]);
    setMinYears(0);
    setMaxRate(50);
    setQuals([]);
  };
  const live = caregivers.length > 0;

  return (
    <>
      {/* Search banner */}
      <section className="relative overflow-hidden bg-[radial-gradient(120%_140%_at_50%_0%,#8216a6_0%,#5a1786_45%,#42136b_100%)]">
        <div aria-hidden="true" className="pointer-events-none absolute -left-24 top-0 h-80 w-80 rounded-full bg-[radial-gradient(closest-side,rgba(227,184,255,0.25),transparent)]" />
        <div className="relative mx-auto max-w-5xl px-5 pb-24 pt-12 text-center sm:px-6 lg:pb-28 lg:pt-16">
          <h1 className="text-[2.3rem] font-extrabold leading-[1.06] tracking-[-0.04em] text-white sm:text-5xl lg:text-[3.4rem]">
            Find the Right Caregiver for Your Family.
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-[17px] leading-relaxed text-white/75">
            Search nannies, babysitters, and childcare providers by location, availability, and experience.
          </p>
        </div>
      </section>

      <div className="relative mx-auto -mt-16 max-w-5xl px-5 sm:px-6">
        <form
          role="search"
          onSubmit={(e) => {
            e.preventDefault();
            document.getElementById("results")?.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
          className="grid gap-3 rounded-[24px] bg-white p-3 shadow-lifted ring-1 ring-lavender-deep/70 sm:grid-cols-[1.4fr_1fr_1fr_auto] sm:p-3.5"
        >
          <label className="relative">
            <span className="sr-only">City or ZIP code</span>
            <PinIcon className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-violet" />
            <input value={location} onChange={(e) => setLocation(e.target.value)} placeholder="City or ZIP code" className={`${control} pl-11`} />
          </label>
          <label>
            <span className="sr-only">Care type</span>
            <select value={careTypes[0] ?? ""} onChange={(e) => setCareTypes(e.target.value ? [e.target.value] : [])} className={control}>
              <option value="">Any care type</option>
              {CARE_TYPES.map((t) => <option key={t}>{t}</option>)}
            </select>
          </label>
          <label>
            <span className="sr-only">Availability</span>
            <select value={availability[0] ?? ""} onChange={(e) => setAvailability(e.target.value ? [e.target.value] : [])} className={control}>
              <option value="">Any availability</option>
              {AVAILABILITY.map((t) => <option key={t}>{t}</option>)}
            </select>
          </label>
          <button type="submit" className="btn-primary h-12 px-6">
            <SearchIcon className="h-5 w-5" /> Search
          </button>
        </form>
      </div>

      <section id="results" className="scroll-mt-24 bg-cream">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 sm:px-6 lg:grid-cols-[270px_1fr] lg:gap-10 lg:px-8 lg:py-14">
          {/* Filters */}
          <aside aria-label="Filters">
            <button
              type="button"
              onClick={() => setShowFilters((s) => !s)}
              aria-expanded={showFilters}
              className="btn-secondary h-12 w-full lg:hidden"
            >
              {showFilters ? <CloseIcon className="h-5 w-5" /> : <ChecklistIcon className="h-5 w-5" />}
              {showFilters ? "Hide Filters" : `Filters${activeCount ? ` (${activeCount})` : ""}`}
            </button>
            <div className={`${showFilters ? "mt-4 block" : "hidden"} space-y-7 rounded-[24px] bg-white p-6 shadow-soft ring-1 ring-lavender-deep/70 lg:sticky lg:top-24 lg:mt-0 lg:block`}>
              <div className="flex items-center justify-between">
                <p className="text-[15px] font-extrabold text-plum">Filter Results</p>
                {activeCount > 0 && (
                  <button type="button" onClick={reset} className="text-[13px] font-semibold text-violet hover:text-plum">Clear all</button>
                )}
              </div>
              <CheckList title="Care Type" options={CARE_TYPES} value={careTypes} onChange={setCareTypes} />
              <p className="-mt-4 text-[12.5px] text-muted">Senior care is coming soon.</p>
              <CheckList title="Availability" options={AVAILABILITY} value={availability} onChange={setAvailability} />
              <fieldset>
                <legend className="text-[14px] font-bold text-plum">Experience</legend>
                <div className="mt-3 grid grid-cols-2 gap-2">
                  {EXPERIENCE_FILTERS.map((f) => (
                    <button
                      key={f.label}
                      type="button"
                      onClick={() => setMinYears(f.min)}
                      aria-pressed={minYears === f.min}
                      className={`rounded-xl px-3 py-2 text-[13.5px] font-semibold transition-colors ${minYears === f.min ? "bg-violet text-white" : "bg-lavender/70 text-plum hover:bg-lavender-deep"}`}
                    >
                      {f.label}
                    </button>
                  ))}
                </div>
              </fieldset>
              <fieldset>
                <legend className="flex w-full justify-between text-[14px] font-bold text-plum">
                  Hourly Rate <span className="font-semibold text-violet">{maxRate >= 50 ? "Any" : `Up to $${maxRate}`}</span>
                </legend>
                <input
                  type="range"
                  min={15}
                  max={50}
                  step={1}
                  value={maxRate}
                  onChange={(e) => setMaxRate(+e.target.value)}
                  aria-label="Maximum hourly rate"
                  className="mt-3 w-full accent-violet"
                />
                <div className="flex justify-between text-[12px] text-muted"><span>$15</span><span>$50+</span></div>
              </fieldset>
              <CheckList title="Qualifications" options={QUALIFICATIONS.slice(0, 5)} value={quals} onChange={setQuals} />
            </div>
          </aside>

          {/* Results */}
          <div>
            {live && (
              <div className="mb-5 flex items-center justify-between">
                <p className="text-[15px] font-bold text-plum">
                  {results.length} {results.length === 1 ? "caregiver" : "caregivers"}
                </p>
              </div>
            )}

            {live && results.length > 0 ? (
              <ul className="space-y-4">
                {results.map((c) => (
                  <li key={c.slug} className="group flex flex-col gap-5 rounded-[24px] bg-white p-5 shadow-soft ring-1 ring-lavender-deep/70 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lifted sm:flex-row sm:items-center sm:p-6">
                    <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-2xl">
                      <Image src={c.photo} alt={`Photo of ${c.displayName}`} fill sizes="96px" className="object-cover object-top" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h2 className="text-lg font-extrabold tracking-tight text-plum">{c.displayName}</h2>
                        {c.isDemo && (
                          <span className="rounded-full bg-amber-100 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-amber-800">Example profile</span>
                        )}
                      </div>
                      <p className="text-[14px] font-semibold text-violet">{c.careTypes.join(" · ")}</p>
                      <p className="mt-1.5 flex flex-wrap gap-x-4 gap-y-1 text-[13.5px] text-muted">
                        <span className="flex items-center gap-1"><PinIcon className="h-4 w-4" />{c.location}</span>
                        <span className="flex items-center gap-1"><CalendarIcon className="h-4 w-4" />{c.availabilitySummary}</span>
                        <span>{c.yearsExperience} years experience</span>
                      </p>
                      <p className="mt-2 text-[14.5px] text-ink/80">{c.shortBio}</p>
                    </div>
                    <div className="flex items-center justify-between gap-4 sm:flex-col sm:items-end">
                      <p className="text-[15px] font-extrabold text-plum">${c.hourlyRate.min}–${c.hourlyRate.max}<span className="text-[13px] font-semibold text-muted">/hr</span></p>
                      <Link href={`/caregivers/${c.slug}`} className="btn-secondary h-11 px-5 text-[14px]">View Profile</Link>
                    </div>
                  </li>
                ))}
              </ul>
            ) : live ? (
              <div className="rounded-[24px] bg-white p-10 text-center shadow-soft ring-1 ring-lavender-deep/70">
                <p className="text-lg font-bold text-plum">No caregivers match those filters.</p>
                <button type="button" onClick={reset} className="mt-4 font-semibold text-violet hover:text-plum">Clear filters</button>
              </div>
            ) : (
              <div className="overflow-hidden rounded-[28px] bg-[linear-gradient(135deg,#ffffff_0%,#f6effc_100%)] shadow-lifted ring-1 ring-lavender-deep/70">
                <div className="grid gap-7 p-5 sm:p-10 xl:grid-cols-[1fr_1.05fr] xl:items-center">
                  <div>
                    <span className="inline-flex items-center gap-2 rounded-full bg-plum px-3.5 py-1.5 text-[12px] font-bold uppercase tracking-[0.14em] text-white">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#e3b8ff]" aria-hidden="true" /> Launching Soon
                    </span>
                    <h2 className="mt-4 text-[1.9rem] font-extrabold leading-[1.1] tracking-[-0.035em] text-plum sm:text-[2.3rem]">
                      Our caregiver directory is almost here.
                    </h2>
                    <p className="mt-3 text-[16px] leading-[1.7] text-ink/80">
                      We&apos;re welcoming our first caregivers in Southern California now. Join the list and we&apos;ll email
                      you as soon as you can browse profiles{location.trim() ? ` near ${location.trim()}` : " in your area"}.
                    </p>
                    <Link href="/caregivers/example-monica" className="group mt-5 inline-flex items-center gap-2 font-bold text-violet hover:text-plum">
                      Preview an example profile
                      <ArrowRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                  <WaitlistForm />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
