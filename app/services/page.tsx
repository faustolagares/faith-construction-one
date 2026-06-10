import type { Metadata } from "next";
import { ServicesPage } from "@/views/ServicesPage";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Construction & Remodeling Services in Jacksonville, FL",
  description:
    "Paver installation, kitchen and bathroom remodeling, outdoor living, and interior improvements across Northeast Florida. One team, on schedule, by Faith Construction One.",
  alternates: { canonical: "/services" },
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />
      <ServicesPage />
    </>
  );
}
