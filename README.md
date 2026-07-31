# CarnesFB

Sitio de catálogo de CarnesFB (distribuidora de carnes premium). React + Vite + Tailwind + shadcn/ui.

## Desarrollo local

```bash
npm install
npm run dev
```

Abre la URL que imprime Vite (por defecto `http://localhost:5173`).

## Build de producción

```bash
npm run build
```

Genera el sitio estático en `dist/`, listo para subir a cualquier hosting (Vercel, Netlify, GitHub Pages, etc.).

## Precios

Los precios del catálogo se leen en vivo desde una Google Sheet pública (ver `src/lib/sheetPrices.js`). Los productos, imágenes y descripciones están en `src/data/products.js`.
