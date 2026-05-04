import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/lib/navigation";

/**
 * Site footer — v3 modern luxury, polished.
 *
 * Charcoal ground with a quiet editorial closing block (eyebrow,
 * mid-scale Inter 300 headline, ghost cream "Schedule a tour"
 * mirroring the hero secondary CTA), a hairline divider, and a
 * 12-column grid of column links + brand block. Hover micro-motion
 * on column links uses a centered gold underline reveal — the same
 * system idiom as the header nav, reinforcing pattern coherence
 * rather than introducing new gold instances. No scroll-to-top
 * button (portal pattern), no social initials in boxes (template
 * tell). Server Component.
 */
export async function Footer() {
  const t = await getTranslations("footer");
  const year = new Date().getFullYear();

  const properties = [
    { label: t("links.sales"), href: "/properties" },
    { label: t("links.offMarket"), href: "/contact" },
    { label: t("links.neighborhoods"), href: "/neighborhoods" },
  ] as const;

  const firm = [
    { label: t("links.theFirm"), href: "/about" },
    { label: t("links.journal"), href: "/journal" },
    { label: t("links.press"), href: "/press" },
    { label: t("links.contact"), href: "/contact" },
  ] as const;

  const legal = [
    { label: t("links.privacy"), href: "/privacy" },
    { label: t("links.terms"), href: "/terms" },
    { label: t("links.accessibility"), href: "/accessibility" },
  ] as const;

  const socials = [
    { label: "Instagram", href: "https://instagram.com/estateonegroup" },
    { label: "LinkedIn", href: "https://linkedin.com/company/estateonegroup" },
    { label: "X", href: "https://x.com/estateonegroup" },
  ] as const;

  return (
    <footer className="bg-charcoal text-brand-cream">
      <div className="mx-auto max-w-[1280px] px-5 py-28 lg:px-12 lg:py-36">
        {/* Closing block — editorial invitation */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-end lg:gap-16">
          <div className="lg:col-span-8">
            <p className="inline-flex items-center gap-4 text-[12px] font-medium uppercase tracking-[0.22em] text-brand-cream/50">
              <span aria-hidden className="h-px w-10 bg-brand-cream/30" />
              {t("eyebrow")}
            </p>
            <h2 className="mt-8 max-w-[640px] text-[32px] font-light leading-[1.08] tracking-[-0.025em] text-brand-cream md:text-[40px] lg:text-[44px]">
              {t("title")}
            </h2>
            <p className="mt-7 max-w-[420px] text-[15px] leading-[1.6] text-brand-cream/65 md:text-[16px]">
              {t("intro")}
            </p>
          </div>

          <div className="lg:col-span-4 lg:flex lg:justify-end">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 border border-brand-cream/55 px-9 py-3.5 text-[13px] font-medium tracking-[0.08em] text-brand-cream transition-all duration-500 hover:border-brand-cream hover:bg-brand-cream hover:text-charcoal focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-brand-gold/60 motion-reduce:transition-none"
            >
              {t("scheduleTour")}
              <span
                aria-hidden
                className="text-[12px] transition-transform duration-500 group-hover:translate-x-1 motion-reduce:transition-none"
              >
                →
              </span>
            </Link>
          </div>
        </div>

        <div aria-hidden className="mt-20 h-px w-full bg-brand-cream/10" />

        {/* Main columns */}
        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16 lg:mt-20 lg:grid-cols-12 lg:gap-12">
          {/* Brand block */}
          <div className="md:col-span-2 lg:col-span-5">
            <Link
              href="/"
              aria-label="Estate One Group"
              className="inline-flex items-center gap-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-gold/60"
            >
              <Image
                src="/brand/logo.png"
                alt=""
                width={582}
                height={720}
                className="h-10 w-auto"
              />
              <span className="text-[15px] font-medium leading-none tracking-[0.01em] text-brand-cream">
                Estate One Group
              </span>
            </Link>
            <p className="mt-8 max-w-[360px] text-[14px] leading-[1.65] text-brand-cream/55">
              {t("brandDescription")}
            </p>
            <p className="mt-6 text-[13px] leading-[1.6] text-brand-cream/40">
              {t("location")}
            </p>
          </div>

          <FooterColumn title={t("columns.properties")} items={properties} />
          <FooterColumn title={t("columns.firm")} items={firm} />

          <div className="lg:col-span-3">
            <h3 className="text-[11px] font-medium uppercase tracking-[0.22em] text-brand-cream/45">
              {t("columns.reach")}
            </h3>
            <ul className="mt-6 space-y-4">
              <li>
                <a
                  href="mailto:adiel@estateonegroup.com"
                  className="group relative inline-block text-[14px] text-brand-cream/75 transition-colors duration-300 hover:text-brand-cream focus-visible:text-brand-cream focus-visible:outline-none motion-reduce:transition-none"
                >
                  adiel@estateonegroup.com
                  <UnderlineReveal />
                </a>
              </li>
              <li>
                {/* TODO: replace placeholder with real number */}
                <a
                  href="tel:+13050000000"
                  className="group relative inline-block text-[14px] text-brand-cream/75 transition-colors duration-300 hover:text-brand-cream focus-visible:text-brand-cream focus-visible:outline-none motion-reduce:transition-none"
                >
                  +1 (305) 000 — 0000
                  <UnderlineReveal />
                </a>
              </li>
            </ul>

            <ul className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-2">
              {socials.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="group relative inline-block text-[13px] text-brand-cream/55 transition-colors duration-300 hover:text-brand-cream focus-visible:text-brand-cream focus-visible:outline-none motion-reduce:transition-none"
                  >
                    {label}
                    <UnderlineReveal />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div aria-hidden className="mt-20 h-px w-full bg-brand-cream/10" />

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col gap-5 text-[13px] text-brand-cream/45 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} Estate One Group. {t("copyright")}
          </p>
          <ul className="flex flex-wrap items-center gap-x-8 gap-y-2">
            {legal.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="group relative inline-block transition-colors duration-300 hover:text-brand-cream motion-reduce:transition-none"
                >
                  {link.label}
                  <UnderlineReveal />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  items,
}: {
  title: string;
  items: ReadonlyArray<{ label: string; href: string }>;
}) {
  return (
    <div className="lg:col-span-2">
      <h3 className="text-[11px] font-medium uppercase tracking-[0.22em] text-brand-cream/45">
        {title}
      </h3>
      <ul className="mt-6 space-y-4">
        {items.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              className="group relative inline-block text-[14px] text-brand-cream/75 transition-colors duration-300 hover:text-brand-cream focus-visible:text-brand-cream focus-visible:outline-none motion-reduce:transition-none"
            >
              {item.label}
              <UnderlineReveal />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/**
 * Hover-only gold underline reveal — same idiom as the header nav.
 * Reinforces the gold-as-system pattern without adding a static
 * gold instance to the page's deliberate-accent budget.
 */
function UnderlineReveal() {
  return (
    <span
      aria-hidden
      className="pointer-events-none absolute -bottom-1 left-0 h-px w-full origin-center scale-x-0 bg-brand-gold transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100 group-focus-visible:scale-x-100 motion-reduce:transition-none"
    />
  );
}
