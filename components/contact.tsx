"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    interest: "buying",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-24 bg-cream relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-px bg-gold" />
            <span className="text-gold text-sm tracking-[0.3em] uppercase">
              Contacto
            </span>
            <div className="w-12 h-px bg-gold" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-6 text-balance">
            Comience Su
            <span className="text-crimson"> Viaje</span> Inmobiliario
          </h2>
          <p className="text-charcoal/70 max-w-2xl mx-auto">
            Estamos aquí para ayudarle a encontrar la propiedad perfecta.
            Contáctenos hoy y permítanos hacer realidad sus sueños.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="bg-charcoal p-8 md:p-12">
            <h3 className="font-serif text-2xl text-cream mb-8">
              Información de Contacto
            </h3>

            <div className="space-y-6 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h4 className="text-cream font-medium mb-1">Dirección</h4>
                  <p className="text-cream/60">
                    Av. Principal 1234, Piso 15
                    <br />
                    Ciudad Empresarial, País
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h4 className="text-cream font-medium mb-1">Teléfono</h4>
                  <p className="text-cream/60">+1 (234) 567-890</p>
                  <p className="text-cream/60">+1 (234) 567-891</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h4 className="text-cream font-medium mb-1">Email</h4>
                  <p className="text-cream/60">info@estateonegroup.com</p>
                  <p className="text-cream/60">ventas@estateonegroup.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h4 className="text-cream font-medium mb-1">Horario</h4>
                  <p className="text-cream/60">Lunes - Viernes: 9:00 - 18:00</p>
                  <p className="text-cream/60">Sábado: 10:00 - 14:00</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8 border-t border-gold/20">
              <p className="text-cream/60 text-sm mb-4">Síguenos en redes</p>
              <div className="flex gap-4">
                {["Facebook", "Instagram", "LinkedIn", "Twitter"].map(
                  (social) => (
                    <a
                      key={social}
                      href="#"
                      className="w-10 h-10 border border-cream/30 flex items-center justify-center text-cream/60 hover:border-gold hover:text-gold transition-colors text-xs"
                    >
                      {social.charAt(0)}
                    </a>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white border border-charcoal/10 p-8 md:p-12">
            <h3 className="font-serif text-2xl text-charcoal mb-8">
              Envíenos un Mensaje
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-charcoal/80 text-sm mb-2"
                  >
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-charcoal/20 focus:border-gold focus:outline-none transition-colors bg-transparent"
                    placeholder="Su nombre"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-charcoal/80 text-sm mb-2"
                  >
                    Correo Electrónico *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-charcoal/20 focus:border-gold focus:outline-none transition-colors bg-transparent"
                    placeholder="su@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-charcoal/80 text-sm mb-2"
                  >
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-charcoal/20 focus:border-gold focus:outline-none transition-colors bg-transparent"
                    placeholder="+1 (234) 567-890"
                  />
                </div>
                <div>
                  <label
                    htmlFor="interest"
                    className="block text-charcoal/80 text-sm mb-2"
                  >
                    Interés
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-charcoal/20 focus:border-gold focus:outline-none transition-colors bg-transparent"
                  >
                    <option value="buying">Comprar Propiedad</option>
                    <option value="selling">Vender Propiedad</option>
                    <option value="investing">Inversión</option>
                    <option value="consulting">Consultoría</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-charcoal/80 text-sm mb-2"
                >
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-charcoal/20 focus:border-gold focus:outline-none transition-colors bg-transparent resize-none"
                  placeholder="Cuéntenos sobre sus necesidades inmobiliarias..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-charcoal text-cream font-medium tracking-wide uppercase hover:bg-crimson transition-all duration-300 flex items-center justify-center gap-3 group"
              >
                <span>Enviar Mensaje</span>
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
