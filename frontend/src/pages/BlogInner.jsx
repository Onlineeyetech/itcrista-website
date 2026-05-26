import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  Tag,
  User,
  ArrowLeft,
  ArrowUpRight,
  Twitter,
  Linkedin,
  Link2,
  Quote,
} from "lucide-react";

const toc = [
  { id: "intro", label: "Introduction" },
  { id: "shift", label: "Why themes are losing favor" },
  { id: "framework", label: "The custom Hydrogen framework" },
  { id: "results", label: "Results we've measured" },
  { id: "conclusion", label: "Where to go from here" },
];

const related = [
  {
    title: "A practical playbook for sub-1s Core Web Vitals",
    category: "Performance",
    date: "Dec 03, 2025",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Headless WordPress in 2026: when it's worth it",
    category: "WordPress",
    date: "Nov 24, 2025",
    img: "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Designing pricing pages that convert at 12%+",
    category: "Conversion",
    date: "Nov 14, 2025",
    img: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=80",
  },
];

export default function BlogInner() {
  return (
    <section data-testid="blog-inner-section" className="relative bg-[#071120] text-white">
      {/* Hero */}
      <div className="relative pt-32 md:pt-40 pb-16 hero-glow overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-6 md:px-10">
          <a
            href="/blog"
            data-testid="blog-back-link"
            className="inline-flex items-center gap-2 text-sm text-white/55 hover:text-white transition mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Back to all articles
          </a>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span
              data-testid="blog-inner-category"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#06B6D4]/10 border border-[#06B6D4]/30 text-[11px] uppercase tracking-[0.22em] text-[#06B6D4] font-semibold"
            >
              <Tag className="w-3 h-3" /> Ecommerce
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-white/50">
              <Calendar className="w-3.5 h-3.5" /> Dec 12, 2025
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-white/50">
              <Clock className="w-3.5 h-3.5" /> 6 min read
            </span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display font-black tracking-tighter text-4xl sm:text-5xl lg:text-6xl leading-[1.02]"
          >
            Why premium ecommerce brands are
            <br className="hidden md:block" />{" "}
            <span className="text-gradient">abandoning Shopify themes in 2026.</span>
          </motion.h1>

          <p className="mt-6 text-base md:text-lg text-white/65 leading-relaxed max-w-2xl">
            The shift toward fully custom Shopify Hydrogen storefronts is reshaping luxury DTC. Here's what we're seeing on the ground — and what to ship instead.
          </p>

          {/* Author */}
          <div className="mt-10 flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <img
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=200&q=80"
                alt="Author"
                className="w-12 h-12 rounded-full border border-white/15 object-cover"
              />
              <div>
                <div className="font-semibold text-white text-sm flex items-center gap-2">
                  <User className="w-3.5 h-3.5 text-white/40" /> Aarav Crista
                </div>
                <div className="text-xs text-white/50">Founder · ITcrista infoX</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase tracking-[0.25em] text-white/40 mr-2">Share</span>
              {[
                { Ic: Twitter, l: "twitter" },
                { Ic: Linkedin, l: "linkedin" },
                { Ic: Link2, l: "copy" },
              ].map(({ Ic, l }) => (
                <button
                  key={l}
                  data-testid={`blog-share-${l}`}
                  className="w-10 h-10 rounded-full border border-white/15 grid place-items-center text-white/70 hover:text-white hover:border-[#06B6D4]/50 hover:bg-white/5 transition"
                  aria-label={`share-${l}`}
                >
                  <Ic className="w-4 h-4" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Featured image */}
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <div className="relative rounded-3xl overflow-hidden border border-white/10 aspect-[16/9]">
          <img
            src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=1800&q=80"
            alt="Featured"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071120] via-transparent to-transparent" />
        </div>
      </div>

      {/* Body grid */}
      <div className="relative py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-12 gap-10 lg:gap-16">
          {/* TOC */}
          <aside className="lg:col-span-3 order-2 lg:order-1">
            <div className="lg:sticky lg:top-28">
              <div className="text-xs uppercase tracking-[0.25em] text-white/40 mb-4">On this page</div>
              <nav className="space-y-2">
                {toc.map((t) => (
                  <a
                    key={t.id}
                    href={`#${t.id}`}
                    data-testid={`blog-toc-${t.id}`}
                    className="block text-sm text-white/60 hover:text-[#06B6D4] transition border-l border-white/10 hover:border-[#06B6D4] pl-3 py-1"
                  >
                    {t.label}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Article */}
          <article
            data-testid="blog-inner-article"
            className="lg:col-span-9 order-1 lg:order-2 prose-invert max-w-none"
          >
            <section id="intro">
              <h2 className="font-display font-black text-2xl md:text-3xl tracking-tight text-white">
                Introduction
              </h2>
              <p className="mt-4 text-white/75 leading-relaxed text-lg">
                Two years ago, recommending a premium Shopify theme was good advice. In 2026 it is, more often than not, the wrong call. The reasons are quietly stacking up — and the brands that move first are pulling away.
              </p>
            </section>

            <section id="shift" className="mt-10">
              <h2 className="font-display font-black text-2xl md:text-3xl tracking-tight text-white">
                Why themes are losing favor
              </h2>
              <p className="mt-4 text-white/75 leading-relaxed">
                Premium themes solve the wrong problem in 2026. They optimise for assembly speed, not for performance, brand expression or growth experimentation. As Lighthouse, search engines and shoppers raise their expectations, the ceiling of a theme-based store is hitting fast.
              </p>
              <ul className="mt-4 space-y-2 text-white/75">
                <li className="flex gap-3"><span className="text-[#06B6D4]">·</span> Themes ship dozens of features you never use — bloating the bundle.</li>
                <li className="flex gap-3"><span className="text-[#06B6D4]">·</span> Brand expression is capped by the editor.</li>
                <li className="flex gap-3"><span className="text-[#06B6D4]">·</span> A/B testing high-impact UX is friction-heavy.</li>
              </ul>
            </section>

            <div className="my-12 relative rounded-3xl glass p-8">
              <Quote className="w-8 h-8 text-[#06B6D4]/50 mb-4" />
              <blockquote className="font-display text-xl md:text-2xl text-white leading-snug italic">
                "Themes optimise for assembly. Custom storefronts optimise for outcomes. In 2026, that gap is where the moat is."
              </blockquote>
              <p className="mt-4 text-sm text-white/50">— Aarav Crista, Founder · ITcrista infoX</p>
            </div>

            <section id="framework">
              <h2 className="font-display font-black text-2xl md:text-3xl tracking-tight text-white">
                The custom Hydrogen framework
              </h2>
              <p className="mt-4 text-white/75 leading-relaxed">
                We've standardised our luxury DTC builds on Shopify Hydrogen, Oxygen and a tightly-scoped design system. The result is a storefront that loads in under one second, renders pixel-perfect across every device and lets the marketing team ship landing pages without touching code.
              </p>
              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <div className="text-xs uppercase tracking-[0.22em] text-[#06B6D4]">LCP</div>
                  <div className="font-display font-black text-3xl text-white mt-2">0.8s</div>
                  <div className="text-sm text-white/55 mt-1">P75 across mobile traffic</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <div className="text-xs uppercase tracking-[0.22em] text-[#06B6D4]">Conversion lift</div>
                  <div className="font-display font-black text-3xl text-white mt-2">+34%</div>
                  <div className="text-sm text-white/55 mt-1">Year-over-year, averaged across 12 clients</div>
                </div>
              </div>
            </section>

            <section id="results" className="mt-10">
              <h2 className="font-display font-black text-2xl md:text-3xl tracking-tight text-white">
                Results we've measured
              </h2>
              <p className="mt-4 text-white/75 leading-relaxed">
                Across twelve premium DTC brands we migrated from themes to custom Hydrogen in 2025, the median outcomes were striking — and they compounded month over month.
              </p>
            </section>

            <section id="conclusion" className="mt-10">
              <h2 className="font-display font-black text-2xl md:text-3xl tracking-tight text-white">
                Where to go from here
              </h2>
              <p className="mt-4 text-white/75 leading-relaxed">
                If you're spending more than $50k/month on paid traffic or running a brand that customers expect to feel premium, a custom storefront is no longer optional. It's the highest-leverage upgrade you can make to the next two years of your business.
              </p>

              <a
                href="/contact"
                data-testid="blog-inner-cta"
                className="mt-8 inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-[#071120] font-semibold hover:bg-[#06B6D4] hover:text-white transition-colors btn-shine"
              >
                Talk to our team <ArrowUpRight className="w-4 h-4" />
              </a>
            </section>
          </article>
        </div>
      </div>

      {/* Related */}
      <div className="relative border-t border-white/10 py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex items-end justify-between mb-10">
            <h3 className="font-display font-black text-white text-3xl md:text-4xl tracking-tighter">
              Continue reading
            </h3>
            <a href="/blog" className="hidden sm:inline-flex items-center gap-2 text-sm text-white/60 hover:text-white">
              All articles <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((r, i) => (
              <a
                key={r.title}
                href="#"
                data-testid={`blog-related-${i}`}
                className="group rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] transition-colors"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={r.img}
                    alt={r.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071120] via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] uppercase tracking-[0.2em] bg-white/10 backdrop-blur-md border border-white/15 text-white">
                    {r.category}
                  </span>
                </div>
                <div className="p-5">
                  <div className="text-xs text-white/50">{r.date}</div>
                  <h4 className="font-display font-bold text-white text-lg leading-snug mt-2 group-hover:text-[#06B6D4] transition-colors">
                    {r.title}
                  </h4>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
