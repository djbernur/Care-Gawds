import type { StaticImageData } from "next/image";
import profileImg from "../../public/images/caregiver-profile.png";
import recruitImg from "../../public/images/caregiver-recruitment.png";
import type { AVAILABILITY, CARE_TYPES, QUALIFICATIONS } from "./options";

export type Caregiver = {
  slug: string;
  /** First name and last initial only. Never a full name or address. */
  displayName: string;
  photo: StaticImageData;
  /** General area only, e.g. "Victorville, CA". */
  location: string;
  careTypes: (typeof CARE_TYPES)[number][];
  yearsExperience: number;
  hourlyRate: { min: number; max: number };
  availability: (typeof AVAILABILITY)[number][];
  availabilitySummary: string;
  shortBio: string;
  about: string;
  experience: string[];
  skills: string[];
  /** Self-reported unless `verified` is true. Nothing is verified until a real verification process exists. */
  qualifications: { label: (typeof QUALIFICATIONS)[number] | string; verified: boolean }[];
  isDemo: boolean;
};

/**
 * Example profiles used to preview the design. They are always labeled as examples,
 * are excluded from search engines, and only appear in the directory when
 * NEXT_PUBLIC_SHOW_DEMO_PROFILES=true (local development and previews).
 */
export const demoCaregivers: Caregiver[] = [
  {
    slug: "example-monica",
    displayName: "Monica R.",
    photo: profileImg,
    location: "Victorville, CA",
    careTypes: ["Nanny", "Childcare Provider"],
    yearsExperience: 5,
    hourlyRate: { min: 25, max: 30 },
    availability: ["Full-Time", "Before School", "After School"],
    availabilitySummary: "Mon – Fri",
    shortBio: "Loving, reliable, and experienced with all ages.",
    about:
      "I’m a caring, reliable, and experienced caregiver who loves working with children of all ages. I focus on creating a fun, supportive environment where kids feel comfortable, encouraged, and safe to be themselves.",
    experience: [
      "Full-time nanny for a family of two children (ages 3 and 6)",
      "After-school care, homework help, and activity planning",
      "Assistant at a neighborhood preschool",
    ],
    skills: ["Meal Prep", "Homework Help", "Light Housekeeping", "Activities & Play", "Transportation"],
    qualifications: [
      { label: "CPR / First Aid Certified", verified: false },
      { label: "Early Childhood Education", verified: false },
      { label: "Valid Driver’s License", verified: false },
    ],
    isDemo: true,
  },
  {
    slug: "example-tasha",
    displayName: "Tasha M.",
    photo: recruitImg,
    location: "Hesperia, CA",
    careTypes: ["Babysitter", "Childcare Provider"],
    yearsExperience: 3,
    hourlyRate: { min: 22, max: 26 },
    availability: ["Part-Time", "Evenings", "Weekends"],
    availabilitySummary: "Evenings & Weekends",
    shortBio: "Patient, energetic, and great with kids.",
    about:
      "I’m an upbeat babysitter who loves arts and crafts, outdoor play, and story time. Families tell me their kids look forward to our evenings together.",
    experience: ["Evening and weekend babysitting for several local families", "Summer camp counselor for two seasons"],
    skills: ["Activities & Play", "Bedtime Routines", "Meal Prep", "Arts & Crafts"],
    qualifications: [
      { label: "CPR / First Aid Certified", verified: false },
      { label: "Bilingual", verified: false },
    ],
    isDemo: true,
  },
];

/** Real, approved caregiver listings. Empty until the directory launches. */
export const liveCaregivers: Caregiver[] = [];

export const showDemoProfiles = process.env.NEXT_PUBLIC_SHOW_DEMO_PROFILES === "true";

export function directoryCaregivers() {
  return showDemoProfiles ? [...liveCaregivers, ...demoCaregivers] : liveCaregivers;
}

export function findCaregiver(slug: string) {
  return [...liveCaregivers, ...demoCaregivers].find((c) => c.slug === slug);
}
