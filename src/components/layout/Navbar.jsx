import React, { useState, useEffect } from "react";
import { Menu, X, Instagram } from "lucide-react";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { GENERAL_WHATSAPP_LINK, BUSINESS } from "@/data/products";

const NAV_LINKS = [
  { href: "#inicio", label: "Inicio" },
  { href: "#catalogo", label: "Catálogo" },
  { href: "#beneficios", label: "Beneficios" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-parchment/95 backdrop-blur border-b border-obsidian/10 py-3 opacity-100 translate-y-0"
          : "bg-transparent py-5 opacity-0 -translate-y-full pointer-events-none"
      }`}
    >
      <nav className="mx-auto max-w-[1400px] px-6 lg:px-12 flex items-center justify-between" aria-label="Navegación principal">
        <a href="#inicio" className="flex items-baseline gap-1 font-heading font-extrabold uppercase tracking-tight text-2xl" aria-label="CarnesFB inicio">
          <span className={scrolled ? "text-obsidian" : "text-obsidian"}>Carnes</span>
          <span className="text-oxblood">FB</span>
        </a>

        <ul className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium uppercase tracking-wider text-obsidian/80 hover:text-oxblood transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="https://www.instagram.com/carnes.fb/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram de CarnesFB"
            className="inline-flex items-center justify-center w-11 h-11 text-obsidian/80 hover:text-oxblood transition-colors"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href={GENERAL_WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-oxblood text-parchment px-5 py-3 font-heading font-semibold uppercase tracking-wider text-sm hover:bg-oxbloodDark transition-colors min-h-[44px]"
          >
            <WhatsAppIcon className="w-4 h-4" />
            Pedir ahora
          </a>
        </div>

        <button
          type="button"
          className="lg:hidden inline-flex items-center justify-center w-11 h-11 text-obsidian"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-parchment border-t border-obsidian/10">
          <ul className="px-6 py-4 flex flex-col gap-1">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 px-2 font-heading uppercase tracking-wider text-lg text-obsidian hover:text-oxblood"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={GENERAL_WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="mt-2 flex items-center justify-center gap-2 bg-oxblood text-parchment px-5 py-4 font-heading uppercase tracking-wider"
              >
                <WhatsAppIcon className="w-5 h-5" />
                Pedir ahora
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/carnes.fb/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                aria-label="Instagram de CarnesFB"
                className="mt-2 flex items-center justify-center gap-2 border border-obsidian/15 text-obsidian px-5 py-4 font-heading uppercase tracking-wider"
              >
                <Instagram className="w-5 h-5" />
                Instagram
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
