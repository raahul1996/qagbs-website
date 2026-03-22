import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-[#0d2240]">
      {/* Background image + overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/hero-bg.jpg"
          alt="Professional business team"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-[#0d2240]/68" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-28 pt-36">
        <p className="text-blue-300 text-sm font-semibold uppercase tracking-widest mb-5">
          Global Professional Services
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight max-w-3xl mb-5">
          Quick Acuity Global Business Solutions
        </h1>
        <p className="text-2xl sm:text-3xl font-light text-blue-200 italic mb-6">
          Clarity in Accounting. Confidence in Growth.
        </p>
        <p className="text-lg text-blue-100/80 max-w-2xl mb-10 leading-relaxed">
          Global accounting, advisory, and business support services designed to help organizations navigate complexity, strengthen governance, and unlock sustainable growth.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#services"
            className="bg-[#1a56db] hover:bg-blue-500 text-white font-semibold px-8 py-3.5 rounded-full text-base transition-colors text-center"
          >
            Explore Our Services
          </a>
          <a
            href="#contact"
            className="border-2 border-white/50 hover:border-white text-white font-semibold px-8 py-3.5 rounded-full text-base transition-colors text-center"
          >
            Partner With Us
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/40">
        <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
