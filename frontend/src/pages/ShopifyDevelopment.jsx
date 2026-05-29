import ServicePageTemplate from "../components/ServicePageTemplate";
import {
  Store, Palette, ShoppingCart, Zap, Gauge, Globe2, ShieldCheck, Smartphone, Box, Layers, CreditCard, Search, Wrench, Database, Rocket, BarChart3,
} from "lucide-react";

const SHARED_PORTFOLIO_IMGS = {
  a: "https://static.prod-images.emergentagent.com/jobs/e5edbea0-9077-4246-8082-58f6c769b341/images/5fb7e3c4e2151710b94bd958faff69a88e02e9e3b247fa83ef1d98152a9cab97.png",
  b: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=1400&q=80",
  c: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=80",
};

const TESTIMONIAL_IMGS = {
  a: "https://images.unsplash.com/photo-1638290047807-4c9d389b9aa6?auto=format&fit=crop&w=400&q=80",
  b: "https://images.unsplash.com/photo-1764545973653-94c40d993495?auto=format&fit=crop&w=400&q=80",
  c: "https://images.unsplash.com/photo-1767175620484-1ed37931a0d1?auto=format&fit=crop&w=400&q=80",
};

const content = {
  slug: "shopify-dev",
  eyebrow: "Shopify Development",
  title: "Premium Shopify storefronts.",
  titleAccent: "Engineered for luxury DTC.",
  subtitle:
    "Custom themes, Hydrogen storefronts, app development and headless commerce — built for ambitious brands that refuse to look like everyone else.",
  heroImage:
    "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=1200&q=80",
  stats: [
    { v: "+34%", l: "Avg. CR lift" },
    { v: "0.8s", l: "LCP target" },
    { v: "120+", l: "Stores shipped" },
  ],
  whyTitle: "Themes scale teams.",
  whyAccent: "Custom Shopify scales brands.",
  whySubtitle:
    "A premium Shopify storefront is no longer a luxury. For ambitious DTC brands, it is the highest-leverage move you can make in 2026.",
  reasons: [
    { icon: Zap, t: "Hydrogen-first", d: "Edge-rendered React storefronts that load in under 1s on real traffic." },
    { icon: Palette, t: "Brand-grade design", d: "Pixel-perfect UI tailored to your brand — never theme-recognisable." },
    { icon: CreditCard, t: "Conversion-obsessed", d: "PDP, cart, checkout patterns proven on premium DTC brands." },
    { icon: Layers, t: "Headless flexibility", d: "Sanity / Contentful integration so marketing can ship without devs." },
  ],
  includedTitle: "Everything your store needs,",
  includedAccent: "end-to-end.",
  included: [
    { icon: Palette, t: "Custom Shopify Theme", d: "Bespoke OS 2.0 themes with luxury micro-interactions." },
    { icon: Zap, t: "Hydrogen Storefront", d: "Edge-rendered React storefront for sub-second performance." },
    { icon: Box, t: "Private App Development", d: "Custom Shopify apps for unique business workflows." },
    { icon: ShoppingCart, t: "Checkout Extensibility", d: "Custom checkout UI, upsells and bundles via Functions." },
    { icon: Globe2, t: "Multi-market & i18n", d: "Multi-currency, multi-language and regional content." },
    { icon: Wrench, t: "Migration & Re-platforming", d: "Magento, WooCommerce or BigCommerce → Shopify with zero downtime." },
  ],
  steps: [
    { n: "01", t: "Discovery", d: "Brand audit, growth strategy, store blueprint." },
    { n: "02", t: "Design", d: "Custom UI/UX tailored to your DTC brand." },
    { n: "03", t: "Build", d: "Liquid, Hydrogen, Shopify Functions, apps." },
    { n: "04", t: "Integrate", d: "Klaviyo, Gorgias, ERP, OMS, reviews, search." },
    { n: "05", t: "Launch", d: "Zero-downtime launch, 301 strategy, QA." },
    { n: "06", t: "Grow", d: "Ongoing CRO, A/B testing, retainer support." },
  ],
  stack: {
    Storefront: ["Hydrogen", "Liquid", "React", "Remix", "Tailwind"],
    Commerce: ["Shopify Plus", "Functions", "Checkout UI", "Markets", "B2B"],
    Integrations: ["Klaviyo", "Gorgias", "Algolia", "Yotpo", "Recharge"],
    Tooling: ["Theme Inspector", "Hydrogen CLI", "Vercel", "GitHub Actions", "Sentry"],
  },
  featuresTitle: "Built-in features",
  featuresAccent: "that compound revenue.",
  features: [
    { t: "Sub-1s storefront LCP", d: "Edge rendering, image strategy, code-splitting baked in." },
    { t: "Custom PDP & PLP", d: "High-converting product detail and listing experiences." },
    { t: "Bundles & subscriptions", d: "Native ReCharge / Shopify Subscriptions support." },
    { t: "Checkout extensions", d: "Custom upsells, gifting and shipping logic." },
    { t: "Multi-currency / i18n", d: "Markets, geo-routing, locale-aware SEO." },
    { t: "Headless content", d: "Sanity / Contentful with editor previews." },
    { t: "Reviews & UGC", d: "Yotpo / Loox / Okendo integration patterns." },
    { t: "Loyalty & rewards", d: "Smile.io / Yotpo Loyalty native integrations." },
    { t: "Analytics ready", d: "GA4, Triple Whale, Northbeam, server-side tracking." },
  ],
  portfolioTitle: "Shopify stores",
  portfolioAccent: "in production.",
  portfolio: [
    { title: "Aurora — Luxury Fashion DTC", cat: "Shopify Hydrogen", metric: "+34% conversion", img: SHARED_PORTFOLIO_IMGS.a },
    { title: "Lume Skincare", cat: "OS 2.0 + Recharge", metric: "+41% AOV", img: SHARED_PORTFOLIO_IMGS.b },
    { title: "Mercato Marketplace", cat: "Shopify Plus", metric: "10k+ SKUs migrated", img: SHARED_PORTFOLIO_IMGS.c },
  ],
  testimonials: [
    { q: "Migrating to a custom Hydrogen storefront cut our LCP from 4.1s to 0.8s and lifted conversion 34% in 60 days.", n: "Sophia Reeves", r: "VP Product · Aurora Studios", img: TESTIMONIAL_IMGS.a },
    { q: "ITcrista understood luxury DTC in a way our previous Shopify partner never did. Every detail felt intentional.", n: "Aisha Khan", r: "Head of Growth · Lume", img: TESTIMONIAL_IMGS.c },
    { q: "The most considered Shopify engagement we've ever run. Calm process, surgical execution.", n: "Marcus Hale", r: "Founder · Mercato", img: TESTIMONIAL_IMGS.b },
  ],
  faqs: [
    { q: "Do you work on Shopify Basic or only Plus?", a: "Both. We work across Basic, Advanced and Plus — most premium engagements run on Plus for Functions, Markets and checkout extensibility." },
    { q: "How long does a custom Shopify build take?", a: "A premium custom theme typically launches in 6–10 weeks. Full Hydrogen storefronts run 10–16 weeks depending on scope and integrations." },
    { q: "Can you migrate us from Magento / WooCommerce?", a: "Yes — we handle product, customer and order migrations, 301 redirect strategy, SEO preservation and zero-downtime cutovers." },
    { q: "Do you build private Shopify apps?", a: "Absolutely. Embedded apps, OAuth flows, custom admin UI, webhook architecture — all part of our standard playbook." },
    { q: "What does a Shopify build cost?", a: "Premium custom themes start at $6.9k, full Hydrogen storefronts from $19.9k. We provide a transparent SOW with milestone-based payments." },
  ],
  finalCta: {
    title: "Ready for a Shopify store",
    titleAccent: "that actually converts?",
    sub: "Tell us about your brand. We respond within 24 hours with a tailored proposal and a senior team built for premium DTC.",
  },
};

export default function ShopifyDevelopment() {
  return <ServicePageTemplate content={content} />;
}
