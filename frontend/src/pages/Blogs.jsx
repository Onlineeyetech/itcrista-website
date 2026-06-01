import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ArrowUpRight, Clock, Calendar, Tag, BookOpen } from "lucide-react";

/* ------------------------------------------------------------------ */
/*                    Reusable blog dataset                            */
/* ------------------------------------------------------------------ */
const BLOG_POSTS = [
  {
    slug: "shopify-themes-vs-custom-hydrogen-2026",
    title: "Why premium ecommerce brands are abandoning Shopify themes in 2026",
    excerpt: "The shift toward fully custom Shopify Hydrogen storefronts is reshaping luxury DTC. Here's why — and what to ship instead.",
    category: "Ecommerce",
    date: "Dec 12, 2025",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "sub-1s-core-web-vitals-playbook",
    title: "A practical playbook for sub-1s Core Web Vitals on production sites",
    excerpt: "From edge caching to image strategy — the moves that consistently bring LCP under one second on real production traffic.",
    category: "Performance",
    date: "Dec 03, 2025",
    readTime: "9 min",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "headless-wordpress-2026",
    title: "Headless WordPress in 2026: when it's worth it (and when it isn't)",
    excerpt: "A clear-eyed look at the tradeoffs of going headless on WordPress for content-heavy enterprise sites.",
    category: "WordPress",
    date: "Nov 24, 2025",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "pricing-pages-that-convert",
    title: "Designing pricing pages that quietly convert at 12%+",
    excerpt: "Layout, anchoring and copy patterns we keep using on premium SaaS pricing pages that beat benchmark CR.",
    category: "Conversion",
    date: "Nov 14, 2025",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "shopify-functions-deep-dive",
    title: "Shopify Functions deep dive: what's actually worth building",
    excerpt: "After shipping 40+ Functions across luxury DTC brands, here's the use-cases that move the needle.",
    category: "Shopify",
    date: "Nov 05, 2025",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "design-system-for-marketing",
    title: "Designing a marketing-only design system that ships landing pages weekly",
    excerpt: "How to scope a token-based system marketing teams can use without ever touching engineering.",
    category: "Design",
    date: "Oct 28, 2025",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b8?auto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "wp-graphql-vs-rest",
    title: "WPGraphQL vs REST: choosing the right WordPress API in 2026",
    excerpt: "A pragmatic comparison from someone who has shipped both at scale across editorial brands.",
    category: "WordPress",
    date: "Oct 19, 2025",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "react-server-components-2026",
    title: "React Server Components, two years in — what changed our minds",
    excerpt: "A senior team's honest take on RSC for premium marketing sites and SaaS apps after real production traffic.",
    category: "Engineering",
    date: "Oct 10, 2025",
    readTime: "9 min",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "luxury-dtc-checkout-patterns",
    title: "Checkout patterns we keep using for luxury DTC brands",
    excerpt: "Six patterns we've tested on premium fashion and skincare brands that consistently lift conversion.",
    category: "Ecommerce",
    date: "Oct 02, 2025",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "ai-in-cms-2026",
    title: "Where AI actually belongs in a modern CMS",
    excerpt: "Beyond the hype: the four AI integrations we've found genuinely useful for editorial teams.",
    category: "Engineering",
    date: "Sep 22, 2025",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "image-strategy-2026",
    title: "The 2026 image strategy guide for premium websites",
    excerpt: "AVIF, responsive sizing, edge delivery and priority hints — a full reference for performance leads.",
    category: "Performance",
    date: "Sep 14, 2025",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "ux-research-on-a-budget",
    title: "Premium UX research for teams that don't have a research org",
    excerpt: "The three lightweight research practices that meaningfully de-risk every design engagement we run.",
    category: "Design",
    date: "Sep 05, 2025",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1400&q=80",
  },
];

const CATEGORIES = ["All", "Ecommerce", "Shopify", "WordPress", "Performance", "Design", "Engineering", "Conversion"];

const PAGE_SIZE = 8;

/* ------------------------------------------------------------------ */
/*                            Page                                     */
/* ------------------------------------------------------------------ */
export default function Blogs() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [visible, setVisible] = useState(PAGE_SIZE);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return BLOG_POSTS.filter((p) => {
      const matchesCat = category === "All" || p.category === category;
      const matchesQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q);
      return matchesCat && matchesQuery;
    });
  }, [query, category]);

  const showing = filtered.slice(0, visible);
  const canLoadMore = visible < filtered.length;

  const onFilter = (c) => {
    setCategory(c);
    setVisible(PAGE_SIZE);
  };
  const onSearch = (v) => {
    setQuery(v);
    setVisible(PAGE_SIZE);
  };

  return (
    <main data-testid="blogs-page" className="bg-[#071120] text-white">
      {/* ---------------------------- HERO ---------------------------- */}
      <section
        data-testid="blogs-hero"
        className="relative pt-32 md:pt-40 pb-16 md:pb-20 overflow-hidden hero-glow"
      >
        <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-6 md:px-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] text-xs uppercase tracking-[0.25em] text-white/70">
            <BookOpen className="w-3.5 h-3.5 text-[#06B6D4]" />
            ITcrista Journal
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display font-black tracking-tighter text-white mt-6 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.02]"
          >
            Insights from the <br />
            <span className="text-gradient">premium studio.</span>
          </motion.h1>
          <p className="mt-6 text-base md:text-lg text-white/65 max-w-2xl mx-auto leading-relaxed">
            Field-tested writing on ecommerce, performance, design systems and the craft of shipping luxury digital products in 2026.
          </p>

          {/* Search */}
          <div className="mt-10 max-w-xl mx-auto">
            <label className="relative block">
              <span className="sr-only">Search articles</span>
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
              <input
                type="search"
                value={query}
                onChange={(e) => onSearch(e.target.value)}
                placeholder="Search articles, topics, tags…"
                data-testid="blogs-search-input"
                className="w-full bg-white/[0.04] border border-white/10 rounded-full pl-14 pr-5 py-4 text-white placeholder:text-white/30 outline-none focus:border-[#06B6D4]/50 transition"
              />
            </label>
          </div>
        </div>
      </section>

      {/* ---------------------------- FILTERS ---------------------------- */}
      <section
        data-testid="blogs-filters-section"
        className="relative border-t border-white/10 bg-[#0A1525] py-6 sticky top-16 md:top-20 z-30 backdrop-blur-xl"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex gap-2 overflow-x-auto no-scrollbar -mx-2 px-2">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => onFilter(c)}
                data-testid={`blogs-filter-${c.toLowerCase()}`}
                className={`whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-medium border transition ${
                  category === c
                    ? "bg-white text-[#071120] border-white"
                    : "border-white/15 text-white/70 hover:text-white hover:border-white/40"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------- GRID ---------------------------- */}
      <section data-testid="blogs-grid-section" className="relative py-16 md:py-20">
        <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 md:px-10">
          {/* Result count */}
          <div className="flex items-center justify-between mb-8">
            <p className="text-sm text-white/55" data-testid="blogs-result-count">
              Showing <span className="text-white font-semibold">{showing.length}</span> of{" "}
              <span className="text-white font-semibold">{filtered.length}</span> articles
              {category !== "All" && <> in <span className="text-[#06B6D4]">{category}</span></>}
            </p>
          </div>

          {/* Empty state */}
          {filtered.length === 0 ? (
            <div
              data-testid="blogs-empty-state"
              className="text-center py-24 border border-white/10 rounded-3xl bg-white/[0.02]"
            >
              <div className="text-white/40 text-sm uppercase tracking-[0.25em] mb-3">No matches</div>
              <h3 className="font-display font-black text-2xl md:text-3xl text-white tracking-tight">
                Try a different keyword or category.
              </h3>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <AnimatePresence mode="popLayout">
                {showing.map((p, i) => (
                  <motion.article
                    key={p.slug}
                    layout
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.45, delay: (i % 4) * 0.05 }}
                    data-testid={`blogs-card-${i}`}
                    className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] transition-colors flex flex-col"
                  >
                    <Link to={`/blog/${p.slug}`} className="contents">
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <img
                          src={p.image}
                          alt={p.title}
                          className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#071120] via-transparent to-transparent" />
                        <span className="absolute top-4 left-4 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[11px] uppercase tracking-[0.2em] text-white">
                          <Tag className="w-3 h-3" /> {p.category}
                        </span>
                      </div>
                      <div className="p-6 flex-1 flex flex-col">
                        <div className="flex items-center gap-4 text-xs text-white/50">
                          <span className="inline-flex items-center gap-1.5">
                            <Calendar className="w-3 h-3" /> {p.date}
                          </span>
                          <span className="inline-flex items-center gap-1.5">
                            <Clock className="w-3 h-3" /> {p.readTime} read
                          </span>
                        </div>
                        <h3 className="font-display font-bold text-white text-lg md:text-xl leading-snug mt-3 group-hover:text-[#06B6D4] transition-colors line-clamp-3">
                          {p.title}
                        </h3>
                        <p className="text-sm text-white/55 mt-3 leading-relaxed line-clamp-3">{p.excerpt}</p>
                        <div className="mt-5 pt-5 border-t border-white/10 flex items-center justify-between">
                          <span className="text-sm font-semibold text-white/85 group-hover:text-[#06B6D4] transition inline-flex items-center gap-2">
                            Read more <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </AnimatePresence>
            </div>
          )}

          {/* Load more */}
          {canLoadMore && (
            <div className="mt-12 flex justify-center">
              <button
                onClick={() => setVisible((v) => v + PAGE_SIZE)}
                data-testid="blogs-load-more"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-white/15 text-white font-semibold hover:bg-white/5 hover:border-[#06B6D4]/40 transition btn-shine"
              >
                Load more articles
                <span className="text-white/50 text-sm">({filtered.length - visible} left)</span>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ---------------------------- CTA ---------------------------- */}
      <section
        data-testid="blogs-cta"
        className="relative py-20 md:py-24 bg-[#0A1525] border-y border-white/10 overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[60%] bg-gradient-to-r from-[#06B6D4]/15 via-[#3B82F6]/10 to-[#7C3AED]/15 blur-3xl rounded-full" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 md:px-10 text-center">
          <h2 className="font-display font-black tracking-tighter text-white text-3xl sm:text-4xl md:text-5xl leading-[1.02]">
            Get our best writing,
            <br />
            <span className="text-gradient">once a month.</span>
          </h2>
          <p className="mt-6 text-white/65 max-w-xl mx-auto">
            One curated email a month with our deepest pieces on premium ecommerce, performance and design — no spam, ever.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            data-testid="blogs-subscribe-form"
          >
            <input
              type="email"
              required
              placeholder="you@brand.com"
              data-testid="blogs-subscribe-email"
              className="flex-1 bg-white/[0.04] border border-white/10 rounded-full px-5 py-3.5 text-white placeholder:text-white/30 outline-none focus:border-[#06B6D4]/50"
            />
            <button
              type="submit"
              data-testid="blogs-subscribe-submit"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white text-[#071120] font-semibold hover:bg-[#06B6D4] hover:text-white transition-colors btn-shine"
            >
              Subscribe
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
