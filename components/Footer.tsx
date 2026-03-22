export default function Footer() {
  return (
    <footer className="bg-[#0d2240] text-blue-300">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-[#1a56db] flex items-center justify-center text-white font-bold text-xs">Q</div>
              <p className="text-white font-bold text-base">QAGBS</p>
            </div>
            <p className="text-sm leading-relaxed text-blue-300">
              Clarity in Accounting. Confidence in Growth.
              <br /><br />
              Quick Acuity Global Business Solutions, providing global accounting, advisory, and business support services.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              {[
                "Global Accounting & Bookkeeping",
                "Tax Advisory & Compliance",
                "ERP Implementation",
                "Working Capital Management",
                "Internal Audit Services",
                "Tax Litigation Advisory",
                "Compliance Advisory",
              ].map((s) => (
                <li key={s}>
                  <a href="#services" className="hover:text-white transition-colors">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Home", href: "#home" },
                { label: "About", href: "#about" },
                { label: "Our Leadership", href: "#leadership" },
                { label: "Contact", href: "#contact" },
              ].map((s) => (
                <li key={s.label}>
                  <a href={s.href} className="hover:text-white transition-colors">{s.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <div className="text-white font-medium mb-0.5">Mr. S. Vijayakumar</div>
                <a href="tel:+919700192091" className="block hover:text-white transition-colors">+91 97001 92091</a>
                <a href="mailto:vijay2k14@gmail.com" className="block hover:text-white transition-colors">vijay2k14@gmail.com</a>
                <div className="text-blue-400 text-xs mt-0.5">Cardiff, United Kingdom</div>
              </li>
              <li>
                <div className="text-white font-medium mb-0.5">Mr. Srikanteswara M R</div>
                <a href="tel:+919686500446" className="block hover:text-white transition-colors">+91 9686500446</a>
                <a href="mailto:mrsrikanta3@gmail.com" className="block hover:text-white transition-colors">mrsrikanta3@gmail.com</a>
                <div className="text-blue-400 text-xs mt-0.5">Bengaluru, India</div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-blue-400">
          <p>&copy; {new Date().getFullYear()} Quick Acuity Global Business Solutions. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
