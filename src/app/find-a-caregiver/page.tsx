import type { Metadata } from "next";
import { Directory } from "@/components/Directory";
import { directoryCaregivers } from "@/data/caregivers";

export const metadata: Metadata = {
  title: "Find a Caregiver",
  description:
    "Search for nannies, babysitters, and childcare providers by location, availability, and experience. The Care Gawds directory is launching soon in Southern California.",
  alternates: { canonical: "/find-a-caregiver" },
  openGraph: { title: "Find a Caregiver | Care Gawds", url: "/find-a-caregiver" },
};

export default function FindACaregiverPage() {
  return <Directory caregivers={directoryCaregivers()} />;
}
