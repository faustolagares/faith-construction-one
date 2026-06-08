# Wave 4 — Polish, Accessibility & Measurement

**Priority:** 🟡/⚪ · **Depends on:** Waves 0–2 (independent of 3)
**Goal:** Close the remaining audit findings and instrument growth so we can
measure and iterate.

## Tasks

### 4.1 Mobile cookie banner (audit: CRITICAL UX, blocks hero CTA on mobile)
- Make the consent UI a compact bottom sheet on mobile (single Accept / Reject
  row + "Preferences" link) so the H1 + primary CTA stay visible above the fold.
- Keep Consent Mode v2 wiring intact.

### 4.2 Headings & semantics
- Fix concatenated heading text ("KitchenRemodeling", "WhyChoose Us",
  "Proudly Building AcrossNortheast Florida…") — insert real spaces so
  crawlers/screen-readers read them correctly.
- Remove duplicate WhyChoose `<h3>`s from the accessible DOM (mark clones
  `aria-hidden` if kept for animation).
- Verify one logical `h1→h2→h3` order per page.

### 4.3 Images & a11y
- Descriptive `alt` on meaningful images (`map-jax.png`,
  `faith-areas-florida.png`); decorative icons → `alt=""` + `aria-hidden`.
- Color-contrast pass on muted text over images.

### 4.4 Measurement
- **Bing Webmaster Tools** (feeds ChatGPT/Copilot) — submit + verify sitemap.
- **GA4 conversion events** via GTM: `book_click`, `quote_click`, `call_click`
  (if re-added), `form_submit` (contact + future booking). Mark as conversions.
- Confirm GSC on the canonical domain; submit sitemap; monitor Coverage +
  Core Web Vitals + Rich Results reports.
- Optional: Vercel Analytics / Speed Insights for field CWV.

### 4.5 Final SEO regression sweep
- Re-run the multi-agent `/seo audit` against production; target Health Score
  ≥ 85; fix any criticals.

## Files
- **Change:** `components/CookieConsent/*`, heading text in sections,
  image alts, `app/layout.tsx` (GTM events/dataLayer), docs.

## Acceptance checklist
- [ ] Mobile: H1 + primary CTA visible above the fold with banner present.
- [ ] No concatenated/duplicate headings; clean heading outline per page.
- [ ] All meaningful images have alt; decorative ones hidden from a11y tree.
- [ ] Bing WMT verified + sitemap submitted.
- [ ] GA4 conversions firing (book/quote/form).
- [ ] Re-audit Health Score ≥ 85.

## Inputs needed
- Bing/Microsoft account for WMT.
- Confirm which actions count as conversions.
