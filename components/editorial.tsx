import Link from "next/link";
import type { ReactNode } from "react";

/**
 * Editorial primitives — extracted after 10+ uses across pages.
 *
 * `<PageIntro>` is the canonical first-section header on every
 * non-home, non-detail page (catalog, about, contact, journal,
 * press, legal stubs). It accounts for the fixed dark-glass header
 * clearance and locks the title/intro max-widths so pages can't
 * silently drift apart.
 *
 * `<EditorialBlock>` is the 3/8 magazine-column shell used for
 * body sections — eyebrow on the left, content on the right. The
 * outer section + container is left to the consumer because
 * vertical padding meaningfully varies (intermediate vs. last
 * section). Top border is opt-in.
 *
 * `<ArrowLink>` is the canonical text link used to lead the eye
 * across an editorial section: charcoal Inter-medium label with a
 * gold underline that scales from center on hover, plus a `→`
 * glyph that translates on hover. Same gold-reveal idiom as the
 * header nav so the gold-as-system pattern compounds.
 *
 * Property name title (Playfair) is intentionally *not* unified
 * here. The detail page is the only consumer of that register and
 * abstracting it would invite drift in the one place that matters.
 */

export function PageIntro({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: ReactNode;
  intro: ReactNode;
}) {
  return (
    <section>
      <div className="mx-auto max-w-[1280px] px-5 pb-12 pt-36 lg:px-12 lg:pb-16 lg:pt-48">
        <p className="text-[12px] font-medium uppercase tracking-[0.22em] text-neutral-600">
          {eyebrow}
        </p>
        <h1 className="mt-6 max-w-[760px] text-[44px] font-light leading-[1.05] tracking-[-0.025em] text-charcoal md:text-[56px] lg:text-[68px]">
          {title}
        </h1>
        <p className="mt-8 max-w-[560px] text-[16px] leading-[1.65] text-neutral-800 md:text-[17px]">
          {intro}
        </p>
      </div>
    </section>
  );
}

export function EditorialBlock({
  label,
  heading,
  topBorder = false,
  children,
}: {
  label: string;
  heading?: ReactNode;
  topBorder?: boolean;
  children: ReactNode;
}) {
  return (
    <div
      className={
        topBorder ? "border-t border-neutral-200 pt-12 lg:pt-16" : undefined
      }
    >
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-3">
          <p className="text-[12px] font-medium uppercase tracking-[0.22em] text-neutral-600">
            {label}
          </p>
          {heading && (
            <h2 className="mt-6 text-[28px] font-light leading-[1.1] tracking-[-0.02em] text-charcoal md:text-[34px]">
              {heading}
            </h2>
          )}
        </div>
        <div className="lg:col-span-8 lg:col-start-5">{children}</div>
      </div>
    </div>
  );
}

export function ArrowLink({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-3 text-[14px] font-medium text-charcoal transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-gold/60 motion-reduce:transition-none ${className ?? ""}`}
    >
      <span className="relative inline-block">
        {children}
        <span
          aria-hidden
          className="pointer-events-none absolute -bottom-1 left-0 h-px w-full origin-center scale-x-0 bg-brand-gold transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100 group-focus-visible:scale-x-100 motion-reduce:transition-none"
        />
      </span>
      <span
        aria-hidden
        className="text-[13px] transition-transform duration-500 group-hover:translate-x-1 motion-reduce:transition-none"
      >
        →
      </span>
    </Link>
  );
}
