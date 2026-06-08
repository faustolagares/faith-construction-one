# Wave 1 — Indexing, Metadata, Schema & GEO

**Priority:** 🔴/🟠 · **Depends on:** Wave 0 (Next.js platform)
**Goal:** Make every page individually indexable and citable by search engines
AND LLMs. This is where the 39→high jump happens.

## Definition of done
- Unique `<title>`, meta description, canonical, OG/Twitter on every route.
- `/sitemap.xml` lists all routes + all published posts; `/robots.txt` correct +
  AI crawlers; `/llms.txt` published.
- Valid JSON-LD per page; passes Google Rich Results & Schema validator.
- Everything on `https://www.faithconstructionone.com`.

## Tasks

### 1.1 Per-page metadata (Next Metadata API)
- `app/layout.tsx`: `metadataBase = new URL('https://www.faithconstructionone.com')`,
  default title template `%s | Faith Construction One`, default OG/Twitter,
  `robots: { index: true, follow: true }`.
- Static `export const metadata` per route with unique title + description +
  `alternates.canonical` + OG image. Targets:
  - Home: "Pavers & Remodeling Contractor in Northeast Florida".
  - `/waste-solutions`: "Dumpster Rentals in Jacksonville, FL | 16-Yard Roll-Off
    — Faith Waste Solutions".
  - `/waste-solutions/schedule`: "Book a Dumpster — Faith Waste Solutions"
    (set `robots: noindex` until the real booking flow exists, to avoid indexing
    a stub — revisit when built).
  - `/projects`, `/contact`, each legal page: unique titles/descriptions.
- `app/blog/[slug]/page.tsx`: `generateMetadata` from Sanity `seo`/`excerpt`/
  `mainImage` (the `seo` field already in the GROQ query). Canonical per post.
- `app/blog/page.tsx`: blog index metadata.
- Per-page OG images: use post `mainImage` for posts; brand OG for static pages
  (Wave 2 can add dynamic `opengraph-image`).

### 1.2 Dynamic sitemap — `app/sitemap.ts`
- Emit canonical-domain URLs for all static routes with sensible
  `changeFrequency`/`priority`.
- Fetch published post slugs + `_updatedAt` from Sanity → add `/blog/<slug>` with
  `lastModified`.
- (Wave 3) add category/author routes when they exist.
- Exclude `noindex` routes (e.g. `/waste-solutions/schedule` stub).

### 1.3 robots — `app/robots.ts`
- `Allow: /` for `*`; `Sitemap: https://www.faithconstructionone.com/sitemap.xml`;
  `host` canonical.
- Explicitly **allow** AI crawlers (we want visibility): `GPTBot`,
  `OAI-SearchBot`, `ChatGPT-User`, `ClaudeBot`, `Claude-User`,
  `PerplexityBot`, `Perplexity-User`, `Google-Extended`, `Bingbot`,
  `Applebot-Extended`.
- Disallow nothing sensitive except `/api/` and the schedule stub if noindexed.

### 1.4 `/llms.txt` (+ optional `/llms-full.txt`)
- Static `public/llms.txt` (Markdown): company summary, the two verticals
  (Construction + Waste Solutions), key pages with URLs + 1-line descriptions,
  service area (Jacksonville / NE Florida, ZIP 32223, 30-mi radius), 16-yd
  pricing ($250/$360/$450), NAP, contact. Keep it factual and concise.
- Optional `llms-full.txt`: expanded service + FAQ content for richer grounding.

### 1.5 Structured data (JSON-LD)
Build typed helpers in `lib/schema.ts` and inject per page via a `<JsonLd>`
Server Component.
- **Organization** (global, in layout): `Faith Construction One`, url, logo,
  `sameAs` (social profiles — collect URLs), `contactPoint`.
- **LocalBusiness / HomeAndConstructionBusiness** (home): full NAP
  (10777 Scott Mill Rd, Jacksonville, FL 32223), `telephone`, `geo`,
  `areaServed`, `openingHours`, `aggregateRating` (from reviews — 5.0 / 60+),
  `priceRange`.
- **Service + Offer** (`/waste-solutions`): service "Dumpster Rental", provider
  = Faith Waste Solutions, `areaServed`, three `Offer`s (Daily $250 / Weekly
  $360 / Monthly $450, USD) + the included-features.
- **Service** per construction service (Wave 3 when service pages exist).
- **BreadcrumbList** on sub-pages and posts.
- **BlogPosting** on posts: headline, image, datePublished/Modified, author
  (Person), publisher (Organization), mainEntityOfPage.
- Model **two brands**: Organization (parent) + `brand`/`subOrganization`
  "Faith Waste Solutions" so entities are unambiguous.
- No `FAQPage`/`HowTo` (deprecated/限定). Validate all with Rich Results test.

### 1.6 Citability (GEO content shape)
- Ensure key answers are in plain server HTML near the top: what/where/price.
- Add concise, factual summary lines crawlers can lift (e.g., a one-paragraph
  "What is a 16-yard dumpster" + the price table already present).
- Consistent NAP + entity naming across pages, llms.txt, and schema.

## Files
- **Create:** `lib/schema.ts`, `components/JsonLd.tsx`, `app/sitemap.ts`,
  `app/robots.ts`, `public/llms.txt` (+ optional `llms-full.txt`).
- **Change:** `app/layout.tsx` (metadataBase, defaults, Organization JSON-LD),
  every `page.tsx` (metadata + page JSON-LD), `app/blog/[slug]/page.tsx`
  (generateMetadata + BlogPosting).

## Acceptance checklist
- [ ] Each route has a unique title/description/canonical (view-source/curl).
- [ ] `/sitemap.xml` includes every route + every published post.
- [ ] `/robots.txt` lists AI crawlers + correct sitemap URL.
- [ ] `/llms.txt` returns 200 with the business summary.
- [ ] Rich Results test passes for home (LocalBusiness), /waste-solutions
      (Service/Offer), a blog post (BlogPosting).
- [ ] All URLs/canonicals use `https://www.faithconstructionone.com`.
- [ ] Schedule stub is `noindex` and excluded from sitemap.

## Open inputs needed from you
- Social profile URLs (for `sameAs`).
- Business hours, and confirmation of the 5.0 / 60+ reviews figure for
  `aggregateRating` (must be real & on-site to use legitimately).
- Which phone belongs to which brand in schema (Construction vs 904-566-3799 Waste).
