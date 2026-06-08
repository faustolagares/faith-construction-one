import type { Metadata } from "next";
import { ContactPage } from "@/views/ContactPage";

export const metadata: Metadata = {
  title: "Contact — Get a Project Estimate",
  description:
    "Tell Faith Construction One about your project and get a straight answer — no vague estimates. Serving Jacksonville & Northeast Florida.",
  alternates: { canonical: "/contact" },
};

export default function Page() {
  return <ContactPage />;
}
