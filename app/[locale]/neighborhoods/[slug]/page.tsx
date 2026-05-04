import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ArrowLink, EditorialBlock } from "@/components/editorial";
import { PropertyCard } from "@/components/property-card";
import { seedNeighborhoods } from "@/content/neighborhoods";
import { seedProperties } from "@/content/properties";
import { getNeighborhoodCover } from "@/lib/neighborhood-images";

export async function generateStaticParams() {
  return seedNeighborhoods.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const neighborhood = seedNeighborhoods.find((n) => n.slug === slug);
  if (!neighborhood) {
    return { title: "Neighborhood not found — Estate One Group" };
  }
  const loc = locale as "en" | "es";
  return {
    title: `${neighborhood.name[loc]} — Estate One Group`,
    description: neighborhood.blurb[loc],
    openGraph: {
      title: `${neighborhood.name[loc]} — Estate One Group`,
      description: neighborhood.blurb[loc],
      type: "article",
    },
  };
}

export default async function NeighborhoodDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const loc = locale as "en" | "es";
  const t = await getTranslations("neighborhoods");

  const neighborhood = seedNeighborhoods.find((n) => n.slug === slug);
  if (!neighborhood) notFound();

  const { url: coverUrl, alt: coverAlt } = getNeighborhoodCover(neighborhood);
  const paragraphs = neighborhood.description[loc]
    .split(/\n\n+/)
    .map((p) => p.trim())
    .filter(Boolean);

  const propertiesHere = seedProperties.filter(
    (p) =>
      p.status === "active" &&
      p.address.neighborhood === neighborhood.name.en,
  );

  const name = neighborhood.name[loc];

  return (
    <>
      <Header />
      <main className="bg-off-white">
        {/* Hero — image only, no text overlay. */}
        <div className="relative h-[60vh] min-h-[420px] w-full overflow-hidden bg-charcoal lg:h-[75vh] lg:max-h-[820px]">
          {coverUrl && (
            <Image
              src={coverUrl}
              alt={coverAlt}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          )}
        </div>

        {/* Editorial header */}
        <section>
          <div className="mx-auto max-w-[1280px] px-5 pb-12 pt-16 lg:px-12 lg:pb-16 lg:pt-24">
            <p className="text-[12px] font-medium uppercase tracking-[0.22em] text-neutral-600">
              {t("neighborhoodEyebrow")}
            </p>
            <h1 className="mt-6 max-w-[760px] text-[44px] font-light leading-[1.05] tracking-[-0.025em] text-charcoal md:text-[56px] lg:text-[68px]">
              {name}
            </h1>
            <p className="mt-8 max-w-[560px] text-[16px] leading-[1.65] text-neutral-800 md:text-[17px]">
              {neighborhood.blurb[loc]}
            </p>
          </div>
        </section>

        {/* Description */}
        <section>
          <div className="mx-auto max-w-[1280px] px-5 py-20 lg:px-12 lg:py-28">
            <EditorialBlock label={t("aboutLabel")}>
              <div className="max-w-[640px] space-y-6 text-[16px] leading-[1.75] text-neutral-800 md:text-[17px]">
                {paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </EditorialBlock>
          </div>
        </section>

        {/* Markers */}
        <section className="border-t border-neutral-200">
          <div className="mx-auto max-w-[1280px] px-5 py-20 lg:px-12 lg:py-28">
            <EditorialBlock label={t("anchorsLabel")}>
              <ul className="grid grid-cols-1 gap-x-12 gap-y-4 sm:grid-cols-2 md:gap-y-5">
                {neighborhood.markers.map((marker) => (
                  <li
                    key={marker.en}
                    className="flex items-baseline gap-3 text-[15px] leading-[1.5] text-neutral-800 md:text-[16px]"
                  >
                    <span
                      aria-hidden
                      className="inline-block h-px w-3 shrink-0 translate-y-[-3px] bg-brand-gold/70"
                    />
                    {marker[loc]}
                  </li>
                ))}
              </ul>
            </EditorialBlock>
          </div>
        </section>

        {/* Properties in this neighborhood */}
        <section className="border-t border-neutral-200">
          <div className="mx-auto max-w-[1280px] px-5 py-20 lg:px-12 lg:py-28">
            <header className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between md:gap-12">
              <div>
                <p className="text-[12px] font-medium uppercase tracking-[0.22em] text-neutral-600">
                  {t("currentlyOffered")}
                </p>
                <h2 className="mt-6 max-w-[640px] text-[32px] font-light leading-[1.08] tracking-[-0.02em] text-charcoal md:text-[40px] lg:text-[44px]">
                  {t("inTitle", { name })}
                </h2>
              </div>
              {propertiesHere.length > 0 && (
                <ArrowLink
                  href={`/properties?neighborhood=${neighborhood.slug}`}
                  className="self-start md:self-end"
                >
                  {t("seeAllInCatalog")}
                </ArrowLink>
              )}
            </header>

            {propertiesHere.length > 0 ? (
              <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 lg:mt-20 lg:grid-cols-3">
                {propertiesHere.map((property) => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>
            ) : (
              <div className="mt-12 max-w-[560px]">
                <p className="text-[16px] leading-[1.65] text-neutral-800 md:text-[17px]">
                  {t("noListingsText", { name })}
                </p>
                <ArrowLink href="/contact" className="mt-8">
                  {t("beginConversation")}
                </ArrowLink>
              </div>
            )}
          </div>
        </section>

        {/* Closing CTA */}
        <section className="border-t border-neutral-200 bg-off-white-soft">
          <div className="mx-auto flex max-w-[1280px] flex-col items-start gap-8 px-5 py-20 lg:flex-row lg:items-center lg:justify-between lg:px-12 lg:py-24">
            <div className="max-w-[560px]">
              <p className="text-[12px] font-medium uppercase tracking-[0.22em] text-neutral-600">
                {t("consideringEyebrow", { name })}
              </p>
              <h2 className="mt-5 text-[28px] font-light leading-[1.15] tracking-[-0.02em] text-charcoal md:text-[36px]">
                {t("ctaTitle")}
              </h2>
            </div>
            <Link
              href={`/contact?ref=neighborhood-${neighborhood.slug}`}
              className="group inline-flex items-center gap-3 border border-charcoal/80 px-7 py-3.5 text-[13px] font-medium tracking-[0.08em] text-charcoal transition-colors duration-300 hover:bg-charcoal hover:text-brand-cream focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-gold/60 motion-reduce:transition-none"
            >
              {t("ctaButton")}
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
    </>
  );
}
