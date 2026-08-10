import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fetchSheetPrices } from "@/lib/sheetPrices";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import Reveal from "@/components/ui/Reveal";
import { CATEGORIES, PRODUCTS, formatPrice, buildWhatsAppLink } from "@/data/products";

export default function Catalog() {
  const [active, setActive] = useState("res");
  const [prices, setPrices] = useState({});
  const [loadingPrices, setLoadingPrices] = useState(true);
  const sectionRef = useRef(null);
  const STICKY_OFFSET = 64;

  const handleCategoryClick = (id) => {
    setActive(id);
    if (sectionRef.current) {
      const top = sectionRef.current.getBoundingClientRect().top + window.scrollY - STICKY_OFFSET;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  useEffect(() => {
    let mounted = true;
    fetchSheetPrices()
      .then((prices) => {
        if (mounted) setPrices(prices);
      })
      .catch(() => {})
      .finally(() => { if (mounted) setLoadingPrices(false); });
    return () => { mounted = false; };
  }, []);

  const filtered = PRODUCTS.filter((p) => p.category === active);
  const displayProducts = filtered.map((p) => ({ ...p, price: prices[p.id] ?? p.price }));

  return (
    <section id="catalogo" ref={sectionRef} className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="max-w-2xl mb-12">
          <Reveal>
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-oxblood mb-4">
              Catálogo · {loadingPrices ? "Cargando precios…" : "Precios del día"}
            </p>
            <h2 className="font-heading font-extrabold uppercase leading-[0.9] tracking-tight text-balance" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
              Nuestros Cortes
            </h2>
          </Reveal>
        </div>

        {/* Barra de categorías sticky */}
        <div className="sticky top-[64px] z-30 -mx-6 lg:mx-0 mb-12 bg-white/90 backdrop-blur border-y border-obsidian/10 py-4 px-6 lg:px-0">
          <div className="flex gap-2 lg:gap-3 overflow-x-auto" role="tablist" aria-label="Categorías de productos">
            {CATEGORIES.map((c) => {
              const isActive = active === c.id;
              return (
                <button
                  key={c.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => handleCategoryClick(c.id)}
                  className={`shrink-0 px-6 py-3 font-heading font-bold uppercase tracking-wider text-sm transition-colors min-h-[44px] ${
                    isActive
                      ? "bg-oxblood text-parchment"
                      : "bg-parchment text-obsidian hover:bg-obsidian hover:text-parchment"
                  }`}
                >
                  {c.label}
                </button>
              );
            })}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4"
          >
            {displayProducts.map((p) => (
              <article key={p.id} className="group flex flex-col bg-parchment border border-obsidian/10">
                <div className="relative overflow-hidden aspect-square bg-obsidian">
                  <img
                    src={p.image}
                    alt={`${p.name} — corte de ${CATEGORIES.find((c) => c.id === p.category)?.label} crudo sobre superficie oscura`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col flex-1 p-5">
                  <h3 className="font-heading font-bold uppercase text-2xl tracking-tight">
                    {p.name}
                  </h3>
                  <p className="text-steel text-sm mt-1 leading-relaxed flex-1">{p.description}</p>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="font-mono text-2xl font-medium text-obsidian">
                      {formatPrice(p.price)}
                    </span>
                    <span className="text-steel text-sm">/{p.unit}</span>
                  </div>
                  <a
                    href={buildWhatsAppLink(p)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center justify-center gap-2 w-full bg-oxblood text-parchment px-4 py-3 font-heading font-bold uppercase tracking-wider text-sm hover:bg-oxbloodDark transition-colors min-h-[44px]"
                    aria-label={`Pedir ${p.name} por WhatsApp`}
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    Pedir ahora
                  </a>
                </div>
              </article>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
