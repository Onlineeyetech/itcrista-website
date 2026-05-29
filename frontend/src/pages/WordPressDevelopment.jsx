import ServicePageTemplate from "../components/ServicePageTemplate";
import {
  FileCode2, Palette, Layers, Zap, Globe2, Search, ShieldCheck, Wrench, Database, Rocket, Box, Smartphone,
} from "lucide-react";

const content = {
  slug: "wp-dev",
  eyebrow: "WordPress Development",
  title: "Custom WordPress sites.",
  titleAccent: "Engineered like SaaS.",
  subtitle:
    "Headless and traditional WordPress builds for content-heavy brands, enterprises and editorial teams — premium UX, surgical performance, calm editor experience.",
  heroImage:
    "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1200&q=80",
  stats: [
    { v: "0.9s", l: "Avg. LCP" },
    { v: "98+", l: "Lighthouse" },
    { v: "200+", l: "Sites shipped" },
  ],
  whyTitle: "More than a CMS.",
  whyAccent: "A premium publishing engine.",
  whySubtitle:
    "We treat WordPress as a serious product platform — engineered for speed, content velocity and editorial calm, never as a page builder.",
  reasons: [
    { icon: Zap, t: "Fast by default", d: "Custom themes, edge caching, image strategy — sub-1s real-world LCP." },
    { icon: Layers, t: "Headless ready", d: "Decoupled front-ends in Next.js with WordPress as the API." },
    { icon: Palette, t: "Editor-friendly UI", d: "Gutenberg + ACF blocks tuned so editors actually enjoy the CMS." },
    { icon: ShieldCheck, t: "Hardened security", d: "WAF, 2FA, dependency hygiene, daily backups — enterprise-grade." },
  ],
  includedTitle: "Everything your WordPress",
  includedAccent: "should be.",
  included: [
    { icon: Palette, t: "Custom Theme", d: "Bespoke design and templates — never a marketplace theme." },
    { icon: Layers, t: "Headless Architecture", d: "Next.js / Astro front-end backed by WP REST or WPGraphQL." },
    { icon: Box, t: "Custom Blocks (ACF / Gutenberg)", d: "Editor-friendly building blocks for your team." },
    { icon: Globe2, t: "Multilingual (WPML / Polylang)", d: "i18n-ready content modelling and SEO." },
    { icon: Search, t: "SEO Architecture", d: "Yoast / RankMath wired with semantic templates and schema." },
    { icon: Wrench, t: "Maintenance Retainer", d: "Updates, monitoring, backups and performance care." },
  ],
  steps: [
    { n: "01", t: "Discovery", d: "Editorial workflow audit + content modelling." },
    { n: "02", t: "Design", d: "Premium UI/UX, block library design." },
    { n: "03", t: "Build", d: "Theme, custom blocks, plugins, integrations." },
    { n: "04", t: "Migrate", d: "Content migration + 301 strategy." },
    { n: "05", t: "Launch", d: "Staging, QA, accessibility, production cutover." },
    { n: "06", t: "Support", d: "Ongoing maintenance, performance and growth." },
  ],
  stack: {
    Core: ["WordPress", "PHP 8", "MySQL", "MariaDB"],
    Frontend: ["Next.js", "Astro", "Gutenberg", "ACF Pro", "Tailwind"],
    APIs: ["WPGraphQL", "REST API", "Custom Endpoints"],
    Tooling: ["Cloudflare", "Kinsta", "WP Engine", "GitHub Actions", "Sentry"],
  },
  featuresTitle: "Editor-first features",
  featuresAccent: "that scale content.",
  features: [
    { t: "Sub-1s LCP", d: "Edge cache + image strategy on every template." },
    { t: "Headless ready", d: "Decouple your front-end whenever you're ready." },
    { t: "Custom Gutenberg blocks", d: "Drag-and-drop building blocks for your editors." },
    { t: "Multilingual", d: "WPML / Polylang with locale-aware SEO." },
    { t: "Schema & SEO", d: "Yoast / RankMath wired with structured data." },
    { t: "Hardened security", d: "WAF, 2FA, login throttling, audit logging." },
    { t: "Daily backups", d: "Off-site, encrypted, instantly restorable." },
    { t: "Staging environments", d: "Branch-based previews for every change." },
    { t: "Accessibility", d: "WCAG-compliant templates and components." },
  ],
  portfolioTitle: "WordPress sites",
  portfolioAccent: "shipped recently.",
  portfolio: [
    { title: "Maven Editorial", cat: "Headless Next.js + WP", metric: "+62% engagement", img: "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1400&q=80" },
    { title: "Orbit Studio", cat: "Custom Gutenberg blocks", metric: "0.7s LCP", img: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1400&q=80" },
    { title: "Northwind Journal", cat: "WPGraphQL + Astro", metric: "98 Lighthouse", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80" },
  ],
  testimonials: [
    { q: "Our editors finally love our CMS. ITcrista built a Gutenberg system that feels designed instead of duct-taped.", n: "Aisha Khan", r: "Editor-in-Chief · Maven", img: "https://images.unsplash.com/photo-1767175620484-1ed37931a0d1?auto=format&fit=crop&w=400&q=80" },
    { q: "Headless WordPress with Next.js dropped our LCP from 4s to under one. Search rankings climbed within weeks.", n: "Marcus Hale", r: "Founder · Orbit Studio", img: "https://images.unsplash.com/photo-1764545973653-94c40d993495?auto=format&fit=crop&w=400&q=80" },
    { q: "The most considered WordPress engagement we've run in a decade. Calm process, surgical execution.", n: "Sophia Reeves", r: "VP Content · Northwind", img: "https://images.unsplash.com/photo-1638290047807-4c9d389b9aa6?auto=format&fit=crop&w=400&q=80" },
  ],
  faqs: [
    { q: "Headless or traditional WordPress?", a: "Both. We recommend headless for content-heavy or performance-critical brands and traditional for marketing/editorial teams who want simplicity." },
    { q: "Can you migrate from another CMS?", a: "Yes — Webflow, Squarespace, Drupal, custom CMS or older WordPress builds. We handle content modelling, 301s and zero-downtime cutovers." },
    { q: "Do you build custom plugins?", a: "Absolutely. From custom REST endpoints to admin UI, payment integrations and proprietary workflow plugins — all built to WordPress coding standards." },
    { q: "What about hosting?", a: "We deploy on Kinsta, WP Engine or a custom Cloudflare + container stack depending on scale. We can manage hosting as part of our retainer." },
    { q: "What does a custom WordPress build cost?", a: "Premium custom themes start at $5.9k, headless Next.js + WP builds from $14.9k. Transparent SOWs with milestone-based payments." },
  ],
  finalCta: {
    title: "Ready for a WordPress site",
    titleAccent: "your editors will love?",
    sub: "Tell us about your content team. We respond within 24 hours with a tailored proposal and a senior team built for WordPress at scale.",
  },
};

export default function WordPressDevelopment() {
  return <ServicePageTemplate content={content} />;
}
