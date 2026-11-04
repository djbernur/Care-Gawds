import type { Metadata } from "next";
import { Placeholder } from "@/components/Placeholder";

export const metadata: Metadata = { title: "Sign Up", robots: { index: false } };

export default function Page() {
  return (
    <Placeholder
      eyebrow="Create an Account"
      title="Sign-ups open at launch."
      text={<p>Families can join our launch list today. Caregivers can apply now to be among the first profiles on Care Gawds.</p>}
      links={[
        { href: "/#updates", label: "I’m a Family" },
        { href: "/become-a-caregiver#apply", label: "I’m a Caregiver" },
      ]}
    />
  );
}
