# Vercel Deployment Guide — BOKURA Accounting & Bookkeeping

## Correct Import Settings

When importing from GitHub at [vercel.com](https://vercel.com), use these exact settings:

| Setting | Value |
|---|---|
| **Framework Preset** | Other |
| **Root Directory** | `.` (leave blank — repo root) |
| **Build Command** | `pnpm --filter @workspace/bokura-landing run build:vercel` |
| **Output Directory** | `artifacts/bokura-landing/dist/public` |
| **Install Command** | `pnpm install` |

> **Common mistake:** Vercel may auto-detect `artifacts/api-server` and set the framework to Express. Always override it with the settings above.

---

## After First Deploy

Replace all occurrences of the placeholder domain with your real Vercel/custom domain in these 3 files:

- `artifacts/bokura-landing/index.html` — canonical URLs and OG/schema (~12 occurrences)
- `artifacts/bokura-landing/public/sitemap.xml` — sitemap URLs
- `artifacts/bokura-landing/public/robots.txt` — sitemap reference

Search for: `attached-assets-techedubyte.replit.app`

---

## Custom Domain (optional)

1. Vercel dashboard → project → **Settings → Domains**
2. Add your domain (e.g. `bokura.ae`)
3. Add the DNS records Vercel provides to your domain registrar
4. SSL is automatic and free

---

## Search Engine Submission

After going live on your real domain:

1. **Google Search Console** → [search.google.com/search-console](https://search.google.com/search-console) → Add Property → Submit sitemap at `https://yourdomain.com/sitemap.xml`
2. **Bing Webmaster Tools** → [bing.com/webmasters](https://bing.com/webmasters) → Import from Google Search Console (one click)

---

## Contact Details on the Site

| Field | Value |
|---|---|
| Email | majid957@yahoo.in |
| Phone | +971 55 566 0189 |
| WhatsApp | 971555660189 |

---

## Redeployment

Every `git push` to `main` triggers an automatic redeploy on Vercel. No manual steps needed.
