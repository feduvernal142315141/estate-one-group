# DESIGN.md — Estate One Group Design System

> Source of truth for all visual decisions. If a component disagrees with this file, the component is wrong.

---

## Direction shift (v3)

**This document is now at v3.** The v1 heritage direction (Sotheby's/Aman warmth, Playfair italic everywhere, dark hero with gold glow, cream-warm backgrounds) is archived in `DESIGN.v1.md`. The v2 minimalism direction (Linear/Aesop tech-product look, text-only off-white hero, gold restricted to logo only) is preserved here as evolutionary record but is no longer the target.

**Current direction: modern luxury with photography presence.**

References that define v3: **The Agency, Sotheby's International Realty (modern, not the heritage catalog), Aman Resorts, Brunello Cucinelli, Hermès, Bottega Veneta**. Linear and Aesop still inform our typography rhythm and restraint, but no longer the visual composition — v3 is photography-forward, cinematic, brand-anchored.

What this is NOT: a flat tech-product page (v2 Linear), a warm Sotheby's heritage catalog (v1), a high-volume real-estate portal (Zillow/Realtor). It is a luxury booking-desk for a small founder-led firm.

---

## Design philosophy

The site is **cinematic, brand-anchored, and quietly confident**. It must feel like a private booking console for a luxury concierge — not a form, not a portal, not a magazine.

Three guiding principles:

1. **Silence over noise — but never empty.** Whitespace is luxury, but the hero is photography-led; restraint applies to color, typography, and motion, not to visual presence.
2. **Gold as a system, not a decoration.** Gold appears in 4–5 deliberate places per page (logo, hero eyebrow + rule, search border, pillar rules, lang-toggle active). Every other gold instance must be removed or justified. It whispers a system, not a paint job.
3. **Every detail intentional and slow.** Hover transitions live at 300–500ms. Generic UI patterns (ornate dividers, all-caps tracked nav, alarm-red CTAs, hard color blocks inside soft panels) are forbidden. Premium pacing on every interaction.

---

## Brand colors (canonical)

These are the **only** colors. No additional grays outside the scale below, no other reds, no other golds.

```css
/* Primary palette — from the official brand manual, v3 refined */
--brand-black:     #000000;  /* sophistication, base */
--brand-gold:      #C7991C;  /* luxury accent — surgical use */
--brand-red:       #7A0000;  /* v3: oxblood, refined from v1 alarm #B00000 */
--brand-red-deep:  #5A0000;  /* v3: hover state for primary red CTA */
--brand-cream:     #FFF9DC;  /* warmth — text on dark surfaces only */

/* Tonal scale (derived) */
--gold-light:      #E8C36A;  /* hover states on gold elements */
--gold-deep:       #8B6914;  /* small gold text on light surfaces */
--off-white:       #FAFAF7;  /* primary light surface */
--off-white-soft:  #F4F2EC;  /* secondary light surface (Pillars, cards) */
--charcoal:        #0A0A0A;  /* primary dark surface */
--charcoal-soft:   #141414;  /* secondary dark surface */

/* Neutral scale */
--neutral-200:     #E8E6E0;  /* subtle borders */
--neutral-400:     #A8A6A0;  /* very recessive copy (search labels) */
--neutral-500:     #8A8881;  /* mid-recessive copy (interpolated, v3 add) */
--neutral-600:     #6B6963;  /* secondary body text */
--neutral-800:     #2A2825;  /* near-black body text on light */
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

### Color use rules — v3

| Color | Where it lives | Where it does NOT live |
|---|---|---|
| **Charcoal** | Footer background, header glass on scroll, primary text on light, charcoal CTAs | Solid color blocks inside cream panels (search bar lesson — read as "form + button") |
| **Gold** | Logo, hero eyebrow + rule, search bar hairline border, pillar rules, lang-toggle active state. Hover underlines on nav links and on the search "Search" prompt. | Body text, large fills, borders other than hairlines |
| **Oxblood red** | "Schedule a tour" CTA only (high-intent conversion) and "Just Listed" badge | Anywhere else — red is reserved |
| **Cream** | Text on dark surfaces (hero overlay, footer, header glass), the floating search panel surface | Light page backgrounds — use off-white |
| **Off-white** | Primary page surface (sections after the hero, cards) | Never pure white |

**Gold sniper rule (v3):** Gold #C7991C appears in **5 deliberate places per page** maximum: (1) logo, (2) hero eyebrow + rule, (3) search bar hairline border, (4) pillar rules, (5) lang-toggle active. Interactive gold (nav link underline reveal, search "Search" underline) is allowed because it is hover-only and reinforces the system. If you are placing gold somewhere new — pause and justify it against this list.

Pure white is prohibited as a page background. Use `--off-white` (#FAFAF7).

**Red restraint:** Oxblood `#7A0000` is the only red on the site. The hover state goes to `#5A0000` (--brand-red-deep). Never use the v1 alarm-red `#B00000`.

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

### Buttons — v3

```tsx
// Action red — primary conversion CTA (Schedule a tour)
<Link className="
  bg-brand-red text-brand-cream px-10 py-3.5
  text-[13px] font-medium tracking-[0.08em]
  shadow-[0_2px_4px_rgba(0,0,0,0.1)]
  transition-all duration-500
  hover:-translate-y-px hover:bg-brand-red-deep
  hover:shadow-[0_16px_32px_-12px_rgba(122,0,0,0.55)]
  motion-reduce:hover:translate-y-0 motion-reduce:transition-none
">
  Schedule a tour
</Link>

// Ghost cream over dark — secondary action on hero (Browse Properties)
<Link className="
  group inline-flex items-center gap-3
  border border-brand-cream/55 px-10 py-3.5
  text-[13px] font-medium tracking-[0.08em] text-brand-cream
  transition-all duration-500
  hover:border-brand-cream hover:bg-brand-cream hover:text-charcoal
  motion-reduce:transition-none
">
  Browse Properties
  <span aria-hidden className="text-[12px] transition-transform duration-500 group-hover:translate-x-1 motion-reduce:transition-none">
    →
  </span>
</Link>

// Ghost cream outlined — header CTA (Contact us)
<Link className="
  border border-brand-cream/35 px-7 py-2.5
  text-[13px] font-medium tracking-[0.08em] text-brand-cream
  backdrop-blur-sm transition-all duration-500
  hover:border-brand-cream hover:bg-brand-cream hover:text-charcoal
">
  Contact us
</Link>

// Charcoal solid — used on light surfaces (cards, secondary pages)
<button className="
  bg-charcoal text-off-white px-10 py-3.5
  text-[13px] font-medium tracking-[0.08em]
  transition-opacity duration-500 hover:opacity-90
">
  Browse Properties
</button>
```

**Button rules — v3:**
- **One primary CTA per viewport.** Never two of the same weight.
- **Pacing:** all transitions live at 300–500ms. No 200ms snap.
- **Tracking:** all button text uses `tracking-[0.08em]`. The single exception to the "no letter-spacing on UI text" rule, justified by premium typesetting at small sizes.
- **No uppercase.** Natural case: "Schedule a tour" not "SCHEDULE A TOUR".
- **Sharp corners:** 0px radius on every button.
- **Arrow micro-motion:** ghost buttons may carry a `→` glyph that translates `+1px` on group-hover over 500ms.
- **Lift on primary red only.** Other CTAs change color/background only.

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

### Header — v3

Composes against a dark hero photo on the home route, against off-white surfaces elsewhere. The route check is `pathname === "/"`; on any other route, the dark glass state is applied from first paint so cream typography stays legible.

- **Position:** `fixed inset-x-0 top-0 z-50`.
- **Initial state (over hero):** `bg-transparent`, `border-bottom: 1px solid rgba(255,249,220,0.08)` (cream/8 hairline horizon), `py-7`.
- **Scrolled state (>80px) or mobile menu open:** `bg-charcoal/85`, `backdrop-blur-xl`, `border-bottom: 1px solid rgba(199,153,28,0.25)` (gold hairline), `shadow-[0_8px_32px_rgba(0,0,0,0.25)]` (soft depth), `py-4`.
- **Transition:** `300ms` between states, all properties.
- **Logo lockup:** `public/brand/logo.png` at h-10 (40px), gap-4, paired with "Estate One Group" wordmark in Inter 15px weight 500 cream, tracking-[0.01em].
- **Nav items:** Inter 15px weight 500 cream/60, natural case, tracking-[0.02em]. Hover transitions to cream and reveals a 1px gold underline that scales from center over 500ms ease-snappy. Container gap-12.
- **Active nav item:** (TODO until routing wired) — same gold underline, persistent.
- **Language toggle:** plain text "EN / ES" with a slash separator at cream/20. **Active locale text-brand-gold** (a deliberate gold accent in the system); inactive cream/30 hover cream.
- **CTA "Contact us":** cream outlined ghost. `border-brand-cream/35 px-7 py-2.5 text-[13px] tracking-[0.08em] backdrop-blur-sm`, hover swaps to cream fill.
- **Mobile menu:** full-screen `bg-charcoal/95` backdrop-blur-xl overlay. Items Inter 18px weight 500 cream with gold/20 hairline dividers. Body scroll lock active.
- **Focus states:** gold/60 outline at 2-3px offset on every interactive element.
- No top utility bar in MVP.

### Hero — v3

Full-bleed architectural photography under a composed multi-layer overlay. Editorial typography sits left-aligned over the cinematic ground.

- **Background:** photo via `next/image fill object-cover priority`. Source is commissioned architectural photography (currently a Unsplash placeholder marked TODO).
- **Section:** `relative min-h-screen w-full overflow-hidden bg-charcoal` (charcoal fallback before the image loads).
- **Overlay composition (back to front):**
  1. **Top scrim** `h-48 bg-gradient-to-b from-charcoal/65 to-transparent` — composes with the transparent navbar.
  2. **Left-to-right cinematic gradient** `bg-gradient-to-r from-charcoal/75 via-charcoal/40 to-charcoal/20` — anchors the editorial copy block on the left.
  3. **Bottom vignette** `h-1/2 bg-gradient-to-t from-charcoal/85 via-charcoal/30 to-transparent` — prepares the floating search ground.
  4. **Soft radial corner vignette** `bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(10,10,10,0.4)_100%)]` — frames the composition.
  5. **Subtle grain** — `.bg-grain` utility (SVG fractalNoise tile) at `opacity-[0.07] mix-blend-overlay`. Should be felt, not seen.
- **Container:** `mx-auto max-w-[1280px] px-5 lg:px-12`, `min-h-screen flex flex-col justify-center`, `pt-32 pb-56 lg:pt-40 lg:pb-64`. The pb is generous to leave room for the floating search card overlap.
- **Eyebrow:** Inter 12px weight 500 uppercase tracking-[0.22em] color brand-gold/85, preceded by a 1px x 40px brand-gold/50 rule, gap-4.
- **Headline:** Inter 48 → 64 → 88px weight 300, leading-[1.08], tracking-[-0.025em], cream, `text-balance`, max-w-[680px] desktop. Forced to two lines for cover-page composition. Two lines max, no italic, no gold split.
- **Subhead:** Inter 16 → 18px weight 400, leading-[1.55], cream/75, max-w-[400px]. mt-8 md:mt-12 from headline.
- **CTAs (mt-12 lg:mt-14):** primary oxblood-red "Schedule a tour" + ghost cream "Browse Properties →". See Buttons spec.
- **Floating search** mounted as the last child of the hero section (see below).

### Floating search — v3

Single-surface cream glass panel composed over the hero photo. Reads as a private booking-desk console, not a form.

- **Position:** `absolute inset-x-0 bottom-10 lg:bottom-14 z-20`, centered with `pointer-events-none` outer wrapper so clicks fall through to non-search hero areas.
- **Panel:** `max-w-[920px] border border-brand-gold/12 bg-brand-cream/80 backdrop-blur-xl`.
- **Compound shadow (the "object" framing):**
  ```
  inset 0 1px 0 rgba(255,249,220,0.45),    /* top bevel highlight */
  inset 0 0 0 1px rgba(255,249,220,0.12),  /* full inner ring (double border refinement) */
  0 32px 64px -20px rgba(0,0,0,0.35)       /* outer ground shadow, broad and soft */
  ```
- **Layout:** flex row desktop, flex col mobile. Three field slots + one action slot, all on the same surface. No dark color block.
- **Field slot:**
  - Padding `px-6 py-4`.
  - Label: Inter 10px weight 500 uppercase tracking-[0.2em] text-neutral-400.
  - Value: Inter 15px weight 500 charcoal (full opacity — values lead the hierarchy).
  - Hover: `bg-brand-cream/95`. Focus-visible: cream/95 + gold/50 inset outline.
  - Inter-cell divider: `border-brand-gold/10` hairline (vertical desktop, horizontal mobile).
- **Action slot ("Search"):**
  - Same cream-glass surface but slightly more present: `bg-brand-cream/85` idle, `bg-brand-cream` hover.
  - Divider from fields: `border-brand-gold/8` hairline (finer than inter-field dividers — signals "cell-type change").
  - Padding `px-6 md:pl-8 py-4`, `min-w-[200px]` desktop.
  - Content: text "Search" Inter 14px weight 500 charcoal tracking-[0.12em] + arrow `→` text-[16px] charcoal/55 → charcoal on group-hover.
  - Hover micro-interaction: gold underline reveal under "Search" (matching nav link pattern) + arrow translateX-1, both 500ms ease-snappy.
  - Focus-visible: gold/50 inset outline.
- Server Component (no submit handler yet — slots are buttons for keyboard affordance only).

### Pillars — v3

Sits directly under the hero. Three verifiable claims (no fabricated metrics).

- **Section:** `bg-off-white-soft` (#F4F2EC) — subtle differentiation from the page primary surface.
- **Container:** `max-w-[1280px] mx-auto px-5 py-24 lg:px-12 lg:py-32`.
- **Layout:** 3 columns desktop (`md:grid-cols-3 md:gap-12 lg:gap-16`), 1 column mobile (`gap-16` vertical).
- **Each pillar:**
  - Opens with a 1px x 40px `bg-brand-gold/80` rule.
  - Title: Inter 20–22px weight 500 leading-snug tracking-[-0.005em] charcoal.
  - Description: Inter 15–16px weight 400 leading-relaxed neutral-600.
- **Data source:** `content/home.ts` — bilingual seed, EN currently hardcoded; ES swap with next-intl.
- Server Component.

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

## Reference brands — v3

When in doubt, look at how these brands handle the problem:

| Brand | What to study |
|---|---|
| **The Agency** | Real estate hero photography composition, dark overlay editorial, ghost CTA over photo |
| **Sotheby's International Realty (modern)** | Premium real estate restraint with photography, gold accent strategy. NOT the heritage catalog. |
| **Aman Resorts** | Cinematic photography, hero copy density, "private console" booking interactions |
| **Brunello Cucinelli** | Modern luxury e-commerce, photography curation, premium pacing |
| **Hermès** | Surgical accent color use, oxblood register, editorial but never theatrical |
| **Bottega Veneta** | Architectural moody photography, typography minimalism, sharp corners |
| Linear *(typography only)* | Inter weight rhythm, micro-interaction pacing — but not visual composition |
| Aesop *(typography only)* | Copy density, restraint — but our hero is photo-led, not text-only |

---

## What changed from v1 → v2 → v3

| Area | v1 (heritage) | v2 (tech-luxury) | **v3 (modern luxury w/ photography)** |
|---|---|---|---|
| Hero | Dark charcoal, Playfair italic 76px, gold split | Light off-white, text-only, Inter 88px charcoal | **Photo full-bleed + 4-layer overlay + grain. Inter 88px cream weight 300.** |
| Hero CTAs | Gold fill primary + outline secondary | Charcoal fill + ghost | **Oxblood-red primary + cream-ghost secondary, both with 500ms hover** |
| Header | Charcoal scrolled bar with gold hairlines | Off-white sticky always-light | **Fixed transparent over hero, dark glass on scroll, gold hairline on scroll** |
| Search bar | Gold-bordered cream card with charcoal "Discover" block | Off-white card with charcoal "Search" block | **Single-surface cream glass console, no dark block, gold underline on action** |
| Typography | Playfair italic everywhere | Inter everywhere except property names | Same as v2 — Inter universal, Playfair for property names only |
| Background | Cream warm #FAF7F0 | Off-white #FAFAF7 | Off-white #FAFAF7 + grain texture on hero |
| Nav | UPPERCASE tracked 0.22em | Natural case, no tracking | **Natural case, font-medium, tracking-[0.02em], gold underline reveal hover** |
| Lang toggle active | Gold | Cream lleno | **Gold (back to gold — system identity)** |
| Gold usage | Borders, eyebrows, dividers, buttons, everywhere | Logo only | **Logo + 4 deliberate accents (eyebrow, search border, pillar rules, lang active)** |
| Brand red | Alarm #B00000 | Same | **Oxblood #7A0000 (Brunello/Hermès register), hover #5A0000** |
| Borders | 0.5px gold hairlines | 1px neutral-200 only | 1px neutral-200 base + gold hairlines on hero/search panel |
| Motion | 400–1200ms cinematic | 200–300ms snappy | **300–500ms premium pacing — slower than v2, faster than v1** |
| Parallax | Yes | Removed | Removed |
| Image hover | scale(1.04) | Brightness only | Brightness only |
| Card orientation | 4:5 vertical | 5:4 horizontal | 5:4 horizontal |
| Section gap | 160px desktop | 192px desktop | 192px desktop |
| Container max | 1440px | 1280px | 1280px |
| Icon stroke | 1.2 | 1.5 | 1.25–1.5 (search icons 1.25, nav icons 1.5) |
| Stats grid | Yes, fabricated | Removed | **Replaced by Three Pillars (verifiable claims)** |
| Subtle grain | No | No | **Yes — SVG noise on hero at opacity 0.07 mix-blend-overlay** |
| Reference brands | Sotheby's heritage, Aman, Magnum, The Agency | Linear, Aesop, Compass, Vercel | The Agency, Sotheby's modern, Aman, Brunello, Hermès, Bottega |
