import type { Metadata } from "next";
import { AboutPage } from "@/views/AboutPage";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "About Our Jacksonville Construction Company",
  description:
    "Family-owned construction and remodeling company in Jacksonville, FL since 2015. 500+ projects, 5.0 rating, licensed and insured. Meet Faith Construction One.",
  alternates: { canonical: "/about" },
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <AboutPage />
    </>
  );
}
