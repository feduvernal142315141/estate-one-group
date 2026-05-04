import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";
import { Link } from "@/lib/navigation";
import type { Property } from "@/content/properties";
import { getCoverImage } from "@/lib/property-images";

/**
 * Property card — v3 modern luxury, per DESIGN.md > Components > Cards.
 *
 * 5:4 horizontal media (not 4:5 vertical). Playfair is reserved
 * for the property name; everything else is Inter. Hover treatment
 * is brightness-only, no scale transform — restraint over motion.
 * 1px neutral-200 baseline rule under each card unifies the grid.
 *
 * Used by the homepage Featured strip and the /properties catalog.
 */

const priceFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

const sqftFormatter = new Intl.NumberFormat("en-US");

function formatPrice(cents: number) {
  return priceFormatter.format(cents / 100);
}

export async function PropertyCard({ property }: { property: Property }) {
  const locale = (await getLocale()) as "en" | "es";
  const t = await getTranslations("propertyCard");

  const { url: imageUrl, alt: altText } = getCoverImage(property);
  const title = property.title[locale];

  let badgeLabel: string | null = null;
  let badgeTone: "red" | "charcoal" | null = null;
  if (property.badge === "just_listed") {
    badgeLabel = t("justListed");
    badgeTone = "red";
  } else if (property.badge === "sold") {
    badgeLabel = t("sold");
    badgeTone = "charcoal";
  }

  return (
    <Link
      href={`/properties/${property.slug}`}
      aria-label={`${title} — ${property.address.neighborhood}, ${formatPrice(property.price)}`}
      className="group block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-gold/60"
    >
      <div className="relative aspect-[5/4] w-full overflow-hidden bg-off-white-soft">
        {imageUrl && (
          <Image
            src={imageUrl}
            alt={altText}
            fill
            sizes="(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw"
            className="object-cover transition duration-700 ease-out group-hover:brightness-[1.04] motion-reduce:transition-none"
          />
        )}
        {badgeLabel && badgeTone && (
          <span
            className={`absolute left-5 top-5 px-3 py-1.5 text-[11px] font-medium ${
              badgeTone === "red"
                ? "bg-brand-red text-brand-cream"
                : "bg-charcoal text-brand-cream"
            }`}
          >
            {badgeLabel}
          </span>
        )}
      </div>

      <div className="border-b border-neutral-200 pb-6 pt-6">
        <h3 className="font-serif text-[22px] font-normal leading-[1.25] tracking-[-0.01em] text-charcoal lg:text-[24px]">
          <span className="relative inline-block">
            {title}
            <span
              aria-hidden
              className="pointer-events-none absolute -bottom-0.5 left-0 h-px w-full origin-center scale-x-0 bg-brand-gold transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100 group-focus-visible:scale-x-100 motion-reduce:transition-none"
            />
          </span>
        </h3>

        <p className="mt-1.5 text-[14px] leading-[1.5] text-neutral-600">
          {property.address.neighborhood}
        </p>

        <p className="mt-5 text-[20px] font-light leading-none tracking-[-0.01em] text-charcoal tabular-nums lg:text-[22px]">
          {formatPrice(property.price)}
        </p>

        <p className="mt-4 text-[13px] leading-[1.5] text-neutral-600">
          {t("bedrooms", { count: property.bedrooms })} ·{" "}
          {t("baths", { count: property.bathrooms })} ·{" "}
          {t("sqft", { count: sqftFormatter.format(property.sqft) })}
        </p>
      </div>
    </Link>
  );
}
