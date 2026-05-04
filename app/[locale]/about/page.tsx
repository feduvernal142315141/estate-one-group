import Image from "next/image";
import Link from "next/link";
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
  const t = await getTranslations({ locale, namespace: "aboutPage" });
  return {
    title: `${t("title")} — Estate One Group`,
    description: t("intro"),
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("aboutPage");
  const principles = t.raw("principles") as Array<{
    label: string;
    title: string;
    body: string;
  }>;

  return (
    <>
      <Header />
      <main className="bg-off-white">
        <PageIntro
          eyebrow={t("eyebrow")}
          title={t("title")}
          intro={t("intro")}
        />

        {/* Founder */}
        <section>
          <div className="mx-auto max-w-[1280px] px-5 pb-24 lg:px-12 lg:pb-32">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start lg:gap-16">
              <div className="lg:col-span-5">
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-neutral-200">
                  <Image
                    src="/brand/founders.jpg"
                    alt={t("founderAlt")}
                    fill
                    sizes="(min-width: 1024px) 500px, 100vw"
                    className="object-cover"
                  />
                </div>
                <p className="mt-5 text-[12px] font-medium uppercase tracking-[0.22em] text-neutral-500">
                  {t("founderCaption")}
                </p>
              </div>

              <div className="lg:col-span-6 lg:col-start-7 lg:pt-4">
                <div className="max-w-[560px] space-y-6 text-[16px] leading-[1.75] text-neutral-800 md:text-[17px]">
                  <p>{t("body1")}</p>
                  <p>{t("body2")}</p>
                  <p>{t("body3")}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pull-quote — brand statement */}
        <section className="bg-off-white-soft">
          <div className="mx-auto max-w-[1280px] px-5 py-28 lg:px-12 lg:py-40">
            <p className="text-[12px] font-medium uppercase tracking-[0.22em] text-neutral-600">
              {t("postureEyebrow")}
            </p>
            <p className="mt-8 max-w-[920px] text-[36px] font-light leading-[1.15] tracking-[-0.025em] text-charcoal md:text-[52px] lg:text-[64px]">
              {t("postureQuote")}
              <br />
              <span className="text-charcoal/55">{t("postureQuoteSub")}</span>
            </p>
          </div>
        </section>

        {/* Approach */}
        <section>
          <div className="mx-auto max-w-[1280px] px-5 py-24 lg:px-12 lg:py-32">
            <EditorialBlock label={t("approachLabel")} heading={t("approachHeading")}>
              <ol className="space-y-12 lg:space-y-16">
                {principles.map((principle) => (
                  <li
                    key={principle.label}
                    className="grid grid-cols-[auto_1fr] items-baseline gap-x-8 lg:gap-x-12"
                  >
                    <span
                      aria-hidden
                      className="text-[14px] font-medium tabular-nums text-brand-gold/80"
                    >
                      {principle.label}
                    </span>
                    <div className="max-w-[560px]">
                      <h3 className="text-[20px] font-medium leading-snug tracking-[-0.005em] text-charcoal lg:text-[22px]">
                        {principle.title}
                      </h3>
                      <p className="mt-4 text-[15px] leading-[1.65] text-neutral-800 md:text-[16px]">
                        {principle.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </EditorialBlock>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="border-t border-neutral-200 bg-off-white-soft">
          <div className="mx-auto flex max-w-[1280px] flex-col items-start gap-8 px-5 py-20 lg:flex-row lg:items-center lg:justify-between lg:px-12 lg:py-24">
            <div className="max-w-[560px]">
              <p className="text-[12px] font-medium uppercase tracking-[0.22em] text-neutral-600">
                {t("ctaEyebrow")}
              </p>
              <h2 className="mt-5 text-[28px] font-light leading-[1.15] tracking-[-0.02em] text-charcoal md:text-[36px]">
                {t("ctaTitle")}
              </h2>
            </div>
            <Link
              href="/contact"
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
