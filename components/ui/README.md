# mapcn-map-arc — React component (future migration)

This folder holds the shadcn-style React map component for when the site migrates to a
React/Next.js stack. **The current site is static HTML** (Tailwind via CDN, no React, no
TypeScript, no bundler), so this component cannot run as-is. The homepage instead uses a
vanilla-JS port of this component (same `maplibre-gl` engine, same arc math) — see the
`<script>` block at the bottom of `index.html`.

## Why /components/ui matters

shadcn/ui components are distributed as source code (not an npm package) and the CLI,
import aliases (`@/components/ui/...`), and generator all assume this exact folder.
Keeping components here means `npx shadcn add <component>` and any copy-pasted shadcn
component will resolve imports without changes.

## Setting up a React project that can run this component

```bash
# 1. Create a Next.js app with TypeScript + Tailwind (answer "yes" to App Router)
npx create-next-app@latest h2f-site --typescript --tailwind --eslint --app --src-dir=false

cd h2f-site

# 2. Initialize shadcn (creates components.json, lib/utils, /components/ui)
npx shadcn@latest init

# 3. Install this component's dependencies
npm install maplibre-gl lucide-react

# 4. Copy mapcn-map-arc.tsx and demo.tsx from this folder into components/ui/
```

Then render `<DefaultMapArcDemo />` (from `demo.tsx`) or compose `<Map>`, `<MapArc>`,
`<MapMarker>` directly. The homepage equivalent uses:

- hub: Phoenix, AZ `[-112.0667, 33.4453]`
- destinations: Santo Domingo `[-69.9312, 18.4861]`, San Pedro de Macorís `[-69.3086, 18.4539]`
- arcs with `curvature: 0.2`, dashed brand-red lines (`#E6001A`)
