"use client";

import { Home, Key, TrendingUp, Shield, Users, Award } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Venta de Propiedades",
    description:
      "Maximizamos el valor de su propiedad con estrategias de marketing exclusivas y una red global de compradores calificados.",
  },
  {
    icon: Key,
    title: "Compra Asesorada",
    description:
      "Le guiamos en cada paso del proceso de compra, asegurando que encuentre la propiedad perfecta para sus necesidades.",
  },
  {
    icon: TrendingUp,
    title: "Inversión Inmobiliaria",
    description:
      "Identificamos oportunidades de inversión con alto potencial de rentabilidad y crecimiento a largo plazo.",
  },
  {
    icon: Shield,
    title: "Asesoría Legal",
    description:
      "Protegemos sus intereses con un equipo legal especializado en transacciones inmobiliarias de alto valor.",
  },
  {
    icon: Users,
    title: "Consultoría Personalizada",
    description:
      "Desarrollamos estrategias a medida para alcanzar sus objetivos inmobiliarios con un enfoque integral.",
  },
  {
    icon: Award,
    title: "Propiedades Premium",
    description:
      "Acceso exclusivo a las propiedades más prestigiosas del mercado, seleccionadas por nuestros expertos.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-cream relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gold/5 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-px bg-gold" />
            <span className="text-gold text-sm tracking-[0.3em] uppercase">
              Nuestros Servicios
            </span>
            <div className="w-12 h-px bg-gold" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-6 text-balance">
            Excelencia en Cada
            <span className="text-crimson"> Servicio</span>
          </h2>
          <p className="text-charcoal/70 max-w-2xl mx-auto leading-relaxed">
            Ofrecemos una gama completa de servicios inmobiliarios diseñados
            para superar sus expectativas y hacer realidad sus sueños.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-8 bg-white border border-charcoal/10 hover:border-gold/50 transition-all duration-500 hover:shadow-xl"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-charcoal flex items-center justify-center mb-6 group-hover:bg-gold transition-colors duration-300">
                <service.icon className="w-6 h-6 text-gold group-hover:text-charcoal transition-colors duration-300" />
              </div>

              {/* Content */}
              <h3 className="font-serif text-xl text-charcoal mb-4 group-hover:text-crimson transition-colors">
                {service.title}
              </h3>
              <p className="text-charcoal/60 leading-relaxed">
                {service.description}
              </p>

              {/* Decorative Line */}
              <div className="mt-6 w-0 h-px bg-gold group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
