"use client";

import Image from "next/image";

interface TourPosterProps {
  posterUrl: string;
  posterAlt: string;
  label: string;
  heading: string;
  cta: string;
  onEnter: () => void;
}

export function TourPoster({
  posterUrl,
  posterAlt,
  label,
  heading,
  cta,
  onEnter,
}: TourPosterProps) {
  return (
    <button
      type="button"
      onClick={onEnter}
      aria-label={`${heading} — ${cta}`}
      className="group relative block w-full overflow-hidden bg-charcoal text-left focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-brand-gold/60"
    >
      <div className="relative aspect-[4/5] w-full md:aspect-[16/10]">
        <Image
          src={posterUrl}
          alt={posterAlt}
          fill
          sizes="(min-width: 1024px) 67vw, 100vw"
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.015]"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/20 to-transparent"
        />

        {/* Top-left label */}
        <div className="absolute left-5 top-5 lg:left-7 lg:top-7">
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-brand-cream/85">
            {label}
          </p>
        </div>

        {/* Bottom block: heading + CTA */}
        <div className="absolute inset-x-0 bottom-0 flex flex-col gap-6 p-5 md:flex-row md:items-end md:justify-between md:p-8 lg:p-10">
          <h3 className="max-w-[480px] font-serif text-[28px] font-normal leading-[1.1] tracking-[-0.01em] text-brand-cream md:text-[34px] lg:text-[40px]">
            {heading}
          </h3>
          <span className="inline-flex shrink-0 items-center gap-3 self-start border border-brand-cream/40 bg-charcoal/30 px-5 py-3 text-[12px] font-medium uppercase tracking-[0.18em] text-brand-cream backdrop-blur-sm transition-colors duration-300 group-hover:border-brand-cream group-hover:bg-brand-cream group-hover:text-charcoal md:self-auto">
            {cta}
            <span
              aria-hidden
              className="text-[13px] transition-transform duration-500 group-hover:translate-x-1 motion-reduce:transition-none"
            >
              →
            </span>
          </span>
        </div>
      </div>
    </button>
  );
}
