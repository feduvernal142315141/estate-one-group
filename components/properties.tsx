import { getTranslations } from "next-intl/server";
import { Link } from "@/lib/navigation";
import { seedProperties, type Property } from "@/content/properties";
import { PropertyCard } from "@/components/property-card";

/**
 * Featured listings strip — v3 modern luxury.
 *
 * Three hand-selected properties from `content/properties.ts`,
 * presented as a quiet editorial grid on off-white. The section
 * eyebrow carries no rule (gold is already spent on hero eyebrow,
 * search border, and pillar rules); restraint here is the point.
 * Server Component.
 */

const FEATURED_SLUGS = ["villa-aurora", "the-atelier", "casa-del-mar"] as const;

export async function Properties() {
  const t = await getTranslations("propertiesSection");

  const featured = FEATURED_SLUGS.map((slug) =>
    seedProperties.find((p) => p.slug === slug),
  ).filter((p): p is Property => Boolean(p));

  return (
    <section className="bg-off-white">
      <div className="mx-auto max-w-[1280px] px-5 py-24 lg:px-12 lg:py-32">
        <header className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between md:gap-12">
          <div>
            <p className="text-[12px] font-medium uppercase tracking-[0.22em] text-neutral-600">
              {t("eyebrow")}
            </p>
            <h2 className="mt-6 max-w-[640px] text-[36px] font-light leading-[1.05] tracking-[-0.025em] text-charcoal md:text-[44px] lg:text-[52px]">
              {t("title")}
            </h2>
          </div>

          <Link
            href="/properties"
            className="group inline-flex items-center gap-3 self-start text-[14px] font-medium text-charcoal/70 transition-colors duration-300 hover:text-charcoal focus-visible:text-charcoal focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-gold/60 motion-reduce:transition-none md:self-end"
          >
            <span className="relative inline-block">
              {t("seeAll")}
              <span
                aria-hidden
                className="pointer-events-none absolute -bottom-1 left-0 h-px w-full origin-center scale-x-0 bg-brand-gold transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100 group-focus-visible:scale-x-100 motion-reduce:transition-none"
              />
            </span>
            <span
              aria-hidden
              className="text-[13px] transition-transform duration-500 group-hover:translate-x-1 motion-reduce:transition-none"
            >
              →
            </span>
          </Link>
        </header>

        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          {featured.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
}
