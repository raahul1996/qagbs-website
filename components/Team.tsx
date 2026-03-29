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
    credentials: "CFA Charterholder, BS Finance — Miami University, FINRA Series 3 & SIE",
    initials: "SW",
    photo: "/team/scott-wells.jpg",
    bio: "20+ years of corporate banking and C-suite financial strategy. Owner and Managing Partner at G&O Consulting providing fractional CFO and capital advisory services. Managing Director at Minerva Valuations specializing in debt capital, business valuations, and M&A. Former VP Finance at MDpanel overseeing a $50M P&L with 22.5% YoY EBITDA growth. Career includes Bank of America, BBVA Compass, and Wells Fargo.",
    expertise: ["Capital Advisory & Fractional CFO", "Business Valuations & M&A", "Corporate Banking", "Financial Modeling & CIMs", "Treasury & Investor Relations"],
    contact: { phone: "(480) 215-1025", email: "scott@qagbs.com", location: "Los Angeles, CA" },
  },
  {
    name: "Mr. S. Vijayakumar",
    role: "Co-Founder",
    credentials: "M.Com, PGDFM, ACMA, ACS, LL.M, EY IFRS Certified",
    initials: "VK",
    photo: "/team/vijay-kumar.jpg",
    bio: `Financial strategist with a passion for turning complex numbers into clear, actionable insights. Blending deep expertise in tax compliance, ERP systems, and global finance with a knack for transforming financial health across borders. Driven by precision, curiosity, and a genuine respect for diverse cultures — helping businesses thrive one balance sheet at a time.

He is a dedicated and highly skilled finance professional with over three decades of comprehensive experience in financial management, strategic planning, and corporate governance and taxation. Throughout his career, he has taken great pride in his ability to interpret complex financial data — ranging from budgets and income statements to forecasts and variance analyses — to provide actionable insights that drive business growth and restore financial health.

His expertise lies in end-to-end management of financial and accounting matters. He has extensive experience in preparing financial statements, overseeing monthly and annual closings, and enhancing financial procedures to ensure transparency and efficiency. He is particularly proficient in budget projections, working capital management, fixed assets, and statutory compliance.

He possesses a unique blend of financial and legal acumen — holding a Master of Commerce, a Post Graduate Diploma in Financial Management, Associate Membership of both ICMAI (ACMA) and ICSI (ACS), and a Master of Law (LL.M). He has committed to lifelong learning, as evidenced by his recent Diploma in Information System Security Audit and participation in EY's IFRS certification course.

He brings rigorous perspective to regulatory compliance and taxation, having successfully led numerous Indian tax assessments including Direct and Indirect taxes, GST, and Transfer Pricing, often resolving high-value litigations without adverse material tax adjustments. His experience extends to FEMA compliance, ECB matters, and foreign inward capital remittance.

Most recently, he served as Associate Vice President of Finance at Brane Enterprises and as Senior Director of Global Finance at Imaging Endpoints, managing operations across the USA, UK, Netherlands, China, Hong Kong, Taiwan, and Japan.`,
    expertise: ["ERP Implementation (Oracle)", "Direct & Indirect Tax", "Transfer Pricing & FEMA", "Working Capital Management", "Internal Controls & SOPs"],
    contact: { phone: "+91 9663546561", email: "vijay@qagbs.com", location: "Bengaluru, India" },
  },
  {
    name: "Mr. Srikanteswara M R",
    role: "Co-Founder",
    credentials: "Post Graduate in Commerce, Academics in Chartered Accountancy & Cost Accountancy",
    initials: "SR",
    photo: "/team/srikanteswara.jpg",
    bio: `Strategic Finance Leader with Post Graduation in Commerce and Academics in Chartered Accountancy, Cost Accountancy and having 35+ Years of Excellence in Financial Management & Corporate Governance.

He is a distinguished finance, tax, accounting and cost accounting professional with an illustrious career spanning over three decades. With a specialized focus on multinational Infrastructure and Railway Signalling sector for more than 25 years, he has established himself as a strategic leader capable of navigating complex financial landscapes, driving exponential business growth, and ensuring rigorous statutory compliance.

Throughout his career, he has combined deep technical expertise in GAAP and IFRS with a visionary approach to business strategy. He is recognized for his ability to bridge the gap between financial oversight and operational excellence, having played a pivotal role in scaling organizations from boutique operations into multi-hundred-crore enterprises. His core competencies encompass financial reporting, internal audit, taxation (Direct and Indirect), project accounting, and M&A support.

He held a senior position at Frauscher Sensor Technology India Pvt Ltd. During his decade-long tenure, he was instrumental in the company's meteoric rise, supporting the business as it grew and emerged as market leader. He oversaw Finance, Accounts, Legal, Tax functions and Corporate Compliance, implementing robust KPI systems across Engineering, Procurement, and IT, and successfully structuring subsidiaries and Joint Ventures.

He worked at Siemens Rail Automation India Pvt Ltd (formerly Invensys), managing the full spectrum of finance and accounting for the Asia-Pacific leadership and specializing in Project Accounting and risk evaluation for high-stakes Metro and Mainline signaling projects. His foundational years were spent at Ansaldo, where he mastered project revenue recognition, hedge accounting, IFRS, and comprehensive Indirect Tax matters.

He is known for his integrity, meticulous attention to detail, and collaborative leadership style. Under his leadership, the firm is anchored in the philosophy of delivering precision-driven, insight-led, and globally aligned financial and advisory solutions to clients across borders.`,
    expertise: ["Internal Audit (IFRS)", "Cost & Project Accounting", "M&A & Due Diligence", "Capital Budgeting", "Subsidiary & JV Structuring"],
    contact: { phone: "+91 9535734505", email: "sri@qagbs.com", location: "Bengaluru, India" },
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
            {/* Right: chess image — brightened to show white pieces */}
            <div className="relative hidden lg:block">
              <Image
                src="/leadership-bg.jpg"
                alt="Strategic leadership"
                fill
                className="object-cover object-center"
                style={{ filter: "brightness(1.6) contrast(0.85)" }}
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
                <p className="text-[#1a56db] text-sm font-semibold text-center mb-2">{leader.role}</p>

                {/* Credentials inline */}
                <p className="text-slate-500 text-xs text-center mb-4 leading-relaxed">{leader.credentials}</p>

                {/* Bio */}
                <div className="text-slate-600 text-sm leading-relaxed mb-5 flex-grow space-y-3">
                  {leader.bio.split("\n\n").map((para, i) => (
                    <p key={i} className="text-justify">{para}</p>
                  ))}
                </div>

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
