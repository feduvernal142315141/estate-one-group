import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { EditorialBlock, PageIntro } from "@/components/editorial";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "press" });
  return {
    title: `${t("title")} — Estate One Group`,
    description: t("intro"),
  };
}

export default async function PressPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("press");

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
            <EditorialBlock label={t("contactLabel")} topBorder>
              <ul className="space-y-4">
                <li>
                  {/* TODO: replace with dedicated press alias if one is created. */}
                  <a
                    href="mailto:adiel@estateonegroup.com?subject=Press%20inquiry"
                    className="group relative inline-block text-[16px] text-charcoal transition-colors duration-300 hover:text-charcoal motion-reduce:transition-none md:text-[17px]"
                  >
                    adiel@estateonegroup.com
                    <span
                      aria-hidden
                      className="pointer-events-none absolute -bottom-0.5 left-0 h-px w-full origin-center scale-x-0 bg-brand-gold transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100 group-focus-visible:scale-x-100 motion-reduce:transition-none"
                    />
                  </a>
                </li>
                <li>
                  {/* TODO: replace placeholder phone with real number. */}
                  <a
                    href="tel:+13050000000"
                    className="group relative inline-block text-[16px] text-charcoal transition-colors duration-300 hover:text-charcoal motion-reduce:transition-none md:text-[17px]"
                  >
                    +1 (305) 000 — 0000
                    <span
                      aria-hidden
                      className="pointer-events-none absolute -bottom-0.5 left-0 h-px w-full origin-center scale-x-0 bg-brand-gold transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100 group-focus-visible:scale-x-100 motion-reduce:transition-none"
                    />
                  </a>
                </li>
              </ul>

              <p className="mt-10 max-w-[480px] text-[14px] leading-[1.65] text-neutral-600">
                {t("brandAssets")}
              </p>
            </EditorialBlock>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
