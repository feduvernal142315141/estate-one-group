"use client";

import { Award, Target, Heart, Sparkles } from "lucide-react";

const values = [
  {
    icon: Award,
    title: "Excelencia",
    description: "Nos esforzamos por superar las expectativas en cada interacción.",
  },
  {
    icon: Target,
    title: "Integridad",
    description: "Actuamos con honestidad y transparencia en todas nuestras operaciones.",
  },
  {
    icon: Heart,
    title: "Compromiso",
    description: "Su satisfacción es nuestra prioridad absoluta.",
  },
  {
    icon: Sparkles,
    title: "Innovación",
    description: "Adoptamos las mejores prácticas y tecnologías del mercado.",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-cream relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Column */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop"
                alt="Luxury Real Estate Office"
                className="w-full h-[500px] object-cover"
              />
              {/* Gold Frame */}
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-gold -z-10" />
            </div>

            {/* Experience Badge */}
            <div className="absolute -bottom-8 -right-8 bg-charcoal p-8 z-20 shadow-2xl">
              <span className="block text-5xl font-serif text-gold mb-2">
                15+
              </span>
              <span className="text-cream/80 text-sm uppercase tracking-wider">
                Años de<br />Experiencia
              </span>
            </div>

            {/* Decorative Element */}
            <div className="absolute top-1/2 -left-16 w-32 h-32 border border-gold/30 hidden lg:block" />
          </div>

          {/* Content Column */}
          <div>
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-gold" />
              <span className="text-gold text-sm tracking-[0.3em] uppercase">
                Sobre Nosotros
              </span>
            </div>

            <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-8 text-balance">
              Una Tradición de
              <span className="text-crimson"> Excelencia</span> Inmobiliaria
            </h2>

            <p className="text-charcoal/70 leading-relaxed mb-6">
              En Estate One Group, hemos dedicado más de una década a redefinir
              el estándar de servicio en el mercado inmobiliario de lujo.
              Nuestra pasión por la excelencia y nuestro compromiso con cada
              cliente nos han convertido en el socio de confianza para las
              transacciones más prestigiosas.
            </p>

            <p className="text-charcoal/70 leading-relaxed mb-10">
              Nuestro equipo de expertos combina un profundo conocimiento del
              mercado con un enfoque personalizado, asegurando que cada cliente
              reciba la atención y el cuidado que merece en una de las
              decisiones más importantes de su vida.
            </p>

            {/* Values */}
            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              {values.map((value) => (
                <div key={value.title} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-serif text-charcoal text-lg mb-1">
                      {value.title}
                    </h4>
                    <p className="text-charcoal/60 text-sm">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex px-8 py-4 bg-charcoal text-cream font-medium tracking-wide uppercase hover:bg-crimson transition-all duration-300"
            >
              Conocer al Equipo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
