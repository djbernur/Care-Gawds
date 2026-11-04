import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { CaregiverApplicationForm } from "@/components/CaregiverApplicationForm";
import { ArrowRightIcon, CalendarIcon, ChecklistIcon, HeartIcon, ProfileIcon, SeniorIcon } from "@/components/Icons";
import recruitImg from "../../../public/images/caregiver-recruitment.png";

export const metadata: Metadata = {
  title: "Become a Caregiver",
  description:
    "Turn your experience and passion for caregiving into opportunities with families in your community. Apply to join Care Gawds.",
  alternates: { canonical: "/become-a-caregiver" },
  openGraph: { title: "Become a Caregiver with Care Gawds", url: "/become-a-caregiver" },
};

const perks = [
  { icon: CalendarIcon, title: "Set Your Schedule", text: "Choose when you’re available to work." },
  { icon: SeniorIcon, title: "Connect With Families", text: "Create a profile and help families discover your services." },
  { icon: ProfileIcon, title: "Build Your Experience", text: "Showcase your skills, experience, and qualifications." },
];

const nextSteps = [
  { title: "Apply", text: "Tell us about your experience. It takes about five minutes." },
  { title: "We review", text: "Our team reviews your application and emails you about next steps." },
  { title: "Build your profile", text: "When the directory opens in your area, you’ll create a profile families can find." },
];

export default function BecomeACaregiverPage() {
  return (
    <>
      <PageHero
        eyebrow="For Caregivers"
        title={<>Become a Caregiver with Care&nbsp;Gawds.</>}
        text={<p className="max-w-[30rem]">Turn your experience and passion for caregiving into opportunities with families in your community.</p>}
        image={recruitImg}
        imageAlt="A smiling caregiver in a purple polo shirt"
        imagePosition="50% 22%"
      >
        <div className="grid gap-3 sm:flex">
          <a href="#apply" className="btn-primary h-14 text-[17px]">
            Apply to Become a Caregiver <ArrowRightIcon className="h-5 w-5" />
          </a>
          <Link href="/how-it-works" className="btn-secondary h-14 text-[17px]">How It Works</Link>
        </div>
      </PageHero>

      {/* Benefits */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-5 pb-10 sm:px-6 lg:px-8 lg:pb-14">
          <ul className="grid gap-4 sm:grid-cols-3 sm:gap-6">
            {perks.map(({ icon: Icon, title, text }) => (
              <li key={title} className="rounded-[24px] bg-white p-6 shadow-soft ring-1 ring-lavender-deep/70 transition-transform duration-200 hover:-translate-y-0.5 sm:p-7">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-lavender to-lavender-deep text-violet">
                  <Icon className="h-6 w-6" />
                </span>
                <h2 className="mt-4 text-lg font-bold tracking-tight text-plum">{title}</h2>
                <p className="mt-1 leading-relaxed text-muted">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Application */}
      <section id="apply" className="scroll-mt-20 bg-[linear-gradient(to_bottom,#fffcfa_0%,#f4eafb_30%,#f2e9fa_80%,#fffcfa_100%)]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 pb-14 pt-10 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14 lg:px-8 lg:pb-24 lg:pt-12">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="eyebrow">Caregiver Application</p>
            <h2 className="mt-3 text-[2.1rem] font-extrabold leading-[1.08] tracking-[-0.035em] text-plum sm:text-[2.6rem]">
              Apply to Become a Caregiver
            </h2>
            <p className="mt-4 text-[17px] leading-[1.7] text-ink/80">
              We&apos;re welcoming our first nannies, babysitters, and childcare providers in Southern California.
            </p>

            <ol className="mt-8 space-y-5">
              {nextSteps.map((s, i) => (
                <li key={s.title} className="relative flex gap-4">
                  {i < nextSteps.length - 1 && <span aria-hidden="true" className="absolute bottom-[-20px] left-[15px] top-9 w-px bg-violet/20" />}
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet text-[13px] font-bold text-white">{i + 1}</span>
                  <div>
                    <p className="font-bold text-plum">{s.title}</p>
                    <p className="text-[15px] leading-relaxed text-muted">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-8 rounded-[24px] bg-white/80 p-5 shadow-soft ring-1 ring-white">
              <p className="flex items-center gap-2 font-bold text-plum"><ChecklistIcon className="h-5 w-5 text-violet" /> To apply, you should</p>
              <ul className="mt-3 space-y-2 text-[15px] text-ink/80">
                <li className="flex gap-2"><HeartIcon className="mt-0.5 h-4 w-4 shrink-0 text-violet" /> Be 18 years of age or older</li>
                <li className="flex gap-2"><HeartIcon className="mt-0.5 h-4 w-4 shrink-0 text-violet" /> Have experience caring for children</li>
                <li className="flex gap-2"><HeartIcon className="mt-0.5 h-4 w-4 shrink-0 text-violet" /> Live or work in an area we serve</li>
              </ul>
            </div>
            <p className="mt-5 text-[13px] leading-relaxed text-muted">
              Care Gawds is a marketplace, not an employer or staffing agency. Caregivers make their own arrangements
              directly with families.
            </p>
          </div>

          <CaregiverApplicationForm />
        </div>
      </section>
    </>
  );
}
