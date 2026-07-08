import { useState } from "react";
import { Mail, MapPin, Phone, ArrowUpRight, Check } from "lucide-react";
import PageHeader from "../components/PageHeader";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
 const [form, setForm] = useState({
  name: "",
  email: "",
  phone: "",
  company: "",
  budget: "",
  message: ""
});

  const update = (k, v) => setForm((f) => ({ ...f, [k]: v }));
const submit = async (e) => {
  e.preventDefault();
  
  const phoneRegex = /^\+?[1-9]\d{9,14}$/;

  if (!phoneRegex.test(form.phone)) {
    alert("Please enter a valid phone number.");
    return;
  }

  try {

    await fetch(
      "https://script.google.com/macros/s/AKfycbzVOTfYbUb-9jeJCBNllQZrzRS7uJvNPSqK6YVFCcS9UASRn30GTp9PjWkJU5CqNGlN/exec",
      {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      }
    );

    setSent(true);

    setForm({
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    });

  } catch (error) {
    console.log("Submit Error:", error);
  }
};

  return (
    <main data-testid="contact-page">
      <PageHeader
        eyebrow="/ Contact"
        title={<>Let's start something <span className="text-gradient">extraordinary.</span></>}
        subtitle="Tell us about your project. We respond within 24 hours with a tailored proposal and the team best suited for your engagement."
      />
      <section className="pb-24 md:pb-32 bg-[#071120]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5 space-y-5">
            {[
              { Ic: Mail, label: "Email", value: "admin@itcrista.in" },
              { Ic: Phone, label: "Phone", value: "........" },
              { Ic: MapPin, label: "Studio", value: "Remote · Worldwide" },
            ].map((c) => (
              <div key={c.label} className="glass rounded-2xl p-6 flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 grid place-items-center text-[#06B6D4]">
                  <c.Ic className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.25em] text-white/50">{c.label}</div>
                  <div className="font-display font-bold text-white text-lg mt-1">{c.value}</div>
                </div>
              </div>
            ))}
            <div className="glass rounded-2xl p-6">
              <div className="text-xs uppercase tracking-[0.25em] text-white/50">Office hours</div>
              <div className="font-display font-bold text-white text-lg mt-1">Mon — Fri · 9:00 to 19:00 GMT</div>
              <div className="text-white/55 text-sm mt-2">Async support available 24/7 for retainer clients.</div>
            </div>
          </div>

          <form
            onSubmit={submit}
            data-testid="contact-form"
            className="lg:col-span-7 glass rounded-3xl p-8 md:p-10 space-y-5"
          >
            {sent && (
              <div className="flex items-center gap-3 rounded-xl border border-[#06B6D4]/40 bg-[#06B6D4]/10 px-4 py-3 text-sm text-white" data-testid="contact-success">
                <Check className="w-4 h-4 text-[#06B6D4]" /> Thanks — we'll get back to you within 24 hours.
              </div>
            )}
           <div className="grid sm:grid-cols-2 gap-4">
  <Field
    label="Your Name"
    value={form.name}
    onChange={(v) => update("name", v)}
    required
    testid="contact-name"
  />

  <Field
    label="Email"
    type="email"
    value={form.email}
    onChange={(v) => update("email", v)}
    required
    testid="contact-email"
  />

  <Field
    label="Phone Number"
    type="tel"
    value={form.phone}
    onChange={(v) => update("phone", v)}
    required
      pattern="[0-9]{10,15}"
      maxLength={15}
    testid="contact-phone"
  />

  <Field
    label="Company"
    value={form.company}
    onChange={(v) => update("company", v)}
    testid="contact-company"
  />
</div>
            
       {/* <div className="grid sm:grid-cols-1 gap-4">
              <Field label="Company" value={form.company} onChange={(v) => update("company", v)} testid="contact-company" />
              <label className="text-xs uppercase tracking-[0.25em] text-white/50">Budget</label>
                <select
                  value={form.budget}
                  onChange={(e) => update("budget", e.target.value)}
                  data-testid="contact-budget"
                  className="mt-2 w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3.5 text-white outline-none focus:border-[#06B6D4]/50"
                >
                  <option value="" className="bg-[#0D1B2A]">Select range</option>
                  <option className="bg-[#0D1B2A]">Under $5k</option>
                  <option className="bg-[#0D1B2A]">$5k — $15k</option>
                  <option className="bg-[#0D1B2A]">$15k — $50k</option>
                  <option className="bg-[#0D1B2A]">$50k+</option>
                </select>
              </div> 
            </div>  */}
            <div>
              <label className="text-xs uppercase tracking-[0.25em] text-white/50">Tell us about the project</label>
              <textarea
                rows={5}
                value={form.message}
                onChange={(e) => update("message", e.target.value)}
                required
                data-testid="contact-message"
                className="mt-2 w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-white/30 outline-none focus:border-[#06B6D4]/50"
                placeholder="Goals, timeline, links, anything else..."
              />
            </div>
            <button
              type="submit"
              data-testid="contact-submit"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white text-[#071120] font-semibold hover:bg-[#06B6D4] hover:text-white transition-colors btn-shine"
            >
              Send Message <ArrowUpRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

function Field({
  label,
  type = "text",
  value,
  onChange,
  required,
  testid,
  pattern,
  maxLength
}) {
  return (
    <div>
      <label className="text-xs uppercase tracking-[0.25em] text-white/50">{label}</label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        data-testid={testid}
        pattern={pattern}
maxLength={maxLength}
        className="mt-2 w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3.5 text-white outline-none focus:border-[#06B6D4]/50"
      />
    </div>
  );
}
