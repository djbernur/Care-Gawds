import Link from "next/link";
import { ArrowRightIcon } from "./Icons";

export function CtaBand({
  title,
  text,
  primary,
  secondary,
}: {
  title: string;
  text: string;
  primary: { href: string; label: string };
  secondary?: { href: string; label: string };
}) {
  return (
    <section className="bg-cream px-0 pb-14 sm:px-6 lg:px-8 lg:pb-24">
      <div className="relative mx-auto max-w-7xl overflow-hidden bg-[radial-gradient(120%_120%_at_100%_0%,#6a1a96_0%,#42136b_60%)] px-6 py-12 text-center shadow-lifted sm:rounded-[32px] sm:px-12 lg:py-16">
        <div aria-hidden="true" className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[radial-gradient(closest-side,rgba(227,184,255,0.25),transparent)]" />
        <h2 className="relative text-[2rem] font-extrabold leading-tight tracking-[-0.035em] text-white sm:text-[2.6rem]">{title}</h2>
        <p className="relative mx-auto mt-3 max-w-xl text-[17px] leading-relaxed text-white/75">{text}</p>
        <div className="relative mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href={primary.href}
            className="group inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-white px-7 font-bold text-plum shadow-[0_10px_30px_-10px_rgba(0,0,0,0.45)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-lavender"
          >
            {primary.label}
            <ArrowRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
          {secondary && (
            <Link
              href={secondary.href}
              className="inline-flex h-14 items-center justify-center rounded-2xl border border-white/30 px-7 font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/10"
            >
              {secondary.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
