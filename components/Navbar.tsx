"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const tabs = [
  { label: "Home", id: "home" },
  { label: "Services", id: "services" },
  { label: "About", id: "about" },
  { label: "Leadership", id: "leadership" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      let current = "home";
      for (const { id } of tabs) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) current = id;
      }
      setActive(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0d2240] shadow-lg">
      {/* Desktop: two-row layout */}
      <div className="hidden md:block">
        {/* Row 1: Logo + Company name (collapses on scroll) */}
        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
          scrolled ? "max-h-0 opacity-0" : "max-h-[220px] opacity-100"
        }`}>
          <div className="flex items-center gap-6 px-8 py-6 border-b border-white/10">
            <button onClick={() => scrollTo("home")} className="flex items-center gap-6 focus:outline-none flex-shrink-0">
              <Image
                src="/logo.jpeg"
                alt="QAGBS Logo"
                width={140}
                height={140}
                className="rounded-full object-contain"
              />
              <div className="text-white font-extrabold text-2xl leading-tight tracking-widest uppercase whitespace-nowrap">
                Quick Acuity Global Business Solutions
              </div>
            </button>
          </div>
        </div>

        {/* Row 2: Nav tabs (centered) */}
        <div className="flex items-center justify-center gap-1 py-2 px-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => scrollTo(tab.id)}
              className={`px-5 py-1.5 text-sm font-medium rounded-md transition-all ${
                active === tab.id
                  ? "text-white bg-white/10 border-b-2 border-blue-400"
                  : "text-blue-200 hover:text-white hover:bg-white/10"
              }`}
            >
              {tab.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("contact")}
            className="ml-4 bg-[#1a56db] hover:bg-blue-500 text-white text-sm font-semibold px-5 py-1.5 rounded-full transition-colors"
          >
            Get in Touch
          </button>
        </div>
      </div>

      {/* Mobile: single row with logo + hamburger */}
      <div className="md:hidden flex items-center justify-between px-6 h-20">
        <button onClick={() => scrollTo("home")} className="flex items-center gap-2 focus:outline-none">
          <Image src="/logo.jpeg" alt="QAGBS Logo" width={56} height={56} className="rounded-full object-contain" />
          <div className="text-white font-bold text-sm leading-tight">QAGBS</div>
        </button>
        <button className="p-2 text-blue-200" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0d2240] border-t border-white/10 px-6 py-4 flex flex-col gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => scrollTo(tab.id)}
              className={`text-left px-3 py-2 text-sm rounded-md ${
                active === tab.id ? "text-white font-semibold bg-white/10" : "text-blue-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("contact")}
            className="mt-2 bg-[#1a56db] text-white text-sm font-medium px-4 py-2 rounded-full text-center"
          >
            Get in Touch
          </button>
        </div>
      )}
    </nav>
  );
}
