import React from "react";
import { MapPin, Clock, Phone, Instagram } from "lucide-react";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { BUSINESS, CATEGORIES, GENERAL_WHATSAPP_LINK } from "@/data/products";

export default function Footer() {
  return (
    <footer className="bg-obsidian text-parchment grain-overlay">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid gap-12 lg:gap-8 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <p className="font-heading font-extrabold uppercase text-3xl tracking-tight">
              Carnes<span className="text-oxblood">FB</span>
            </p>
            <p className="mt-4 text-parchment/70 leading-relaxed">
              Distribuidora de carnes premium con los mejores precios. Del campo a tu parrilla.
            </p>
            <a
              href="https://www.instagram.com/carnes.fb/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram de CarnesFB"
              className="mt-5 inline-flex items-center justify-center w-10 h-10 rounded-full border border-parchment/20 text-parchment/80 hover:text-oxblood hover:border-oxblood transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>

          <nav aria-label="Categorías">
            <h2 className="font-heading uppercase tracking-wider text-sm text-oxblood mb-4">Catálogo</h2>
            <ul className="space-y-2">
              {CATEGORIES.map((c) => (
                <li key={c.id}>
                  <a href="#catalogo" className="text-parchment/80 hover:text-parchment transition-colors">
                    {c.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-heading uppercase tracking-wider text-sm text-oxblood mb-4">Contacto</h2>
            <ul className="space-y-3 text-parchment/80">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 text-oxblood shrink-0" />
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BUSINESS.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-parchment"
                >
                  {BUSINESS.address}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 mt-1 text-oxblood shrink-0" />
                <span className="whitespace-pre-line">{BUSINESS.hours}</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-1 text-oxblood shrink-0" />
                <a href={`tel:${BUSINESS.phone.replace(/\s/g, "")}`} className="hover:text-parchment">
                  {BUSINESS.phone}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading uppercase tracking-wider text-sm text-oxblood mb-4">Hacé tu pedido</h2>
            <p className="text-parchment/70 mb-4">Escribinos por WhatsApp y coordinamos tu pedido del día.</p>
            <a
              href={GENERAL_WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-oxblood text-parchment px-5 py-3 font-heading uppercase tracking-wider text-sm hover:bg-oxbloodDark transition-colors min-h-[44px]"
            >
              <WhatsAppIcon className="w-4 h-4" />
              WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-parchment/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-parchment/50 text-sm">
            © {new Date().getFullYear()} CarnesFB. Todos los derechos reservados.
          </p>
          <p className="text-parchment/50 text-sm">
            Precios sujetos a actualización diaria.
          </p>
        </div>
      </div>
    </footer>
  );
}
