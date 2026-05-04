import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { ArrowLink } from "@/components/editorial";

/**
 * Founders preview — v3 modern luxury.
 *
 * Quiet 60/40 editorial block introducing the founder-led nature
 * of the firm. Real portrait of Adiel Figueroa from
 * `public/brand/founders.jpg` (no gold frame, no badge,
 * no decorative bordered squares from v1). Two short, direct
 * paragraphs replace the v1 marketing prose, anchored by a
 * "Meet the firm" link to the dedicated /about page. Server Component.
 */
export async function About() {
  const t = await getTranslations("aboutSection");

  return (
    <section className="bg-off-white-soft">
      <div className="mx-auto max-w-[1280px] px-5 py-24 lg:px-12 lg:py-32">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
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
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <p className="text-[12px] font-medium uppercase tracking-[0.22em] text-neutral-600">
              {t("eyebrow")}
            </p>
            <h2 className="mt-6 max-w-[520px] text-[36px] font-light leading-[1.05] tracking-[-0.025em] text-charcoal md:text-[44px] lg:text-[48px]">
              {t("title")}
            </h2>

            <div className="mt-8 max-w-[480px] space-y-5 text-[16px] leading-[1.65] text-neutral-800 md:text-[17px]">
              <p>{t("body1")}</p>
              <p>{t("body2")}</p>
            </div>

            <div className="mt-10">
              <ArrowLink href="/about">{t("meetTheFirm")}</ArrowLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
