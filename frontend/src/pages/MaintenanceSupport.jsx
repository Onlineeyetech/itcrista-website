import ServicePageTemplate from "../components/ServicePageTemplate";
import {
  LifeBuoy, ShieldCheck, Activity, Gauge, RefreshCcw, Wrench, Database, Lock, Bell, BarChart3, Code2, Globe2,
} from "lucide-react";

const content = {
  slug: "maint-support",
  eyebrow: "Maintenance & Support",
  title: "Your website",
  titleAccent: "in expert hands.",
  subtitle:
    "Proactive monitoring, security, performance and growth-focused support — a senior team on call so your digital product never becomes someone else's problem.",
  heroImage:
    "/images/maintenance-team-image.png",
  stats: [
    { v: "<2h", l: "Avg. response" },
    { v: "99.99%", l: "Uptime SLA" },
    { v: "24/7", l: "Monitoring" },
  ],
  whyTitle: "Not a ticketing system.",
  whyAccent: "A real partnership.",
  whySubtitle:
    "Every retainer client gets a dedicated senior team — not a queue, not a chatbot, not a junior outsourced shift. Real humans, real ownership, real outcomes.",
  reasons: [
    { icon: Activity, t: "Proactive monitoring", d: "24/7 uptime, performance and error tracking — we fix before you notice." },
    { icon: ShieldCheck, t: "Security & patching", d: "WAF, 2FA, dependency updates, vulnerability scans on a schedule." },
    { icon: BarChart3, t: "Growth experiments", d: "Optional A/B tests, CRO tweaks and seasonal landing pages." },
    { icon: LifeBuoy, t: "Real humans", d: "Slack, email or WhatsApp. Never templated replies, never tickets." },
  ],
  includedTitle: "Everything covered,",
  includedAccent: "every month.",
  included: [
    { icon: Activity, t: "Uptime & RUM Monitoring", d: "Real-user dashboards, alerts, incident management." },
    { icon: Lock, t: "Security & Patching", d: "Core, plugin and dependency updates on a managed cadence." },
    { icon: Database, t: "Backups & DR", d: "Off-site, encrypted daily backups + tested disaster recovery." },
    { icon: Gauge, t: "Performance Care", d: "Continuous Core Web Vitals monitoring and tuning." },
    { icon: Code2, t: "Content & dev edits", d: "Monthly pool of design / dev hours for changes and new pages." },
    { icon: Bell, t: "Quarterly Strategy Reviews", d: "We bring the data + recommendations — you set the priorities." },
  ],
  steps: [
    { n: "01", t: "Audit", d: "Full health, security and performance audit." },
    { n: "02", t: "Onboard", d: "Access, runbooks, monitoring setup, SLAs defined." },
    { n: "03", t: "Stabilise", d: "Patch any tech debt or vulnerabilities found." },
    { n: "04", t: "Monitor", d: "24/7 uptime, RUM, error tracking, alerts." },
    { n: "05", t: "Improve", d: "Monthly hours for changes, growth experiments." },
    { n: "06", t: "Review", d: "Quarterly strategy review with data + roadmap." },
  ],
  stack: {
    Monitoring: ["Sentry", "Datadog", "Better Uptime", "Plausible", "RUM"],
    Security: ["Cloudflare WAF", "Sucuri", "1Password", "Dependabot", "Snyk"],
    Backups: ["AWS S3", "Backblaze B2", "WP Vault", "Encrypted snapshots"],
    Communication: ["Slack", "Linear", "Notion", "WhatsApp", "Email"],
  },
  featuresTitle: "Premium retainers,",
  featuresAccent: "premium outcomes.",
  features: [
    { t: "<2h response", d: "Senior engineer responds within two business hours." },
    { t: "99.99% uptime", d: "Multi-region, edge-cached, with active failover." },
    { t: "24/7 monitoring", d: "Always-on uptime, RUM, error and SSL alerts." },
    { t: "Monthly retainer hours", d: "Pool of design / dev hours for ongoing edits." },
    { t: "Security hardening", d: "WAF, 2FA, brute-force protection, SAST scans." },
    { t: "Performance budgets", d: "CI enforces LCP / INP regressions don't ship." },
    { t: "Daily backups", d: "Encrypted, off-site, instantly restorable." },
    { t: "Quarterly reviews", d: "Strategy session with growth & performance data." },
    { t: "Slack channel", d: "Dedicated shared Slack with your senior team." },
  ],
  portfolioTitle: "Retainer partners",
  portfolioAccent: "we look after.",
  portfolio: [
    { title: "Aurora — Continuous Care", cat: "Shopify Plus retainer", metric: "99.99% uptime", img: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=1400&q=80" },
    { title: "Nimbus — Enterprise SaaS", cat: "Next.js + Node", metric: "+22% retention", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80" },
    { title: "Maven Editorial", cat: "Headless WP", metric: "Zero downtime / 18mo", img: "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1400&q=80" },
  ],
  testimonials: [
    { q: "It feels like having an internal CTO + dev team — without the headcount. We sleep better at night.", n: "Marcus Hale", r: "Founder · Nimbus", img: "https://images.unsplash.com/photo-1764545973653-94c40d993495?auto=format&fit=crop&w=400&q=80" },
    { q: "Eighteen months in and we still get senior responses within an hour. It is night-and-day from our previous agency.", n: "Sophia Reeves", r: "VP Product · Aurora", img: "https://images.unsplash.com/photo-1638290047807-4c9d389b9aa6?auto=format&fit=crop&w=400&q=80" },
    { q: "ITcrista doesn't just fix things — they catch issues before we even know they exist. Worth every dollar.", n: "Aisha Khan", r: "Editor-in-Chief · Maven", img: "https://images.unsplash.com/photo-1767175620484-1ed37931a0d1?auto=format&fit=crop&w=400&q=80" },
  ],
  faqs: [
    { q: "Can you maintain a site you didn't originally build?", a: "Yes — most of our retainer clients came to us with sites built elsewhere. We start with a full audit and stabilisation phase." },
    { q: "What is the response SLA?", a: "Senior engineer response within 2 business hours for standard issues, under 30 minutes for critical incidents. Defined in your SOW." },
    { q: "What tech stacks do you support on retainer?", a: "Shopify, WordPress (headless and traditional), Next.js, React, Laravel, Node, custom CMS — essentially anything we'd build ourselves." },
    { q: "Are there minimum retainer terms?", a: "We work on rolling monthly engagements — no long lock-ins. Most clients stay multi-year because the partnership is working." },
    { q: "What does a retainer cost?", a: "Plans start at $1.9k/month for monitoring & maintenance and scale up to dedicated team engagements. Transparent monthly invoicing." },
  ],
  finalCta: {
    title: "Stop firefighting.",
    titleAccent: "Start partnering.",
    sub: "Tell us about your site. We'll respond within 24 hours with a free audit and a retainer proposal scoped to your actual needs.",
  },
};

export default function MaintenanceSupport() {
  return <ServicePageTemplate content={content} />;
}
