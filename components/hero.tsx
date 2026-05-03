import Image from "next/image";
import Link from "next/link";

// TODO: replace with commissioned architectural photography
const HERO_IMAGE_URL =
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=85&w=2400&auto=format&fit=crop";

/**
 * Homepage hero — v3 modern luxury direction.
 *
 * Full-bleed architectural photo with a charcoal overlay for text
 * legibility. Inter weight 300 cream headline, left-aligned editorial
 * composition. Brand-red primary CTA ("Schedule a tour") for high-
 * intent conversion + cream ghost link for "Browse Properties". Sits
 * under the transparent v3 header — header collapses to dark glass on
 * scroll past the hero.
 */
export function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-charcoal">
      <Image
        src={HERO_IMAGE_URL}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div aria-hidden className="absolute inset-0 bg-charcoal/45" />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-charcoal/70 to-transparent"
      />

      <div className="relative mx-auto flex min-h-screen max-w-[1280px] flex-col justify-center px-5 pt-32 pb-40 lg:px-12 lg:pt-40 lg:pb-48">
        <p className="text-[14px] text-brand-cream/70">
          Miami · South Florida
        </p>

        <h1 className="mt-6 max-w-[900px] text-[48px] font-light leading-[1.05] tracking-[-0.04em] text-brand-cream text-balance md:text-[64px] lg:text-[88px]">
          Miami real estate, considered.
        </h1>

        <p className="mt-6 max-w-[480px] text-[16px] font-normal leading-relaxed text-brand-cream/85 md:mt-8 md:text-[18px]">
          Premium homes in Miami and South Florida. We work with a small
          number of clients each year, by referral.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
          <Link
            href="/contact"
            className="inline-block bg-brand-red px-10 py-3.5 text-[14px] font-medium tracking-[0.05em] text-brand-cream shadow-[0_2px_4px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-px hover:bg-brand-red-deep hover:shadow-[0_12px_24px_-8px_rgba(122,0,0,0.45)] motion-reduce:hover:translate-y-0 motion-reduce:transition-none"
          >
            Schedule a tour
          </Link>
          <Link
            href="/properties"
            className="group inline-flex items-center gap-2.5 border border-brand-cream/40 px-10 py-3.5 text-[14px] font-medium tracking-[0.05em] text-brand-cream transition-all duration-300 hover:border-brand-cream hover:bg-brand-cream hover:text-charcoal motion-reduce:transition-none"
          >
            Browse Properties
            <span
              aria-hidden
              className="inline-block transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none"
            >
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
