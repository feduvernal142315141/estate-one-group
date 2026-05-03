"use client";

import { Search } from "lucide-react";

type Field = {
  id: string;
  label: string;
  value: string;
};

const fields: readonly Field[] = [
  { id: "location", label: "Location", value: "Miami Beach, FL" },
  { id: "type", label: "Property type", value: "Condo · House · Penthouse" },
  { id: "price", label: "Price", value: "$1M — Unlimited" },
] as const;

/**
 * Floating search bar — v3 polished.
 *
 * Glass card composed over the dark hero photo. Cream surface at 80%
 * opacity with a backdrop-blur and a hairline gold border. Reduced
 * height + lighter type weights so the card reads as a "private
 * property search console" rather than a boxed form. Search button
 * picks up a subtle warm gold glow on hover.
 */
export function FloatingSearch() {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-10 z-20 flex justify-center px-5 lg:bottom-14 lg:px-12">
      <div className="pointer-events-auto w-full max-w-[920px] border border-brand-gold/12 bg-brand-cream/80 shadow-[0_24px_48px_-16px_rgba(0,0,0,0.45)] backdrop-blur-xl">
        <div className="flex flex-col md:flex-row md:items-stretch">
          <div className="grid flex-1 grid-cols-1 md:grid-cols-3">
            {fields.map((field, index) => (
              <button
                key={field.id}
                type="button"
                className={`group flex flex-col items-start gap-1 px-6 py-4 text-left transition-colors duration-300 hover:bg-brand-cream/95 focus-visible:bg-brand-cream/95 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-brand-gold/50 motion-reduce:transition-none ${
                  index < fields.length - 1
                    ? "border-b border-brand-gold/10 md:border-b-0 md:border-r"
                    : ""
                }`}
                aria-label={`${field.label}: ${field.value}`}
              >
                <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-neutral-500">
                  {field.label}
                </span>
                <span className="text-[14px] font-normal text-charcoal/85">
                  {field.value}
                </span>
              </button>
            ))}
          </div>
          <button
            type="button"
            aria-label="Search properties"
            className="flex items-center justify-center gap-3 bg-charcoal/95 px-7 py-4 text-[13px] font-medium tracking-[0.08em] text-brand-cream transition-all duration-500 hover:bg-charcoal-soft hover:shadow-[0_0_24px_rgba(199,153,28,0.18)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold/60 motion-reduce:transition-none md:px-8"
          >
            <Search className="h-4 w-4" strokeWidth={1.25} />
            <span>Search</span>
          </button>
        </div>
      </div>
    </div>
  );
}
