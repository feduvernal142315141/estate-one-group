# ROADMAP.md — Sprint-by-sprint with model recommendations

> Each task has a recommended Claude model. Use these to control token spend without sacrificing quality.

## Legend

- 🔴 **Opus 4.7** — needs design judgment, brand expression, or complex architecture
- 🟡 **Sonnet 4.6** — clear spec, mostly implementation
- 🟢 **Haiku 4.5** — mechanical, well-defined, low risk

---

## Sprint 0: Setup & cleanup (Week 1)

### Pre-flight
| Task | Model | Why |
|---|---|---|
| Read all docs (`CLAUDE.md`, `DESIGN.md`, etc.) | 🟡 | Comprehension, summary |
| Audit current codebase, list everything to remove | 🟡 | Methodical scan |

### Asset preparation
| Task | Model | Why |
|---|---|---|
| Place real logo PNGs in `public/brand/` | 🟢 | File copy |
| Place founders photo in `public/brand/` | 🟢 | File copy |
| Verify all assets have transparent backgrounds where needed | 🟢 | Visual check |

### Configuration
| Task | Model | Why |
|---|---|---|
| Update `package.json` (add next-intl, framer-motion, sentry) | 🟢 | Add deps |
| Configure `next.config.mjs` (image domains, i18n) | 🟡 | Some thought needed |
| Configure `next/font` for Playfair + Inter | 🟢 | Standard pattern |
| Replace `app/globals.css` with full token system from DESIGN.md | 🟡 | Important to get right |
| Set up ESLint, Prettier, Husky, lint-staged | 🟢 | Boilerplate |
| Add Sentry, Vercel Analytics, PostHog SDKs | 🟢 | Standard install |

### Cleanup
| Task | Model | Why |
|---|---|---|
| Find/replace `Estate Heritage` → `Estate One Group` everywhere | 🟢 | Mechanical |
| Find/replace placeholder property names with Miami listings | 🟢 | Use CONTENT.md data |
| Delete the inline implementation in `app/page.tsx` | 🟢 | Mechanical |
| Replace `app/page.tsx` with clean component composition | 🟡 | Decision on layout |
| Replace placeholder logo div with real PNG `<Image>` | 🟢 | One file |
| Remove all hardcoded inline `style={{}}` in components | 🟡 | Need to map to tokens |

### Repo & deploy
| Task | Model | Why |
|---|---|---|
| Initialize git repo, push to GitHub | 🟢 | One-shot |
| Configure branch protection on `main` | 🟢 | UI clicks, no Claude needed |
| First Vercel preview deploy | 🟢 | Standard |
| Verify build passes on Vercel | 🟢 | Watch logs |

**Sprint 0 model spend rough estimate:** 70% Haiku, 25% Sonnet, 5% Opus → very cheap.

---

## Sprint 1: Header & Hero (Week 2)

### Header component
| Task | Model | Why |
|---|---|---|
| Refactor `<Header>` per DESIGN.md spec | 🔴 | This is a brand-defining component |
| Build `<LanguageToggle>` component | 🟡 | Clear spec |
| Wire active route detection for nav underline | 🟡 | Logic + style |
| Build mobile menu (full-screen, dark) | 🔴 | Brand-defining mobile experience |
| Add scroll-aware backdrop blur and padding collapse | 🟡 | Standard pattern |
| Build `<Logo>` brand component (3 variants) | 🟡 | Wraps next/image |

### Hero component
| Task | Model | Why |
|---|---|---|
| Refactor `<Hero>` per DESIGN.md spec | 🔴 | Most important component |
| Build editorial headline with italic + gold accent | 🔴 | Typography is the brand |
| Build dark gradient background with radial gold glow | 🟡 | Spec is clear |
| Add subtle architectural line decorations (low opacity) | 🟡 | Decorative SVG |
| Build CTA buttons (primary gold + ghost arrow) | 🟡 | Per Button spec |
| Build scroll cue (bottom-left) | 🟢 | Small decorative |
| Build "FEATURED RESIDENCE" pill (bottom-right) | 🟡 | Composition matters |
| Wire `prefers-reduced-motion` for the hero | 🟢 | Standard |

### Shared primitives needed for hero/header
| Task | Model | Why |
|---|---|---|
| Build `<Container>` (max, narrow, text widths) | 🟢 | Boilerplate |
| Build `<Eyebrow>` component | 🟢 | Tiny styled span |
| Build `<HeritageDivider>` component | 🟢 | Gold horizontal line |
| Build `<Button>` with 4 variants | 🟡 | Variant logic |
| Build `<Reveal>` (fade + translateY motion wrapper) | 🟡 | Framer Motion |

### Quality gate
| Task | Model | Why |
|---|---|---|
| Take desktop + mobile screenshots, compare against DESIGN.md | 🔴 | Visual judgment |
| If hero feels "correct but not iconic": iterate with Opus | 🔴 | Brand judgment |
| Run Lighthouse on the homepage | 🟢 | Read numbers |
| Fix any A11y warnings | 🟡 | Standard |

**Sprint 1 model spend rough estimate:** 40% Opus, 50% Sonnet, 10% Haiku.

---

## Sprint 2: Floating search & Footer (Week 3)

### Floating search bar
| Task | Model | Why |
|---|---|---|
| Design and build `<FloatingSearch>` per DESIGN.md | 🔴 | Pivotal UX component |
| Wire query param state for filters | 🟡 | Logic-heavy |
| Build `<Input>` (bottom-border style) | 🟡 | Reused everywhere |
| Build location picker (multiselect chips) | 🟡 | Standard pattern |
| Build price range slider | 🟡 | Use existing libs |
| Mobile drawer version (slide-up sheet) | 🔴 | Mobile UX matters |

### Footer component
| Task | Model | Why |
|---|---|---|
| Refactor `<Footer>` per docs/DESIGN.md > Components > Footer | 🔴 | Brand frame component |
| Build newsletter input (bottom-border + ghost submit) | 🟡 | Per Input spec |
| Build bottom strip with tracking + locale toggle | 🟡 | Standard |
| Wire form submit to `/api/lead` | 🟡 | Server Action |

### Pages that compose the new shell
| Task | Model | Why |
|---|---|---|
| Update `/about` page to use new shell | 🟢 | Mostly composition |
| Update `/contact` page to use new shell | 🟢 | Mostly composition |
| Verify all pages render correctly | 🟢 | Visual check |

**Sprint 2 model spend:** 35% Opus, 50% Sonnet, 15% Haiku.

---

## Sprint 3: Property card & catalog (Week 4)

### Property card
| Task | Model | Why |
|---|---|---|
| Design and build `<PropertyCard>` per DESIGN.md | 🔴 | Brand surface, repeated |
| Build placeholder image treatment (gradient + brand isotype watermark) | 🔴 | Replaces Unsplash |
| Build badge component (EXCLUSIVE / JUST LISTED / PRIME) | 🟡 | Standard |
| Hover state: image scale + soft lift | 🟡 | Per motion spec |
| Loading skeleton (premium, no spinner) | 🟡 | Composition |

### Catalog page
| Task | Model | Why |
|---|---|---|
| Build `/properties` page editorial header | 🔴 | First impression |
| Build `<PropertyGrid>` with responsive columns | 🟡 | Standard CSS Grid |
| Build `<PropertyFilters>` sidebar (sticky desktop, drawer mobile) | 🔴 | Complex UX |
| Wire URL query param state | 🟡 | Standard pattern |
| Build quick filters bar (top of catalog) | 🟡 | Chip group |
| Build sort dropdown | 🟡 | Standard |
| Implement filter logic against `content/properties.ts` | 🟡 | Data filtering |
| Toggle Grid view / Map view | 🟡 | UI plus map embed |
| Empty state when filters yield zero results | 🟡 | Editorial copy |
| Pagination (10 per page) | 🟡 | Standard |
| Per-filter SEO URLs (`/properties/miami-beach`) | 🟡 | Routing |

**Sprint 3 model spend:** 30% Opus, 60% Sonnet, 10% Haiku.

---

## Sprint 4: Property detail page (Week 5)

The single most important page on the site. Budget Opus generously here.

### Above the fold
| Task | Model | Why |
|---|---|---|
| Build `<PropertyGallery>` (full-bleed hero with thumbnail strip) | 🔴 | Visual centerpiece |
| Build sticky info bar that appears on scroll | 🔴 | Premium UX |
| Build property title + neighborhood + price block | 🔴 | Brand expression |
| Build action buttons (Schedule Tour, Brochure, Share) | 🟡 | Standard |

### Body sections
| Task | Model | Why |
|---|---|---|
| Build `<EditorialDescription>` (4-paragraph layout) | 🔴 | Brand voice surface |
| Build spec grid (beds/baths/sqft/year/lot/type) | 🟡 | Layout |
| Build features list (icons + labels) | 🟡 | Lucide icons |
| Build floor plans section (placeholder UI) | 🟡 | Tabbed |
| Build lifestyle paragraphs (Spanish + English) | 🔴 | Copywriting |

### Map and location
| Task | Model | Why |
|---|---|---|
| Embed Mapbox / Google Maps with approximate pin | 🟡 | API integration |
| Build "View exact location" CTA + lead modal | 🔴 | Conversion-critical |
| Wire lead form submission | 🟡 | Server Action |

### Tools and extras
| Task | Model | Why |
|---|---|---|
| Build mortgage calculator (client-side) | 🟡 | Math + form |
| Build Walk Score / Schools placeholder cards | 🟡 | Static for now |
| Build similar properties grid (bottom) | 🟡 | Logic + reuse PropertyCard |
| Build agent card (real photo + bio + CTA) | 🟡 | Composition |
| Build share controls (WhatsApp, email, copy link) | 🟢 | Standard |

### SEO
| Task | Model | Why |
|---|---|---|
| Add Schema.org RealEstateListing JSON-LD | 🟡 | Standard markup |
| Generate dynamic OG image with `@vercel/og` | 🟡 | Templated |
| Per-property metadata (title, description, canonical) | 🟡 | Standard |

**Sprint 4 model spend:** 40% Opus, 50% Sonnet, 10% Haiku.

---

## Sprint 5: i18n + other pages (Week 6)

### i18n full wiring
| Task | Model | Why |
|---|---|---|
| Install + configure `next-intl` | 🟢 | Standard install |
| Restructure routes under `/[locale]` | 🟡 | Routing refactor |
| Extract all strings from components to `en.json` / `es.json` | 🟢 | Mechanical |
| Author Spanish copy (transcreation, not translation) | 🔴 | Brand voice |
| Add `<link rel="alternate" hreflang>` per page | 🟢 | Standard |
| Locale-aware sitemap | 🟢 | Standard |
| Locale-aware date/currency formatters | 🟢 | Intl API |
| Test EN ↔ ES toggle preserves path | 🟡 | QA |

### About / The Firm page
| Task | Model | Why |
|---|---|---|
| Design and build `/about` (60/40 editorial layout) | 🔴 | Brand-defining |
| Write Adiel + co-founder bios (EN + ES) | 🔴 | Voice-critical |
| Build pull-quote component | 🟡 | Reusable |

### Neighborhoods
| Task | Model | Why |
|---|---|---|
| Build `/neighborhoods` index | 🟡 | Card grid pattern |
| Build `/neighborhoods/[slug]` detail | 🔴 | Editorial content |
| Author 5 neighborhood profiles (EN + ES) | 🔴 | Copywriting |

### Contact
| Task | Model | Why |
|---|---|---|
| Build `/contact` page | 🟡 | Standard form page |
| Wire lead form to Resend email | 🟡 | API integration |
| Add WhatsApp click-to-chat | 🟢 | Link |
| Add office address + map | 🟢 | Embed |

### Journal
| Task | Model | Why |
|---|---|---|
| Build `/journal` empty state with newsletter CTA | 🟡 | Composition |
| Create blog post template (for future use) | 🟡 | MDX setup |

**Sprint 5 model spend:** 35% Opus, 45% Sonnet, 20% Haiku.

---

## Sprint 6: Admin panel — Phase 1.5 (Week 7)

### Auth and shell
| Task | Model | Why |
|---|---|---|
| Build `/admin/login` page (single password) | 🟡 | Form + cookie |
| Implement HttpOnly cookie session | 🟡 | Security-sensitive |
| Build `/admin` shell with sidebar | 🟡 | Layout pattern |

### Property management
| Task | Model | Why |
|---|---|---|
| Build property list page | 🟡 | Table component |
| Build property edit form (matches `Property` type) | 🟡 | Long form |
| Implement save action (writes to JSON or commits via API) | 🔴 | Tricky decision |
| Build image upload (Phase 1.5: paste folder name) | 🟡 | Crude UX |
| Build "duplicate property" action | 🟢 | Helper |
| Build status toggle (active / pending / sold) | 🟢 | Toggle UI |

### Other content
| Task | Model | Why |
|---|---|---|
| Build testimonials manager | 🟡 | CRUD form |
| Build leads viewer (table + CSV export) | 🟡 | Standard table |
| Build banner manager (homepage hero alternation) | 🟡 | CRUD |

**Sprint 6 model spend:** 25% Opus, 65% Sonnet, 10% Haiku.

---

## Sprint 7: Polish & launch prep (Week 8)

### Performance
| Task | Model | Why |
|---|---|---|
| Audit all images, ensure `next/image` and proper sizes | 🟢 | Methodical scan |
| Audit JS bundle size per page | 🟡 | Vercel insights |
| Lazy-load Framer Motion where possible | 🟡 | Refactor |
| Add `loading="lazy"` to all non-critical images | 🟢 | Mechanical |
| Lighthouse audit on every key page | 🟢 | Read scores |
| Fix any score below 90 | 🔴 | Diagnostic |

### SEO
| Task | Model | Why |
|---|---|---|
| Generate sitemap.xml | 🟢 | Standard |
| Write robots.txt | 🟢 | Standard |
| Validate Schema.org with Google Rich Results test | 🟢 | Manual check |
| Create OG image for homepage | 🟡 | Design |
| Write meta descriptions per page (handcrafted) | 🔴 | Voice |

### A11y
| Task | Model | Why |
|---|---|---|
| Manual keyboard navigation test | 🟢 | Manual QA |
| Screen reader spot-check (VoiceOver) | 🟢 | Manual QA |
| Color contrast audit (gold-on-cream is borderline) | 🟡 | Tools + judgment |
| Focus state visibility on all interactive elements | 🟡 | Audit |
| Respect `prefers-reduced-motion` everywhere | 🟢 | Mechanical |

### Edge cases
| Task | Model | Why |
|---|---|---|
| Build 404 page (editorial, on-brand) | 🟡 | Brand opportunity |
| Build 500 page (editorial, on-brand) | 🟡 | Brand opportunity |
| Test on slow 3G | 🟢 | Throttle in DevTools |
| Test on iPhone, Android, iPad | 🟢 | Device QA |
| Cross-browser test (Safari, Chrome, Firefox, Edge) | 🟢 | QA |

### Legal
| Task | Model | Why |
|---|---|---|
| Add privacy policy page (placeholder legal copy) | 🟢 | Template |
| Add terms of service page | 🟢 | Template |
| Add cookie banner (if EU traffic expected) | 🟡 | GDPR pattern |

**Sprint 7 model spend:** 15% Opus, 30% Sonnet, 55% Haiku.

---

## Sprint 8: Launch (Week 9)

| Task | Model | Why |
|---|---|---|
| Register domain (e.g. estateonegroup.com) | — | Manual |
| Configure DNS to Vercel | — | Manual |
| Verify SSL active | — | Manual |
| Set up Resend domain verification (DKIM/SPF) | 🟢 | Follow guide |
| Run final smoke test on production URL | 🟢 | Manual QA |
| Submit sitemap to Google Search Console | 🟢 | Manual |
| Submit sitemap to Bing Webmaster Tools | 🟢 | Manual |
| Set up Vercel deploy notifications (Slack/email) | 🟢 | Config |
| Write `OPERATIONS.md` (how to add property, read leads) | 🔴 | Documentation matters |
| Final walkthrough with Adiel | — | Meeting |
| **Launch** | — | Push to prod |

---

## Total estimated model spend (entire project)

| Model | % of work | Where it concentrates |
|---|---|---|
| 🔴 Opus 4.7 | ~30% | Hero, header, footer, brand-defining components, copy, art-direction decisions |
| 🟡 Sonnet 4.6 | ~50% | Most implementation work, forms, filters, CRUD |
| 🟢 Haiku 4.5 | ~20% | Renames, file moves, boilerplate, deploy config |

This balance assumes you escalate to Opus only when needed. If you find yourself "fixing" Sonnet output 3+ times, escalate to Opus immediately — it pays for itself.

## How to use this roadmap with Claude Code

### Pattern 1: Start a sprint
```
@CLAUDE.md @DESIGN.md @ROADMAP.md
We're starting Sprint 1. Read the goals.
First task: refactor the Header component per docs/DESIGN.md > Components > Header (v2 spec).
Use Opus for this — it's a brand-defining component.
```

### Pattern 2: Quick fix
```
@CLAUDE.md
Quick mechanical task: replace all instances of "Estate Heritage" with "Estate One Group" in components/.
Use Haiku.
```

### Pattern 3: Stuck on quality
```
@docs/DESIGN.md @docs/BRAND.md
This Hero feels generic. Re-read the v2 references (Linear, Aesop, Compass, Brunello Cucinelli). 
Use Opus. Iterate until it stops feeling like a template.
```

### Pattern 4: Sanity check before merging
```
@CLAUDE.md @DESIGN.md
Audit this PR against DESIGN.md. Flag anything that violates the design system.
Use Sonnet.
```

## Model selection cheat sheet

If the answer to any of these is "yes", use Opus:
- Does the output need to express the brand?
- Will users see this within their first 3 seconds on the site?
- Is "correct but generic" unacceptable?
- Have I asked Sonnet for "more premium" twice already?

If the answer to any of these is "yes", consider Haiku:
- Is this a find-and-replace?
- Is the file change less than 30 lines?
- Is the spec a config file?
- Is this following an established pattern with no design judgment?

Otherwise, default to Sonnet.
