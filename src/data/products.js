// ============================================================
//  CARNESFB — CONFIGURACIÓN DE PRODUCTOS, PRECIOS Y FAQ
// ============================================================
//  ⚠️  PARA ACTUALIZAR PRECIOS:
//  Los precios se leen en vivo desde la Google Sheet compartida
//  (ver src/lib/sheetPrices.js). Los valores "price" de acá abajo
//  son solo el respaldo que se muestra mientras carga la planilla.
//
//  ⚠️  PARA CAMBIAR EL NÚMERO DE WHATSAPP:
//  Editá WHATSAPP_NUMBER (formato internacional, sin + ni espacios).
//  Ej: 5491112345678  (54 = Argentina, 9 = móvil, 11 = área, resto = número)
// ============================================================

export const WHATSAPP_NUMBER = "5491134621780";

export const BUSINESS = {
  name: "CarnesFB",
  phone: "+54 11 3462-1780",
  email: "pedidos@carnesfb.com",
  address: "Manuela Gómez 277, B1748CYE Gral. Rodríguez, Provincia de Buenos Aires",
  url: "https://carnesfb.com",
  hours: "Lunes a domingo",
  description:
    "Distribuidora boutique de carnes premium. Pedidos directos por WhatsApp con precios actualizados al día. Calidad garantizada desde el campo a tu parrilla.",
};

export const CATEGORIES = [
  { id: "res", label: "Res", description: "Cortes de carne bovina premium" },
  { id: "cerdo", label: "Cerdo", description: "Cortes de cerdo seleccionados" },
  { id: "pollo", label: "Pollo", description: "Pollo fresco y troceado" },
  { id: "achuras", label: "Achuras", description: "Embutidos y achuras para la parrilla" },
  { id: "extras", label: "Extras", description: "Leña, carbón, huevos y todo para el fuego" },
];

export const HERO_IMAGE = "https://media.base44.com/images/public/6a6c9e97175b563ac1a44832/09362a1f6_generated_bd2b56e0.png";

// Imagen genérica por categoría, mientras se generan las fotos reales de cada corte.
const PLACEHOLDER = {
  res: "/placeholders/res.svg",
  cerdo: "/placeholders/cerdo.svg",
  pollo: "/placeholders/pollo.svg",
  achuras: "/placeholders/achuras.svg",
  extras: "/placeholders/extras.svg",
};

export const PRODUCTS = [
  // ============================================================
  // RES
  // ============================================================
  { id: "bife-de-chorizo", name: "Bife de Chorizo", category: "res", price: 16000, unit: "kg", image: "https://media.base44.com/images/public/6a6c9e97175b563ac1a44832/bfb68ef68_generated_b243c906.png", description: "Corte magro, jugoso y de sabor intenso. El clásico de la parrilla." },
  { id: "ojo-de-bife", name: "Ojo de Bife", category: "res", price: 15000, unit: "kg", image: "https://media.base44.com/images/public/6a6c9e97175b563ac1a44832/1449d85a8_generated_66c61fe1.png", description: "Ribeye con veteado de grasa que aporta terneza y sabor." },
  { id: "vacio", name: "Vacío", category: "res", price: 19000, unit: "kg", image: "https://media.base44.com/images/public/6a6c9e97175b563ac1a44832/2bc3734ee_generated_2ddc6949.png", description: "Corte sin hueso, ideal para asar lento a la parrilla." },
  { id: "entrana", name: "Entraña", category: "res", price: 22000, unit: "kg", image: "https://media.base44.com/images/public/6a6c9e97175b563ac1a44832/9f742493f_generated_a7edbf95.png", description: "Fina, de cocción rápida y sabor inconfundible." },
  { id: "cuadrada", name: "Cuadrada", category: "res", price: 17000, unit: "kg", image: PLACEHOLDER.res, description: "Corte magro de la pierna, ideal para milanesas o al horno." },
  { id: "peceto", name: "Peceto", category: "res", price: 20000, unit: "kg", image: PLACEHOLDER.res, description: "Corte alargado y magro, clásico para vitel toné o al horno." },
  { id: "cuadril", name: "Cuadril", category: "res", price: 16000, unit: "kg", image: PLACEHOLDER.res, description: "Corte jugoso y tierno, ideal para la parrilla o el horno." },
  { id: "colita-de-cuadril", name: "Colita de Cuadril", category: "res", price: 20000, unit: "kg", image: PLACEHOLDER.res, description: "La joya del cuadril: tierna, jugosa y con una fina capa de grasa." },
  { id: "tortuguita", name: "Tortuguita", category: "res", price: 16000, unit: "kg", image: PLACEHOLDER.res, description: "Corte de la pierna, tierno y de sabor suave." },
  { id: "palomita", name: "Palomita", category: "res", price: 16000, unit: "kg", image: PLACEHOLDER.res, description: "Corte pequeño y magro, ideal para milanesas." },
  { id: "roast-beef", name: "Roast Beef", category: "res", price: 15000, unit: "kg", image: PLACEHOLDER.res, description: "Corte magro y compacto, perfecto para el horno." },
  { id: "paleta", name: "Paleta", category: "res", price: 16000, unit: "kg", image: PLACEHOLDER.res, description: "Corte del cuarto delantero, sabroso para guisos y estofados." },
  { id: "lomo", name: "Lomo", category: "res", price: 21000, unit: "kg", image: PLACEHOLDER.res, description: "El corte más tierno de la res, ideal para la parrilla." },
  { id: "tira-de-asado", name: "Tira de Asado", category: "res", price: 17000, unit: "kg", image: PLACEHOLDER.res, description: "Costillar cortado en tiras, el clásico infaltable del asado." },
  { id: "tapa-de-nalga", name: "Tapa de Nalga", category: "res", price: 17000, unit: "kg", image: PLACEHOLDER.res, description: "Corte magro de la nalga, ideal para milanesas y bifes." },
  { id: "asado", name: "Asado", category: "res", price: 16000, unit: "kg", image: PLACEHOLDER.res, description: "Costillar de res, imprescindible en cualquier parrillada." },
  { id: "falda", name: "Falda", category: "res", price: 15000, unit: "kg", image: PLACEHOLDER.res, description: "Corte económico y sabroso, ideal para guisos y pucheros." },
  { id: "matambre", name: "Matambre", category: "res", price: 18000, unit: "kg", image: PLACEHOLDER.res, description: "Corte plano y versátil, para arrollados o a la parrilla." },
  { id: "osobuco", name: "Osobuco", category: "res", price: 13000, unit: "kg", image: PLACEHOLDER.res, description: "Corte con hueso y médula, perfecto para guisos y risottos." },
  { id: "espinazo", name: "Espinazo", category: "res", price: 10000, unit: "kg", image: PLACEHOLDER.res, description: "Hueso con carne, ideal para caldos y pucheros." },
  { id: "cartilago", name: "Cartílago", category: "res", price: 3000, unit: "kg", image: PLACEHOLDER.res, description: "Para caldos y preparaciones de bajo costo." },
  { id: "chiquizuela", name: "Chiquizuela", category: "res", price: 10000, unit: "kg", image: PLACEHOLDER.res, description: "Corte de la res para guisos y preparaciones de cocción lenta." },
  { id: "hueso", name: "Hueso", category: "res", price: 2000, unit: "kg", image: PLACEHOLDER.res, description: "Para caldos y fondos caseros." },
  { id: "grasa", name: "Grasa", category: "res", price: 800, unit: "kg", image: PLACEHOLDER.res, description: "Grasa vacuna para preparaciones y frituras." },
  { id: "grasa-derretida", name: "Grasa Derretida", category: "res", price: 2000, unit: "kg", image: PLACEHOLDER.res, description: "Grasa vacuna ya derretida, lista para usar." },
  { id: "picada", name: "Carne Picada", category: "res", price: 14000, unit: "kg", image: PLACEHOLDER.res, description: "Carne picada fresca del día, ideal para hamburguesas y salsas." },

  // ============================================================
  // CERDO
  // ============================================================
  { id: "bondiola", name: "Bondiola", category: "cerdo", price: 9000, unit: "kg", image: "https://media.base44.com/images/public/6a6c9e97175b563ac1a44832/423e28971_generated_a1d4c293.png", description: "Magro y sabroso, perfecto para sandwiches o parrilla." },
  { id: "pechito-cerdo", name: "Pechito de Cerdo", category: "cerdo", price: 7500, unit: "kg", image: "https://media.base44.com/images/public/6a6c9e97175b563ac1a44832/d2163cd55_generated_810a52d9.png", description: "Costillar de cerdo tierno, ideal al horno o parrilla." },
  { id: "costilla-cerdo", name: "Costilla de Cerdo", category: "cerdo", price: 8400, unit: "kg", image: "https://media.base44.com/images/public/6a6c9e97175b563ac1a44832/ddf39a562_generated_77c78e77.png", description: "Costilla trozada, jugosa y de cocción sencilla." },
  { id: "osobuco-cerdo", name: "Osobuco de Cerdo", category: "cerdo", price: 4000, unit: "kg", image: PLACEHOLDER.cerdo, description: "Corte con hueso, ideal para guisos." },
  { id: "patitas-de-cerdo", name: "Patitas de Cerdo", category: "cerdo", price: 500, unit: "kg", image: PLACEHOLDER.cerdo, description: "Para caldos y preparaciones tradicionales." },
  { id: "carre", name: "Carré", category: "cerdo", price: 7000, unit: "kg", image: PLACEHOLDER.cerdo, description: "Costillar de cerdo con lomo, ideal para el horno." },
  { id: "matambre-de-cerdo", name: "Matambre de Cerdo", category: "cerdo", price: 9500, unit: "kg", image: PLACEHOLDER.cerdo, description: "Corte plano y sabroso, para arrollados o parrilla." },
  { id: "pulpa-de-cerdo", name: "Pulpa de Cerdo", category: "cerdo", price: 7500, unit: "kg", image: PLACEHOLDER.cerdo, description: "Corte magro, ideal para milanesas y bifes." },
  { id: "cuerito", name: "Cuerito", category: "cerdo", price: 5500, unit: "kg", image: PLACEHOLDER.cerdo, description: "Cuerito de cerdo, para chicharrones y guisos." },
  { id: "hueso-de-cerdo", name: "Hueso de Cerdo", category: "cerdo", price: 3800, unit: "kg", image: PLACEHOLDER.cerdo, description: "Para caldos y preparaciones." },
  { id: "jamon-de-cerdo", name: "Jamón de Cerdo", category: "cerdo", price: 4800, unit: "kg", image: PLACEHOLDER.cerdo, description: "Corte fresco de la pierna trasera, versátil para el horno." },
  { id: "paleta-de-cerdo", name: "Paleta de Cerdo", category: "cerdo", price: 4200, unit: "kg", image: PLACEHOLDER.cerdo, description: "Corte del cuarto delantero, ideal para guisos y deshilachado." },
  { id: "grasa-de-cerdo", name: "Grasa de Cerdo", category: "cerdo", price: 3000, unit: "kg", image: PLACEHOLDER.cerdo, description: "Para preparaciones y frituras." },
  { id: "tocino", name: "Tocino", category: "cerdo", price: 4000, unit: "kg", image: PLACEHOLDER.cerdo, description: "Panceta de cerdo fresca, sin curar." },

  // ============================================================
  // POLLO
  // ============================================================
  { id: "pechuga", name: "Pechuga", category: "pollo", price: 5200, unit: "kg", image: "https://media.base44.com/images/public/6a6c9e97175b563ac1a44832/d4499a5c1_generated_4e865002.png", description: "Pechuga magra, fresca y sin hueso." },
  { id: "muslo-pata", name: "Muslo y Pata", category: "pollo", price: 4000, unit: "kg", image: "https://media.base44.com/images/public/6a6c9e97175b563ac1a44832/553ce35de_generated_e252254e.png", description: "Cuarto trasero jugoso, ideal para parrilla o horno." },
  { id: "alitas", name: "Alitas", category: "pollo", price: 2500, unit: "kg", image: "https://media.base44.com/images/public/6a6c9e97175b563ac1a44832/0e6c784d1_generated_a3c1770b.png", description: "Alitas frescas, perfectas para picadas y parrilla." },
  { id: "suprema", name: "Suprema", category: "pollo", price: 9000, unit: "kg", image: PLACEHOLDER.pollo, description: "Pechuga de pollo deshuesada y sin piel." },
  { id: "pata-y-muslo-oferta", name: "Pata y Muslo (Oferta)", category: "pollo", price: 3330, unit: "kg", image: PLACEHOLDER.pollo, description: "Cuarto trasero de pollo, precio especial por mayor cantidad." },
  { id: "pollo-entero", name: "Pollo Entero", category: "pollo", price: 4000, unit: "kg", image: PLACEHOLDER.pollo, description: "Pollo entero fresco, listo para el horno o la parrilla." },
  { id: "cajon-de-pollo", name: "Cajón de Pollo", category: "pollo", price: 56000, unit: "cajón", image: PLACEHOLDER.pollo, description: "Cajón de pollo para comercios y grandes consumos." },

  // ============================================================
  // ACHURAS
  // ============================================================
  { id: "chorizo", name: "Chorizo", category: "achuras", price: 6200, unit: "kg", image: "https://media.base44.com/images/public/6a6c9e97175b563ac1a44832/cd83310b4_generated_0bea8c21.png", description: "Chorizo fresco colorado para la parrilla." },
  { id: "morcilla", name: "Morcilla", category: "achuras", price: 7000, unit: "kg", image: "https://media.base44.com/images/public/6a6c9e97175b563ac1a44832/b84ec78d1_generated_52cd565b.png", description: "Morcilla dulce o picante, lista para el asado." },
  { id: "mollejas", name: "Mollejas", category: "achuras", price: 23000, unit: "kg", image: "https://media.base44.com/images/public/6a6c9e97175b563ac1a44832/59244db65_generated_be117ba1.png", description: "Mollejas bovinas tiernas, el manjar de la parrilla." },
  { id: "hamburguesas", name: "Hamburguesas", category: "achuras", price: 14000, unit: "kg", image: PLACEHOLDER.achuras, description: "Hamburguesas caseras, listas para la parrilla." },
  { id: "salchicha-parrillera", name: "Salchicha Parrillera", category: "achuras", price: 9000, unit: "kg", image: PLACEHOLDER.achuras, description: "Salchicha fresca ideal para la parrilla." },
  { id: "morcilla-vasca", name: "Morcilla Vasca", category: "achuras", price: 8000, unit: "kg", image: PLACEHOLDER.achuras, description: "Morcilla estilo vasco, con un toque especiado." },
  { id: "chorizo-cerdo-caja", name: "Chorizo de Cerdo (Caja)", category: "achuras", price: 26000, unit: "cajón", image: PLACEHOLDER.achuras, description: "Chorizo de cerdo por caja, para comercios." },
  { id: "longaniza", name: "Longaniza", category: "achuras", price: 26000, unit: "kg", image: PLACEHOLDER.achuras, description: "Longaniza fresca, curada con especias." },
  { id: "chorizo-cerdo", name: "Chorizo de Cerdo", category: "achuras", price: 8000, unit: "kg", image: PLACEHOLDER.achuras, description: "Chorizo fresco de cerdo." },
  { id: "chorizo-mezcla", name: "Chorizo Mezcla", category: "achuras", price: 8000, unit: "kg", image: PLACEHOLDER.achuras, description: "Chorizo mixto de carne y cerdo." },
  { id: "higado", name: "Hígado", category: "achuras", price: 3400, unit: "kg", image: PLACEHOLDER.achuras, description: "Hígado fresco, rico en hierro." },
  { id: "corazon", name: "Corazón", category: "achuras", price: 6000, unit: "kg", image: PLACEHOLDER.achuras, description: "Corazón vacuno, ideal para brochetas." },
  { id: "rabo", name: "Rabo", category: "achuras", price: 8000, unit: "kg", image: PLACEHOLDER.achuras, description: "Rabo de res, ideal para guisos y caldos." },
  { id: "quijada", name: "Quijada", category: "achuras", price: 5000, unit: "kg", image: PLACEHOLDER.achuras, description: "Corte de la cabeza, para preparaciones tradicionales." },
  { id: "lengua", name: "Lengua", category: "achuras", price: 9500, unit: "kg", image: PLACEHOLDER.achuras, description: "Lengua vacuna, tierna y sabrosa." },
  { id: "rinon", name: "Riñón", category: "achuras", price: 4700, unit: "kg", image: PLACEHOLDER.achuras, description: "Riñón vacuno, clásico de la parrilla." },
  { id: "bofe", name: "Bofe", category: "achuras", price: 1500, unit: "kg", image: PLACEHOLDER.achuras, description: "Pulmón vacuno, económico y tradicional." },
  { id: "chinchulin", name: "Chinchulín", category: "achuras", price: 5000, unit: "kg", image: PLACEHOLDER.achuras, description: "Intestino delgado, infaltable en el asado." },
  { id: "tripa-gorda", name: "Tripa Gorda", category: "achuras", price: 4200, unit: "kg", image: PLACEHOLDER.achuras, description: "Intestino grueso, para la parrilla." },
  { id: "sesos", name: "Sesos", category: "achuras", price: 1200, unit: "kg", image: PLACEHOLDER.achuras, description: "Sesos vacunos, tradicionales y económicos." },
  { id: "mondongo", name: "Mondongo", category: "achuras", price: 8000, unit: "kg", image: PLACEHOLDER.achuras, description: "Panza vacuna, ideal para guisos." },
  { id: "ganote", name: "Gañote", category: "achuras", price: 3700, unit: "kg", image: PLACEHOLDER.achuras, description: "Tráquea vacuna, para la parrilla." },

  // ============================================================
  // EXTRAS
  // ============================================================
  { id: "lena-tipo-1", name: "Leña Tipo 1", category: "extras", price: 4500, unit: "atado", image: PLACEHOLDER.extras, description: "Leña seleccionada para el fuego." },
  { id: "lena-tipo-2", name: "Leña Tipo 2", category: "extras", price: 4000, unit: "atado", image: PLACEHOLDER.extras, description: "Leña seleccionada para el fuego." },
  { id: "cajon-de-huevos-1", name: "Cajón de Huevos Tipo 1", category: "extras", price: 52000, unit: "cajón", image: PLACEHOLDER.extras, description: "Cajón de huevos frescos, para comercios." },
  { id: "cajon-de-huevos-2", name: "Cajón de Huevos Tipo 2", category: "extras", price: 47000, unit: "cajón", image: PLACEHOLDER.extras, description: "Cajón de huevos frescos, para comercios." },
  { id: "docena-de-huevos-1", name: "Docena de Huevos Tipo 1", category: "extras", price: 2000, unit: "docena", image: PLACEHOLDER.extras, description: "Docena de huevos frescos." },
  { id: "docena-de-huevos-2", name: "Docena de Huevos Tipo 2", category: "extras", price: 1700, unit: "docena", image: PLACEHOLDER.extras, description: "Docena de huevos frescos." },
  { id: "media-docena-huevos-1", name: "Media Docena de Huevos Tipo 1", category: "extras", price: 1300, unit: "½ docena", image: PLACEHOLDER.extras, description: "Media docena de huevos frescos." },
  { id: "media-docena-huevos-2", name: "Media Docena de Huevos Tipo 2", category: "extras", price: 1000, unit: "½ docena", image: PLACEHOLDER.extras, description: "Media docena de huevos frescos." },
  { id: "carbon-grueso", name: "Carbón Grueso", category: "extras", price: 6200, unit: "bolsa", image: PLACEHOLDER.extras, description: "Carbón vacuno grueso, ideal para brasas duraderas." },
  { id: "carbon-mediano", name: "Carbón Mediano", category: "extras", price: 5500, unit: "bolsa", image: PLACEHOLDER.extras, description: "Carbón vacuno mediano, encendido parejo." },
  { id: "espinillo", name: "Espinillo", category: "extras", price: 6000, unit: "bolsa", image: PLACEHOLDER.extras, description: "Leña de espinillo, de larga duración." },
  { id: "quebracho", name: "Quebracho", category: "extras", price: 6000, unit: "bolsa", image: PLACEHOLDER.extras, description: "Leña de quebracho, ideal para brasas duraderas." },
  { id: "iniciadores", name: "Iniciadores", category: "extras", price: 3500, unit: "paquete", image: PLACEHOLDER.extras, description: "Iniciadores de fuego para encender rápido la parrilla." },
];

export const FAQS = [
  {
    q: "¿Cómo hago un pedido?",
    a: "Elegí el corte que querés en el catálogo, tocá el botón «Pedir ahora» y te redirige a WhatsApp con el mensaje ya armado. También podés escribirnos directo por el botón flotante de WhatsApp.",
  },
  {
    q: "¿Los precios están actualizados?",
    a: "Sí. En Argentina los precios varían a diario, por eso los actualizamos cada jornada. El precio que ves en la web es el del día. Te conviene confirmar en el momento del pedido.",
  },
  {
    q: "¿Hacen envíos a domicilio?",
    a: "Sí, realizamos envíos a domicilio en Buenos Aires y alrededores. La zona y el costo de envío se coordinan por WhatsApp al momento del pedido.",
  },
  {
    q: "¿Qué métodos de pago aceptan?",
    a: "Aceptamos efectivo, transferencia bancaria y Mercado Pago. El detalle se coordina con cada pedido por WhatsApp.",
  },
  {
    q: "¿La carne viene fresca o congelada?",
    a: "Trabajamos con carne fresca del día, refrigerada en cadena de frío. Para conservación podés congelarla en tu casa siguiendo nuestras recomendaciones.",
  },
  {
    q: "¿Cuáles son los mejores cortes para asado?",
    a: "Para un asado clásico recomendamos tira de asado, vacío, entraña y bife de chorizo. Las achuras (chorizo, morcilla y mollejas) completan la parrilla.",
  },
];

// ---- Helpers ----
export function formatPrice(value) {
  return `$${value.toLocaleString("es-AR")}`;
}

export function buildWhatsAppLink(product) {
  const message = product
    ? `Hola CarnesFB! Quiero hacer un pedido de ${product.name} (${formatPrice(product.price)} / ${product.unit}). ¿Me confirmás disponibilidad?`
    : `Hola CarnesFB! Quiero hacer un pedido.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const GENERAL_WHATSAPP_LINK = buildWhatsAppLink(null);
