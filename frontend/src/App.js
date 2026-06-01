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
import ShopifyVsWordPress from "./page/ShopifyVsWordPress";


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
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
