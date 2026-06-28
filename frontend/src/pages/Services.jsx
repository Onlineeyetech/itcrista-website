import Services from "../components/sections/Services";
import Process from "../components/sections/Process";
import Pricing from "../components/sections/Pricing";
import FAQ from "../components/sections/FAQ";
import FinalCTA from "../components/sections/FinalCTA";
import Technologies from "../components/sections/Technologies";
import PageHeader from "../components/PageHeader";

export default function ServicesPage() {
  return (
    <main data-testid="services-page">
      <PageHeader
        eyebrow="Services"
        title={<>End-to-end <span className="text-gradient">digital services.</span></>}
        subtitle="From discovery to delivery, our senior team handles every layer of your digital product — design, engineering, performance, growth and ongoing support."
      />
      <Services />
      <Technologies />
      <Process />
      <Pricing />
      <FAQ />
      <FinalCTA />
    </main>
  );
}
