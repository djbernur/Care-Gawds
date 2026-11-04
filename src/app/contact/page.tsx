import type { Metadata } from "next";
import { Placeholder } from "@/components/Placeholder";

export const metadata: Metadata = { title: "Contact", description: "Get in touch with Care Gawds.", alternates: { canonical: "/contact" } };

export default function Page() {
  return (
    <Placeholder
      eyebrow="Contact"
      title="We’d love to hear from you."
      text={<p>Our contact form is on the way. In the meantime, join our launch list or apply as a caregiver and we&apos;ll be in touch by email.</p>}
      links={[{ href: "/#updates", label: "Get Launch Updates" }, { href: "/become-a-caregiver#apply", label: "Apply as a Caregiver" }]}
    />
  );
}
