import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { demoCaregivers, findCaregiver, liveCaregivers } from "@/data/caregivers";
import { CalendarIcon, ChatIcon, CheckCircleIcon, ClockIcon, PinIcon, ProfileIcon } from "@/components/Icons";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return [...liveCaregivers, ...demoCaregivers].map((c) => ({ slug: c.slug }));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const c = findCaregiver((await params).slug);
  if (!c) return {};
  return {
    title: c.isDemo ? "Example Caregiver Profile" : `${c.displayName}, ${c.careTypes[0]} in ${c.location}`,
    description: c.isDemo ? "An example showing what Care Gawds caregiver profiles will look like." : c.shortBio,
    robots: c.isDemo ? { index: false, follow: false } : undefined,
  };
}

export default async function CaregiverProfilePage({ params }: Params) {
  const c = findCaregiver((await params).slug);
  if (!c) notFound();

  const details = [
    { icon: ClockIcon, label: "Experience", value: `${c.yearsExperience} years` },
    { icon: ProfileIcon, label: "Care Type", value: c.careTypes.join(" / ") },
    { icon: CalendarIcon, label: "Schedule", value: c.availabilitySummary },
    { icon: CheckCircleIcon, label: "Rate", value: `$${c.hourlyRate.min} – $${c.hourlyRate.max} / hour` },
  ];

  return (
    <>
      {c.isDemo && (
        <div className="border-b border-amber-200 bg-amber-50">
          <p className="mx-auto max-w-7xl px-5 py-3 text-center text-[14px] font-semibold text-amber-900 sm:px-6 lg:px-8">
            Example profile. This sample shows how caregiver profiles will look. It is not a real caregiver.
          </p>
        </div>
      )}

      <section className="bg-[linear-gradient(to_bottom,#fffcfa_0%,#f6effc_100%)]">
        <div className="mx-auto max-w-6xl px-5 pb-10 pt-8 sm:px-6 lg:px-8 lg:pb-14 lg:pt-12">
          <Link href="/find-a-caregiver" className="text-[14px] font-semibold text-violet hover:text-plum">
            ← Back to Find a Caregiver
          </Link>
          <div className="mt-6 grid gap-6 sm:grid-cols-[220px_1fr] sm:gap-8 lg:grid-cols-[300px_1fr] lg:gap-12">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-[260px] overflow-hidden rounded-[28px] shadow-lifted sm:max-w-none">
              <Image
                src={c.photo}
                alt={`Photo of ${c.displayName}`}
                fill
                priority
                placeholder="blur"
                sizes="(min-width: 1024px) 300px, 260px"
                className="object-cover object-[50%_20%]"
              />
            </div>
            <div className="text-center sm:self-center sm:text-left">
              <h1 className="text-[2.3rem] font-extrabold leading-tight tracking-[-0.04em] text-plum sm:text-5xl">{c.displayName}</h1>
              <div className="mt-3 flex flex-wrap justify-center gap-2 sm:justify-start">
                {c.careTypes.map((t) => (
                  <span key={t} className="rounded-full bg-lavender px-3 py-1 text-[13px] font-bold text-violet">
                    {t}
                  </span>
                ))}
              </div>
              <ul className="mt-5 space-y-2 text-[15.5px] text-ink/85">
                <li className="flex items-center justify-center gap-2.5 sm:justify-start">
                  <ClockIcon className="h-5 w-5 text-violet" />
                  {c.yearsExperience} Years Experience
                </li>
                <li className="flex items-center justify-center gap-2.5 sm:justify-start">
                  <PinIcon className="h-5 w-5 text-violet" />
                  {c.location}
                </li>
                <li className="flex items-center justify-center gap-2.5 sm:justify-start">
                  <CalendarIcon className="h-5 w-5 text-violet" />
                  Available {c.availabilitySummary}
                </li>
              </ul>
              <p className="mt-4 text-2xl font-extrabold text-plum">
                ${c.hourlyRate.min}–${c.hourlyRate.max}
                <span className="text-[15px] font-semibold text-muted"> / hour</span>
              </p>
              <div className="mt-6 flex flex-col items-center gap-2 sm:items-start">
                <button type="button" disabled className="btn-primary h-13 cursor-not-allowed px-8 opacity-60 hover:translate-y-0">
                  <ChatIcon className="h-5 w-5" /> Message {c.displayName.split(" ")[0]}
                </button>
                <p className="text-[13px] text-muted">Secure messaging is coming soon.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 pb-16 pt-8 sm:px-6 lg:grid-cols-[1fr_340px] lg:gap-10 lg:px-8 lg:pb-24">
          <div className="space-y-6">
            <article className="rounded-[24px] bg-white p-6 shadow-soft ring-1 ring-lavender-deep/70 sm:p-8">
              <h2 className="text-xl font-extrabold tracking-tight text-plum">About Me</h2>
              <p className="mt-3 leading-[1.75] text-ink/85">{c.about}</p>
              <p className="mt-3 text-[12.5px] text-muted">Written by the caregiver.</p>
            </article>
            <article className="rounded-[24px] bg-white p-6 shadow-soft ring-1 ring-lavender-deep/70 sm:p-8">
              <h2 className="text-xl font-extrabold tracking-tight text-plum">Experience</h2>
              <ul className="mt-4 space-y-3">
                {c.experience.map((e) => (
                  <li key={e} className="flex gap-3 text-ink/85">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet" />
                    {e}
                  </li>
                ))}
              </ul>
            </article>
            <article className="rounded-[24px] bg-white p-6 shadow-soft ring-1 ring-lavender-deep/70 sm:p-8">
              <h2 className="text-xl font-extrabold tracking-tight text-plum">Skills</h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {c.skills.map((s) => (
                  <li key={s} className="rounded-full bg-lavender px-4 py-2 text-[14px] font-semibold text-plum">
                    {s}
                  </li>
                ))}
              </ul>
            </article>
          </div>

          <aside className="space-y-6">
            <div className="rounded-[24px] bg-white p-6 shadow-soft ring-1 ring-lavender-deep/70 sm:p-7">
              <h2 className="text-lg font-extrabold tracking-tight text-plum">Details</h2>
              <dl className="mt-4 space-y-3.5">
                {details.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex gap-3">
                    <Icon className="mt-0.5 h-5 w-5 shrink-0 text-violet" />
                    <div>
                      <dt className="text-[12.5px] font-semibold uppercase tracking-wider text-muted">{label}</dt>
                      <dd className="font-semibold text-ink">{value}</dd>
                    </div>
                  </div>
                ))}
              </dl>
            </div>
            <div className="rounded-[24px] bg-white p-6 shadow-soft ring-1 ring-lavender-deep/70 sm:p-7">
              <h2 className="text-lg font-extrabold tracking-tight text-plum">Qualifications</h2>
              <ul className="mt-4 space-y-3">
                {c.qualifications.map((q) => (
                  <li key={q.label} className="flex items-start justify-between gap-3">
                    <span className="font-semibold text-ink">{q.label}</span>
                    <span
                      className={`shrink-0 rounded-full px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider ${q.verified ? "bg-emerald-50 text-emerald-700" : "bg-lavender text-muted"}`}
                    >
                      {q.verified ? "Verified" : "Self-reported"}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-[12.5px] leading-relaxed text-muted">
                Self-reported information is provided by the caregiver and has not been independently verified by Care
                Gawds. Families should confirm credentials and complete their own screening before hiring.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
