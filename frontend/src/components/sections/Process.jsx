import { motion } from "framer-motion";

const steps = [
  { n: "01", title: "Discovery", desc: "Strategy workshops, business audit and product blueprint." },
  { n: "02", title: "Design", desc: "Premium UI/UX, prototyping and design system creation." },
  { n: "03", title: "Development", desc: "Engineering with elite stacks: Next.js, React, Node, Laravel." },
  { n: "04", title: "Testing", desc: "QA, cross-device validation, Core Web Vitals & accessibility." },
  { n: "05", title: "Launch", desc: "Zero-downtime deploys, CDN, observability and analytics." },
  { n: "06", title: "Support", desc: "Ongoing maintenance, performance and growth experiments." },
];

export default function Process() {
  return (
    <section data-testid="process-section" className="relative py-8 md:py-16 bg-[#F8FAFC] text-[#0A0F1A] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-10 mb-16">
          <div className="lg:col-span-7">
            <p className="text-xs uppercase tracking-[0.3em] text-[#3B82F6] mb-4">How we work</p>
            <h2 className="font-display font-black tracking-tighter text-4xl sm:text-5xl lg:text-6xl leading-[1.02] text-[#0A0F1A]">
              A proven 6-step
              <br />
              <span className="text-[#7C3AED]">delivery process.</span>
            </h2>
          </div>
          <p className="lg:col-span-5 text-[#475569] leading-relaxed self-end text-base md:text-lg">
           We follow a streamlined web development process focused on strategy, UI/UX design, performance optimization, technical SEO, and scalable development to deliver fast, high-converting digital experiences.
          </p>
        </div>

        {/* Desktop: horizontal stepper */}
        <div className="hidden md:grid grid-cols-3 lg:grid-cols-6 gap-px bg-[#0A0F1A]/10 rounded-3xl overflow-hidden border border-[#0A0F1A]/10">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="bg-white p-6 lg:p-8 hover:bg-[#F1F5F9] transition-colors"
              data-testid={`process-step-${s.n}`}
            >
              <div className="font-display text-5xl font-black text-[#0A0F1A]/15">{s.n}</div>
              <h3 className="font-display font-bold text-xl mt-4 tracking-tight">{s.title}</h3>
              <p className="text-sm text-[#475569] mt-2 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Mobile: horizontal scroll */}
        <div className="md:hidden -mx-6 px-6 flex gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar" data-testid="process-mobile-slider">
          {steps.map((s) => (
            <div key={s.n} className="snap-start min-w-[80%] bg-white border border-[#0A0F1A]/10 rounded-2xl p-6">
              <div className="font-display text-4xl font-black text-[#0A0F1A]/15">{s.n}</div>
              <h3 className="font-display font-bold text-xl mt-3">{s.title}</h3>
              <p className="text-sm text-[#475569] mt-2">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
