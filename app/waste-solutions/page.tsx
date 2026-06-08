import type { Metadata } from "next";
import { WasteSolutionsPage } from "@/views/WasteSolutionsPage";
import { JsonLd } from "@/components/JsonLd";
import { wasteServiceSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Dumpster Rentals in Jacksonville, FL — 16-Yard Roll-Off",
  description:
    "Faith Waste Solutions rents 16-yard roll-off dumpsters in Jacksonville & Northeast Florida. Same-day delivery, honest pricing — Daily $250, Weekly $360, Monthly $450.",
  alternates: { canonical: "/waste-solutions" },
  openGraph: {
    title: "Dumpster Rentals in Jacksonville, FL — 16-Yard Roll-Off",
    description:
      "16-yard roll-off dumpsters for cleanouts, remodels, construction & demolition debris. Same-day delivery across Northeast Florida.",
    url: "/waste-solutions",
    images: ["/assets/waste/dumpster-hero.jpg"],
  },
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          wasteServiceSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Waste Solutions", path: "/waste-solutions" },
          ]),
        ]}
      />
      <WasteSolutionsPage />
    </>
  );
}
