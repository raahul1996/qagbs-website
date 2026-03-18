const services = [
  {
    category: "Accounting",
    title: "Global Accounting & Bookkeeping",
    description:
      "End-to-end accounting and bookkeeping solutions for businesses operating across multiple jurisdictions, ensuring accurate records and regulatory compliance.",
    features: ["Multi-jurisdiction bookkeeping", "Cross-border accounting coordination", "Financial statement preparation", "Monthly & annual closings"],
  },
  {
    category: "Tax",
    title: "Tax Advisory & Compliance",
    description:
      "Comprehensive tax planning, optimisation, and compliance support covering direct and indirect taxes, GST, and complex cross-border taxation matters.",
    features: ["Tax planning & optimisation", "GST management", "Transfer pricing consulting", "Cross-border tax compliance"],
  },
  {
    category: "Technology",
    title: "ERP Implementation Support",
    description:
      "Finance-first ERP configuration and deployment with deep expertise in Oracle and other platforms, integrating finance, HR, compliance, and operations.",
    features: ["ERP configuration & deployment", "Finance module integration", "System validation & testing", "Process & SOP design"],
  },
  {
    category: "Advisory",
    title: "Working Capital Management",
    description:
      "Data-driven advisory to optimise cash flow, accelerate cash velocity, and resolve bottlenecks in working capital cycles through early warning systems.",
    features: ["Cash flow optimisation", "Liquidity management", "Early warning systems", "Capital cycle analysis"],
  },
  {
    category: "Compliance",
    title: "Compliance Advisory",
    description:
      "Comprehensive support for statutory, financial, and governance obligations, helping organisations stay aligned with regulatory requirements and mitigate risk.",
    features: ["Statutory compliance support", "Governance advisory", "Regulatory alignment", "Risk mitigation strategies"],
  },
  {
    category: "Audit",
    title: "Internal Audit Services",
    description:
      "Independent, risk-based internal audit services aligned with international auditing standards to strengthen internal controls and operational risk management.",
    features: ["Risk-based audit approach", "Internal controls review", "Operational risk management", "Audit findings & reporting"],
  },
  {
    category: "Litigation",
    title: "Tax Litigation Advisory",
    description:
      "Technical research, documentation, and high-value litigation support to help organisations navigate complex tax disputes and assess their tax positions.",
    features: ["Technical research & analysis", "Document preparation", "Tax position assessment", "High-value dispute support"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-28 bg-[#f5f5f7]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-gray-400 uppercase tracking-widest mb-3">What We Offer</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">
            Our Services
          </h2>
          <p className="text-lg text-gray-500 mt-4 max-w-2xl mx-auto">
            Integrated professional services that strengthen financial transparency, enhance operational efficiency, and support informed decision-making.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">{service.category}</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-snug">{service.title}</h3>
              <p className="text-gray-500 text-sm mb-5 leading-relaxed">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2 text-sm text-gray-600">
                    <svg className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
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
