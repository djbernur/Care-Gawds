import { Placeholder } from "@/components/Placeholder";

export default function NotFound() {
  return <Placeholder eyebrow="Page Not Found" title="We couldn’t find that page." text={<p>The page you&apos;re looking for may have moved. Let&apos;s get you back on track.</p>} links={[{ href: "/", label: "Back to Home" }, { href: "/help", label: "Visit Help" }]} />;
}
