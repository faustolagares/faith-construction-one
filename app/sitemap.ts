import type { MetadataRoute } from "next";
import { sanityClient } from "@/lib/sanity";
import { SERVICES } from "@/lib/services";

const SITE_URL = "https://www.faithconstructionone.com";

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const serviceRoutes: MetadataRoute.Sitemap = SERVICES.map((s) => ({
    url: `${SITE_URL}/services/${s.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, changeFrequency: "monthly", priority: 1.0 },
    { url: `${SITE_URL}/waste-solutions`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/about`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/services`, changeFrequency: "monthly", priority: 0.8 },
    ...serviceRoutes,
    { url: `${SITE_URL}/projects`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/blog`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${SITE_URL}/contact`, changeFrequency: "yearly", priority: 0.6 },
    { url: `${SITE_URL}/privacy`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${SITE_URL}/terms`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${SITE_URL}/cookies`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${SITE_URL}/data-deletion`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${SITE_URL}/do-not-sell`, changeFrequency: "yearly", priority: 0.2 },
  ];

  let postRoutes: MetadataRoute.Sitemap = [];
  try {
    const posts = await sanityClient.fetch<{ slug: string; updated: string }[]>(
      `*[_type == "post" && defined(slug.current)]{ "slug": slug.current, "updated": coalesce(_updatedAt, publishedAt) }`,
    );
    postRoutes = posts.map((p) => ({
      url: `${SITE_URL}/blog/${p.slug}`,
      lastModified: p.updated ? new Date(p.updated) : undefined,
      changeFrequency: "monthly",
      priority: 0.6,
    }));
  } catch {
    postRoutes = [];
  }

  return [...staticRoutes, ...postRoutes];
}
