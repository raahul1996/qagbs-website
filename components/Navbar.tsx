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

  useEffect(() => {
    const handleScroll = () => {
      let current = "home";
      for (const { id } of tabs) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 80) current = id;
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
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => scrollTo("home")} className="flex items-center gap-3 focus:outline-none">
          <div className="bg-white rounded-lg px-2 py-1 flex-shrink-0">
            <Image src="/logo.png" alt="QAGBS Logo" width={90} height={50} className="object-contain" style={{maxHeight: '50px', width: 'auto'}} />
          </div>
          <div className="text-left hidden sm:block">
            <div className="text-white font-bold text-base leading-tight tracking-wide">QAGBS</div>
            <div className="text-blue-300 text-xs font-normal leading-tight mt-0.5">Quick Acuity Global Business Solutions</div>
          </div>
        </button>

        {/* Desktop tabs */}
        <div className="hidden md:flex items-center gap-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => scrollTo(tab.id)}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
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
            className="ml-3 bg-[#1a56db] hover:bg-blue-500 text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors"
          >
            Get in Touch
          </button>
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden p-2 text-blue-200" onClick={() => setOpen(!open)} aria-label="Toggle menu">
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
