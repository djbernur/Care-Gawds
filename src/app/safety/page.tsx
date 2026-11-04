import type { Metadata } from "next";
import { Placeholder } from "@/components/Placeholder";

export const metadata: Metadata = { title: "Safety Information" };

export default function Page() {
  return (
    <Placeholder
      eyebrow="Safety Information"
      title="Safety resources are on the way."
      text={
        <p>
          Care Gawds is a marketplace. Families are responsible for interviewing, screening, and hiring caregivers. We&apos;re
          preparing practical safety guidance for families and caregivers, and it will be published here.
        </p>
      }
      links={[{ href: "/how-it-works", label: "How It Works" }, { href: "/contact", label: "Contact Us" }]}
    />
  );
}
