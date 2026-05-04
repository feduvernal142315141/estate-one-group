import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ArrowLink, PageIntro } from "@/components/editorial";
import { PropertyCard } from "@/components/property-card";
import { CatalogFilterBar } from "@/components/catalog-filter-bar";
import {
  normalizeSort,
  normalizeType,
  normalizeBeds,
  normalizeBaths,
  normalizeParking,
  type CatalogSortKey,
  type CatalogTypeKey,
} from "@/lib/catalog";
import { seedProperties, type Property } from "@/content/properties";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "catalog" });
  return {
    title: `${t("title")} — Estate One Group`,
    description: t("intro"),
  };
}

function sortListings(list: Property[], sort: CatalogSortKey): Property[] {
  const sorted = [...list];
  switch (sort) {
    case "price-asc":
      sorted.sort((a, b) => a.price - b.price);
      return sorted;
    case "price-desc":
      sorted.sort((a, b) => b.price - a.price);
      return sorted;
    case "sqft-desc":
      sorted.sort((a, b) => b.sqft - a.sqft);
      return sorted;
    case "newest":
    default:
      sorted.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
      return sorted;
  }
}

export default async function PropertiesPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{
    type?: string;
    sort?: string;
    beds?: string;
    baths?: string;
    parking?: string;
  }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("catalog");

  const sp = await searchParams;
  const activeType = normalizeType(sp.type);
  const activeSort = normalizeSort(sp.sort);
  const activeBeds = normalizeBeds(sp.beds);
  const activeBaths = normalizeBaths(sp.baths);
  const activeParking = normalizeParking(sp.parking);

  const activeListings = seedProperties.filter((p) => p.status === "active");

  const countsByType = activeListings.reduce<
    Partial<Record<CatalogTypeKey, number>>
  >((acc, property) => {
    const key = property.type as CatalogTypeKey;
    acc[key] = (acc[key] ?? 0) + 1;
    return acc;
  }, {});

  let filtered = activeType
    ? activeListings.filter((p) => p.type === activeType)
    : activeListings;

  if (activeBeds !== null) {
    filtered = filtered.filter((p) => p.bedrooms >= activeBeds);
  }
  if (activeBaths !== null) {
    filtered = filtered.filter((p) => p.bathrooms >= activeBaths);
  }
  if (activeParking) {
    filtered = filtered.filter((p) => (p.garageSpaces ?? 0) > 0);
  }

  const listings = sortListings(filtered, activeSort);

  return (
    <>
      <Header />
      <main className="bg-off-white">
        <PageIntro
          eyebrow={t("eyebrow")}
          title={t("title")}
          intro={t("intro")}
        />

        <CatalogFilterBar
          activeType={activeType}
          activeSort={activeSort}
          activeBeds={activeBeds}
          activeBaths={activeBaths}
          activeParking={activeParking}
          countsByType={countsByType}
          totalCount={activeListings.length}
        />

        <section>
          <div className="mx-auto max-w-[1280px] px-5 pb-24 pt-12 lg:px-12 lg:pb-32 lg:pt-16">
            {listings.length === 0 ? (
              <EmptyState
                eyebrow={t("noMatches.eyebrow")}
                title={t("noMatches.title")}
                body={t("noMatches.body")}
                reset={t("noMatches.reset")}
              />
            ) : (
              <div className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
                {listings.map((property) => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function EmptyState({
  eyebrow,
  title,
  body,
  reset,
}: {
  eyebrow: string;
  title: string;
  body: string;
  reset: string;
}) {
  return (
    <div className="mx-auto flex max-w-[480px] flex-col items-center py-16 text-center lg:py-24">
      <p className="text-[12px] font-medium uppercase tracking-[0.22em] text-neutral-600">
        {eyebrow}
      </p>
      <h2 className="mt-6 text-[28px] font-light leading-[1.15] tracking-[-0.02em] text-charcoal md:text-[32px]">
        {title}
      </h2>
      <p className="mt-5 text-[15px] leading-[1.6] text-neutral-600">{body}</p>
      <ArrowLink href="/properties" className="mt-10">
        {reset}
      </ArrowLink>
    </div>
  );
}
