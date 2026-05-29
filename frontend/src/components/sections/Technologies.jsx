import Marquee from "react-fast-marquee";

const stacks = [
  "Shopify", "WordPress", "React", "Next.js", "Node.js", "Laravel", "WooCommerce", "Magento",
  "TypeScript", "Tailwind", "PostgreSQL", "MongoDB", "AWS", "Vercel", "Stripe", "Sanity",
];

export default function Technologies() {
  return (
    <section data-testid="tech-section" className="relative py-8 md:py-16 bg-[#0A1525] border-y border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 text-center mb-12">
        <p className="text-xs uppercase tracking-[0.3em] text-[#06B6D4] mb-4">Stack</p>
        <h2 className="font-display font-black tracking-tighter text-white text-4xl sm:text-5xl lg:text-6xl leading-[1.02]">
          Technologies <span className="text-gradient">we master.</span>
        </h2>
      </div>
      <Marquee gradient gradientColor="#0A1525" gradientWidth={120} speed={45} pauseOnHover>
        {stacks.map((s, i) => (
          <div
            key={i}
            data-testid={`tech-${s.toLowerCase().replace(/\./g, "")}`}
            className="mx-3 my-2 px-7 py-4 rounded-2xl border border-white/10 bg-white/[0.03] font-display text-xl md:text-2xl font-bold text-white/70 hover:text-white hover:border-[#06B6D4]/40 transition-colors"
          >
            {s}
          </div>
        ))}
      </Marquee>
      <Marquee gradient gradientColor="#0A1525" gradientWidth={120} speed={45} direction="right" pauseOnHover className="mt-4">
        {stacks.slice().reverse().map((s, i) => (
          <div
            key={i}
            className="mx-3 my-2 px-7 py-4 rounded-2xl border border-white/10 bg-white/[0.03] font-display text-xl md:text-2xl font-bold text-white/70 hover:text-white hover:border-[#7C3AED]/40 transition-colors"
          >
            {s}
          </div>
        ))}
      </Marquee>
    </section>
  );
}
