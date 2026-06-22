import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  Calendar,
  Clock,
  Tag,
  User,
  Quote,
  Check,
  Twitter,
  Linkedin,
  Link2,
  Mail,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

/* ------------------------------------------------------------------ */
/*                          Helpers                                    */
/* ------------------------------------------------------------------ */
const slugify = (s = "") =>
  s
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-");

const wordCount = (blocks = []) =>
  blocks.reduce((acc, b) => {
    if (!b) return acc;
    if (typeof b.text === "string") acc += b.text.split(/\s+/).length;
    if (Array.isArray(b.items)) acc += b.items.join(" ").split(/\s+/).length;
    if (typeof b.quote === "string") acc += b.quote.split(/\s+/).length;
    if (Array.isArray(b.faqs)) {
      acc += b.faqs.map((f) => `${f.q} ${f.a}`).join(" ").split(/\s+/).length;
    }
    return acc;
  }, 0);

const readingTime = (blocks) => Math.max(1, Math.round(wordCount(blocks) / 220));

const buildToc = (blocks = []) =>
  blocks
    .filter((b) => b.type === "h2")
    .map((b) => ({ id: slugify(b.text), label: b.text }));

/* ------------------------------------------------------------------ */
/*                        Content Renderer                             */
/* ------------------------------------------------------------------ */
function Block({ b, slug, i }) {
  const test = (k) => `${slug}-${k}`;

  if (b.type === "h2") {
    const id = slugify(b.text);
    return (
      <h2
        id={id}
        data-testid={test(`h2-${i}`)}
        className="font-display font-black tracking-tight text-white text-2xl md:text-3xl mt-12 scroll-mt-28"
      >
        {b.text}
      </h2>
    );
  }
  if (b.type === "h3") {
    return (
      <h3
        data-testid={test(`h3-${i}`)}
        className="font-display font-bold text-white text-xl md:text-2xl mt-8 tracking-tight"
      >
        {b.text}
      </h3>
    );
  }
  if (b.type === "paragraph") {
    return (
      <p
        data-testid={test(`p-${i}`)}
        className="text-white/75 leading-relaxed text-base md:text-lg mt-5"
      >
        {b.text}
      </p>
    );
  }
  if (b.type === "list") {
    return (
      <ul data-testid={test(`list-${i}`)} className="mt-5 space-y-3">
        {b.items.map((item, k) => (
          <li key={k} className="flex gap-3 text-white/75 leading-relaxed">
            <Check className="w-4 h-4 mt-1 text-[#06B6D4] flex-shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    );
  }
  if (b.type === "quote") {
    return (
      <figure
        data-testid={test(`quote-${i}`)}
        className="my-12 relative rounded-3xl glass p-8"
      >
        <Quote className="w-8 h-8 text-[#06B6D4]/50 mb-4" />
        <blockquote className="font-display text-xl md:text-2xl text-white leading-snug italic">
          "{b.quote}"
        </blockquote>
        {b.cite && (
          <figcaption className="mt-4 text-sm text-white/50">— {b.cite}</figcaption>
        )}
      </figure>
    );
  }
  if (b.type === "image") {
    return (
      <figure className="my-10" data-testid={test(`image-${i}`)}>
        <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-[16/9]">
          <img
            src={b.src}
            alt={b.alt || ""}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        {b.caption && (
          <figcaption className="mt-3 text-sm text-white/50 text-center">{b.caption}</figcaption>
        )}
      </figure>
    );
  }
  if (b.type === "stats") {
    return (
      <div data-testid={test(`stats-${i}`)} className="mt-8 grid sm:grid-cols-2 gap-4">
        {b.items.map((s) => (
          <div key={s.label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <div className="text-xs uppercase tracking-[0.22em] text-[#06B6D4]">{s.label}</div>
            <div className="font-display font-black text-3xl text-white mt-2">{s.value}</div>
            {s.note && <div className="text-sm text-white/55 mt-1">{s.note}</div>}
          </div>
        ))}
      </div>
    );
  }
  if (b.type === "faqs") {
    return (
      <div data-testid={test(`faqs-${i}`)} className="mt-10">
        <h2 className="font-display font-black tracking-tight text-white text-2xl md:text-3xl mb-6">
          Frequently asked
        </h2>
        <Accordion type="single" collapsible className="space-y-3">
          {b.faqs.map((f, k) => (
            <AccordionItem
              key={k}
              value={`faq-${k}`}
              data-testid={test(`faq-item-${k}`)}
              className="border border-white/10 rounded-2xl bg-white/[0.03] px-6 data-[state=open]:border-[#06B6D4]/40 transition-colors"
            >
              <AccordionTrigger className="text-left text-white font-display text-base md:text-lg py-4 hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-white/65 pb-5 leading-relaxed text-base">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    );
  }
  return null;
}

/* ------------------------------------------------------------------ */
/*                           Template                                  */
/* ------------------------------------------------------------------ */
export default function BlogPageTemplate({
  title,
  excerpt,
  author,
  publishDate,
  category,
  featuredImage,
  content = [],
  relatedPosts = [],
  slug,
}) {
  const articleSlug = slug || slugify(title);
  const toc = buildToc(content);
  const minutes = readingTime(content);
  const test = (k) => `${articleSlug}-${k}`;

  return (
    <main
      data-testid={`${articleSlug}-page`}
      className="bg-[#071120] text-white"
    >
      {/* ---------------------------- 1. HERO ---------------------------- */}
      <section
        data-testid={test("hero")}
        className="relative pt-32 md:pt-40 pb-16 overflow-hidden hero-glow"
      >
        <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 md:px-10">
          <Link
            to="/blog"
            data-testid={test("back-link")}
            className="inline-flex items-center gap-2 text-sm text-white/55 hover:text-white transition mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Back to all articles
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span
              data-testid={test("category")}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#06B6D4]/10 border border-[#06B6D4]/30 text-[11px] uppercase tracking-[0.22em] text-[#06B6D4] font-semibold"
            >
              <Tag className="w-3 h-3" /> {category}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-white/50">
              <Calendar className="w-3.5 h-3.5" /> {publishDate}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-white/50">
              <Clock className="w-3.5 h-3.5" /> {minutes} min read
            </span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display font-black tracking-tighter text-4xl sm:text-5xl lg:text-6xl leading-[1.02]"
          >
            {title}
          </motion.h1>

          {excerpt && (
            <p className="mt-6 text-base md:text-lg text-white/65 leading-relaxed max-w-2xl">
              {excerpt}
            </p>
          )}

          <div className="mt-10 flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <img
                src={author.image}
                alt={author.name}
                className="w-12 h-12 rounded-full border border-white/15 object-cover"
              />
              <div>
                <div className="font-semibold text-white text-sm flex items-center gap-2">
                  <User className="w-3.5 h-3.5 text-white/40" /> {author.name}
                </div>
                <div className="text-xs text-white/50">{author.role}</div>
              </div>
            </div>
            <ShareRail slug={articleSlug} compact />
          </div>
        </div>
      </section>

      {/* --------------------- 2. FEATURED IMAGE ------------------------- */}
      {featuredImage && (
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div
            data-testid={test("featured-image")}
            className="relative rounded-3xl overflow-hidden border border-white/10 aspect-[16/9]"
          >
            <img
              src={featuredImage}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071120] via-transparent to-transparent" />
          </div>
        </div>
      )}

      {/* ---------------------- 3. BODY (TOC + ARTICLE) ------------------ */}
      <section className="relative py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Sticky TOC */}
          <aside className="lg:col-span-3 order-2 lg:order-1">
            <div className="lg:sticky lg:top-28">
              <div
                data-testid={test("toc")}
                className="text-xs uppercase tracking-[0.25em] text-white/40 mb-4"
              >
                On this page
              </div>
              <nav className="space-y-2">
                {toc.map((t) => (
                  <a
                    key={t.id}
                    href={`#${t.id}`}
                    data-testid={test(`toc-${t.id}`)}
                    className="block text-sm text-white/60 hover:text-[#06B6D4] transition border-l border-white/10 hover:border-[#06B6D4] pl-3 py-1"
                  >
                    {t.label}
                  </a>
                ))}
                {toc.length === 0 && (
                  <span className="text-sm text-white/40">Quick read.</span>
                )}
              </nav>

              <div className="mt-10 hidden lg:block">
                <div className="text-xs uppercase tracking-[0.25em] text-white/40 mb-3">Share</div>
                <ShareRail slug={articleSlug} />
              </div>
            </div>
          </aside>

          {/* Article */}
          <article
            data-testid={test("article")}
            className="lg:col-span-9 order-1 lg:order-2 max-w-none"
          >
            {content.map((b, i) => (
              <Block key={i} b={b} slug={articleSlug} i={i} />
            ))}
          </article>
        </div>
      </section>

      {/* --------------------------- 4. AUTHOR BOX ------------------------ */}
      <section className="relative pb-16">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <div
            data-testid={test("author-box")}
            className="glass rounded-3xl p-8 md:p-10 flex flex-col md:flex-row gap-6 md:items-center"
          >
            <img
              src="/Gemini_Generated_Image_bzqpp3bzqpp3bzqp.png"
              alt={author.name}
              className="w-20 h-20 rounded-full object-cover border border-white/15"
            />
            <div className="flex-1">
              <div className="text-xs uppercase tracking-[0.25em] text-[#06B6D4] mb-2">
                Written by
              </div>
              <div className="font-display font-bold text-white text-xl tracking-tight">
                {author.name}
              </div>
              <div className="text-sm text-white/55 mt-1">{author.role}</div>
              {author.bio && (
                <p className="text-white/65 mt-3 leading-relaxed text-sm md:text-base">
                  {author.bio}
                </p>
              )}
              {author.socials && (
                <div className="mt-4 flex items-center gap-2">
                  {author.socials.twitter && (
                    <a
                      href={author.socials.twitter}
                      aria-label="twitter"
                      className="w-9 h-9 grid place-items-center rounded-full border border-white/15 text-white/70 hover:text-white hover:border-[#06B6D4]/50 transition"
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                  )}
                  {author.socials.linkedin && (
                    <a
                      href={author.socials.linkedin}
                      aria-label="linkedin"
                      className="w-9 h-9 grid place-items-center rounded-full border border-white/15 text-white/70 hover:text-white hover:border-[#06B6D4]/50 transition"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                  {author.socials.email && (
                    <a
                      href={`mailto:${author.socials.email}`}
                      aria-label="email"
                      className="w-9 h-9 grid place-items-center rounded-full border border-white/15 text-white/70 hover:text-white hover:border-[#06B6D4]/50 transition"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------- 5. CTA ----------------------------- */}
      <section
        data-testid={test("cta")}
        className="relative py-20 md:py-24 bg-[#0A1525] border-y border-white/10 overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[60%] bg-gradient-to-r from-[#06B6D4]/15 via-[#3B82F6]/10 to-[#7C3AED]/15 blur-3xl rounded-full" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 md:px-10 text-center">
          <h2 className="font-display font-black tracking-tighter text-white text-3xl sm:text-4xl md:text-5xl leading-[1.02]">
            Want this kind of work
            <br /> <span className="text-gradient">for your brand?</span>
          </h2>
          <p className="mt-6 text-white/65 max-w-xl mx-auto">
            We partner with a small number of founders each quarter. Tell us about your project — we respond within 24 hours.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              data-testid={test("cta-primary")}
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white text-[#071120] font-semibold hover:bg-[#06B6D4] hover:text-white transition-colors btn-shine"
            >
              Book a strategy call <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              to="/portfolio"
              data-testid={test("cta-secondary")}
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-white/15 text-white font-semibold hover:bg-white/5 transition"
            >
              View case studies
            </Link>
          </div>
        </div>
      </section>

      {/* ------------------------ 6. RELATED POSTS ------------------------ */}
      {relatedPosts.length > 0 && (
        <section data-testid={test("related")} className="relative py-20">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="flex items-end justify-between mb-10">
              <h3 className="font-display font-black text-white text-3xl md:text-4xl tracking-tighter">
                Continue reading
              </h3>
              <Link
                to="/blog"
                className="hidden sm:inline-flex items-center gap-2 text-sm text-white/60 hover:text-white"
              >
                All articles <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((r, i) => (
                <Link
                  key={r.title}
                  to={r.href || "#"}
                  data-testid={test(`related-${i}`)}
                  className="group rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] transition-colors"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={r.image}
                      alt={r.title}
                      className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071120] via-transparent to-transparent" />
                    {r.category && (
                      <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] uppercase tracking-[0.2em] bg-white/10 backdrop-blur-md border border-white/15 text-white">
                        {r.category}
                      </span>
                    )}
                  </div>
                  <div className="p-5">
                    {r.date && (
                      <div className="text-xs text-white/50">{r.date}</div>
                    )}
                    <h4 className="font-display font-bold text-white text-lg leading-snug mt-2 group-hover:text-[#06B6D4] transition-colors">
                      {r.title}
                    </h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}

/* ------------------------------------------------------------------ */
/*                          Share Rail                                 */
/* ------------------------------------------------------------------ */
function ShareRail({ slug, compact = false }) {
  const items = [
    { Ic: Twitter, label: "twitter" },
    { Ic: Linkedin, label: "linkedin" },
    { Ic: Link2, label: "copy" },
  ];
  return (
    <div className={`flex items-center gap-2 ${compact ? "" : "flex-col"}`}>
      {!compact && (
        <span className="text-[10px] uppercase tracking-[0.25em] text-white/40 mb-1">Share</span>
      )}
      {items.map(({ Ic, label }) => (
        <button
          key={label}
          data-testid={`${slug}-share-${label}`}
          aria-label={`share-${label}`}
          className="w-10 h-10 rounded-full border border-white/15 grid place-items-center text-white/70 hover:text-white hover:border-[#06B6D4]/50 hover:bg-white/5 transition"
        >
          <Ic className="w-4 h-4" />
        </button>
      ))}
    </div>
  );
}
