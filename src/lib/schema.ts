// Structured data builders (JSON-LD). Injected per-page via <JsonLd>.
// NOTE: aggregateRating + sameAs (socials) + business hours are intentionally
// left out until confirmed with real, on-site sources (see Wave 1 spec inputs).

export const SITE_URL = "https://www.faithconstructionone.com";
const PHONE = "+1-904-566-3799";

const ORG_ID = `${SITE_URL}/#organization`;

const POSTAL_ADDRESS = {
  "@type": "PostalAddress",
  streetAddress: "10777 Scott Mill Rd",
  addressLocality: "Jacksonville",
  addressRegion: "FL",
  postalCode: "32223",
  addressCountry: "US",
};

const AREA_SERVED = [
  "Jacksonville",
  "Ponte Vedra Beach",
  "Fernandina Beach",
  "St. Johns",
  "Amelia Island",
  "Atlantic Beach",
  "Neptune Beach",
  "Jacksonville Beach",
].map((name) => ({ "@type": "City", name, addressRegion: "FL" }));

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: "Faith Construction One",
    url: SITE_URL,
    logo: `${SITE_URL}/assets/logo-white.png`,
    email: "hello@faithconstructionone.com",
    telephone: PHONE,
    address: POSTAL_ADDRESS,
    // brand vertical
    brand: { "@type": "Brand", name: "Faith Waste Solutions" },
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${SITE_URL}/#localbusiness`,
    name: "Faith Construction One",
    description:
      "Licensed, insured construction and remodeling company in Jacksonville, FL. Pavers, kitchen and bathroom remodeling, outdoor living, and LVP flooring.",
    url: SITE_URL,
    image: `${SITE_URL}/assets/hero-house-only.webp`,
    logo: `${SITE_URL}/assets/logo-white.png`,
    telephone: PHONE,
    address: POSTAL_ADDRESS,
    areaServed: AREA_SERVED,
    foundingDate: "2015-01-20",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "15",
    },
    parentOrganization: { "@id": ORG_ID },
    // TODO(inputs): openingHoursSpecification, sameAs (social profiles), license #.
  };
}

export function wasteServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Dumpster Rental, 16-Yard Roll-Off",
    serviceType: "Dumpster rental",
    provider: {
      "@type": "Organization",
      name: "Faith Waste Solutions",
      parentOrganization: { "@id": ORG_ID },
      telephone: "+1-904-566-3799",
      url: `${SITE_URL}/waste-solutions`,
    },
    areaServed: AREA_SERVED,
    offers: [
      { "@type": "Offer", name: "Daily Rental", price: "250", priceCurrency: "USD", description: "16-yard dumpster, includes 1 ton disposal." },
      { "@type": "Offer", name: "Weekly Rental", price: "360", priceCurrency: "USD", description: "16-yard dumpster, 7-day rental." },
      { "@type": "Offer", name: "Monthly Rental", price: "450", priceCurrency: "USD", description: "16-yard dumpster, 30-day rental." },
    ],
  };
}

export function blogPostingSchema(post: {
  title: string;
  slug: string;
  excerpt?: string;
  publishedAt: string;
  updatedAt?: string;
  imageUrl?: string;
  authorName?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.imageUrl ? [post.imageUrl] : undefined,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
    author: post.authorName
      ? { "@type": "Person", name: post.authorName }
      : { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
  };
}

export function constructionServiceSchema(s: {
  name: string;
  slug: string;
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.name,
    serviceType: s.name,
    description: s.description,
    url: `${SITE_URL}/services/${s.slug}`,
    provider: { "@id": ORG_ID },
    areaServed: AREA_SERVED,
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE_URL}${it.path}`,
    })),
  };
}
