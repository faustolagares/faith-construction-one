# SEO & GEO Overhaul — Master Spec

**Date:** 2026-06-08
**Status:** Approved (direction) — specs for review
**Owner:** Fausto Lagares
**Baseline SEO Health Score (multi-agent audit):** 39/100

## 1. Goal

Take Faith Construction One (+ the new Faith Waste Solutions vertical) from a
client-rendered SPA invisible to AI/search crawlers to a **server-rendered,
fully-indexable, GEO-optimized** site that ranks above the local average and is
**citable by LLMs** (ChatGPT, Perplexity, Google AI Overviews, Claude).

The content is already strong (blog audit ~80/100). The blocker is
infrastructure. We fix infrastructure first, then scale content.

## 2. Approved decisions

1. **Canonical production domain:** `https://www.faithconstructionone.com`
   (all canonical/sitemap/robots/OG/schema use this; everything else 301s here).
2. **Rendering approach: B — migrate to Next.js (App Router) on Vercel.**
   Chosen to avoid rework; unlocks SSR/SSG/ISR, `next/image`, native Metadata
   API, route handlers, and first-class Vercel integration.

## 3. Current state (source of truth = this codebase)

- **App:** Vite 6 + React 18 + React Router 6 SPA, Tailwind 3, framer-motion.
- **Routes:** `/`, `/waste-solutions`, `/waste-solutions/schedule`, `/projects`,
  `/blog`, `/blog/:slug`, `/contact`, `/privacy`, `/terms`, `/cookies`,
  `/data-deletion`, `/do-not-sell`.
- **CMS:** Sanity (projectId `s56qgtsd`, dataset `production`, apiVersion
  `2026-05-14`). Client in [src/lib/sanity.ts](../../../../src/lib/sanity.ts),
  GROQ in [src/lib/queries.ts](../../../../src/lib/queries.ts). **Studio is a
  separate app** in `studio/` (own package.json) — NOT touched by this migration.
- **Backend:** Vercel functions `api/contact.tsx`, `api/data-deletion.ts`
  (Resend + React Email). `SITE_URL` already defaults to the canonical domain.
- **Analytics:** GTM `GTM-THTX7KKG` + GA4 `G-J3S9KQ5NGG` + Consent Mode v2
  (in `index.html`). Site is in Google Search Console.
- **Assets:** AI-generated dumpster photos in `public/assets/waste/` (heavy JPGs).

## 4. Target architecture (Next.js App Router)

```
app/
  layout.tsx                 # <html>, fonts (next/font), GTM/GA, Consent, global JSON-LD (Organization)
  page.tsx                   # Home (Server Component; sections are client where needed)
  waste-solutions/page.tsx
  waste-solutions/schedule/page.tsx
  projects/page.tsx
  blog/page.tsx              # ISR list (Sanity)
  blog/[slug]/page.tsx       # ISR + generateStaticParams + generateMetadata (Sanity)
  blog/category/[slug]/page.tsx   # (Wave 3)
  contact/page.tsx
  privacy|terms|cookies|data-deletion|do-not-sell/page.tsx
  about/page.tsx             # (Wave 3 — new)
  api/contact/route.ts       # ported from api/contact.tsx
  api/data-deletion/route.ts # ported
  sitemap.ts                 # dynamic (routes + Sanity posts)  [Wave 1]
  robots.ts                  # incl. AI crawlers                [Wave 1]
  not-found.tsx              # 404
components/ , sections/      # reused from src/ (ported), "use client" where needed
lib/                         # sanity (server), queries, schema builders, seo helpers
public/                      # assets, llms.txt [Wave 1], optimized images [Wave 2]
next.config.ts , vercel.ts   # redirects, image config, headers
```

**Rendering rules**
- Server Components by default. `"use client"` only for: Navbar menu state,
  forms (Contact, Waste booking), framer-motion sections, carousels, cookie
  consent.
- **SSR-safe reveals (critical):** scroll animations must render their *visible*
  final state in server HTML. No content may be `opacity:0` in the SSR output.
  Implement a shared `Reveal` wrapper (animate transform only / `initial={false}`
  on server / honor `prefers-reduced-motion`). This fixes the audit's #3 issue.
- Data fetching in Server Components via the Sanity client with `revalidate`
  (ISR). Blog list/detail: `revalidate = 3600` (1h) + on-demand revalidation
  later (optional).

## 5. Success criteria (definition of done for the whole program)

- `curl` of every route returns **full HTML content** (text present, not a shell)
  with a **unique** `<title>`, meta description, and `<link rel=canonical>` on
  the canonical domain.
- All routes + all published blog posts present in `/sitemap.xml`.
- `/robots.txt` references the correct sitemap and explicitly allows the major
  AI crawlers; `/llms.txt` exists.
- Valid JSON-LD on every page (Organization, LocalBusiness/Service, BlogPosting,
  BreadcrumbList) — passes Google Rich Results test.
- Lighthouse (mobile) ≥ 90 Performance, ≥ 95 SEO, ≥ 95 Best Practices; LCP < 2.5s,
  INP < 200ms, CLS < 0.1 on home, /waste-solutions, a blog post.
- No content hidden from crawlers behind JS animation.
- Old `*.vercel.app` and non-canonical hosts 301 → `www.faithconstructionone.com`.

## 6. Wave breakdown (each wave = its own spec + your approval gate)

| Wave | Spec | Theme | Priority |
|------|------|-------|----------|
| 0 | [01-wave0-nextjs-foundation.md](01-wave0-nextjs-foundation.md) | Next.js migration (parity, SSR, no SEO regressions) | 🔴 Critical |
| 1 | [02-wave1-indexing-geo.md](02-wave1-indexing-geo.md) | Per-page metadata, sitemap, robots, llms.txt, schema | 🔴/🟠 |
| 2 | [03-wave2-performance.md](03-wave2-performance.md) | next/image, code-split, fonts, CWV | 🟠 High |
| 3 | [04-wave3-content-trust.md](04-wave3-content-trust.md) | About page, NAP, clusters, service pages, categories/authors | 🟡 Medium |
| 4 | [05-wave4-polish-measurement.md](05-wave4-polish-measurement.md) | Cookie banner, headings/alt, Bing, GA4 events | 🟡/⚪ |

**Sequencing:** Wave 0 must land first (it's the platform). Waves 1 is done
largely *inside* Wave 0's new files but specced separately so we can verify SEO
output explicitly. Waves 2–4 are independent and can be reordered.

## 7. Migration strategy (risk control)

- **Branch/parallel build:** scaffold Next.js alongside the current Vite app in
  the same repo; port route by route; keep the Vite app runnable until parity is
  verified, then flip the Vercel project framework to Next.js.
- **Component reuse:** sections/components are plain React+Tailwind — port with
  minimal change; the main edits are imports (`@/`), `"use client"` directives,
  `<Link>` (next/link) instead of react-router, images (next/image in Wave 2),
  and removing `import.meta.env` (→ Next env).
- **Studio untouched:** `studio/` stays a separate Sanity app/deploy.
- **Email/contact preserved:** port the two Vercel functions to route handlers;
  keep Resend + React Email templates as-is.
- **Verification per route:** `curl` HTML + Lighthouse + visual diff vs current.

## 8. Risks & mitigations

| Risk | Mitigation |
|---|---|
| framer-motion SSR hydration / opacity:0 | Shared SSR-safe `Reveal`; verify raw HTML has visible text |
| Sanity env rename breaks fetch | Map `VITE_SANITY_*` → server env; test blog locally |
| Contact form regressions | Port route handler + test submit against Resend (needs key) |
| Design drift during port | Reuse exact Tailwind classes; visual diff each route |
| Domain cutover / 301 loops | Configure redirects in vercel.ts; test with curl -I |
| Two brands confusing entity | Model Organization + sub-brand explicitly in schema (Wave 1) |

## 9. Out of scope (for now)

- Rebuilding the Sanity Studio or schema (only consuming it).
- Paid ads / off-site link building (separate effort).
- Programmatic location-page generation at scale (gated by content quality;
  revisit after Wave 3 with the quality-gate rules).
