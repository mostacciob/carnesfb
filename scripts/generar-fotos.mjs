// ============================================================
//  Arma la lista de fotos disponibles leyendo public/products/
// ============================================================
//  Se ejecuta solo antes de cada "npm run dev" y "npm run build",
//  asi que para sumar la foto de un producto alcanza con copiar el
//  archivo en public/products/ con el nombre del producto.
//
//      "Bola de lomo"  ->  public/products/bola-de-lomo.webp
//
//  No hace falta tocar codigo.
// ============================================================
import { readdirSync, writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const raiz = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const carpeta = resolve(raiz, "public/products");
const EXTENSIONES = [".webp", ".jpg", ".jpeg", ".png", ".avif"];

const fotos = {};
for (const archivo of readdirSync(carpeta)) {
  const punto = archivo.lastIndexOf(".");
  if (punto < 0) continue;
  const ext = archivo.slice(punto).toLowerCase();
  if (!EXTENSIONES.includes(ext)) continue;
  fotos[archivo.slice(0, punto)] = `/products/${archivo}`;
}

const entradas = Object.keys(fotos).sort()
  .map((slug) => `  ${JSON.stringify(slug)}: ${JSON.stringify(fotos[slug])},`)
  .join("\n");

const salida = `// ⚠️  ARCHIVO GENERADO AUTOMÁTICAMENTE — no editar a mano.
// Lo regenera scripts/generar-fotos.mjs antes de cada dev/build.
//
// Para agregar la foto de un producto, copiá el archivo en
// public/products/ con el nombre del producto en minúscula y con
// guiones. Ej: "Bola de lomo" → public/products/bola-de-lomo.webp
export const PRODUCT_IMAGES = {
${entradas}
};
`;

writeFileSync(resolve(raiz, "src/data/productImages.js"), salida, "utf8");
console.log(`fotos detectadas: ${Object.keys(fotos).length}`);
