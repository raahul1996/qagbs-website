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
    name: "Mr. Scott Wells",
    credentials: "CFA",
    role: "Co-Founder",
    initials: "SW",
    photo: "/team/scott-wells.jpg",
    bio: "20+ years of corporate banking and C-suite financial strategy. Owner and Managing Partner at G&O Consulting providing fractional CFO and capital advisory services. Managing Director at Minerva Valuations specializing in debt capital, business valuations, and M&A. Former VP Finance at MDpanel overseeing a $50M P&L with 22.5% YoY EBITDA growth. Career includes Bank of America, BBVA Compass, and Wells Fargo.",
    expertise: ["Capital Advisory & Fractional CFO", "Business Valuations & M&A", "Corporate Banking", "Financial Modeling & CIMs", "Treasury & Investor Relations"],
    linkedin: "https://www.linkedin.com/in/scottwellscfa/",
    contact: { phone: "+1 (480) 215-1025", email: "scott@qagbs.com", location: "Los Angeles, USA" },
  },
  {
    name: "Mr. S. Vijayakumar",
    credentials: "M.Com, PGDFM, ACMA, ACS, LL.M, DISSA, IFRS Certified",
    role: "Co-Founder",
    initials: "VK",
    photo: "/team/vijay-kumar.jpg",
    bio: `Financial strategist with a passion for turning complex numbers into clear, actionable insights. Blending deep expertise in tax compliance, ERP systems, and global finance with a knack for transforming financial health across borders. Driven by precision, curiosity, and a genuine respect for diverse cultures\u2014helping businesses thrive one balance sheet at a time.

He is dedicated and highly skilled finance professional with over three decades of comprehensive experience in financial management, strategic planning, and corporate governance and taxation. Throughout his career, He has taken great pride in his ability to interpret complex financial data\u2014ranging from budgets and income statements to forecasts and variance analyses\u2014to provide actionable insights that drive business growth and restore financial health. His professional journey has been defined by a commitment to excellence, a meticulous approach to internal controls, and a passion for integrating advanced technology into financial systems towards continuous improvement.

His expertise lies in the end-to-end management of financial and accounting matters. He has extensive experience in preparing financial statements, overseeing monthly and annual closings, and enhancing financial procedures to ensure transparency and efficiency. He is particularly proficient in conducting budget projections and managing working capital, fixed assets, and statutory compliance with short term and long term financial objective. One of his core strengths is his ability to support Professionals and Boards of Directors and every stakeholder by translating data into clear, visual reports\u2014using latest tools, functions, charts, and tables\u2014to facilitate informed decision-making.

He posses a unique blend of financial and legal acumen. he holds a Master of Commerce and a Post Graduate Diploma in Financial Management in professional arena He is an Associate Member of both the Institute of Cost Accountants of India (ACMA) and the Institute of Company Secretaries of India (ACS), and holding a Master of Law (LL.M), He has committed to lifelong learning, as evidenced by his recent Diploma in Information System Security Audit and his IFRS certification.

He brings a rigorous perspective to regulatory compliance and taxation. He has successfully led numerous Indian tax assessments, including Direct and Indirect taxes, GST, and expertise in Transfer Pricing concept and principles, often resolving high-value litigations and audits without adverse material tax adjustments. His experience also extends to managing Foreign Exchange Management Act (FEMA) compliances and foreign inward capital remittance, External Commercial Borrowings (ECB) matters with best compliance of Central Bank of India (Reserve Bank of India).

His leadership style is rooted in collaboration and process excellence. He has proven track record of spearheading Oracle ERP implementations and designing Standard Operating Procedures (SOPs) that streamline operations. He was supervising accounts in China under PRC GAAP or managing a multi-location contract in India, He approaches every task with a self-starter mindset and a deep respect for diverse cultures.

He has driven by the goal of improving financial performance through strategic oversight and robust reporting. His analytical skills and problem-solving abilities to help organizations navigate the complexities of the modern financial landscape while maintaining the highest standards of integrity and compliance.

In recent years, He has embraced the challenge of working within dynamic startup environments and global MNCs. Most recently, He has served as Associate Vice President of Finance at Brane Enterprises, where he acted as a Subject Matter Expert in testing and validating ERP solutions. In this role, He has focused on internal controls, segregation of duties, and ensuring that business solutions adhered to Generally Accepted Accounting Principles (GAAP). Prior to that, as Senior Director of Global Finance at Imaging Endpoints, In various Multi National Organizations like DISA India, Metso Minerals, CSR (Cambridge Silicon Radio), LSG Sky Chef & USP. He has managed financial operations across multiple jurisdictions, including the USA, UK, Netherlands, China, Hong Kong, Taiwan and Japan.

His educational, ethical background is a cornerstone with which he peaked the professional identity.`,
    expertise: ["ERP Implementation (Oracle)", "Direct & Indirect Tax", "Transfer Pricing & FEMA", "Working Capital Management", "Internal Controls & SOPs"],
    linkedin: "https://www.linkedin.com/in/vijayakumar-sowrirajalu-b7078536/",
    contact: { phone: "+91 9663546561", email: "vijay@qagbs.com", location: "Bengaluru, Karnataka, India" },
  },
  {
    name: "Mr. Srikanteswara M R",
    credentials: "Post Graduate in Commerce, Academics in Chartered Accountancy & Cost Accountancy",
    role: "Co-Founder",
    initials: "SR",
    photo: "/team/srikanteswara.jpg",
    bio: `Strategic Finance Leader with Post Graduation in Commerce and Academics in Chartered Accountancy, Cost Accountancy and having 35+ Years of Excellence in Financial Management & Corporate Governance

He is a distinguished finance, tax, accounting and cost accounting professional with an illustrious career spanning over three decades. With a specialized focus on multinational Infrastructure and Railway Signalling sector for more than 25 years, he has established himself as a strategic leader capable of navigating complex financial landscapes, driving exponential business growth, and ensuring rigorous statutory compliance.

Throughout his career, he has combined deep technical expertise in GAAP and IFRS with a visionary approach to business strategy. He is recognized for his ability to bridge the gap between financial oversight and operational excellence, having played a pivotal role in scaling organizations from boutique operations into multi-hundred-crore enterprises. His core competencies encompass financial reporting, internal audit, taxation (Direct and Indirect), project accounting, and M&A support.

Held senior position at Frauscher Sensor Technology India Pvt Ltd. During his decade-long tenure, he was instrumental in the company\u2019s meteoric rise, supporting the business as it grew; entity emerged as market leader. he oversaw Finance, Accounts, Legal, Tax functions and Corporate Compliance.

His leadership was characterized by the implementation of robust KPI systems across diverse departments\u2014including Engineering, Procurement, and IT\u2014and the successful structuring of subsidiaries and Joint Ventures. His expertise in capital budgeting and cash flow optimization ensured the financial health of the organization during periods of rapid expansion.

Worked at Siemens Rail Automation India Pvt Ltd (formerly Invensys). In this role, he managed the full spectrum of finance and accounting for the Asia-Pacific leadership, specializing in Project Accounting and risk evaluation for high-stakes projects such as Metro and Mainline signaling.

His foundational years in the Railway Signaling industry were spent at Ansaldo, mastered the complexities of project revenue recognition, hedge accounting, and international financial reporting (IFRS), while managing comprehensive Indirect Tax matters, Global, Internal and Statutory Audits.

He is known for his integrity, meticulous attention to detail, and a collaborative leadership style. Beyond the Financial Statements, he is a professional dedicated to continuous improvement and organizational stability, ensuring that every company he serves is positioned for long-term financial success. He is driven by a commitment to excellence and long-term value creation.

Under his leadership, the firm is anchored in the philosophy of delivering precision-driven, insight-led, and globally aligned financial and advisory solutions to clients across borders.`,
    expertise: ["Internal Audit (IFRS)", "Cost & Project Accounting", "M&A & Due Diligence", "Capital Budgeting", "Subsidiary & JV Structuring"],
    linkedin: "https://www.linkedin.com/in/srikanteswara-m-r-1295601a/",
    contact: { phone: "+91 9535734505", email: "sri@qagbs.com", location: "Bengaluru, Karnataka, India" },
  },
];

export default function Team() {
  return (
    <section id="leadership" className="scroll-mt-16">
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
            {/* Right: leadership image */}
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

                {/* Name with qualifications */}
                <h3 className="text-center mb-1 leading-snug">
                  <span className="text-[#0d2240] font-bold text-base">{leader.name}</span>
                  {leader.credentials && <span className="text-[#1a56db] font-normal italic text-sm">, {leader.credentials}</span>}
                </h3>
                {/* Role */}
                <p className="text-[#1a56db] text-sm font-semibold text-center mb-4">{leader.role}</p>

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
                  {leader.linkedin && (
                    <a href={leader.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-slate-600 hover:text-[#1a56db] transition-colors">
                      <svg className="w-4 h-4 text-[#1a56db]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                      LinkedIn
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
