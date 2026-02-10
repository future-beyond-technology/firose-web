# Maintainability Audit

Last updated: 2026-02-10

## 1) Safe Cleanup Plan

### Objective
Remove dead and duplicate code paths while preserving runtime behavior and legacy link compatibility.

### Executed Safety Controls
1. Rewired the only active dependency on root-level legacy React components.
2. Added permanent redirects for legacy HTML entry points.
3. Removed dead folders and files only after dependency checks.
4. Rebuilt the app to validate route generation and compilation.

### Removed Surface Area
- `/components` (legacy duplicate React AR components)
- `/data` (legacy duplicate AR product dataset)
- `/styles` (legacy duplicate AR CSS module)
- `/index.html`
- `/collection.html`
- `/about.html`
- `/contact.html`
- `/product.html`
- `/css`
- `/js`
- `/images`

### Active Replacement Paths
- AR components/data now live only under:
  - `/app/brands/ar-perfumes/components`
- Shared corporate components/data:
  - `/app/components`
  - `/app/lib`

## 2) Legacy -> Next.js Migration Map

| Legacy File / URL | Active Next Route | Notes |
| --- | --- | --- |
| `/index.html` | `/` and `/brands/ar-perfumes` | Legacy AR home content is represented in AR brand route; corporate home remains `/`. |
| `/collection.html` | `/brands/ar-perfumes` | Product collection now lives in AR brand page sections. |
| `/about.html` | `/about` | Corporate about moved to App Router about route. |
| `/contact.html` | `/contact` | Corporate contact and lead flow moved to App Router contact route. |
| `/product.html?name=*` | `/brands/ar-perfumes` | No standalone product detail route in current app; product intent handled in AR section/WhatsApp flow. |

### Redirects Implemented
Configured in `/next.config.js`:
- `/index.html` -> `/`
- `/collection.html` -> `/brands/ar-perfumes`
- `/about.html` -> `/about`
- `/contact.html` -> `/contact`
- `/product.html` -> `/brands/ar-perfumes`

## 3) Module Dependency Graph (Internal Imports)

### Graph A: App-Level Composition

```mermaid
graph TD
  L["/app/layout.tsx"] --> CH["/app/components/CorporateHeader.tsx"]
  L --> G["/app/globals.css"]

  H["/app/page.tsx"] --> B["/app/lib/brands.ts"]

  BL["/app/brands/layout.tsx"] --> B
  BO["/app/brands/page.tsx"] --> B

  CP["/app/contact/page.tsx"] --> B
  CP --> CLF["/app/components/CorporateLeadForm.tsx"]
  BWP["/app/business-with-us/page.tsx"] --> CLF

  ASP["/app/about/story/page.tsx"] --> CS["/app/about/CorporateStory.tsx"]
```

### Graph B: Brand Modules

```mermaid
graph TD
  ARP["/app/brands/ar-perfumes/page.tsx"] --> ARA["About.tsx"]
  ARP --> ARC["Contact.tsx"]
  ARP --> ARH["Hero.tsx"]
  ARP --> ARI["PageIntro.tsx"]
  ARP --> ARG["ProductGrid.tsx"]
  ARP --> ARW["WhatsAppButton.tsx"]
  ARP --> ARY["WhyChoose.tsx"]
  ARP --> ARS["SocialLinks.tsx"]

  ARG --> ARPC["ProductCard.tsx"]
  ARG --> ARD["products.ts"]
  ARPC --> ARD
  ARC --> ARD
  ARW --> ARD
  ARD --> B["/app/lib/brands.ts"]

  NFP["/app/brands/neat-fresh/page.tsx"] --> N1["NeatFreshHero.tsx"]
  NFP --> N2["NeatFreshProductSections.tsx"]
  NFP --> N3["NeatFreshContactCard.tsx"]
  NFP --> N4["NeatFreshCtaBlocks.tsx"]
  NFP --> B

  FMP["/app/brands/femison/page.tsx"] --> F1["FemisonHero.tsx"]
  FMP --> F2["FemisonProductSections.tsx"]
  FMP --> F3["FemisonContactCard.tsx"]
  FMP --> F4["FemisonCtaBlocks.tsx"]
  FMP --> B
```

### High-Value Maintainability Notes
1. Brand contact/source-of-truth is centralized in `/app/lib/brands.ts`.
2. AR brand keeps a self-contained component module under `/app/brands/ar-perfumes/components`.
3. Corporate lead flow is centralized in `/app/components/CorporateLeadForm.tsx`.
