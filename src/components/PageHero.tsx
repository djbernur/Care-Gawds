import Image, { type StaticImageData } from "next/image";

type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  text?: React.ReactNode;
  image?: StaticImageData;
  imageAlt?: string;
  imagePosition?: string;
  children?: React.ReactNode;
};

/** Split hero used by inner pages: copy left, feathered photograph right (same treatment as the homepage). */
export function PageHero({ eyebrow, title, text, image, imageAlt = "", imagePosition = "50% 30%", children }: Props) {
  return (
    <section className="relative overflow-hidden bg-cream">
      <div aria-hidden="true" className="pointer-events-none absolute -left-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(closest-side,#efe2fa,transparent)]" />
      {image && (
        <div className="absolute inset-y-0 right-0 hidden w-[50%] lg:block">
          <Image src={image} alt={imageAlt} fill priority placeholder="blur" sizes="50vw" className="object-cover" style={{ objectPosition: imagePosition }} />
          <div className="absolute inset-y-0 left-0 w-[38%] bg-gradient-to-r from-cream via-cream/55 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-cream via-cream/30 to-transparent" />
        </div>
      )}
      <div className={`relative mx-auto max-w-7xl px-5 pt-10 sm:px-6 sm:pt-14 lg:px-8 ${image ? "pb-8 lg:flex lg:min-h-[520px] lg:items-center lg:py-16" : "pb-12 lg:py-20"}`}>
        <div className={image ? "max-w-xl lg:max-w-[560px]" : "mx-auto max-w-3xl text-center"}>
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h1 className="mt-3 text-[2.4rem] font-extrabold leading-[1.05] tracking-[-0.04em] text-plum sm:text-[3.2rem] xl:text-[3.6rem]">
            {title}
          </h1>
          {text && <div className="mt-5 text-[17px] leading-[1.7] text-ink/80 sm:text-lg">{text}</div>}
          {children && <div className="mt-8">{children}</div>}
        </div>
      </div>
      {image && (
        <div className="relative mx-5 mb-10 aspect-[5/4] overflow-hidden rounded-[28px] shadow-lifted sm:mx-6 sm:aspect-[16/10] lg:hidden">
          <Image src={image} alt={imageAlt} fill priority placeholder="blur" sizes="100vw" className="object-cover" style={{ objectPosition: imagePosition }} />
        </div>
      )}
    </section>
  );
}
