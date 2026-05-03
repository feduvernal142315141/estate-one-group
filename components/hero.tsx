import Image from "next/image";
import Link from "next/link";
import { FloatingSearch } from "@/components/search";

// TODO: replace with commissioned architectural photography
const HERO_IMAGE_URL =
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=85&w=2400&auto=format&fit=crop";

/**
 * Homepage hero — v3 modern luxury, polished.
 *
 * Full-bleed architectural photo composed with four overlay layers:
 * a top scrim that helps the navbar glass, a left-to-right
 * cinematic gradient that anchors the editorial copy, a bottom
 * vignette that prepares the floating search bar, and a soft
 * radial vignette that dims the corners. Inter weight 300 cream
 * headline forced to two lines for an editorial cover feel,
 * narrower subhead with a more recessive cream/60 tone, and a gold
 * uppercase eyebrow with a 1px gold rule — the first deliberate
 * gold accent of the page after the logo.
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

      {/* Top scrim — composes with the transparent navbar */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-charcoal/65 to-transparent"
      />
      {/* Left-to-right cinematic gradient — anchors the copy block */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-charcoal/75 via-charcoal/40 to-charcoal/20"
      />
      {/* Bottom vignette — prepares the floating search ground */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-charcoal/85 via-charcoal/30 to-transparent"
      />
      {/* Soft corner vignette — frames the composition */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(10,10,10,0.4)_100%)]"
      />
      {/* Subtle grain — reads as cinematographic texture, not noise */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grain opacity-[0.07] mix-blend-overlay"
      />

      <div className="relative mx-auto flex min-h-screen max-w-[1280px] flex-col justify-center px-5 pt-32 pb-56 lg:px-12 lg:pt-40 lg:pb-64">
        <p className="inline-flex items-center gap-4 text-[12px] font-medium uppercase tracking-[0.22em] text-brand-gold/85">
          <span aria-hidden className="h-px w-10 bg-brand-gold/50" />
          Miami · South Florida
        </p>

        <h1 className="mt-10 max-w-[680px] text-[48px] font-light leading-[1.08] tracking-[-0.025em] text-brand-cream text-balance md:text-[64px] lg:text-[88px]">
          Miami real estate, considered.
        </h1>

        <p className="mt-8 max-w-[400px] text-[16px] font-normal leading-[1.55] text-brand-cream/75 md:mt-12 md:text-[18px]">
          Premium homes in Miami and South Florida. We work with a small
          number of clients each year, by referral.
        </p>

        <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-4 lg:mt-14">
          <Link
            href="/contact"
            className="inline-block bg-brand-red px-10 py-3.5 text-[13px] font-medium tracking-[0.08em] text-brand-cream shadow-[0_2px_4px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-px hover:bg-brand-red-deep hover:shadow-[0_16px_32px_-12px_rgba(122,0,0,0.55)] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-brand-gold/60 motion-reduce:hover:translate-y-0 motion-reduce:transition-none"
          >
            Schedule a tour
          </Link>
          <Link
            href="/properties"
            className="group inline-flex items-center gap-3 border border-brand-cream/55 px-10 py-3.5 text-[13px] font-medium tracking-[0.08em] text-brand-cream transition-all duration-500 hover:border-brand-cream hover:bg-brand-cream hover:text-charcoal focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-brand-gold/60 motion-reduce:transition-none"
          >
            Browse Properties
            <span
              aria-hidden
              className="inline-block text-[12px] transition-transform duration-500 group-hover:translate-x-1 motion-reduce:transition-none"
            >
              →
            </span>
          </Link>
        </div>
      </div>

      <FloatingSearch />
    </section>
  );
}
