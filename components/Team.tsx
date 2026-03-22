"use client";
import { useState } from "react";
import Image from "next/image";

function Avatar({ src, name, initials }: { src: string; name: string; initials: string }) {
  const [err, setErr] = useState(false);
  if (err) {
    return (
      <div className="w-36 h-36 rounded-2xl bg-[#1a56db] flex items-center justify-center text-white font-bold text-3xl mx-auto">
        {initials}
      </div>
    );
  }
  return (
    <img
      src={src}
      alt={name}
      className="w-36 h-36 rounded-2xl object-cover object-top mx-auto"
      onError={() => setErr(true)}
    />
  );
}

const leaders = [
  {
    name: "Mr. Scott Wells, CFA",
    role: "Co-Founder",
    title: "Managing Partner, G&O Consulting | Managing Director, Minerva Valuations",
    initials: "SW",
    photo: "/team/scott-wells.jpg",
    credentials: ["CFA Charterholder", "BS Finance, Miami University", "FINRA Series 3 & SIE"],
    bio: "20+ years of corporate banking and C-suite financial strategy. Owner and Managing Partner at G&O Consulting providing fractional CFO and capital advisory services. Managing Director at Minerva Valuations specializing in debt capital, business valuations, and M&A. Former VP Finance at MDpanel overseeing a $50M P&L with 22.5% YoY EBITDA growth. Career includes Bank of America, BBVA Compass, and Wells Fargo.",
    expertise: ["Capital Advisory & Fractional CFO", "Business Valuations & M&A", "Corporate Banking", "Financial Modeling & CIMs", "Treasury & Investor Relations"],
    contact: { phone: "(480) 215-1025", email: "scottwellscfa@gmail.com", location: "Los Angeles, CA" },
  },
  {
    name: "Mr. S. Vijayakumar",
    role: "Co-Founder",
    title: "M.Com | PGDFM | ACMA | ACS | LL.M | EY IFRS Certified",
    initials: "VK",
    photo: "/team/vijay-kumar.jpg",
    credentials: ["M.Com", "PGDFM", "ACMA", "ACS", "LL.M", "EY IFRS Certified"],
    bio: "A financial strategist with over three decades of comprehensive experience in financial management, strategic planning, and corporate governance. Vijayakumar has led global finance operations across the USA, UK, Netherlands, China, Hong Kong, Taiwan, and Japan, combining deep technical expertise with a collaborative approach rooted in process excellence.",
    expertise: ["ERP Implementation (Oracle)", "Direct & Indirect Tax", "Transfer Pricing & FEMA", "Working Capital Management", "Internal Controls & SOPs"],
    contact: { phone: "+91 97001 92091", email: "vijay2k14@gmail.com", location: "Cardiff, United Kingdom" },
  },
  {
    name: "Mr. Srikanteswara M R",
    role: "Co-Founder",
    title: "Post Graduate in Commerce | 35+ Years Experience",
    initials: "SR",
    photo: "/team/srikanteswara.jpg",
    credentials: ["Post Graduate in Commerce", "35+ Years Experience"],
    bio: "A strategic finance leader with 35 years of excellence in financial management and corporate governance. Srikanteswara spent over a decade at Frauscher Sensor Technology India, instrumental in growing the company from ₹120 million to ₹5,000 million, emerging as a market leader in the railway signalling sector. Known for integrity, meticulous attention to detail, and collaborative leadership.",
    expertise: ["Internal Audit (IFRS)", "Cost & Project Accounting", "M&A & Due Diligence", "Capital Budgeting", "Subsidiary & JV Structuring"],
    contact: { phone: "+91 9686500446", email: "mrsrikanta3@gmail.com", location: "Bengaluru, India" },
  },
];

export default function Team() {
  return (
    <section id="leadership">
      {/* Banner */}
      <div className="relative bg-[#eff6ff] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[380px]">
            {/* Left: text */}
            <div className="py-20 flex flex-col justify-center pr-8">
              <p className="text-[#1a56db] text-sm font-semibold uppercase tracking-widest mb-4">Meet The Team</p>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0d2240] leading-tight mb-4">
                Our Leadership Team
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Our leadership comprises experienced professionals drawn from a plethora of fields — academic background, team abilities, expertise, and progressive vision that aligns with client needs.
              </p>
              <div>
                <a
                  href="#services"
                  className="inline-block bg-[#1a56db] hover:bg-blue-500 text-white font-semibold px-7 py-3 rounded-full transition-colors text-sm"
                >
                  Explore Our Services
                </a>
              </div>
            </div>
            {/* Right: chess image */}
            <div className="relative hidden lg:block">
              <Image
                src="/leadership-bg.jpg"
                alt="Strategic leadership"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#eff6ff] via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>

      {/* Profile cards */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leaders.map((leader) => (
              <div key={leader.name} className="bg-[#f8faff] border border-blue-100 rounded-2xl p-8 flex flex-col">
                {/* Photo */}
                <div className="mb-5">
                  <Avatar src={leader.photo} name={leader.name} initials={leader.initials} />
                </div>

                {/* Name & role */}
                <h3 className="text-[#0d2240] font-bold text-lg text-center mb-1">{leader.name}</h3>
                <p className="text-[#1a56db] text-sm font-semibold text-center mb-1">{leader.role}</p>

                {/* Credentials */}
                <div className="flex flex-wrap justify-center gap-1.5 mb-4">
                  {leader.credentials.map((c) => (
                    <span key={c} className="bg-blue-50 border border-blue-200 text-[#1a56db] text-xs px-2.5 py-1 rounded-full">
                      {c}
                    </span>
                  ))}
                </div>

                {/* Bio */}
                <p className="text-slate-600 text-sm leading-relaxed mb-5 flex-grow">{leader.bio}</p>

                {/* Expertise */}
                <div className="mb-5">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Areas of Expertise</p>
                  <ul className="space-y-1.5">
                    {leader.expertise.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                        <svg className="w-4 h-4 text-[#1a56db] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Contact */}
                <div className="border-t border-blue-100 pt-4 space-y-1">
                  <a href={`tel:${leader.contact.phone.replace(/\s/g, "")}`} className="flex items-center gap-2 text-sm text-slate-600 hover:text-[#1a56db] transition-colors">
                    <svg className="w-4 h-4 text-[#1a56db]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    {leader.contact.phone}
                  </a>
                  <a href={`mailto:${leader.contact.email}`} className="flex items-center gap-2 text-sm text-slate-600 hover:text-[#1a56db] transition-colors">
                    <svg className="w-4 h-4 text-[#1a56db]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    {leader.contact.email}
                  </a>
                  <p className="flex items-center gap-2 text-sm text-slate-500">
                    <svg className="w-4 h-4 text-[#1a56db]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {leader.contact.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
