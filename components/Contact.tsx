"use client";
import { useState } from "react";

const contacts = [
  {
    name: "Mr. S. Vijayakumar",
    role: "Co-Founder & Finance Partner",
    phone: "+91 97001 92091",
    phoneHref: "tel:+919700192091",
    email: "vijay2k14@gmail.com",
    address: "17 Ordell Street, Cardiff CF24 2BA, United Kingdom",
  },
  {
    name: "Mr. Srikanteswara M R",
    role: "Co-Founder & Head of Finance",
    phone: "+91 9686500446",
    phoneHref: "tel:+919686500446",
    email: "mrsrikanta3@gmail.com",
    address: "90 Lakshmanrao Road, Balepet, Bengaluru 560053, Karnataka, India",
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

      if (res.ok) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please try again or contact us directly.");
      }
    } catch {
      setError("Something went wrong. Please try again or contact us directly.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <p className="text-sm font-medium text-gray-400 uppercase tracking-widest mb-3">Get In Touch</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-4">
              Let&apos;s Talk
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed mb-10">
              Whether you need accounting support, tax advisory, ERP implementation, or compliance guidance, reach out and we&apos;ll respond within one business day.
            </p>

            <div className="space-y-5">
              {contacts.map((c) => (
                <div key={c.name} className="bg-[#f5f5f7] rounded-2xl p-6">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">{c.role}</p>
                  <p className="text-gray-900 font-semibold text-base mb-1">{c.name}</p>
                  <a href={c.phoneHref} className="text-gray-700 hover:text-gray-900 transition-colors text-sm block mb-1">
                    {c.phone}
                  </a>
                  <a href={`mailto:${c.email}`} className="text-gray-700 hover:text-gray-900 transition-colors text-sm block mb-1">
                    {c.email}
                  </a>
                  <p className="text-gray-500 text-sm">{c.address}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div>
            {submitted ? (
              <div className="bg-[#f5f5f7] rounded-3xl p-12 text-center">
                <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Message Sent</h3>
                <p className="text-gray-500 mt-2 text-sm">Thank you for reaching out. We&apos;ll be in touch within one business day.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input
                      name="firstName"
                      type="text"
                      required
                      className="w-full border-b border-gray-300 pb-2 text-sm focus:outline-none focus:border-gray-900 bg-transparent transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input
                      name="lastName"
                      type="text"
                      required
                      className="w-full border-b border-gray-300 pb-2 text-sm focus:outline-none focus:border-gray-900 bg-transparent transition-colors"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    name="email"
                    type="email"
                    required
                    className="w-full border-b border-gray-300 pb-2 text-sm focus:outline-none focus:border-gray-900 bg-transparent transition-colors"
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                  <input
                    name="company"
                    type="text"
                    className="w-full border-b border-gray-300 pb-2 text-sm focus:outline-none focus:border-gray-900 bg-transparent transition-colors"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Service Interested In</label>
                  <select name="service" className="w-full border-b border-gray-300 pb-2 text-sm focus:outline-none focus:border-gray-900 bg-transparent text-gray-600 transition-colors">
                    <option value="">Select a service...</option>
                    <option>Global Accounting &amp; Bookkeeping</option>
                    <option>Tax Advisory &amp; Compliance</option>
                    <option>ERP Implementation Support</option>
                    <option>Working Capital Management</option>
                    <option>Compliance Advisory</option>
                    <option>Internal Audit Services</option>
                    <option>Tax Litigation Advisory</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    className="w-full border-b border-gray-300 pb-2 text-sm focus:outline-none focus:border-gray-900 bg-transparent resize-none transition-colors"
                    placeholder="Tell us about your business needs..."
                  />
                </div>
                {error && <p className="text-red-500 text-sm">{error}</p>}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gray-900 hover:bg-gray-700 disabled:bg-gray-400 text-white font-medium py-3 rounded-full transition-colors text-sm"
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
