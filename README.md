# Estate One Group — Luxury Real Estate Web Platform

> Premium bilingual real estate website for Estate One Group, a luxury real estate firm operating in South Florida (Miami).

## What this project is

A high-end editorial-style website that does NOT feel like a generic real estate portal. The visual reference points are **Sotheby's International Realty**, **Compass Premium**, **Aman Resorts**, and **Apple's product pages** — not Zillow or Realtor.com.

The site must function as a **lead-generation machine** disguised as a luxury experience: visitors discover, fall in love, and convert without ever feeling sold to.

## Brand identity

- **Brand name:** Estate One Group
- **Market:** Miami, South Florida (USA)
- **Languages:** English + Spanish (full bilingual i18n)
- **Tagline (working):** "Where luxury becomes home." / "Donde el lujo se convierte en hogar."

## Tech stack

- **Framework:** Next.js 16 (App Router) + React 19 + TypeScript
- **Styling:** Tailwind CSS 4 + custom design tokens
- **Icons:** Lucide React
- **Fonts:** Playfair Display (serif editorial) + Inter (sans body)
- **i18n:** next-intl (to be added)
- **Backend (later):** Supabase (Postgres + Auth + Storage)
- **Deploy:** Vercel

## Documents in this repo

Read these in this order before writing any code:

1. **CLAUDE.md** — How to work on this project (model strategy, conventions, do's and don'ts)
2. **DESIGN.md** — Full design system (colors, typography, components, motion)
3. **DESIGN_REVIEW.md** — Specific corrections to the current template
4. **BRAND.md** — Brand voice, art direction principles, copy guidelines
5. **PLAN.md** — Master plan: scope, phases, deliverables
6. **ROADMAP.md** — Sprint-by-sprint breakdown with model recommendations
7. **ARCHITECTURE.md** — Technical architecture and decisions
8. **CONTENT.md** — Real bilingual copy (ES/EN) to replace placeholders

## Status

- ✅ Brand identity defined (logo, colors, typography)
- ✅ Initial template generated (this codebase) — **needs significant refactor**
- ⏳ Pending: i18n implementation, dark/light mode, real content, Supabase integration

## Quick start

```bash
pnpm install
pnpm dev
# → http://localhost:3000
```

## Owner

Estate One Group (internal). Built solo with Claude Code as pair developer.
