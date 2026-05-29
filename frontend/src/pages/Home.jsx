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

        <link rel="canonical" href="https://itcrista.in/" />
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
       <FAQ />
      <FinalCTA />
    </main>
        </>
  );
}
