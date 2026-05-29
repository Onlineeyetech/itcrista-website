import { Check, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const tiers = [
  {
    name: "Starter",
    price: "$1,499",
    desc: "Single landing page or 5-page premium website.",
    features: ["Pixel-perfect design", "Mobile-first build", "SEO foundations", "1 round of revisions", "2-week delivery"],
    highlighted: false,
  },
  {
    name: "Growth",
    price: "$4,999",
    desc: "Custom website + ecommerce or CMS build.",
    features: ["Full UI/UX design system", "Up to 15 pages", "Shopify / Woo / Custom CMS", "Speed & SEO optimisation", "3 rounds of revisions", "Priority support"],
    highlighted: true,
  },
  {
    name: "Scale",
    price: "Custom",
    desc: "Enterprise / SaaS / Marketplace platforms.",
    features: ["Dedicated product team", "Custom backend & integrations", "Performance SLA", "Ongoing growth retainer", "Strategy partner"],
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section data-testid="pricing-section" className="relative py-8 md:py-16 bg-[#071120] overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-[#06B6D4] mb-4">Pricing</p>
          <h2 className="font-display font-black tracking-tighter text-white text-4xl sm:text-5xl lg:text-6xl leading-[1.02]">
            Investment, <span className="text-gradient">simplified.</span>
          </h2>
          <p className="mt-6 text-white/55 leading-relaxed">Transparent, scoped pricing. No surprises. Every plan includes our premium craft and a senior team.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`relative rounded-3xl p-8 md:p-10 ${
                t.highlighted
                  ? "bg-gradient-to-br from-[#06B6D4]/15 via-[#3B82F6]/10 to-[#7C3AED]/15 border border-[#06B6D4]/40 glow-cyan"
                  : "border border-white/10 bg-white/[0.03]"
              }`}
              data-testid={`pricing-tier-${t.name.toLowerCase()}`}
            >
              {t.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-white text-[#071120] text-[11px] font-bold uppercase tracking-wider flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> Most Popular
                </div>
              )}
              <div className="text-xs uppercase tracking-[0.25em] text-white/50">{t.name}</div>
              <div className="font-display font-black text-5xl md:text-6xl text-white mt-3 tracking-tighter">{t.price}</div>
              <p className="text-white/60 mt-3 text-sm">{t.desc}</p>
              <ul className="mt-8 space-y-3">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-white/80">
                    <Check className="w-4 h-4 mt-0.5 text-[#06B6D4]" /> {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                data-testid={`pricing-cta-${t.name.toLowerCase()}`}
                className={`mt-10 inline-flex w-full items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold transition ${
                  t.highlighted ? "bg-white text-[#071120] hover:bg-[#06B6D4] hover:text-white" : "border border-white/15 text-white hover:bg-white/5"
                }`}
              >
                Choose {t.name}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
