import { motion } from "framer-motion";
import {
  Code2, ShoppingBag, Store, FileCode2, Boxes, Layers,
  PencilRuler, MousePointerClick, Search, Gauge, RefreshCcw, LifeBuoy, Database, ArrowUpRight,
} from "lucide-react";

const services = [
  { icon: Code2, title: "Custom Website Development", desc: "Bespoke, scalable websites engineered for performance and brand storytelling." },
  { icon: ShoppingBag, title: "Ecommerce Store Development", desc: "Conversion-obsessed ecommerce experiences for ambitious DTC brands." },
  { icon: Store, title: "Shopify Development", desc: "Premium Shopify storefronts, theme dev & app integrations." },
  { icon: FileCode2, title: "WordPress Development", desc: "Headless and traditional WordPress builds with luxe page experience." },
  { icon: Boxes, title: "WooCommerce Development", desc: "Sophisticated WooCommerce stores with advanced product logic." },
  { icon: Database, title: "Custom CMS Development", desc: "Tailored content platforms built around your editorial workflow." },
  { icon: MousePointerClick, title: "Landing Page Design", desc: "High-converting landing pages crafted for paid traffic & launches." },
  { icon: PencilRuler, title: "UI / UX Design", desc: "Beautiful, accessible interfaces backed by rigorous research." },
  { icon: Search, title: "SEO Optimization", desc: "Technical, on-page and content SEO that compounds over time." },
  { icon: Gauge, title: "Website Speed Optimization", desc: "Sub-second load times, perfect Core Web Vitals, real ROI." },
  { icon: RefreshCcw, title: "Website Redesign", desc: "Repositioning your brand with a modern, premium digital identity." },
  { icon: LifeBuoy, title: "Maintenance & Support", desc: "Proactive monitoring, security and growth-focused support." },
];

function Card({ s, i }) {
  const Icon = s.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: (i % 4) * 0.05 }}
      className="beam-border group relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:bg-white/[0.05] transition-colors min-w-[280px] md:min-w-0 snap-start"
      data-testid={`service-card-${i}`}
    >
      <div className="flex items-start justify-between">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#06B6D4]/20 to-[#7C3AED]/20 border border-white/10 grid place-items-center text-[#06B6D4]">
          <Icon className="w-5 h-5" />
        </div>
        <ArrowUpRight className="w-5 h-5 text-white/30 group-hover:text-[#06B6D4] group-hover:rotate-45 transition-all" />
      </div>
      <h3 className="font-display text-lg md:text-xl font-bold text-white mt-6 leading-snug">{s.title}</h3>
      <p className="text-sm text-white/55 mt-3 leading-relaxed">{s.desc}</p>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section data-testid="services-section" id="services" className="relative py-24 md:py-32 bg-[#071120]">
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-[#06B6D4] mb-4">Services</p>
            <h2 className="font-display font-black tracking-tighter text-white text-4xl sm:text-5xl lg:text-6xl leading-[1.02]">
             High-Performance
              <br />
              <span className="text-gradient">Websites for Modern Brands.</span>
            </h2>
          </div>
          <p className="text-white/55 max-w-md text-base leading-relaxed">
            We build high-performance websites, Shopify stores, and custom digital experiences optimized for speed, SEO, and long-term growth.
          </p>
        </div>

        {/* Mobile: horizontal slider */}
        <div className="md:hidden -mx-6 px-6 flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 no-scrollbar" data-testid="services-mobile-slider">
          {services.map((s, i) => (
            <Card key={s.title} s={s} i={i} />
          ))}
        </div>

        {/* Desktop: bento grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <Card key={s.title} s={s} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
