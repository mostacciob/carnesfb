// ============================================================
//  CATÁLOGO EN VIVO DESDE GOOGLE SHEETS
// ============================================================
//  La planilla es la fuente de verdad: define qué productos
//  existen, cómo se llaman, en qué orden aparecen y cuánto salen.
//  Este módulo la lee desde el navegador, sin backend.
//
//  Requiere que la planilla esté compartida como "Cualquier persona
//  con el enlace puede ver" (Compartir > Acceso general > Lector).
// ============================================================

import { CATEGORIES, PRODUCT_META, PLACEHOLDER, CATALOG_FALLBACK } from "@/data/products";
import { PRODUCT_IMAGES } from "@/data/productImages";

const SPREADSHEET_ID = "1HfL8TI_CUOZAHxj3W-RFIFpF0LtfiOfMwYcIzRf2Ccc";

// Palabras que quedan en minúscula dentro de un nombre (salvo al inicio).
const MINUSCULAS = new Set(["de", "del", "la", "las", "el", "los", "y", "con", "a", "al", "en", "por", "para"]);

/** "Bife de Chorizo" / "BIFE DE CHORIZO" / "bife-de-chorizo" → "bife-de-chorizo" */
export function slugify(texto) {
  return String(texto)
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/** "PAPAS TRADICIONAL" → "Papas Tradicional" · "bife-de-chorizo" → "Bife de Chorizo" */
function prettify(texto) {
  const palabras = String(texto)
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .split(" ");

  return palabras
    .map((palabra, i) => {
      // Los que tienen números se dejan como están (250G, N°1).
      if (/\d/.test(palabra)) return palabra.toUpperCase();
      const minuscula = palabra.toLowerCase();
      if (i > 0 && MINUSCULAS.has(minuscula)) return minuscula;
      return minuscula.charAt(0).toUpperCase() + minuscula.slice(1);
    })
    .join(" ");
}

function parseCsvLine(line) {
  const cells = [];
  let current = "";
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    if (inQuotes) {
      if (char === '"') {
        if (line[i + 1] === '"') {
          current += '"';
          i++;
        } else {
          inQuotes = false;
        }
      } else {
        current += char;
      }
    } else if (char === '"') {
      inQuotes = true;
    } else if (char === ",") {
      cells.push(current);
      current = "";
    } else {
      current += char;
    }
  }
  cells.push(current);
  return cells;
}

/** Combina una fila de la planilla con los metadatos locales (foto, descripción, unidad). */
function decorar({ category, name, price }) {
  const slug = slugify(name);
  const meta = PRODUCT_META[slug] || {};

  // Orden de prioridad para la foto:
  //  1. Un archivo en public/products/ con el nombre del producto.
  //  2. La foto declarada en PRODUCT_META (sirve para nombres que
  //     cambiaron en la planilla pero conservan la foto vieja).
  //  3. La imagen genérica de la categoría.
  const image = PRODUCT_IMAGES[slug] || meta.image || PLACEHOLDER[category] || PLACEHOLDER.res;

  return {
    key: `${category}:${slug}`,
    id: slug,
    category,
    name: meta.name || prettify(name),
    price,
    unit: meta.unit || null,
    image,
    tieneFoto: image !== (PLACEHOLDER[category] || PLACEHOLDER.res),
    description: meta.description || "",
  };
}

async function fetchTab({ id, sheet }) {
  const url = `https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(sheet)}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Hoja "${sheet}": HTTP ${res.status}`);

  const text = await res.text();
  const productos = [];
  // Fila 1 = encabezados, los datos arrancan en la fila 2.
  for (const line of text.split(/\r?\n/).slice(1)) {
    if (!line.trim()) continue;
    const [rawName, rawPrice] = parseCsvLine(line);
    const name = (rawName || "").trim();
    // Acepta "16900", "$16.900", "16.900,00" → número.
    const price = Number((rawPrice || "").replace(/[^\d]/g, ""));
    if (!name || !price) continue;
    productos.push(decorar({ category: id, name, price }));
  }
  return productos;
}

function fallbackDeCategoria(id) {
  return CATALOG_FALLBACK.filter((p) => p.category === id).map(decorar);
}

async function cargar() {
  const resultados = await Promise.allSettled(CATEGORIES.map(fetchTab));

  const productos = [];
  let hojasOk = 0;
  resultados.forEach((resultado, i) => {
    if (resultado.status === "fulfilled" && resultado.value.length > 0) {
      hojasOk++;
      productos.push(...resultado.value);
    } else {
      // Si una hoja falla, mostramos el respaldo de esa categoría
      // en vez de dejarla vacía.
      productos.push(...fallbackDeCategoria(CATEGORIES[i].id));
    }
  });

  return { productos, desdeRespaldo: hojasOk === 0 };
}

// Catalog y SeoSchema piden el catálogo por separado; guardamos la
// promesa para que se lea la planilla una sola vez por visita.
let enCurso = null;

export function fetchCatalog() {
  if (!enCurso) {
    enCurso = cargar().catch((error) => {
      enCurso = null;
      throw error;
    });
  }
  return enCurso;
}
