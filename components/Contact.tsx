"use client";
import { useState } from "react";

const contacts = [
  {
    name: "Mr. Scott Wells, CFA",
    role: "Co-Founder",
    phone: "+1 (480) 215-1025",
    phoneHref: "tel:+14802151025",
    email: "scott@qagbs.com",
    address: "Los Angeles, USA",
  },
  {
    name: "Mr. S. Vijayakumar",
    role: "Co-Founder",
    phone: "+91 9663546561",
    phoneHref: "tel:+919663546561",
    email: "vijay@qagbs.com",
    address: "No 90, 2nd Floor, Lakshman Rao Road, Balepet Cross, Bangalore, Karnataka, India 560053",
  },
  {
    name: "Mr. Srikanteswara M R",
    role: "Co-Founder",
    phone: "+91 9535734505",
    phoneHref: "tel:+919535734505",
    email: "sri@qagbs.com",
    address: "No 90, 2nd Floor, Lakshman Rao Road, Balepet Cross, Bangalore, Karnataka, India 560053",
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const form = e.currentTarget;
    const data = {
      firstName: (form.elements.namedItem("firstName") as HTMLInputElement).value,
      lastName: (form.elements.namedItem("lastName") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      service: (form.elements.namedItem("service") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) setSubmitted(true);
      else setError("Something went wrong. Please try again or contact us directly.");
    } catch {
      setError("Something went wrong. Please try again or contact us directly.");
    } finally {
      setLoading(false);
    }
  }

  const inputClass = "w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#1a56db] focus:ring-1 focus:ring-[#1a56db] bg-white transition-colors";

  return (
    <section id="contact" className="py-24 bg-[#eff6ff] scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-[#1a56db] text-sm font-semibold uppercase tracking-widest mb-3">Get In Touch</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0d2240] tracking-tight">
            Let us get in touch
          </h2>
          <p className="text-lg text-slate-600 mt-4 max-w-2xl mx-auto">
            Global accounting, Tax, advisory, and whether you need accounting support, ERP implementation, or compliance guidance, reach out and we will respond within one business day.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Contact cards */}
          <div className="space-y-5">
            {contacts.map((c) => (
              <div key={c.name} className="bg-white border border-blue-100 rounded-2xl p-6 shadow-sm">
                <p className="text-xs font-bold text-[#1a56db] uppercase tracking-widest mb-2">{c.role}</p>
                <p className="text-[#0d2240] font-bold text-base mb-3">{c.name}</p>
                <div className="space-y-2">
                  <a href={c.phoneHref} className="flex items-center gap-2 text-slate-600 hover:text-[#1a56db] transition-colors text-sm">
                    <svg className="w-4 h-4 text-[#1a56db]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    {c.phone}
                  </a>
                  <a href={`mailto:${c.email}`} className="flex items-center gap-2 text-slate-600 hover:text-[#1a56db] transition-colors text-sm">
                    <svg className="w-4 h-4 text-[#1a56db]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    {c.email}
                  </a>
                  <p className="flex items-start gap-2 text-slate-500 text-sm">
                    <svg className="w-4 h-4 text-[#1a56db] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {c.address}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="bg-white border border-blue-100 rounded-2xl p-8 shadow-sm">
            {submitted ? (
              <div className="text-center py-10">
                <div className="w-14 h-14 bg-[#1a56db] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#0d2240]">Message Sent</h3>
                <p className="text-slate-500 mt-2 text-sm">Thank you for reaching out. We will be in touch within one business day.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">First Name</label>
                    <input name="firstName" type="text" required className={inputClass} placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Last Name</label>
                    <input name="lastName" type="text" required className={inputClass} placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Email</label>
                  <input name="email" type="email" required className={inputClass} placeholder="john@company.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Company</label>
                  <input name="company" type="text" className={inputClass} placeholder="Your company name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Service Interested In</label>
                  <select name="service" className={inputClass + " text-slate-600"}>
                    <option value="">Select a service...</option>
                    <option>Global Accounting &amp; Bookkeeping</option>
                    <option>Tax Advisory &amp; Cross Border Transactions</option>
                    <option>ERP Implementation Support</option>
                    <option>Working Capital Advisory Management</option>
                    <option>Compliance Advisory Services</option>
                    <option>Internal Audit Services</option>
                    <option>Tax Litigation Advisory Support</option>
                    <option>Other Professional Services</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Message</label>
                  <textarea name="message" required rows={4} className={inputClass + " resize-none"} placeholder="Tell us about your business needs..." />
                </div>
                {error && <p className="text-red-500 text-sm">{error}</p>}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#1a56db] hover:bg-blue-500 disabled:bg-blue-300 text-white font-semibold py-3 rounded-full transition-colors text-sm"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
