"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();
  const isHeroPage = pathname === "/";

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // TODO: swap for next-intl `useLocale()` once i18n routing is wired.
  const [locale, setLocale] = useState<Locale>("en");

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
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 motion-reduce:transition-none ${
        isCondensed
          ? "border-b border-brand-gold/25 bg-charcoal/85 py-4 shadow-[0_8px_32px_rgba(0,0,0,0.25)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent py-7"
      }`}
    >
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-8 px-5 lg:px-12">
        <BrandLockup />

        <nav
          aria-label="Primary"
          className="hidden items-center gap-10 lg:flex"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative text-[14px] font-medium tracking-[0.02em] text-brand-cream/60 transition-colors duration-300 hover:text-brand-cream motion-reduce:transition-none"
            >
              {item.label}
              <span
                aria-hidden
                className="pointer-events-none absolute -bottom-1.5 left-0 h-px w-full origin-center scale-x-0 bg-brand-gold transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100 motion-reduce:transition-none"
              />
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <LangToggle locale={locale} onChange={setLocale} />
          <Link
            href="/contact"
            className="inline-block border border-brand-cream/40 px-6 py-3 text-[14px] font-medium tracking-[0.05em] text-brand-cream transition-all duration-300 hover:border-brand-cream hover:bg-brand-cream hover:text-charcoal motion-reduce:transition-none"
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
          className="p-1 text-brand-cream transition-opacity duration-200 hover:opacity-70 motion-reduce:transition-none lg:hidden"
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
      className="inline-flex items-center gap-3"
    >
      <Image
        src="/brand/logo.png"
        alt=""
        width={582}
        height={720}
        priority
        className="h-9 w-auto"
      />
      <span className="text-[14px] font-medium leading-none tracking-[0.01em] text-brand-cream">
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
    "text-[14px] transition-colors duration-300 motion-reduce:transition-none";
  const active = "font-medium text-brand-cream";
  const inactive = "font-normal text-brand-cream/35 hover:text-brand-cream";

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
      <span aria-hidden className="px-2 text-[14px] text-brand-cream/35">
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
      className={`fixed inset-0 z-40 flex flex-col bg-charcoal/95 backdrop-blur-xl transition-opacity duration-200 motion-reduce:transition-none lg:hidden ${
        open
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0"
      }`}
    >
      <div className="flex flex-1 flex-col justify-between px-5 pb-12 pt-24">
        <ul className="flex flex-col border-t border-brand-gold/20">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={onClose}
                className="block border-b border-brand-gold/20 py-5 text-[18px] font-medium tracking-[0.02em] text-brand-cream transition-colors duration-300 hover:text-brand-cream/70 motion-reduce:transition-none"
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
            className="block w-full border border-brand-cream/40 py-4 text-center text-[14px] font-medium tracking-[0.05em] text-brand-cream transition-all duration-300 hover:bg-brand-cream hover:text-charcoal motion-reduce:transition-none"
          >
            Contact us
          </Link>
        </div>
      </div>
    </div>
  );
}
