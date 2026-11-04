import Image from "next/image";
import { CalendarIcon, ChatIcon, ChecklistIcon, ClockIcon, LogIcon, PhotoIcon } from "./Icons";
import phoneImg from "../../public/images/app-phone-mockup-hd.png";

const appFeatures = [
  { icon: ClockIcon, label: "Clock In & Out" },
  { icon: ChecklistIcon, label: "Daily Checklists" },
  { icon: PhotoIcon, label: "Photos & Updates" },
  { icon: LogIcon, label: "Activity Logs" },
  { icon: CalendarIcon, label: "Scheduling" },
  { icon: ChatIcon, label: "Messaging" },
];

export function AppShowcase({ id, title, text }: { id?: string; title: string; text: string }) {
  return (
    <section id={id} className="relative scroll-mt-20 overflow-hidden bg-[linear-gradient(to_bottom,#fffcfa_0%,#f4eafb_18%,#eddcf8_70%,#fffcfa_100%)]">
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/2 h-[40rem] w-[60rem] -translate-x-[70%] -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(130,22,166,0.16),transparent)]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-7 px-5 pb-16 pt-10 sm:px-6 lg:grid-cols-[1.15fr_1fr] lg:gap-x-14 lg:gap-y-8 lg:px-8 lg:pb-24 lg:pt-14">
        <div className="text-center lg:order-2 lg:self-end lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full bg-plum px-3.5 py-1.5 text-[12px] font-bold uppercase tracking-[0.14em] text-white shadow-soft">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#e3b8ff]" aria-hidden="true" />
            Coming Soon · The Care Gawds App
          </span>
          <h2 className="mt-5 text-[2.1rem] font-extrabold leading-[1.08] tracking-[-0.035em] text-plum sm:text-5xl lg:text-[3.1rem]">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[17px] leading-[1.7] text-ink/80 lg:mx-0 lg:text-lg">{text}</p>
        </div>

        <div className="relative lg:order-1 lg:row-span-2">
          <div aria-hidden="true" className="absolute inset-[8%] rounded-full bg-[radial-gradient(closest-side,rgba(130,22,166,0.28),rgba(242,233,250,0)_100%)] blur-2xl" />
          <div aria-hidden="true" className="absolute inset-x-[18%] bottom-[2%] h-8 rounded-[50%] bg-plum/25 blur-2xl" />
          <Image
            src={phoneImg}
            alt="Concept artwork of the upcoming Care Gawds app, showing the family dashboard with today's care, daily checklist, photos and updates, activity log, scheduling, and messaging"
            sizes="(min-width: 1024px) 50vw, 92vw"
            placeholder="blur"
            className="relative mx-auto h-auto w-full max-w-[400px] drop-shadow-[0_30px_40px_rgba(66,19,107,0.28)] transition-transform duration-700 ease-out hover:-translate-y-1 sm:max-w-[480px] lg:max-w-[560px]"
          />
          <p className="relative mt-4 text-center text-[12px] text-muted/80">Concept artwork. The app is in development.</p>
        </div>

        <div className="lg:order-3 lg:self-start">
          <ul className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3">
            {appFeatures.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-3 rounded-2xl bg-white/80 px-3.5 py-3 shadow-soft ring-1 ring-white transition-transform duration-200 hover:-translate-y-0.5"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-lavender text-violet">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="text-[13.5px] font-semibold leading-tight text-plum">{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
