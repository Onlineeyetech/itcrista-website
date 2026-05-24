import Marquee from "react-fast-marquee";

const brands = [
  "Loop", "Inkhouse", "Niviasports", "Veaves", "CrescentGroup", "Bestink", "Nindhaara", "Veaves", "CrescentGroup", "Agri-Auto", "Scalitconsulting", "Veda",
];

export default function TrustedBy() {
  return (
    <section data-testid="trusted-by-section" className="relative py-16 md:py-20 border-y border-white/10 bg-[#0A1525]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <p className="text-center text-xs uppercase tracking-[0.3em] text-white/40 mb-10">
          Trusted by world-class brands & teams
        </p>
        <Marquee gradient gradientColor="#0A1525" gradientWidth={100} speed={40} pauseOnHover>
          {brands.map((b, i) => (
            <div
              key={i}
              data-testid={`trusted-brand-${b.toLowerCase()}`}
              className="mx-10 font-display font-black text-3xl md:text-4xl text-white/40 hover:text-white transition-colors"
            >
              {b}
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
