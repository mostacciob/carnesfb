// ============================================================
//  CARNESFB — DATOS DEL NEGOCIO Y CATÁLOGO
// ============================================================
//  ⚠️  EL CATÁLOGO LO MANEJA LA PLANILLA DE GOOGLE, NO ESTE ARCHIVO.
//
//  Para agregar, renombrar, reordenar o borrar un producto, o para
//  cambiar un precio: editá la planilla. La web se actualiza sola,
//  sin tocar código ni volver a publicar.
//      https://docs.google.com/spreadsheets/d/1HfL8TI_CUOZAHxj3W-RFIFpF0LtfiOfMwYcIzRf2Ccc
//
//  Cada solapa de la planilla es una categoría (ver CATEGORIES abajo).
//  Columna A = nombre del producto · Columna B = precio.
//  El orden de las filas es el orden en que se muestran en la web.
//
//  Para agregar una CATEGORÍA nueva (una solapa nueva) sí hay que
//  tocar código: sumá una línea en CATEGORIES con el nombre exacto
//  de la solapa.
// ============================================================

export const WHATSAPP_NUMBER = "5491134621780";

export const BUSINESS = {
  name: "CarnesFB",
  phone: "+54 11 3462-1780",
  address: "Manuela Gómez 277, Gral. Rodríguez, Pcia. de Buenos Aires",
  url: "https://carnesfb.com.ar",
  hours: "Lun a Sáb de 08 a 20h\nDom de 08 a 14h",
  description:
    "Distribuidora de carnes premium con los mejores precios. Pedidos directos por WhatsApp con precios actualizados al día. Calidad garantizada desde el campo a tu parrilla.",
};

// Cada entrada corresponde a una solapa de la planilla.
// "sheet" tiene que coincidir EXACTAMENTE con el nombre de la solapa.
export const CATEGORIES = [
  { id: "res", sheet: "res", label: "Res", description: "Cortes de carne bovina premium" },
  { id: "cerdo", sheet: "cerdo", label: "Cerdo", description: "Cortes de cerdo seleccionados" },
  { id: "pollo", sheet: "pollo", label: "Pollo", description: "Pollo fresco y troceado" },
  { id: "achuras", sheet: "achuras", label: "Achuras", description: "Embutidos y achuras para la parrilla" },
  { id: "congelados", sheet: "congelados y mas", label: "Congelados", description: "Congelados, rebozados y quesos" },
  { id: "extras", sheet: "extras", label: "Extras", description: "Carbón, huevos, picada y más" },
];

export const HERO_IMAGE = "/hero.webp";

// Imagen genérica por categoría, para los productos que todavía no tienen foto propia.
export const PLACEHOLDER = {
  res: "/placeholders/res.svg",
  cerdo: "/placeholders/cerdo.svg",
  pollo: "/placeholders/pollo.svg",
  achuras: "/placeholders/achuras.svg",
  congelados: "/placeholders/congelados.svg",
  extras: "/placeholders/extras.svg",
};

// ============================================================
//  METADATOS LOCALES (opcionales)
// ============================================================
//  La planilla define QUÉ productos existen y cuánto salen.
//  Acá guardamos los extras que la planilla no tiene: foto propia,
//  descripción y unidad de venta.
//
//  Se enganchan por nombre: el nombre de la planilla se normaliza
//  (sin acentos, en minúscula, con guiones) y se busca acá.
//  Ej: "Bife de Chorizo" → "bife-de-chorizo"
//
//  Si un producto no figura acá, igual se muestra: con el nombre de
//  la planilla y la foto genérica de su categoría.
// ============================================================
export const PRODUCT_META = {
  "alitas": { name: "Alitas", unit: "kg", image: "/products/alitas.webp", description: "Alitas frescas, perfectas para picadas y parrilla." },
  "asado": { name: "Asado", unit: "kg", image: "/products/asado.webp", description: "Costillar de res, imprescindible en cualquier parrillada." },
  "bife-de-chorizo": { name: "Bife de Chorizo", unit: "kg", image: "/products/bife-de-chorizo.webp", description: "Corte magro, jugoso y de sabor intenso. El clásico de la parrilla." },
  "bofe": { name: "Bofe", unit: "kg", description: "Pulmón vacuno, económico y tradicional." },
  "bondiola": { name: "Bondiola", unit: "kg", image: "/products/bondiola.webp", description: "Magro y sabroso, perfecto para sandwiches o parrilla." },
  "cajon-de-huevos-1": { name: "Cajón de Huevos Tipo 1", unit: "cajón", description: "Cajón de huevos frescos, para comercios." },
  "cajon-de-huevos-2": { name: "Cajón de Huevos Tipo 2", unit: "cajón", description: "Cajón de huevos frescos, para comercios." },
  "cajon-de-pollo": { name: "Cajón de Pollo", unit: "cajón", image: "/products/cajon-de-pollo.webp", description: "Cajón de pollo para comercios y grandes consumos." },
  "carbon-grande": { name: "Carbón Grande", unit: "bolsa", image: "/products/carbon-grueso.webp" },
  "carbon-grueso": { name: "Carbón Grueso", unit: "bolsa", image: "/products/carbon-grueso.webp", description: "Carbón vacuno grueso, ideal para brasas duraderas." },
  "carbon-mediano": { name: "Carbón Mediano", unit: "bolsa", image: "/products/carbon-mediano.webp" },
  "carre": { name: "Carré", unit: "kg", image: "/products/carre.webp", description: "Costillar de cerdo con lomo, ideal para el horno." },
  "cartilago": { name: "Cartílago", unit: "kg", description: "Para caldos y preparaciones de bajo costo." },
  "chinchulin": { name: "Chinchulín", unit: "kg", description: "Intestino delgado, infaltable en el asado." },
  "chiquizuela": { name: "Chiquizuela", unit: "kg", description: "Corte de la res para guisos y preparaciones de cocción lenta." },
  "chorizo": { name: "Chorizo", unit: "kg", image: "/products/chorizo.webp", description: "Chorizo fresco colorado para la parrilla." },
  "chorizo-cerdo": { name: "Chorizo de Cerdo", unit: "kg", description: "Chorizo fresco de cerdo." },
  "chorizo-cerdo-caja": { name: "Chorizo de Cerdo (Caja)", unit: "cajón", image: "/products/chorizo-cerdo-caja.webp", description: "Chorizo de cerdo por caja, para comercios." },
  "chorizo-mezcla": { name: "Chorizo Mezcla", unit: "kg", description: "Chorizo mixto de carne y cerdo." },
  "colita-de-cuadril": { name: "Colita de Cuadril", unit: "kg", image: "/products/colita-de-cuadril.webp", description: "La joya del cuadril: tierna, jugosa y con una fina capa de grasa." },
  "corazon": { name: "Corazón", unit: "kg", description: "Corazón vacuno, ideal para brochetas." },
  "costilla-cerdo": { name: "Costilla de Cerdo", unit: "kg", image: "/products/costilla-cerdo.webp", description: "Costilla trozada, jugosa y de cocción sencilla." },
  "cuadrada": { name: "Cuadrada", unit: "kg", image: "/products/cuadrada.webp", description: "Corte magro de la pierna, ideal para milanesas o al horno." },
  "cuadril": { name: "Cuadril", unit: "kg", image: "/products/cuadril.webp", description: "Corte jugoso y tierno, ideal para la parrilla o el horno." },
  "cuerito": { name: "Cuerito", unit: "kg", description: "Cuerito de cerdo, para chicharrones y guisos." },
  "docena-de-huevos-1": { name: "Docena de Huevos Tipo 1", unit: "docena", image: "/products/docena-de-huevos-1.webp", description: "Docena de huevos frescos." },
  "docena-de-huevos-2": { name: "Docena de Huevos Tipo 2", unit: "docena", image: "/products/docena-de-huevos-2.webp", description: "Docena de huevos frescos." },
  "docena-n1": { name: "Docena de Huevos N°1", unit: "docena", image: "/products/docena-de-huevos-1.webp", description: "Docena de huevos frescos." },
  "docena-n2": { name: "Docena de Huevos N°2", unit: "docena", image: "/products/docena-de-huevos-2.webp", description: "Docena de huevos frescos." },
  "entrana": { name: "Entraña", unit: "kg", image: "/products/entrana.webp", description: "Fina, de cocción rápida y sabor inconfundible." },
  "espinazo": { name: "Espinazo", unit: "kg", description: "Hueso con carne, ideal para caldos y pucheros." },
  "espinillo": { name: "Espinillo", unit: "bolsa", description: "Leña de espinillo, de larga duración." },
  "falda": { name: "Falda", unit: "kg", description: "Corte económico y sabroso, ideal para guisos y pucheros." },
  "ganote": { name: "Gañote", unit: "kg", description: "Tráquea vacuna, para la parrilla." },
  "grasa": { name: "Grasa", unit: "kg", description: "Grasa vacuna para preparaciones y frituras." },
  "grasa-de-cerdo": { name: "Grasa de Cerdo", unit: "kg", description: "Para preparaciones y frituras." },
  "grasa-derretida": { name: "Grasa Derretida", unit: "kg", description: "Grasa vacuna ya derretida, lista para usar." },
  "hamburguesas": { name: "Hamburguesas", unit: "kg", image: "/products/hamburguesas.webp", description: "Hamburguesas caseras, listas para la parrilla." },
  "higado": { name: "Hígado", unit: "kg", description: "Hígado fresco, rico en hierro." },
  "hueso": { name: "Hueso", unit: "kg", description: "Para caldos y fondos caseros." },
  "hueso-de-cerdo": { name: "Hueso de Cerdo", unit: "kg", description: "Para caldos y preparaciones." },
  "iniciadores": { name: "Iniciadores", unit: "paquete", image: "/products/iniciadores.webp", description: "Iniciadores de fuego para encender rápido la parrilla." },
  "jamon-de-cerdo": { name: "Jamón de Cerdo", unit: "kg", description: "Corte fresco de la pierna trasera, versátil para el horno." },
  "lena-tipo-1": { name: "Leña Tipo 1", unit: "atado", image: "/products/lena-tipo-1.webp", description: "Leña seleccionada para el fuego." },
  "lena-tipo-2": { name: "Leña Tipo 2", unit: "atado", image: "/products/lena-tipo-2.webp", description: "Leña seleccionada para el fuego." },
  "lengua": { name: "Lengua", unit: "kg", description: "Lengua vacuna, tierna y sabrosa." },
  "lomo": { name: "Lomo", unit: "kg", image: "/products/lomo.webp", description: "El corte más tierno de la res, ideal para la parrilla." },
  "longaniza": { name: "Longaniza", unit: "kg", image: "/products/longaniza.webp", description: "Longaniza fresca, curada con especias." },
  "maple-n1": { name: "Maple de Huevos N°1", unit: "cajón", description: "Cajón de huevos frescos, para comercios." },
  "maple-n2": { name: "Maple de Huevos N°2", unit: "cajón", description: "Cajón de huevos frescos, para comercios." },
  "matambre": { name: "Matambre", unit: "kg", description: "Corte plano y versátil, para arrollados o a la parrilla." },
  "matambre-de-cerdo": { name: "Matambre de Cerdo", unit: "kg", image: "/products/matambre-de-cerdo.webp", description: "Corte plano y sabroso, para arrollados o parrilla." },
  "media-docena-huevos-1": { name: "Media Docena de Huevos Tipo 1", unit: "½ docena", description: "Media docena de huevos frescos." },
  "media-docena-huevos-2": { name: "Media Docena de Huevos Tipo 2", unit: "½ docena", description: "Media docena de huevos frescos." },
  "media-docena-n1": { name: "Media Docena N°1", unit: "½ docena", description: "Media docena de huevos frescos." },
  "media-docena-n2": { name: "Media Docena N°2", unit: "½ docena", description: "Media docena de huevos frescos." },
  "miel": { name: "Miel Namuncurá", unit: "frasco 500g", image: "/products/miel-namuncura.webp", description: "De la colmena a tu mesa. Miel cruda, sin agregados, calidad de exportación." },
  "miel-namuncura": { name: "Miel Namuncurá", unit: "frasco 500g", image: "/products/miel-namuncura.webp", description: "De la colmena a tu mesa. Miel cruda, sin agregados, calidad de exportación." },
  "mollejas": { name: "Mollejas", unit: "kg", image: "/products/mollejas.webp", description: "Mollejas bovinas tiernas, el manjar de la parrilla." },
  "mondongo": { name: "Mondongo", unit: "kg", description: "Panza vacuna, ideal para guisos." },
  "morcilla": { name: "Morcilla", unit: "kg", image: "/products/morcilla.webp", description: "Morcilla dulce o picante, lista para el asado." },
  "morcilla-vasca": { name: "Morcilla Vasca", unit: "kg", image: "/products/morcilla-vasca.webp", description: "Morcilla estilo vasco, con un toque especiado." },
  "muslo-pata": { name: "Pata y Muslo", unit: "kg", image: "/products/muslo-pata.webp", description: "Cuarto trasero jugoso, ideal para parrilla o horno." },
  "ojo-de-bife": { name: "Ojo de Bife", unit: "kg", image: "/products/ojo-de-bife.webp", description: "Ribeye con veteado de grasa que aporta terneza y sabor." },
  "osobuco": { name: "Osobuco", unit: "kg", description: "Corte con hueso y médula, perfecto para guisos y risottos." },
  "osobuco-cerdo": { name: "Osobuco de Cerdo", unit: "kg", image: "/products/osobuco-cerdo.webp", description: "Corte con hueso, ideal para guisos." },
  "paleta": { name: "Paleta", unit: "kg", description: "Corte del cuarto delantero, sabroso para guisos y estofados." },
  "paleta-de-cerdo": { name: "Paleta de Cerdo", unit: "kg", description: "Corte del cuarto delantero, ideal para guisos y deshilachado." },
  "palomita": { name: "Palomita", unit: "kg", description: "Corte pequeño y magro, ideal para milanesas." },
  "pata-muslo": { name: "Pata y Muslo", unit: "kg", image: "/products/muslo-pata.webp", description: "Cuarto trasero jugoso, ideal para parrilla o horno." },
  "patitas-de-cerdo": { name: "Patitas de Cerdo", unit: "kg", image: "/products/patitas-de-cerdo.webp", description: "Para caldos y preparaciones tradicionales." },
  "peceto": { name: "Peceto", unit: "kg", image: "/products/peceto.webp", description: "Corte alargado y magro, clásico para vitel toné o al horno." },
  "pechito-cerdo": { name: "Pechito de Cerdo", unit: "kg", image: "/products/pechito-cerdo.webp", description: "Costillar de cerdo tierno, ideal al horno o parrilla." },
  "pechuga": { name: "Pechuga", unit: "kg", image: "/products/pechuga.webp", description: "Pechuga magra, fresca y sin hueso." },
  "picada": { name: "Carne Picada", unit: "kg", description: "Carne picada fresca del día, ideal para hamburguesas y salsas." },
  "pollo-entero": { name: "Pollo Entero", unit: "kg", image: "/products/pollo-entero.webp", description: "Pollo entero fresco, listo para el horno o la parrilla." },
  "pulpa-de-cerdo": { name: "Pulpa de Cerdo", unit: "kg", image: "/products/pulpa-de-cerdo.webp", description: "Corte magro, ideal para milanesas y bifes." },
  "quebracho": { name: "Quebracho", unit: "bolsa", description: "Leña de quebracho, ideal para brasas duraderas." },
  "quijada": { name: "Quijada", unit: "kg", description: "Corte de la cabeza, para preparaciones tradicionales." },
  "rabo": { name: "Rabo", unit: "kg", description: "Rabo de res, ideal para guisos y caldos." },
  "rinon": { name: "Riñón", unit: "kg", description: "Riñón vacuno, clásico de la parrilla." },
  "roast-beef": { name: "Roast Beef", unit: "kg", description: "Corte magro y compacto, perfecto para el horno." },
  "salchicha-parrillera": { name: "Salchicha Parrillera", unit: "kg", image: "/products/salchicha-parrillera.webp", description: "Salchicha fresca ideal para la parrilla." },
  "sesos": { name: "Sesos", unit: "kg", description: "Sesos vacunos, tradicionales y económicos." },
  "tapa-de-nalga": { name: "Tapa de Nalga", unit: "kg", description: "Corte magro de la nalga, ideal para milanesas y bifes." },
  "tira-de-asado": { name: "Tira de Asado", unit: "kg", image: "/products/tira-de-asado.webp", description: "Costillar cortado en tiras, el clásico infaltable del asado." },
  "tocino": { name: "Tocino", unit: "kg", description: "Panceta de cerdo fresca, sin curar." },
  "tortuguita": { name: "Tortuguita", unit: "kg", description: "Corte de la pierna, tierno y de sabor suave." },
  "tripa-gorda": { name: "Tripa Gorda", unit: "kg", description: "Intestino grueso, para la parrilla." },
  "vacio": { name: "Vacío", unit: "kg", image: "/products/vacio.webp", description: "Corte sin hueso, ideal para asar lento a la parrilla." },
};

// ============================================================
//  RESPALDO DEL CATÁLOGO
// ============================================================
//  Copia de la planilla al 2026-10-01. Solo se usa si Google no
//  responde, para que la web nunca quede sin catálogo. No hace falta
//  mantenerlo a mano.
// ============================================================
export const CATALOG_FALLBACK = [
  { category: "res", slug: "bife-de-chorizo", name: "bife-de-chorizo", price: 25000 },
  { category: "res", slug: "ojo-de-bife", name: "ojo-de-bife", price: 25000 },
  { category: "res", slug: "vacio", name: "vacio", price: 21000 },
  { category: "res", slug: "entrana", name: "entrana", price: 26000 },
  { category: "res", slug: "cuadrada", name: "cuadrada", price: 17500 },
  { category: "res", slug: "bola-de-lomo", name: "Bola de lomo", price: 17500 },
  { category: "res", slug: "peceto", name: "peceto", price: 21000 },
  { category: "res", slug: "cuadril", name: "cuadril", price: 18000 },
  { category: "res", slug: "picana", name: "picaña", price: 22000 },
  { category: "res", slug: "colita-de-cuadril", name: "colita-de-cuadril", price: 22000 },
  { category: "res", slug: "ceja-de-bife", name: "ceja de bife", price: 23000 },
  { category: "res", slug: "tortuguita", name: "tortuguita", price: 17000 },
  { category: "res", slug: "palomita", name: "palomita", price: 17000 },
  { category: "res", slug: "roast-beef", name: "roast-beef", price: 15500 },
  { category: "res", slug: "paleta", name: "paleta", price: 16500 },
  { category: "res", slug: "lomo", name: "lomo", price: 25000 },
  { category: "res", slug: "tapa-de-asado", name: "tapa-de-asado", price: 17500 },
  { category: "res", slug: "tapa-de-nalga", name: "tapa-de-nalga", price: 17500 },
  { category: "res", slug: "asado", name: "asado", price: 17000 },
  { category: "res", slug: "americano", name: "americano", price: 17000 },
  { category: "res", slug: "falda", name: "falda", price: 15000 },
  { category: "res", slug: "matambre", name: "matambre", price: 19000 },
  { category: "res", slug: "marucha", name: "marucha", price: 17000 },
  { category: "res", slug: "osobuco", name: "osobuco", price: 13000 },
  { category: "res", slug: "espinazo", name: "espinazo", price: 10000 },
  { category: "res", slug: "cartilago", name: "cartilago", price: 3000 },
  { category: "res", slug: "chiquizuela", name: "chiquizuela", price: 10000 },
  { category: "res", slug: "hueso", name: "hueso", price: 2000 },
  { category: "res", slug: "grasa", name: "grasa", price: 800 },
  { category: "res", slug: "grasa-derretida", name: "grasa-derretida", price: 2000 },
  { category: "res", slug: "picada", name: "picada", price: 14000 },
  { category: "res", slug: "hamburguesas", name: "hamburguesas", price: 14000 },
  { category: "res", slug: "albondigas", name: "albondigas", price: 14000 },
  { category: "res", slug: "mila-carne", name: "mila carne", price: 10000 },
  { category: "cerdo", slug: "bondiola", name: "bondiola", price: 9500 },
  { category: "cerdo", slug: "pechito-cerdo", name: "pechito-cerdo", price: 8000 },
  { category: "cerdo", slug: "costilla-cerdo", name: "costilla-cerdo", price: 8400 },
  { category: "cerdo", slug: "osobuco-cerdo", name: "osobuco-cerdo", price: 4000 },
  { category: "cerdo", slug: "patitas-de-cerdo", name: "patitas-de-cerdo", price: 1000 },
  { category: "cerdo", slug: "carre", name: "carre", price: 7500 },
  { category: "cerdo", slug: "matambre-de-cerdo", name: "matambre-de-cerdo", price: 13000 },
  { category: "cerdo", slug: "churrasquito", name: "churrasquito", price: 13000 },
  { category: "cerdo", slug: "ribs", name: "ribs", price: 12000 },
  { category: "cerdo", slug: "pulpa-de-cerdo", name: "pulpa-de-cerdo", price: 8000 },
  { category: "cerdo", slug: "cuerito", name: "cuerito", price: 1000 },
  { category: "cerdo", slug: "hueso-de-cerdo", name: "hueso-de-cerdo", price: 2500 },
  { category: "cerdo", slug: "jamon-de-cerdo", name: "jamon-de-cerdo", price: 5000 },
  { category: "cerdo", slug: "paleta-de-cerdo", name: "paleta-de-cerdo", price: 4500 },
  { category: "cerdo", slug: "grasa-de-cerdo", name: "grasa-de-cerdo", price: 3000 },
  { category: "cerdo", slug: "tocino", name: "tocino", price: 4000 },
  { category: "cerdo", slug: "mila-cerdo", name: "mila cerdo", price: 6000 },
  { category: "pollo", slug: "pechuga", name: "pechuga", price: 10000 },
  { category: "pollo", slug: "pata-muslo", name: "pata-muslo", price: 4200 },
  { category: "pollo", slug: "alitas", name: "alitas", price: 2500 },
  { category: "pollo", slug: "pollo-entero", name: "pollo-entero", price: 4000 },
  { category: "pollo", slug: "cajon-de-pollo", name: "cajon-de-pollo", price: 67000 },
  { category: "pollo", slug: "paty-de-pollo", name: "paty de pollo", price: 13000 },
  { category: "pollo", slug: "mila-pollo", name: "mila pollo", price: 8000 },
  { category: "achuras", slug: "morcilla", name: "morcilla", price: 7500 },
  { category: "achuras", slug: "mollejas", name: "mollejas", price: 25000 },
  { category: "achuras", slug: "hamburguesas", name: "hamburguesas", price: 14000 },
  { category: "achuras", slug: "salchicha-parrillera", name: "salchicha-parrillera", price: 9500 },
  { category: "achuras", slug: "morcilla-vasca", name: "morcilla-vasca", price: 9000 },
  { category: "achuras", slug: "chorizo-cerdo-caja", name: "chorizo-cerdo-caja", price: 26000 },
  { category: "achuras", slug: "longaniza", name: "longaniza", price: 26000 },
  { category: "achuras", slug: "chorizo-cerdo", name: "chorizo-cerdo", price: 8500 },
  { category: "achuras", slug: "chorizo-mezcla", name: "chorizo-mezcla", price: 8500 },
  { category: "achuras", slug: "higado", name: "higado", price: 3800 },
  { category: "achuras", slug: "corazon", name: "corazon", price: 6000 },
  { category: "achuras", slug: "rabo", name: "rabo", price: 8000 },
  { category: "achuras", slug: "quijada", name: "quijada", price: 5000 },
  { category: "achuras", slug: "lengua", name: "lengua", price: 10000 },
  { category: "achuras", slug: "rinon", name: "rinon", price: 5500 },
  { category: "achuras", slug: "bofe", name: "bofe", price: 2000 },
  { category: "achuras", slug: "chinchulin", name: "chinchulin", price: 6000 },
  { category: "achuras", slug: "tripa-gorda", name: "tripa-gorda", price: 4800 },
  { category: "achuras", slug: "sesos", name: "sesos", price: 1500 },
  { category: "achuras", slug: "mondongo", name: "mondongo", price: 8000 },
  { category: "achuras", slug: "ganote", name: "ganote", price: 3700 },
  { category: "achuras", slug: "centro", name: "centro", price: 8500 },
  { category: "achuras", slug: "rueda", name: "rueda", price: 4800 },
  { category: "achuras", slug: "morcilla-bombon", name: "morcilla bombon", price: 9000 },
  { category: "achuras", slug: "chori-bombon", name: "chori bombon", price: 9600 },
  { category: "achuras", slug: "viena", name: "viena", price: 13000 },
  { category: "congelados", slug: "papas-tradicional", name: "PAPAS TRADICIONAL", price: 9200 },
  { category: "congelados", slug: "papas-smile", name: "PAPAS SMILE", price: 10500 },
  { category: "congelados", slug: "papas-noisette", name: "PAPAS NOISETTE", price: 10500 },
  { category: "congelados", slug: "bocadito-muzzarella", name: "BOCADITO MUZZARELLA", price: 14000 },
  { category: "congelados", slug: "patitas-de-pollo", name: "PATITAS DE POLLO", price: 9800 },
  { category: "congelados", slug: "patita-de-pollo-con-jyq", name: "PATITA DE POLLO CON JYQ", price: 10300 },
  { category: "congelados", slug: "medallon-de-merluza", name: "MEDALLON DE MERLUZA", price: 7200 },
  { category: "congelados", slug: "medallon-de-pollo", name: "MEDALLON DE POLLO", price: 9800 },
  { category: "congelados", slug: "medallon-de-pollo-con-jyq", name: "MEDALLON DE POLLO CON JYQ", price: 10300 },
  { category: "congelados", slug: "nuggets", name: "NUGGETS", price: 13500 },
  { category: "congelados", slug: "crunchy-chicken", name: "CRUNCHY CHICKEN", price: 4900 },
  { category: "congelados", slug: "suprema-rebozada", name: "SUPREMA REBOZADA", price: 11800 },
  { category: "congelados", slug: "alitas-congeladas", name: "ALITAS CONGELADAS", price: 6500 },
  { category: "congelados", slug: "tiritas-de-pollo", name: "TIRITAS DE POLLO", price: 5100 },
  { category: "congelados", slug: "nuggets-crocantes-de-pollo", name: "NUGGETS CROCANTES DE POLLO", price: 13500 },
  { category: "congelados", slug: "chicken-fingers", name: "CHICKEN FINGERS", price: 11200 },
  { category: "congelados", slug: "canon-de-muzzarella", name: "CAÑON DE MUZZARELLA", price: 16500 },
  { category: "congelados", slug: "brochetas-de-pollo", name: "BROCHETAS DE POLLO", price: 15000 },
  { category: "congelados", slug: "brochetas-de-cerdo", name: "BROCHETAS DE CERDO", price: 15000 },
  { category: "congelados", slug: "brochetas-de-carne", name: "BROCHETAS DE CARNE", price: 20000 },
  { category: "congelados", slug: "queso-horma", name: "QUESO HORMA", price: 12000 },
  { category: "congelados", slug: "provoleta", name: "PROVOLETA", price: 8000 },
  { category: "congelados", slug: "queso-sardo", name: "QUESO SARDO", price: 18000 },
  { category: "congelados", slug: "queso-cavalo", name: "QUESO CAVALO", price: 35000 },
  { category: "congelados", slug: "quesillo-norteno", name: "QUESILLO NORTEÑO", price: 16000 },
  { category: "congelados", slug: "quesillo-rebozado", name: "QUESILLO REBOZADO", price: 30000 },
  { category: "congelados", slug: "hamburquesa", name: "HAMBURQUESA", price: 1800 },
  { category: "congelados", slug: "bunuelos", name: "BUÑUELOS", price: 7800 },
  { category: "extras", slug: "carbon-mediano", name: "carbon mediano", price: 6000 },
  { category: "extras", slug: "carbon-grande", name: "carbon grande", price: 7500 },
  { category: "extras", slug: "carbon-premiun", name: "carbon premiun", price: 15000 },
  { category: "extras", slug: "maple-n1", name: "maple N1", price: 7200 },
  { category: "extras", slug: "maple-n2", name: "maple N2", price: 6800 },
  { category: "extras", slug: "docena-n1", name: "docena N1", price: 3500 },
  { category: "extras", slug: "docena-n2", name: "docena N2", price: 3100 },
  { category: "extras", slug: "media-docena-n1", name: "media docena N1", price: 2300 },
  { category: "extras", slug: "media-docena-n2", name: "media docena N2", price: 1800 },
  { category: "extras", slug: "miel", name: "miel", price: 8000 },
  { category: "extras", slug: "sal-gourmet", name: "sal gourmet", price: 4500 },
  { category: "extras", slug: "m-japon-250g", name: "M. JAPON 250G", price: 2600 },
  { category: "extras", slug: "m-japon-500g", name: "M. JAPON 500G", price: 3400 },
  { category: "extras", slug: "m-salado-250g", name: "M. SALADO 250G", price: 2600 },
  { category: "extras", slug: "m-salado-500g", name: "M. SALADO 500G", price: 3400 },
  { category: "extras", slug: "palito-salado", name: "PALITO SALADO", price: 2700 },
  { category: "extras", slug: "maiz-frito", name: "MAIZ FRITO", price: 3200 },
  { category: "extras", slug: "mix-salado", name: "MIX SALADO", price: 2600 },
  { category: "extras", slug: "copet-250g", name: "COPET 250G", price: 3200 },
  { category: "extras", slug: "copet-100g", name: "COPET 100G", price: 2300 },
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
    a: "Sí, realizamos envíos a domicilio en General Rodríguez y alrededores. La zona y el costo de envío se coordinan por WhatsApp al momento del pedido.",
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
  if (!product) {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hola CarnesFB! Quiero hacer un pedido.")}`;
  }
  const precio = product.unit
    ? `${formatPrice(product.price)} / ${product.unit}`
    : formatPrice(product.price);
  const message = `Hola CarnesFB! Quiero hacer un pedido de ${product.name} (${precio}). ¿Me confirmás disponibilidad?`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const GENERAL_WHATSAPP_LINK = buildWhatsAppLink(null);
