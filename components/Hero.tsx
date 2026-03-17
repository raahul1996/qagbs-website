export default function Hero() {
  return (
    <section className="pt-32 pb-24 bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block bg-blue-500/30 text-blue-100 text-sm font-medium px-4 py-1 rounded-full mb-6 tracking-wide uppercase">
          Trusted Financial &amp; Technology Solutions
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
          Empowering Businesses with<br />
          <span className="text-yellow-300">Smart Accounting</span> &amp;{" "}
          <span className="text-yellow-300">SaaS Solutions</span>
        </h1>
        <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto mb-10 leading-relaxed">
          Quick Actuality Global Services delivers modern accounting services and cutting-edge SaaS
          platforms that help businesses streamline operations, stay compliant, and scale with confidence.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold px-8 py-4 rounded-xl text-lg transition-colors shadow-lg"
          >
            Get Started Today
          </a>
          <a
            href="#services"
            className="border-2 border-white/50 hover:border-white text-white font-semibold px-8 py-4 rounded-xl text-lg transition-colors"
          >
            Explore Services
          </a>
        </div>

      </div>
    </section>
  );
}
