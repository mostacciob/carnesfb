import React from "react";
import { Quote } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const CLIENTS = [
  "Parrilla Don Julio",
  "La Brigada",
  "El Pobre Luis",
  "Siga La Vaca",
  "El Mirasol",
  "Hilton Buenos Aires",
];

const TESTIMONIALS = [
  {
    quote: "La mejor calidad que probamos en años. El bife de chorizo es impecable y el servicio siempre puntual.",
    author: "Chef Rodrigo Méndez",
    role: "Parrilla Don Julio",
  },
  {
    quote: "Pedimos hace meses para nuestro restaurante. Frescura, precios claros y atención de primera.",
    author: "Mariana López",
    role: "La Brigada",
  },
  {
    quote: "Los achuras son de otro nivel. La molleja tierna como siempre. Recomendados al 100%.",
    author: "Lucas Fernández",
    role: "El Pobre Luis",
  },
];

export default function SocialProof() {
  return (
    <section id="opiniones" className="bg-obsidian text-parchment grain-overlay py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="max-w-2xl mb-16">
          <Reveal>
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-oxblood mb-4">
              Confianza
            </p>
            <h2 className="font-heading font-extrabold uppercase leading-[0.9] tracking-tight text-balance" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
              Los mejores, nos eligen
            </h2>
          </Reveal>
        </div>

        {/* Marquee de clientes */}
        <div className="relative mb-20">
          <div className="flex overflow-hidden mask-fade">
            <div className="flex shrink-0 animate-marquee gap-12 pr-12">
              {[...CLIENTS, ...CLIENTS].map((c, i) => (
                <span
                  key={i}
                  className="font-heading font-bold uppercase tracking-wider text-2xl text-parchment/40 whitespace-nowrap"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonios */}
        <div className="grid gap-8 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <figure className="relative bg-obsidian border border-parchment/15 p-8 lg:p-10 h-full">
                <Quote className="w-12 h-12 text-oxblood mb-6" aria-hidden="true" />
                <blockquote className="text-lg lg:text-xl leading-relaxed text-parchment/90">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-8 pt-6 border-t border-parchment/10">
                  <p className="font-heading font-bold uppercase tracking-tight">{t.author}</p>
                  <p className="text-parchment/50 text-sm">{t.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
