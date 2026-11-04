type P = { className?: string };
const base = (className?: string) => ({
  className: className ?? "h-6 w-6",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
  "aria-hidden": true,
});

export const SearchIcon = ({ className }: P) => (
  <svg {...base(className)}><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>
);
export const UserPlusIcon = ({ className }: P) => (
  <svg {...base(className)}><circle cx="9" cy="8" r="4" /><path d="M2 21a7 7 0 0 1 14 0M19 8v6M16 11h6" /></svg>
);
export const ProfileIcon = ({ className }: P) => (
  <svg {...base(className)}><rect x="3" y="4" width="18" height="16" rx="3" /><circle cx="9" cy="11" r="2.5" /><path d="M5.5 17a3.5 3.5 0 0 1 7 0M15 10h3M15 13h3" /></svg>
);
export const CalendarIcon = ({ className }: P) => (
  <svg {...base(className)}><rect x="3" y="5" width="18" height="16" rx="3" /><path d="M3 10h18M8 3v4M16 3v4" /></svg>
);
export const PhoneIcon = ({ className }: P) => (
  <svg {...base(className)}><rect x="6" y="2" width="12" height="20" rx="3" /><path d="M11 18h2" /></svg>
);
export const HeartIcon = ({ className }: P) => (
  <svg {...base(className)}><path d="M12 20s-8-5-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 9c0 6-8 11-8 11Z" /></svg>
);
export const ChildIcon = ({ className }: P) => (
  <svg {...base(className)}><circle cx="12" cy="9" r="5" /><path d="M10 9h.01M14 9h.01M10.5 11.2a2 2 0 0 0 3 0M12 4c0-1 1-2 2-1.5M7 21a5 5 0 0 1 10 0" /></svg>
);
export const SeniorIcon = ({ className }: P) => (
  <svg {...base(className)}><circle cx="9" cy="7" r="3" /><path d="M3 20a6 6 0 0 1 12 0" /><circle cx="17" cy="9" r="2.5" /><path d="M15 20a4.5 4.5 0 0 1 7-3.7" /></svg>
);
export const PinIcon = ({ className }: P) => (
  <svg {...base(className)}><path d="M12 21s-7-6.2-7-12a7 7 0 0 1 14 0c0 5.8-7 12-7 12Z" /><circle cx="12" cy="9" r="2.5" /></svg>
);
export const ClockIcon = ({ className }: P) => (
  <svg {...base(className)}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
);
export const ChecklistIcon = ({ className }: P) => (
  <svg {...base(className)}><rect x="4" y="3" width="16" height="18" rx="3" /><path d="m8 12 3 3 5-6" /></svg>
);
export const PhotoIcon = ({ className }: P) => (
  <svg {...base(className)}><rect x="3" y="4" width="18" height="16" rx="3" /><circle cx="9" cy="10" r="2" /><path d="m21 16-5-5-9 9" /></svg>
);
export const LogIcon = ({ className }: P) => (
  <svg {...base(className)}><path d="M8 6h12M8 12h12M8 18h12M4 6h.01M4 12h.01M4 18h.01" /></svg>
);
export const ChatIcon = ({ className }: P) => (
  <svg {...base(className)}><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12Z" /></svg>
);
export const HandshakeIcon = ({ className }: P) => (
  <svg {...base(className)}><path d="m11 17 2 2a1.4 1.4 0 0 0 2-2M14 14l2.5 2.5a1.4 1.4 0 0 0 2-2l-3.9-3.9a2.1 2.1 0 0 0-3 0l-.9.9a1.4 1.4 0 0 1-2-2l2.8-2.8a3.3 3.3 0 0 1 4.3-.3l.5.4a3 3 0 0 0 2.2.6H21v8M3 4h1.5a3 3 0 0 1 2.1.9L8 6.3M3 4v8l6.5 6.5a1.4 1.4 0 0 0 2-2" /></svg>
);
export const ArrowRightIcon = ({ className }: P) => (
  <svg {...base(className)}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);
export const ChevronRightIcon = ({ className }: P) => (
  <svg {...base(className)}><path d="m9 6 6 6-6 6" /></svg>
);
export const MenuIcon = ({ className }: P) => (
  <svg {...base(className)}><path d="M4 7h16M4 12h16M4 17h16" /></svg>
);
export const CloseIcon = ({ className }: P) => (
  <svg {...base(className)}><path d="M6 6l12 12M18 6 6 18" /></svg>
);
export const CheckCircleIcon = ({ className }: P) => (
  <svg {...base(className)}><circle cx="12" cy="12" r="9" /><path d="m8 12 3 3 5-6" /></svg>
);
