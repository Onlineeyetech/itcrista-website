import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";

const faqs = [
  { q: "How long does custom website development take?", a: "Most custom website development projects are completed within 2–6 weeks depending on features, integrations, and project scope. Advanced Shopify stores, SaaS platforms, and custom web applications may require additional development and testing time for performance optimization and scalability." },
  { q: "Do you provide Shopify and WordPress development services?", a: "Yes. We specialize in Shopify development, WordPress website development, custom theme design, speed optimization, app integrations, and scalable eCommerce solutions tailored for modern businesses and growing brands." },
  { q: "Are your websites SEO optimized?", a: "Absolutely. Every website is built with technical SEO, mobile responsiveness, fast loading speeds, Core Web Vitals optimization, clean code structure, and search-engine-friendly architecture to improve rankings, traffic, and online visibility." },
  { q: "Do you work with international clients?", a: "Yes. ITcrista works with startups, agencies, eCommerce brands, and businesses across India, Australia, Canada, and other global markets through fully remote collaboration and long-term development support." },
  { q: "What technologies do you use for web development?", a: "We work with modern technologies including React.js, Next.js, Node.js, Shopify, WordPress, custom CMS platforms, and scalable full-stack web development solutions designed for performance and business growth." },
  { q: "Do you offer ongoing website maintenance and support?", a: "Yes. We provide ongoing website maintenance, performance optimization, technical support, and SEO improvements for brands and eCommerce businesses. Our long-term maintenance partnerships include platforms like Nivia Sports, where we help maintain website performance, stability, and user experience on a monthly basis." },
];

export default function FAQ() {
  return (
    <section data-testid="faq-section" className="relative py-24 md:py-32 bg-[#071120] overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="relative max-w-4xl mx-auto px-6 md:px-10">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-[#06B6D4] mb-4">/ FAQ</p>
          <h2 className="font-display font-black tracking-tighter text-white text-4xl sm:text-5xl lg:text-6xl leading-[1.02]">
            Frequently asked.
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border border-white/10 rounded-2xl bg-white/[0.03] px-6 data-[state=open]:border-[#06B6D4]/40 transition-colors"
              data-testid={`faq-item-${i}`}
            >
              <AccordionTrigger className="text-left text-white font-display text-lg md:text-xl py-5 hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-white/65 pb-5 leading-relaxed text-base">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
