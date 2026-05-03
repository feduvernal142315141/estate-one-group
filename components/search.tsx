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
 * Floating search console — v3 polished as a luxury object.
 *
 * Single-surface cream glass panel composed over the hero photo.
 * The submit slot lives on the same cream surface as the field
 * slots — no separate dark block — so the component reads as one
 * premium booking-desk panel rather than form + button. Inner top
 * highlight + broader, softer drop shadow give the bevel illusion
 * of a flat panel resting on the image. Field values lead the
 * hierarchy; labels recede; the action slot trades the
 * label/value pair for a "Search →" prompt with the same gold
 * underline reveal as the nav links — system coherence over
 * button-block contrast.
 *
 * Renders as a Server Component (no submit handler yet — slots
 * are buttons for keyboard affordance only). The catalog routing
 * lands in a later sprint.
 */
export function FloatingSearch() {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-10 z-20 flex justify-center px-5 lg:bottom-14 lg:px-12">
      <div className="pointer-events-auto w-full max-w-[920px] border border-brand-gold/12 bg-brand-cream/80 shadow-[inset_0_1px_0_rgba(255,249,220,0.45),inset_0_0_0_1px_rgba(255,249,220,0.12),0_32px_64px_-20px_rgba(0,0,0,0.35)] backdrop-blur-xl">
        <div className="flex flex-col md:flex-row md:items-stretch">
          <div className="grid flex-1 grid-cols-1 md:grid-cols-3">
            {fields.map((field, index) => (
              <button
                key={field.id}
                type="button"
                className={`group flex flex-col items-start gap-1.5 px-6 py-4 text-left transition-colors duration-300 hover:bg-brand-cream/95 focus-visible:bg-brand-cream/95 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-brand-gold/50 motion-reduce:transition-none ${
                  index < fields.length - 1
                    ? "border-b border-brand-gold/10 md:border-b-0 md:border-r"
                    : ""
                }`}
                aria-label={`${field.label}: ${field.value}`}
              >
                <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-400">
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
            className="group flex items-center justify-between gap-6 border-t border-brand-gold/8 bg-brand-cream/85 px-6 py-4 transition-colors duration-500 hover:bg-brand-cream focus-visible:bg-brand-cream focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-brand-gold/50 motion-reduce:transition-none md:min-w-[200px] md:border-l md:border-t-0 md:pl-8"
          >
            <span className="relative inline-block text-[14px] font-medium tracking-[0.12em] text-charcoal">
              Search
              <span
                aria-hidden
                className="pointer-events-none absolute -bottom-1 left-0 h-px w-full origin-center scale-x-0 bg-brand-gold transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100 group-focus-visible:scale-x-100 motion-reduce:transition-none"
              />
            </span>
            <span
              aria-hidden
              className="text-[16px] text-charcoal/55 transition-all duration-500 group-hover:translate-x-1 group-hover:text-charcoal motion-reduce:transition-none"
            >
              →
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
