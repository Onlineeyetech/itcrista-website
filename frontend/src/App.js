import { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CustomWebsiteDevelopment from "./pages/CustomWebsiteDevelopment";
import ShopifyDevelopment from "./pages/ShopifyDevelopment";
import WordPressDevelopment from "./pages/WordPressDevelopment";
import SpeedOptimization from "./pages/SpeedOptimization";
import MaintenanceSupport from "./pages/MaintenanceSupport";
import UIUXDesign from "./pages/UIUXDesign";
import BlogArticle from "./pages/BlogArticle";
import ShopifyVsWordPress from "./pages/ShopifyVsWordPress";
import Blogs from "./pages/Blogs";
import WebsiteLosingCustomers from "./pages/Blogs/WebsiteLosingCustomers";
import HowToChoose from "./pages/Blogs/HowToChoose";
import Websitemistakes from "./pages/Blogs/Websitemistakes";
import TechnicalSEOChecklist from "./pages/Blogs/TechnicalSEOChecklist";
import AIPowered from "./pages/Blogs/AIPowered";
import ContactFloatingButton from "./components/ContactFloatingButton";
import WebsiteGetsTrafficButNoLeads from "./pages/Blogs/WebsiteGetsTrafficButNoLeads";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

function App() {
  return (
    <div className="App bg-[#071120] text-white min-h-screen">
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services/custom-website-development"  element={<CustomWebsiteDevelopment />}/>
          <Route path="/services/shopify-development" element={<ShopifyDevelopment />} />
          <Route path="/services/wordpress-development" element={<WordPressDevelopment />} />
          <Route path="/services/speed-optimization" element={<SpeedOptimization />} />
          <Route path="/services/maintenance-support" element={<MaintenanceSupport />} />
          <Route path="/services/ui-ux-design" element={<UIUXDesign />} />
          <Route path="/blog/custom-website-development-guide" element={<BlogArticle />} />
          <Route path="/blog/shopify-vs-wordpress" element={<ShopifyVsWordPress />} />
          <Route path="/blog/websitelosingcustomers" element={<WebsiteLosingCustomers />} />   
          <Route path="/blog/how-to-choose-the-right-web-development-agency-2026" element={<HowToChoose />} />   
          <Route path="/blog/25-website-mistakes-that-hurt-google-rankings" element={<Websitemistakes />} />   
          <Route path="/blog/technical-seo-checklist-for-business-websites" element={<TechnicalSEOChecklist />} /> 
          <Route path="/blog/ai-powered-web-development" element={<AIPowered />} /> 
          <Route path="/blog/Website-Gets-Traffic-But-No-Leads" element={<WebsiteGetsTrafficButNoLeads />} /> 
          <Route path="/blogs" element={<Blogs />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
   <ContactFloatingButton />   {/* ← add this line */}
      </BrowserRouter>
    </div>
  );
}


export default App;
