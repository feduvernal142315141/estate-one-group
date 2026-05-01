"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, Mail } from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Inicio", href: "#hero" },
    { label: "Servicios", href: "#services" },
    { label: "Propiedades", href: "#properties" },
    { label: "Nosotros", href: "#about" },
    { label: "Contacto", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-charcoal/95 backdrop-blur-md py-3 shadow-xl"
          : "bg-transparent py-5"
      }`}
    >
      {/* Top Bar */}
      <div
        className={`border-b border-gold/20 pb-2 mb-2 transition-opacity duration-300 ${
          isScrolled ? "opacity-0 h-0 pb-0 mb-0 overflow-hidden" : "opacity-100"
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a
              href="tel:+1234567890"
              className="flex items-center gap-2 text-cream/80 hover:text-gold transition-colors"
            >
              <Phone className="w-3 h-3" />
              <span>+1 (234) 567-890</span>
            </a>
            <a
              href="mailto:info@estateonegroup.com"
              className="flex items-center gap-2 text-cream/80 hover:text-gold transition-colors"
            >
              <Mail className="w-3 h-3" />
              <span>info@estateonegroup.com</span>
            </a>
          </div>
          <p className="text-cream/60 hidden md:block">
            Excelencia en Bienes Raíces de Lujo
          </p>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-6">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 border-2 border-gold flex items-center justify-center">
              <span className="text-gold font-serif text-lg font-bold">E</span>
            </div>
            <div className="flex flex-col">
              <span className="text-cream font-serif text-xl tracking-wider">
                ESTATE ONE
              </span>
              <span className="text-gold text-[10px] tracking-[0.3em] uppercase">
                Group
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-cream/90 hover:text-gold transition-colors text-sm tracking-wide uppercase relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <a
              href="#contact"
              className="px-6 py-3 bg-gold text-charcoal font-medium text-sm tracking-wide uppercase hover:bg-gold-light transition-all duration-300"
            >
              Agenda tu Cita
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-cream p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 top-[72px] bg-charcoal/98 backdrop-blur-lg transition-all duration-500 ${
          isMobileMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="container mx-auto px-6 py-8 flex flex-col gap-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-cream text-2xl font-serif hover:text-gold transition-colors border-b border-gold/20 pb-4"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-4 px-8 py-4 bg-gold text-charcoal font-medium text-center tracking-wide uppercase"
          >
            Agenda tu Cita
          </a>
        </div>
      </div>
    </header>
  );
}
