# DESIGN.md — Estate One Group Design System

> Source of truth for all visual decisions. If a component disagrees with this file, the component is wrong.

---

## Direction shift (v2)

**This document supersedes the v1 heritage direction.** The previous spec (Sotheby's/Aman Resorts references, dark hero, Playfair italic everywhere, warm cream backgrounds) is archived in `DESIGN.v1.md`.

**New direction: tech-luxury minimalism with surgical gold accents.**

References that define this direction: **Linear, Aesop, Compass, Vercel, Brunello Cucinelli, Hermès Beauty**.

What this is NOT: Sotheby's heritage vibes, Aman resort warmth, editorial magazine dark heroes. Those are the old references. They now belong to a competitor archetype we are deliberately not.

---

## Design philosophy

The site is **precise, not theatrical**. It must feel like a considered product company that happens to sell properties — not a luxury magazine.

Three guiding principles:

1. **Silence over noise.** Empty space is luxury. Never fill a section just because there is room.
2. **Restraint over showmanship.** Gold appears in 2–3 places per page, maximum. It is a scalpel, not a paintbrush.
3. **Every detail intentional.** Generic UI patterns (ornate dividers, all-caps tracked nav, dark hero with gold glow) are forbidden. Clean, direct, modern.

---

## Brand colors (canonical)

These are the **only** colors. No additional grays outside the scale below, no other reds, no other golds.

```css
/* Primary palette — from the official brand manual */
--brand-black:    #000000;  /* sophistication, base */
--brand-gold:     #C7991C;  /* luxury accent — use sparingly */
--brand-red:      #B00000;  /* energy, action — use very sparingly */
--brand-cream:    #FFF9DC;  /* warmth — text on dark surfaces only */

/* Tonal scale (derived) */
--gold-light:     #E8C36A;  /* hover states on gold elements */
--gold-deep:      #8B6914;  /* small gold text on light surfaces */
--off-white:      #FAFAF7;  /* primary light surface — replaces cream-warm */
--off-white-soft: #F4F2EC;  /* secondary light surface, subtle backgrounds */
--charcoal:       #0A0A0A;  /* primary dark surface */
--charcoal-soft:  #141414;  /* secondary dark surface */

/* Neutral scale */
--neutral-200:    #E8E6E0;  /* subtle borders */
--neutral-400:    #A8A6A0;  /* placeholder text, muted UI */
--neutral-600:    #6B6963;  /* secondary body text */
--neutral-800:    #2A2825;  /* near-black body text on light */
```

### Semantic tokens (use these, not raw colors)

```css
/* Light mode (primary — 90% of the site) */
--surface-primary:     var(--off-white);       /* page background */
--surface-secondary:   var(--off-white-soft);  /* cards, secondary panels */
--surface-elevated:    #ffffff;                /* modals, popovers */
--text-primary:        var(--charcoal);
--text-secondary:      var(--neutral-800);
--text-muted:          var(--neutral-600);
--text-on-dark:        var(--brand-cream);
--border-subtle:       1px solid var(--neutral-200);  /* #E8E6E0 */
--border-emphasis:     1px solid var(--charcoal);
--accent:              var(--brand-gold);
--accent-deep:         var(--gold-deep);
--action:              var(--brand-red);

/* Dark mode (footer only) */
--surface-primary-dark:    var(--charcoal);
--surface-secondary-dark:  var(--charcoal-soft);
--text-primary-dark:       var(--brand-cream);
--text-secondary-dark:     rgba(255, 249, 220, 0.65);
--border-subtle-dark:      1px solid rgba(255, 255, 255, 0.08);
```

### Color use rules

| Color | Where it lives | Where it does NOT live |
|---|---|---|
| **Charcoal** | Hero/footer backgrounds, primary text on light, primary CTAs | Gold fills anywhere |
| **Gold** | Logo mark, 1–2 accent moments per viewport (max 2–3 per page) | Borders, eyebrows, dividers, buttons, nav underlines |
| **Red** | "Schedule Tour" CTA, "Just Listed" badge (1 per fold max) | Body text, decorative use, multiple elements per fold |
| **Cream** | Text on charcoal/dark surfaces only (hero, footer) | Light surface backgrounds — use off-white instead |
| **Off-white** | Primary page surface, cards, sections | Never pure white — pure white is harsh |

**Gold sniper rule:** Gold #C7991C appears in the logo and a maximum of 2 additional instances per full page. If you are placing gold somewhere and it is not the logo — pause and justify it. Can the component work without gold? If yes, remove it.

Pure white is prohibited as a page background. Use `--off-white` (#FAFAF7).

---

## Typography

```css
/* Fonts (loaded via next/font in lib/fonts.ts) */
--font-sans:   'Inter', system-ui, sans-serif;       /* universal */
--font-serif:  'Playfair Display', Georgia, serif;   /* property names only */
```

Inter is the primary font for everything. Playfair Display has exactly one role: **property names in cards** (e.g. "Villa Aurora"). Nowhere else.

### Type scale

| Token | Font | Desktop | Mobile | Weight | Line-height | Letter-spacing | Use |
|---|---|---|---|---|---|---|---|
| `display-hero` | Inter | 88px | 48px | 300 | 1.0 | -0.04em | Hero headline only |
| `display-section` | Inter | 64px | 40px | 300 | 1.05 | -0.03em | Section openers |
| `h1` | Inter | 48px | 36px | 400 | 1.1 | -0.02em | Page titles |
| `h2` | Inter | 32px | 26px | 400 | 1.2 | -0.015em | Subsection titles |
| `h3` | Inter | 22px | 20px | 500 | 1.3 | -0.005em | Card titles (non-property) |
| `property-name` | Playfair | 24px | 20px | 400 | 1.3 | -0.01em | Property names in cards only |
| `body-lg` | Inter | 18px | 16px | 400 | 1.6 | 0 | Hero subhead, intros |
| `body` | Inter | 16px | 15px | 400 | 1.6 | 0 | Primary body text |
| `body-sm` | Inter | 14px | 14px | 400 | 1.5 | 0 | Captions, metadata |
| `label` | Inter | 14px | 14px | 400–500 | 1 | 0 | Buttons, nav links, badges |
| `metric` | Inter | 32px | 26px | 300 | 1 | -0.02em | Prices, stats |

### Typography rules — critical

- **Inter is universal.** All headlines, eyebrows, body, labels, buttons, nav — Inter.
- **Playfair is one thing:** property names in cards. Not headlines, not eyebrows, not anything else.
- **No uppercase tracked text.** Nav items, buttons, labels, badges: natural case, no tracking. "Properties" not "PROPERTIES".
- **No letter-spacing on UI text.** Letter-spacing is only negative, only on large display sizes (48px+).
- **Negative letter-spacing** at display sizes: -0.02em to -0.04em on anything 48px and above.
- **Font weights:** Inter {300, 400, 500} only. Playfair {400} only. Nothing heavier.
- **No Playfair italic in headlines.** The italic-Playfair-headline pattern is the v1 heritage aesthetic. It is gone.

---

## Spacing system

Base unit: **8px**.

```css
--space-1:  4px;
--space-2:  8px;
--space-3:  12px;
--space-4:  16px;
--space-6:  24px;
--space-8:  32px;
--space-12: 48px;
--space-16: 64px;
--space-24: 96px;
--space-32: 128px;
--space-48: 192px;  /* section gap desktop — sacred */
```

### Layout containers

```css
--container-max:      1280px;   /* was 1440px */
--container-narrow:   960px;
--container-text:     640px;
--gutter-mobile:      20px;
--gutter-desktop:     48px;     /* was 56px */
--section-gap:        192px;    /* was 160px */
--section-gap-mobile: 96px;     /* was 80px */
```

### Spacing rules

- **Section gap is 192px desktop, 96px mobile.** Never less. The whitespace IS the brand.
- **Card padding:** minimum 24px, often 32px+.
- **Never use 8px or less between unrelated elements.** Tight spacing reads as e-commerce.

---

## Shape

**All corners are sharp. 0px border-radius.**

Exceptions (and only these):
- Avatar circles (perfect circle)
- Play button on video covers (perfect circle)
- Brand mark elements that are inherently round

No rounded buttons. No rounded cards. No rounded inputs.

---

## Borders and dividers

- **Standard border:** `1px solid var(--neutral-200)` — #E8E6E0. Confident, not a hairline.
- **Emphasis border:** `1px solid var(--charcoal)` — for active/focus states.
- **No 0.5px hairlines.** Every border is 1px.
- **No gold borders anywhere.** Gold is removed from all border usage.
- **No Heritage Divider.** The decorative gold line between eyebrow and headline (from v1) does not exist in v2.

---

## Elevation and depth

```css
--shadow-card:   0 1px 2px rgba(0,0,0,0.04), 0 8px 24px rgba(0,0,0,0.06);
--shadow-hover:  0 2px 4px rgba(0,0,0,0.06), 0 16px 40px rgba(0,0,0,0.10);
--shadow-modal:  0 8px 32px rgba(0,0,0,0.16);
```

For glass effects (modals, sticky elements):
```css
background: rgba(255, 255, 255, 0.85);
backdrop-filter: blur(24px);
/* No border */
```

---

## Motion

Modern motion is **snappy and confident**, not slow and cinematic.

```css
--duration-instant: 100ms;
--duration-fast:    200ms;   /* hover states, micro-interactions */
--duration-base:    300ms;   /* most transitions */
--duration-slow:    500ms;   /* section reveals */

--ease-snappy: cubic-bezier(0.16, 1, 0.3, 1);   /* default */
--ease-smooth: cubic-bezier(0.65, 0, 0.35, 1);
```

### Motion rules

- **Default transition:** `200ms cubic-bezier(0.16, 1, 0.3, 1)`.
- No bouncy easings.
- **Hover lift:** max `translateY(-1px)`. Never more.
- **No image hover scale.** On hover: brightness or opacity change only. No scale transform.
- **No parallax.** Linear, Aesop, and Compass do not use parallax. Neither do we.
- Reveal animations: fade + 12px translateY, staggered 60ms between siblings.
- Page transitions: fade only. 200ms.
- Respect `prefers-reduced-motion` — disable all motion.

---

## Components

### Buttons

```tsx
// Primary — charcoal fill, off-white text
<button className="bg-[var(--charcoal)] text-[var(--off-white)] px-8 py-4 text-[14px] font-medium hover:opacity-90 transition-opacity duration-200">
  Browse Properties
</button>

// Secondary — charcoal outline
<button className="border border-[var(--charcoal)] text-[var(--charcoal)] px-8 py-4 text-[14px] font-medium hover:bg-[var(--charcoal)] hover:text-[var(--off-white)] transition-all duration-200">
  Learn More
</button>

// Ghost — text only, optional arrow
<button className="text-[var(--charcoal)] text-[14px] font-medium hover:opacity-70 transition-opacity duration-200">
  See all properties →
</button>

// Action red — only "Schedule Tour"
<button className="bg-[var(--brand-red)] text-[var(--brand-cream)] px-8 py-4 text-[14px] font-medium hover:opacity-90 transition-opacity duration-200">
  Schedule Tour
</button>
```

**Button rules:**
- One primary CTA per viewport. Never two.
- **No uppercase.** Natural sentence case: "Browse Properties" not "BROWSE PROPERTIES".
- **No letter-spacing.** Zero tracking on all button text.
- No underline animation on ghost buttons.
- Optional arrow (`→`) on right only.

### Inputs

Light surfaces: boxed with border-neutral-200. Dark surfaces: bottom-border only.

```tsx
// Light surface input
<div className="border border-[var(--neutral-200)] focus-within:border-[var(--charcoal)] transition-colors duration-200">
  <label className="block text-[12px] text-[var(--neutral-600)] px-3 pt-2">
    Location
  </label>
  <input className="w-full bg-transparent text-[14px] px-3 pb-2 outline-none" />
</div>
```

Labels are Inter, not Playfair italic (v1 pattern is gone).

### Cards (property)

- Aspect ratio: **5:4 horizontal**. Not the 4:5 vertical magazine format from v1.
- Property name in Playfair 22–24px (the one and only Playfair use).
- Badge: natural case ("Just Listed"), no uppercase, no tracking. Red background.
- Price in Inter 300.
- **Hover: no scale transform.** Brightness change only (`brightness(1.03)`).
- Bottom: 1px neutral-200 border.

### Header

- **Background:** off-white (#FAFAF7) with `border-bottom: 1px solid var(--neutral-200)`.
- No transparent-over-hero. No charcoal on scroll. Always off-white.
- **Logo:** 32px desktop, 28px mobile. Use `public/brand/logo.png`.
- **Nav items:** Inter 14px weight 400, natural case, no letter-spacing. "Properties" not "PROPERTIES".
- **Active nav item:** charcoal weight 500 + `border-bottom: 2px solid var(--charcoal)`.
- **Language toggle:** plain text "EN / ES" — no box, no border, no separator hairline.
- **CTA:** ghost outlined charcoal "Schedule Consultation".
- No top utility bar in MVP.

### Hero

- **Background: off-white (#FAFAF7).** This is the biggest change from v1. The hero is light, not dark.
- Layout: asymmetric 50/50 optional — copy left, photo right (Compass-style). Or full-width text hero with photo below.
- **Headline:** Inter 88px weight 300, color charcoal, letter-spacing -0.04em. Two lines max. No gold split, no italic.
- **Subhead:** Inter 18px, color neutral-600, max-width 480px.
- 1 primary charcoal CTA + 1 ghost link.
- No stats grid, no eyebrow with divider, no scroll cue, no "Featured Residence" pill, no gold decorations.

### Floating search

- **Background:** white card (`#ffffff`) sitting on off-white surface.
- **Border:** 1px neutral-200.
- **Soft shadow** underneath (`--shadow-card`).
- No negative margin bridging dark→light (hero is light now).
- Field labels: Inter, not Playfair italic.
- Submit button: charcoal solid "Search" (not "Discover").

### Footer

- Background: charcoal (#0A0A0A). No change.
- Logo: cream version (`public/brand/logo-wordmark-cream.png`).
- Links: Inter 14px, natural case, no uppercase, no tracking.

---

## Iconography

Use Lucide React.

- Stroke width: **1.5** (was 1.2).
- Size: 18px inline, 20px nav, 24px max.
- Color: inherit from text. No gold icons.

Forbidden: emoji, colored 3D icons, multi-color icons.

---

## Imagery

- **Aspect ratios:** 16:9 for hero, 5:4 for catalog cards (not 4:5 vertical).
- **Treatment:** natural — no warm-tone filter, no dark overlay unless needed for text legibility.
- No stock photo clichés: agents in suits, key handshakes, generic skylines.
- No AI-generated faces. Use `public/brand/founders.jpg` or leave a TODO.

---

## Accessibility

- Contrast ratio ≥ 4.5:1 for body text, ≥ 3:1 for large text.
- Gold #C7991C on off-white #FAFAF7 is ~3.6:1 — borderline. Use `--gold-deep` (#8B6914) for any gold text smaller than 24px.
- Gold is reserved for the logo mark and large graphic accents — not body text.
- Focus states: 2px charcoal outline, 2px offset.
- All images need `alt`. Decorative images: `alt=""` declared explicitly.
- Tab order must follow visual order.
- Respect `prefers-reduced-motion`.

---

## Dark / light mode strategy

- **Default mode: light** (off-white surface). 90% of the site.
- **Dark mode is contextual, not a toggle:** footer is dark. That's it.
- **Hero is now light.** The v1 dark hero is gone.
- A user-facing dark mode toggle is out of scope.

---

## Reference brands

When in doubt, look at how these brands handle the problem:

| Brand | What to study |
|---|---|
| Linear | Typography rhythm, snappy micro-interactions, monochromatic restraint |
| Aesop | Whitespace, copy density, surface color, restraint in decoration |
| Compass | Real estate layout patterns, search UX, property card structure |
| Vercel | Component layouts, header simplicity, light surface design |
| Brunello Cucinelli | Modern luxury e-commerce, product photography, spacing |
| Hermès Beauty | Sparing accent color use, editorial but not theatrical |

---

## What changed from v1

| Area | v1 (heritage) | v2 (tech-luxury) |
|---|---|---|
| Hero | Dark charcoal, Playfair italic 76px, gold split line | Light off-white, Inter 88px weight 300, all charcoal |
| Typography | Playfair italic everywhere | Inter everywhere; Playfair only for property names |
| Background | Cream warm #FAF7F0 | Off-white #FAFAF7 (cooler, Aesop-adjacent) |
| Nav | UPPERCASE tracked 0.22em | Natural case, no tracking |
| Buttons | Gold fill primary | Charcoal fill primary |
| Gold usage | Borders, eyebrows, dividers, buttons, nav active | Logo + 2 accents per page max. Nowhere else. |
| Borders | 0.5px gold hairlines | 1px neutral-200 (#E8E6E0) |
| Heritage Divider | Gold line before headline | Removed entirely |
| Motion | 400–1200ms cinematic | 200–300ms snappy |
| Parallax | Yes (30% max) | Removed |
| Image hover | scale(1.04) | Brightness change only |
| Card orientation | 4:5 vertical magazine | 5:4 horizontal |
| Section gap | 160px desktop | 192px desktop |
| Container max | 1440px | 1280px |
| Icon stroke | 1.2 | 1.5 |
| Playfair italic | Headlines, eyebrows, inputs, everywhere | Gone — only property-name in Playfair roman |
| Reference brands | Sotheby's, Aman, Magnum Photos, The Agency | Linear, Aesop, Compass, Vercel, Brunello Cucinelli, Hermès Beauty |
