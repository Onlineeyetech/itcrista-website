import { motion } from "framer-motion";
import { ArrowUpRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const posts = [
  {
    title: "Why High-Growth Ecommerce Brands Choose Custom Shopify Development in 2026",
    excerpt: "Discover why growing ecommerce brands are moving beyond generic Shopify themes and investing in custom Shopify development for better performance, SEO, conversions, and long-term growth.",
    slug: "/blog/custom-website-development-guide",
    category: "Ecommerce",
    date: "May 25, 2026",
    read: "6 min",
    img: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Shopify vs WordPress: Which is Better for Business",
    excerpt: "From edge caching to image strategy — the moves that consistently bring LCP under one second on real production traffic.",
    slug: "/blog/shopify-vs-wordpress",
    category: "Ecommerce",
    date: "June 01, 2025",
    read: "9 min",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "15 Signs Your Business Website Is Losing Customers (And How to Fix Them",
    excerpt: "Is your website costing you leads and sales? Discover 15 common website problems that hurt SEO, reduce conversions, and drive potential customers away — plus practical solutions to improve performance and business growth.",
    category: "Website Growth",
     slug: "/blog/websitelosingcustomers",
    date: "June 10, 2026",
    read: "10 min",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1800&q=80",
  },
  {
    title: "Designing pricing pages that quietly convert at 12%+",
    excerpt: "Layout, anchoring and copy patterns we keep using on premium SaaS pricing pages that beat benchmark CR.",
    category: "Conversion",
    date: "Nov 14, 2025",
    read: "5 min",
    img: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80",
  },
];

function Card({ p, i }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: (i % 3) * 0.06 }}
      data-testid={`blog-card-${i}`}
      className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] transition-colors snap-start min-w-[300px] md:min-w-0"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={p.img}
          alt={p.title}
          className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071120] via-transparent to-transparent" />
        <span className="absolute top-4 left-4 inline-flex px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[11px] uppercase tracking-[0.2em] text-white">
          {p.category}
        </span>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-4 text-xs text-white/50">
          <span>{p.date}</span>
          <span className="inline-flex items-center gap-1">
            <Clock className="w-3 h-3" /> {p.read} read
          </span>
        </div>
        <h3 className="font-display font-bold text-white text-lg md:text-xl leading-snug mt-3 group-hover:text-[#06B6D4] transition-colors">
          {p.title}
        </h3>
        <p className="text-sm text-white/55 mt-3 leading-relaxed line-clamp-3">{p.excerpt}</p>
        <Link
  to={p.slug}
  data-testid={`blog-read-more-${i}`}
  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white/85 group-hover:text-[#06B6D4] transition"
>
  Read more
  <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
</Link>
      </div>
    </motion.article>
  );
}

export default function Blog() {
  return (
    <section data-testid="blog-section" className="relative py-8 md:py-16 bg-[#071120] overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-[#06B6D4] mb-4">Insights</p>
            <h2 className="font-display font-black tracking-tighter text-white text-4xl sm:text-5xl lg:text-6xl leading-[1.02]">
              From the <span className="text-gradient">ITcrista journal.</span>
            </h2>
          </div>
          <a
            href="#"
            data-testid="blog-view-all"
            className="self-start md:self-auto inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/15 text-white/85 font-semibold hover:bg-white/5 transition"
          >
            View all articles <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile slider (>3 cards) */}
        <div
          className="md:hidden -mx-6 px-6 flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 no-scrollbar"
          data-testid="blog-mobile-slider"
        >
          {posts.map((p, i) => (
            <Card key={p.title} p={p} i={i} />
          ))}
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((p, i) => (
            <Card key={p.title} p={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
