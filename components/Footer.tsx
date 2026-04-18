import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0d2240] text-blue-300">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Image src="/logo.jpeg" alt="QAGBS Logo" width={36} height={36} className="rounded-full object-contain" />
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
            <div className="mt-6 space-y-4 text-xs">
              <div>
                <div className="text-white font-medium mb-0.5">USA</div>
                <div className="text-blue-400">11965 Montana Ave<br />Los Angeles, CA USA 90049</div>
              </div>
              <div>
                <div className="text-white font-medium mb-0.5">India</div>
                <div className="text-blue-400">No 90, 2nd Floor, Lakshman Rao Road, Balepet Cross, Bangalore, Karnataka, India 560053</div>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <div className="text-white font-medium mb-0.5">Mr. Scott Wells, CFA</div>
                <a href="tel:+14802151025" className="block hover:text-white transition-colors">+1 (480) 215-1025</a>
                <a href="mailto:scott@qagbs.com" className="block hover:text-white transition-colors">scott@qagbs.com</a>
                <div className="text-blue-400 text-xs mt-0.5">Los Angeles, USA</div>
              </li>
              <li>
                <div className="text-white font-medium mb-0.5">Mr. S. Vijayakumar</div>
                <a href="tel:+919663546561" className="block hover:text-white transition-colors">+91 9663546561</a>
                <a href="mailto:vijay@qagbs.com" className="block hover:text-white transition-colors">vijay@qagbs.com</a>
                <div className="text-blue-400 text-xs mt-0.5">Bengaluru, Karnataka, India</div>
              </li>
              <li>
                <div className="text-white font-medium mb-0.5">Mr. Srikanteswara M R</div>
                <a href="tel:+919535734505" className="block hover:text-white transition-colors">+91 9535734505</a>
                <a href="mailto:sri@qagbs.com" className="block hover:text-white transition-colors">sri@qagbs.com</a>
                <div className="text-blue-400 text-xs mt-0.5">Bengaluru, Karnataka, India</div>
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
