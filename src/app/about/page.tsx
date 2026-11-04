import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { HeartIcon, PinIcon, SeniorIcon } from "@/components/Icons";
import familyImg from "../../../public/images/family-care.png";
import heroImg from "../../../public/images/family-hero.png";
import playingImg from "../../../public/images/caregiver-playing.png";
import readingImg from "../../../public/images/caregiver-reading.png";

export const metadata: Metadata = {
  title: "About Care Gawds",
  description:
    "Care Gawds was inspired by a simple challenge: finding dependable childcare and making everyday caregiving easier to manage.",
  alternates: { canonical: "/about" },
  openGraph: { title: "About Care Gawds", url: "/about" },
};

const pillars = [
  { icon: HeartIcon, title: "Our Mission", text: "To make finding and managing care simpler, more accessible, and more connected." },
  { icon: SeniorIcon, title: "Our Commitment", text: "A respectful, supportive experience for both families and caregivers." },
  { icon: PinIcon, title: "Our Vision", text: "To build a trusted nationwide platform that brings families and caregivers together." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Care Gawds"
        title="Care That Connects Us."
        text={<p className="max-w-[30rem]">We&apos;re here to make care simpler and more connected for families and caregivers.</p>}
        image={familyImg}
        imageAlt="A mother and daughter sharing a warm hug"
        imagePosition="55% 35%"
      />

      {/* Story */}
      <section className="bg-cream">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 lg:py-20">
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <div className="relative col-span-2 aspect-[16/9] overflow-hidden rounded-[28px] shadow-lifted">
              <Image src={heroImg} alt="A smiling mother hugging her two young children" fill placeholder="blur" sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover object-[45%_30%]" />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[22px] shadow-soft">
              <Image src={playingImg} alt="A caregiver playing with blocks alongside a young boy" fill placeholder="blur" sizes="(min-width: 1024px) 22vw, 50vw" className="object-cover" />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[22px] shadow-soft">
              <Image src={readingImg} alt="A caregiver reading with two children" fill placeholder="blur" sizes="(min-width: 1024px) 22vw, 50vw" className="object-cover" />
            </div>
          </div>
          <div>
            <p className="eyebrow">Our Story</p>
            <h2 className="mt-3 text-[2rem] font-extrabold leading-[1.1] tracking-[-0.035em] text-plum sm:text-[2.6rem]">
              Born from a simple challenge.
            </h2>
            <div className="mt-5 space-y-4 text-[17px] leading-[1.75] text-ink/80">
              <p>
                Care Gawds was inspired by a simple challenge: finding dependable childcare and making everyday caregiving
                easier to manage.
              </p>
              <p>We believe families deserve an easier way to connect with caregivers who fit their needs.</p>
              <p>
                Our vision goes beyond helping families find care. We want to create a connected experience that supports
                families and caregivers throughout their relationship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / commitment / vision */}
      <section className="bg-[linear-gradient(to_bottom,#fffcfa_0%,#f4eafb_40%,#fffcfa_100%)]">
        <div className="mx-auto max-w-6xl px-5 pb-14 pt-4 sm:px-6 lg:px-8 lg:pb-24">
          <ul className="grid gap-4 md:grid-cols-3 md:gap-6">
            {pillars.map(({ icon: Icon, title, text }) => (
              <li key={title} className="rounded-[28px] bg-white p-7 shadow-soft ring-1 ring-lavender-deep/70 transition-transform duration-200 hover:-translate-y-0.5 sm:p-8">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-lavender to-lavender-deep text-violet">
                  <Icon className="h-6 w-6" />
                </span>
                <h2 className="mt-5 text-xl font-extrabold tracking-tight text-plum">{title}</h2>
                <p className="mt-2 leading-relaxed text-muted">{text}</p>
              </li>
            ))}
          </ul>

          <div className="mt-6 rounded-[28px] bg-white/70 p-7 text-center ring-1 ring-lavender-deep/70 sm:p-10">
            <p className="eyebrow">Find Care · Manage Care</p>
            <p className="mx-auto mt-3 max-w-2xl text-[19px] font-semibold leading-relaxed text-plum sm:text-[21px]">
              CareGawds.com helps families discover caregivers. The upcoming Care Gawds app will help them manage
              everyday care once they&apos;ve hired. We&apos;re starting with childcare in Southern California, with senior
              care and more communities to follow.
            </p>
          </div>
        </div>
      </section>

      <CtaBand
        title="Be part of what we’re building."
        text="Families can join our launch list, and caregivers can apply today."
        primary={{ href: "/become-a-caregiver", label: "Become a Caregiver" }}
        secondary={{ href: "/#updates", label: "Get Launch Updates" }}
      />
    </>
  );
}
