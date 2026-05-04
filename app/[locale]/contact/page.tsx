import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PageIntro } from "@/components/editorial";
import { seedProperties } from "@/content/properties";
import { ContactForm } from "./contact-form";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });
  return {
    title: `${t("title")} — Estate One Group`,
    description: t("intro"),
  };
}

export default async function ContactPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ ref?: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const loc = locale as "en" | "es";
  const t = await getTranslations("contact");

  const { ref } = await searchParams;
  const referenced = ref
    ? seedProperties.find((p) => p.slug === ref) ?? null
    : null;

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
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-7">
                <ContactForm
                  refSlug={referenced?.slug ?? null}
                  refTitle={referenced?.title[loc] ?? null}
                />
              </div>

              <aside className="lg:col-span-4 lg:col-start-9">
                <div className="space-y-10 lg:sticky lg:top-32">
                  <ContactBlock
                    label={t("direct")}
                    rows={[
                      {
                        href: "mailto:adiel@estateonegroup.com",
                        text: "adiel@estateonegroup.com",
                      },
                      // TODO: replace placeholder phone with real number.
                      {
                        href: "tel:+13050000000",
                        text: "+1 (305) 000 — 0000",
                      },
                    ]}
                  />

                  <ContactBlock
                    label={t("byAppointment")}
                    rows={[
                      { text: t("appointmentLocation") },
                      { text: t("appointmentNote"), muted: true },
                    ]}
                  />

                  <ContactBlock
                    label={t("hours")}
                    rows={[
                      { text: t("hoursValue") },
                      { text: t("hoursSaturday"), muted: true },
                    ]}
                  />
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

type ContactRow =
  | { href: string; text: string; muted?: boolean }
  | { text: string; muted?: boolean };

function ContactBlock({
  label,
  rows,
}: {
  label: string;
  rows: readonly ContactRow[];
}) {
  return (
    <div>
      <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-neutral-500">
        {label}
      </p>
      <ul className="mt-5 space-y-3">
        {rows.map((row, index) => (
          <li
            key={index}
            className={`text-[15px] leading-[1.55] ${
              row.muted ? "text-neutral-600" : "text-charcoal"
            }`}
          >
            {"href" in row ? (
              <a
                href={row.href}
                className="group relative inline-block transition-colors duration-300 hover:text-charcoal motion-reduce:transition-none"
              >
                {row.text}
                <span
                  aria-hidden
                  className="pointer-events-none absolute -bottom-0.5 left-0 h-px w-full origin-center scale-x-0 bg-brand-gold transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100 group-focus-visible:scale-x-100 motion-reduce:transition-none"
                />
              </a>
            ) : (
              row.text
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
