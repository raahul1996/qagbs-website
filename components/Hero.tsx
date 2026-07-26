import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col lg:flex-row">
      {/* Left: text panel */}
      <div className="relative z-10 flex flex-col justify-center lg:w-1/2 bg-[#0d2240] px-8 sm:px-12 lg:px-16 py-24 lg:py-32">
        <div className="max-w-xl">
          <div className="mb-8 space-y-1">
            <p className="text-2xl sm:text-3xl md:text-4xl font-black text-[#60a5fa] leading-none tracking-tight">
              Trust
            </p>
            <p className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-none tracking-tight">
              Precision
            </p>
            <p className="text-2xl sm:text-3xl md:text-4xl font-black text-[#60a5fa] leading-none tracking-tight">
              Intelligence
            </p>
            <p className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white leading-snug">
              Global Advantage
            </p>
            <p className="text-lg sm:text-xl md:text-2xl font-bold text-slate-400 leading-snug">
              Enduring Boundless Impact
            </p>
          </div>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mb-10 leading-relaxed">
            Global accounting, Tax, advisory, and business support services designed to help organizations navigate complexity, strengthen governance, and unlock sustainable growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#services"
              className="bg-[#60a5fa] hover:bg-[#93c5fd] text-[#0d2240] font-semibold px-8 py-3.5 rounded-full text-base transition-colors text-center"
            >
              Explore Our Services
            </a>
            <a
              href="#contact"
              className="border-2 border-white/40 hover:border-white text-white font-semibold px-8 py-3.5 rounded-full text-base transition-colors text-center"
            >
              Partner With Us
            </a>
          </div>
        </div>
      </div>

      {/* Right: founders photo */}
      <div className="relative lg:w-1/2 min-h-[50vh] lg:min-h-0">
        <Image
          src="/hero-founders.jpg"
          alt="QAGBS co-founders collaborating in a modern office"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/30 z-20">
        <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
