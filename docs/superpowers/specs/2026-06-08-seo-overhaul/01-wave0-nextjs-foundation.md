# Wave 0 — Next.js Foundation (Migration)

**Priority:** 🔴 Critical · **Depends on:** nothing · **Blocks:** all other waves
**Goal:** Move from Vite SPA to **Next.js App Router (SSR)** with full feature
parity, zero design drift, and crawler-visible HTML — without yet adding new SEO
features (those are Wave 1, built into these files).

## Definition of done
- Every existing route renders server-side; `curl <route>` returns real text.
- Visual parity with current site (home, waste-solutions, schedule, projects,
  blog list/post, contact, 5 legal pages).
- Contact + data-deletion email flows work as before.
- Blog reads from Sanity via Server Components with ISR.
- No content is `opacity:0` in SSR HTML.
- Vercel project builds and deploys as a Next.js app.

## Tasks

### 0.1 Scaffold Next.js (App Router, TS, Tailwind)
- Add Next.js 15 (App Router, React 19 or 18 per compat), keep Tailwind 3 config
  (update `content` globs to `app/**` + `components/**` + `sections/**`).
- Move `tailwind.css` globals into `app/globals.css` (keep `@font-face`/layers or
  replace with `next/font` in Wave 2 — Wave 0 may keep current @font-face).
- `next.config.ts`: `images` allowed domains (`cdn.sanity.io`,
  `imagedelivery.net`, `c.animaapp.com`); keep redirects placeholder.
- Keep the Vite app present until parity verified; do not delete `index.html`
  until cutover.

### 0.2 Routing & layout
- `app/layout.tsx`: `<html lang="en">`, `<body>` with the base classes
  (`bg-gray-950 text-white font-space_grotesk`), GTM + GA4 + Consent Mode v2 via
  `next/script` (parity with current `index.html`; tuning is Wave 2), and a slot
  for global JSON-LD (Wave 1). Include `<CookieConsent/>` + `ScrollToTop` behavior
  (Next: use `usePathname` effect or rely on native scroll restoration).
- Create a `page.tsx` per current route (see master §4 map).
- Replace `react-router-dom` `<Link>`/`useLocation` with `next/link` /
  `usePathname` (Navbar active state, the waste-route conditional CTA).

### 0.3 Port components & sections
- Copy `src/components/*` and `src/sections/*` into `components/` and `sections/`
  (or keep `src/` and point `@/` there — pick one; recommend top-level
  `components/`, `sections/`, `lib/` with `@/*` → repo root).
- Add `"use client"` to: `Navbar`, `CookieConsent/*`, `ContactSection`,
  `WasteContact` (removed earlier — N/A), `WasteShowcase` (carousel),
  `ServicesShowcaseSection` (carousel/state), any component using
  `useState/useEffect/framer-motion`.
- Server Components: static sections (Hero text wrappers can stay client due to
  framer-motion; acceptable as long as SSR renders visible text — see 0.6).

### 0.4 Sanity data layer (server + ISR)
- New `lib/sanity.ts`: same client but `useCdn: true`, env from
  `process.env.NEXT_PUBLIC_SANITY_PROJECT_ID` etc. (keep defaults `s56qgtsd` /
  `production` / `2026-05-14`).
- Port `lib/queries.ts` unchanged (GROQ is portable).
- `app/blog/page.tsx`: Server Component, `fetch` posts list,
  `export const revalidate = 3600`.
- `app/blog/[slug]/page.tsx`: Server Component; `generateStaticParams` from
  published slugs; render Portable Text (port `PortableTextRenderer`); related
  posts. `generateMetadata` wired in Wave 1.
- Env: add `NEXT_PUBLIC_SANITY_*` to `.env`/Vercel; document in README.

### 0.5 API route handlers
- Port `api/contact.tsx` → `app/api/contact/route.ts` (POST handler; same Resend
  + React Email logic; keep `emails/*` templates). Same env vars.
- Port `api/data-deletion.ts` → `app/api/data-deletion/route.ts`.
- Update client fetch URLs (still `/api/contact`).
- `vercel dev` / Next runtime now runs these locally (fixes the old "form doesn't
  work under vite dev" gap).

### 0.6 SSR-safe animations (critical fix)
- Create `components/Reveal.tsx`: a small wrapper replacing the repeated
  `initial="hidden" whileInView="visible"` pattern. Requirements:
  - Server output renders children **visible** (no `opacity:0` in HTML).
  - Client enhances with the existing `fadeUp`/`stagger` motion on view.
  - Honor `prefers-reduced-motion` (no transform).
- Refactor sections to use it (or set `initial={false}` and animate from a
  visible baseline). Acceptance: `curl` of `/` and `/waste-solutions` shows the
  promo/seal/section text in raw HTML.

### 0.7 Static files & config
- Move `public/*` (assets, robots.txt, sitemap.xml, favicon, map images) to
  Next `public/` (robots/sitemap replaced by `robots.ts`/`sitemap.ts` in Wave 1).
- `vercel.ts` (or project settings): framework `nextjs`; remove the SPA rewrite
  (`/((?!api/).*) → /index.html`).

### 0.8 Cutover
- Verify parity (checklist below) on a preview deploy.
- Switch Vercel project framework preset to Next.js; point
  `www.faithconstructionone.com` at it; keep apex → www redirect.
- Delete Vite-only files (`index.html`, `vite.config.ts`, Vite scripts) after
  green.

## Files (created / changed / removed)
- **Create:** `app/**`, `components/Reveal.tsx`, `lib/sanity.ts`,
  `lib/queries.ts`, `next.config.ts`, `app/globals.css`, route handlers.
- **Change:** `package.json` (next, scripts), `tailwind.config.js` (content),
  `tsconfig.json` (paths/Next), all ported sections (`"use client"`, `next/link`).
- **Remove (at cutover):** `index.html`, `vite.config.ts`, `src/App.tsx`,
  Vite-specific tsconfigs, SPA rewrite in `vercel.json`.

## Acceptance checklist
- [ ] `npm run build` (next build) passes; all routes prerender/ISR.
- [ ] `curl -s https://<preview>/waste-solutions | grep "Dumpster Rentals"` → hit.
- [ ] `curl -s https://<preview>/blog/<slug>` shows post body text.
- [ ] Contact form submits (200) and sends emails (with RESEND_API_KEY).
- [ ] Visual diff: home, waste-solutions, schedule, projects, blog, post,
      contact, legal — match current.
- [ ] No `opacity:0` content in raw HTML of `/` and `/waste-solutions`.
- [ ] Navbar conditional CTA ("BOOK A DUMPSTER" on waste routes) works via
      `usePathname`.

## Out of scope (deferred to later waves)
- New `<title>`/meta/canonical per page, sitemap, robots, llms.txt, schema → Wave 1.
- next/image, code-splitting tuning, font optimization → Wave 2.
- New pages (About, service, category/author) → Wave 3.
