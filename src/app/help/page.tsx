import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Help",
  description: "Answers to common questions about Care Gawds for families and caregivers.",
  alternates: { canonical: "/help" },
};

const faqs = [
  {
    q: "What is Care Gawds?",
    a: "Care Gawds is an online marketplace that will help families discover and connect with nannies, babysitters, and childcare providers. We’re launching first in Southern California.",
  },
  {
    q: "Is Care Gawds a staffing agency?",
    a: "No. Care Gawds is a marketplace, not an employer or staffing agency. Families interview, screen, and hire caregivers directly.",
  },
  {
    q: "When can I start searching for caregivers?",
    a: "Our caregiver directory is launching soon. Join the launch list on our homepage and we’ll email you when you can browse profiles in your area.",
  },
  {
    q: "How do I become a caregiver?",
    a: "Fill out the application on our Become a Caregiver page. We’ll review it and email you about next steps.",
  },
  {
    q: "Are caregivers background checked?",
    a: "Not at this time. Information on caregiver profiles is self-reported unless it is clearly marked as verified. We encourage families to check references and complete their own screening before hiring.",
  },
  {
    q: "What is the Care Gawds app?",
    a: "A companion app, coming soon, that will help families and caregivers manage schedules, clock in and out, share photos and updates, and stay in touch.",
  },
];

export default function HelpPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  return (
    <section className="bg-[linear-gradient(to_bottom,#fffcfa_0%,#f6effc_50%,#fffcfa_100%)]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-3xl px-5 py-14 sm:px-6 lg:py-20">
        <div className="text-center">
          <p className="eyebrow">Help Center</p>
          <h1 className="mt-3 text-[2.4rem] font-extrabold tracking-[-0.04em] text-plum sm:text-5xl">How can we help?</h1>
          <p className="mx-auto mt-3 max-w-lg text-[17px] text-muted">Answers to common questions from families and caregivers.</p>
        </div>
        <div className="mt-10 space-y-3">
          {faqs.map((f) => (
            <details key={f.q} className="group rounded-[20px] bg-white p-5 shadow-soft ring-1 ring-lavender-deep/70 open:shadow-lifted sm:p-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[16.5px] font-bold text-plum">
                {f.q}
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-lavender text-violet transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 leading-relaxed text-ink/80">{f.a}</p>
            </details>
          ))}
        </div>
        <p className="mt-10 text-center text-muted">
          Still have a question? <Link href="/contact" className="font-bold text-violet hover:text-plum">Contact us</Link>
        </p>
      </div>
    </section>
  );
}
