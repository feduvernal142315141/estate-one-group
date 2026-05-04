import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ArrowLink, EditorialBlock } from "@/components/editorial";
import { PropertyGallery } from "@/components/property-gallery";
import { VirtualTour } from "@/components/virtual-tour/virtual-tour";
import { seedProperties, type Property } from "@/content/properties";
import { getGalleryImages } from "@/lib/property-images";
import { resolveTour } from "@/lib/virtual-tour";

const priceFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

const numberFormatter = new Intl.NumberFormat("en-US");

function formatPrice(cents: number): string {
  return priceFormatter.format(cents / 100);
}

export async function generateStaticParams() {
  return seedProperties.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const property = seedProperties.find((p) => p.slug === slug);
  if (!property) return { title: "Residence not found — Estate One Group" };

  const loc = locale as "en" | "es";
  const firstParagraph = property.description[loc].split("\n\n")[0]?.trim();
  return {
    title: `${property.title[loc]} — Estate One Group`,
    description: firstParagraph?.slice(0, 200) ?? property.title[loc],
    openGraph: {
      title: `${property.title[loc]} — Estate One Group`,
      description: firstParagraph?.slice(0, 200),
      type: "article",
    },
  };
}

export default async function PropertyDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const loc = locale as "en" | "es";
  const t = await getTranslations("propertyDetail");

  const property = seedProperties.find((p) => p.slug === slug);
  if (!property) notFound();

  const typeLabels: Record<Property["type"], string> = {
    house: t("types.house"),
    condo: t("types.condo"),
    townhouse: t("types.townhouse"),
    penthouse: t("types.penthouse"),
    estate: t("types.estate"),
    land: t("types.land"),
  };

  const galleryImages = getGalleryImages(property);
  const coverImage = galleryImages[0];
  const paragraphs = property.description[loc]
    .split(/\n\n+/)
    .map((p) => p.trim())
    .filter(Boolean);

  const tourEmbedUrl = property.tour ? resolveTour(property.tour).embedUrl : null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    name: property.title[loc],
    description: paragraphs.join(" "),
    image: coverImage?.url ?? undefined,
    offers: {
      "@type": "Offer",
      price: (property.price / 100).toFixed(0),
      priceCurrency: property.currency,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: property.address.city,
      addressRegion: property.address.state,
      addressCountry: "US",
    },
    numberOfRooms: property.bedrooms,
    numberOfBathroomsTotal: property.bathrooms,
    floorSize: {
      "@type": "QuantitativeValue",
      value: property.sqft,
      unitCode: "FTK",
    },
    ...(tourEmbedUrl ? { tourBookingPage: tourEmbedUrl } : {}),
  };

  return (
    <>
      <Header />
      <main className="bg-off-white">
        {/* Gallery */}
        <PropertyGallery images={galleryImages} title={property.title[loc]} />

        {/* Editorial header */}
        <section>
          <div className="mx-auto max-w-[1280px] px-5 pb-12 pt-16 lg:px-12 lg:pb-16 lg:pt-24">
            <p className="text-[12px] font-medium uppercase tracking-[0.22em] text-neutral-600">
              {property.address.neighborhood}
            </p>
            <h1 className="mt-6 font-serif text-[44px] font-normal leading-[1.05] tracking-[-0.02em] text-charcoal md:text-[60px] lg:text-[76px]">
              {property.title[loc]}
            </h1>
            <div className="mt-8 flex flex-col gap-3 md:flex-row md:items-baseline md:justify-between md:gap-12">
              <p className="text-[15px] leading-[1.6] text-neutral-600">
                {property.address.city}, {property.address.state}
              </p>
              <p className="text-[28px] font-light leading-none tracking-[-0.01em] text-charcoal tabular-nums md:text-[36px]">
                {formatPrice(property.price)}
              </p>
            </div>
          </div>
        </section>

        {/* Spec strip */}
        <section>
          <div className="mx-auto max-w-[1280px] px-5 lg:px-12">
            <SpecStrip property={property} t={t} typeLabels={typeLabels} />
          </div>
        </section>

        {/* Editorial description */}
        <section>
          <div className="mx-auto max-w-[1280px] px-5 py-20 lg:px-12 lg:py-28">
            <EditorialBlock label={t("aboutResidence")}>
              <div className="max-w-[640px] space-y-6 text-[16px] leading-[1.75] text-neutral-800 md:text-[17px]">
                {paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </EditorialBlock>
          </div>
        </section>

        {/* Virtual tour */}
        {property.tour && (
          <section className="border-t border-neutral-200">
            <div className="mx-auto max-w-[1280px] px-5 py-20 lg:px-12 lg:py-28">
              <EditorialBlock label={t("virtualTour.label")}>
                <VirtualTour
                  tour={property.tour}
                  propertyId={property.id}
                  fallbackPoster={coverImage?.url ?? ""}
                  posterAlt={coverImage?.alt ?? property.title[loc]}
                  copy={{
                    label: t("virtualTour.label"),
                    heading: t("virtualTour.heading"),
                    enter: t("virtualTour.enter"),
                    loading: t("virtualTour.loading"),
                    fullscreen: t("virtualTour.fullscreen"),
                    exitFullscreen: t("virtualTour.exitFullscreen"),
                    iframeTitle: t("virtualTour.iframeTitle", {
                      title: property.title[loc],
                    }),
                  }}
                />
              </EditorialBlock>
            </div>
          </section>
        )}

        {/* Features */}
        {property.features.length > 0 && (
          <section className="border-t border-neutral-200">
            <div className="mx-auto max-w-[1280px] px-5 py-20 lg:px-12 lg:py-28">
              <EditorialBlock label={t("notableFeatures")}>
                <ul className="grid grid-cols-1 gap-x-12 gap-y-4 sm:grid-cols-2 md:gap-y-5">
                  {property.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-baseline gap-3 text-[15px] leading-[1.5] text-neutral-800 md:text-[16px]"
                    >
                      <span
                        aria-hidden
                        className="inline-block h-px w-3 shrink-0 translate-y-[-3px] bg-brand-gold/70"
                      />
                      {humanizeFeature(feature)}
                    </li>
                  ))}
                </ul>
              </EditorialBlock>
            </div>
          </section>
        )}

        {/* Location */}
        <section className="border-t border-neutral-200">
          <div className="mx-auto max-w-[1280px] px-5 py-20 lg:px-12 lg:py-28">
            <EditorialBlock label={t("location")}>
              <p className="max-w-[560px] text-[16px] leading-[1.65] text-neutral-800 md:text-[17px]">
                {property.address.neighborhood}, {property.address.city},{" "}
                {property.address.state}. {t("locationNote")}
              </p>
              {/* TODO: Mapbox embed with approximate pin once API key is wired. */}
              <div
                aria-hidden
                className="relative mt-10 flex aspect-[16/9] w-full items-center justify-center overflow-hidden border border-neutral-200 bg-off-white-soft"
              >
                <div className="absolute inset-0 bg-grain opacity-[0.06]" />
                <span className="relative text-[12px] font-medium uppercase tracking-[0.22em] text-neutral-500">
                  {t("mapPreview")}
                </span>
              </div>
              <ArrowLink
                href={`/contact?ref=${property.slug}`}
                className="mt-8"
              >
                {t("requestLocation")}
              </ArrowLink>
            </EditorialBlock>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="border-t border-neutral-200 bg-off-white-soft">
          <div className="mx-auto flex max-w-[1280px] flex-col items-start gap-8 px-5 py-20 lg:flex-row lg:items-center lg:justify-between lg:px-12 lg:py-24">
            <div className="max-w-[560px]">
              <p className="text-[12px] font-medium uppercase tracking-[0.22em] text-neutral-600">
                {t("scheduleViewing")}
              </p>
              <h2 className="mt-5 text-[28px] font-light leading-[1.15] tracking-[-0.02em] text-charcoal md:text-[36px]">
                {t("viewingAvailable", { title: property.title[loc] })}
              </h2>
            </div>
            <Link
              href={`/contact?ref=${property.slug}`}
              className="group inline-flex items-center gap-3 border border-charcoal/80 px-7 py-3.5 text-[13px] font-medium tracking-[0.08em] text-charcoal transition-colors duration-300 hover:bg-charcoal hover:text-brand-cream focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-gold/60 motion-reduce:transition-none"
            >
              {t("arrangeViewing")}
              <span
                aria-hidden
                className="text-[13px] transition-transform duration-500 group-hover:translate-x-1 motion-reduce:transition-none"
              >
                →
              </span>
            </Link>
          </div>
        </section>
      </main>
      <Footer />

      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}

const FEATURE_LABELS: Record<string, string> = {
  oceanfront: "Oceanfront",
  pool: "Pool",
  smart_home: "Smart home",
  private_marina: "Private marina",
  wine_cellar: "Wine cellar",
  bay_view: "Bay view",
  high_ceilings: "High ceilings",
  private_terrace: "Private terrace",
  concierge: "Concierge",
  historic: "Historic",
  gardens: "Gardens",
  gated: "Gated",
  guest_house: "Guest house",
  private_elevator: "Private elevator",
  multiple_terraces: "Multiple terraces",
  architectural: "Architectural",
  courtyard: "Courtyard",
  mature_trees: "Mature trees",
  penthouse: "Penthouse",
};

function humanizeFeature(key: string): string {
  if (FEATURE_LABELS[key]) return FEATURE_LABELS[key];
  return key
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function SpecStrip({
  property,
  t,
  typeLabels,
}: {
  property: Property;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  t: any;
  typeLabels: Record<Property["type"], string>;
}) {
  const cells: Array<{ value: string; label: string }> = [
    { value: String(property.bedrooms), label: t("spec.bedrooms") },
    { value: String(property.bathrooms), label: t("spec.baths") },
    {
      value: numberFormatter.format(property.sqft),
      label: t("spec.sqftInterior"),
    },
  ];
  if (property.lotSize) {
    cells.push({
      value: numberFormatter.format(property.lotSize),
      label: t("spec.sqftLot"),
    });
  }
  if (property.yearBuilt) {
    cells.push({ value: String(property.yearBuilt), label: t("spec.yearBuilt") });
  }
  cells.push({ value: typeLabels[property.type], label: t("spec.type") });

  return (
    <dl className="grid grid-cols-2 gap-y-8 border-y border-neutral-200 py-10 sm:grid-cols-3 lg:grid-cols-6 lg:gap-y-0">
      {cells.map((cell, index) => (
        <div
          key={cell.label}
          className={`px-4 first:pl-0 last:pr-0 lg:px-6 ${
            index > 0 ? "lg:border-l lg:border-neutral-200" : ""
          }`}
        >
          <dd className="text-[26px] font-light leading-none tracking-[-0.01em] text-charcoal tabular-nums lg:text-[30px]">
            {cell.value}
          </dd>
          <dt className="mt-3 text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-500">
            {cell.label}
          </dt>
        </div>
      ))}
    </dl>
  );
}
