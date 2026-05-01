# ARCHITECTURE.md — Technical architecture & decisions

## Stack (final)

| Layer | Choice | Rationale |
|---|---|---|
| Framework | Next.js 16 (App Router) | SSR, RSC, image optimization out of the box |
| Language | TypeScript 5.x strict | Catch errors at build time, not in production |
| UI | React 19 | Already in template, latest stable |
| Styling | Tailwind CSS 4 + design tokens | Speed of dev + design system enforcement |
| Icons | Lucide React | Already in template, lightweight, customizable |
| Fonts | Playfair Display + Inter via `next/font` | Optimized loading, no FOUT |
| i18n | `next-intl` | Best-in-class for App Router, supports locales as URL segments |
| Forms | React Hook Form + Zod | Validation, type safety, accessible |
| Motion | Framer Motion (selectively) | For hero reveals and image parallax — not everywhere |
| Backend | Supabase | DB + Auth + Storage in one product (Phase 2) |
| Hosting | Vercel | Native Next.js, edge functions, image CDN |
| Email | Resend | Transactional emails (form submissions) |
| Analytics | Vercel Analytics + PostHog | Lightweight + product-level events |
| Errors | Sentry | Already industry-standard |

## Folder structure

```
estate-one-web/
├── app/
│   ├── [locale]/                    # i18n routes
│   │   ├── (marketing)/             # public pages, share marketing layout
│   │   │   ├── page.tsx             # homepage
│   │   │   ├── properties/
│   │   │   │   ├── page.tsx         # catalog
│   │   │   │   └── [slug]/
│   │   │   │       └── page.tsx     # property detail
│   │   │   ├── neighborhoods/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [slug]/page.tsx
│   │   │   ├── about/page.tsx
│   │   │   ├── contact/page.tsx
│   │   │   └── layout.tsx
│   │   ├── (admin)/                 # admin pages, share admin layout
│   │   │   └── admin/
│   │   │       ├── layout.tsx
│   │   │       └── ...
│   │   └── layout.tsx               # locale-level layout
│   ├── api/                         # API routes (form handlers, webhooks)
│   ├── globals.css
│   └── layout.tsx                   # root layout
├── components/
│   ├── brand/
│   │   ├── logo.tsx                 # uses Image with the real PNG
│   │   └── wordmark.tsx
│   ├── layout/
│   │   ├── header.tsx
│   │   ├── footer.tsx
│   │   ├── container.tsx
│   │   └── language-toggle.tsx
│   ├── hero/
│   │   ├── hero-editorial.tsx       # main editorial hero
│   │   └── hero-split.tsx           # alternate variant for inner pages
│   ├── property/
│   │   ├── property-card.tsx
│   │   ├── property-grid.tsx
│   │   ├── property-detail.tsx
│   │   ├── property-gallery.tsx
│   │   ├── property-filters.tsx
│   │   └── property-map.tsx
│   ├── search/
│   │   └── floating-search.tsx
│   ├── about/
│   │   └── founders-section.tsx
│   ├── motion/
│   │   ├── reveal.tsx               # fade + translateY on viewport enter
│   │   └── parallax-image.tsx
│   └── ui/
│       ├── button.tsx
│       ├── input.tsx
│       ├── eyebrow.tsx
│       ├── heritage-divider.tsx
│       └── ...
├── content/
│   ├── properties.ts                # seed property data (until Supabase)
│   ├── neighborhoods.ts
│   ├── testimonials.ts              # real-only, no fakes
│   └── team.ts
├── i18n/
│   ├── messages/
│   │   ├── en.json
│   │   └── es.json
│   ├── routing.ts                   # next-intl routing config
│   └── request.ts
├── lib/
│   ├── fonts.ts
│   ├── utils.ts                     # cn(), formatPrice(), formatSqft()
│   ├── property.ts                  # property type, helpers
│   └── seo.ts                       # metadata helpers
├── public/
│   ├── brand/
│   │   ├── logo.png                 # gold version (transparent bg)
│   │   ├── logo-mono.png            # monochrome
│   │   ├── logo-wordmark.png        # text-only
│   │   ├── founders.jpg             # Adiel + co-founder
│   │   └── og-default.jpg           # Open Graph default image
│   └── images/
│       └── properties/              # local property photos when available
├── styles/                          # (only if globals.css gets unwieldy)
├── types/
│   ├── property.ts
│   ├── lead.ts
│   └── locale.ts
├── CLAUDE.md
├── DESIGN.md
├── BRAND.md
├── PLAN.md
├── ROADMAP.md
├── ARCHITECTURE.md
├── CONTENT.md
├── README.md
├── package.json
├── tsconfig.json
└── next.config.mjs
```

## Routing strategy (i18n)

Using `next-intl` with locale as the first URL segment:

```
/             → redirects to /en (or /es based on Accept-Language)
/en           → English homepage
/es           → Spanish homepage
/en/properties
/es/properties
/en/properties/villa-aurora
/es/properties/villa-aurora    → same slug, content translated
/en/admin     → admin (not localized internally, but path matches)
```

**Slugs are NOT translated.** A property has one canonical slug (`villa-aurora`) regardless of locale. Only the content within the page is translated.

## Data model (Phase 1: seed data, Phase 2: Supabase)

### Property type (single source of truth)

```ts
// types/property.ts
export interface Property {
  id: string;
  slug: string;                          // url-safe, locale-agnostic
  status: 'active' | 'pending' | 'sold' | 'off_market';
  
  // Bilingual content
  title: { en: string; es: string };
  description: { en: string; es: string };
  
  // Specs
  price: number;                          // USD cents to avoid float issues
  currency: 'USD';
  type: 'house' | 'condo' | 'townhouse' | 'penthouse' | 'estate' | 'land';
  bedrooms: number;
  bathrooms: number;                      // 3.5 allowed
  sqft: number;
  lotSize?: number;
  yearBuilt?: number;
  
  // Location
  address: {
    street?: string;                     // hidden until lead capture
    city: string;
    state: 'FL';
    zip?: string;
    neighborhood: string;
  };
  approximate: { lat: number; lng: number };  // ~500m offset, public
  exact?: { lat: number; lng: number };       // gated behind lead form
  
  // Media
  images: PropertyImage[];
  videoUrl?: string;
  tour3dUrl?: string;
  floorPlanUrls?: string[];
  
  // Features
  features: string[];                     // 'pool', 'oceanfront', 'smart_home', etc.
  badge?: 'exclusive' | 'just_listed' | 'prime' | 'sold';
  
  // Agent
  agentId: string;
  
  // Timestamps
  createdAt: string;
  updatedAt: string;
}

export interface PropertyImage {
  url: string;
  alt: { en: string; es: string };
  position: number;
  isCover: boolean;
}
```

### Lead type (forms write into Supabase later, console.log in MVP)

```ts
// types/lead.ts
export interface Lead {
  id: string;
  fullName: string;
  email: string;
  phone?: string;
  source: 'web' | 'whatsapp' | 'instagram' | 'facebook' | 'tiktok';
  sourcePropertyId?: string;
  intent: 'buying' | 'selling' | 'consulting' | 'tour';
  message?: string;
  preferredLanguage: 'en' | 'es';
  createdAt: string;
}
```

## Phase 1 vs Phase 2 backend

### Phase 1 (MVP, no real backend)
- Properties: hardcoded in `content/properties.ts`
- Forms: submit to `/api/lead` route, which `console.log`s and emails via Resend
- Auth: not needed (admin happens in Phase 1.5)
- Images: served from `/public/images/properties/` or Unsplash placeholders

### Phase 1.5 (admin, still no Supabase)
- Admin route (`/admin`) protected by a single password env var (`ADMIN_PASSWORD`) — not enterprise auth, just a gate
- Admin can edit `content/properties.ts` via a simple form that writes to a local JSON file (in dev) or commits to Git via API (in prod, if ambitious)
- This is intentionally crude — Phase 2 replaces it

### Phase 2 (Supabase wiring)
- Migrate `properties.ts` → Supabase `properties` table
- Forms write directly to Supabase `leads` table via Server Action
- Admin uses Supabase Auth (email/password)
- Images uploaded to Supabase Storage, transformed via `/storage/v1/render`
- Multi-tenancy preparation: every table has `org_id`, RLS active from day 1

## Key technical decisions

### Why App Router (not Pages Router)
- Better i18n support with route segments
- Server Components reduce client bundle
- Server Actions for forms (no API route boilerplate)

### Why Tailwind 4 (not 3)
- Already in template, native CSS variables, faster builds
- The `@theme inline` directive cleanly maps tokens to utilities

### Why next-intl (not next-i18next)
- Built for App Router from day one
- Cleaner API, smaller bundle
- Best support for server-side translation

### Why Supabase (not custom Postgres + auth)
- One product instead of three (DB + Auth + Storage)
- Generous free tier for MVP
- Row-level security ready for multi-tenant phase
- Real-time subscriptions if needed for CRM later

### Why no shadcn/ui
- Shadcn is excellent but its default look is "modern SaaS" — it would fight the editorial aesthetic
- We'll handcraft the small set of components we need (button, input, eyebrow, divider)
- If we need a complex primitive (date picker, combobox), we revisit and import only that

### Why Framer Motion selectively
- Full library only on pages that need it (hero, property gallery)
- For most reveals, plain CSS transitions are enough
- Avoid `<motion.div>` everywhere — it bloats bundles

### Why we are NOT using
- **MUI / Material UI** — wrong aesthetic, too "Google"
- **Chakra** — same issue
- **Headless UI** — fine but we don't need it for our small primitives
- **Redux / Zustand** — no global state needs in Phase 1
- **tRPC** — overkill for the surface area we have

## SEO strategy

- Each property has its own page with full structured data (`schema.org/RealEstateListing`)
- Sitemap auto-generated from `content/properties.ts` (Phase 1) or DB (Phase 2)
- robots.txt explicit
- OG images auto-generated per property using `@vercel/og`
- Canonical URLs per locale (`/en/properties/villa-aurora` and `/es/properties/villa-aurora` link to each other via `<link rel="alternate" hreflang="...">`)
- Meta descriptions: handcrafted per property, never auto-generated from description text

## Performance budget

| Metric | Target | Hard ceiling |
|---|---|---|
| Lighthouse Performance | 95+ | 90 |
| Lighthouse Accessibility | 100 | 95 |
| LCP | <2.0s | <2.5s |
| CLS | <0.05 | <0.1 |
| INP | <100ms | <200ms |
| First-load JS (per page) | <120kb | <180kb |

If a feature would push us past the hard ceiling, we redesign or defer.

## Security considerations

- All forms have honeypot field + Cloudflare Turnstile (or hCaptcha)
- Lead emails are sent via Resend with proper SPF/DKIM, never from a personal Gmail
- Supabase RLS enabled on every table from day 1
- Admin password rotation policy: every 90 days
- No PII logged in Sentry (use beforeSend hook)
- HTTPS only, HSTS header, secure cookies

## Deployment topology

```
GitHub repo (private)
   │
   ├── push to main         →  Vercel production deploy
   ├── push to feature/*    →  Vercel preview deploy with unique URL
   │
   └── secrets via Vercel env:
       - SUPABASE_URL
       - SUPABASE_ANON_KEY
       - SUPABASE_SERVICE_KEY (server-only)
       - RESEND_API_KEY
       - ADMIN_PASSWORD (Phase 1.5)
       - SENTRY_DSN
       - POSTHOG_KEY
```

## Migration safety

When moving from Phase 1 (seed data) to Phase 2 (Supabase):

1. Keep `content/properties.ts` in repo as backup for 1 release cycle
2. Write a migration script (`scripts/seed-supabase.ts`) that imports `properties.ts` into the DB
3. Add a feature flag `USE_SUPABASE` that toggles data source
4. Cut over one entity at a time (properties first, then testimonials, then leads)
5. Once stable, delete the seed files

## Things we are explicitly NOT doing in Phase 1

- MLS/IDX integration (Phase 3)
- Real-time chat
- AI-powered lead scoring (this lives in the CRM project)
- 3D virtual tours (placeholder UI only, real Matterport in Phase 2)
- Mortgage calculator that hits a real API (mocked in Phase 1)
- User accounts for buyers (saving favorites, etc.)
- Newsletter automation (just collect emails, send manually for now)

These belong on the roadmap but not in MVP scope.
