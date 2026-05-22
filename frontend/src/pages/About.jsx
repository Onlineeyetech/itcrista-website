import { motion } from "framer-motion";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import Process from "../components/sections/Process";
import Testimonials from "../components/sections/Testimonials";
import FinalCTA from "../components/sections/FinalCTA";
import PageHeader from "../components/PageHeader";

const values = [
  { t: "Craft", d: "We treat every pixel and every line of code with luxury-brand discipline." },
  { t: "Clarity", d: "Calm communication, transparent scopes and predictable delivery." },
  { t: "Conviction", d: "We say no often, so we can ship work we're proud of." },
  { t: "Compounding", d: "Performance, SEO and growth are not features — they're foundations." },
];

export default function AboutPage() {
  return (
    <main data-testid="about-page">
      <PageHeader
        eyebrow="/ About"
        title={<>A studio built for <span className="text-gradient">ambitious founders.</span></>}
        subtitle="ITcrista infoX is a small, senior team of designers and engineers obsessed with shipping premium digital products that move the business needle."
      />
      <section className="py-20 md:py-28 bg-[#071120]">
        <div className="max-w-6xl mx-auto px-6 md:px-10 grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <p className="text-xs uppercase tracking-[0.3em] text-[#06B6D4] mb-4">/ Our values</p>
            <h2 className="font-display font-black tracking-tighter text-white text-4xl md:text-5xl leading-[1.05]">
              What we stand for.
            </h2>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {values.map((v, i) => (
              <motion.div
                key={v.t}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="glass rounded-2xl p-6"
                data-testid={`about-value-${v.t.toLowerCase()}`}
              >
                <div className="font-display text-2xl font-bold text-white">{v.t}</div>
                <p className="text-white/60 mt-2 text-sm leading-relaxed">{v.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <WhyChooseUs />
      <Process />
      <Testimonials />
      <FinalCTA />
    </main>
  );
}
