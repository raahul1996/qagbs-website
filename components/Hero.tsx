import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="flex flex-col pt-20 md:pt-[230px] bg-[#0d2240]">
      {/* Founders photo — full width */}
      <div className="relative w-full aspect-[16/7] sm:aspect-[16/6]">
        <Image
          src="/hero-founders.jpg"
          alt="QAGBS co-founders collaborating in a modern office"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Navy text panel */}
      <div className="bg-[#0d2240] px-6 sm:px-12 lg:px-16 py-14 lg:py-16">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
          {/* Left: tagline */}
          <div className="lg:w-5/12 shrink-0">
            <div className="space-y-0.5">
              <p className="text-3xl sm:text-4xl md:text-5xl font-black text-[#60a5fa] leading-none tracking-tight">
                Trust
              </p>
              <p className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-none tracking-tight">
                Precision
              </p>
              <p className="text-3xl sm:text-4xl md:text-5xl font-black text-[#60a5fa] leading-none tracking-tight">
                Intelligence
              </p>
              <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-snug">
                Global Advantage
              </p>
              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-400 leading-snug">
                Enduring Boundless Impact
              </p>
            </div>
          </div>

          {/* Right: description + buttons */}
          <div className="lg:flex-1 flex flex-col justify-center">
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mb-8 leading-relaxed">
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
      </div>
    </section>
  );
}
