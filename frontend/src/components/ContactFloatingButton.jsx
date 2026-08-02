
import { useEffect, useState, useCallback } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import { ArrowUpRight, Check, MessageCircle, X } from "lucide-react";

// /**
//  * Mobile-only floating "Contact Us" button + glassmorphism modal
//  * that reuses the existing <Contact /> page/form exactly as-is.
//  *
//  * - Hidden on desktop (>= lg breakpoint)
//  * - Fixed bottom-right, high z-index
//  * - Opens a premium modal with the existing Contact component inside
//  * - Closes via X button, overlay click, or Escape key
//  * - Locks body scroll while open
//  */
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
          {/* <span className="font-display tracking-tight">Contact Us</span> */}
          {/* <span className="w-2 h-2 rounded-full bg-[#06B6D4] animate-pulse" /> */}
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
const [sent, setSent] = useState(false);

const [form, setForm] = useState({
  name: "",
  email: "",
  phone: "",
  company: "",
  budget: "",
  message: "",
});

const update = (k, v) => setForm((f) => ({ ...f, [k]: v }));

const submit = async (e) => {
 return (
  <form
    onSubmit={submit}
    data-testid="contact-form"
    className="glass rounded-3xl p-8 md:p-10 space-y-5"
  >
    {sent && (
      <div className="flex items-center gap-3 rounded-xl border border-[#06B6D4]/40 bg-[#06B6D4]/10 px-4 py-3 text-sm text-white">
        <Check className="w-4 h-4 text-[#06B6D4]" />
        Thanks — we'll get back to you within 24 hours.
      </div>
    )}

    <div className="grid sm:grid-cols-2 gap-4">
      <Field
        label="Your Name"
        value={form.name}
        onChange={(v) => update("name", v)}
        required
      />

      <Field
        label="Email"
        type="email"
        value={form.email}
        onChange={(v) => update("email", v)}
        required
      />

      <Field
        label="Phone Number"
        type="tel"
        value={form.phone}
        onChange={(v) => update("phone", v)}
        required
        pattern="[0-9]{10,15}"
        maxLength={15}
      />

      <Field
        label="Company"
        value={form.company}
        onChange={(v) => update("company", v)}
      />
    </div>

    <div>
      <label className="text-xs uppercase tracking-[0.25em] text-white/50">
        Tell us about the project
      </label>

      <textarea
        rows={5}
        value={form.message}
        onChange={(e) => update("message", e.target.value)}
        required
        className="mt-2 w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-white/30 outline-none focus:border-[#06B6D4]/50"
        placeholder="Goals, timeline, links, anything else..."
      />
    </div>

    <button
      type="submit"
      className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white text-[#071120] font-semibold hover:bg-[#06B6D4] hover:text-white transition-colors btn-shine"
    >
      Send Message <ArrowUpRight className="w-4 h-4" />
    </button>
  </form>
);
};
}
