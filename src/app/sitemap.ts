import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

// Only public, indexable pages. Example caregiver profiles are intentionally excluded.
const pages: { path: string; priority: number }[] = [
  { path: "", priority: 1 },
  { path: "/find-a-caregiver", priority: 0.9 },
  { path: "/become-a-caregiver", priority: 0.9 },
  { path: "/how-it-works", priority: 0.7 },
  { path: "/about", priority: 0.6 },
  { path: "/help", priority: 0.5 },
  { path: "/contact", priority: 0.4 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((p) => ({ url: `${siteUrl}${p.path}`, lastModified: new Date(), changeFrequency: "weekly", priority: p.priority }));
}
