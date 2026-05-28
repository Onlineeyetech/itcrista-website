import { motion } from "framer-motion";
import { Building2, Target, Compass, Heart, ArrowUpRight } from "lucide-react";

const pillars = [
  {
    icon: Target,
    title: "Our Mission",
    desc: "To engineer premium digital experiences that move the business needle for ambitious founders and global brands.",
  },
  {
    icon: Compass,
    title: "Our Vision",
    desc: "To become the most trusted luxury IT studio of the next decade — known for craft, clarity and compounding outcomes.",
  },
  {
    icon: Heart,
    title: "Our Values",
    desc: "Craft over volume. Calm over noise. Conviction over comfort. Compounding over shortcuts.",
  },
];

const metrics = [
  { v: "9+", l: "Years of Craft" },
  { v: "250+", l: "Projects Shipped" },
  { v: "40+", l: "Countries Served" },
  { v: "120+", l: "Brand Partners" },
];

export default function AboutCompany() {
  return (
    <section
      data-testid="about-company-section"
      className="relative py-8 md:py-16 bg-[#071120] overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[60rem] h-[40rem] bg-gradient-to-r from-[#06B6D4]/15 via-[#3B82F6]/10 to-[#7C3AED]/15 blur-3xl rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-16">
          <div className="lg:col-span-7">
            <p className="text-xs uppercase tracking-[0.3em] text-[#06B6D4] mb-4">/ About the company</p>
            <h2 className="font-display font-black tracking-tighter text-white text-4xl sm:text-5xl lg:text-6xl leading-[1.02]">
              A small studio with a <span className="text-gradient">global obsession.</span>
            </h2>
          </div>
          <p className="lg:col-span-5 text-base md:text-lg text-white/60 leading-relaxed">
            ITcrista infoX is a senior, founder-led team of designers and engineers shipping luxury digital products for ambitious brands across the globe.
          </p>
        </div>

        {/* Story + image */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 relative"
          >
            <div className="absolute -inset-6 bg-gradient-to-br from-[#06B6D4]/20 via-[#3B82F6]/15 to-[#7C3AED]/20 rounded-[2.5rem] blur-2xl" />
            <div className="relative rounded-[2rem] overflow-hidden border border-white/10 bg-[#0D1B2A] aspect-[5/4]">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1400&q=80"
                alt="ITcrista studio"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071120] via-transparent to-transparent" />
              <div className="absolute top-5 left-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-full backdrop-blur-md bg-white/10 border border-white/15 text-[11px] uppercase tracking-[0.2em] text-white">
                <Building2 className="w-3 h-3 text-[#06B6D4]" /> Est. 2016 · Remote-first
              </div>
              <div className="absolute bottom-6 left-6 right-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
                {metrics.map((m) => (
                  <div
                    key={m.l}
                    data-testid={`about-metric-${m.l.toLowerCase().replace(/\s+/g, "-")}`}
                    className="rounded-xl bg-white/5 backdrop-blur-md border border-white/10 px-3 py-3"
                  >
                    <div className="font-display font-black text-xl text-white">{m.v}</div>
                    <div className="text-[10px] uppercase tracking-[0.18em] text-white/55 mt-0.5">{m.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-6"
          >
            <div className="text-xs uppercase tracking-[0.3em] text-white/40 mb-3">Our story</div>
            <h3 className="font-display font-black tracking-tighter text-white text-3xl md:text-4xl leading-[1.05]">
              Built on craft. Scaled on trust.
            </h3>
            <p className="mt-5 text-white/65 leading-relaxed">
              We started ITcrista infoX in 2016 with a single belief — great software should feel like luxury. Almost a decade later, that belief still shapes every engagement. We work with a small set of clients each quarter so every project receives senior attention, surgical execution and outcomes that compound.
            </p>
            <p className="mt-4 text-white/65 leading-relaxed">
              From luxury DTC stores to enterprise SaaS platforms, our work lives in production for some of the world's most discerning brands — and quietly outperforms benchmarks on speed, conversion and retention.
            </p>

            <a
              href="/contact"
              data-testid="about-company-cta"
              className="mt-8 inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-[#071120] font-semibold hover:bg-[#06B6D4] hover:text-white transition-colors btn-shine"
            >
              Work with us <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>

        {/* Pillars */}
        <div className="grid md:grid-cols-3 gap-5 mt-20">
          {pillars.map((p, i) => {
            const Ic = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                data-testid={`about-pillar-${i}`}
                className="glass rounded-2xl p-7 hover:border-[#06B6D4]/40 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#06B6D4]/20 to-[#7C3AED]/20 border border-white/10 grid place-items-center text-[#06B6D4]">
                  <Ic className="w-5 h-5" />
                </div>
                <h4 className="font-display font-bold text-2xl text-white mt-6 tracking-tight">{p.title}</h4>
                <p className="text-white/60 mt-3 leading-relaxed">{p.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
