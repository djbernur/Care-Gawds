import Image from "next/image";
import Link from "next/link";
import {
  ArrowRightIcon,
  CalendarIcon,
  CheckCircleIcon,
  ChildIcon,
  HandshakeIcon,
  HeartIcon,
  PhoneIcon,
  PinIcon,
  ProfileIcon,
  SearchIcon,
  SeniorIcon,
  UserPlusIcon,
} from "@/components/Icons";
import { WaitlistForm } from "@/components/WaitlistForm";
import { AppShowcase } from "@/components/AppShowcase";
import { siteUrl } from "@/lib/site";
import heroImg from "../../public/images/family-hero.png";
import recruitImg from "../../public/images/caregiver-recruitment.png";
import familyImg from "../../public/images/family-care.png";

const benefits = [
  { icon: ProfileIcon, title: "Find the Right Fit", text: "Explore caregiver profiles, experience, and availability." },
  { icon: HeartIcon, title: "Care That Fits Your Life", text: "Find caregivers who match your family’s needs and schedule." },
  { icon: PhoneIcon, title: "Stay Connected", text: "Our upcoming app will make managing everyday care easier." },
];

const categories = [
  { icon: ChildIcon, title: "Childcare", sub: "Nannies & Babysitters" },
  { icon: SeniorIcon, title: "Senior Care", sub: "Coming Soon" },
  { icon: CalendarIcon, title: "Flexible Schedules", sub: "Part-Time or Full-Time" },
  { icon: PinIcon, title: "Local Caregivers", sub: "Starting in Southern California" },
];


const steps = [
  { icon: SearchIcon, title: "Search", text: "Find caregivers in your area." },
  { icon: HandshakeIcon, title: "Connect", text: "Explore profiles, compare qualifications, and communicate with caregivers." },
  { icon: UserPlusIcon, title: "Hire", text: "Interview, complete appropriate checks, and make arrangements directly." },
  { icon: PhoneIcon, title: "Manage", text: "Use the Care Gawds app to manage schedules, hours, and care updates.", soon: true },
];

const caregiverPerks = [
  { title: "Set Your Schedule", text: "Choose when you’re available to work." },
  { title: "Connect With Families", text: "Create a profile and help families discover your services." },
  { title: "Build Your Experience", text: "Showcase your skills, experience, and qualifications." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Care Gawds",
  url: siteUrl,
  description: "An online marketplace connecting families with nannies, babysitters, and caregivers.",
  areaServed: "Southern California",
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ───────────── HERO ───────────── */}
      <section className="relative overflow-hidden bg-cream">
        {/* soft ambient glow behind the copy */}
        <div aria-hidden="true" className="pointer-events-none absolute -left-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(closest-side,#efe2fa,transparent)]" />

        <div className="relative">
          {/* Desktop photograph, feathered into the background */}
          <div className="absolute inset-y-0 right-0 hidden w-[52%] lg:block">
            <Image
              src={heroImg}
              alt="A smiling mother hugging her two young children on the couch"
              fill
              priority
              placeholder="blur"
              sizes="52vw"
              className="object-cover object-[42%_28%]"
            />
            <div className="absolute inset-y-0 left-0 w-[38%] bg-gradient-to-r from-cream via-cream/55 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-cream via-cream/40 to-transparent" />
          </div>

          <div className="relative mx-auto max-w-7xl px-5 pb-8 pt-10 sm:px-6 sm:pt-14 lg:flex lg:min-h-[590px] lg:items-center lg:px-8 lg:pb-28 lg:pt-14">
            <div className="max-w-xl lg:max-w-[600px] xl:max-w-[720px]">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3.5 py-1.5 text-[13px] font-semibold text-plum shadow-soft ring-1 ring-lavender-deep">
                <span className="h-2 w-2 rounded-full bg-violet" aria-hidden="true" />
                Launching in Southern California
              </span>
              <h1 className="mt-5 text-[2.45rem] font-extrabold leading-[1.04] tracking-[-0.04em] text-plum sm:text-[3.4rem] lg:text-[3.4rem] xl:text-[3.75rem] [text-wrap:wrap]">
                Exceptional Care.{" "}
                <span className="block bg-gradient-to-r from-plum via-[#6a1590] to-violet bg-clip-text pb-1 text-transparent">
                  Complete Peace of&nbsp;Mind.
                </span>
              </h1>
              <p className="mt-5 max-w-[30rem] text-[17px] leading-[1.7] text-ink/80 sm:text-lg">
                Find caring, qualified nannies and caregivers for the people who matter most. From finding the right
                match to managing everyday care, Care Gawds makes it easier.
              </p>
              <div className="mt-8 grid gap-3 sm:flex sm:gap-4">
                <Link href="/find-a-caregiver" className="btn-primary h-14 text-[17px]">
                  <SearchIcon className="h-5 w-5" /> Find a Caregiver
                </Link>
                <Link href="/become-a-caregiver" className="btn-secondary h-14 text-[17px]">
                  <UserPlusIcon className="h-5 w-5" /> Become a Caregiver
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile / tablet photograph */}
        <div className="relative mx-5 aspect-[5/4] overflow-hidden rounded-[28px] shadow-lifted sm:mx-6 sm:aspect-[16/10] lg:hidden">
          <Image
            src={heroImg}
            alt="A smiling mother hugging her two young children on the couch"
            fill
            priority
            placeholder="blur"
            sizes="100vw"
            className="object-cover object-[50%_30%]"
          />
        </div>

        {/* Benefits card */}
        <div className="relative mx-auto max-w-7xl px-5 pt-6 sm:px-6 lg:-mt-20 lg:px-8 lg:pt-0">
          <ul className="grid divide-y divide-lavender-deep/80 rounded-[28px] bg-white/90 px-5 shadow-lifted ring-1 ring-lavender-deep/70 backdrop-blur-md sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-0 sm:py-7">
            {benefits.map(({ icon: Icon, title, text }) => (
              <li key={title} className="flex gap-4 py-4 sm:px-7 sm:py-0 lg:px-9">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-lavender to-lavender-deep text-violet">
                  <Icon className="h-[22px] w-[22px]" />
                </span>
                <div>
                  <h2 className="text-[16px] font-bold tracking-tight text-plum sm:text-[17px]">{title}</h2>
                  <p className="mt-0.5 text-[14px] leading-relaxed text-muted sm:text-[15px]">{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Types of care — light row, no heavy borders */}
        <div className="relative mx-auto max-w-7xl px-5 pb-10 pt-6 sm:px-6 lg:px-8 lg:pb-12 lg:pt-12">
          <h2 className="sr-only">Types of care</h2>
          <ul className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-6">
            {categories.map(({ icon: Icon, title, sub }) => (
              <li
                key={title}
                className="flex flex-col items-center gap-2 rounded-2xl bg-white/60 px-3 py-4 text-center ring-1 ring-lavender-deep/60 md:flex-row md:justify-center md:gap-3 md:bg-transparent md:px-0 md:py-0 md:text-left md:ring-0"
              >
                <Icon className="h-7 w-7 shrink-0 text-violet md:h-8 md:w-8" />
                <div>
                  <p className="text-[14px] font-bold leading-tight text-plum md:text-[15px]">{title}</p>
                  <p className="text-[12px] leading-snug text-muted md:text-[13px]">{sub}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <AppShowcase
        id="app"
        title="Care Doesn’t Stop at Hiring."
        text="Finding the right caregiver is just the beginning. Our upcoming Care Gawds app will help families stay organized, connected, and informed throughout the caregiving experience."
      />

      {/* ───────────── HOW IT WORKS ───────────── */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-5 pb-14 pt-4 sm:px-6 lg:px-8 lg:pb-24 lg:pt-8">
          <div className="text-center">
            <p className="eyebrow">How It Works</p>
            <h2 className="mt-3 text-[2.1rem] font-extrabold leading-tight tracking-[-0.035em] text-plum sm:text-5xl">
              Simple. Safe. Stress-Free.
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-[17px] text-muted">Find, hire, and manage care in just a few steps.</p>
          </div>

          <ol className="relative mx-auto mt-10 max-w-md lg:mt-16 lg:grid lg:max-w-none lg:grid-cols-4 lg:gap-8">
            {/* desktop connector */}
            <div aria-hidden="true" className="absolute left-[12.5%] right-[12.5%] top-8 hidden border-t-2 border-dashed border-violet/25 lg:block" />
            {steps.map(({ icon: Icon, title, text, soon }, i) => (
              <li key={title} className="relative flex gap-5 pb-8 last:pb-0 lg:flex-col lg:items-center lg:pb-0 lg:text-center">
                {/* mobile connector */}
                {i < steps.length - 1 && (
                  <span aria-hidden="true" className="absolute bottom-0 left-7 top-14 w-px bg-gradient-to-b from-violet/35 to-violet/10 lg:hidden" />
                )}
                <span className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white text-violet shadow-soft ring-1 ring-lavender-deep lg:h-16 lg:w-16">
                  <Icon className="h-6 w-6 lg:h-7 lg:w-7" />
                  <span className="absolute -right-1.5 -top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-violet text-[12px] font-bold text-white ring-2 ring-cream">
                    {i + 1}
                  </span>
                </span>
                <div className="pt-1 lg:pt-5">
                  <h3 className="flex items-center gap-2 text-lg font-bold tracking-tight text-plum lg:justify-center lg:text-xl">
                    {title}
                    {soon && (
                      <span className="rounded-full bg-lavender px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-violet">
                        App soon
                      </span>
                    )}
                  </h3>
                  <p className="mt-1 text-[15px] leading-relaxed text-muted lg:mx-auto lg:mt-2 lg:max-w-[15rem]">{text}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-10 text-center lg:mt-14">
            <Link href="/how-it-works" className="group inline-flex items-center gap-2 font-bold text-violet transition-colors hover:text-plum">
              Learn more about how it works
              <ArrowRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* ───────────── BECOME A CAREGIVER ───────────── */}
      <section className="bg-cream px-0 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl overflow-hidden bg-plum shadow-lifted sm:rounded-[32px] lg:grid-cols-[1fr_1.05fr]">
          <div className="relative aspect-[4/3] sm:aspect-[16/9] lg:aspect-auto lg:min-h-[460px]">
            <Image
              src={recruitImg}
              alt="A smiling caregiver in a purple polo shirt"
              fill
              placeholder="blur"
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-[50%_22%]"
            />
            <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-plum to-transparent lg:inset-y-0 lg:left-auto lg:right-0 lg:h-auto lg:w-24 lg:bg-gradient-to-l" />
          </div>
          <div className="relative flex flex-col justify-center bg-[radial-gradient(120%_90%_at_100%_0%,#6a1a96_0%,#42136b_55%)] px-6 pb-10 pt-6 sm:px-12 sm:py-12 lg:px-14">
            <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#dcbcf2]">For Caregivers</p>
            <h2 className="mt-3 text-[2rem] font-extrabold leading-[1.1] tracking-[-0.035em] text-white sm:text-[2.6rem]">
              Become a Caregiver with Care&nbsp;Gawds.
            </h2>
            <p className="mt-4 max-w-md text-[16px] leading-[1.7] text-white/75 sm:text-[17px]">
              Turn your experience and passion for caregiving into opportunities with families in your community.
            </p>
            <ul className="mt-7 space-y-4">
              {caregiverPerks.map((p) => (
                <li key={p.title} className="flex gap-3.5">
                  <CheckCircleIcon className="mt-0.5 h-6 w-6 shrink-0 text-[#d9a8f5]" />
                  <div>
                    <p className="font-bold text-white">{p.title}</p>
                    <p className="text-[14.5px] leading-relaxed text-white/65">{p.text}</p>
                  </div>
                </li>
              ))}
            </ul>
            <Link
              href="/become-a-caregiver"
              className="group mt-9 inline-flex h-14 w-full items-center justify-center gap-2 rounded-2xl bg-white px-7 font-bold text-plum shadow-[0_10px_30px_-10px_rgba(0,0,0,0.45)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-lavender sm:w-fit"
            >
              Apply to Become a Caregiver
              <ArrowRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* ───────────── FAMILY LAUNCH UPDATES ───────────── */}
      <section id="updates" className="relative scroll-mt-20 overflow-hidden bg-gradient-to-b from-cream via-lavender to-[#ead9f7]">
        <div aria-hidden="true" className="pointer-events-none absolute -right-40 top-10 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(closest-side,rgba(130,22,166,0.12),transparent)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 pb-14 pt-16 sm:px-6 lg:grid-cols-[1fr_1fr] lg:gap-16 lg:px-8 lg:pb-24 lg:pt-24">
          <div>
            <p className="eyebrow">For Families</p>
            <h2 className="mt-3 text-[2.1rem] font-extrabold leading-[1.08] tracking-[-0.035em] text-plum sm:text-5xl">
              Great Care Is Coming to Your Neighborhood.
            </h2>
            <p className="mt-4 max-w-lg text-[17px] leading-[1.7] text-ink/80">
              We&apos;re welcoming our first caregivers in Southern California now. Tell us where you are and the care
              you need, and we&apos;ll let you know as soon as you can start browsing profiles.
            </p>
            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2.5 text-[14.5px] font-semibold text-plum">
              {["Free to join", "Launch updates only", "Unsubscribe anytime"].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <CheckCircleIcon className="h-5 w-5 text-violet" /> {t}
                </li>
              ))}
            </ul>
            <div className="relative mt-8 hidden aspect-[2.15/1] max-w-lg overflow-hidden rounded-[28px] shadow-lifted sm:block">
              <Image
                src={familyImg}
                alt="A mother and daughter sharing a warm hug"
                fill
                placeholder="blur"
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover object-[50%_35%]"
              />
            </div>
          </div>
          <WaitlistForm />
        </div>
      </section>
    </>
  );
}
