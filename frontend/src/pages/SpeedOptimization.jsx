import ServicePageTemplate from "../components/ServicePageTemplate";
import {
  Gauge, Zap, ShieldCheck, Search, Image as ImageIcon, Server, Code2, Layers, BarChart3, Smartphone, Globe2, Wrench,
} from "lucide-react";

const content = {
  slug: "speed-opt",
  eyebrow: "Website Speed Optimization",
  title: "Make every page load",
  titleAccent: "feel instant.",
  subtitle:
    "We audit, re-architect and ship sub-1s real-world performance across React, Next.js, WordPress, Shopify and custom stacks — measurable, repeatable, durable.",
  heroImage:
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
  stats: [
    { v: "0.8s", l: "P75 LCP" },
    { v: "98+", l: "Lighthouse" },
    { v: "+28%", l: "Conv. lift" },
  ],
  whyTitle: "Performance isn't a feature.",
  whyAccent: "It's the moat.",
  whySubtitle:
    "Every 100ms of speed lifts conversion, search rankings and brand perception. We treat performance like a product surface, not a fix-it-later task.",
  reasons: [
    { icon: Gauge, t: "Core Web Vitals first", d: "Perfect LCP, INP and CLS — measured on real users, not lab tests." },
    { icon: BarChart3, t: "Revenue-linked", d: "We tie every improvement to conversion, search and engagement." },
    { icon: Layers, t: "Stack-agnostic", d: "WordPress, Shopify, Next.js, Laravel, Webflow — we've shipped them all." },
    { icon: ShieldCheck, t: "Durable wins", d: "Architectural fixes, not magic-plugin patches. Performance that lasts." },
  ],
  includedTitle: "Everything we do,",
  includedAccent: "transparently.",
  included: [
    { icon: Search, t: "Performance Audit", d: "End-to-end report on LCP, INP, CLS, TTFB and revenue impact." },
    { icon: Zap, t: "Asset & Image Strategy", d: "AVIF / WebP, responsive sizing, edge delivery, lazy patterns." },
    { icon: Code2, t: "Code-splitting & RSC", d: "Route-level splitting, server components, hydration audits." },
    { icon: Server, t: "Edge / CDN Strategy", d: "Cloudflare, Vercel, Fastly — caching, ISR, on-demand revalidation." },
    { icon: Smartphone, t: "Mobile-first tuning", d: "Real-device testing on mid-tier mobile, not just desktop." },
    { icon: Wrench, t: "Ongoing performance care", d: "Monthly RUM monitoring + regression budgets in CI." },
  ],
  steps: [
    { n: "01", t: "Audit", d: "Deep performance, RUM and revenue audit." },
    { n: "02", t: "Roadmap", d: "Prioritised fix list with expected impact." },
    { n: "03", t: "Quick wins", d: "Ship the highest-ROI changes first." },
    { n: "04", t: "Architecture", d: "Edge, RSC, image, hydration overhauls." },
    { n: "05", t: "Validate", d: "Field RUM data, A/B compare, lock in gains." },
    { n: "06", t: "Monitor", d: "Budgets in CI, dashboards, monthly reports." },
  ],
  stack: {
    Measurement: ["WebPageTest", "Lighthouse CI", "Chrome UX Report", "SpeedCurve"],
    Delivery: ["Cloudflare", "Vercel Edge", "Fastly", "Bunny CDN", "Image CDN"],
    Frameworks: ["Shopify", "Next.js", "Remix", "Astro", "Hydrogen", "WordPress"],
    Monitoring: ["Sentry", "Plausible", "RUM", "Datadog", "Calibre"],
  },
  featuresTitle: "Performance wins",
  featuresAccent: "that move metrics.",
  features: [
    { t: "Sub-1s LCP", d: "Edge rendering, smart prefetching, image strategy." },
    { t: "Image pipeline", d: "AVIF/WebP, responsive sizes, lazy + priority strategy." },
    { t: "Code splitting", d: "Route-level + component-level for instant interaction." },
    { t: "Server rendering", d: "SSR / RSC / ISR — the right model for each route." },
    { t: "Font strategy", d: "Self-host, subset, preload, swap — zero FOUT." },
    { t: "Third-party tax", d: "Audit & defer analytics, pixels and chat widgets." },
    { t: "Cache architecture", d: "Edge + browser + CDN cohesive caching plan." },
    { t: "INP & responsiveness", d: "Main thread audit, deferred work, React tuning." },
    { t: "CI performance budgets", d: "Lighthouse CI and bundle budgets per PR." },
  ],
  portfolioTitle: "Speed wins",
  portfolioAccent: "we measured.",
  portfolio: [
    { title: "Aurora Studios", cat: "From 4.1s → 0.8s LCP", metric: "+34% conversion", img: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=1400&q=80" },
    { title: "Nimbus Analytics", cat: "INP 380ms → 90ms", metric: "+22% retention", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80" },
    { title: "Mercato", cat: "TTFB 1.6s → 220ms", metric: "+18% revenue", img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=80" },
  ],
  testimonials: [
    { q: "ITcrista shipped a 4-week sprint that took our P75 LCP from 4.1s to 0.8s. Conversion lifted 34% the next month.", n: "Sophia Reeves", r: "VP Product · Aurora", img: "https://images.unsplash.com/photo-1638290047807-4c9d389b9aa6?auto=format&fit=crop&w=400&q=80" },
    { q: "We tried plugins and 'performance experts' for a year. ITcrista actually fixed the architecture in a month.", n: "Marcus Hale", r: "Founder · Nimbus", img: "https://images.unsplash.com/photo-1764545973653-94c40d993495?auto=format&fit=crop&w=400&q=80" },
    { q: "Mobile checkout went from sluggish to instant. Bounce dropped 28% on mobile traffic in three weeks.", n: "Aisha Khan", r: "Head of Growth · Mercato", img: "https://images.unsplash.com/photo-1767175620484-1ed37931a0d1?auto=format&fit=crop&w=400&q=80" },
  ],
  faqs: [
    { q: "What stacks do you support?", a: "Next.js, React, WordPress, Shopify (Liquid + Hydrogen), Webflow, Laravel, Astro and custom Node — we've optimised all of them." },
    { q: "How quickly can we see results?", a: "Quick-win sprint typically ships in 2 weeks with measurable LCP / INP improvements. Architectural overhauls run 4–8 weeks." },
    { q: "Do you guarantee Core Web Vitals improvements?", a: "Yes. Our SOWs include explicit field LCP / INP targets and we don't sign off until they're hit on real user data (RUM)." },
    { q: "Do you handle ongoing monitoring?", a: "Optional retainer includes RUM dashboards, weekly reports and performance budgets enforced in CI so regressions don't ship." },
    { q: "What does a speed engagement cost?", a: "Quick-win audits start at $2.5k. Full optimisation engagements run $7.9k–$24k depending on stack complexity and traffic scale." },
  ],
  finalCta: {
    title: "Want a website",
    titleAccent: "that feels instant?",
    sub: "Send us your URL. We'll respond within 24 hours with a free 5-minute Core Web Vitals teardown and a tailored proposal.",
  },
};

export default function SpeedOptimization() {
  return <ServicePageTemplate content={content} />;
}
