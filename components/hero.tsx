"use client";

import { useEffect, useState } from "react";
import { ChevronDown, Play } from "lucide-react";

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop')`,
          }}
        />
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/70 to-charcoal/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-charcoal/30" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-gold/20 rotate-45 hidden lg:block" />
      <div className="absolute bottom-20 right-10 w-24 h-24 border border-gold/20 hidden lg:block" />

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-3 mb-8 transition-all duration-1000 delay-300 ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="w-12 h-px bg-gold" />
            <span className="text-gold text-sm tracking-[0.3em] uppercase">
              Bienes Raíces de Lujo
            </span>
          </div>

          {/* Main Heading */}
          <h1
            className={`font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-cream leading-tight mb-8 transition-all duration-1000 delay-500 ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <span className="block">Donde el</span>
            <span className="block text-gold">Lujo</span>
            <span className="block">Encuentra su Hogar</span>
          </h1>

          {/* Description */}
          <p
            className={`text-cream/80 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed transition-all duration-1000 delay-700 ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Descubra propiedades excepcionales con un servicio incomparable.
            Nuestra dedicación a la excelencia transforma cada transacción en
            una experiencia extraordinaria.
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-900 ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <a
              href="#properties"
              className="px-8 py-4 bg-gold text-charcoal font-medium tracking-wide uppercase hover:bg-gold-light transition-all duration-300 text-center"
            >
              Explorar Propiedades
            </a>
            <button className="px-8 py-4 border border-cream/30 text-cream font-medium tracking-wide uppercase hover:border-gold hover:text-gold transition-all duration-300 flex items-center justify-center gap-3 group">
              <Play className="w-4 h-4 group-hover:scale-110 transition-transform" />
              Ver Presentación
            </button>
          </div>
        </div>

        {/* Stats */}
        <div
          className={`absolute bottom-0 right-0 hidden lg:grid grid-cols-3 gap-8 p-8 bg-charcoal/80 backdrop-blur-sm border-t border-l border-gold/20 transition-all duration-1000 delay-1100 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center px-6">
            <span className="block text-4xl font-serif text-gold mb-1">
              250+
            </span>
            <span className="text-cream/60 text-sm uppercase tracking-wider">
              Propiedades
            </span>
          </div>
          <div className="text-center px-6 border-x border-gold/20">
            <span className="block text-4xl font-serif text-gold mb-1">
              15+
            </span>
            <span className="text-cream/60 text-sm uppercase tracking-wider">
              Años de Experiencia
            </span>
          </div>
          <div className="text-center px-6">
            <span className="block text-4xl font-serif text-gold mb-1">
              98%
            </span>
            <span className="text-cream/60 text-sm uppercase tracking-wider">
              Clientes Satisfechos
            </span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#services"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream/60 hover:text-gold transition-colors animate-bounce"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <ChevronDown className="w-5 h-5" />
      </a>
    </section>
  );
}
