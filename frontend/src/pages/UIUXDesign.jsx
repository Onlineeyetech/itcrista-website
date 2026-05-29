import ServicePageTemplate from "../components/ServicePageTemplate";
import {
  PencilRuler, Sparkles, MousePointerClick, Layers, Eye, Smartphone, Search, BarChart3, Palette, Compass, Accessibility, Box,
} from "lucide-react";

const content = {
  slug: "uiux",
  eyebrow: "UI / UX Design",
  title: "Beautiful interfaces.",
  titleAccent: "Backed by research.",
  subtitle:
    "We design premium digital products that feel luxurious to use and convert measurably better — strategy, research, design systems and pixel-perfect interfaces, all under one roof.",
  heroImage:
    "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80",
  stats: [
    { v: "+38%", l: "Avg. CR lift" },
    { v: "180+", l: "Products designed" },
    { v: "AAA", l: "Accessibility" },
  ],
  whyTitle: "Design isn't decoration.",
  whyAccent: "It's the business model.",
  whySubtitle:
    "We've watched bad design quietly lose customers for a decade. Great UI / UX compounds — every interaction, every release, every quarter.",
  reasons: [
    { icon: BarChart3, t: "Conversion-obsessed", d: "Every flow designed and validated against real business metrics." },
    { icon: Palette, t: "Brand-grade craft", d: "Premium typography, motion and color systems — never generic." },
    { icon: Layers, t: "Systemised", d: "Tokens, components, documentation — designs your team can ship on." },
    { icon: Accessibility, t: "Accessible by default", d: "WCAG-compliant patterns, never an afterthought." },
  ],
  includedTitle: "Everything design,",
  includedAccent: "end-to-end.",
  included: [
    { icon: Compass, t: "Discovery & Research", d: "Stakeholder interviews, user research, competitor teardowns." },
    { icon: PencilRuler, t: "Wireframes & IA", d: "Information architecture and low-fi flows before we touch pixels." },
    { icon: Palette, t: "Visual Design", d: "Premium UI for marketing sites, products and SaaS apps." },
    { icon: Box, t: "Design Systems", d: "Tokens, components and documentation in Figma / Storybook." },
    { icon: MousePointerClick, t: "Prototyping & Motion", d: "High-fidelity interactive prototypes with micro-interactions." },
    { icon: Eye, t: "Usability & A/B Testing", d: "Validated designs through real testing — not opinions." },
  ],
  steps: [
    { n: "01", t: "Discover", d: "Workshops, interviews, audit, success metrics." },
    { n: "02", t: "Architect", d: "User flows, sitemaps, content structure." },
    { n: "03", t: "Wireframe", d: "Low-fi flows reviewed with stakeholders." },
    { n: "04", t: "Design", d: "Premium UI, motion, and design system." },
    { n: "05", t: "Prototype", d: "Interactive prototypes for usability testing." },
    { n: "06", t: "Handoff", d: "Tokens, specs, Storybook, dev pairing." },
  ],
  stack: {
    Design: ["Figma", "FigJam", "Framer", "Spline", "Rive"],
    Systems: ["Tokens Studio", "Style Dictionary", "Storybook", "Chromatic"],
    Research: ["Maze", "Dovetail", "Lookback", "Hotjar"],
    Motion: ["Framer Motion", "Lottie", "Rive", "GSAP"],
  },
  featuresTitle: "Design deliverables",
  featuresAccent: "you can build on.",
  features: [
    { t: "Premium UI kits", d: "Component libraries scoped to your brand." },
    { t: "Design tokens", d: "Color, type, spacing — exported to code." },
    { t: "Interactive prototypes", d: "Realistic motion + state for usability testing." },
    { t: "Responsive layouts", d: "Mobile, tablet, laptop and desktop covered." },
    { t: "Accessibility audit", d: "WCAG AA / AAA contrast, keyboard, screen reader." },
    { t: "Design system docs", d: "Storybook / Zeroheight ready to ship." },
    { t: "Dev handoff", d: "Annotated specs + pairing sessions with engineering." },
    { t: "Motion library", d: "Branded micro-interactions and transitions." },
    { t: "Brand expression", d: "Optional brand identity & guidelines layer." },
  ],
  portfolioTitle: "Design work",
  portfolioAccent: "we're proud of.",
  portfolio: [
    { title: "Nimbus Analytics", cat: "SaaS product design", metric: "+22% retention", img: "https://static.prod-images.emergentagent.com/jobs/e5edbea0-9077-4246-8082-58f6c769b341/images/eb5d50e19c5d7e9fd61a24cb80740ba3ebac2a776fad94143524b7d0d1bd5425.png" },
    { title: "Aurora Studios", cat: "DTC brand & UI", metric: "+34% conversion", img: "https://static.prod-images.emergentagent.com/jobs/e5edbea0-9077-4246-8082-58f6c769b341/images/5fb7e3c4e2151710b94bd958faff69a88e02e9e3b247fa83ef1d98152a9cab97.png" },
    { title: "Maven Brand System", cat: "Design system + identity", metric: "Industry award", img: "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1400&q=80" },
  ],
  testimonials: [
    { q: "ITcrista's design team functions like a senior product partner. Our UX matures faster with them than it did with our in-house designers.", n: "Marcus Hale", r: "Founder · Nimbus", img: "https://images.unsplash.com/photo-1764545973653-94c40d993495?auto=format&fit=crop&w=400&q=80" },
    { q: "Pixel-perfect, considered, and aligned with our business goals at every step. We finally have a brand that feels premium.", n: "Sophia Reeves", r: "VP Product · Aurora", img: "https://images.unsplash.com/photo-1638290047807-4c9d389b9aa6?auto=format&fit=crop&w=400&q=80" },
    { q: "Design system + Storybook handoff was the smoothest dev-design partnership we have ever experienced.", n: "Aisha Khan", r: "Head of Engineering · Maven", img: "https://images.unsplash.com/photo-1767175620484-1ed37931a0d1?auto=format&fit=crop&w=400&q=80" },
  ],
  faqs: [
    { q: "Do you only design or also build?", a: "Both. We can hand off polished design files for your engineering team, or build the whole product end-to-end with our in-house dev team." },
    { q: "Do you work in Figma?", a: "Figma is our primary tool. We also work in FigJam, Framer, Spline and Rive for motion and 3D as needed." },
    { q: "Do you create design systems?", a: "Yes — tokens, components, documentation (Storybook / Zeroheight) and dev-handoff are part of most engagements." },
    { q: "How long does a typical UI/UX engagement take?", a: "Marketing site UI typically 4–6 weeks. SaaS app design 6–12 weeks. Full design system engagements 8–14 weeks." },
    { q: "What does it cost?", a: "Marketing site UI starts at $4.9k. SaaS product design from $9.9k. Design systems from $14.9k. Transparent SOW with milestone-based payments." },
  ],
  finalCta: {
    title: "Ready for design",
    titleAccent: "that actually performs?",
    sub: "Tell us about your product. We'll respond within 24 hours with a tailored proposal and a senior design lead matched to your engagement.",
  },
};

export default function UIUXDesign() {
  return <ServicePageTemplate content={content} />;
}
