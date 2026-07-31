import React from "react";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { GENERAL_WHATSAPP_LINK } from "@/data/products";

export default function FloatingWhatsApp() {
  return (
    <a
      href={GENERAL_WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Hacer pedido por WhatsApp"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center justify-center w-14 h-14 bg-oxblood text-parchment rounded-full shadow-lg shadow-oxblood/40 hover:bg-oxbloodDark hover:scale-110 transition-all min-w-[44px] min-h-[44px]"
    >
      <WhatsAppIcon className="w-7 h-7" />
    </a>
  );
}
