import { useState } from "react";
import { motion } from "framer-motion";
import { Play, ArrowUpRight, Clock } from "lucide-react";

const featured = {
  title: "Inside our 12-week build for Aurora Studios",
  desc: "A behind-the-scenes look at how we shipped a luxury DTC brand from discovery to launch — design systems, performance, conversion lift.",
  duration: "4:32",
  poster:
    "https://static.prod-images.emergentagent.com/jobs/e5edbea0-9077-4246-8082-58f6c769b341/images/5fb7e3c4e2151710b94bd958faff69a88e02e9e3b247fa83ef1d98152a9cab97.png",
};

const mini = [
  {
    title: "Designing the ITcrista design system",
    duration: "2:18",
    poster:
      "https://static.prod-images.emergentagent.com/jobs/e5edbea0-9077-4246-8082-58f6c769b341/images/eb5d50e19c5d7e9fd61a24cb80740ba3ebac2a776fad94143524b7d0d1bd5425.png",
  },
  {
    title: "How we ship sub-1s LCP",
    duration: "3:04",
    poster:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Founder talk · The luxury studio model",
    duration: "5:47",
    poster:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=900&q=80",
  },
];

function PlayBadge({ size = "lg" }) {
  const s = size === "lg" ? "w-20 h-20" : "w-12 h-12";
  const ic = size === "lg" ? "w-7 h-7" : "w-4 h-4";
  return (
    <div className="relative">
      <div className="absolute inset-0 rounded-full bg-[#06B6D4]/40 blur-xl" />
      <div
        className={`relative ${s} rounded-full bg-white text-[#071120] grid place-items-center shadow-[0_10px_40px_rgba(6,182,212,0.4)] group-hover:scale-110 transition-transform`}
      >
        <Play className={`${ic} fill-current ml-1`} />
      </div>
    </div>
  );
}

export default function VideoShowcase() {
  const [active, setActive] = useState(featured);

  return (
    <section data-testid="video-section" className="relative py-24 md:py-32 bg-[#071120] overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[60rem] h-[40rem] bg-gradient-to-r from-[#06B6D4]/15 via-[#3B82F6]/10 to-[#7C3AED]/15 blur-3xl rounded-full" />
        <div className="absolute inset-0 bg-grid opacity-30" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
        >
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-[#06B6D4] mb-4">/ Watch</p>
            <h2 className="font-display font-black tracking-tighter text-white text-4xl sm:text-5xl lg:text-6xl leading-[1.02]">
              Stories from <span className="text-gradient">the studio.</span>
            </h2>
          </div>
          <p className="text-white/55 max-w-md leading-relaxed">
            Behind-the-scenes films, founder talks and case study breakdowns — the craft that shapes every ITcrista build.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-6">
          {/* Featured video */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8"
          >
            <button
              type="button"
              data-testid="video-featured-play"
              className="group relative w-full rounded-3xl overflow-hidden border border-white/10 bg-[#0D1B2A] aspect-video text-left"
            >
              <img
                src={active.poster}
                alt={active.title}
                className="absolute inset-0 w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071120] via-[#071120]/30 to-transparent" />

              <div className="absolute inset-0 grid place-items-center">
                <PlayBadge size="lg" />
              </div>

              <div className="absolute top-5 left-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-full backdrop-blur-md bg-white/10 border border-white/15 text-[11px] uppercase tracking-[0.2em] text-white">
                <span className="w-1.5 h-1.5 rounded-full bg-[#06B6D4] animate-pulse" /> Featured
              </div>
              <div className="absolute top-5 right-5 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full backdrop-blur-md bg-black/40 border border-white/10 text-xs text-white">
                <Clock className="w-3 h-3" /> {active.duration}
              </div>

              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4">
                <div>
                  <h3 className="font-display font-black text-2xl md:text-3xl text-white tracking-tight leading-snug">
                    {active.title}
                  </h3>
                  <p className="mt-2 text-sm md:text-base text-white/65 max-w-xl">{active.desc}</p>
                </div>
              </div>
            </button>

            <a
              href="#"
              data-testid="video-cta"
              className="mt-6 inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-[#071120] font-semibold hover:bg-[#06B6D4] hover:text-white transition-colors btn-shine"
            >
              Watch all case study films
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Side mini videos */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4"
          >
            {mini.map((m, i) => (
              <button
                key={m.title}
                type="button"
                onClick={() =>
                  setActive({ title: m.title, desc: featured.desc, duration: m.duration, poster: m.poster })
                }
                data-testid={`video-mini-${i}`}
                className="group glass rounded-2xl overflow-hidden text-left hover:border-[#06B6D4]/40 transition-colors"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={m.poster}
                    alt={m.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071120]/80 via-transparent to-transparent" />
                  <div className="absolute inset-0 grid place-items-center">
                    <PlayBadge size="sm" />
                  </div>
                  <div className="absolute bottom-2 right-2 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-black/55 backdrop-blur-md text-[10px] text-white">
                    <Clock className="w-2.5 h-2.5" /> {m.duration}
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-display font-bold text-white text-sm leading-snug group-hover:text-[#06B6D4] transition-colors line-clamp-2">
                    {m.title}
                  </h4>
                </div>
              </button>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
