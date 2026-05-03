import { homePillars } from "@/content/home";

/**
 * Three pillars section — v3.
 *
 * Sits directly under the hero. Off-white-soft surface differentiates
 * it from the page main and from any subsequent section. Three
 * verifiable claims (off-market access, architectural focus, bilingual
 * fluency) per BRAND.md > Three pillars; no fabricated metrics.
 *
 * Each pillar carries a thin 1px gold rule above its title — the
 * fourth deliberate gold accent on the homepage (after the logo,
 * hero eyebrow, and search bar border). Renders as a Server Component
 * — bilingual data is currently presented in EN; the copy swap will
 * be wired with next-intl.
 */
export function Pillars() {
  return (
    <section className="bg-off-white-soft">
      <div className="mx-auto max-w-[1280px] px-5 py-24 lg:px-12 lg:py-32">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-3 md:gap-12 lg:gap-16">
          {homePillars.map((pillar) => (
            <article key={pillar.id} className="flex flex-col">
              <span
                aria-hidden
                className="mb-6 inline-block h-px w-10 bg-brand-gold"
              />
              <h3 className="text-[20px] font-medium leading-snug tracking-[-0.005em] text-charcoal lg:text-[22px]">
                {pillar.title.en}
              </h3>
              <p className="mt-4 text-[15px] font-normal leading-relaxed text-neutral-600 lg:text-[16px]">
                {pillar.description.en}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
