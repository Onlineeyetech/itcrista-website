# ITcrista infoX — Premium IT Agency Marketing Site

## Original Problem Statement
Build an ultra premium, modern, futuristic, highly trustable IT agency marketing site for "ITcrista infoX" — multi-page (Home, Services, Portfolio, About, Contact). Light theme primary was requested but user later chose "Dark luxury theme; Light theme as primary with a dark hero/CTA accent section" → implemented as Hybrid Dark dominant theme with Light interlude sections (Why Choose Us, Process). Static contact form. Placeholder portfolio/testimonials.

## Architecture
- Frontend-only React (CRA + craco) marketing site
- React Router v7 multi-page navigation (Home, Services, Portfolio, About, Contact)
- TailwindCSS + Shadcn UI primitives (Accordion)
- framer-motion for entrance/scroll animations
- react-fast-marquee for Trusted-By + Tech logo strips
- lucide-react icons
- No backend integration / no MongoDB usage / no auth
- Fonts: Satoshi (display) + General Sans (body) via Fontshare, Inter fallback

## User Personas
- Founders / startups needing premium websites
- Ecommerce brands (Shopify, WooCommerce, Magento)
- Enterprise clients
- Agencies seeking white-label dev partner

## Implemented (Dec 2025)
- Sticky glass Navbar with scroll-state, mobile hamburger, animated underline
- Hero: animated headline, dual CTAs, animated counters, 3D floating asset, glass info pills
- Trusted-By marquee with hover-color brands
- Services bento grid (13 services) + horizontal snap slider on mobile
- Why-Choose-Us LIGHT interlude with 6 feature cards
- Portfolio with category filters + AnimatePresence layout transitions
- 6-step Process timeline (LIGHT) + mobile slider
- Testimonials slider with avatars + 5-star rating + prev/next
- Technologies dual-direction marquee (16 stacks)
- Pricing 3 tiers with highlighted mid tier (cyan glow)
- FAQ shadcn Accordion (6 items)
- Final CTA banner
- Premium Footer with mega-stroke ITcrista text
- Multi-page routing with ScrollToTop on route change
- Static contact form with success state (no backend)

## Tech / Design Compliance
- All sections >6 cards have mobile horizontal slider (Services 13, Process 6 ≤ but still has mobile slider)
- All interactive elements have data-testid
- Hybrid theme: dark (#071120) primary, light (#F8FAFC) for Why Choose Us & Process
- Premium fonts: Satoshi + General Sans

## Backlog (P0 → P2)
- P1: Wire contact form to backend (Mongo lead storage) — user opted static for now
- P1: Real client logos & portfolio images
- P2: Blog / Case study detail pages
- P2: Add Three.js interactive 3D in hero (currently animated image)
- P2: i18n + GTM / Analytics
- P2: SEO meta tags per route (react-helmet-async)
