import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-slate-100">
      {/* Background image — light library/office */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/hero-bg.jpg"
          alt="Professional office with books"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Light overlay so text is readable but background shows through */}
        <div className="absolute inset-0 bg-white/55" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-28 pt-36">
        <p className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1a56db] leading-tight tracking-tight mb-4 whitespace-nowrap">
          Quick Acuity Global Business Solutions
        </p>

        {/* Tagline — each phrase on its own line */}
        <div className="mb-8 space-y-1">
          <p className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0d2240] leading-none tracking-tight">
            Precision
          </p>
          <p className="text-2xl sm:text-3xl md:text-4xl font-black text-[#1a56db] leading-none tracking-tight">
            Intelligence
          </p>
          <p className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#0d2240] leading-snug">
            Global Advantage
          </p>
          <p className="text-lg sm:text-xl md:text-2xl font-bold text-slate-600 leading-snug">
            Enduring Boundless Impact
          </p>
        </div>

        <p className="text-lg text-[#1a56db] max-w-2xl mb-10 leading-relaxed">
          Global accounting, Tax, advisory, and business support services designed to help organizations navigate complexity, strengthen governance, and unlock sustainable growth.
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
            className="border-2 border-[#0d2240]/50 hover:border-[#0d2240] text-[#0d2240] font-semibold px-8 py-3.5 rounded-full text-base transition-colors text-center"
          >
            Partner With Us
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-[#0d2240]/30">
        <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
