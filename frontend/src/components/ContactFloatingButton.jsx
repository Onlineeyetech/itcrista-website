
import { useEffect, useState, useCallback } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import Contact from "../pages/Contact";

/**
 * Mobile-only floating "Contact Us" button + glassmorphism modal
 * that reuses the existing <Contact /> page/form exactly as-is.
 *
 * - Hidden on desktop (>= lg breakpoint)
 * - Fixed bottom-right, high z-index
 * - Opens a premium modal with the existing Contact component inside
 * - Closes via X button, overlay click, or Escape key
 * - Locks body scroll while open
 */
export default function ContactFloatingButton() {
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  // Escape to close
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close]);

  // Lock body scroll while open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <>
      {/* Floating button — mobile only */}
      <div
        className="lg:hidden fixed bottom-5 right-5 z-[80]"
        data-testid="contact-fab-wrapper"
      >
        <motion.button
          type="button"
          onClick={() => setOpen(true)}
          data-testid="contact-fab-button"
          aria-label="Open contact form"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, type: "spring", stiffness: 260, damping: 22 }}
          whileTap={{ scale: 0.94 }}
          whileHover={{ scale: 1.04 }}
          className="group relative inline-flex items-center gap-2.5 pl-4 pr-5 py-3.5 rounded-full bg-white text-[#071120] font-semibold text-sm shadow-[0_10px_40px_-8px_rgba(6,182,212,0.55),0_4px_16px_rgba(0,0,0,0.35)] border border-white/70 backdrop-blur"
        >
          <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#06B6D4]/40 via-[#3B82F6]/30 to-[#7C3AED]/40 blur-lg opacity-70 group-hover:opacity-100 group-active:opacity-100 transition-opacity -z-10" />
          <span className="w-9 h-9 -ml-2 rounded-full bg-gradient-to-br from-[#06B6D4] via-[#3B82F6] to-[#7C3AED] grid place-items-center text-white shadow-inner">
            <MessageCircle className="w-4 h-4" />
          </span>
          <span className="font-display tracking-tight">Contact Us</span>
          <span className="w-2 h-2 rounded-full bg-[#06B6D4] animate-pulse" />
        </motion.button>
      </div>

      {/* Popup */}
      <ContactPopup open={open} onClose={close} />
    </>
  );
}

/* ------------------------------------------------------------------ */
/*                            Popup                                    */
/* ------------------------------------------------------------------ */
function ContactPopup({ open, onClose }) {
  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <div
          className="lg:hidden fixed inset-0 z-[90]"
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-popup-title"
          data-testid="contact-popup"
        >
          {/* Overlay */}
          <motion.button
            type="button"
            aria-label="Close contact popup"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            data-testid="contact-popup-overlay"
            className="absolute inset-0 bg-[#03080F]/75 backdrop-blur-xl cursor-default"
          />

          {/* Panel */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="absolute inset-x-3 top-4 bottom-4 rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#071120]/85 backdrop-blur-2xl flex flex-col"
          >
            {/* Gradient glow */}
            <div className="pointer-events-none absolute -top-24 -right-24 w-[26rem] h-[26rem] rounded-full bg-gradient-to-br from-[#06B6D4]/25 via-[#3B82F6]/15 to-[#7C3AED]/25 blur-3xl" />

            {/* Header */}
            <div className="relative flex items-center justify-between px-5 py-4 border-b border-white/10 bg-white/[0.02]">
              <div className="flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-full bg-gradient-to-br from-[#06B6D4] via-[#3B82F6] to-[#7C3AED] grid place-items-center text-white">
                  <MessageCircle className="w-4 h-4" />
                </span>
                <div id="contact-popup-title" className="font-display font-bold text-white tracking-tight">
                  Contact Us
                </div>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                data-testid="contact-popup-close"
                className="w-10 h-10 grid place-items-center rounded-full border border-white/10 text-white/80 hover:text-white hover:bg-white/5 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable body — hosts the existing Contact page */}
            <div
              className="relative flex-1 overflow-y-auto overscroll-contain"
              data-testid="contact-popup-body"
            >
              {/* Neutralise the page's top hero padding when embedded in modal */}
              <div className="contact-popup-embed">
                <Contact />
              </div>

              {/* Local style: trim large top padding of the embedded page hero */}
              <style>{`
                .contact-popup-embed [data-testid="page-header"] {
                  padding-top: 1.5rem;
                  padding-bottom: 1rem;
                  display:none;
                }
                .contact-popup-embed [data-testid="contact-page"] > section:last-child {
                  padding-bottom: 2rem;
                }
              `}</style>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}
