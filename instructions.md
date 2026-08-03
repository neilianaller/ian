# IANDEV Portfolio Website — Build Instructions

## Overview

A personal portfolio website for **IANDEV** — a developer and designer brand. The site is aesthetic, minimalist, and developer-forward. It showcases web systems, mobile apps, and graphic design work. Deployed via **Firebase Hosting**.

---

## Tech Stack

| Layer | Choice | Reason |
|---|---|---|
| Framework | **Vite + React** | Fast, lightweight, SPA-ready |
| Styling | **Tailwind CSS** | Utility-first, easy dark mode |
| Routing | **React Router v6** | Multi-page SPA |
| Animation | **Framer Motion** | Smooth transitions, scroll reveals |
| Contact Form | **Formspree** | No backend needed |
| Hosting | **Firebase Hosting** | Static deploy, custom domain |
| Fonts | **Google Fonts** — `Google Sans` (headings) + `DM Mono` (body/code) | Techy yet refined |

---

## Aesthetic Direction

- **Theme:** Dark mode by default. Near-black background (`#0A0A0A`), off-white text (`#F0EEE8`), acid-green accent (`#B8FF57`) for highlights — a modern developer aesthetic.
- **Style:** Minimalist editorial. Generous whitespace. Monospaced accents for code-feel. Grid-based layout. Subtle grain texture overlay on hero.
- **Motion:** Staggered fade-in on scroll. Smooth page transitions. Hover underlines on links.
- **Logo/Brand:** Text-based `IANDEV` logotype using `Syne ExtraBold`. No image logo for now — placeholder comment left in code.

---

## File & Folder Structure

```
iandev-portfolio/
├─
<truncated 9557 bytes>


# Deploy
firebase deploy
```

---

## Formspree Setup

1. Go to [formspree.io](https://formspree.io) → Create account → New Form.
2. Copy the form endpoint (e.g., `https://formspree.io/f/xyzabc12`).
3. Replace placeholder in `ContactForm.jsx`:
```jsx
const FORM_ID = "xyzabc12"; // ← replace this
```

---

## Placeholder Strategy

All placeholders to replace later:

| Placeholder | Replace With |
|---|---|
| `/assets/placeholder.jpg` | Actual screenshots, mockups, or app icons |
| `[Client Logo]` boxes | Actual client/affiliation logos |
| IANDEV logotype (text) | SVG logo when ready |
| `YOUR_FORM_ID` | Formspree form ID |
| `YOUR_FIREBASE_PROJECT_ID` | Firebase project ID |
| Store links (`#`) | Google Play / App Store URLs |

---

## Page Routes Summary

| Route | Page |
|---|---|
| `/` | Home (landing page) |
| `/case-studies` | Case Studies (systems + designs tabs) |
| `/case-studies#systems` | Case Studies → Info Systems tab |
| `/case-studies#designs` | Case Studies → Design tab |
| `/design` | Full Design Portfolio Grid |

---

## Notes & Reminders

- Keep **dev projects dominant** — bigger cards, more real estate, higher on page.
- Graphic design section on homepage is intentionally compact — teaser only.
- Case studies page mirrors [neilian.dev/case-studies](https://neilian.dev/case-studies) in structure but with IANDEV branding.
- Use `Syne` for all headings and `DM Mono` for labels, tags, and section markers.
- Accent color (`#B8FF57`) used sparingly — CTAs, hover states, section labels only.
- All animations should respect `prefers-reduced-motion`.
- Mobile-first responsive design throughout.
- USE LESSER TOKENS AS MUCH AS POSSIBLE.

---

## SEO & Search Console Setup

### Meta Tags & Open Graph
- ✅ **Page Title:** 52 characters — optimized for search results and social previews
- ✅ **Meta Description:** ~140 characters — Google truncates around 150–160
- ✅ **og:description:** ~85 characters — Social previews show ~125 characters
- ✅ **og:site_name:** "IANDEV" — Shows on Discord and other platforms
- ✅ **og:image:** References `/og-image.png` (create a 1200x630px image for best results)
- ✅ **Canonical URL:** Set to prevent duplicate content issues
- ✅ **JSON-LD Structured Data:** Person schema for rich snippets

### Sitemap & Robots
- ✅ **Sitemap:** Auto-generated at `/public/sitemap.xml` — lists all indexable pages
- ✅ **Robots.txt:** Located at `/public/robots.txt` — directs crawlers to sitemap

### Google Search Console Setup
1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add property: `https://iandev-c5fc3.web.app`
3. Verify ownership (use DNS, HTML file, or Google Analytics)
4. Submit sitemap: Add `/sitemap.xml` to GSC
5. Monitor:
   - Indexing status
   - Search performance (clicks, impressions, CTR)
   - Mobile usability
   - Core Web Vitals

### Next Steps
- Create a 1200x630px Open Graph image and save as `public/og-image.png`
- Update social media links in JSON-LD schema
- Monitor GSC for indexing and ranking issues
- Update sitemap `lastmod` dates when content changes
