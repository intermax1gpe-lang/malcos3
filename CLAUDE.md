# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server at localhost:4321
npm run build     # Build static site to ./dist/
npm run preview   # Preview the production build locally
npm run astro check  # TypeScript type-check all .astro files
```

There is no test suite and no linter config beyond TypeScript strict mode.

## Architecture

This is a static Astro site for MALCOS S.A.C., a Peruvian intercom distributor. It uses **Tailwind CSS v4** (via `@tailwindcss/vite` — no `tailwind.config.js`) and strict TypeScript.

### Two product data layers

Products exist in two parallel data systems that must be kept in sync:

1. **`src/data/{brand}Products.ts`** — `ProductCategory[]` shape. Powers the tabbed catalog on the homepage (`CatalogSection`). Each brand has its own file (`commaxProducts.ts`, `yusphoneProducts.ts`, `belcomProducts.ts`, `kocomProducts.ts`).

2. **`src/data/allProducts.ts`** — `ProductDetail[]` shape. Powers the individual product detail pages at `/producto/[slug]`. Contains `slug`, `mainImg`, and `bullets` not present in the catalog files. Also exposes `getProductBySlug()` and `getProductsByBrand()`.

When adding a new product, entries are needed in **both** the brand file and `allProducts.ts`. The `slug` in `allProducts.ts` must match the last path segment of the `url` in the brand file (e.g. `url: 'https://malcos.com.pe/producto/portero-audio-dr-2um/'` → `slug: 'portero-audio-dr-2um'`).

### Static routing

`src/pages/producto/[slug].astro` generates all product detail pages via `getStaticPaths()`, which iterates over `allProducts`. If a slug exists in a brand file but not in `allProducts.ts`, there will be no detail page for it.

### Cart system

The quote cart (`src/scripts/cart.ts`) is entirely client-side using `localStorage` under the key `malcos_cart`. State changes are broadcast via two custom DOM events:

- `cart:update` — fired after any mutation; carries the updated items array as `detail`
- `cart:open` — fired to open the drawer

`CartDrawer.astro` and `Navbar.astro` both listen to these events. The cart has no server backend — "checkout" builds a WhatsApp message URL via `buildWhatsAppUrl()`.

### Brand colors

Defined in `src/styles/global.css` using the Tailwind v4 `@theme` block:

```css
--color-brand-blue: #1a4f9c;
--color-brand-orange: #f7941d;
```

Use `text-brand-blue`, `bg-brand-orange`, etc. in Tailwind classes. Do not add colors elsewhere.

### Page structure

`src/pages/index.astro` is the single landing page. It renders brand catalog sections in order: COMMAX → YUSPHONE → BELCOM → KOCOM. Each `CatalogSection` receives `id` matching the brand slug, which is the anchor target for navbar links (e.g. `href="#commax"`).

`src/layouts/Layout.astro` holds the JSON-LD structured data and all `<head>` meta. The site has no prices — all conversions go through WhatsApp at `+51934852558`.
