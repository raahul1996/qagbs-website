const services = [
  {
    icon: "📊",
    title: "Accounting Solutions",
    description:
      "Comprehensive bookkeeping, financial reporting, tax compliance, and audit support tailored to your business size and industry.",
    features: ["Bookkeeping & Reconciliation", "Tax Planning & Filing", "Financial Reporting", "Audit Support"],
  },
  {
    icon: "☁️",
    title: "SaaS Solutions",
    description:
      "Custom and off-the-shelf SaaS platforms that automate workflows, improve efficiency, and scale with your growth.",
    features: ["Custom SaaS Development", "ERP & CRM Integration", "Cloud Migration", "API Integrations"],
  },
  {
    icon: "💼",
    title: "Business Consulting",
    description:
      "Strategic advisory services to optimize your financial processes, reduce costs, and position your business for long-term success.",
    features: ["Financial Strategy", "Process Optimization", "Compliance Advisory", "Growth Planning"],
  },
  {
    icon: "🔒",
    title: "Payroll & HR Tech",
    description:
      "Streamlined payroll processing, HR management software, and compliance solutions for businesses of all sizes.",
    features: ["Payroll Processing", "Employee Self-Service", "Benefits Management", "Regulatory Compliance"],
  },
  {
    icon: "📈",
    title: "Financial Analytics",
    description:
      "Data-driven insights and dashboards that turn your financial data into actionable intelligence for smarter decisions.",
    features: ["Real-Time Dashboards", "Forecasting & Budgeting", "KPI Tracking", "Custom Reports"],
  },
  {
    icon: "🌐",
    title: "Global Services",
    description:
      "Multi-currency accounting, international tax compliance, and cross-border business support for global operations.",
    features: ["Multi-Currency Support", "International Tax", "Cross-Border Compliance", "Global Reporting"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-700 font-semibold text-sm uppercase tracking-widest">What We Offer</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2">
            Comprehensive Business Solutions
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            From accounting fundamentals to advanced SaaS platforms, we provide the tools and expertise your business needs to thrive.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-200"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-500 text-sm mb-5 leading-relaxed">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feat) => (
                  <li key={feat} className="flex items-center gap-2 text-sm text-gray-600">
                    <svg className="w-4 h-4 text-blue-700 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414L8.414 15l-4.707-4.707a1 1 0 011.414-1.414L8.414 12.172l6.879-6.879a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
