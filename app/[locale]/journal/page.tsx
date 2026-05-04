import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ArrowLink, EditorialBlock, PageIntro } from "@/components/editorial";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "journal" });
  return {
    title: `${t("eyebrow")} — Estate One Group`,
    description: t("intro"),
  };
}

export default async function JournalPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("journal");

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
            <EditorialBlock label={t("inTheMeantime")} topBorder>
              <p className="max-w-[560px] text-[16px] leading-[1.65] text-neutral-800 md:text-[17px]">
                {t("body")}
              </p>
              <ArrowLink href="/contact" className="mt-10">
                {t("beginConversation")}
              </ArrowLink>
            </EditorialBlock>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
