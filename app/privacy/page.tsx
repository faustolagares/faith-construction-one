import type { Metadata } from "next";
import { PrivacyPage } from "@/views/PrivacyPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Faith Construction One collects, uses, and protects your personal information.",
  alternates: { canonical: "/privacy" },
};

export default function Page() {
  return <PrivacyPage />;
}
