import Portfolio from "../components/sections/Portfolio";
import Testimonials from "../components/sections/Testimonials";
import FinalCTA from "../components/sections/FinalCTA";
import PageHeader from "../components/PageHeader";

export default function PortfolioPage() {
  return (
    <main data-testid="portfolio-page">
      <PageHeader
        eyebrow="/ Portfolio"
        title={<>Work that earned a <span className="text-gradient">standing ovation.</span></>}
        subtitle="A curated collection of premium ecommerce, SaaS and brand websites delivered for global founders and enterprise teams."
      />
      <Portfolio />
      <Testimonials />
      <FinalCTA />
    </main>
  );
}
