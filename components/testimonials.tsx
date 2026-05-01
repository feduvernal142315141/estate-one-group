"use client";

import { useState } from "react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "María Fernanda Castillo",
    role: "CEO, Grupo Inversiones MFC",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
    quote:
      "Estate One Group superó todas mis expectativas. Su profesionalismo y dedicación hicieron que la compra de mi nueva residencia fuera una experiencia excepcional. Recomiendo sus servicios sin reservas.",
    rating: 5,
  },
  {
    id: 2,
    name: "Roberto Mendoza García",
    role: "Empresario Internacional",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
    quote:
      "He trabajado con muchas inmobiliarias de lujo, pero ninguna se compara con el nivel de servicio de Estate One. Su atención al detalle y conocimiento del mercado son incomparables.",
    rating: 5,
  },
  {
    id: 3,
    name: "Ana Sofía Herrera",
    role: "Arquitecta y Diseñadora",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop",
    quote:
      "La experiencia de vender mi propiedad con Estate One fue impecable. Lograron un precio superior al esperado en tiempo récord. Un equipo verdaderamente profesional.",
    rating: 5,
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-24 bg-charcoal relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 border border-gold/10 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 border border-gold/10 translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-px bg-gold" />
            <span className="text-gold text-sm tracking-[0.3em] uppercase">
              Testimonios
            </span>
            <div className="w-12 h-px bg-gold" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-cream text-balance">
            Lo Que Dicen Nuestros
            <span className="text-gold"> Clientes</span>
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-charcoal/50 border border-gold/20 p-8 md:p-12">
            {/* Quote Icon */}
            <Quote className="absolute top-8 right-8 w-16 h-16 text-gold/20" />

            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Image */}
              <div className="flex-shrink-0">
                <div className="relative">
                  <img
                    src={currentTestimonial.image}
                    alt={currentTestimonial.name}
                    className="w-32 h-32 rounded-full object-cover border-4 border-gold"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gold flex items-center justify-center">
                    <Quote className="w-4 h-4 text-charcoal" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div>
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-gold text-gold"
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-cream/90 text-lg md:text-xl leading-relaxed mb-6 font-serif italic">
                  &ldquo;{currentTestimonial.quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div>
                  <p className="text-gold font-semibold text-lg">
                    {currentTestimonial.name}
                  </p>
                  <p className="text-cream/60">{currentTestimonial.role}</p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-8 border-t border-gold/20">
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 transition-all duration-300 ${
                      index === currentIndex
                        ? "w-8 bg-gold"
                        : "bg-cream/30 hover:bg-cream/50"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <div className="flex gap-4">
                <button
                  onClick={prevTestimonial}
                  className="w-12 h-12 border border-cream/30 flex items-center justify-center text-cream hover:border-gold hover:text-gold transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-12 h-12 border border-cream/30 flex items-center justify-center text-cream hover:border-gold hover:text-gold transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
