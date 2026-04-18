const coreValues = [
  {
    title: "Integrity",
    desc: "We uphold the highest ethical and professional standards in every engagement. Transparency, independence, and accountability guide our work and relationships.",
  },
  {
    title: "Professional Expertise",
    desc: "Strong technical capabilities in accounting, financial reporting, tax, advisory services backed by many decades of combined experience.",
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
    title: "Flexible and Scalable",
    desc: "From targeted support to full financial management, our services adapt to your needs and scale as your business grows.",
  },
  {
    title: "Built-In Business Continuity",
    desc: "Developed a pool of cross-trained backup professionals to mitigate risks arising from employee turnover or absences, ensuring uninterrupted operations and consistent adherence to deadlines.",
  },
  {
    title: "Global Perspective",
    desc: "Our services are designed for organizations operating across borders, aligned with international standards and local regulatory environments.",
  },
];

const industries = [
  "Technology & Digital Services",
  "Professional Services",
  "Startups & Growth Companies",
  "SMEs",
  "International Businesses",
  "Investment & Financial Services",
  "Manufacturing & Trading Enterprise",
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-16">

      {/* 1. About Us */}
      <div className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[#1a56db] text-sm font-semibold uppercase tracking-widest mb-3">About Us</p>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0d2240] tracking-tight">
              A Global Partner You Can Trust
            </h2>
          </div>

          <div className="prose prose-lg max-w-none text-slate-700 space-y-5">
            <p className="text-justify">
              <strong className="text-[#0d2240]">QUICK ACUITY GLOBAL BUSINESS SOLUTIONS</strong> is a global professional services firm providing integrated accounting, cost accounting, advisory, and business support solutions to organizations operating in dynamic and competitive markets.
            </p>
            <p className="text-justify">
              We work with businesses, entrepreneurs, and institutions across industries to help them navigate financial complexity, strengthen governance, and unlock sustainable growth opportunities. Our firm combines deep professional expertise with a practical understanding of international business environments, enabling clients to make informed decisions with confidence.
            </p>
            <p className="text-justify">
              Our approach is built on five core principles: <strong>Trust, Reliability, Integrity, Quality, and Strategic Insight.</strong> We believe financial information should not only ensure compliance but also serve as a powerful tool for business intelligence and strategic planning with expectation of all stakeholders. By integrating accounting expertise, analytical capabilities, and advisory insight, we support organizations in transforming financial data into meaningful value for all stakeholders.
            </p>
            <p className="text-justify">
              Operating with a global outlook, our team delivers services that align with international standards while remaining responsive to the specific needs of each client. Whether supporting established enterprises, emerging businesses, or international investors, we focus on building long-term professional relationships grounded in trust, reliability, and measurable results.
            </p>
            <p className="text-justify">
              At <strong className="text-[#0d2240]">QUICK ACUITY GLOBAL BUSINESS SOLUTIONS</strong>, our objective is <strong>to provide professional support that enables successful businesses to grow with value and wealth in an increasingly complex global economy.</strong>
            </p>
          </div>
        </div>
      </div>

      {/* 2. Vision */}
      <div className="py-20 bg-[#eff6ff]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10">
            <p className="text-[#1a56db] text-sm font-semibold uppercase tracking-widest mb-3">Vision</p>
            <h2 className="text-3xl font-extrabold text-[#0d2240] mb-8">Our Vision</h2>
          </div>
          <div className="border-l-4 border-[#1a56db] pl-8 space-y-5 text-slate-700 text-lg leading-relaxed">
            <p className="italic font-medium text-[#0d2240] text-justify">
              &ldquo;To be a globally respected and trusted partner in accounting, tax, advisory, and business support services — built on a strong foundation of over two decades of professional excellence, and committed to shaping through innovation, integrity, and strategic foresight.
            </p>
            <p className="text-justify">
              We aspire to deliver unmatched reliability, clarity, and quality, while providing deep tax and regulatory expertise, enabling our clients to navigate global complexities with confidence.
            </p>
            <p className="italic font-medium text-[#0d2240] text-justify">
              Our vision is to create enduring value for all stakeholders — clients, people, partners, and society — by fostering trust, driving sustainable growth, and setting new benchmarks in professional services across the global marketplace.&rdquo;
            </p>
          </div>
        </div>
      </div>

      {/* 3. Core Values */}
      <div className="py-24 bg-[#0d2240]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">What We Stand For</p>
            <h2 className="text-4xl font-extrabold text-white">Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((v, i) => (
              <div key={v.title} className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-7 transition-colors">
                <div className="w-9 h-9 bg-[#1a56db] rounded-lg flex items-center justify-center text-white font-bold text-sm mb-4">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-white font-bold text-base mb-2">{v.title}</h3>
                <p className="text-blue-200 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. Industries We Support */}
      <div className="py-16 bg-[#eff6ff]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-[#1a56db] text-sm font-semibold uppercase tracking-widest mb-3">Sectors</p>
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

      {/* 5. Meet The Team intro */}
      <div className="py-16 bg-[#0d2240]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">Our People</p>
          <h2 className="text-3xl font-extrabold text-white mb-8">Meet The Team</h2>
          <div className="text-blue-200 text-base leading-relaxed space-y-4">
            <p>
              Our leadership team brings together seasoned professionals with diverse academic foundations, multidisciplinary expertise, and deep industry experience. United by a progressive vision, they combine strategic insight with practical execution to deliver high-impact solutions across global markets.
            </p>
            <p>
              With strong capabilities in finance, accounting, tax, advisory, and business transformation, our leaders foster a culture of excellence, collaboration, and innovation. Their ability to anticipate evolving client needs and navigate complex international environments enables us to deliver clarity, reliability, and sustained value.
            </p>
            <p>
              Driven by integrity and a client-centric approach, our leadership is committed to building long-term partnerships and empowering organizations to achieve scalable, future-ready growth in an increasingly dynamic global economy.
            </p>
          </div>
        </div>
      </div>

    </section>
  );
}
