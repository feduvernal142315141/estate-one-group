# DESIGN.md — Estate One Group Design System

> Source of truth for all visual decisions. If a component disagrees with this file, the component is wrong.

## Design philosophy

The site is **editorial, not transactional**. It must feel like reading a luxury magazine that happens to sell properties — not a marketplace.

Three guiding principles:

1. **Silence over noise.** Empty space is luxury. Never fill a section just because there is room.
2. **Restraint over showmanship.** Gold is a 1px accent, not a fill. Headlines whisper in italic, they do not shout in bold.
3. **Every detail signed by the brand.** Generic UI patterns (Airbnb-style search bars, marketplace cards, stat counters) are forbidden unless explicitly justified.

## Brand colors (canonical)

These are the **only** colors. No additional grays, no other reds, no other golds.

```css
/* Primary palette — from the official brand manual */
--brand-black:    #000000;  /* sophistication, base */
--brand-gold:     #C7991C;  /* luxury accent */
--brand-red:      #B00000;  /* energy, action — use sparingly */
--brand-cream:    #FFF9DC;  /* warmth, calm, light backgrounds */

/* Tonal scale (derived) */
--gold-light:     #E8C36A;  /* hover states, highlights */
--gold-deep:      #8B6914;  /* small text on cream, secondary accents */
--cream-warm:     #FAF7F0;  /* primary light surface */
--charcoal:       #0A0A0A;  /* primary dark surface (NOT pure black) */
--charcoal-soft:  #1A1610;  /* secondary dark surface, card backgrounds */
```

### Semantic tokens (use these, not raw colors)

```css
/* Light mode (primary) */
--surface-primary:     var(--cream-warm);    /* page background */
--surface-secondary:   #ffffff;              /* cards on cream */
--surface-elevated:    #FFF9DC;              /* modals, popovers */
--text-primary:        var(--charcoal);
--text-secondary:      rgba(10, 10, 10, 0.65);
--text-muted:          rgba(10, 10, 10, 0.45);
--text-on-dark:        var(--brand-cream);
--border-subtle:       rgba(199, 153, 28, 0.18);
--border-emphasis:     rgba(199, 153, 28, 0.4);
--accent:              var(--brand-gold);
--accent-deep:         var(--gold-deep);
--action:              var(--brand-red);

/* Dark mode (used in hero and footer) */
--surface-primary-dark:    var(--charcoal);
--surface-secondary-dark:  var(--charcoal-soft);
--text-primary-dark:       var(--brand-cream);
--text-secondary-dark:     rgba(255, 249, 220, 0.65);
--border-subtle-dark:      rgba(199, 153, 28, 0.15);
```

### Color use rules

| Color | Where it lives | Where it does NOT live |
|---|---|---|
| **Black** | Hero/footer backgrounds, primary text on cream, navbar | Buttons (use red), large fills |
| **Gold** | Borders, dividers, eyebrow text, prices, icons, focus rings | Backgrounds, large headlines (use cream/black), body text |
| **Red** | Primary CTAs, "Just Listed" badges, sold tags | Body text, decorative use, multiple elements per fold |
| **Cream** | Light surface, text on dark, secondary surfaces | Pure white anywhere — pure white kills the warmth |

If you find yourself filling more than ~5% of any viewport with gold, you are misusing it. Gold is jewelry, not paint.

## Typography

```css
/* Fonts (loaded via next/font in lib/fonts.ts) */
--font-serif:  'Playfair Display', Georgia, serif;
--font-sans:   'Inter', system-ui, sans-serif;
```

> Note: a previous DESIGN spec mentioned Noto Serif. Ignore that. **Playfair Display is canonical** for this brand because its italic weights have the soft, editorial feel we need (Noto Serif italic is too neutral).

### Type scale

| Token | Font | Size (desktop) | Size (mobile) | Weight | Line-height | Letter-spacing | Use |
|---|---|---|---|---|---|---|---|
| `display-hero` | Playfair italic | 76px | 44px | 400 | 1.02 | -0.02em | Hero headlines only |
| `display-section` | Playfair italic | 56px | 36px | 400 | 1.05 | -0.01em | Section openers |
| `h1-editorial` | Playfair | 48px | 32px | 400 | 1.1 | -0.005em | Page titles |
| `h2-section` | Playfair | 32px | 26px | 400 | 1.2 | 0 | Subsection titles |
| `h3-card` | Playfair italic | 22px | 20px | 400 | 1.3 | 0 | Property names, card titles |
| `eyebrow` | Inter | 10px | 10px | 400 | 1 | 0.25em (uppercase) | Pre-headline labels |
| `body-lg` | Inter | 16px | 15px | 300 | 1.7 | 0.005em | Primary body text |
| `body-md` | Inter | 14px | 14px | 400 | 1.6 | 0 | Secondary body |
| `body-sm` | Inter | 12px | 12px | 400 | 1.5 | 0 | Captions, metadata |
| `label-caps` | Inter | 10px | 10px | 500 | 1 | 0.2em (uppercase) | Buttons, nav links, badges |
| `metric` | Playfair | 28px | 22px | 400 | 1 | 0 | Prices, stats |

### Typography rules

- **Headlines**: prefer Playfair *italic* over roman. Italic is what gives Sotheby's its signature.
- **Numbers in headlines** (prices, addresses): always Playfair, often italic, never Inter.
- **All-caps text**: only Inter, never Playfair. Always with `letter-spacing: 0.2em` minimum.
- **Body text**: Inter at weight 300 (light) on cream backgrounds, weight 400 on dark. Light weight reads more editorial.
- **No bold serif**. Playfair Display Bold (700) is forbidden — it looks like a wedding invitation, not luxury real estate.
- **Font weights allowed**: Playfair {400}, Playfair italic {400}, Inter {300, 400, 500}. Anything heavier is forbidden.

### Note on Playfair Display weights

Playfair Display from Google Fonts is only available from weight 400. The
editorial "light" feel intended by this design system is achieved through:
- Playfair italic at 400 (not 300)
- Tight letter-spacing (-0.01em to -0.02em)
- Generous line-height (1.02 to 1.1)

Do NOT request weight 300 — it will fallback to a synthetic light that
looks worse than 400.

## Spacing system

Base unit: **8px**.

```css
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-6: 24px;
--space-8: 32px;
--space-12: 48px;
--space-16: 64px;
--space-24: 96px;
--space-32: 128px;
--space-40: 160px;  /* section gap — sacred */
```

### Layout containers

```css
--container-max:      1440px;
--container-narrow:   960px;   /* editorial copy width */
--container-text:     640px;   /* article body width */
--gutter-mobile:      20px;
--gutter-desktop:     56px;
--section-gap:        160px;   /* vertical between major sections */
--section-gap-mobile: 80px;
```

### Spacing rules

- **Section gap is 160px desktop, 80px mobile**. Never less. The whitespace IS the brand.
- **Card padding is generous**: minimum 24px, often 32px+.
- **Never use 8px or less between unrelated elements**. Tight spacing reads as e-commerce.
- **Asymmetric layouts beat symmetric ones**. A 60/40 grid feels more editorial than 50/50.

## Shape

**All corners are sharp. 0px border-radius.**

Exceptions (and only these):
- Avatar circles (perfect circle)
- Play button on video covers (perfect circle)
- Brand mark elements that are inherently round

No rounded buttons. No rounded cards. No rounded inputs. Sharp corners denote architectural precision — this is core to the brand.

## Borders and dividers

- Primary border: **0.5px solid var(--border-subtle)** — that's hairline. 1px is already too heavy in many contexts.
- Emphasis border: **1px solid var(--border-emphasis)** for active/focus states.
- Decorative dividers: **1px gold horizontal line, 60–100px wide**, used between eyebrow and headline (the "Heritage Divider").

```html
<!-- Heritage divider example -->
<div class="flex items-center gap-4 mb-6">
  <div class="w-16 h-px bg-[var(--accent)]"></div>
  <span class="eyebrow text-[var(--accent-deep)]">The Collection</span>
</div>
```

## Elevation and depth

Avoid traditional drop shadows. Use **ambient diffusion**:

```css
/* Soft elevation — for floating elements on light surface */
--shadow-soft:    0 30px 60px -20px rgba(0, 0, 0, 0.12);

/* Ambient — for dark surfaces */
--shadow-ambient: 0 20px 60px -10px rgba(0, 0, 0, 0.5);

/* Card hover — barely perceptible lift */
--shadow-hover:   0 40px 80px -30px rgba(0, 0, 0, 0.18);
```

For glass effects (modals, sticky search bar):
```css
background: rgba(10, 10, 10, 0.7);
backdrop-filter: blur(20px);
border: 0.5px solid rgba(199, 153, 28, 0.2);
```

## Motion

Premium motion is **slow and confident**. Cheap motion is fast and bouncy.

```css
--duration-fast:    200ms;   /* hover states */
--duration-base:    400ms;   /* most transitions */
--duration-slow:    700ms;   /* hero reveal, scroll-triggered */
--duration-cinema:  1200ms;  /* image parallax, full-section reveals */

--ease-out-soft:    cubic-bezier(0.22, 1, 0.36, 1);
--ease-in-out-soft: cubic-bezier(0.65, 0, 0.35, 1);
```

### Motion rules

- Default `transition`: `400ms cubic-bezier(0.22, 1, 0.36, 1)`.
- No bouncy easings. No `ease-out` with a pop. Everything decelerates softly.
- Hover lifts: at most `translateY(-2px)`. Never more.
- Image hover zoom: `scale(1.04)` over 700ms. Never `scale(1.1)+`, that's e-commerce.
- Reveal animations: fade + 16px translateY, staggered 80ms between siblings.
- Page transitions: fade only (no slide). 200ms.
- **No parallax that moves more than 30%** of viewport height.

## Components

### Buttons

```tsx
// Primary CTA — high attention, used 1x per fold
<button className="bg-[var(--brand-gold)] text-[var(--charcoal)] px-10 py-4 text-[10px] font-medium tracking-[0.25em] uppercase hover:bg-[var(--gold-light)] transition-colors duration-400">
  Schedule Consultation
</button>

// Secondary — outline, common
<button className="border border-[var(--brand-cream)]/30 text-[var(--brand-cream)] px-10 py-4 text-[10px] font-medium tracking-[0.25em] uppercase hover:border-[var(--brand-gold)] hover:text-[var(--brand-gold)] transition-all duration-400">
  Explore Properties
</button>

// Ghost — text-only with animated underline
<button className="text-[var(--brand-cream)] text-[10px] tracking-[0.25em] uppercase pb-1 border-b border-[var(--brand-cream)]/40 hover:border-[var(--brand-gold)] transition-colors">
  View Details →
</button>

// Action red — only for "Schedule Tour", "Contact Agent"
<button className="bg-[var(--brand-red)] text-[var(--brand-cream)] px-10 py-4 text-[10px] font-medium tracking-[0.25em] uppercase hover:opacity-90 transition-opacity">
  Schedule Tour
</button>
```

**Button rules:**
- One primary CTA per viewport. Never two.
- Letter-spacing on button text minimum `0.2em`.
- Vertical padding always larger than horizontal × 0.5 (boxy buttons read luxury).
- No icons inside buttons except optional arrow (`→`) on the right.

### Inputs

Bottom-border only. No boxes.

```tsx
<div className="relative pb-1 border-b border-[var(--border-subtle)] focus-within:border-[var(--brand-gold)] transition-colors">
  <label className="block text-[10px] tracking-[0.2em] uppercase text-[var(--accent-deep)] font-serif italic mb-1">
    Location
  </label>
  <input className="w-full bg-transparent text-[14px] py-1 outline-none" />
</div>
```

### Cards (property)

- Aspect ratio: **4:5 vertical**, never 16:9.
- Image fills the card top, no padding around it.
- Metadata BELOW the image, on the cream surface. Never overlay text on the image except for badges.
- Badge (top-left): black background, gold text, uppercase, tiny (10px). E.g. `EXCLUSIVE`, `JUST LISTED`, `PRIME`.
- Property name in Playfair italic.
- Price in Playfair (italic optional).
- Highlights row: small caps Inter, dot-separated. `5 BR · 6 BA · 5,800 SQFT · OCEANFRONT`.
- Bottom border: 0.5px gold hairline.

### Header / Navbar

- **Real PNG logo** from `public/brand/logo.png` — never a placeholder div.
- Logo height: 48–56px desktop, 40px mobile.
- Background: transparent over hero, solid `var(--charcoal)/95` with backdrop-blur on scroll.
- Top utility bar (above main nav): phone, email, language toggle. Hides on scroll.
- Main nav items: Inter 11px, letter-spacing 0.22em, uppercase. Active item underlined in gold.
- CTA on right: ghost outlined button "Schedule Consultation".
- WhatsApp icon: subtle, gray-cream, hover gold. Lives left of CTA.
- Language toggle: `EN | ES`, active state in gold.

### Hero

- **Full viewport height** (100vh).
- Dark background only — `var(--charcoal)` with subtle radial gold glow at 70% 30% (very low opacity).
- Hero image (later): full-bleed luxury property photo, treated with subtle dark gradient overlay (60% black on left fading to 30% on right).
- Eyebrow + heritage divider before headline.
- Headline: Playfair italic 76px, weight 400 italic. Two lines max. Second line in gold.
- Subhead: Inter 16px, weight 300, max-width 520px, opacity 65%.
- Two CTAs: primary gold + ghost ("Schedule a private tour").
- Bottom-left: scroll cue (small dash + "SCROLL" label, 9px tracking 0.3em).
- Bottom-right: subtle "FEATURED RESIDENCE" reference card with backdrop-blur.

### Floating search

Lives BELOW hero, with `-margin-top: -36px` so it bridges dark→light.

- Background: cream (var(--cream-warm))
- 0.5px gold border
- Soft shadow underneath
- Fields separated by 0.5px hairlines
- Field labels: Playfair italic, gold-deep, tiny (10px), uppercase
- Field values: Inter 14px, charcoal
- Submit button: charcoal background, cream text — NOT gold (gold is for the brand, not the function)
- Button label: "Discover" — never "Search"

## Iconography

Use Lucide React. Constraints:

- Stroke width: **1.2** (default 2 is too heavy)
- Size: **18px** for inline icons, **20px** for nav, **24px** maximum
- Color: inherit from text, except gold accent on hover

Forbidden: emoji, colored 3D icons, multi-color icons.

## Imagery

- **Aspect ratios**: 4:5 vertical for property cards, 16:9 horizontal for hero, 3:4 for editorial portraits.
- **Treatment**: light dark overlay (linear-gradient 60% black to 20% black) on hero images for text legibility.
- **No stock photo clichés**: smiling agents in suits, key-handshake, generic skyline. If a photo could appear on a 2015 corporate website, do not use it.
- **No AI-generated faces**. Use Adiel's real photo from `public/brand/founders.jpg` or leave a clear TODO.

## Accessibility

- Contrast ratio ≥ 4.5:1 for body text, ≥ 3:1 for large text. Test gold-on-cream carefully — `#C7991C` on `#FAF7F0` is borderline. Prefer `#8B6914` (gold-deep) for small text on cream.
- Focus states must be visible: 2px gold outline with 2px offset.
- All images need `alt`. Brand-decorative images can have `alt=""` but must declare it explicitly.
- Tab order must follow visual order.
- Respect `prefers-reduced-motion` — disable parallax and image zoom.

## Dark / light mode strategy

- **Default mode: light** (cream surface). It is the editorial home.
- **Dark mode is contextual, not a toggle**: hero is always dark, footer is always dark, modals over dark backdrops are dark.
- **A user toggle for dark mode across the entire site is NOT in MVP scope** — add it in v2 if requested.
- All semantic tokens have `-dark` variants. Use them via `[data-theme='dark']` attribute on parent sections.

## What "premium" looks like in code

A premium component:
- Has 30%+ of its visible area as whitespace
- Uses no more than 3 typographic styles
- Has 1 (one) accent color, used 2–4 times max
- Uses Playfair italic somewhere
- Has a hover state that takes ≥ 400ms
- Looks correct at 320px AND at 1920px without changes to copy

A non-premium component:
- Fills every pixel
- Has bold sans-serif headlines
- Has rounded corners
- Has multiple competing CTAs
- Has bouncy hover animations
- Uses stock photos of people pointing at houses

## Reference brands (for art direction)

When in doubt, look at how these brands handle the problem:

| Brand | What to study |
|---|---|
| Sotheby's International Realty | Property detail pages, italic headlines |
| Compass | Search UX, neighborhood pages |
| The Agency | Brand voice, agent profiles |
| Aman Resorts | Hero sections, motion |
| Apple (product pages) | Section transitions, copy hierarchy |
| Magnum Photos | Editorial image treatment |
| Sotheby's Auctions | Catalog grids, metadata typography |

When stuck, run a quick visual audit of those sites and note what they do that the current Estate One template does NOT.
