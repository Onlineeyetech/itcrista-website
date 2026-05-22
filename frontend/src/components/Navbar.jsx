import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      data-testid="navbar"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-[#071120]/75 border-b border-white/10 saturate-150"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10 flex items-center justify-between h-16 md:h-20">
        <Link to="/" data-testid="navbar-logo" className="flex items-center gap-2 group">
          <div className="relative w-8 h-8 rounded-lg bg-gradient-to-br from-[#06B6D4] via-[#3B82F6] to-[#7C3AED] grid place-items-center">
            <span className="font-display font-black text-white text-sm">i</span>
            <span className="absolute -inset-1 rounded-xl bg-gradient-to-br from-[#06B6D4]/30 to-[#7C3AED]/30 blur-md opacity-0 group-hover:opacity-100 transition" />
          </div>
          <span className="font-display font-bold text-white text-lg tracking-tight">
            ITcrista <span className="text-[#06B6D4]">infoX</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              data-testid={`nav-link-${l.label.toLowerCase()}`}
              className={({ isActive }) =>
                `relative px-4 py-2 text-sm font-medium transition-colors ${
                  isActive ? "text-white" : "text-white/60 hover:text-white"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {l.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute left-3 right-3 -bottom-1 h-px bg-gradient-to-r from-[#06B6D4] to-[#7C3AED]"
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            data-testid="navbar-cta"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#071120] text-sm font-semibold hover:bg-[#06B6D4] hover:text-white transition-colors btn-shine"
          >
            Get in Touch
            <ArrowUpRight className="w-4 h-4" />
          </Link>
          <button
            data-testid="navbar-menu-toggle"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden w-10 h-10 grid place-items-center rounded-full border border-white/10 text-white hover:bg-white/5"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="lg:hidden border-t border-white/10 bg-[#071120]/95 backdrop-blur-xl"
            data-testid="navbar-mobile-menu"
          >
            <div className="px-6 py-6 flex flex-col gap-1">
              {links.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  data-testid={`nav-mobile-link-${l.label.toLowerCase()}`}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-xl text-base font-medium ${
                      isActive ? "bg-white/5 text-white" : "text-white/70"
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              ))}
              <Link
                to="/contact"
                data-testid="navbar-mobile-cta"
                className="mt-3 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white text-[#071120] font-semibold"
              >
                Get in Touch <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
