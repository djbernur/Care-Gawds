import type { Metadata } from "next";
import { Placeholder } from "@/components/Placeholder";

export const metadata: Metadata = { title: "Log In", robots: { index: false } };

export default function Page() {
  return (
    <Placeholder
      eyebrow="Accounts"
      title="Family and caregiver accounts are coming soon."
      text={<p>We&apos;re building secure accounts so you can save caregivers, send messages, and manage your profile. Join the list and we&apos;ll let you know when they open.</p>}
    />
  );
}
