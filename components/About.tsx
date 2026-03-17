export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-12 text-white">
              <div className="text-6xl font-extrabold mb-4 opacity-20">QAGB</div>
              <div className="space-y-6">
                <div className="bg-white/10 rounded-xl p-5">
                  <div className="text-yellow-300 text-2xl font-bold">Our Mission</div>
                  <p className="text-blue-100 mt-2 text-sm leading-relaxed">
                    To empower businesses worldwide with intelligent financial tools and technology that drive growth and operational excellence.
                  </p>
                </div>
                <div className="bg-white/10 rounded-xl p-5">
                  <div className="text-yellow-300 text-2xl font-bold">Our Vision</div>
                  <p className="text-blue-100 mt-2 text-sm leading-relaxed">
                    To be the most trusted global partner for businesses seeking seamless integration of accounting expertise and modern technology.
                  </p>
                </div>
              </div>
            </div>
            {/* Decorative dot */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20"></div>
          </div>

          {/* Right: text */}
          <div>
            <span className="text-blue-700 font-semibold text-sm uppercase tracking-widest">About QAGBS</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2 mb-6">
              A Global Partner You Can Trust
            </h2>
            <p className="text-gray-600 leading-relaxed mb-5">
              <strong>Quick Actuality Global Services (QAGBS)</strong> is a forward-thinking firm dedicated to providing
              businesses with comprehensive accounting solutions and cutting-edge SaaS platforms. We combine deep
              financial expertise with modern technology to deliver results that matter.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Founded on the principles of accuracy, transparency, and innovation, QAGBS serves clients across industries
              and continents — from startups to enterprise organizations. Our multidisciplinary team brings together
              certified accountants, software engineers, and business strategists to address your unique challenges.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}
