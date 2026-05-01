"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

type Locale = "en" | "es";

type NavItem = { label: string; href: string };

const navItems: readonly NavItem[] = [
  { label: "Home", href: "#hero" },
  { label: "Properties", href: "#properties" },
  { label: "Services", href: "#services" },
  { label: "The Firm", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

const SCROLL_THRESHOLD = 80;

const EASE_OUT_SOFT = "ease-[var(--ease-out-soft)]";

/**
 * Estate One Group site header.
 *
 * Editorial luxury navbar: real PNG isotype + wordmark, hairline gold
 * accents, ghost-outlined gold CTA, and a visual-only EN | ES toggle.
 * Past 80px of scroll, padding collapses, the bar gains a charcoal
 * backdrop-blur, and a hairline gold border appears. Below the `lg`
 * breakpoint the right side becomes a hamburger that opens a full-screen
 * overlay menu.
 */
export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [locale, setLocale] = useState<Locale>("en");

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-[400ms] ${EASE_OUT_SOFT} ${
        isScrolled
          ? "border-b-[0.5px] border-brand-gold/15 bg-charcoal/95 py-3 backdrop-blur-md"
          : "border-b-[0.5px] border-transparent bg-transparent py-6"
      }`}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-8 px-5 lg:px-14">
        <Link
          href="/"
          aria-label="Estate One Group"
          className="inline-flex items-center gap-3"
        >
          <BrandLogo isScrolled={isScrolled} />
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-10 lg:flex"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`group relative text-[11px] font-medium uppercase tracking-[0.22em] text-brand-cream/80 transition-colors duration-[200ms] hover:text-brand-gold`}
            >
              {item.label}
              <span
                aria-hidden
                className={`pointer-events-none absolute -bottom-1.5 left-0 h-px w-0 bg-brand-gold transition-all duration-[400ms] ${EASE_OUT_SOFT} group-hover:w-full`}
              />
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-8 lg:flex">
          <LangToggle locale={locale} onChange={setLocale} />
          <a
            href="#contact"
            className={`inline-block border border-brand-gold/40 px-7 py-3 text-[10px] font-medium uppercase tracking-[0.25em] text-brand-gold transition-all duration-[400ms] ${EASE_OUT_SOFT} hover:border-brand-gold hover:bg-brand-gold hover:text-charcoal`}
          >
            Schedule Consultation
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsMobileMenuOpen((open) => !open)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
          className="p-2 text-brand-cream transition-colors duration-[200ms] hover:text-brand-gold lg:hidden"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" strokeWidth={1.2} />
          ) : (
            <Menu className="h-6 w-6" strokeWidth={1.2} />
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

function BrandLogo({ isScrolled }: { isScrolled: boolean }) {
  return (
    <>
      <Image
        src="/brand/logo.png"
        alt=""
        width={582}
        height={720}
        priority
        className={`w-auto transition-all duration-[400ms] ${EASE_OUT_SOFT} ${
          isScrolled ? "h-9" : "h-10 lg:h-12"
        }`}
      />
      <div className="flex flex-col justify-center">
        <span
          className={`font-serif font-normal leading-none tracking-normal text-brand-cream/90 transition-all duration-[400ms] ${EASE_OUT_SOFT} ${
            isScrolled ? "text-[14px]" : "text-[16px]"
          }`}
        >
          Estate One
        </span>
        <div
          aria-hidden
          className="my-1.5 h-px w-7 bg-brand-gold/60"
        />
        <span className="font-sans text-[8px] font-normal uppercase leading-none tracking-[0.4em] text-brand-gold">
          GROUP
        </span>
      </div>
    </>
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
    "text-[11px] font-medium uppercase tracking-[0.22em] transition-colors duration-[200ms]";
  const active = "text-brand-gold";
  const inactive = "text-brand-cream/50 hover:text-brand-cream";

  return (
    <div
      role="group"
      aria-label="Language"
      className="flex items-center gap-3"
    >
      <button
        type="button"
        onClick={() => onChange("en")}
        aria-pressed={locale === "en"}
        className={`${base} ${locale === "en" ? active : inactive}`}
      >
        EN
      </button>
      <span aria-hidden className="h-3 w-px bg-brand-gold/30" />
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
      aria-hidden={!open}
      className={`fixed inset-0 top-0 z-40 flex flex-col bg-charcoal/98 backdrop-blur-lg transition-opacity duration-[700ms] ${EASE_OUT_SOFT} lg:hidden ${
        open
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0"
      }`}
    >
      <div className="flex flex-1 flex-col justify-between px-5 pb-12 pt-28">
        <ul className="flex flex-col border-t-[0.5px] border-brand-gold/15">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={onClose}
                className="block border-b-[0.5px] border-brand-gold/15 py-6 font-serif text-[28px] italic text-brand-cream transition-colors duration-[200ms] hover:text-brand-gold"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex flex-col items-center gap-8">
          <LangToggle locale={locale} onChange={onLocaleChange} />
          <a
            href="#contact"
            onClick={onClose}
            className={`block w-full border border-brand-gold/40 py-4 text-center text-[10px] font-medium uppercase tracking-[0.25em] text-brand-gold transition-all duration-[400ms] ${EASE_OUT_SOFT} hover:bg-brand-gold hover:text-charcoal`}
          >
            Schedule Consultation
          </a>
        </div>
      </div>
    </div>
  );
}
