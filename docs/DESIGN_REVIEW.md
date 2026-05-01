# DESIGN_REVIEW.md — Specific corrections to the current template

> Read this AFTER reading DESIGN.md. This document maps general design rules to specific problems in the codebase delivered as the starting template.

## Verdict on the current template

The template scores **7/10**. It must reach **9/10** to compete as a real luxury firm. The gap is not structure — it is art direction, identity, and content authenticity.

The phrase that captures the problem: *"It looks like a startup with a good designer, not a luxury firm with capital and exclusivity."*

## Critical corrections (priority order)

### 1. Replace the placeholder logo (URGENT)

**Problem:** The header renders a 40×40px square with a gold border and the letter "E" inside.

```tsx
// CURRENT (components/header.tsx, lines 69-71) — REMOVE
<div className="w-10 h-10 border-2 border-gold flex items-center justify-center">
  <span className="text-gold font-serif text-lg font-bold">E</span>
</div>
```

**Fix:** Use the real PNG logo from the brand manual.

```tsx
// REPLACE WITH
import Image from 'next/image';
import logo from '@/public/brand/logo.png';

<Image
  src={logo}
  alt="Estate One Group"
  height={56}
  width={56}
  priority
  className="h-14 w-auto"
/>
```

**Action:** Place the real logo PNG (with transparent background) at `public/brand/logo.png`. The user has the original in their brand manual — extract the gold isotype on transparent background.

Also produce: `logo-mono.png` (single-color version for footer / dark areas) and `logo-wordmark.png` (text-only, for compact contexts).

---

### 2. Fix the brand name across all files

**Problem:** The codebase has "Estate Heritage" in the rendered output (per the screenshot) but `app/layout.tsx` says `Estate One Group`. The two names coexist — the brand is incoherent.

**Fix:**
- Find and replace `Estate Heritage` → `Estate One Group` in all files
- Find and replace `ESTATE HERITAGE` → `ESTATE ONE GROUP` where uppercased
- Verify metadata, sitemap, manifest, social tags, and component copy
- Update the working tagline to **"Where luxury becomes home."** (EN) / **"Donde el lujo se convierte en hogar."** (ES)

---

### 3. Delete `app/page.tsx` inline implementation

**Problem:** `app/page.tsx` contains 700+ lines of inline-styled JSX that duplicates and overrides the components in `/components`. There are effectively **two homepages** in this repo, fighting each other.

**Fix:**
- Delete the inline implementation in `app/page.tsx`
- Replace with a clean composition of `<Header />`, `<Hero />`, `<Properties />`, etc.
- Move any unique content from the inline version into the proper components first

```tsx
// app/[locale]/page.tsx — clean version
import { Header } from '@/components/layout/header';
import { Hero } from '@/components/hero/hero';
import { Properties } from '@/components/property/properties';
import { About } from '@/components/about/about';
import { Footer } from '@/components/layout/footer';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Properties />
        <About />
      </main>
      <Footer />
    </>
  );
}
```

---

### 4. Replace generic placeholder property names

**Problem:** Properties are named `Residencia Vista al Mar`, `Penthouse Ejecutivo`, `Casa de Diseño`, set in `Punta del Este, Uruguay` and `Ciudad de México`. This is wrong on two levels:

1. The market is Miami / South Florida, not LATAM
2. The names are generic to the point of being meaningless

**Fix:** Replace seed data with realistic Miami listings. See `CONTENT.md` for the full bilingual list. Quick sample:

| Name | Location | Price | Type |
|---|---|---|---|
| Villa Aurora | Sunny Isles Beach, FL | $4,250,000 | Oceanfront residence |
| The Atelier | Edgewater, Miami | $2,890,000 | Sky lounge condo |
| Casa del Mar | Coral Gables, FL | $6,750,000 | Estate |
| Continuum Sky | South Beach, FL | $8,200,000 | Penthouse |
| Banyan House | Coconut Grove, FL | $3,400,000 | Architectural home |

These are believable, premium-tier, location-specific listings.

---

### 5. Resolve the typography conflict

**Problem:** `DESIGN.md` (template) says fonts are **Noto Serif + Inter**, but `app/globals.css` defines **Playfair Display + Inter**. Neither is fully implemented.

**Fix:** Standardize on **Playfair Display + Inter**. Update `app/layout.tsx` to load both via `next/font`:

```tsx
// app/layout.tsx
import { Playfair_Display, Inter } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-sans',
  display: 'swap',
});

// in <html>
<html className={`${playfair.variable} ${inter.variable}`}>
```

Update `globals.css` to use these CSS variables:
```css
--font-serif: var(--font-serif), Georgia, serif;
--font-sans: var(--font-sans), system-ui, sans-serif;
```

Also update the old DESIGN.md token spec to remove all references to Noto Serif. The canonical DESIGN.md in this docs folder supersedes the one in the original template.

---

### 6. Hero is "correct" but not iconic — refactor

**Problem (per art direction review):** The hero is acceptable but feels like a luxury template, not a signed brand statement. Specific issues:

- Headline "Donde el Lujo Encuentra su Hogar" splits awkwardly across three lines, with "Lujo" alone in gold — looks like a Pinterest quote, not editorial
- Stats overlay (250+, 15+, 98%) is a marketing-agency pattern, not a luxury one
- "Ver Presentación" CTA with a Play icon is generic
- Decorative rotated squares in the corners feel like 2017 portfolio sites
- Hero uses Unsplash image of a generic mansion (cliché)

**Fix:** Rebuild the hero per `DESIGN.md > Components > Hero`:
- Single Playfair italic headline, two lines, second line in gold ("Where luxury / becomes home.")
- Subhead: 16px Inter weight 300, max-width 520px
- Two CTAs only: primary gold "Explore the Collection" + ghost "Schedule a private tour →"
- Remove the stats grid entirely (luxury does not advertise volume)
- Remove decorative rotated squares
- Replace Unsplash image with: a) gradient placeholder until real photography arrives, b) a real Estate One listing photo when available
- Add scroll cue (small dash + label) bottom-left
- Add small "FEATURED RESIDENCE" reference card bottom-right with backdrop-blur

---

### 7. Refactor the header for identity

**Problem:** The header is "correct but normal." It does not feel memorable, and the placeholder logo is the worst offender.

**Fix:**
- Replace placeholder logo with real PNG (see correction #1)
- Increase logo height to 56px (currently 40px)
- Wordmark next to logo: "Estate One" in Playfair 17px weight 400, "GROUP" below in Inter 9px tracked 0.4em
- Top utility bar: hide phone/email; keep only language toggle (EN | ES) on the right
- Main nav: increase letter-spacing to 0.22em (currently 0.05em or default)
- Active nav item: underlined in gold, not just a text color change
- Right side: ghost button "Schedule Consultation" (outlined gold), not solid gold
- On scroll: collapse top utility bar, reduce header padding from 24px to 14px, add backdrop-blur with `var(--charcoal)/95`

---

### 8. Remove the "stats grid" pattern

**Problem:** The current homepage shows `500+ properties sold`, `$1.2B in sales`, `25+ years` as a horizontal stats grid in gold serif. This is a hallmark of marketing pages, not luxury firms.

**Fix:** Delete this section entirely. If social proof is needed, replace with:
- A pull-quote testimonial in Playfair italic (one quote, generous space around it)
- A small "Selected by" line with reference logos (Forbes, Architectural Digest) — only if real
- A "Selected Closings" gallery showing 3 properties with discreet metadata

If real awards/coverage do not exist, leave a TODO and ship without fake numbers.

---

### 9. Refine the "Concierge Privado de Legado" section

**Problem:** The about/services section has good intent but uses generic icon-bullet pairs that read as SaaS landing page.

**Fix:**
- Move to a 60/40 asymmetric layout: 60% editorial portrait (the real founders photo) + 40% prose
- Replace icon list with a single, well-written paragraph in Playfair body
- Below the prose: a horizontal list of 3 pillars in Inter (e.g. "Off-Market Access · Legacy Planning · Architectural Vetting"), separated by gold dots
- One CTA only: "Meet the Team →" or "Schedule a Conversation →"
- Pull-quote on the left below the photo: italic, large, dark — *"Discretion is the highest form of luxury."* — attribution line below in 10px caps

---

### 10. Footer needs more silence

**Problem:** Footer has 4 columns of links + newsletter — it works but is busy.

**Fix:**
- Reduce to 3 column groups: `Properties`, `Firm`, `Contact`. Remove `Legal` block, move to a thin bottom strip.
- Logo on top-left in cream, with the wordmark larger and centered above the columns
- Newsletter input: bottom-border only, label "Receive our quarterly journal", placeholder "your@email.com", submit as "Subscribe →" ghost button
- Bottom strip (smallest line): copyright · privacy · terms · sitemap · language toggle. All in Inter 10px tracked.

---

## Issues that are NOT critical but worth noting

- **`app/globals.css` defines `tailwindcss-animate` but never uses it.** Either use it or remove the dependency.
- **No `loading="lazy"` on images.** Required for performance on the catalog page.
- **No `<noscript>` fallback** for the hero loading state. Low priority but worth adding.
- **Color names in Tailwind config are inconsistent** (`gold` vs `brand-gold`, `charcoal` vs `dark`). Standardize per `DESIGN.md`.

## Dependencies to add (post-refactor)

```json
{
  "next-intl": "^3.x",          // i18n
  "framer-motion": "^11.x",     // motion primitives
  "@vercel/analytics": "^1.x",  // basic analytics
  "@sentry/nextjs": "^8.x"      // error tracking
}
```

## Definition of done for this review

The refactor is complete when:

- [ ] Real logo PNG is loaded everywhere (zero placeholder divs)
- [ ] All references to "Estate Heritage" are gone
- [ ] `app/page.tsx` is < 30 lines and only composes components
- [ ] Property seed data uses Miami / South Florida locations
- [ ] Fonts load Playfair Display + Inter, no Noto Serif anywhere
- [ ] Hero matches the spec in DESIGN.md (no stats grid, no rotated squares, single-line gold accent)
- [ ] Header has language toggle and real ghost CTA
- [ ] No fabricated stats anywhere (all `250+`, `$1.2B` removed or replaced with real numbers + source)
- [ ] All images use `next/image`
- [ ] All user-facing strings are i18n keys, not hardcoded
- [ ] `pnpm build` passes with zero warnings
