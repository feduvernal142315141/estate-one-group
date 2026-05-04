import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ArrowLink } from "@/components/editorial";

/**
 * Global 404 — editorial, on-brand.
 *
 * Reached on any unknown route and via `notFound()` from the property
 * detail page. No apology theater, no oversized "404" graphic, no
 * "go home" button. Just a quiet eyebrow, a direct line, and three
 * named destinations the visitor likely wanted instead.
 *
 * Single-screen restraint on `bg-off-white` with the same fixed
 * dark-glass header pattern as every other non-home route.
 *
 * Server Component.
 */

const exits = [
  { href: "/properties", label: "Browse the collection" },
  { href: "/about", label: "Meet the firm" },
  { href: "/contact", label: "Get in touch" },
] as const;

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="bg-off-white">
        <section className="flex min-h-[78vh] items-center">
          <div className="mx-auto w-full max-w-[760px] px-5 pb-24 pt-36 lg:px-12 lg:pb-32 lg:pt-48">
            <p className="text-[12px] font-medium uppercase tracking-[0.22em] text-neutral-600">
              404 · Not found
            </p>
            <h1 className="mt-6 text-[44px] font-light leading-[1.05] tracking-[-0.025em] text-charcoal md:text-[60px] lg:text-[72px]">
              This page doesn&rsquo;t exist.
            </h1>
            <p className="mt-8 max-w-[480px] text-[16px] leading-[1.65] text-neutral-800 md:text-[17px]">
              The link you followed may be outdated, or the URL was mistyped. A
              few places to start instead.
            </p>
            <ul className="mt-12 space-y-5">
              {exits.map((exit) => (
                <li key={exit.href}>
                  <ArrowLink href={exit.href}>{exit.label}</ArrowLink>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
