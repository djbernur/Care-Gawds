// Development approximation of the Care Gawds heart mark.
// Flagged for final brand approval — replace with the official logo file when available.
export function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true" fill="none">
      <defs>
        <linearGradient id="cg-grad" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop stopColor="#8216A6" />
          <stop offset="1" stopColor="#42136B" />
        </linearGradient>
      </defs>
      <circle cx="15" cy="8" r="5" fill="url(#cg-grad)" />
      <circle cx="33" cy="8" r="5" fill="url(#cg-grad)" />
      <path
        d="M24 44C24 44 4 32 4 20.5C4 15.5 7.8 13 11.5 13C16 13 19.5 15.8 24 20C28.5 15.8 32 13 36.5 13C40.2 13 44 15.5 44 20.5C44 32 24 44 24 44Z"
        stroke="url(#cg-grad)"
        strokeWidth="4.5"
        strokeLinejoin="round"
      />
      <path
        d="M24 38C24 38 18 31.5 18 27.5C18 24.2 20.7 22 24 22C27.3 22 30 24.2 30 27.5C30 31.5 24 38 24 38Z"
        fill="url(#cg-grad)"
      />
      <circle cx="24" cy="27.5" r="2.4" fill="#FFFCFA" />
    </svg>
  );
}

export function Logo() {
  return (
    <span className="flex items-center gap-2">
      <LogoMark />
      <span className="text-2xl font-extrabold tracking-tight text-plum">
        Care Gawds<sup className="ml-0.5 text-[10px] font-bold align-super">™</sup>
      </span>
    </span>
  );
}
