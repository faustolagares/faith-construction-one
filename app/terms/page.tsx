import type { Metadata } from "next";
import { TermsPage } from "@/views/TermsPage";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms that govern use of the Faith Construction One website.",
  alternates: { canonical: "/terms" },
};

export default function Page() {
  return <TermsPage />;
}
