import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Sparkles, Play } from "lucide-react";

const stats = [
  { value: 250, suffix: "+", label: "Projects Delivered" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 40, suffix: "+", label: "Global Clients" },
  { value: 9, suffix: "y", label: "Years of Craft" },
];

function Counter({ value, suffix }) {
  const [v, setV] = useState(0);
  useEffect(() => {
    let raf;
    const start = performance.now();
    const dur = 1600;
    const animate = (t) => {
      const p = Math.min((t - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setV(Math.round(value * eased));
      if (p < 1) raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [value]);
  return (
    <span data-testid={`hero-counter-${value}`} className="tabular-nums">
      {v}
      {suffix}
    </span>
  );
}

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);

  return (
    <section
      ref={ref}
      data-testid="hero-section"
      className="relative hero-glow pt-32 md:pt-40 pb-24 md:pb-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid pointer-events-none" />
      <motion.div style={{ y, opacity }} className="relative max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] text-xs uppercase tracking-[0.25em] text-white/70"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#06B6D4]" />
            PREMIUM WEB DEVELOPMENT AGENCY • EST. 2022
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="font-display font-black tracking-tighter text-white mt-6 text-5xl sm:text-6xl lg:text-6xl xl:text-8xl leading-[0.95]"
          >
           We Build
            <br />
            Fast, <span className="text-gradient">SEO-Driven</span>
            <br />
           Digital Experiences.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-7 text-base sm:text-lg text-white/60 max-w-xl leading-relaxed"
          >
            ITcrista infoX is a luxury technology studio. We design and build premium ecommerce, custom websites and SaaS platforms for the world's most ambitious brands.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <Link
              to="/contact"
              data-testid="hero-primary-cta"
              className="group inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white text-[#071120] font-semibold hover:bg-[#06B6D4] hover:text-white transition-colors btn-shine"
            >
              Start Your Project
              <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
            </Link>
            <Link
              to="/portfolio"
              data-testid="hero-secondary-cta"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-white/15 text-white/90 font-semibold hover:bg-white/5 transition"
            >
              <Play className="w-4 h-4" /> See Our Work
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((s) => (
              <div key={s.label} data-testid={`hero-stat-${s.label.toLowerCase().replace(/\s+/g, "-")}`}>
                <div className="font-display text-3xl md:text-4xl font-black text-white">
                  <Counter value={s.value} suffix={s.suffix} />
                </div>
                <div className="text-xs uppercase tracking-[0.2em] text-white/50 mt-2">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="lg:col-span-5 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative aspect-square w-full max-w-[560px] mx-auto"
          >
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-[#06B6D4]/30 via-[#3B82F6]/20 to-[#7C3AED]/30 blur-3xl" />
            <div className="relative h-full rounded-[2.5rem] overflow-hidden border border-white/10 bg-[#0D1B2A]">
              <img
                src="https://static.prod-images.emergentagent.com/jobs/e5edbea0-9077-4246-8082-58f6c769b341/images/e1591ae0a0d59c159f91152eedf231aced637a4db3c9c40f74daefeecdbc6bda.png"
                alt="3D abstract"
                className="absolute inset-0 w-full h-full object-cover animate-floaty"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071120] via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-white/60">Live build</div>
                  <div className="font-display font-bold text-xl text-white mt-1">Project Aurora · v2.4</div>
                </div>
                <div className="w-12 h-12 rounded-full border border-white/15 grid place-items-center bg-white/5">
                  <span className="w-2 h-2 rounded-full bg-[#06B6D4] animate-pulse" />
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute -left-4 top-10 glass rounded-2xl px-4 py-3 hidden md:block"
            >
              <div className="text-[11px] uppercase tracking-[0.2em] text-white/50">Performance</div>
              <div className="font-display font-black text-2xl text-white">99/100</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="absolute -right-4 bottom-16 glass rounded-2xl px-4 py-3 hidden md:block"
            >
              <div className="text-[11px] uppercase tracking-[0.2em] text-white/50">Lighthouse</div>
              <div className="font-display font-black text-2xl text-[#06B6D4]">AAA</div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
