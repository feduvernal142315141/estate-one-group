"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/lib/navigation";
import { Menu, X } from "lucide-react";

type NavKey = "home" | "properties" | "neighborhoods" | "about" | "journal" | "contact";

const navItems: ReadonlyArray<{ key: NavKey; href: string }> = [
  { key: "home", href: "/" },
  { key: "properties", href: "/properties" },
  { key: "neighborhoods", href: "/neighborhoods" },
  { key: "about", href: "/about" },
  { key: "journal", href: "/journal" },
  { key: "contact", href: "/contact" },
] as const;

const SCROLL_THRESHOLD = 80;

/**
 * Site header — v3 modern luxury, polished.
 *
 * Fixed, transparent over the homepage hero photo on initial load;
 * collapses to a charcoal glass bar (85% opacity + backdrop-blur +
 * soft shadow + hairline gold border) once the user scrolls past 80px.
 * On routes without a dark hero (anything other than `/`), the dark
 * glass state is applied from first paint so the cream typography
 * stays legible. Nav links carry a centered scaleX gold underline on
 * hover for a quiet luxury micro-interaction.
 */
export function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();

  const isHeroPage = pathname === "/";

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (!isHeroPage) {
      setIsScrolled(true);
      return;
    }
    const onScroll = () => setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHeroPage]);

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [isMobileMenuOpen]);

  const closeMobile = () => setIsMobileMenuOpen(false);
  const isCondensed = isScrolled || isMobileMenuOpen;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 motion-reduce:transition-none ${
          isCondensed
            ? "border-b border-brand-gold/25 bg-charcoal/85 py-4 shadow-[0_8px_32px_rgba(0,0,0,0.25)] backdrop-blur-xl"
            : "border-b border-brand-cream/8 bg-transparent py-7"
        }`}
      >
        <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-8 px-5 lg:px-12">
          <BrandLockup />

          <nav
            aria-label="Primary"
            className="hidden items-center gap-12 lg:flex"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative text-[15px] font-medium tracking-[0.02em] text-brand-cream/60 transition-colors duration-300 hover:text-brand-cream focus-visible:text-brand-cream focus-visible:outline-none motion-reduce:transition-none"
              >
                {t(item.key)}
                <span
                  aria-hidden
                  className="pointer-events-none absolute -bottom-1.5 left-0 h-px w-full origin-center scale-x-0 bg-brand-gold transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100 group-focus-visible:scale-x-100 motion-reduce:transition-none"
                />
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-6 lg:flex">
            <LangToggle locale={locale} pathname={pathname} />
            <Link
              href="/contact"
              className="inline-block border border-brand-cream/35 px-7 py-2.5 text-[13px] font-medium tracking-[0.08em] text-brand-cream backdrop-blur-sm transition-all duration-500 hover:border-brand-cream hover:bg-brand-cream hover:text-charcoal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold/60 motion-reduce:transition-none"
            >
              {t("contactUs")}
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            className="relative z-10 p-1 text-brand-cream transition-opacity duration-200 hover:opacity-70 motion-reduce:transition-none lg:hidden"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" strokeWidth={1.5} />
            ) : (
              <Menu className="h-6 w-6" strokeWidth={1.5} />
            )}
          </button>
        </div>
      </header>

      <MobileMenu
        open={isMobileMenuOpen}
        onClose={closeMobile}
        locale={locale}
        pathname={pathname}
      />
    </>
  );
}

function BrandLockup() {
  return (
    <Link
      href="/"
      aria-label="Estate One Group"
      className="inline-flex items-center gap-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-gold/60"
    >
      <Image
        src="/brand/logo.png"
        alt=""
        width={582}
        height={720}
        priority
        className="h-10 w-auto"
      />
      <span className="text-[15px] font-medium leading-none tracking-[0.01em] text-brand-cream">
        Estate One Group
      </span>
    </Link>
  );
}

function LangToggle({
  locale,
  pathname,
}: {
  locale: string;
  pathname: string;
}) {
  const base =
    "text-[14px] transition-colors duration-500 focus-visible:outline-none motion-reduce:transition-none";
  const active = "font-medium text-brand-gold";
  const inactive = "font-normal text-brand-cream/30 hover:text-brand-cream";

  return (
    <div role="group" aria-label="Language" className="flex items-center">
      <Link
        href={pathname}
        locale="en"
        aria-pressed={locale === "en"}
        className={`${base} ${locale === "en" ? active : inactive}`}
      >
        EN
      </Link>
      <span aria-hidden className="px-2 text-[14px] text-brand-cream/20">
        /
      </span>
      <Link
        href={pathname}
        locale="es"
        aria-pressed={locale === "es"}
        className={`${base} ${locale === "es" ? active : inactive}`}
      >
        ES
      </Link>
    </div>
  );
}

function MobileMenu({
  open,
  onClose,
  locale,
  pathname,
}: {
  open: boolean;
  onClose: () => void;
  locale: string;
  pathname: string;
}) {
  const t = useTranslations("nav");

  return (
    <div
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Navigation"
      aria-hidden={!open}
      className={`fixed inset-0 z-[49] flex flex-col bg-charcoal lg:hidden transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
        open
          ? "pointer-events-auto opacity-100 translate-y-0"
          : "pointer-events-none opacity-0 -translate-y-3"
      }`}
    >
      {/* gold hairline across top */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-brand-gold/50 to-transparent" />

      {/* header clearance */}
      <div className="h-20 shrink-0" />

      {/* nav list — vertically centered */}
      <nav className="flex flex-1 flex-col justify-center px-8">
        <ul>
          {navItems.map((item, i) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={onClose}
                className={`group flex items-center justify-between border-b border-brand-cream/10 py-5 transition-[opacity,transform] duration-500 motion-reduce:transition-none ${
                  open
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-3"
                }`}
                style={{ transitionDelay: open ? `${80 + i * 40}ms` : "0ms" }}
              >
                <span className="text-[26px] font-light tracking-[-0.01em] text-brand-cream transition-colors duration-300 group-hover:text-brand-gold">
                  {t(item.key)}
                </span>
                <span
                  aria-hidden
                  className="text-[12px] tracking-[0.15em] text-brand-gold/40 transition-[opacity,transform] duration-300 group-hover:translate-x-1 group-hover:text-brand-gold/80"
                >
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* bottom actions */}
      <div
        className={`px-8 pb-12 flex flex-col gap-6 transition-[opacity,transform] duration-500 motion-reduce:transition-none ${
          open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
        }`}
        style={{ transitionDelay: open ? `${80 + navItems.length * 40 + 40}ms` : "0ms" }}
      >
        <div className="h-px w-full bg-brand-cream/10" />
        <LangToggle locale={locale} pathname={pathname} />
        <Link
          href="/contact"
          onClick={onClose}
          className="block w-full border border-brand-gold/50 py-4 text-center text-[12px] font-medium tracking-[0.12em] uppercase text-brand-cream transition-all duration-300 hover:bg-brand-gold hover:border-brand-gold hover:text-brand-black motion-reduce:transition-none"
        >
          {t("contactUs")}
        </Link>
      </div>
    </div>
  );
}
