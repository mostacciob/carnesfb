import React from "react";
import { ChevronDown } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { FAQS } from "@/data/products";

export default function FAQ() {
  return (
    <section id="faq" className="bg-parchment py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-12">
        <div className="mb-12 text-center">
          <Reveal>
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-oxblood mb-4">
              Preguntas frecuentes
            </p>
            <h2 className="font-heading font-extrabold uppercase leading-[0.9] tracking-tight text-balance" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
              Todo lo que necesitás saber
            </h2>
          </Reveal>
        </div>

        <div className="divide-y divide-obsidian/10 border-y border-obsidian/10">
          {FAQS.map((f, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <details className="group py-6">
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none">
                  <h3 className="font-heading font-bold uppercase text-lg lg:text-xl tracking-tight pr-4">
                    {f.q}
                  </h3>
                  <ChevronDown className="w-5 h-5 text-oxblood shrink-0 transition-transform group-open:rotate-180" aria-hidden="true" />
                </summary>
                <p className="mt-4 text-steel leading-relaxed">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
