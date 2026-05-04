import Image from "next/image";
import { getLocale } from "next-intl/server";
import { Link } from "@/lib/navigation";
import type { Neighborhood } from "@/content/neighborhoods";
import { getNeighborhoodCover } from "@/lib/neighborhood-images";

/**
 * Neighborhood card — used by the /neighborhoods index grid.
 *
 * 16:9 horizontal photography (PropertyCard uses 5:4 — the slight
 * ratio shift signals "different content type" without inventing
 * new typography). Title is Inter 300 large, not Playfair —
 * Playfair stays reserved for property names per DESIGN.md > Cards.
 * Hover treatment is brightness-only, identical to PropertyCard,
 * so the two card types feel cousins on the same site.
 *
 * Property count is shown as a small eyebrow above the title so a
 * visitor can scan how active each area is at a glance.
 */
export async function NeighborhoodCard({
  neighborhood,
  propertyCount,
}: {
  neighborhood: Neighborhood;
  propertyCount: number;
}) {
  const locale = (await getLocale()) as "en" | "es";
  const { url, alt } = getNeighborhoodCover(neighborhood);

  const name = neighborhood.name[locale];
  const blurb = neighborhood.blurb[locale];
  const residenceLabel =
    locale === "es"
      ? propertyCount === 1
        ? "residencia"
        : "residencias"
      : propertyCount === 1
        ? "residence"
        : "residences";
  const noListingsLabel =
    locale === "es" ? "Sin listados activos" : "No active listings";

  return (
    <Link
      href={`/neighborhoods/${neighborhood.slug}`}
      aria-label={`${name} — ${propertyCount} ${residenceLabel}`}
      className="group block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-gold/60"
    >
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-off-white-soft">
        {url && (
          <Image
            src={url}
            alt={alt}
            fill
            sizes="(min-width: 1024px) 600px, 100vw"
            className="object-cover transition duration-700 ease-out group-hover:brightness-[1.04] motion-reduce:transition-none"
          />
        )}
      </div>

      <div className="border-b border-neutral-200 pb-7 pt-6">
        <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-500">
          {propertyCount === 0
            ? noListingsLabel
            : `${propertyCount} ${residenceLabel}`}
        </p>
        <h3 className="mt-3 text-[28px] font-light leading-[1.1] tracking-[-0.02em] text-charcoal lg:text-[32px]">
          <span className="relative inline-block">
            {name}
            <span
              aria-hidden
              className="pointer-events-none absolute -bottom-0.5 left-0 h-px w-full origin-center scale-x-0 bg-brand-gold transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100 group-focus-visible:scale-x-100 motion-reduce:transition-none"
            />
          </span>
        </h3>
        <p className="mt-4 max-w-[480px] text-[15px] leading-[1.6] text-neutral-600 lg:text-[16px]">
          {blurb}
        </p>
      </div>
    </Link>
  );
}
