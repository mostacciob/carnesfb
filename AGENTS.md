# AGENTS.md

## Project Context

CarnesFB is a public product-catalog website (no user accounts / auth). Originally scaffolded on Base44, now a plain Vite + React + Tailwind + shadcn/ui project with no backend dependency.

## Key Files

- `src/data/products.js`: product catalog (name, category, price, image, description) and business info (WhatsApp number, address, FAQ).
- `src/lib/sheetPrices.js`: fetches live prices from a public Google Sheet (CSV export), no backend involved.
- `src/components/sections/`: page sections (Hero, Catalog, Benefits, FAQ, CTASection, SocialProof).
- `src/components/ui/`: shadcn/ui components.

## Working Notes

- `npm run dev` for local development, `npm run build` for a production build in `dist/`.
- To update prices: edit the linked Google Sheet, or edit the fallback prices directly in `src/data/products.js`.
- To add a new product/cut: add an entry to the `PRODUCTS` array in `src/data/products.js` (needs `id`, `name`, `category`, `price`, `unit`, `image`, `description`).
