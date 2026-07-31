import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { GENERAL_WHATSAPP_LINK, HERO_IMAGE } from "@/data/products";

export default function Hero() {
  return (
    <section id="inicio" className="relative bg-obsidian text-parchment grain-overlay overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center min-h-[92vh] py-28 lg:py-0">
          {/* Texto */}
          <div className="order-2 lg:order-1">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-heading font-extrabold uppercase leading-[0.85] tracking-tight text-balance"
              style={{ fontSize: "clamp(3.5rem, 9vw, 7rem)" }}
            >
              Carnes <span className="text-oxblood">FB</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-3 font-heading font-semibold uppercase text-parchment/70"
              style={{ fontSize: "clamp(1.4rem, 3vw, 2.4rem)" }}
            >
              Calidad Suprema
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-8 max-w-md text-parchment/80 text-lg leading-relaxed"
            >
              Del campo a tu parrilla. Cortes premium de res, cerdo, pollo y achuras, con precios
              actualizados al día. Pedidos directos por WhatsApp.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#catalogo"
                className="inline-flex items-center justify-center gap-2 bg-parchment text-obsidian px-7 py-4 font-heading font-bold uppercase tracking-wider text-sm hover:bg-white transition-colors min-h-[44px]"
              >
                Ver catálogo
                <ArrowDown className="w-4 h-4" />
              </a>
              <a
                href={GENERAL_WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-oxblood text-parchment px-7 py-4 font-heading font-bold uppercase tracking-wider text-sm hover:bg-oxbloodDark transition-colors min-h-[44px]"
              >
                <WhatsAppIcon className="w-5 h-5" />
                Pedir ahora
              </a>
            </motion.div>
          </div>

          {/* Imagen */}
          <motion.div
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-2 relative"
          >
            <img
              src={HERO_IMAGE}
              alt="Primer plano de un corte de ribeye crudo mostrando el veteado de la grasa"
              className="w-full h-[42vh] sm:h-[52vh] lg:h-[84vh] object-cover"
              loading="eager"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
