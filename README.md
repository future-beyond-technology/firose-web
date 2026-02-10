# Firose Enterprises

A corporate multi-brand group website for **Firose Enterprises** — featuring a portfolio of brands across fragrance, hygiene, and healthcare categories.

## Overview

Firose Enterprises builds and scales focused consumer brands with disciplined quality systems, category-specific positioning, and distribution-ready operations.

### Key Brands
- **AR Perfumes:** Premium luxury perfume brand with a Middle Eastern–inspired aesthetic.
- **Femison:** Hygiene and personal care solutions.
- **Neat Fresh:** Housekeeping and wellness products.

---

## Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/), PostCSS
- **UI Components:** React 19

---

## Getting Started

### Requirements
- **Node.js:** 18.x or later (recommended 20+)
- **Package Manager:** npm (or yarn/pnpm)

### Setup & Run
1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd firose-web
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the result.

---

## Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm run start`: Starts the production server.
- `npm run lint`: Runs ESLint for code quality checks.

---

## Project Structure

```text
firose-web/
├── app/                # Next.js App Router (Pages, Layouts, Components)
│   ├── about/          # About page and corporate story
│   ├── brands/         # Brand-specific pages (AR Perfumes, Femison, etc.)
│   ├── lib/            # Shared utilities and data fetching
│   └── globals.css     # Global styles and Tailwind directives
├── docs/               # Architecture, cleanup, and migration documentation
├── public/             # Static assets (images, favicon)
├── next.config.js      # Next.js configuration
├── tailwind.config.ts  # Tailwind CSS configuration
└── tsconfig.json       # TypeScript configuration
```

---

## Environment Variables
No required environment variables for core app behavior.

Optional:
- `NEXT_PUBLIC_AR_BRAND_WEBSITE`: overrides the AR brand external CTA URL.

---

## Tests
- TODO: Implement unit and integration tests (e.g., Jest, Playwright).
- Build validation: `npm run build`

---

## License

© Firose Enterprises. For brand use only.
