import type { Metadata } from "next";
import { DataDeletionPage } from "@/views/DataDeletionPage";

export const metadata: Metadata = {
  title: "Data Deletion Request",
  description: "Request deletion of your personal data from Faith Construction One.",
  alternates: { canonical: "/data-deletion" },
};

export default function Page() {
  return <DataDeletionPage />;
}
