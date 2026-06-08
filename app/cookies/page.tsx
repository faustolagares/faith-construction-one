import type { Metadata } from "next";
import { CookiesPage } from "@/views/CookiesPage";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "How Faith Construction One uses cookies and similar technologies.",
  alternates: { canonical: "/cookies" },
};

export default function Page() {
  return <CookiesPage />;
}
