import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ExternalLink, Sparkles } from "lucide-react";

const categories = ["All", "Ecommerce", "SaaS", "Website", "Branding", "Mobile"];

const projects = [
  {
    title: "Aurora — Luxury Fashion DTC",
    client: "Aurora Studios",
    year: 2025,
    category: "Ecommerce",
    tags: ["Shopify Hydrogen", "Custom CMS"],
    metric: "+34% conversion",
    img: "https://static.prod-images.emergentagent.com/jobs/e5edbea0-9077-4246-8082-58f6c769b341/images/5fb7e3c4e2151710b94bd958faff69a88e02e9e3b247fa83ef1d98152a9cab97.png",
    featured: true,
  },
  {
    title: "Nimbus — Analytics Platform",
    client: "Nimbus Analytics",
    year: 2025,
    category: "SaaS",
    tags: ["Next.js", "Node", "PostgreSQL"],
    metric: "0.7s LCP",
    img: "https://static.prod-images.emergentagent.com/jobs/e5edbea0-9077-4246-8082-58f6c769b341/images/eb5d50e19c5d7e9fd61a24cb80740ba3ebac2a776fad94143524b7d0d1bd5425.png",
    featured: true,
  },
  {
    title: "Orbit Studio",
    client: "Orbit Inc.",
    year: 2024,
    category: "Website",
    tags: ["Custom CMS", "Framer Motion"],
    metric: "+62% engagement",
    img: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Lume Skincare",
    client: "Lume",
    year: 2024,
    category: "Ecommerce",
    tags: ["WooCommerce", "Headless"],
    metric: "+41% AOV",
    img: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Northwind CRM",
    client: "Northwind",
    year: 2024,
    category: "SaaS",
    tags: ["React", "Laravel"],
    metric: "+22% retention",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Maven Brand System",
    client: "Maven Agency",
    year: 2024,
    category: "Branding",
    tags: ["Identity", "Design System"],
    metric: "Industry award",
    img: "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Halo Fitness · iOS / Web",
    client: "Halo",
    year: 2025,
    category: "Mobile",
    tags: ["React Native", "Node"],
    metric: "4.9 ★ App Store",
    img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Mercato Marketplace",
    client: "Mercato",
    year: 2025,
    category: "Ecommerce",
    tags: ["Magento", "Custom API"],
    metric: "10k+ SKUs migrated",
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=80",
  },
];

function Card({ p, i, large }) {
  return (
    <motion.a
      href="#"
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5, delay: (i % 3) * 0.05 }}
      data-testid={`projects-card-${i}`}
      className={`group relative rounded-3xl overflow-hidden border border-white/10 bg-[#0D1B2A] block ${
        large ? "lg:col-span-2 aspect-[16/10] lg:aspect-[2/1]" : "aspect-[4/5]"
      }`}
    >
      <img
        src={p.img}
        alt={p.title}
        className="absolute inset-0 w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-[1.04] transition-all duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#071120] via-[#071120]/30 to-transparent" />

      {p.featured && (
        <span className="absolute top-5 left-5 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[11px] uppercase tracking-[0.22em] text-white">
          <Sparkles className="w-3 h-3 text-[#06B6D4]" /> Featured
        </span>
      )}
      <span className="absolute top-5 right-5 inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-black/45 backdrop-blur-md border border-white/10 text-[11px] text-white">
        {p.category} · {p.year}
      </span>

      <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
        <div className="text-[11px] uppercase tracking-[0.22em] text-[#06B6D4]">{p.client}</div>
        <h3 className={`font-display font-black text-white tracking-tight mt-2 ${large ? "text-3xl md:text-4xl" : "text-xl md:text-2xl"}`}>
          {p.title}
        </h3>

        <div className="mt-4 flex flex-wrap items-center gap-2">
          {p.tags.map((t) => (
            <span key={t} className="px-2.5 py-1 rounded-full text-[10px] uppercase tracking-[0.18em] bg-white/5 border border-white/10 text-white/70">
              {t}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between">
          <div className="text-sm text-white/65">{p.metric}</div>
          <span className="w-11 h-11 rounded-full bg-white/10 grid place-items-center group-hover:bg-[#06B6D4] transition">
            <ArrowUpRight className="w-4 h-4 text-white group-hover:rotate-45 transition-transform" />
          </span>
        </div>
      </div>
    </motion.a>
  );
}

export default function Projects() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section data-testid="projects-section" className="relative py-8 md:py-16 bg-[#071120] overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-[#06B6D4] mb-4">/ Projects</p>
            <h2 className="font-display font-black tracking-tighter text-white text-4xl sm:text-5xl lg:text-6xl leading-[1.02]">
              A decade of <span className="text-gradient">premium digital craft.</span>
            </h2>
          </div>
          <a
            href="/contact"
            data-testid="projects-cta"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/15 text-white/85 font-semibold hover:bg-white/5 transition self-start md:self-auto"
          >
            Start your project <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              data-testid={`projects-filter-${c.toLowerCase()}`}
              className={`px-5 py-2.5 rounded-full text-sm font-medium border transition ${
                active === c
                  ? "bg-white text-[#071120] border-white"
                  : "border-white/15 text-white/70 hover:text-white hover:border-white/40"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Grid (bento-style with first 2 featured cards spanning when "All") */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <Card key={p.title} p={p} i={i} large={active === "All" && p.featured && i < 2} />
            ))}
          </AnimatePresence>
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div data-testid="projects-empty" className="text-center text-white/55 py-20">
            No projects in this category yet — check back soon.
          </div>
        )}

        {/* Footer strip */}
        <div className="mt-16 glass rounded-3xl p-8 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-[#06B6D4] mb-2">/ Become our next case study</div>
            <h3 className="font-display font-black text-white text-2xl md:text-3xl tracking-tighter">
              Have a premium project in mind?
            </h3>
            <p className="text-white/55 mt-2 max-w-lg">
              We take on a small number of new engagements each quarter. Tell us about your goals and we'll respond within 24 hours.
            </p>
          </div>
          <a
            href="/contact"
            data-testid="projects-footer-cta"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white text-[#071120] font-semibold hover:bg-[#06B6D4] hover:text-white transition-colors btn-shine"
          >
            Book a strategy call <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
