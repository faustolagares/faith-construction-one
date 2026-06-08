# Wave 2 — Performance & Core Web Vitals

**Priority:** 🟠 High · **Depends on:** Wave 0
**Goal:** Hit green CWV (mobile) so speed amplifies rankings instead of dragging
them. Audit flagged a 2.4MB hero PNG, 0.5–1.8MB images, a 605KB JS bundle, and
unoptimized fonts/analytics.

## Definition of done (measured on mobile, throttled)
- LCP < 2.5s, INP < 200ms, CLS < 0.1 on home, `/waste-solutions`, a blog post.
- Lighthouse mobile: Performance ≥ 90, Best Practices ≥ 95.

## Tasks

### 2.1 Images → `next/image` (AVIF/WebP, responsive, priority)
- Replace CSS `background-image` heroes and `<img>` with `next/image`
  (`fill`/sized) where it improves LCP and enables modern formats.
- Hero LCP image: `priority` + `fetchPriority="high"`; correct `sizes`.
- Convert/compress generated dumpster photos in `public/assets/waste/`
  (currently 0.48–0.75MB each): serve via next/image (auto AVIF/WebP) — source
  can be re-exported smaller; target < 200KB delivered at display size.
- Sanity images via `next/image` loader or `urlFor(...).width(...).format('webp')`
  with `lqip` blur placeholders (already in GROQ).
- Old construction hero `assets/hero-house-only.png` (~2.4MB): re-export/optimize.

### 2.2 Code-splitting & bundle
- App Router does route-level splitting automatically; additionally
  `next/dynamic` for heavy client-only widgets (carousels, map, framer-motion
  groups) with SSR-safe fallbacks.
- Audit bundle with `@next/bundle-analyzer`; trim framer-motion usage (import
  only what's used) and any large deps.
- Target: initial JS for a content route well under the old 605KB.

### 2.3 Fonts → `next/font`
- Self-host Playfair Display + Space Grotesk via `next/font/google` (or local),
  `display: 'swap'`, only needed weights. Removes the current duplicate/incorrect
  `@font-face` weight URLs and render-blocking.
- Wire as CSS variables into Tailwind `fontFamily`.

### 2.4 Third-party scripts
- GTM/GA4 via `next/script` with `strategy="afterInteractive"` (GTM) and keep
  Consent Mode v2 defaults set **before** GTM (in `<head>` via layout) — preserve
  current consent behavior.
- Defer non-critical scripts; ensure no render-blocking in `<head>`.

### 2.5 Caching & headers
- `vercel.ts`/`next.config` headers: long `Cache-Control` + immutable for
  `/_next/static` and `/assets/*`; sensible defaults elsewhere.
- Confirm ISR `revalidate` on blog; static for marketing routes.

## Files
- **Change:** all image usages (sections/pages), `app/layout.tsx` (fonts,
  scripts), `tailwind.config.js` (font vars), `next.config.ts` (images, headers),
  `public/assets/**` (optimized exports).
- **Create:** optional `app/**/opengraph-image.tsx` (dynamic OG) — nice-to-have.

## Acceptance checklist
- [ ] Lighthouse mobile Performance ≥ 90 on the 3 target pages.
- [ ] LCP image is `priority`, served AVIF/WebP, < 200KB at display size.
- [ ] No CLS from images (width/height or fill + aspect set).
- [ ] Fonts `display: swap`, self-hosted, only needed weights.
- [ ] GTM/GA4 load without blocking; Consent Mode still gates analytics.

## Notes
- Vercel serves AVIF/WebP and edge-caches `next/image` automatically — most wins
  come from adopting it consistently. Active CPU pricing model — SSR/ISR cost is
  low for these page volumes.
