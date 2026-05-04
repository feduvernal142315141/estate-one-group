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
  const t = await getTranslations({ locale, namespace: "legal" });
  return {
    title: `${t("termsTitle")} — Estate One Group`,
    description: t("termsIntro"),
  };
}

export default async function TermsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("legal");

  return (
    <>
      <Header />
      <main className="bg-off-white">
        <PageIntro
          eyebrow={t("termsEyebrow")}
          title={t("termsTitle")}
          intro={t("termsIntro")}
        />
        <section>
          <div className="mx-auto max-w-[1280px] px-5 pb-24 lg:px-12 lg:pb-32">
            <EditorialBlock label="Contact" topBorder>
              <ArrowLink href="/contact">Get in touch</ArrowLink>
            </EditorialBlock>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
