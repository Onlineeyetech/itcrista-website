import Blog from "../components/sections/Blog";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  ArrowLeft,
  Sparkles,
  Code2,
  Layers,
  Gauge,
  ShieldCheck,
  Search,
  Smartphone,
  PencilRuler,
  Database,
  Globe2,
  Rocket,
  Boxes,
  Wrench,
  Quote,
  Star,
  ChevronLeft,
  ChevronRight,
  Plus,
  Minus,
  Check,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

/* -------------------------------------------------------------------------- */
/*                                 Section 1                                  */
/* -------------------------------------------------------------------------- */
function Hero() {
  return (
    <section
      data-testid="cwd-hero"
      className="relative pt-32 md:pt-40 pb-24 md:pb-28 overflow-hidden hero-glow"
    >
      <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm text-white/55 hover:text-white transition mb-6"
          >
            <ArrowLeft className="w-4 h-4" /> All services
          </Link>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] text-xs uppercase tracking-[0.25em] text-white/70">
            <Sparkles className="w-3.5 h-3.5 text-[#06B6D4]" />
            Custom Website Development
          </div>
          <h1 className="font-display font-black tracking-tighter text-white mt-6 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.02]">
            Bespoke websites.
            <br />
            Built like <span className="text-gradient">luxury software.</span>
          </h1>
          <p className="mt-6 text-base md:text-lg text-white/65 max-w-xl leading-relaxed">
           Custom Website Development for Businesses That Need More Than Templates
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              to="/contact"
              data-testid="cwd-hero-cta-primary"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white text-[#071120] font-semibold hover:bg-[#06B6D4] hover:text-white transition-colors btn-shine"
            >
              Start your project <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              to="/portfolio"
              data-testid="cwd-hero-cta-secondary"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-white/15 text-white/90 font-semibold hover:bg-white/5 transition"
            >
              View case studies
            </Link>
          </div>
          <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
            {[
              { v: "0.8s", l: "Avg. LCP" },
              { v: "98+", l: "Lighthouse" },
              { v: "+34%", l: "Conversion" },
            ].map((m) => (
              <div key={m.l}>
                <div className="font-display font-black text-2xl md:text-3xl text-white">{m.v}</div>
                <div className="text-[11px] uppercase tracking-[0.2em] text-white/45 mt-1.5">{m.l}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-5">
          <div className="relative max-w-md mx-auto aspect-square">
            <div className="absolute inset-0 bg-gradient-to-br from-[#06B6D4]/30 via-[#3B82F6]/20 to-[#7C3AED]/30 rounded-[2.5rem] blur-3xl" />
            <div className="relative rounded-[2rem] overflow-hidden border border-white/10 bg-[#0D1B2A] h-full">
              <img
                src="https://static.prod-images.emergentagent.com/jobs/e5edbea0-9077-4246-8082-58f6c769b341/images/e1591ae0a0d59c159f91152eedf231aced637a4db3c9c40f74daefeecdbc6bda.png"
                alt="Custom development"
                className="absolute inset-0 w-full h-full object-cover animate-floaty"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071120] via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                                 Section 2                                  */
/* -------------------------------------------------------------------------- */
const reasons = [
  { icon: Gauge, t: "Built for performance", d: "Sub-1s load times, perfect Core Web Vitals — engineered, not bolted on." },
  { icon: PencilRuler, t: "Pixel-perfect design", d: "Every spacing, color and motion choice considered. No templates, ever." },
  { icon: ShieldCheck, t: "Enterprise-grade security", d: "Hardened stacks, dependency hygiene, zero-trust infra defaults." },
  { icon: Search, t: "Search-friendly by default", d: "SSR, schema markup, semantic HTML — built to rank from day one." },
];

function WhyChoose() {
  return (
    <section data-testid="cwd-why" className="relative py-8 md:py-16 bg-[#0A1525] border-y border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-10 mb-14">
          <div className="lg:col-span-7">
            <p className="text-xs uppercase tracking-[0.3em] text-[#06B6D4] mb-4">Why custom</p>
            <h2 className="font-display font-black tracking-tighter text-white text-4xl sm:text-5xl lg:text-6xl leading-[1.02]">
              Themes scale teams.
              <br />
              <span className="text-gradient">Custom scales businesses.</span>
            </h2>
          </div>
          <p className="lg:col-span-5 self-end text-white/60 leading-relaxed">
            A custom website is not a luxury. For ambitious brands, it is the highest-leverage upgrade you can make to your speed, brand and conversion.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reasons.map((r, i) => {
            const Ic = r.icon;
            return (
              <motion.div
                key={r.t}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                data-testid={`cwd-why-${i}`}
                className="glass rounded-2xl p-7 hover:border-[#06B6D4]/40 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#06B6D4]/20 to-[#7C3AED]/20 border border-white/10 grid place-items-center text-[#06B6D4]">
                  <Ic className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-xl text-white mt-5 tracking-tight">{r.t}</h3>
                <p className="text-sm text-white/55 mt-2 leading-relaxed">{r.d}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                                 Section 3                                  */
/* -------------------------------------------------------------------------- */
const included = [
  { icon: PencilRuler, t: "Custom UI / UX Design", d: "A bespoke design system tailored to your brand and audience." },
  { icon: Code2, t: "Hand-crafted Frontend", d: "Semantic, accessible code built with React, Next.js or our luxe stack." },
  { icon: Database, t: "Backend & APIs", d: "Robust Node, Laravel or custom services powering your business logic." },
  { icon: Smartphone, t: "Responsive Engineering", d: "Native-app quality across mobile, tablet, laptop and 4K desktop." },
  { icon: Search, t: "SEO Architecture", d: "SSR, sitemaps, structured data, content modelling — wired from day one." },
  { icon: Wrench, t: "Maintenance & Care", d: "Monitoring, updates and performance care after launch — optional retainer." },
];

function ServicesIncluded() {
  return (
    <section data-testid="cwd-included" className="relative py-8 md:py-16 bg-[#071120] overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-[#06B6D4] mb-4">What's included</p>
          <h2 className="font-display font-black tracking-tighter text-white text-4xl sm:text-5xl lg:text-6xl leading-[1.02]">
            Everything you need, <span className="text-gradient">end-to-end.</span>
             </h2>
      
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {included.map((s, i) => {
            const Ic = s.icon;
            return (
              <motion.div
                key={s.t}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.06 }}
                data-testid={`cwd-included-${i}`}
                className="beam-border group rounded-2xl border border-white/10 bg-white/[0.03] p-7 hover:bg-white/[0.05] transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#06B6D4]/20 to-[#7C3AED]/20 border border-white/10 grid place-items-center text-[#06B6D4]">
                    <Ic className="w-5 h-5" />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-white/30 group-hover:text-[#06B6D4] group-hover:rotate-45 transition-all" />
                </div>
                <h3 className="font-display text-xl font-bold text-white mt-6 leading-snug">{s.t}</h3>
                <p className="text-sm text-white/60 mt-3 leading-relaxed">{s.d}</p>
              </motion.div>
            );
          })}
        </div>
        <p className="text-sm text-white/60 mt-3 leading-relaxed">Industries We Serve - Ecommerce • FMCG • SaaS • Sports Brands • Marketing Agencies • Automation Companies</p>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                                 Section 4                                  */
/* -------------------------------------------------------------------------- */
const steps = [
  { n: "01", t: "Discovery", d: "Strategy workshops, audit, blueprint." },
  { n: "02", t: "Design", d: "Premium UI/UX, prototypes, design system." },
  { n: "03", t: "Development", d: "React, Next.js, Node, Laravel engineering." },
  { n: "04", t: "Testing", d: "QA, cross-device, accessibility, vitals." },
  { n: "05", t: "Launch", d: "Zero-downtime deploys + observability." },
  { n: "06", t: "Support", d: "Ongoing care, monitoring & growth." },
];

function Process() {
  return (
    <section data-testid="cwd-process" className="relative py-8 md:py-16 bg-[#0A1525] border-y border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-10 mb-14">
          <div className="lg:col-span-7">
            <p className="text-xs uppercase tracking-[0.3em] text-[#06B6D4] mb-4">Process</p>
            <h2 className="font-display font-black tracking-tighter text-white text-4xl sm:text-5xl lg:text-6xl leading-[1.02]">
              A calm 6-step <span className="text-gradient">delivery system.</span>
            </h2>
          </div>
          <p className="lg:col-span-5 self-end text-white/60 leading-relaxed">
            Predictable timelines. Transparent communication. Senior craft at every milestone.
          </p>
        </div>

        {/* Desktop stepper */}
        <div className="hidden md:grid grid-cols-3 lg:grid-cols-6 gap-px bg-white/10 rounded-3xl overflow-hidden border border-white/10">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              data-testid={`cwd-step-${s.n}`}
              className="bg-[#0A1525] p-6 lg:p-7 hover:bg-[#0E1B30] transition-colors"
            >
              <div className="font-display text-5xl font-black text-white/15">{s.n}</div>
              <h3 className="font-display font-bold text-lg text-white mt-3 tracking-tight">{s.t}</h3>
              <p className="text-sm text-white/55 mt-2 leading-relaxed">{s.d}</p>
            </motion.div>
          ))}
        </div>

        {/* Mobile slider */}
        <div className="md:hidden -mx-6 px-6 flex gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar" data-testid="cwd-process-mobile-slider">
          {steps.map((s) => (
            <div key={s.n} className="snap-start min-w-[78%] glass rounded-2xl p-6">
              <div className="font-display text-4xl font-black text-white/15">{s.n}</div>
              <h3 className="font-display font-bold text-lg text-white mt-3">{s.t}</h3>
              <p className="text-sm text-white/55 mt-2">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                                 Section 5                                  */
/* -------------------------------------------------------------------------- */
const stack = {
  Frontend: ["React", "Next.js", "TypeScript", "Tailwind", "Framer Motion"],
  Backend: ["Node.js", "Laravel", "PostgreSQL", "MongoDB", "Redis"],
  Infra: ["Vercel", "AWS", "Cloudflare", "Docker", "GitHub Actions"],
  Tooling: ["Figma", "Storybook", "Sentry", "Plausible", "Linear"],
};

function TechStack() {
  return (
    <section data-testid="cwd-stack" className="relative py-8 md:py-16 bg-[#071120] overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-[#06B6D4] mb-4">Stack</p>
          <h2 className="font-display font-black tracking-tighter text-white text-4xl sm:text-5xl lg:text-6xl leading-[1.02]">
            The stack <span className="text-gradient">we trust.</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {Object.entries(stack).map(([group, items], i) => (
            <motion.div
              key={group}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              data-testid={`cwd-stack-${group.toLowerCase()}`}
              className="glass rounded-2xl p-7"
            >
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-[#06B6D4]">
                <Boxes className="w-3.5 h-3.5" /> {group}
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {items.map((it) => (
                  <span
                    key={it}
                    className="px-3 py-1.5 rounded-full text-xs font-medium text-white/80 border border-white/10 bg-white/[0.03] hover:border-[#06B6D4]/40 transition"
                  >
                    {it}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                                 Section 6                                  */
/* -------------------------------------------------------------------------- */
const features = [
  { t: "Sub-1s LCP", d: "Edge rendering, asset strategy and code-splitting baked in." },
  { t: "Mobile-first UI", d: "Native-app quality across every breakpoint and device class." },
  { t: "Headless CMS", d: "Editor-friendly content modelling — Sanity, Strapi or custom." },
  { t: "Multi-language", d: "i18n routing, locale-aware content and SEO from day one." },
  { t: "Analytics & A/B", d: "Plausible / GA4 / Mixpanel + experiments without engineering drag." },
  { t: "WCAG-compliant", d: "Accessibility-first patterns — semantic, keyboard, screen-reader." },
  { t: "Schema & SEO", d: "Structured data, sitemaps, canonical strategy and meta system." },
  { t: "CI / CD", d: "Preview deploys per PR, zero-downtime production releases." },
  { t: "Observability", d: "Sentry, real-user-monitoring and uptime alerting from day one." },
];

function FeaturesGrid() {
  return (
    <section data-testid="cwd-features" className="relative py-8 md:py-16 bg-[#0A1525] border-y border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-[#06B6D4] mb-4">Website features</p>
          <h2 className="font-display font-black tracking-tighter text-white text-4xl sm:text-5xl lg:text-6xl leading-[1.02]">
            Built-in features <span className="text-gradient">that compound.</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 rounded-3xl overflow-hidden border border-white/10">
          {features.map((f, i) => (
            <motion.div
              key={f.t}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.05 }}
              data-testid={`cwd-feature-${i}`}
              className="bg-[#0A1525] p-7 hover:bg-[#0E1B30] transition-colors"
            >
              <div className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#06B6D4]/10 border border-[#06B6D4]/30 text-[#06B6D4]">
                <Check className="w-4 h-4" />
              </div>
              <h3 className="font-display font-bold text-lg text-white mt-4 tracking-tight">{f.t}</h3>
              <p className="text-sm text-white/55 mt-2 leading-relaxed">{f.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                                 Section 7                                  */
/* -------------------------------------------------------------------------- */
const portfolio = [
  {
    title: "Crescent Group",
    cat: "Custom CMS",
    metric: "+62% engagement",
    img: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Nimbus Analytics",
    cat: "Next.js · Node",
    metric: "0.7s LCP",
    img: "https://static.prod-images.emergentagent.com/jobs/e5edbea0-9077-4246-8082-58f6c769b341/images/eb5d50e19c5d7e9fd61a24cb80740ba3ebac2a776fad94143524b7d0d1bd5425.png",
  },
  {
    title: "Maven Agency",
    cat: "Marketing site",
    metric: "Awwwards mention",
    img: "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1400&q=80",
  },
];

function PortfolioShowcase() {
  return (
    <section data-testid="cwd-portfolio" className="relative py-8 md:py-16 bg-[#071120] overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#06B6D4] mb-4">Recent work</p>
            <h2 className="font-display font-black tracking-tighter text-white text-4xl sm:text-5xl lg:text-6xl leading-[1.02]">
              Custom websites <span className="text-gradient">in production.</span>
            </h2>
          </div>
          <Link
            to="/portfolio"
            data-testid="cwd-portfolio-view-all"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/15 text-white/85 font-semibold hover:bg-white/5 transition self-start md:self-auto"
          >
            View all <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {portfolio.map((p, i) => (
            <motion.a
              key={p.title}
              href="#"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              data-testid={`cwd-portfolio-card-${i}`}
              className="group relative rounded-2xl overflow-hidden border border-white/10 bg-[#0D1B2A] aspect-[4/5] block"
            >
              <img
                src={p.img}
                alt={p.title}
                className="absolute inset-0 w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071120] via-[#071120]/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <div className="text-[11px] uppercase tracking-[0.22em] text-[#06B6D4]">{p.cat}</div>
                <h3 className="font-display font-bold text-2xl text-white mt-2 tracking-tight">{p.title}</h3>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm text-white/65">{p.metric}</span>
                  <span className="w-10 h-10 rounded-full bg-white/10 grid place-items-center group-hover:bg-[#06B6D4] transition">
                    <ArrowUpRight className="w-4 h-4 text-white group-hover:rotate-45 transition-transform" />
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                                 Section 8                                  */
/* -------------------------------------------------------------------------- */
const testimonials = [
  {
    q: "We replaced a Webflow site that took 5s to load with a custom Next.js build that loads in under 800ms. The conversion lift was instant.",
    n: "Sophia Reeves",
    r: "VP Product · Aurora Studios",
    img: "https://images.unsplash.com/photo-1638290047807-4c9d389b9aa6?auto=format&fit=crop&w=400&q=80",
  },
  {
    q: "ITcrista treated every page like a product. Our marketing team finally has a site they can run experiments on without engineering drag.",
    n: "Marcus Hale",
    r: "Founder · Nimbus Analytics",
    img: "https://images.unsplash.com/photo-1764545973653-94c40d993495?auto=format&fit=crop&w=400&q=80",
  },
  {
    q: "Premium feel, surgical engineering, calm process. Exactly what we needed for our rebrand.",
    n: "Aisha Khan",
    r: "Head of Growth · Lume",
    img: "https://images.unsplash.com/photo-1767175620484-1ed37931a0d1?auto=format&fit=crop&w=400&q=80",
  },
];

function Testimonials() {
  const [i, setI] = useState(0);
  const t = testimonials[i];
  return (
    <section data-testid="cwd-testimonials" className="relative py-8 md:py-16 bg-[#0A1525] border-y border-white/10 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 md:px-10 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-[#06B6D4] mb-4">Client voices</p>
        <h2 className="font-display font-black tracking-tighter text-white text-4xl sm:text-5xl lg:text-6xl leading-[1.02]">
          Loved by <span className="text-gradient">premium teams.</span>
        </h2>

        <div className="relative mt-14 glass rounded-3xl p-8 md:p-12 text-left">
          <Quote className="w-9 h-9 text-[#06B6D4]/50 mb-5" />
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4 }}
              className="font-display text-xl md:text-2xl lg:text-3xl font-medium text-white leading-snug tracking-tight"
              data-testid="cwd-testimonial-quote"
            >
              "{t.q}"
            </motion.blockquote>
          </AnimatePresence>
          <div className="mt-10 flex items-center justify-between gap-6 flex-wrap">
            <div className="flex items-center gap-4">
              <img src={t.img} alt={t.n} className="w-12 h-12 rounded-full object-cover border border-white/10" />
              <div>
                <div className="font-bold text-white">{t.n}</div>
                <div className="text-sm text-white/55">{t.r}</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="w-4 h-4 fill-[#06B6D4] text-[#06B6D4]" />
                ))}
              </div>
              <button
                onClick={() => setI((p) => (p - 1 + testimonials.length) % testimonials.length)}
                data-testid="cwd-testimonial-prev"
                aria-label="prev"
                className="w-11 h-11 rounded-full border border-white/15 grid place-items-center text-white/80 hover:bg-white/5"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => setI((p) => (p + 1) % testimonials.length)}
                data-testid="cwd-testimonial-next"
                aria-label="next"
                className="w-11 h-11 rounded-full bg-white text-[#071120] grid place-items-center hover:bg-[#06B6D4] hover:text-white transition"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                                 Section 9                                  */
/* -------------------------------------------------------------------------- */
const faqs = [
  {
    q: "What is custom website development?",
    a: "Custom website development is the process of building a website from scratch based on your business goals, branding, functionality requirements, and customer experience needs. Unlike templates, custom websites are designed specifically for your business."
  },
  {
    q: "Why choose custom website development over website templates?",
    a: "Custom website development offers greater flexibility, better performance, improved SEO, stronger security, and a unique user experience. Businesses that want long-term growth often choose custom web development instead of relying on generic templates."
  },
  {
    q: "How much does custom website development cost?",
    a: "The cost of custom website development depends on project complexity, features, integrations, design requirements, and business goals. Every project is unique, so pricing is typically customized based on requirements."
  },
  {
    q: "How long does it take to build a custom website?",
    a: "Most custom website development projects take between 3 and 12 weeks depending on the size of the website, functionality requirements, content availability, and design complexity."
  },
  {
    q: "Will my custom website be SEO friendly?",
    a: "Yes. Our custom websites are built with SEO best practices including optimized page structure, fast loading speed, mobile responsiveness, schema markup, technical SEO implementation, and search-engine-friendly architecture."
  },
  {
    q: "Do you provide responsive website development?",
    a: "Yes. Every website we build is fully responsive and optimized for desktops, tablets, and mobile devices to ensure the best user experience across all screen sizes."
  },
  {
    q: "Can you redesign my existing website?",
    a: "Yes. We provide website redesign services for businesses looking to improve website performance, modernize their design, enhance user experience, and increase lead generation."
  },
  {
    q: "Do you build ecommerce websites?",
    a: "Yes. We develop custom ecommerce websites, Shopify stores, and scalable online shopping experiences designed to improve conversions, performance, and customer engagement."
  },
  {
    q: "Which technologies do you use for custom website development?",
    a: "We work with modern technologies including React.js, Next.js, Node.js, Shopify, WordPress, and custom development frameworks to build fast, scalable, and future-ready websites."
  },
  {
    q: "Do you provide website maintenance and support?",
    a: "Yes. We offer ongoing website maintenance, security updates, performance optimization, bug fixes, technical support, and website monitoring to ensure long-term reliability."
  },
  {
    q: "Can a custom website improve Google rankings?",
    a: "A well-developed custom website can significantly improve technical SEO, Core Web Vitals, website speed, mobile usability, and overall search visibility, helping businesses achieve better Google rankings."
  },
  {
    q: "Why choose ITcrista for custom website development?",
    a: "ITcrista specializes in custom website development, Shopify development, WordPress development, website maintenance, technical SEO, and performance optimization. We build websites focused on business growth, lead generation, and long-term scalability."
  }
];

function FAQ() {
  return (
    <section data-testid="cwd-faq" className="relative py-8 md:py-16 bg-[#071120] overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="relative max-w-4xl mx-auto px-6 md:px-10">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-[#06B6D4] mb-4">FAQ</p>
          <h2 className="font-display font-black tracking-tighter text-white text-4xl sm:text-5xl lg:text-6xl leading-[1.02]">
            Common questions.
          </h2>
        </div>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              data-testid={`cwd-faq-item-${i}`}
              className="border border-white/10 rounded-2xl bg-white/[0.03] px-6 data-[state=open]:border-[#06B6D4]/40 transition-colors"
            >
              <AccordionTrigger className="text-left text-white font-display text-lg md:text-xl py-5 hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-white/65 pb-5 leading-relaxed text-base">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                                Section 10                                  */
/* -------------------------------------------------------------------------- */
function FinalCTA() {
  return (
    <section data-testid="cwd-final-cta" className="relative py-8 md:py-16 bg-[#071120] overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[60%] bg-gradient-to-r from-[#06B6D4]/20 via-[#3B82F6]/15 to-[#7C3AED]/20 blur-3xl rounded-full" />
      </div>
      <div className="relative max-w-5xl mx-auto px-6 md:px-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display font-black tracking-tighter text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.98]"
        >
          Ready for a website that
          <br />
          <span className="text-gradient">actually performs?</span>
        </motion.h2>
        <p className="mt-7 text-base md:text-lg text-white/60 max-w-2xl mx-auto">
          Tell us about your project. We respond within 24 hours with a tailored proposal and the senior team best suited for your engagement.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/contact"
            data-testid="cwd-final-cta-primary"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-[#071120] font-semibold hover:bg-[#06B6D4] hover:text-white transition-colors btn-shine"
          >
            Book a strategy call <ArrowUpRight className="w-4 h-4" />
          </Link>
          <Link
            to="/portfolio"
            data-testid="cwd-final-cta-secondary"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/15 text-white font-semibold hover:bg-white/5 transition"
          >
            View case studies
          </Link>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                                  Page                                      */
/* -------------------------------------------------------------------------- */
export default function CustomWebsiteDevelopment() {
  return (
    <main data-testid="custom-website-development-page" className="bg-[#071120] text-white">
      <Hero />
      <WhyChoose />
      <ServicesIncluded />
      <Process />
      <TechStack />
      <FeaturesGrid />
      <PortfolioShowcase />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Blog />
    </main>
  );
}
