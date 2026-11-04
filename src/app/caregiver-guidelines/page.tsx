import type { Metadata } from "next";
import { Placeholder } from "@/components/Placeholder";

export const metadata: Metadata = { title: "Caregiver Guidelines" };

export default function Page() {
  return (
    <Placeholder
      eyebrow="Caregiver Guidelines"
      title="Caregiver Guidelines are coming soon."
      text={<p>We&apos;re writing clear guidelines for profiles, communication, and professionalism on Care Gawds. They&apos;ll be published here before profiles go live.</p>}
      links={[{ href: "/become-a-caregiver#apply", label: "Apply Now" }, { href: "/", label: "Back to Home" }]}
    />
  );
}
