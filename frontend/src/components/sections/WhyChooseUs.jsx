import { motion } from "framer-motion";
import { Award, Rocket, HeartHandshake, Zap, ShieldCheck, Globe2 } from "lucide-react";

const features = [
  { icon: Award, title: "9+ Years of Craft", desc: "A senior team that has shipped premium digital products across 40+ countries." },
  { icon: Rocket, title: "Fast Delivery", desc: "Tight, disciplined sprints. Most launches in 4-8 weeks without compromising quality." },
  { icon: HeartHandshake, title: "Dedicated Support", desc: "A real human team on Slack, Email & WhatsApp — never tickets, never templates." },
  { icon: Zap, title: "Performance First", desc: "Sub-second load times, perfect Core Web Vitals and elite-grade infrastructure." },
  { icon: ShieldCheck, title: "SEO-Friendly Builds", desc: "Search-engine perfection baked into the architecture from day one." },
  { icon: Globe2, title: "Global, White-label", desc: "We power growth for agencies & brands across the US, UK, EU and APAC." },
];

export default function WhyChooseUs() {
  return (
    <section data-testid="why-section" className="relative py-24 md:py-32 bg-[#F8FAFC] text-[#0A0F1A] overflow-hidden">
      <div className="absolute inset-0 bg-grid-light pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-16">
          <div className="lg:col-span-7">
            <p className="text-xs uppercase tracking-[0.3em] text-[#3B82F6] mb-4">/ Why ITcrista infoX</p>
            <h2 className="font-display font-black tracking-tighter text-4xl sm:text-5xl lg:text-6xl leading-[1.02] text-[#0A0F1A]">
              We don't make websites.
              <br />
              We build <span className="text-[#3B82F6]">competitive advantage.</span>
            </h2>
          </div>
          <p className="lg:col-span-5 text-base md:text-lg text-[#475569] leading-relaxed">
            Every engagement is a partnership. We obsess about your numbers — conversion rate, retention, page speed, lifetime value — and design every pixel to move them up and to the right.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#0A0F1A]/10 rounded-3xl overflow-hidden border border-[#0A0F1A]/10">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="bg-white p-8 md:p-10 hover:bg-[#F1F5F9] transition-colors"
                data-testid={`why-feature-${i}`}
              >
                <div className="w-12 h-12 rounded-xl bg-[#0A0F1A] text-white grid place-items-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-2xl mt-6 tracking-tight">{f.title}</h3>
                <p className="text-[#475569] mt-3 leading-relaxed">{f.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
