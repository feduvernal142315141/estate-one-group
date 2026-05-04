import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PageIntro } from "@/components/editorial";
import { NeighborhoodCard } from "@/components/neighborhood-card";
import { seedNeighborhoods } from "@/content/neighborhoods";
import { seedProperties } from "@/content/properties";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "neighborhoods" });
  return {
    title: `${t("title")} — Estate One Group`,
    description: t("intro"),
  };
}

export default async function NeighborhoodsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("neighborhoods");

  const activeProperties = seedProperties.filter((p) => p.status === "active");

  return (
    <>
      <Header />
      <main className="bg-off-white">
        <PageIntro
          eyebrow={t("eyebrow")}
          title={t("title")}
          intro={t("intro")}
        />

        <section>
          <div className="mx-auto max-w-[1280px] px-5 pb-24 lg:px-12 lg:pb-32">
            <div className="grid grid-cols-1 gap-x-10 gap-y-20 lg:grid-cols-2 lg:gap-x-12">
              {seedNeighborhoods.map((neighborhood) => {
                const count = activeProperties.filter(
                  (p) =>
                    p.address.neighborhood === neighborhood.name.en,
                ).length;
                return (
                  <NeighborhoodCard
                    key={neighborhood.id}
                    neighborhood={neighborhood}
                    propertyCount={count}
                  />
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
