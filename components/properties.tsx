"use client";

import { MapPin, Bed, Bath, Square, ArrowRight } from "lucide-react";

const properties = [
  {
    id: 1,
    title: "Residencia Vista al Mar",
    location: "Punta del Este, Uruguay",
    price: "$4,500,000",
    beds: 5,
    baths: 6,
    sqft: "8,500",
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop",
    featured: true,
  },
  {
    id: 2,
    title: "Penthouse Ejecutivo",
    location: "Ciudad de México, México",
    price: "$2,800,000",
    beds: 4,
    baths: 4,
    sqft: "5,200",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
    featured: false,
  },
  {
    id: 3,
    title: "Villa Colonial",
    location: "Cartagena, Colombia",
    price: "$3,200,000",
    beds: 6,
    baths: 7,
    sqft: "9,800",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    featured: false,
  },
  {
    id: 4,
    title: "Mansión Contemporánea",
    location: "Miami, Florida",
    price: "$7,900,000",
    beds: 7,
    baths: 8,
    sqft: "12,000",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop",
    featured: true,
  },
];

export function Properties() {
  return (
    <section id="properties" className="py-24 bg-charcoal relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23B8960C' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-gold" />
              <span className="text-gold text-sm tracking-[0.3em] uppercase">
                Propiedades Exclusivas
              </span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-cream text-balance">
              Descubra Nuestras
              <span className="text-gold"> Joyas</span> Inmobiliarias
            </h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors group"
          >
            <span className="uppercase tracking-wider text-sm">
              Ver Todas las Propiedades
            </span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Properties Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {properties.map((property) => (
            <div
              key={property.id}
              className={`group relative overflow-hidden ${
                property.featured ? "md:row-span-2" : ""
              }`}
            >
              {/* Image */}
              <div
                className={`relative overflow-hidden ${
                  property.featured ? "h-full min-h-[600px]" : "h-[350px]"
                }`}
              >
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/30 to-transparent" />

                {/* Featured Badge */}
                {property.featured && (
                  <div className="absolute top-6 left-6 px-4 py-2 bg-crimson text-cream text-xs uppercase tracking-wider">
                    Destacada
                  </div>
                )}

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  {/* Location */}
                  <div className="flex items-center gap-2 text-gold text-sm mb-3">
                    <MapPin className="w-4 h-4" />
                    <span>{property.location}</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-2xl md:text-3xl text-cream mb-4 group-hover:text-gold transition-colors">
                    {property.title}
                  </h3>

                  {/* Features */}
                  <div className="flex items-center gap-6 text-cream/70 text-sm mb-4">
                    <div className="flex items-center gap-2">
                      <Bed className="w-4 h-4" />
                      <span>{property.beds} Hab</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Bath className="w-4 h-4" />
                      <span>{property.baths} Baños</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Square className="w-4 h-4" />
                      <span>{property.sqft} ft²</span>
                    </div>
                  </div>

                  {/* Price & CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-cream/20">
                    <span className="text-2xl font-serif text-gold">
                      {property.price}
                    </span>
                    <button className="px-6 py-2 border border-cream/30 text-cream text-sm uppercase tracking-wider hover:bg-gold hover:border-gold hover:text-charcoal transition-all duration-300">
                      Ver Detalles
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
