import type { Metadata } from "next";
import { Placeholder } from "@/components/Placeholder";

export const metadata: Metadata = { title: "Privacy Policy", robots: { index: false } };

export default function Page() {
  return (
    <Placeholder
      eyebrow="Privacy Policy"
      title="Our Privacy Policy is being finalized."
      text={
        <p>
          We collect only the information you choose to share with us, such as your email, ZIP code, and caregiver
          application details, and use it to run Care Gawds and contact you. Our full Privacy Policy will be published
          here before launch.
        </p>
      }
      links={[{ href: "/", label: "Back to Home" }, { href: "/contact", label: "Contact Us" }]}
    />
  );
}
