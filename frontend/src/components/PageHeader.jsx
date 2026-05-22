import { motion } from "framer-motion";

export default function PageHeader({ eyebrow, title, subtitle }) {
  return (
    <section data-testid="page-header" className="relative pt-32 md:pt-40 pb-16 md:pb-20 bg-[#071120] overflow-hidden hero-glow">
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="relative max-w-5xl mx-auto px-6 md:px-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs uppercase tracking-[0.3em] text-[#06B6D4] mb-5"
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="font-display font-black tracking-tighter text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.02]"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mt-6 text-base md:text-lg text-white/60 max-w-2xl mx-auto leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
