import { motion } from "framer-motion";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import Process from "../components/sections/Process";
import Testimonials from "../components/sections/Testimonials";
import FinalCTA from "../components/sections/FinalCTA";
import PageHeader from "../components/PageHeader";
import { Helmet } from "react-helmet-async";

const values = [
  { t: "Craft", d: "Premium websites built with precision and performance in mind." },
  { t: "Clarity", d: "Transparent communication and predictable project delivery." },
  { t: "Reliability", d: "Scalable solutions backed by modern development standards." },
  { t: "Growth", d: "SEO, speed, and conversions built into every project." },
];

export default function AboutPage() {
  return (
    <>
       <Helmet>
    <title>
      About ITcrista infoX | Web Development, Shopify & SEO Experts
    </title>

    <meta
      name="description"
      content="Learn about ITcrista infoX, a leading web development company specializing in custom website development, Shopify development, WordPress websites, ecommerce solutions, SEO optimization and website redesign services."
    />

    <link rel="canonical" href="https://itcrista.in/about" />
  </Helmet>
      <main data-testid="about-page">
      <PageHeader
        eyebrow="About IT-Crista"
        title={<>Built on Trust. <span className="text-gradient">Engineered for Growth.</span></>}
        subtitle="ITcrista is a web development agency founded by Rajat Bharawa, helping businesses build high-performance websites, Shopify stores, and custom digital platforms. Working with brands across India, Australia, and Canada, we combine modern development, technical SEO, and long-term support to create scalable digital experiences that drive traffic, conversions, and business growth."
      />
      <section className="py-8 md:py-16 bg-[#071120]">
        <div className="max-w-6xl mx-auto px-6 md:px-10 grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <p className="text-xs uppercase tracking-[0.3em] text-[#06B6D4] mb-4">Our values</p>
            <h2 className="font-display font-black tracking-tighter text-white text-4xl md:text-5xl leading-[1.05]">
              What Drives Every Build.
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
    </>
  );
}
