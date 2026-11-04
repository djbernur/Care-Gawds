import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { siteUrl } from "@/lib/site";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Care Gawds | Find Caring Nannies and Caregivers",
    template: "%s | Care Gawds",
  },
  description:
    "Care Gawds helps families find caring, qualified nannies and caregivers, and will soon help you manage everyday care with the Care Gawds app.",
  openGraph: {
    type: "website",
    siteName: "Care Gawds",
    title: "Care Gawds | Exceptional Care. Complete Peace of Mind.",
    description: "Find caring, qualified nannies and caregivers for the people who matter most.",
    images: [{ url: "/images/family-hero.png", width: 1672, height: 941, alt: "A smiling mother hugging her two children on the couch" }],
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body className="font-sans">
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-plum focus:px-4 focus:py-2 focus:text-white">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
