import { motion } from "framer-motion";
import { Award, Rocket, HeartHandshake, Zap, ShieldCheck, Globe2 } from "lucide-react";

const features = [
  { icon: Award, title: "5 Yr of Web Development Expertise", desc: "Delivering custom websites, eCommerce platforms, and SEO-focused digital solutions for businesses across multiple industries worldwide." },
  { icon: Rocket, title: "Fast & Scalable Website Development", desc: "Agile development workflows, optimized coding standards, and rapid deployment processes designed for speed and performance." },
  { icon: HeartHandshake, title: "Dedicated Support", desc: "Ongoing technical support, website maintenance, SEO improvements, and performance monitoring for long-term business growth." },
  { icon: Zap, title: "Performance-Driven Builds", desc: "Engineered for blazing-fast load times, exceptional Core Web Vitals, and conversion-focused user experiences." },
  { icon: ShieldCheck, title: "SEO-First Development", desc: "Every website is structured with technical SEO, responsive architecture, and search visibility built in from the ground up." },
  { icon: Globe2, title: "GTrusted Worldwide", desc: "Supporting startups, agencies, and modern brands with scalable web development solutions across global markets." },
];

export default function WhyChooseUs() {
  return (
    <section data-testid="why-section" className="relative py-24 md:py-32 bg-[#F8FAFC] text-[#0A0F1A] overflow-hidden">
      <div className="absolute inset-0 bg-grid-light pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-16">
          <div className="lg:col-span-7">
            <p className="text-xs uppercase tracking-[0.3em] text-[#3B82F6] mb-4">Why ITcrista infoX</p>
            <h2 className="font-display font-black tracking-tighter text-4xl sm:text-5xl lg:text-6xl leading-[1.02] text-[#0A0F1A]">
             Premium Websites Engineered for 
              <br />
             <span className="text-[#3B82F6]">Growth.</span>
            </h2>
          </div>
          <p className="lg:col-span-5 text-base md:text-lg text-[#475569] leading-relaxed">
            We create fast, scalable, and SEO-optimized digital experiences designed to improve performance, conversions, and long-term business growth.
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
