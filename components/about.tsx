import Image from "next/image";
import Link from "next/link";

/**
 * Founders preview — v3 modern luxury.
 *
 * Quiet 60/40 editorial block introducing the founder-led nature
 * of the firm. Real portrait of Adiel Figueroa from
 * `public/brand/founders.jpg` (no gold frame, no "15+ años" badge,
 * no decorative bordered squares from v1). Two short, direct
 * paragraphs replace the v1 marketing prose, anchored by a
 * "Meet the firm" link to the dedicated /about page (Phase 3).
 *
 * Surface is `off-white-soft` — alternates rhythmically with the
 * `off-white` of the Properties strip above. Server Component.
 */
export function About() {
  return (
    <section className="bg-off-white-soft">
      <div className="mx-auto max-w-[1280px] px-5 py-24 lg:px-12 lg:py-32">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-neutral-200">
              <Image
                src="/brand/founders.jpg"
                alt="Adiel Figueroa, founder of Estate One Group"
                fill
                sizes="(min-width: 1024px) 500px, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <p className="text-[12px] font-medium uppercase tracking-[0.22em] text-neutral-600">
              The firm
            </p>
            <h2 className="mt-6 max-w-[520px] text-[36px] font-light leading-[1.05] tracking-[-0.025em] text-charcoal md:text-[44px] lg:text-[48px]">
              Founder-led. By referral.
            </h2>

            <div className="mt-8 max-w-[480px] space-y-5 text-[16px] leading-[1.65] text-neutral-800 md:text-[17px]">
              <p>
                Estate One Group is led by Adiel Figueroa from Miami. He works
                directly with a small number of clients each year — most
                introductions come by referral.
              </p>
              <p>
                The focus is architectural literacy and off-market access: who
                built the home, how it was built, and what hasn&rsquo;t yet
                reached public listings. The conversation happens in English
                or Spanish, with equal precision.
              </p>
            </div>

            <div className="mt-10">
              <Link
                href="/about"
                className="group inline-flex items-center gap-3 text-[14px] font-medium text-charcoal transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-gold/60 motion-reduce:transition-none"
              >
                <span className="relative inline-block">
                  Meet the firm
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
