import Link from "next/link";
import { Logo } from "./Logo";

const columns = [
  {
    title: "Families",
    links: [
      { href: "/find-a-caregiver", label: "Find a Caregiver" },
      { href: "/how-it-works", label: "How It Works" },
      { href: "/#app", label: "Care Gawds App" },
      { href: "/#updates", label: "Get Launch Updates" },
    ],
  },
  {
    title: "Caregivers",
    links: [
      { href: "/become-a-caregiver", label: "Become a Caregiver" },
      { href: "/caregiver-guidelines", label: "Caregiver Guidelines" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About Care Gawds" },
      { href: "/help", label: "Help" },
      { href: "/contact", label: "Contact" },
      { href: "/safety", label: "Safety Information" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-plum text-white/85">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-6 gap-y-9 px-5 py-12 sm:px-6 md:grid-cols-[1.4fr_repeat(3,1fr)] md:gap-10 md:py-14 lg:px-8">
        <div className="col-span-2 md:col-span-1">
          <span className="inline-block rounded-2xl bg-cream px-3 py-2">
            <Logo />
          </span>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/75">
            Connecting families with caring nannies and caregivers. Launching first in Southern California.
          </p>
        </div>
        {columns.map((c) => (
          <div key={c.title}>
            <h2 className="text-sm font-bold uppercase tracking-wider text-white">{c.title}</h2>
            <ul className="mt-4 space-y-3 md:space-y-2.5">
              {c.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm transition-colors hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/15">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-xs text-white/65 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Care Gawds. All rights reserved.</p>
          <p className="max-w-xl sm:text-right">
            Care Gawds is an online marketplace and is not an employer or staffing agency. Families are responsible for
            interviewing, screening, and hiring caregivers.
          </p>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
