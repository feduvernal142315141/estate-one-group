"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";

const footerLinks = {
  company: [
    { label: "Sobre Nosotros", href: "#about" },
    { label: "Nuestro Equipo", href: "#" },
    { label: "Carreras", href: "#" },
    { label: "Noticias", href: "#" },
  ],
  services: [
    { label: "Compra", href: "#" },
    { label: "Venta", href: "#" },
    { label: "Inversiones", href: "#" },
    { label: "Consultoría", href: "#" },
  ],
  properties: [
    { label: "Residencial", href: "#" },
    { label: "Comercial", href: "#" },
    { label: "Terrenos", href: "#" },
    { label: "Proyectos", href: "#" },
  ],
  legal: [
    { label: "Privacidad", href: "#" },
    { label: "Términos", href: "#" },
    { label: "Cookies", href: "#" },
  ],
};

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-charcoal border-t border-gold/20">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 border-2 border-gold flex items-center justify-center">
                <span className="text-gold font-serif text-xl font-bold">
                  E
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-cream font-serif text-2xl tracking-wider">
                  ESTATE ONE
                </span>
                <span className="text-gold text-xs tracking-[0.3em] uppercase">
                  Group
                </span>
              </div>
            </Link>
            <p className="text-cream/60 leading-relaxed mb-8 max-w-sm">
              Más de 15 años transformando sueños en hogares. Su socio de
              confianza en el mercado inmobiliario de lujo.
            </p>
            <div className="flex gap-4">
              {["F", "In", "Li", "X"].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 border border-cream/30 flex items-center justify-center text-cream/60 hover:border-gold hover:text-gold transition-colors text-sm"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="text-cream font-serif text-lg mb-6">Compañía</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-cream/60 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-cream font-serif text-lg mb-6">Servicios</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-cream/60 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-cream font-serif text-lg mb-6">Propiedades</h4>
            <ul className="space-y-3">
              {footerLinks.properties.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-cream/60 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gold/20">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-cream/50 text-sm">
              &copy; {new Date().getFullYear()} Estate One Group. Todos los
              derechos reservados.
            </p>

            <div className="flex items-center gap-6">
              {footerLinks.legal.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-cream/50 hover:text-gold transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <button
              onClick={scrollToTop}
              className="w-10 h-10 border border-cream/30 flex items-center justify-center text-cream/60 hover:border-gold hover:text-gold transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
