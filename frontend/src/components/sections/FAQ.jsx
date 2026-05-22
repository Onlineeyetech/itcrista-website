import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";

const faqs = [
  { q: "How long does a typical project take?", a: "Most landing pages launch in 2 weeks. Full websites in 4-6 weeks. Custom platforms and large ecommerce builds usually run 8-16 weeks depending on scope." },
  { q: "Do you work with international clients?", a: "Yes. We currently partner with founders, teams and agencies across 40+ countries. We work asynchronously and over scheduled live sessions in your timezone." },
  { q: "Can you white-label for other agencies?", a: "Absolutely. We have a dedicated white-label engagement model for design and dev studios that need premium delivery capacity." },
  { q: "What tech stacks do you specialise in?", a: "React, Next.js, Node, Laravel, Shopify, WordPress, WooCommerce, Magento and bespoke CMS — chosen based on what fits your product best." },
  { q: "Do you offer ongoing maintenance?", a: "Yes — flexible monthly support plans covering hosting, updates, performance, security, content edits and growth experiments." },
  { q: "How do payments and contracts work?", a: "We work on a milestone basis with transparent SOWs. 30% to begin, balance split across delivery phases. NDA & MSA available on request." },
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
