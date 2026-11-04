"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "./Logo";
import { CloseIcon, MenuIcon } from "./Icons";
import { navLinks } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-lavender-deep/50 bg-cream/85 backdrop-blur-lg">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <Link href="/" aria-label="Care Gawds home" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-[15px] font-semibold text-ink transition-colors hover:text-violet">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/login"
            className="rounded-xl border border-plum/25 px-5 py-2.5 text-sm font-bold text-plum transition-all hover:border-plum/60 hover:bg-lavender/60"
          >
            Log In
          </Link>
          <Link
            href="/signup"
            className="rounded-xl bg-plum px-5 py-2.5 text-sm font-bold text-white shadow-soft transition-all hover:-translate-y-px hover:bg-violet"
          >
            Sign Up
          </Link>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-plum lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <CloseIcon className="h-7 w-7" /> : <MenuIcon className="h-7 w-7" />}
        </button>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className="border-t border-lavender-deep bg-cream lg:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col px-4 py-3 sm:px-6">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-2 py-3 text-base font-semibold text-ink hover:bg-lavender"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="mt-2 grid grid-cols-2 gap-3 pb-2">
              <Link href="/login" className="rounded-lg border-2 border-plum py-2.5 text-center font-bold text-plum">
                Log In
              </Link>
              <Link href="/signup" className="rounded-lg bg-plum py-2.5 text-center font-bold text-white">
                Sign Up
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
