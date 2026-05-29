import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const items = [
  {
    quote: "Superb, Rajat has been super easy to work with, always available to get the work done",
    name: "Aditya Rathi",
    role: "Bluebrew.in · Founder",
    img: "https://images.unsplash.com/photo-1638290047807-4c9d389b9aa6?auto=format&fit=crop&w=400&q=80",
  },
  {
    quote: "My go to web designer! Trusted & work always on point. Understands my aesthetics & implement it. 11/10 from my side",
    name: "Vidhi Goel",
    role: "Scoopofjewels · Founder",
    img: "https://images.unsplash.com/photo-1764545973653-94c40d993495?auto=format&fit=crop&w=400&q=80",
  },
  {
    quote: "Rajat is a great guy to work with, always available. He is very good and fast with his work. He is a very hard working guy.",
    name: "Vatsala Chopra ",
    role: "Veaves · Founder",
    img: "https://images.unsplash.com/photo-1767175620484-1ed37931a0d1?auto=format&fit=crop&w=400&q=80",
  },
];

export default function Testimonials() {
  const [i, setI] = useState(0);
  const t = items[i];
  const prev = () => setI((p) => (p - 1 + items.length) % items.length);
  const next = () => setI((p) => (p + 1) % items.length);

  return (
    <section data-testid="testimonials-section" className="relative py-8 md:py-16 bg-[#071120] overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="relative max-w-5xl mx-auto px-6 md:px-10 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-[#06B6D4] mb-4">Testimonials</p>
        <h2 className="font-display font-black tracking-tighter text-white text-4xl sm:text-5xl lg:text-6xl leading-[1.02]">
          Loved by founders
          <br />
          <span className="text-gradient">across the globe.</span>
        </h2>

        <div className="relative mt-14 glass rounded-3xl p-8 md:p-14 text-left">
          <Quote className="w-10 h-10 text-[#06B6D4]/50 mb-5" />
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4 }}
              className="font-display text-2xl md:text-3xl lg:text-4xl font-medium text-white leading-snug tracking-tight"
              data-testid="testimonial-quote"
            >
              "{t.quote}"
            </motion.blockquote>
          </AnimatePresence>

          <div className="mt-10 flex items-center justify-between gap-6 flex-wrap">
            <div className="flex items-center gap-4">
              <img src={t.img} alt={t.name} className="w-14 h-14 rounded-full object-cover border border-white/10" />
              <div>
                <div className="font-bold text-white">{t.name}</div>
                <div className="text-sm text-white/55">{t.role}</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="w-4 h-4 fill-[#06B6D4] text-[#06B6D4]" />
                ))}
              </div>
              <button onClick={prev} data-testid="testimonial-prev" aria-label="prev" className="w-11 h-11 rounded-full border border-white/15 grid place-items-center text-white/80 hover:bg-white/5">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button onClick={next} data-testid="testimonial-next" aria-label="next" className="w-11 h-11 rounded-full bg-white text-[#071120] grid place-items-center hover:bg-[#06B6D4] hover:text-white transition">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
