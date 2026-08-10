import React from "react";
import { Award, RefreshCw, Truck, ShieldCheck } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const BENEFITS = [
  {
    icon: Award,
    title: "Calidad Premium",
    text: "Seleccionamos cada corte a mano, con altos estándares de calidad. Solo lo mejor llega a tu parrilla.",
  },
  {
    icon: RefreshCw,
    title: "Precios del Día",
    text: "Precios actualizados a diario, visibles en la web. Sin sorpresas: lo que ves es lo que pagás.",
  },
  {
    icon: Truck,
    title: "Envío a Domicilio",
    text: "Coordinamos la entrega en General Rodríguez y alrededores. Cadena de frío garantizada hasta tu puerta.",
  },
  {
    icon: ShieldCheck,
    title: "Pedido Seguro",
    text: "Hacés el pedido directo por WhatsApp y lo coordinás con nosotros. Trato personal y de confianza.",
  },
];

export default function Benefits() {
  return (
    <section id="beneficios" className="bg-parchment py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="max-w-2xl mb-16">
          <Reveal>
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-oxblood mb-4">
              Por qué elegirnos
            </p>
            <h2 className="font-heading font-extrabold uppercase leading-[0.9] tracking-tight text-balance" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
              La diferencia Carnes<span className="text-oxblood">FB</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid gap-px bg-obsidian/10 border border-obsidian/10 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((b, i) => {
            const Icon = b.icon;
            return (
              <Reveal key={b.title} delay={i * 0.1}>
                <div className="group bg-parchment p-8 lg:p-10 h-full transition-colors hover:bg-white">
                  <div className="w-12 h-12 flex items-center justify-center bg-obsidian text-parchment group-hover:bg-oxblood transition-colors mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-bold uppercase text-2xl tracking-tight mb-3">
                    {b.title}
                  </h3>
                  <p className="text-steel leading-relaxed">{b.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
