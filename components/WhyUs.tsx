const reasons = [
  {
    icon: "🏆",
    title: "Proven Track Record",
    description:
      "A strong track record of delivering measurable results for clients across diverse industries and global markets.",
  },
  {
    icon: "🔐",
    title: "Security & Compliance",
    description:
      "Enterprise-grade security with full compliance to international standards including GDPR, SOC 2, and local regulations.",
  },
  {
    icon: "⚡",
    title: "Technology-First Approach",
    description:
      "We leverage the latest cloud, AI, and automation technologies to keep your business ahead of the curve.",
  },
  {
    icon: "🤝",
    title: "Dedicated Support",
    description:
      "A dedicated account manager and 24/7 support team ensures you're never alone when you need us most.",
  },
  {
    icon: "🌍",
    title: "Global Reach",
    description:
      "Operating across multiple countries, we understand the nuances of international business and cross-border compliance.",
  },
  {
    icon: "💡",
    title: "Tailored Solutions",
    description:
      "No one-size-fits-all. Every engagement is customized to your business model, industry, and growth stage.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 bg-blue-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-yellow-300 font-semibold text-sm uppercase tracking-widest">Why Choose Us</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-2">
            The QAGBS Difference
          </h2>
          <p className="text-blue-200 mt-4 max-w-2xl mx-auto">
            We&apos;re not just a service provider — we&apos;re a long-term growth partner committed to your success.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="bg-white/10 hover:bg-white/15 border border-white/10 rounded-2xl p-7 transition-colors"
            >
              <div className="text-4xl mb-4">{reason.icon}</div>
              <h3 className="text-lg font-bold mb-2">{reason.title}</h3>
              <p className="text-blue-200 text-sm leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
