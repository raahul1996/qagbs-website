export default function Hero() {
  return (
    <section className="min-h-screen bg-white flex flex-col items-center justify-center px-6 pt-14">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm font-medium text-gray-400 uppercase tracking-widest mb-6">
          Quick Acuity Global Business Solutions
        </p>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 leading-tight tracking-tight mb-6">
          Clarity in Finance.<br />
          Confidence in Growth.
        </h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          Global accounting, advisory, and business support services for organisations navigating complexity, strengthening governance, and unlocking sustainable growth.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#contact"
            className="bg-gray-900 text-white font-medium px-8 py-3 rounded-full text-base hover:bg-gray-700 transition-colors"
          >
            Contact Us
          </a>
          <a
            href="#services"
            className="text-gray-900 font-medium text-base flex items-center gap-1 hover:gap-2 transition-all"
          >
            Explore Services <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>

      {/* Subtle scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-300">
        <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
