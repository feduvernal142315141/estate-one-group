"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

type Locale = "en" | "es";

type NavItem = { label: string; href: string };

const navItems: readonly NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Properties", href: "/properties" },
  { label: "Neighborhoods", href: "/neighborhoods" },
  { label: "The Firm", href: "/about" },
  { label: "Journal", href: "/journal" },
  { label: "Contact", href: "/contact" },
] as const;

/**
 * Site header — v2 tech-luxury direction.
 *
 * Sticky off-white bar with a 1px neutral-200 border-bottom. No scroll
 * listener, no transformation, no shadow, no backdrop-blur. Logo + Inter
 * wordmark on the left; primary nav, EN/ES toggle, and a charcoal-outline
 * "Contact us" CTA on the right. Below `lg`, the right side collapses
 * to a hamburger that opens a full-screen off-white overlay.
 */
export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // TODO: swap for next-intl `useLocale()` once i18n routing is wired.
  const [locale, setLocale] = useState<Locale>("en");

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [isMobileMenuOpen]);

  const closeMobile = () => setIsMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-off-white">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-8 px-5 py-4 lg:px-12 lg:py-5">
        <BrandLockup />

        <nav
          aria-label="Primary"
          className="hidden items-center gap-8 lg:flex"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[14px] font-normal text-neutral-600 transition-colors duration-200 hover:text-charcoal motion-reduce:transition-none"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <LangToggle locale={locale} onChange={setLocale} />
          <Link
            href="/contact"
            className="inline-block border border-charcoal px-6 py-3 text-[14px] font-medium text-charcoal transition-all duration-200 hover:bg-charcoal hover:text-off-white motion-reduce:transition-none"
          >
            Contact us
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsMobileMenuOpen((open) => !open)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          className="p-1 text-charcoal transition-opacity duration-200 hover:opacity-70 motion-reduce:transition-none lg:hidden"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" strokeWidth={1.5} />
          ) : (
            <Menu className="h-6 w-6" strokeWidth={1.5} />
          )}
        </button>
      </div>

      <MobileMenu
        open={isMobileMenuOpen}
        onClose={closeMobile}
        locale={locale}
        onLocaleChange={setLocale}
      />
    </header>
  );
}

function BrandLockup() {
  return (
    <Link
      href="/"
      aria-label="Estate One Group"
      className="inline-flex items-center gap-2.5"
    >
      <Image
        src="/brand/logo.png"
        alt=""
        width={582}
        height={720}
        priority
        className="h-8 w-auto"
      />
      <span className="text-[14px] font-medium leading-none text-charcoal">
        Estate One Group
      </span>
    </Link>
  );
}

function LangToggle({
  locale,
  onChange,
}: {
  locale: Locale;
  onChange: (next: Locale) => void;
}) {
  const base =
    "text-[14px] transition-colors duration-200 motion-reduce:transition-none";
  const active = "font-medium text-charcoal";
  const inactive = "font-normal text-neutral-400 hover:text-charcoal";

  return (
    <div role="group" aria-label="Language" className="flex items-center">
      <button
        type="button"
        onClick={() => onChange("en")}
        aria-pressed={locale === "en"}
        className={`${base} ${locale === "en" ? active : inactive}`}
      >
        EN
      </button>
      <span aria-hidden className="px-2 text-[14px] text-neutral-400">
        /
      </span>
      <button
        type="button"
        onClick={() => onChange("es")}
        aria-pressed={locale === "es"}
        className={`${base} ${locale === "es" ? active : inactive}`}
      >
        ES
      </button>
    </div>
  );
}

function MobileMenu({
  open,
  onClose,
  locale,
  onLocaleChange,
}: {
  open: boolean;
  onClose: () => void;
  locale: Locale;
  onLocaleChange: (next: Locale) => void;
}) {
  return (
    <div
      id="mobile-menu"
      aria-hidden={!open}
      className={`fixed inset-0 z-40 flex flex-col bg-off-white transition-opacity duration-200 motion-reduce:transition-none lg:hidden ${
        open
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0"
      }`}
    >
      <div className="flex flex-1 flex-col justify-between px-5 pb-12 pt-24">
        <ul className="flex flex-col border-t border-neutral-200">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={onClose}
                className="block border-b border-neutral-200 py-5 text-[18px] font-normal text-charcoal transition-colors duration-200 hover:text-neutral-600 motion-reduce:transition-none"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex flex-col items-stretch gap-8">
          <LangToggle locale={locale} onChange={onLocaleChange} />
          <Link
            href="/contact"
            onClick={onClose}
            className="block w-full border border-charcoal py-4 text-center text-[14px] font-medium text-charcoal transition-all duration-200 hover:bg-charcoal hover:text-off-white motion-reduce:transition-none"
          >
            Contact us
          </Link>
        </div>
      </div>
    </div>
  );
}
