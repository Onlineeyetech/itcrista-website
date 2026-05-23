import Hero from "../components/sections/Hero";
import TrustedBy from "../components/sections/TrustedBy";
import Services from "../components/sections/Services";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import Portfolio from "../components/sections/Portfolio";
import Process from "../components/sections/Process";
import Testimonials from "../components/sections/Testimonials";
import Technologies from "../components/sections/Technologies";
import Pricing from "../components/sections/Pricing";
import Blog from "../components/sections/Blog";
import FAQ from "../components/sections/FAQ";
import FinalCTA from "../components/sections/FinalCTA";

export default function Home() {
  return (
    <main data-testid="home-page">
      <Hero />
      <TrustedBy />
      <Services />
      <WhyChooseUs />
      <Portfolio />
      <Process />
      <Testimonials />
      <Technologies />
      <Pricing />
      <Blog />
      <FAQ />
      <FinalCTA />
    </main>
  );
}
