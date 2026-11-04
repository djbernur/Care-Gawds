import Link from "next/link";
import { LogoMark } from "./Logo";

/** Polished "not ready yet" page so unfinished features never pretend to work. */
export function Placeholder({
  eyebrow,
  title,
  text,
  children,
  links = [
    { href: "/", label: "Back to Home" },
    { href: "/#updates", label: "Get Launch Updates" },
  ],
}: {
  eyebrow: string;
  title: string;
  text: React.ReactNode;
  children?: React.ReactNode;
  links?: { href: string; label: string }[];
}) {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(to_bottom,#fffcfa_0%,#f4eafb_60%,#fffcfa_100%)]">
      <div className="mx-auto max-w-2xl px-5 py-20 text-center sm:py-28">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-white shadow-lifted ring-1 ring-lavender-deep">
          <LogoMark className="h-9 w-9" />
        </span>
        <p className="eyebrow mt-7">{eyebrow}</p>
        <h1 className="mt-3 text-[2.2rem] font-extrabold leading-tight tracking-[-0.035em] text-plum sm:text-5xl">{title}</h1>
        <div className="mx-auto mt-4 max-w-lg text-[17px] leading-relaxed text-ink/80">{text}</div>
        {children}
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          {links.map((l, i) => (
            <Link key={l.href} href={l.href} className={`${i === 0 ? "btn-primary" : "btn-secondary"} h-13`}>
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
