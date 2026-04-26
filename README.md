# BOKURA Accounting & Bookkeeping L.L.C — Ultra-Premium Landing Page

[![Status: Production Ready](https://img.shields.io/badge/Status-Production--Ready-00d4ff?style=for-the-badge)](https://bokura.org)
[![SEO: Hyper-Optimized](https://img.shields.io/badge/SEO-UAE--GCC--Hyper--Optimized-d4a017?style=for-the-badge)](https://bokura.org)
[![AEO: AI Ready](https://img.shields.io/badge/AEO-AI--Search--Ready-ff0055?style=for-the-badge)](https://bokura.org)

An ultra-premium, high-conversion landing page for **BOKURA Accounting & Bookkeeping L.L.C**, based in Deira, Dubai. This project combines cutting-edge web technology with state-of-the-art SEO and AI Engine Optimization (AEO) to dominate the UAE accounting market.

---

## ✨ Key Features

### 🌌 Elite Visual Experience
- **Deep Space Aesthetic** — A custom-crafted dark theme (`#050508`) utilizing electric cyan and gold accents for a premium, professional feel.
- **Three.js 3D Background** — An interactive, high-performance particle field rendered on WebGL, providing a dynamic sense of depth.
- **Liquid Glass UI** — iOS-inspired frosted glass components with complex backdrop blurs, saturation layers, and responsive depth.
- **Micro-Animations** — Subtle Framer Motion spring physics and CSS-based hover glow effects across all interactive cards.

### 🌍 Global & Local Reach
- **Native Bilingual Support** — Seamless English and Arabic switching with high-fidelity translations.
- **RTL-First Architecture** — Full Right-To-Left support with dynamic `dir` attributes, logical CSS properties, and Noto Sans Arabic typography.
- **Localized for GCC** — Specifically tuned for the UAE, Saudi Arabia, Kuwait, Bahrain, Qatar, and Oman.

### 🤖 AI & Search Dominance (AEO/SEO)
- **AEO (AI Engine Optimization)** — Optimized for citations in ChatGPT (with search), Perplexity, and Google AI Overviews.
- **Multi-Layered Schema** — 7+ JSON-LD blocks including `AccountingService`, `LocalBusiness`, `Organization`, `WebPage`, `BreadcrumbList`, and bilingual `FAQPage`.
- **Strategic Geo-Targeting** — Embedded coordinate data and regional meta-tags for Deira, Dubai (AE-DU).
- **Automated Sitemaps** — Machine-readable image sitemaps and AI-friendly `robots.txt` configuration.

---

## 🛠 Tech Stack

| Layer | Technology |
|:--- |:--- |
| **Framework** | React 18 (TypeScript) |
| **Build Tool** | Vite 7 |
| **Styling** | Tailwind CSS v4 |
| **Animation** | Framer Motion |
| **3D Rendering** | Three.js |
| **Typography** | Inter, Syne (Display), Noto Sans Arabic |
| **Monorepo** | pnpm Workspaces |

---

## 📂 Project Architecture

```bash
BOKURA/
├── artifacts/
│   └── bokura-landing/         # Core Landing Page Package
│       ├── public/             # Static Assets (Sitemaps, robots.txt, Logos)
│       ├── src/
│       │   ├── components/     # High-fidelity UI sections
│       │   ├── context/        # Bilingual & RTL State Management
│       │   ├── i18n/           # Centralized Translation Strings (translations.ts)
│       │   └── index.css       # Core Design System & Animations
│       ├── index.html          # SEO Meta Layer & Schema Markup
│       └── package.json        # Service-specific dependencies
├── package.json                # Monorepo root
└── pnpm-workspace.yaml         # Workspace configuration
```

---

## 🚀 Quick Start

### 1. Installation
Ensure you have **Node.js v18+** and **pnpm v9+** installed.

```bash
# Clone the repository
git clone https://github.com/plumsNpearls/BOKURA.git
cd BOKURA

# Install all workspace dependencies
pnpm install
```

### 2. Environment Setup
Create a `.env` file in `artifacts/bokura-landing/`:
```bash
PORT=3000
BASE_PATH=/
```

### 3. Local Development
```bash
pnpm --filter @workspace/bokura-landing run dev
```
Site will be live at: **[http://localhost:3000](http://localhost:3000)**

---

## 🏗 Deployment & Production

### Build for Production
```bash
PORT=3000 BASE_PATH=/ pnpm --filter @workspace/bokura-landing run build
```
Build output: `artifacts/bokura-landing/dist/public/`

### Preview Production Build
```bash
PORT=3000 BASE_PATH=/ pnpm --filter @workspace/bokura-landing run serve
```

---

## 📈 SEO & AEO Management

The project is pre-configured for the production domain: **[https://bokura.org/](https://bokura.org/)**.

### Managing Content
To update text, services, or FAQs without touching code, edit the translation file:
`artifacts/bokura-landing/src/i18n/translations.ts`

### Audit & Compliance
A comprehensive SEO/AEO audit has been performed. You can review the full findings and strategic recommendations in:
`artifacts/bokura-landing/seo_audit_report.md`

### To-Do Before Launch
1. **Verification**: After connecting the domain to your host, uncomment and update the Google/Bing verification tags in `index.html`.
2. **Analytics**: Inject your GA4 / Google Tag Manager snippets into the `<head>` of `index.html`.

---

## 📄 License
**Private** — All rights reserved. BOKURA Accounting and Bookkeeping L.L.C.
Designed with ❤️ for the future of financial services in Dubai.
