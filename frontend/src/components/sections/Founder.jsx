import { motion } from "framer-motion";
import { Linkedin, Twitter, Github, Mail, Sparkles, Award, Globe2, Users } from "lucide-react";

const highlights = [
  { icon: Award, label: "Built to Scale", sub: "Modern web solutions." },
  { icon: Globe2, label: "Global Clients", sub: "Trusted internationally." },
  { icon: Users, label: "Long-Term Support", sub: "Reliable growth partnership." },
];

export default function Founder() {
  return (
    <section
      data-testid="founder-section"
      className="relative py-24 md:py-32 bg-[#071120] overflow-hidden"
    >
      {/* Animated glowing background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 -left-20 w-[36rem] h-[36rem] bg-[#06B6D4]/15 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-0 right-0 w-[40rem] h-[40rem] bg-[#7C3AED]/15 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "5s" }}
        />
        <div className="absolute inset-0 bg-grid opacity-30" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-[#06B6D4] mb-4">Meet the Founder</p>
          <h2 className="font-display font-black tracking-tighter text-white text-4xl sm:text-5xl lg:text-6xl leading-[1.02]">
            The vision behind <span className="text-gradient">the studio.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Founder image card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative max-w-md mx-auto animate-floaty">
              {/* Glow */}
              <div className="absolute -inset-6 bg-gradient-to-br from-[#06B6D4]/30 via-[#3B82F6]/20 to-[#7C3AED]/30 rounded-[2.5rem] blur-2xl" />
              {/* Card */}
              <div className="relative rounded-[2rem] overflow-hidden border border-white/10 bg-[#0D1B2A] aspect-[4/5]">
                <img
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=900&q=80"
                  alt="Founder"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071120] via-[#071120]/20 to-transparent" />
                <div className="absolute top-5 left-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-full backdrop-blur-md bg-white/10 border border-white/15 text-[11px] uppercase tracking-[0.2em] text-white">
                  <Sparkles className="w-3 h-3 text-[#06B6D4]" /> Founder · CEO
                </div>
                {/* Signature */}
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                  <div>
                    <div className="font-display font-black text-2xl text-white tracking-tight">A. Crista</div>
                    <div
                      className="mt-1 text-[#06B6D4] text-2xl"
                      style={{ fontFamily: "'Dancing Script', 'Caveat', cursive", fontStyle: "italic" }}
                    >
                      ~ Crafted with intent
                    </div>
                  </div>
                  <div className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-md border border-white/15 grid place-items-center">
                    <span className="w-2 h-2 rounded-full bg-[#06B6D4] animate-pulse" />
                  </div>
                </div>
              </div>

              {/* Floating stat chip */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -left-4 top-10 glass rounded-2xl px-4 py-3 hidden md:block"
              >
                <div className="text-[11px] uppercase tracking-[0.2em] text-white/50">Founded</div>
                <div className="font-display font-black text-xl text-white">2016</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute -right-4 bottom-20 glass rounded-2xl px-4 py-3 hidden md:block"
              >
                <div className="text-[11px] uppercase tracking-[0.2em] text-white/50">Designs led</div>
                <div className="font-display font-black text-xl text-[#06B6D4]">250+</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="text-xs uppercase tracking-[0.3em] text-white/40 mb-3">Founder & CEO</div>
            <h3 className="font-display font-black tracking-tighter text-white text-2xl md:text-2xl leading-[1.05]">
             Built on Trust. Engineered for Growth.
            </h3>
            <p className="mt-5 text-white/70 leading-relaxed text-base md:text-lg max-w-xl">
            Rajat Bharawa founded ITcrista in 2022 after years of freelance web development experience and trusted client partnerships. Today, the agency delivers end-to-end web solutions including 
              <span className="text-white"> Shopify development, WordPress websites, React.js, Next.js, Node.js, and custom-coded platforms </span>
built for performance, SEO, scalability, and long-term business growth.
            </p>

            {/* Vision quote */}
            <div className="mt-3 relative pl-6 border-l-2 border-[#06B6D4]/60">
              <p className="font-display text-lg md:text-xl text-white/85 leading-relaxed italic">
                “A great website should do more than look good — it should help businesses grow faster, perform better, and scale confidently.”
              </p>
              <p className="mt-3 text-sm text-white/45">— Rajat Bharawa, Full Stack Developer</p>
            </div>

            {/* Highlights */}
            <div className="mt-4 grid sm:grid-cols-3 gap-3">
              {highlights.map((h, i) => {
                const Ic = h.icon;
                return (
                  <motion.div
                    key={h.label}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: 0.1 + i * 0.06 }}
                    className="glass rounded-2xl p-5 hover:border-[#06B6D4]/40 transition-colors"
                    data-testid={`founder-highlight-${i}`}
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 grid place-items-center text-[#06B6D4]">
                      <Ic className="w-4 h-4" />
                    </div>
                    <div className="font-display font-black text-2xl text-white mt-4">{h.label}</div>
                    <div className="text-xs text-white/55 mt-1">{h.sub}</div>
                  </motion.div>
                );
              })}
            </div>

            {/* Socials */}
            <div className="mt-3 flex items-center gap-3">
              <span className="text-xs uppercase tracking-[0.25em] text-white/40 mr-2">Connect</span>
              {[
                { Ic: Linkedin, href: "www.linkedin.com/in/rajat-bharawa", label: "linkedin" },
                { Ic: Twitter, href: "#", label: "twitter" },
                { Ic: Github, href: "#", label: "github" },
                { Ic: Mail, href: "#", label: "email" },
              ].map(({ Ic, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  data-testid={`founder-social-${label}`}
                  className="w-11 h-11 rounded-full border border-white/15 grid place-items-center text-white/75 hover:text-white hover:border-[#06B6D4]/50 hover:bg-white/5 transition"
                >
                  <Ic className="w-4 h-4" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
