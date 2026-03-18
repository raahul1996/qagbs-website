const partners = [
  {
    name: "Mr. S. Vijayakumar",
    role: "Co-Founder & Finance Partner",
    credentials: ["M.Com", "PGDFM", "ACMA", "ACS", "LL.M", "EY IFRS Certified"],
    bio: "A financial strategist with over three decades of comprehensive experience in financial management, strategic planning, and corporate governance. Vijayakumar has led global finance operations across the USA, UK, Netherlands, China, Hong Kong, Taiwan, and Japan, combining deep technical expertise with a self-starter mindset rooted in collaboration and process excellence.",
    expertise: [
      "ERP implementation (Oracle)",
      "Direct & indirect tax assessments",
      "Transfer pricing & FEMA compliance",
      "Working capital management",
      "Internal controls & SOPs design",
      "External Commercial Borrowings (ECB)",
    ],
  },
  {
    name: "Mr. Srikanteswara M R",
    role: "Co-Founder & Head of Finance",
    credentials: ["Post Graduate in Commerce", "35+ Years Experience"],
    bio: "A strategic finance leader with 35 years of excellence in financial management and corporate governance. Srikanteswara spent over a decade at Frauscher Sensor Technology India, where he was instrumental in growing the company from ₹120 million to ₹5,000 million, emerging as a market leader in the railway signalling sector. He is known for integrity, meticulous attention to detail, and a collaborative leadership style.",
    expertise: [
      "Internal audit (IFRS aligned)",
      "Cost & project accounting",
      "M&A support & due diligence",
      "Capital budgeting & cash flow",
      "Construction & hedge accounting",
      "Subsidiary & JV structuring",
    ],
  },
];

export default function Team() {
  return (
    <section id="team" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-gray-400 uppercase tracking-widest mb-3">Leadership</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">
            Our Leadership
          </h2>
          <p className="text-lg text-gray-500 mt-4 max-w-2xl mx-auto">
            Decades of combined expertise across global finance, taxation, audit, and enterprise systems.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {partners.map((partner) => (
            <div key={partner.name} className="bg-[#f5f5f7] rounded-3xl p-10">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900">{partner.name}</h3>
                <p className="text-gray-500 mt-1">{partner.role}</p>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {partner.credentials.map((c) => (
                  <span key={c} className="bg-white text-gray-600 text-xs font-medium px-3 py-1 rounded-full border border-gray-200">
                    {c}
                  </span>
                ))}
              </div>

              <p className="text-gray-600 text-sm leading-relaxed mb-6">{partner.bio}</p>

              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">Areas of Expertise</p>
                <ul className="space-y-2">
                  {partner.expertise.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
