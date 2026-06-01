import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const categories = ["All", "Ecommerce", "SaaS", "Website", "Branding"];

const projects = [
  { title: "Loop — Revenue Automation", category: "Saas", tag: "Shopify · Custom", img: "/images/loopagency.svg" },
  { title: "Veaves — Ecommerce", category: "SaaS", tag: "Shopify", img: "/images/veaves.png" },
  { title: "Bestink", category: "Website", tag: "Custom + Shopify", img: "/images/bestink.png" },
  { title: "Buyveda - Ayurvedic Wellness", category: "Ecommerce", tag: "Shopify Custom", img: "/images/buyveda.png" },
  { title: "Northwind CRM", category: "SaaS", tag: "React · Laravel", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80" },
  { title: "Maven Agency", category: "Branding", tag: "Brand · UI", img: "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1200&q=80" },
];

export default function Portfolio() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section data-testid="portfolio-section" id="portfolio" className="relative py-8 md:py-16 bg-[#071120] overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#06B6D4] mb-4">Selected Work</p>
            <h2 className="font-display font-black tracking-tighter text-white text-4xl sm:text-5xl lg:text-6xl leading-[1.02]">
             Featured <span className="text-gradient">Web Projects.</span>
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                data-testid={`portfolio-filter-${c.toLowerCase()}`}
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.a
                key={p.title}
                href="#"
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                data-testid={`portfolio-card-${i}`}
                className="group relative rounded-2xl overflow-hidden border border-white/10 bg-[#0D1B2A] aspect-[1/1] block"
              >
                <img
                  src={p.img}
                  alt={p.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071120] via-[#071120]/40 to-transparent" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="text-[11px] uppercase tracking-[0.25em] text-[#06B6D4]">{p.tag}</div>
                  <h3 className="font-display font-bold text-2xl text-white mt-2">{p.title}</h3>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-sm text-white/60">{p.category}</span>
                    <span className="w-10 h-10 rounded-full bg-white/10 grid place-items-center group-hover:bg-[#06B6D4] transition">
                      <ArrowUpRight className="w-4 h-4 text-white group-hover:rotate-45 transition-transform" />
                    </span>
                  </div>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
