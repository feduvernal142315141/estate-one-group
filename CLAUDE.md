# CLAUDE.md

> This file is read by Claude Code on every session. Keep it current.

## Project at a glance

You are building **Estate One Group**, a luxury real estate website. The bar is **9/10 visually**, not 7/10. References are **Linear, Aesop, Compass, Brunello Cucinelli, Apple** — not Zillow.

**The visual identity must feel like a luxury firm, not a template.** This is the most important rule. If something looks "correct but generic," it is wrong.

## Read before working

Always read these in order at the start of any session:

1. `docs/DESIGN.md` — design system tokens and rules (v2 tech-luxury)
2. `docs/BRAND.md` — brand voice and art direction (v2 modern direct)
3. `docs/PLAN.md` and `docs/ROADMAP.md` — what to build next
4. `docs/CONTENT.md` — bilingual copy reference

## Model strategy (cost/quality tradeoff)

Use the right model for each task. Not every task needs Opus.

### Use Claude Opus 4.7 for
- Architectural decisions (folder structure, data models, state strategy)
- Design system definition and refactor
- Hero section, header, and any "signature" component (these define the brand)
- Solving subtle design quality problems ("it looks generic, fix it")
- Code review and refactor of complex logic
- Writing or rewriting brand copy
- Any task where "good enough" is not acceptable

### Use Claude Sonnet 4.6 for
- Implementing components from a clear spec
- CRUD pages, forms, filters
- i18n string wiring
- Test writing
- Tailwind/CSS implementation when the design is already defined
- Most day-to-day work

### Use Claude Haiku 4.5 for
- Renaming files, simple find-and-replace
- Updating placeholder text with real copy
- Boilerplate generation
- Linting fixes
- Generating type definitions from existing data
- Simple bug fixes with clear repro steps

### Rule of thumb
> Start with Sonnet. Escalate to Opus if Sonnet produces "correct but generic" output. Drop to Haiku for mechanical work.

A good signal you need Opus: you find yourself writing "make it more premium" three times in a row to the same Sonnet output.

## Do's and don'ts

### DO
- Treat every component as a brand expression, not a UI block
- Use the real logo PNG from `public/brand/logo.png` (NOT a placeholder div with letter "E")
- Use design tokens from `app/globals.css`, never hardcode colors
- Keep components small and composable
- Write all user-facing strings as i18n keys, never hardcoded
- Test in both `light` and `dark` modes before considering anything done
- Test in both `EN` and `ES` before considering anything done
- Use `next/image` for all images (never `<img>` tags)
- Keep accessibility in mind (alt text, focus states, contrast ratios ≥ 4.5:1)

### DON'T
- Don't use Unsplash placeholder images in production code (use them only during scaffolding, mark with `// TODO: replace with real photo`)
- Don't write `style={{}}` inline — always use Tailwind classes or CSS modules
- Don't add new dependencies without a clear reason; prefer the existing stack
- Don't use `any` in TypeScript
- Don't ship code that fails `pnpm build`
- Don't generate fake stats, awards, or testimonials. If real content is missing, leave a clear `TODO` placeholder and mention it in the response
- Don't use AI-generated photos of people; either use Adiel's real photo from `public/brand/founders.jpg` or leave a TODO

## Conventions

### File structure
```
app/
  [locale]/              ← i18n routes (en, es)
    page.tsx             ← homepage
    properties/
      page.tsx           ← catalog
      [slug]/page.tsx    ← detail
    layout.tsx
  globals.css            ← design tokens
components/
  brand/                 ← Logo, Wordmark
  layout/                ← Header, Footer, Container
  hero/                  ← Hero (split: HeroEditorial, HeroSplit)
  property/              ← PropertyCard, PropertyGrid, PropertyDetail
  ui/                    ← buttons, inputs, etc (no shadcn duplicates)
  motion/                ← Reveal, Parallax wrappers
public/
  brand/                 ← logo.png, logo-mono.png, founders.jpg
  fonts/                 ← (if self-hosted)
i18n/
  en.json
  es.json
lib/
  fonts.ts               ← next/font config
  i18n.ts                ← next-intl config
  utils.ts
content/
  properties.ts          ← seed data (until Supabase is wired)
```

### Naming
- Components: `PascalCase.tsx`
- Hooks: `useThing.ts`
- Utilities: `kebab-case.ts`
- Tailwind classes: keep them ordered (layout → spacing → color → typography → effects)
- i18n keys: dot-separated, `nav.home`, `hero.title`, `cta.scheduleConsultation`

### Commits
- Format: `type(scope): summary` — e.g. `feat(hero): editorial dark variant`
- Types: `feat`, `fix`, `refactor`, `style`, `docs`, `chore`, `test`
- Keep commits small and focused

## When in doubt

Re-read `docs/DESIGN.md`. If the answer is not there, ask before guessing — luxury and "good enough" are not compatible.
