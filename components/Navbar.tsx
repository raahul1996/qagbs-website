"use client";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="bg-blue-700 text-white font-extrabold text-xl px-3 py-1 rounded-lg tracking-tight">
              QAGB
            </div>
            <span className="hidden sm:block text-gray-700 font-semibold text-sm leading-tight">
              Quick Actuality<br />Global Services
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <a href="#services" className="hover:text-blue-700 transition-colors">Services</a>
            <a href="#about" className="hover:text-blue-700 transition-colors">About</a>
            <a href="#why-us" className="hover:text-blue-700 transition-colors">Why Us</a>
            <a href="#contact" className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors">
              Contact Us
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-blue-700"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden pb-4 flex flex-col gap-3 text-sm font-medium text-gray-600">
            <a href="#services" onClick={() => setOpen(false)} className="hover:text-blue-700">Services</a>
            <a href="#about" onClick={() => setOpen(false)} className="hover:text-blue-700">About</a>
            <a href="#why-us" onClick={() => setOpen(false)} className="hover:text-blue-700">Why Us</a>
            <a href="#contact" onClick={() => setOpen(false)} className="bg-blue-700 text-white px-4 py-2 rounded-lg text-center hover:bg-blue-800 transition-colors">
              Contact Us
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
