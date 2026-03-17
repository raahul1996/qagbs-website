"use client";
import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: info */}
          <div>
            <span className="text-blue-700 font-semibold text-sm uppercase tracking-widest">Get In Touch</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2 mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-10">
              Whether you need accounting support, a SaaS solution, or strategic consulting — our team is ready to help.
              Reach out and we&apos;ll respond within one business day.
            </p>

            <div className="space-y-6">
              {/* Vijay Kumar */}
              <div className="flex items-start gap-4">
                <div className="text-2xl">👤</div>
                <div>
                  <div className="text-xs text-gray-400 uppercase tracking-widest">Contact</div>
                  <div className="text-gray-800 font-semibold">Mr. Vijay Kumar</div>
                  <a href="tel:+919700192091" className="text-gray-700 hover:text-blue-700 transition-colors block">
                    +91 97001 92091
                  </a>
                  <div className="text-gray-600 text-sm mt-1">
                    17 Ordell Street, Cardiff CF24 2BA
                  </div>
                </div>
              </div>

              {/* M R Srikanteswara */}
              <div className="flex items-start gap-4">
                <div className="text-2xl">👤</div>
                <div>
                  <div className="text-xs text-gray-400 uppercase tracking-widest">Contact</div>
                  <div className="text-gray-800 font-semibold">M R Srikanteswara</div>
                  <a href="tel:+919686500446" className="text-gray-700 hover:text-blue-700 transition-colors block">
                    +91 9686500446
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            {submitted ? (
              <div className="text-center py-12">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-xl font-bold text-gray-900">Message Sent!</h3>
                <p className="text-gray-500 mt-2">Thank you for reaching out. We&apos;ll be in touch within one business day.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                    <input
                      type="text"
                      required
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                    <input
                      type="text"
                      required
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                  <input
                    type="text"
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Service Interested In</label>
                  <select className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-600">
                    <option value="">Select a service...</option>
                    <option>Accounting Solutions</option>
                    <option>SaaS Solutions</option>
                    <option>Business Consulting</option>
                    <option>Payroll &amp; HR Tech</option>
                    <option>Financial Analytics</option>
                    <option>Global Services</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    required
                    rows={4}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    placeholder="Tell us about your business needs..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 rounded-lg transition-colors"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
