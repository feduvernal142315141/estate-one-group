# PLAN.md — Estate One Group Web Platform (Project 1)

> Master plan for the public-facing real estate site. The CRM (LinkYdea) is a separate project, planned later.

## Vision

Build a luxury real estate website for Estate One Group that:

1. Looks and feels like a luxury firm (9/10), not a template (7/10)
2. Captures qualified leads from the moment a visitor lands
3. Operates fully bilingual (EN/ES) without compromise on either language
4. Performs at Lighthouse 95+ on every metric
5. Is maintainable solo, by one developer, with Claude Code as pair

## Success criteria for MVP launch

The MVP is launchable when:

- [ ] All pages render in EN and ES with handcrafted copy
- [ ] Real Estate One Group branding is applied everywhere (logo, colors, voice)
- [ ] At least 5 real properties are listed with full content (or 5 well-designed placeholder properties marked as such)
- [ ] Lead-capture forms work end-to-end (form → email to Adiel via Resend)
- [ ] The site passes Lighthouse 95+ on the homepage and a property detail page
- [ ] All v1 heritage patterns are removed (no Playfair italic in headlines, no uppercase tracked nav, no gold borders, no dark hero) — site matches docs/DESIGN.md v2 spec
- [ ] Mobile experience is at parity with desktop (not a degraded fallback)
- [ ] Domain is configured and live on Vercel

## Scope (in)

### Pages
- Homepage (`/`)
- Properties catalog (`/properties`)
- Property detail (`/properties/[slug]`)
- Neighborhoods overview (`/neighborhoods`)
- Neighborhood detail (`/neighborhoods/[slug]`)
- About / The Firm (`/about`)
- Journal/Blog index (`/journal`) — MVP: empty state with newsletter signup
- Contact (`/contact`)
- Admin (`/admin`) — Phase 1.5

### Features
- Bilingual i18n (EN/ES) with route-segment locales
- Property catalog with advanced filters (price, type, beds, baths, neighborhood, features)
- Property detail with gallery, map (approximate), lead-gated exact location
- Lead-capture forms (3 forms: contact, schedule tour, request more info)
- Contextual dark/light: dark hero & footer, light editorial body
- Admin (Phase 1.5): edit properties, manage testimonials, manage banners
- Email transactional (Resend) for lead notifications
- SEO: per-property pages, structured data, sitemaps, OG images
- Analytics: Vercel Analytics + PostHog for events

## Scope (out — for now)

- MLS/IDX integration → Phase 3
- Real-time chat / WhatsApp inbox → CRM project
- 3D virtual tours (real Matterport) → Phase 2
- Buyer accounts / saved searches → Phase 2
- Newsletter automation → Phase 2 (Phase 1: collect emails only)
- Multi-tenant SaaS → Phase 3 (architecture is ready, the UI is not)

## Phases (high-level)

| Phase | Goal | Duration | Dependency |
|---|---|---|---|
| **0** | Setup & cleanup of base template | 1 week | None |
| **1** | Refactor core (header, hero, footer, design system) | 2 weeks | Phase 0 |
| **2** | Catalog + filters + property detail | 2 weeks | Phase 1 |
| **3** | Neighborhoods, About, Contact, Journal | 1 week | Phase 1 |
| **4** | i18n full implementation | 1 week | Phase 1+ (parallel) |
| **5** | Admin panel (Phase 1.5 — crude editing) | 1 week | Phase 2 |
| **6** | Pulido, perf, SEO, A11y audit | 1 week | All above |
| **7** | Launch | — | Phase 6 |

**Total: ~9 weeks solo at part-time pace.** Faster if dedicated full-time.

## Phase 0: Setup & cleanup (Week 1)

Goal: arrive at a clean baseline before adding new features.

### Tasks

- [ ] Read all docs (`CLAUDE.md`, `docs/DESIGN.md`, `docs/BRAND.md`, `docs/ARCHITECTURE.md`, `docs/CONTENT.md`)
- [ ] Place real brand assets in `public/brand/` (logo.png, logo-mono.png, founders.jpg)
- [ ] Update `package.json` dependencies (next-intl, framer-motion, etc.)
- [ ] Configure `next.config.mjs` for image domains, i18n bootstrap
- [ ] Update `app/globals.css` with the canonical token system from DESIGN.md
- [ ] Configure `next/font` to load Playfair Display + Inter properly
- [ ] Delete the inline implementation of `app/page.tsx` (700+ lines of duplicated code)
- [ ] Find/replace `Estate Heritage` → `Estate One Group` everywhere
- [ ] Replace placeholder logo div with real PNG from public/brand/logo.png
- [ ] Set up Sentry, Vercel Analytics, PostHog (env vars only, instrumentation later)
- [ ] Create `content/properties.ts` with 5 real Miami properties (see CONTENT.md)
- [ ] Set up GitHub repo with branch protection
- [ ] Configure ESLint + Prettier + TypeScript strict
- [ ] Set up commit hooks (Husky + lint-staged)
- [ ] First Vercel preview deploy

**Definition of done:** the site runs locally, has correct branding everywhere, and has a clean component composition in `page.tsx`. No new visual changes yet.

## Phase 1: Refactor core (Weeks 2–3)

Goal: hero, header, footer, and shared design primitives are at 9/10 quality.

### Header
- [ ] Real logo PNG, 56px tall
- [ ] Top utility bar with EN/ES toggle (hides on scroll)
- [ ] Main nav with 0.22em letter-spacing, gold underline on active
- [ ] Ghost CTA "Schedule Consultation" on right
- [ ] Sticky behavior with backdrop-blur
- [ ] Mobile menu (full-screen, dark, with same hierarchy)

### Hero
- [ ] Full viewport editorial dark hero
- [ ] Playfair italic 76px headline, 2 lines, second in gold
- [ ] Inter 16px subhead, max-width 520px
- [ ] Two CTAs (primary gold + ghost arrow)
- [ ] Eyebrow with heritage divider
- [ ] No stats grid (removed)
- [ ] No decorative rotated squares (removed)
- [ ] Bottom-left scroll cue, bottom-right featured residence pill
- [ ] Subtle radial gold glow background, no Unsplash placeholder cliché

### Floating search
- [ ] Cream surface bridging dark→light
- [ ] Gold hairline border
- [ ] Soft shadow
- [ ] Playfair italic field labels
- [ ] Charcoal "Discover" submit button

### Footer
- [ ] Reduced to 3 column groups + brand + bottom strip
- [ ] Newsletter as bottom-border input
- [ ] Logo prominent in cream
- [ ] Bottom strip: copyright · privacy · terms · sitemap · language

### Shared primitives
- [ ] `<Container>` component (3 widths: max, narrow, text)
- [ ] `<Eyebrow>` component
- [ ] `<HeritageDivider>` component (the gold line)
- [ ] `<Button>` with 4 variants (primary, secondary, ghost, action)
- [ ] `<Input>` with bottom-border style
- [ ] `<Reveal>` motion wrapper (fade + translateY on scroll)

**Definition of done:** all v1 heritage patterns are removed and v2 design system is applied consistently. The hero, header, and footer are production-quality.

## Phase 2: Catalog + property detail (Weeks 4–5)

Goal: visitors can browse and fall in love with properties.

### Catalog page (`/properties`)
- [ ] Editorial header (eyebrow + Playfair title + intro paragraph)
- [ ] Filters sidebar (sticky on desktop, drawer on mobile)
  - [ ] Location (multiselect of neighborhoods)
  - [ ] Price range (slider with USD formatting)
  - [ ] Type (multiselect)
  - [ ] Bedrooms (chips)
  - [ ] Bathrooms (chips)
  - [ ] Sqft (slider)
  - [ ] Features (chips: pool, oceanfront, smart_home, etc.)
  - [ ] "Clear all" / "Save search"
- [ ] Quick filters across the top (most common: New, Under $5M, Oceanfront, Penthouse)
- [ ] Sort: Most recent, Price ascending, Price descending, Largest
- [ ] Toggle: Grid view / Map view
- [ ] URL-shareable filter state (query params)
- [ ] Pagination or infinite scroll
- [ ] SEO: per-filter URLs (`/properties/miami-beach`, `/properties/oceanfront-under-5m`)

### Property card
- [ ] 4:5 vertical aspect
- [ ] Full-bleed image
- [ ] Badge top-left (EXCLUSIVE / JUST LISTED / PRIME)
- [ ] Below image: italic name, neighborhood label, price, dot-separated highlights
- [ ] Hover: image scale 1.04 over 700ms, soft lift
- [ ] Loading skeleton premium (no spinning circle)

### Property detail (`/properties/[slug]`)
- [ ] Hero gallery (full-bleed, swipe on mobile, fullscreen view)
- [ ] Sticky info bar that appears on scroll (price + Schedule Tour CTA)
- [ ] Bilingual editorial description (4-paragraph structure from BRAND.md)
- [ ] Spec grid: beds, baths, sqft, lot, year, type, features
- [ ] Features list with subtle icons
- [ ] Floor plan section (placeholder UI even if no plans yet)
- [ ] Approximate map (Mapbox or Google Maps, 500m offset)
- [ ] CTA "View exact location" → opens lead form modal → unlocks exact pin
- [ ] CTA "Schedule a private tour" → opens lead form modal
- [ ] Mortgage calculator (client-side, mocked rates)
- [ ] Walk Score (placeholder, real API later)
- [ ] Schools (placeholder, real API later)
- [ ] Similar properties grid at bottom
- [ ] Share controls (WhatsApp, email, copy link)
- [ ] Agent card (real photo from `public/brand/founders.jpg`)
- [ ] Schema.org RealEstateListing structured data
- [ ] OG image auto-generated with property name + price + photo

**Definition of done:** a visitor can find a property via filters, fall in love with the detail page, and submit a lead. All mobile-equivalent.

## Phase 3: Other pages (Week 6)

### About / The Firm (`/about`)
- [ ] 60/40 editorial layout (founders photo + prose)
- [ ] Pull-quote in italic
- [ ] Three pillars (off-market, legacy, architectural literacy)
- [ ] Real bio for Adiel + co-founder
- [ ] CTA "Schedule a conversation"

### Neighborhoods (`/neighborhoods` and detail)
- [ ] Index: grid of neighborhood cards (image + name + vibe + price range)
- [ ] Detail: editorial description, lifestyle paragraphs, properties currently listed there

### Contact (`/contact`)
- [ ] Lead form (name, email, phone, intent, message)
- [ ] Office address (placeholder map)
- [ ] Phone, email, hours
- [ ] WhatsApp click-to-chat
- [ ] Social links

### Journal (`/journal`)
- [ ] Empty state with newsletter signup
- [ ] Sample post template (for when real content arrives)

## Phase 4: i18n full implementation (parallel, Week 4–5)

Goal: every user-facing string is i18n-keyed and translated.

- [ ] Wire `next-intl` per ARCHITECTURE.md
- [ ] Extract all strings to `i18n/messages/en.json` and `es.json`
- [ ] Author Spanish copy from scratch (no machine translation)
- [ ] Add `<link rel="alternate" hreflang>` per page
- [ ] Locale-aware sitemaps
- [ ] Locale toggle preserves current path
- [ ] Date/number/currency formatting per locale (`Intl.NumberFormat`)
- [ ] Slugs stay locale-agnostic (single canonical slug per property)

## Phase 5: Admin panel — Phase 1.5 (Week 7)

Goal: Adiel can edit content without touching code, before Supabase wiring.

### Approach
Crude but functional: password-gated route (`/admin`) that lets Adiel:
- View all properties
- Add a new property (form posts to a Server Action that writes to a JSON file in dev or commits to GitHub via Octokit in prod — TBD)
- Edit a property
- Mark properties as sold / pending
- Manage testimonials (real ones only)
- View captured leads

This is intentionally lightweight. Phase 2 replaces it with a Supabase-backed proper admin.

### Tasks
- [ ] Login page with single password (`ADMIN_PASSWORD` env var)
- [ ] HttpOnly cookie session (1 hour)
- [ ] Property list page
- [ ] Property edit form (matches `Property` type from ARCHITECTURE.md)
- [ ] Image upload (Phase 1.5: drop a folder name, real upload in Phase 2)
- [ ] Testimonials manager
- [ ] Leads viewer (CSV export)
- [ ] Logout button

## Phase 6: Polish, perf, SEO, A11y (Week 8)

- [ ] Lighthouse audit on every key page (homepage, catalog, detail, about, contact)
- [ ] Optimize images (next/image with proper sizes)
- [ ] Audit JS bundle (Vercel speed insights)
- [ ] Manual A11y testing (keyboard, screen reader, color contrast)
- [ ] WCAG AA compliance pass
- [ ] OG images for all pages
- [ ] sitemap.xml and robots.txt
- [ ] Structured data validation (Google Rich Results test)
- [ ] Cross-browser test (Safari, Chrome, Firefox, Edge)
- [ ] Test on real devices (iPhone, Android, iPad)
- [ ] Test on slow 3G network
- [ ] 404 page (editorial, on-brand)
- [ ] 500 page (editorial, on-brand)
- [ ] Privacy policy + terms (placeholder copy from a legal template, replace with real later)

## Phase 7: Launch (Week 9)

- [ ] Domain registered (e.g. `estateonegroup.com`) and DNS pointed at Vercel
- [ ] SSL active (Vercel handles)
- [ ] Email DKIM/SPF set up via Resend
- [ ] Final review with Adiel (live walkthrough)
- [ ] Submit sitemap to Google Search Console + Bing Webmaster Tools
- [ ] Set up Vercel deploy notifications
- [ ] Document operations in `OPERATIONS.md` (how to add a property, how to read leads)
- [ ] **Launch** 🟡

## Risks & mitigations

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| Real photography never arrives | Medium | High | Build with high-quality gradient placeholders; design works without photos |
| Spanish copy quality is mediocre | Medium | Medium | Hire a native bilingual copywriter for ES if budget allows; otherwise Adiel reviews every string |
| Performance budget broken by motion library | Medium | Medium | Lazy-load Framer Motion only on pages that use it |
| Admin panel complexity creep | High | Low | Aggressively scope Phase 1.5 to "good enough"; Phase 2 redoes it properly |
| Mobile experience cut corners | Medium | High | Test mobile FIRST in every component, then desktop |
| Brand voice drifts toward generic during build | High | High | Re-read BRAND.md weekly; resist the temptation to ship "correct but generic" copy |

## When to pause and reassess

Pause and reassess if:

- The site passes Lighthouse but feels generic in real-world testing → re-read BRAND.md, check art direction
- The codebase exceeds 100 components → consolidation pass needed
- A single component takes more than 2 days → it's probably wrong scope, break it down
- Adiel's feedback is consistently "this looks like a template" → don't push forward, regroup with Opus on hero/key components

## Definition of "done" for the whole MVP

The site is **launchable** when a luxury client visits, browses for 90 seconds, and sends a contact form — and Adiel receives a clean email about it. Anything more polished is a future phase.
