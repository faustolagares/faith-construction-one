import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceView } from "@/components/ServiceView";
import { JsonLd } from "@/components/JsonLd";
import { constructionServiceSchema, breadcrumbSchema } from "@/lib/schema";
import { SERVICES, getService } from "@/lib/services";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const service = getService(params.slug);
  if (!service) return { title: "Service not found" };
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `/services/${service.slug}`,
      images: [service.image],
    },
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const service = getService(params.slug);
  if (!service) notFound();

  return (
    <>
      <JsonLd
        data={[
          constructionServiceSchema({
            name: service.name,
            slug: service.slug,
            description: service.metaDescription,
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: service.name, path: `/services/${service.slug}` },
          ]),
        ]}
      />
      <ServiceView service={service} />
    </>
  );
}
