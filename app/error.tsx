"use client";

import { useEffect } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ArrowLink } from "@/components/editorial";

/**
 * Global 500 — editorial fallback when an unhandled error escapes
 * a route segment. Lives next to `app/not-found.tsx` in posture:
 * no apology theater, no oversized exclamation, just a quiet
 * acknowledgement, a way to retry, and a way home.
 *
 * Must be a Client Component per Next.js convention — error.tsx
 * is the route-segment error boundary and needs to wire `reset()`
 * to a button. The error itself is logged to the console; once we
 * have an observability pipeline (Sentry/Vercel logs filtered),
 * the `useEffect` can forward it.
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // TODO: forward to Sentry / observability pipeline once wired.
    console.error("[error.tsx]", error);
  }, [error]);

  return (
    <>
      <Header />
      <main className="bg-off-white">
        <section className="flex min-h-[78vh] items-center">
          <div className="mx-auto w-full max-w-[760px] px-5 pb-24 pt-36 lg:px-12 lg:pb-32 lg:pt-48">
            <p className="text-[12px] font-medium uppercase tracking-[0.22em] text-neutral-600">
              500 · Something went wrong
            </p>
            <h1 className="mt-6 text-[44px] font-light leading-[1.05] tracking-[-0.025em] text-charcoal md:text-[60px] lg:text-[68px]">
              An unexpected error.
            </h1>
            <p className="mt-8 max-w-[480px] text-[16px] leading-[1.65] text-neutral-800 md:text-[17px]">
              The page didn&rsquo;t load as it should. The error has been
              recorded. You can try again, or return to the rest of the site.
            </p>

            <div className="mt-12 flex flex-col items-start gap-6 md:flex-row md:items-center md:gap-10">
              <button
                type="button"
                onClick={reset}
                className="group inline-flex items-center gap-3 border border-charcoal/80 px-7 py-3.5 text-[13px] font-medium tracking-[0.08em] text-charcoal transition-colors duration-300 hover:bg-charcoal hover:text-brand-cream focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-gold/60 motion-reduce:transition-none"
              >
                Try again
                <span
                  aria-hidden
                  className="text-[13px] transition-transform duration-500 group-hover:translate-x-1 motion-reduce:transition-none"
                >
                  →
                </span>
              </button>

              <ArrowLink href="/">Return home</ArrowLink>
            </div>

            {error.digest && (
              <p className="mt-12 text-[12px] tracking-[0.04em] text-neutral-500">
                Reference: <span className="tabular-nums">{error.digest}</span>
              </p>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
