import { Link } from "react-router-dom";
import { ArrowUpRight, Github, Linkedin, Twitter, Instagram, Mail } from "lucide-react";
const socialLinks = [
  {
    icon: Linkedin,
    url: "https://www.linkedin.com/company/itcrista-infox",
    label: "LinkedIn",
  },
  {
    icon: Instagram,
    url: "https://www.instagram.com/itcrista_infox/",
    label: "Instagram",
  },
  {
    icon: Mail,
    url: "mailto:admin@itcrista.in",
    label: "Email",
  },
];

const cols = [
  {
    title: "Services",
    links: [
         { name: "Custom Website Development", url: "/services/custom-website-development" },
    { name: "Shopify Development", url: "/services/shopify-development" },
    { name: "WordPress Development", url: "/services/wordpress-development" },
    ],
  },
  {
  title: "Solutions",
  links: [
       { name: "Maintenance & Support", url: "/services/maintenance-support" },
     { name: "Speed Optimization", url: "/services/speed-optimization" },
     { name: "UI / UX Design", url: "/services/ui-ux-design" },
  ],
},
 {
  title: "Company",
  links: [
    { name: "About", url: "/about" },
    { name: "Blogs", url: "/blogs" },
    { name: "Contact", url: "/contact" },
    { name: "Portfolio", url: "/portfolio" }  
    
  ]
}
];

export default function Footer() {
  return (
    <footer data-testid="footer" className="relative bg-[#071120] text-white border-t border-white/10 overflow-hidden">
      <div className="absolute inset-x-0 -top-32 h-64 bg-gradient-to-b from-[#06B6D4]/10 to-transparent blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-24 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center gap-2">
              {/* <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#06B6D4] via-[#3B82F6] to-[#7C3AED] grid place-items-center font-display font-black text-white">i</div> */}
              {/* <span className="font-display text-2xl font-bold tracking-tight">ITcrista <span className="text-[#06B6D4]">infoX</span></span> */}
                <img src="/logo/itcrista-logo-white.png" style={{ width: "149px" }} />
            </Link>
            <p className="mt-5 text-white/60 max-w-sm leading-relaxed">
              A world-class IT agency crafting premium digital experiences for ambitious brands, startups and enterprises across the globe.
            </p>
            <Link
              to="/contact"
              data-testid="footer-cta"
              className="mt-6 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-[#071120] font-semibold hover:bg-[#06B6D4] hover:text-white transition-colors btn-shine"
            >
              Start a Project <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="text-xs uppercase tracking-[0.2em] text-white/50 font-semibold mb-5">{c.title}</h4>
              <ul className="space-y-3">
              {c.links.map((item) => (
  <li key={item.name}>
    <Link
      to={item.url}
      className="text-white/70 hover:text-[#06B6D4] text-sm transition-colors"
    >
      {item.name}
    </Link>
  </li>
))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex flex-wrap items-center gap-4 text-sm text-white/50">
            <span>© {new Date().getFullYear()} ITcrista infoX. All rights reserved.</span>
            <span className="hidden md:inline">·</span>  <span><a
  href="https://www.linkedin.com/in/rajat-bharawa/"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-white transition-colors"
>
  Design & Developed By Rajat Bharawa
</a></span>
             </div>
         <div className="flex items-center gap-3">
  {socialLinks.map((item, i) => {
    const Icon = item.icon;

    return (
      <a
        key={i}
        href={item.url}
        target={item.url.startsWith("http") ? "_blank" : "_self"}
        rel="noopener noreferrer"
        aria-label={item.label}
        data-testid={`footer-social-${i}`}
        className="w-10 h-10 grid place-items-center rounded-full border border-white/10 text-white/70 hover:text-white hover:border-[#06B6D4]/50 hover:bg-white/5 transition-colors"
      >
        <Icon className="w-4 h-4" />
      </a>
    );
  })}
</div>
        </div>
      </div>

      {/* <div className="select-none pointer-events-none overflow-hidden">
        <div className="text-[18vw] leading-none font-display font-black tracking-tighter text-transparent text-center" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.08)" }}>
          ITcrista
        </div>
      </div> */}
    </footer>
  );
}
