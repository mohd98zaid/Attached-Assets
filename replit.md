# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Artifacts

### BOKURA Accounting & Bookkeeping Landing Page (`artifacts/bokura-landing`)
- **Type**: React + Vite (presentation-first, no backend)
- **Preview Path**: `/` (root)
- **Purpose**: Premium landing page for BOKURA ACCOUNTING AND BOOKKEEPING L.L.C, a Dubai/UAE-based financial firm
- **Features**:
  - Three.js 3D animated background (glowing orbs, rotating coins, grid lines) with CSS fallback for non-WebGL environments
  - iOS 26 Liquid Glass UI (backdrop-filter blur, cyan/gold glowing borders)
  - Framer Motion scroll-triggered entrance animations
  - Full SEO: Dubai/UAE meta tags, JSON-LD LocalBusiness schema, Open Graph
  - Sections: Navbar, Hero, Services (6 cards), Problem, Why Us, About, Testimonials, FAQ, Final CTA, Footer
  - Inquiry modal with 4-field form and success message
  - Floating "Free Health Check" CTA button
  - Fully responsive (mobile, tablet, desktop)
- **Dependencies**: three, @types/three, react-intersection-observer, framer-motion
- **Color palette**: Deep space black (#050508), electric cyan (#00bfff), gold (#d4a017)

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
