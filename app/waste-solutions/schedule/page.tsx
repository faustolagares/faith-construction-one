import type { Metadata } from "next";
import { WasteSchedulePage } from "@/views/WasteSchedulePage";

export const metadata: Metadata = {
  title: "Book a Dumpster — Faith Waste Solutions",
  description: "Schedule your 16-yard dumpster rental with Faith Waste Solutions.",
  alternates: { canonical: "/waste-solutions/schedule" },
  // Stub page until the real booking flow ships — keep it out of the index.
  robots: { index: false, follow: true },
};

export default function Page() {
  return <WasteSchedulePage />;
}
