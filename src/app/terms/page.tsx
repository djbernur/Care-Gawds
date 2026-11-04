import type { Metadata } from "next";
import { Placeholder } from "@/components/Placeholder";

export const metadata: Metadata = { title: "Terms of Service", robots: { index: false } };

export default function Page() {
  return (
    <Placeholder
      eyebrow="Terms of Service"
      title="Our Terms of Service are being finalized."
      text={<p>The Care Gawds Terms of Service will be published here before the caregiver directory launches.</p>}
      links={[{ href: "/", label: "Back to Home" }, { href: "/contact", label: "Contact Us" }]}
    />
  );
}
