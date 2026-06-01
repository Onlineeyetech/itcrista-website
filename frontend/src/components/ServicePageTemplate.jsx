import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  ArrowLeft,
  Sparkles,
  Quote,
  Star,
  ChevronLeft,
  ChevronRight,
  Check,
  Boxes,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

/**
 * Premium reusable service-page template.
 *
 * Pass a `content` object with the following keys:
 *  - slug (string, used for data-testids)
 *  - eyebrow (string)
 *  - title (string)
 *  - titleAccent (string)  → rendered with the brand gradient
 *  - subtitle (string)
 *  - heroImage (string url)
 *  - stats: [{ v, l }]
 *  - reasons: [{ icon, t, d }]
 *  - included: [{ icon, t, d }]
 *  - steps: [{ n, t, d }]
 *  - stack: { Group: [items] }
 *  - features: [{ t, d }]
 *  - portfolio: [{ title, cat, metric, img }]
 *  - testimonials: [{ q, n, r, img }]
 *  - faqs: [{ q, a }]
 *  - finalCta: { title, titleAccent, sub }
 */
export default function ServicePageTemplate({ content: c }) {
  const slug = c.slug;
  const test = (k) => `${slug}-${k}`;

  return (
    <main data-testid={`${slug}-page`} className="bg-[#071120] text-white">
      {/* ---------------------------- 1. HERO ---------------------------- */}
      <section
        data-testid={test("hero")}
        className="relative pt-32 md:pt-40 pb-24 md:pb-28 overflow-hidden hero-glow"
      >
        <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm text-white/55 hover:text-white transition mb-6"
            >
              <ArrowLeft className="w-4 h-4" /> All services
            </Link>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] text-xs uppercase tracking-[0.25em] text-white/70">
              <Sparkles className="w-3.5 h-3.5 text-[#06B6D4]" />
              {c.eyebrow}
            </div>
            <h1 className="font-display font-black tracking-tighter text-white mt-6 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.02]">
              {c.title}
              <br />
              <span className="text-gradient">{c.titleAccent}</span>
            </h1>
            <p className="mt-6 text-base md:text-lg text-white/65 max-w-xl leading-relaxed">{c.subtitle}</p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/contact"
                data-testid={test("hero-cta-primary")}
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white text-[#071120] font-semibold hover:bg-[#06B6D4] hover:text-white transition-colors btn-shine"
              >
                Start your project <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                to="/portfolio"
                data-testid={test("hero-cta-secondary")}
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-white/15 text-white/90 font-semibold hover:bg-white/5 transition"
              >
                View case studies
              </Link>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
              {c.stats.map((m) => (
                <div key={m.l}>
                  <div className="font-display font-black text-2xl md:text-3xl text-white">{m.v}</div>
                  <div className="text-[11px] uppercase tracking-[0.2em] text-white/45 mt-1.5">{m.l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative max-w-md mx-auto aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-[#06B6D4]/30 via-[#3B82F6]/20 to-[#7C3AED]/30 rounded-[2.5rem] blur-3xl" />
              <div className="relative rounded-[2rem] overflow-hidden border border-white/10 bg-[#0D1B2A] h-full">
                <img
                  src={c.heroImage}
                  alt={c.eyebrow}
                  className="absolute inset-0 w-full h-full object-cover animate-floaty"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071120] via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------- 2. WHY ---------------------------- */}
      <section data-testid={test("why")} className="relative py-24 md:py-28 bg-[#0A1525] border-y border-white/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-12 gap-10 mb-14">
            <div className="lg:col-span-7">
              <p className="text-xs uppercase tracking-[0.3em] text-[#06B6D4] mb-4">/ Why us</p>
              <h2 className="font-display font-black tracking-tighter text-white text-4xl sm:text-5xl lg:text-6xl leading-[1.02]">
                {c.whyTitle}
                <br />
                <span className="text-gradient">{c.whyAccent}</span>
              </h2>
            </div>
            <p className="lg:col-span-5 self-end text-white/60 leading-relaxed">{c.whySubtitle}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {c.reasons.map((r, i) => {
              const Ic = r.icon;
              return (
                <motion.div
                  key={r.t}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  data-testid={test(`why-${i}`)}
                  className="glass rounded-2xl p-7 hover:border-[#06B6D4]/40 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#06B6D4]/20 to-[#7C3AED]/20 border border-white/10 grid place-items-center text-[#06B6D4]">
                    <Ic className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-white mt-5 tracking-tight">{r.t}</h3>
                  <p className="text-sm text-white/55 mt-2 leading-relaxed">{r.d}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------------------- 3. INCLUDED ---------------------------- */}
      <section data-testid={test("included")} className="relative py-24 md:py-32 bg-[#071120] overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="relative max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs uppercase tracking-[0.3em] text-[#06B6D4] mb-4">/ What's included</p>
            <h2 className="font-display font-black tracking-tighter text-white text-4xl sm:text-5xl lg:text-6xl leading-[1.02]">
              {c.includedTitle} <span className="text-gradient">{c.includedAccent}</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {c.included.map((s, i) => {
              const Ic = s.icon;
              return (
                <motion.div
                  key={s.t}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (i % 3) * 0.06 }}
                  data-testid={test(`included-${i}`)}
                  className="beam-border group rounded-2xl border border-white/10 bg-white/[0.03] p-7 hover:bg-white/[0.05] transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#06B6D4]/20 to-[#7C3AED]/20 border border-white/10 grid place-items-center text-[#06B6D4]">
                      <Ic className="w-5 h-5" />
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-white/30 group-hover:text-[#06B6D4] group-hover:rotate-45 transition-all" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mt-6 leading-snug">{s.t}</h3>
                  <p className="text-sm text-white/60 mt-3 leading-relaxed">{s.d}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------------------- 4. PROCESS ---------------------------- */}
      <section data-testid={test("process")} className="relative py-24 md:py-28 bg-[#0A1525] border-y border-white/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-12 gap-10 mb-14">
            <div className="lg:col-span-7">
              <p className="text-xs uppercase tracking-[0.3em] text-[#06B6D4] mb-4">/ Process</p>
              <h2 className="font-display font-black tracking-tighter text-white text-4xl sm:text-5xl lg:text-6xl leading-[1.02]">
                A calm 6-step <span className="text-gradient">delivery system.</span>
              </h2>
            </div>
            <p className="lg:col-span-5 self-end text-white/60 leading-relaxed">
              Predictable timelines. Transparent communication. Senior craft at every milestone.
            </p>
          </div>
          <div className="hidden md:grid grid-cols-3 lg:grid-cols-6 gap-px bg-white/10 rounded-3xl overflow-hidden border border-white/10">
            {c.steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                data-testid={test(`step-${s.n}`)}
                className="bg-[#0A1525] p-6 lg:p-7 hover:bg-[#0E1B30] transition-colors"
              >
                <div className="font-display text-5xl font-black text-white/15">{s.n}</div>
                <h3 className="font-display font-bold text-lg text-white mt-3 tracking-tight">{s.t}</h3>
                <p className="text-sm text-white/55 mt-2 leading-relaxed">{s.d}</p>
              </motion.div>
            ))}
          </div>
          <div
            className="md:hidden -mx-6 px-6 flex gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar"
            data-testid={test("process-mobile-slider")}
          >
            {c.steps.map((s) => (
              <div key={s.n} className="snap-start min-w-[78%] glass rounded-2xl p-6">
                <div className="font-display text-4xl font-black text-white/15">{s.n}</div>
                <h3 className="font-display font-bold text-lg text-white mt-3">{s.t}</h3>
                <p className="text-sm text-white/55 mt-2">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------- 5. STACK ---------------------------- */}
      <section data-testid={test("stack")} className="relative py-24 md:py-32 bg-[#071120] overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs uppercase tracking-[0.3em] text-[#06B6D4] mb-4">/ Stack</p>
            <h2 className="font-display font-black tracking-tighter text-white text-4xl sm:text-5xl lg:text-6xl leading-[1.02]">
              The stack <span className="text-gradient">we trust.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {Object.entries(c.stack).map(([group, items], i) => (
              <motion.div
                key={group}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                data-testid={test(`stack-${group.toLowerCase()}`)}
                className="glass rounded-2xl p-7"
              >
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-[#06B6D4]">
                  <Boxes className="w-3.5 h-3.5" /> {group}
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {items.map((it) => (
                    <span
                      key={it}
                      className="px-3 py-1.5 rounded-full text-xs font-medium text-white/80 border border-white/10 bg-white/[0.03] hover:border-[#06B6D4]/40 transition"
                    >
                      {it}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------- 6. FEATURES ---------------------------- */}
      <section data-testid={test("features")} className="relative py-24 md:py-28 bg-[#0A1525] border-y border-white/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs uppercase tracking-[0.3em] text-[#06B6D4] mb-4">/ Features</p>
            <h2 className="font-display font-black tracking-tighter text-white text-4xl sm:text-5xl lg:text-6xl leading-[1.02]">
              {c.featuresTitle} <span className="text-gradient">{c.featuresAccent}</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 rounded-3xl overflow-hidden border border-white/10">
            {c.features.map((f, i) => (
              <motion.div
                key={f.t}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: (i % 3) * 0.05 }}
                data-testid={test(`feature-${i}`)}
                className="bg-[#0A1525] p-7 hover:bg-[#0E1B30] transition-colors"
              >
                <div className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#06B6D4]/10 border border-[#06B6D4]/30 text-[#06B6D4]">
                  <Check className="w-4 h-4" />
                </div>
                <h3 className="font-display font-bold text-lg text-white mt-4 tracking-tight">{f.t}</h3>
                <p className="text-sm text-white/55 mt-2 leading-relaxed">{f.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------- 7. PORTFOLIO ---------------------------- */}
      <section data-testid={test("portfolio")} className="relative py-24 md:py-32 bg-[#071120] overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="relative max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#06B6D4] mb-4">/ Recent work</p>
              <h2 className="font-display font-black tracking-tighter text-white text-4xl sm:text-5xl lg:text-6xl leading-[1.02]">
                {c.portfolioTitle} <span className="text-gradient">{c.portfolioAccent}</span>
              </h2>
            </div>
            <Link
              to="/portfolio"
              data-testid={test("portfolio-view-all")}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/15 text-white/85 font-semibold hover:bg-white/5 transition self-start md:self-auto"
            >
              View all <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {c.portfolio.map((p, i) => (
              <motion.a
                key={p.title}
                href="#"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                data-testid={test(`portfolio-card-${i}`)}
                className="group relative rounded-2xl overflow-hidden border border-white/10 bg-[#0D1B2A] aspect-[4/5] block"
              >
                <img
                  src={p.img}
                  alt={p.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071120] via-[#071120]/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <div className="text-[11px] uppercase tracking-[0.22em] text-[#06B6D4]">{p.cat}</div>
                  <h3 className="font-display font-bold text-2xl text-white mt-2 tracking-tight">{p.title}</h3>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm text-white/65">{p.metric}</span>
                    <span className="w-10 h-10 rounded-full bg-white/10 grid place-items-center group-hover:bg-[#06B6D4] transition">
                      <ArrowUpRight className="w-4 h-4 text-white group-hover:rotate-45 transition-transform" />
                    </span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------- 8. TESTIMONIALS ---------------------------- */}
      <Testimonials items={c.testimonials} slug={slug} />

      {/* ---------------------------- 9. FAQ ---------------------------- */}
      <section data-testid={test("faq")} className="relative py-24 md:py-32 bg-[#071120] overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative max-w-4xl mx-auto px-6 md:px-10">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.3em] text-[#06B6D4] mb-4">/ FAQ</p>
            <h2 className="font-display font-black tracking-tighter text-white text-4xl sm:text-5xl lg:text-6xl leading-[1.02]">
              Common questions.
            </h2>
          </div>
          <Accordion type="single" collapsible className="space-y-3">
            {c.faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                data-testid={test(`faq-item-${i}`)}
                className="border border-white/10 rounded-2xl bg-white/[0.03] px-6 data-[state=open]:border-[#06B6D4]/40 transition-colors"
              >
                <AccordionTrigger className="text-left text-white font-display text-lg md:text-xl py-5 hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-white/65 pb-5 leading-relaxed text-base">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ---------------------------- 10. FINAL CTA ---------------------------- */}
      <section data-testid={test("final-cta")} className="relative py-24 md:py-32 bg-[#071120] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[60%] bg-gradient-to-r from-[#06B6D4]/20 via-[#3B82F6]/15 to-[#7C3AED]/20 blur-3xl rounded-full" />
        </div>
        <div className="relative max-w-5xl mx-auto px-6 md:px-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display font-black tracking-tighter text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.98]"
          >
            {c.finalCta.title}
            <br />
            <span className="text-gradient">{c.finalCta.titleAccent}</span>
          </motion.h2>
          <p className="mt-7 text-base md:text-lg text-white/60 max-w-2xl mx-auto">{c.finalCta.sub}</p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              data-testid={test("final-cta-primary")}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-[#071120] font-semibold hover:bg-[#06B6D4] hover:text-white transition-colors btn-shine"
            >
              Book a strategy call <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              to="/portfolio"
              data-testid={test("final-cta-secondary")}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/15 text-white font-semibold hover:bg-white/5 transition"
            >
              View case studies
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function Testimonials({ items, slug }) {
  const [i, setI] = useState(0);
  const t = items[i];
  const test = (k) => `${slug}-${k}`;
  return (
    <section data-testid={test("testimonials")} className="relative py-24 md:py-32 bg-[#0A1525] border-y border-white/10 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 md:px-10 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-[#06B6D4] mb-4">/ Client voices</p>
        <h2 className="font-display font-black tracking-tighter text-white text-4xl sm:text-5xl lg:text-6xl leading-[1.02]">
          Loved by <span className="text-gradient">premium teams.</span>
        </h2>
        <div className="relative mt-14 glass rounded-3xl p-8 md:p-12 text-left">
          <Quote className="w-9 h-9 text-[#06B6D4]/50 mb-5" />
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4 }}
              className="font-display text-xl md:text-2xl lg:text-3xl font-medium text-white leading-snug tracking-tight"
              data-testid={test("testimonial-quote")}
            >
              "{t.q}"
            </motion.blockquote>
          </AnimatePresence>
          <div className="mt-10 flex items-center justify-between gap-6 flex-wrap">
            <div className="flex items-center gap-4">
              <img src={t.img} alt={t.n} className="w-12 h-12 rounded-full object-cover border border-white/10" />
              <div>
                <div className="font-bold text-white">{t.n}</div>
                <div className="text-sm text-white/55">{t.r}</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="w-4 h-4 fill-[#06B6D4] text-[#06B6D4]" />
                ))}
              </div>
              <button
                onClick={() => setI((p) => (p - 1 + items.length) % items.length)}
                data-testid={test("testimonial-prev")}
                aria-label="prev"
                className="w-11 h-11 rounded-full border border-white/15 grid place-items-center text-white/80 hover:bg-white/5"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => setI((p) => (p + 1) % items.length)}
                data-testid={test("testimonial-next")}
                aria-label="next"
                className="w-11 h-11 rounded-full bg-white text-[#071120] grid place-items-center hover:bg-[#06B6D4] hover:text-white transition"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
