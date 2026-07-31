import React from "react";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import Reveal from "@/components/ui/Reveal";
import { GENERAL_WHATSAPP_LINK } from "@/data/products";

export default function CTASection() {
  return (
    <section className="bg-oxblood text-parchment grain-overlay py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 text-center">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-parchment/70 mb-6">
            Listo para encender la parrilla
          </p>
          <h2 className="font-heading font-extrabold uppercase leading-[0.9] tracking-tight text-balance mx-auto max-w-4xl" style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}>
            Tu próximo asado empieza acá
          </h2>
          <p className="mt-8 mx-auto max-w-xl text-parchment/85 text-lg leading-relaxed">
            Escribinos por WhatsApp, elegí tus cortes y coordinamos la entrega. Precios del día, calidad garantizada.
          </p>
          <div className="mt-10">
            <a
              href={GENERAL_WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-obsidian text-parchment px-8 py-5 font-heading font-bold uppercase tracking-wider text-base hover:bg-parchment hover:text-obsidian transition-colors min-h-[44px]"
            >
              <WhatsAppIcon className="w-6 h-6" />
              Hacer pedido por WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
