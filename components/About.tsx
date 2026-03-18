const values = [
  { label: "Integrity" },
  { label: "Professional Excellence" },
  { label: "Global Perspective" },
  { label: "Trust & Reliability" },
  { label: "Strategic Insight" },
];

export default function About() {
  return (
    <section id="about" className="py-28 bg-[#1d1d1f] text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-gray-500 uppercase tracking-widest mb-3">About Us</p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            A Global Partner You Can Trust
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Mission & Vision */}
          <div className="space-y-8">
            <div className="border-l-2 border-gray-600 pl-6">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">Mission</p>
              <p className="text-lg text-gray-200 leading-relaxed">
                To provide high-quality professional services that strengthen financial transparency, enhance operational efficiency, and support informed decision-making for businesses across international markets.
              </p>
            </div>
            <div className="border-l-2 border-gray-600 pl-6">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">Vision</p>
              <p className="text-lg text-gray-200 leading-relaxed">
                To be a trusted global partner in accounting, advisory, and business support services — recognised for delivering reliability, clarity, integrity, quality, and strategic insight.
              </p>
            </div>
          </div>

          {/* About text + values */}
          <div>
            <p className="text-gray-400 leading-relaxed mb-6">
              <strong className="text-white">Quick Acuity Global Business Solutions (QAGBS)</strong> is a global professional services firm providing integrated accounting, tax advisory, ERP implementation, and business support solutions to organisations operating in dynamic and competitive markets.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              We work with businesses, entrepreneurs, and institutions across industries to help them navigate financial complexity, strengthen governance, and unlock sustainable growth opportunities. Our approach combines deep technical expertise with a genuine commitment to long-term client success.
            </p>

            <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-4">Core Values</p>
            <div className="flex flex-wrap gap-2">
              {values.map((v) => (
                <span key={v.label} className="bg-[#2d2d2f] text-gray-300 text-sm px-4 py-2 rounded-full">
                  {v.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
