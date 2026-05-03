import Image from "next/image";
import Link from "next/link";
import { seedProperties, type Property } from "@/content/properties";

/**
 * Featured listings strip — v3 modern luxury.
 *
 * Three hand-selected properties from `content/properties.ts`,
 * presented as a quiet editorial grid on off-white. The section
 * eyebrow carries no rule (gold is already spent on hero eyebrow,
 * search border, and pillar rules); restraint here is the point.
 * Cards follow DESIGN.md > Components > Cards (property): 5:4
 * horizontal, Playfair solely on the name, no scale on hover —
 * brightness-only treatment per motion spec. Server Component.
 */

const FEATURED_SLUGS = ["villa-aurora", "the-atelier", "casa-del-mar"] as const;

// TODO: replace placeholder Unsplash URLs once commissioned property
// photography is staged under public/images/properties/.
const COVER_PLACEHOLDER_BY_ID: Record<string, string> = {
  "villa-aurora":
    "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=85&w=1600&auto=format&fit=crop",
  "the-atelier":
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=85&w=1600&auto=format&fit=crop",
  "casa-del-mar":
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=85&w=1600&auto=format&fit=crop",
  "continuum-sky":
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=85&w=1600&auto=format&fit=crop",
  "banyan-house":
    "https://images.unsplash.com/photo-1613977257592-4a9a32f9141a?q=85&w=1600&auto=format&fit=crop",
};

const priceFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

const sqftFormatter = new Intl.NumberFormat("en-US");

function formatPrice(cents: number) {
  return priceFormatter.format(cents / 100);
}

type Badge = { readonly label: string; readonly tone: "red" | "charcoal" };

function resolveBadge(badge: Property["badge"]): Badge | null {
  if (badge === "just_listed") return { label: "Just Listed", tone: "red" };
  if (badge === "sold") return { label: "Sold", tone: "charcoal" };
  return null;
}

export function Properties() {
  const featured = FEATURED_SLUGS.map((slug) =>
    seedProperties.find((p) => p.slug === slug),
  ).filter((p): p is Property => Boolean(p));

  return (
    <section className="bg-off-white">
      <div className="mx-auto max-w-[1280px] px-5 py-24 lg:px-12 lg:py-32">
        <header className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between md:gap-12">
          <div>
            <p className="text-[12px] font-medium uppercase tracking-[0.22em] text-neutral-600">
              Currently offered
            </p>
            <h2 className="mt-6 max-w-[640px] text-[36px] font-light leading-[1.05] tracking-[-0.025em] text-charcoal md:text-[44px] lg:text-[52px]">
              Selected listings.
            </h2>
          </div>

          <Link
            href="/properties"
            className="group inline-flex items-center gap-3 self-start text-[14px] font-medium text-charcoal/70 transition-colors duration-300 hover:text-charcoal focus-visible:text-charcoal focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-gold/60 motion-reduce:transition-none md:self-end"
          >
            <span className="relative inline-block">
              See all listings
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

function PropertyCard({ property }: { property: Property }) {
  const cover =
    property.images.find((image) => image.isCover) ?? property.images[0];
  const imageUrl =
    COVER_PLACEHOLDER_BY_ID[property.id] ?? cover?.url ?? null;
  const altText = cover?.alt.en ?? property.title.en;
  const badge = resolveBadge(property.badge);

  return (
    <Link
      href={`/properties/${property.slug}`}
      aria-label={`${property.title.en} — ${property.address.neighborhood}, ${formatPrice(property.price)}`}
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
        {badge && (
          <span
            className={`absolute left-5 top-5 px-3 py-1.5 text-[11px] font-medium ${
              badge.tone === "red"
                ? "bg-brand-red text-brand-cream"
                : "bg-charcoal text-brand-cream"
            }`}
          >
            {badge.label}
          </span>
        )}
      </div>

      <div className="border-b border-neutral-200 pb-6 pt-6">
        <h3 className="font-serif text-[22px] font-normal leading-[1.25] tracking-[-0.01em] text-charcoal lg:text-[24px]">
          <span className="relative inline-block">
            {property.title.en}
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
          {property.bedrooms} bedrooms · {property.bathrooms} baths ·{" "}
          {sqftFormatter.format(property.sqft)} sq ft
        </p>
      </div>
    </Link>
  );
}
