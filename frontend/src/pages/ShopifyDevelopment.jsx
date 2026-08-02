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
    "/images/shopifylogo.png",
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
    { title: "Veaves — Ecommerce", cat: "Shopify Hydrogen", metric: "+34% conversion", img: "/images/veavesmockup.png" },
    { title: "Bestink", cat: "Custom + Shopify", metric: "+41% AOV", img: "/images/bestink.png" },
    { title: "Loop — Revenue Automation", cat: "Shopify Custom Base", metric: "AI Automations", img: "/images/loopagency.svg" },
  ],
  testimonials: [
    { q: "Migrating to a custom Hydrogen storefront cut our LCP from 4.1s to 0.8s and lifted conversion 34% in 60 days.", n: "Sophia Reeves", r: "VP Product · Aurora Studios", img: TESTIMONIAL_IMGS.a },
    { q: "ITcrista understood luxury DTC in a way our previous Shopify partner never did. Every detail felt intentional.", n: "Aisha Khan", r: "Head of Growth · Lume", img: TESTIMONIAL_IMGS.c },
    { q: "The most considered Shopify engagement we've ever run. Calm process, surgical execution.", n: "Marcus Hale", r: "Founder · Mercato", img: TESTIMONIAL_IMGS.b },
  ],
  faqs: [
  {
    q: "What are Shopify development services?",
    a: "Shopify development services include custom Shopify store development, theme customization, app integration, performance optimization, Shopify SEO, store migration, and ongoing maintenance to help businesses build and scale successful ecommerce stores."
  },
  {
    q: "Why should I choose Shopify for my ecommerce business?",
    a: "Shopify is one of the world's leading ecommerce platforms, offering secure hosting, scalability, easy store management, payment integrations, and powerful tools for selling products online."
  },
  {
    q: "How much does Shopify website development cost?",
    a: "Shopify development costs depend on store complexity, custom features, theme design, third-party integrations, and business requirements. Each Shopify project is tailored to specific business goals."
  },
  {
    q: "Do you provide custom Shopify store development?",
    a: "Yes. We build custom Shopify stores designed for performance, SEO, user experience, and conversions. Every store is tailored to match your brand and business requirements."
  },
  {
    q: "Can you customize existing Shopify themes?",
    a: "Yes. We provide Shopify theme customization services, including design improvements, custom sections, advanced functionality, performance optimization, and conversion-focused enhancements."
  },
  {
    q: "Do you offer Shopify SEO services?",
    a: "Yes. Our Shopify SEO services include technical SEO, schema markup, site speed optimization, collection optimization, product page optimization, and search engine visibility improvements."
  },
  {
    q: "Can you migrate my website to Shopify?",
    a: "Yes. We provide Shopify migration services from WooCommerce, WordPress, Magento, Wix, BigCommerce, and other ecommerce platforms while preserving data, SEO value, and store functionality."
  },
  {
    q: "Will my Shopify store be mobile-friendly?",
    a: "Absolutely. Every Shopify store we build is fully responsive and optimized for desktop, tablet, and mobile devices to deliver the best shopping experience."
  },
  {
    q: "Do you integrate third-party apps and payment gateways?",
    a: "Yes. We integrate Shopify apps, payment gateways, shipping solutions, CRM systems, marketing tools, inventory management systems, and custom business workflows."
  },
  {
    q: "How can Shopify development improve conversions?",
    a: "Professional Shopify development improves user experience, site speed, navigation, product presentation, checkout flow, and overall customer journey, helping increase conversion rates and sales."
  },
  {
    q: "Do you provide Shopify maintenance and support?",
    a: "Yes. We offer ongoing Shopify maintenance, bug fixes, speed optimization, store updates, technical support, and performance monitoring to keep your store running smoothly."
  },
  {
    q: "Why choose ITcrista for Shopify development?",
    a: "ITcrista specializes in custom Shopify development, Shopify theme customization, Shopify SEO, speed optimization, ecommerce growth strategies, and long-term Shopify support for businesses worldwide."
  }
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
