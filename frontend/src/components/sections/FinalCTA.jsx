import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section data-testid="final-cta-section" className="relative py-8 md:py-16 bg-[#071120] overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[60%] bg-gradient-to-r from-[#06B6D4]/20 via-[#3B82F6]/15 to-[#7C3AED]/20 blur-3xl rounded-full" />
      </div>
      <div className="relative max-w-6xl mx-auto px-6 md:px-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display font-black tracking-tighter text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95]"
        >
          Let's build
          <br />
          <span className="text-gradient">the future, together.</span>
        </motion.h2>
        <p className="mt-8 text-base md:text-lg text-white/60 max-w-2xl mx-auto">
          Whether you're scaling a product or rebuilding a brand — we're the senior team you've been looking for.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/contact"
            data-testid="final-cta-primary"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-[#071120] font-semibold hover:bg-[#06B6D4] hover:text-white transition-colors btn-shine"
          >
            Book a Strategy Call <ArrowUpRight className="w-4 h-4" />
          </Link>
          <Link
            to="/portfolio"
            data-testid="final-cta-secondary"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/15 text-white font-semibold hover:bg-white/5 transition"
          >
            View Case Studies
          </Link>
        </div>
      </div>
    </section>
  );
}
