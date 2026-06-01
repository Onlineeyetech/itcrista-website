import Hero from "../components/sections/Hero";
import TrustedBy from "../components/sections/TrustedBy";
import Services from "../components/sections/Services";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import Portfolio from "../components/sections/Portfolio";
import VideoShowcase from "../components/sections/VideoShowcase";
import Process from "../components/sections/Process";
import Testimonials from "../components/sections/Testimonials";
import Founder from "../components/sections/Founder";
import Technologies from "../components/sections/Technologies";
import Pricing from "../components/sections/Pricing";
import Blog from "../components/sections/Blog";
import FAQ from "../components/sections/FAQ";
import FinalCTA from "../components/sections/FinalCTA";
import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
     <>
      <Helmet>
        <title>
          ITcrista infoX | Custom Website Development & Shopify Experts
        </title>

        <meta
          name="description"
          content="Custom website development, Shopify stores, WordPress, SEO optimization, website redesign and eCommerce solutions for growing businesses worldwide."
        />

       <link rel="canonical" href="https://www.itcrista.in/" />
<script type="application/ld+json">
{JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "ITcrista",
  "alternateName": "ITcrista infoX",
  "url": "https://www.itcrista.in",
  "logo": "https://www.itcrista.in/logo.png",
  "description":
    "ITcrista is a web development agency providing custom website development, Shopify development, WordPress development, React.js, Next.js, website maintenance, eCommerce solutions and technical SEO services for businesses worldwide.",
  "founder": {
    "@type": "Person",
    "name": "Rajat Bharawa",
    "jobTitle": "Founder & Creative Director"
  },
  "sameAs": [
    "https://www.linkedin.com/company/itcrista-infox"
  ],
  "areaServed": [
    "India",
    "Australia",
    "Canada"
  ],
  "knowsAbout": [
    "Shopify Development",
    "WordPress Development",
    "Custom Website Development",
    "React.js Development",
    "Next.js Development",
    "Website Maintenance",
    "Technical SEO",
    "eCommerce Development"
  ]
})}
</script>
      </Helmet>

    <main data-testid="home-page">
      <Hero />
      <TrustedBy />
      <Services />
      <WhyChooseUs />
      <Portfolio />
      <Process />
      <Testimonials />
      <Founder />
      <Technologies />
      <Blog />
       <FAQ />
      <FinalCTA />
    </main>
        </>
  );
}
