import type { Metadata } from "next";
import Image from "next/image";
import { AppShowcase } from "@/components/AppShowcase";
import { CtaBand } from "@/components/CtaBand";
import { HandshakeIcon, PhoneIcon, SearchIcon, UserPlusIcon, CheckCircleIcon } from "@/components/Icons";
import playingImg from "../../../public/images/caregiver-playing.png";
import readingImg from "../../../public/images/caregiver-reading.png";
import familyImg from "../../../public/images/family-care.png";
import profileImg from "../../../public/images/caregiver-profile.png";

export const metadata: Metadata = {
  title: "How It Works",
  description: "Search, connect, hire, and manage care. See how Care Gawds helps families find caregivers in a few simple steps.",
  alternates: { canonical: "/how-it-works" },
  openGraph: { title: "How Care Gawds Works", url: "/how-it-works" },
};

const steps = [
  {
    icon: SearchIcon,
    title: "Search",
    lead: "Find caregivers in your area.",
    text: "Search by city or ZIP code, then narrow results by care type, availability, experience, and hourly rate.",
    image: profileImg,
    alt: "A smiling caregiver",
    pos: "50% 25%",
  },
  {
    icon: HandshakeIcon,
    title: "Connect",
    lead: "Explore profiles, compare qualifications, and communicate with potential caregivers.",
    text: "Each profile shows experience, skills, and availability. Qualifications are clearly marked as self-reported or verified.",
    image: readingImg,
    alt: "A caregiver reading a picture book with two children",
    pos: "50% 40%",
  },
  {
    icon: UserPlusIcon,
    title: "Hire",
    lead: "Interview candidates, complete appropriate checks, and make arrangements directly with your chosen caregiver.",
    text: "Care Gawds is a marketplace, not an agency. You stay in control of who you hire and how you work together.",
    image: playingImg,
    alt: "A caregiver building with colorful blocks alongside a young boy",
    pos: "50% 40%",
  },
  {
    icon: PhoneIcon,
    title: "Manage",
    lead: "Once available, use the Care Gawds companion app to manage schedules, track hours, and receive care updates.",
    text: "The app is in development and coming soon.",
    image: familyImg,
    alt: "A mother hugging her daughter",
    pos: "50% 35%",
    soon: true,
  },
];

const hiringTips = [
  "Interview candidates by video or in person",
  "Ask for and contact references",
  "Confirm certifications such as CPR and First Aid",
  "Consider a background check through a reputable provider",
  "Agree on pay, schedule, and expectations in writing",
];

export default function HowItWorksPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[linear-gradient(to_bottom,#fffcfa_0%,#f6effc_100%)]">
        <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-0 h-[28rem] w-[50rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(130,22,166,0.10),transparent)]" />
        <div className="relative mx-auto max-w-4xl px-5 pb-12 pt-12 text-center sm:px-6 lg:pb-16 lg:pt-20">
          <p className="eyebrow">How It Works</p>
          <h1 className="mt-3 text-[2.5rem] font-extrabold leading-[1.04] tracking-[-0.04em] text-plum sm:text-6xl">
            Simple. Safe. Stress-Free.
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-[17px] leading-[1.7] text-ink/80 sm:text-lg">
            Find, hire, and manage care in just a few steps.
          </p>
          <ol className="mx-auto mt-9 flex max-w-xl items-center justify-between">
            {steps.map(({ icon: Icon, title }, i) => (
              <li key={title} className="flex flex-1 items-center">
                <a href={`#step-${i + 1}`} className="group flex flex-col items-center gap-2">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-violet shadow-soft ring-1 ring-lavender-deep transition-transform group-hover:-translate-y-0.5 sm:h-14 sm:w-14">
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="text-[13px] font-bold text-plum sm:text-[14px]">{i + 1}. {title}</span>
                </a>
                {i < steps.length - 1 && <span aria-hidden="true" className="mx-1 mb-6 h-px flex-1 border-t-2 border-dashed border-violet/25" />}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-6xl space-y-6 px-5 py-12 sm:px-6 lg:space-y-10 lg:px-8 lg:py-16">
          {steps.map(({ icon: Icon, title, lead, text, image, alt, pos, soon }, i) => (
            <article
              id={`step-${i + 1}`}
              key={title}
              className="grid scroll-mt-24 overflow-hidden rounded-[28px] bg-white shadow-soft ring-1 ring-lavender-deep/70 md:grid-cols-2"
            >
              <div className={`relative aspect-[16/10] md:aspect-auto md:min-h-[300px] ${i % 2 ? "md:order-2" : ""}`}>
                <Image src={image} alt={alt} fill placeholder="blur" sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" style={{ objectPosition: pos }} />
              </div>
              <div className="flex flex-col justify-center p-6 sm:p-10">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-lavender to-lavender-deep text-violet">
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="text-[13px] font-bold uppercase tracking-[0.16em] text-violet">Step {i + 1}</span>
                  {soon && <span className="rounded-full bg-plum px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-white">Coming Soon</span>}
                </div>
                <h2 className="mt-4 text-[1.9rem] font-extrabold tracking-[-0.035em] text-plum sm:text-[2.2rem]">{title}</h2>
                <p className="mt-2 text-[17px] font-semibold leading-relaxed text-ink">{lead}</p>
                <p className="mt-2 leading-relaxed text-muted">{text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Hiring responsibly */}
      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-5 pb-14 sm:px-6 lg:px-8 lg:pb-20">
          <div className="grid gap-8 rounded-[28px] bg-[linear-gradient(135deg,#f6effc_0%,#efe2fa_100%)] p-6 sm:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="eyebrow">Hiring With Confidence</p>
              <h2 className="mt-3 text-[1.9rem] font-extrabold leading-tight tracking-[-0.035em] text-plum sm:text-[2.3rem]">
                You make the final decision.
              </h2>
              <p className="mt-3 leading-relaxed text-ink/80">
                Families interview, screen, and hire caregivers directly. Here are a few steps many families take before
                hiring.
              </p>
            </div>
            <ul className="grid gap-3">
              {hiringTips.map((t) => (
                <li key={t} className="flex items-center gap-3 rounded-2xl bg-white/85 px-4 py-3.5 shadow-soft">
                  <CheckCircleIcon className="h-5 w-5 shrink-0 text-violet" />
                  <span className="text-[15px] font-semibold text-plum">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <AppShowcase
        title="Keep Care Easy with the Care Gawds App."
        text="After you hire, the companion app will help you manage schedules, track hours, and receive photos and updates throughout the day."
      />

      <CtaBand
        title="Ready to find the right caregiver?"
        text="Join the list for launch updates, or apply to become a caregiver today."
        primary={{ href: "/find-a-caregiver", label: "Find a Caregiver" }}
        secondary={{ href: "/become-a-caregiver", label: "Become a Caregiver" }}
      />
    </>
  );
}
