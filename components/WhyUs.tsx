const reasons = [
  {
    number: "01",
    title: "Global Perspective",
    description:
      "Services designed for organisations operating across borders, with multi-jurisdictional expertise spanning the USA, UK, Europe, and Asia.",
  },
  {
    number: "02",
    title: "Integrity & Transparency",
    description:
      "The highest ethical and professional standards in every engagement. Independence, accountability, and transparency guide every client relationship.",
  },
  {
    number: "03",
    title: "Professional Excellence",
    description:
      "Deep technical capabilities in accounting, financial reporting, taxation, audit, and advisory, backed by internationally recognised qualifications.",
  },
  {
    number: "04",
    title: "Strategic Insight",
    description:
      "Financial intelligence that goes beyond compliance. We translate data into clear, actionable insight to support key business decisions and growth.",
  },
  {
    number: "05",
    title: "Trusted Partnership",
    description:
      "A client-centric approach focused on long-term professional relationships built on measurable results and a genuine commitment to your success.",
  },
  {
    number: "06",
    title: "International Standards",
    description:
      "Full compliance with IFRS, GAAP, and local regulatory frameworks, ensuring your organisation meets its obligations wherever it operates.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-28 bg-[#1d1d1f] text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-gray-500 uppercase tracking-widest mb-3">Why QAGBS</p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Why Choose QAGBS
          </h2>
          <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
            We are not just a service provider. We are a long-term partner committed to your financial clarity and business confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((reason) => (
            <div
              key={reason.number}
              className="bg-[#2d2d2f] rounded-2xl p-8 hover:bg-[#3a3a3c] transition-colors duration-200"
            >
              <p className="text-4xl font-bold text-gray-700 mb-4">{reason.number}</p>
              <h3 className="text-lg font-semibold text-white mb-3">{reason.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
