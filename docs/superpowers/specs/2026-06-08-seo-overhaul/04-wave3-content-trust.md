# Wave 3 — Content, E-E-A-T & Topical Authority

**Priority:** 🟡 Medium · **Depends on:** Waves 0–1
**Goal:** Turn strong-but-isolated content into a ranking machine: trust signals,
topical clusters, internal linking, and indexable service/local pages. This is
where the blog "grows a lot."

## Definition of done
- `/about` page with real credentials (E-E-A-T).
- Consistent NAP everywhere.
- Pillar pages + clusters with internal links to the 6 existing posts.
- Blog category + author routes live and in the sitemap.
- `/waste-solutions` and core construction services have indexable, unique copy.

## Tasks

### 3.1 About / Trust page (`app/about/page.tsx`)
- Company story, **license # + insured** statement, years in business, "500+
  projects / 5.0 rating" (only real figures), team/owner bio (Person schema),
  service area, both verticals. Strong "Experience/Expertise/Trust" signals.
- Link from nav (resolve the `#about` anchor → real `/about` page; update
  Navbar/DesktopMenu/Footer `#about` → `/about`).

### 3.2 NAP consistency
- Single source for NAP (name, address, phone(s), hours) in `lib/business.ts`;
  use in Footer, Contact, About, schema, llms.txt. Resolve the
  construction-vs-waste phone usage; ensure construction has a phone in schema.

### 3.3 Service pages (construction)
- Dedicated indexable pages for the money services currently only anchors:
  `/services/paver-installation`, `/kitchen-remodeling`, `/bathroom-remodeling`,
  `/outdoor-living` (final URL structure TBD). Each: unique H1, 300+ words of
  genuinely useful copy, photos (real), Service schema, internal links, CTA.
- Update home cards + footer to link to these pages.

### 3.4 Enrich `/waste-solutions` copy
- Add indexable text depth: dumpster size guide (what fits / weight), what's
  accepted vs not, permit/placement notes, FAQ-style prose (as content, not FAQ
  schema), local delivery detail. Improves ranking for "dumpster rental
  Jacksonville / 16 yard / roll-off" + AI citability.

### 3.5 Blog scale: clusters, categories, authors
- `app/blog/category/[slug]/page.tsx` and `app/blog/author/[slug]/page.tsx`
  (data already in GROQ: categories, author). Add to sitemap.
- Author pages with bio + Person schema (E-E-A-T).
- Define 2–3 **pillar pages** (e.g., "Dumpster Rental Guide — Jacksonville",
  "Home Remodeling in NE Florida") and map the 6 existing posts as supporting
  cluster content; add contextual internal links both ways.
- Editorial: bylines, publish + updated dates surfaced, related posts (already
  built).

### 3.6 Local SEO (careful)
- Optionally a few high-quality city/area pages (Jacksonville neighborhoods /
  NE FL towns) — **only with 60%+ unique content each**. Hard stop at scale per
  quality gates; no thin doorway pages. Google Business Profile alignment (NAP,
  categories, services) — off-site task to coordinate.

## Files
- **Create:** `app/about/page.tsx`, service pages, `app/blog/category/[slug]`,
  `app/blog/author/[slug]`, `lib/business.ts`, pillar page(s).
- **Change:** Navbar/DesktopMenu/Footer (real links), home cards/footer links,
  `app/sitemap.ts` (new routes), `WasteSolutions` copy, `lib/schema.ts` (Service
  per page, Person for authors).

## Acceptance checklist
- [ ] `/about` live, linked from nav/footer, Person + Organization schema valid.
- [ ] NAP identical across footer/contact/about/schema/llms.txt.
- [ ] Service pages indexable with unique 300+ word content + Service schema.
- [ ] Category/author routes render, are in sitemap, and interlink with posts.
- [ ] At least 2 pillar pages with cluster internal links.
- [ ] No thin/duplicate location pages (quality gate respected).

## Inputs needed
- License number, insurance statement, owner/team bios + photos.
- Real review counts/rating source. Social URLs. Google Business Profile access.
