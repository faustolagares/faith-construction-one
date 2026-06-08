# Faith Waste Solutions — Página de Dumpster Rentals

**Data:** 2026-06-08
**Status:** Aprovado

## Objetivo
Adicionar uma nova vertical (Faith Waste Solutions — aluguel de caçambas/dumpster
de 16 yardas) como uma página de serviço integrada ao site Faith Construction One,
seguindo o mesmo design system, responsiva, com rota própria.

## Decisões
- **Modelo de marca:** página de serviço integrada (mesma Navbar e Footer).
- **Rota:** `/waste-solutions` · **Label no menu:** "WASTE SOLUTIONS".
- **Contato:** Call/Text em destaque (904-566-3799) + formulário de orçamento.
- **Backend:** reaproveita `/api/contact` existente (Resend), sem mudanças.

## Arquitetura
- `src/pages/WasteSolutionsPage.tsx` — wrapper `<Navbar/>` + seções + `<Footer/>`.
- `src/sections/WasteSolutions/` — seções isoladas da vertical + `data.ts` (constantes).
- Edits: `App.tsx` (rota), `DesktopMenu.tsx` + `Navbar/index.tsx` (link), `Footer/index.tsx` (Services).
- Reuso: `Navbar`, `Footer`, `@/lib/motion`, `lucide-react`, paleta/tipografia atuais.

## Seções
1. **WasteHero** — eyebrow, H1 "Dumpster Rentals.", tagline, badge 16-Yard, CTAs Call/Text + pill Same-Day Delivery. Sem dependência de foto (slot opcional).
2. **WastePricing** — Daily $250 (inclui 1 ton), Weekly $360, Monthly $450 (cards escuros, accents vermelhos).
3. **WasteFees** — $80/ton extra · $30/dia extra · entrega grátis até 30mi do 32223 · milhagem além.
4. **WastePerfectFor** — 6 usos (Home Cleanouts, Remodeling, Construction Debris, Demolition Debris, Junk Removal, Yard Cleanup).
5. **WasteProcess** — 3 passos: Book → We Deliver → We Haul Away.
6. **WasteServiceArea** — 30 milhas do 32223 (Jacksonville), reusa `map-jax.png`.
7. **WasteContact** — Call/Text + formulário (Nome, Telefone, Email, Período, CEP, Tipo, Mensagem, privacidade).

## Formulário
Posta em `/api/contact` mapeando `service = "Dumpster Rental — 16yd"`, com período/CEP/tipo
compostos no `message`. Emails de confirmação + lead funcionam como hoje.

## Dados de referência (do flyer)
- Telefone: 904-566-3799 (call or text), same-day delivery.
- Caçamba: 16-Yard. Daily $250 (1 ton incluso) / Weekly $360 / Monthly $450.
- Fees: $80/ton extra; $30/dia extra; entrega até 30mi do 32223; milhagem além.
- Slogan: "Reliable Dumpster Rentals. Honest Service." / "Fast. Reliable. Affordable."

## Fora de escopo (follow-up)
- Meta tags por página (SPA sem react-helmet — herda título atual).
- Logo alado da Waste Solutions (uso wordmark tipográfico até receber o arquivo).
- Envio real do form local exige `vercel dev` + `RESEND_API_KEY` (Vite puro não roda `/api`).
