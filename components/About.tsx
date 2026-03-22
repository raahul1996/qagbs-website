const whyUs = [
  {
    title: "Global Perspective",
    desc: "Services designed for organizations operating across borders, aligned with international standards and local regulatory environments.",
  },
  {
    title: "Professional Expertise",
    desc: "Strong technical capabilities in accounting, financial reporting, and advisory services backed by decades of combined experience.",
  },
  {
    title: "Strategic Insight",
    desc: "Financial intelligence that supports business decisions and growth, transforming data into meaningful value for all stakeholders.",
  },
  {
    title: "Trusted Partnership",
    desc: "A client-centric approach focused on building long-term professional relationships grounded in trust, reliability, and measurable results.",
  },
  {
    title: "Flexible & Scalable Support",
    desc: "From daily support to complete financial management, our outsourcing services adapt to your needs and expand as your firm grows.",
  },
  {
    title: "Built-In Business Continuity",
    desc: "Trained backup staff to minimise risk from turnover or absence, ensuring deadlines are always met without disruption.",
  },
];

const industries = [
  "Technology & Digital Services",
  "Professional Services",
  "Startups & Growth Companies",
  "SMEs",
  "International Businesses",
  "Investment & Financial Services",
  "Manufacturing & Trading",
];

const values = ["Trust", "Reliability", "Integrity", "Quality", "Strategic Insight"];

export default function About() {
  return (
    <section id="about">
      {/* About Us */}
      <div className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[#1a56db] text-sm font-semibold uppercase tracking-widest mb-3">About Us</p>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0d2240] tracking-tight">
              A Global Partner You Can Trust
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-slate-700 leading-relaxed mb-5 text-base">
                <strong className="text-[#0d2240]">Quick Acuity Global Business Solutions (QAGBS)</strong> is a global professional services firm providing integrated accounting, cost accounting, advisory, and business support solutions to organizations operating in dynamic and competitive markets.
              </p>
              <p className="text-slate-600 leading-relaxed mb-5 text-base">
                We work with businesses, entrepreneurs, and institutions across industries to help them navigate financial complexity, strengthen governance, and unlock sustainable growth opportunities. Our firm combines deep professional expertise with a practical understanding of international business environments, enabling clients to make informed decisions with confidence.
              </p>
              <p className="text-slate-600 leading-relaxed text-base">
                Our approach is built on five core principles. We believe financial information should not only ensure compliance but also serve as a powerful tool for business intelligence and strategic planning.
              </p>
              <div className="flex flex-wrap gap-2 mt-6">
                {values.map((v) => (
                  <span key={v} className="bg-blue-50 border border-blue-200 text-[#1a56db] text-sm font-medium px-4 py-2 rounded-full">
                    {v}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="border-l-4 border-[#1a56db] pl-6 py-2">
                <p className="text-xs font-bold text-[#1a56db] uppercase tracking-widest mb-2">Vision</p>
                <p className="text-slate-700 leading-relaxed">
                  To be a trusted global partner in accounting, advisory, and business support services, recognized for delivering Reliability, Clarity, Integrity, Quality, and Strategic insight that empower organizations to succeed in a complex global economy.
                </p>
              </div>
              <div className="border-l-4 border-[#0ea5e9] pl-6 py-2">
                <p className="text-xs font-bold text-[#0ea5e9] uppercase tracking-widest mb-2">Mission</p>
                <p className="text-slate-700 leading-relaxed">
                  To provide high-quality professional services that strengthen financial transparency, enhance operational efficiency, and support informed decision-making for businesses across international markets. Through expertise, innovation, and professional integrity, we help organizations manage complexity, unlock growth, and build sustainable value.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Clients Choose Us */}
      <div className="py-24 bg-[#0d2240]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">Why QAGBS</p>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              Why Clients Choose Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map((item, i) => (
              <div key={item.title} className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-7 transition-colors">
                <div className="w-9 h-9 bg-[#1a56db] rounded-lg flex items-center justify-center text-white font-bold text-sm mb-4">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-white font-bold text-base mb-2">{item.title}</h3>
                <p className="text-blue-200 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Industries We Support */}
      <div className="py-16 bg-[#eff6ff]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-[#1a56db] text-sm font-semibold uppercase tracking-widest mb-3">Industries</p>
          <h2 className="text-3xl font-extrabold text-[#0d2240] mb-8">Industries We Support</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((ind) => (
              <span key={ind} className="bg-white border border-blue-200 text-[#0d2240] text-sm font-medium px-5 py-2.5 rounded-full shadow-sm">
                {ind}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
