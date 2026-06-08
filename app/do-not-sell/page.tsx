import type { Metadata } from "next";
import { DoNotSellPage } from "@/views/DoNotSellPage";

export const metadata: Metadata = {
  title: "Do Not Sell or Share My Information",
  description:
    "Exercise your right to opt out of the sale or sharing of your personal information.",
  alternates: { canonical: "/do-not-sell" },
};

export default function Page() {
  return <DoNotSellPage />;
}
