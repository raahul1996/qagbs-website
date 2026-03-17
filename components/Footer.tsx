export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-blue-700 text-white font-extrabold text-xl px-3 py-1 rounded-lg">QAGB</div>
            </div>
            <p className="text-sm leading-relaxed">
              Quick Actuality Global Services — delivering modern accounting and SaaS solutions that power business growth worldwide.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              {["Accounting Solutions", "SaaS Solutions", "Business Consulting", "Payroll & HR Tech", "Financial Analytics"].map((s) => (
                <li key={s}>
                  <a href="#services" className="hover:text-white transition-colors">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              {["About Us", "Why Us", "Careers", "Press", "Partners"].map((s) => (
                <li key={s}>
                  <a href="#about" className="hover:text-white transition-colors">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <div className="text-gray-300 font-medium">Mr. Vijay Kumar</div>
                <a href="tel:+919700192091" className="hover:text-white transition-colors">+91 97001 92091</a>
                <div className="text-gray-500 text-xs mt-0.5">17 Ordell Street, Cardiff CF24 2BA</div>
              </li>
              <li>
                <div className="text-gray-300 font-medium">M R Srikanteswara</div>
                <a href="tel:+919686500446" className="hover:text-white transition-colors">+91 9686500446</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
          <p>&copy; {new Date().getFullYear()} Quick Actuality Global Services. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
