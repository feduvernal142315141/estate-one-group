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
 * Floating search bar — v3.
 *
 * Glass card composed over the dark hero photo. Cream surface at 85%
 * opacity with a backdrop-blur and a hairline gold border (the third
 * deliberate gold accent on the homepage, after the logo and hero
 * eyebrow). Three readable filter slots inline + a charcoal submit
 * button. Stacks vertical on mobile.
 *
 * No submit handler yet — slots render as buttons for accessibility
 * and cursor affordance, but click is wired in a later sprint when
 * the catalog routes accept query state.
 */
export function FloatingSearch() {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-10 z-20 flex justify-center px-5 lg:bottom-14 lg:px-12">
      <div className="pointer-events-auto w-full max-w-[920px] border border-brand-gold/15 bg-brand-cream/85 shadow-[0_24px_48px_-16px_rgba(0,0,0,0.45)] backdrop-blur-xl">
        <div className="flex flex-col md:flex-row md:items-stretch">
          <div className="grid flex-1 grid-cols-1 md:grid-cols-3">
            {fields.map((field, index) => (
              <button
                key={field.id}
                type="button"
                className={`group flex flex-col items-start gap-1 px-6 py-5 text-left transition-colors duration-300 hover:bg-brand-cream motion-reduce:transition-none ${
                  index < fields.length - 1
                    ? "border-b border-brand-gold/10 md:border-b-0 md:border-r"
                    : ""
                }`}
                aria-label={`${field.label}: ${field.value}`}
              >
                <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-600">
                  {field.label}
                </span>
                <span className="text-[15px] font-medium text-charcoal">
                  {field.value}
                </span>
              </button>
            ))}
          </div>
          <button
            type="button"
            aria-label="Search properties"
            className="flex items-center justify-center gap-3 bg-charcoal px-8 py-5 text-[14px] font-medium tracking-[0.05em] text-brand-cream transition-colors duration-300 hover:bg-charcoal-soft motion-reduce:transition-none md:px-10"
          >
            <Search className="h-4 w-4" strokeWidth={1.5} />
            <span>Search</span>
          </button>
        </div>
      </div>
    </div>
  );
}
