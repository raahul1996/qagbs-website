"use client";
import { useState } from "react";

function AccountingIcon() {
  return (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 7H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4 0V5a2 2 0 114 0v2m-4 0h4m-5 8h2m-2 4h6m2-4h.01" />
    </svg>
  );
}
function TaxIcon() {
  return (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  );
}
function ErpIcon() {
  return (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
    </svg>
  );
}
function CashIcon() {
  return (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  );
}
function ShieldIcon() {
  return (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );
}
function AuditIcon() {
  return (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  );
}
function ScalesIcon() {
  return (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
    </svg>
  );
}
function BriefcaseIcon() {
  return (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

const services = [
  {
    title: "Global Accounting & Bookkeeping",
    subtitle: "International Accounting & Cost Accounting Support",
    Icon: AccountingIcon,
    detail: "We provide end-to-end accounting and bookkeeping solutions designed to support businesses operating in multiple jurisdictions. Our services ensure accurate recording of financial transactions, maintenance of compliant accounting records, and timely financial information that enables effective decision-making. By leveraging modern accounting systems and global best practices, we help organizations maintain transparency, efficiency, and financial discipline.\n\nDiligent balance sheet reconciliations confirm that each asset and liability is recorded properly. Our structured approach ensures any errors or omissions are identified early to maintain an accurate picture of the company's financial position.\n\nWe additionally provide specialized accounting and cost accounting support services for companies operating globally or expanding into international markets. Our team assists with cross-border accounting coordination, financial and cost analysis support, and alignment with international accounting practices to ensure seamless financial and cost management across jurisdictions.",
  },
  {
    title: "Tax Advisory & Cross Border Transactions",
    subtitle: "Planning, Compliance & Regulatory Guidance",
    Icon: TaxIcon,
    detail: "We provide comprehensive tax advisory and compliance support to help businesses manage their tax obligations efficiently. Our services include tax planning, compliance filings, regulatory guidance, and advisory on cross-border taxation matters. Our objective is to help clients navigate complex tax frameworks while optimizing tax efficiency and ensuring full compliance with applicable laws.",
  },
  {
    title: "Support for ERP Implementation",
    subtitle: "Finance-First System Integration & Deployment",
    Icon: ErpIcon,
    detail: "Enterprise Resource Planning (ERP) implementation is the process of configuring and deploying integrated software systems that unify core business functions such as finance, inventory, costing, procurement, manufacturing, sales, human resources, and compliance within a single digital platform. We approach ERP implementation from a finance-first perspective, ensuring every system decision directly contributes to improved profitability, operational control, and long-term business value. A successful implementation not only aligns technology with business strategy but also streamlines operations, enhances scalability, and ensures regulatory compliance.",
  },
  {
    title: "Working Capital Advisory Management",
    subtitle: "Cash Flow Optimization & Liquidity Management",
    Icon: CashIcon,
    detail: "Working Capital Management Services involves providing data analysis and early warning to help maintain required liquidity. It means ensuring you avoid surprises and have seamless cash flow for every business need. We identify and resolve bottlenecks in working capital cycles, targeting leakages and blockages. By accelerating cash velocity, optimizing internal processes for receivables and payables, and maintaining inventory discipline, we ensure quicker turnaround and sustained financial health.",
  },
  {
    title: "Compliance Advisory Services",
    subtitle: "Statutory, Financial & Governance Obligations",
    Icon: ShieldIcon,
    detail: "Operating in multiple regulatory environments requires structured compliance management. We assist organizations in understanding and meeting their statutory, financial, and governance obligations. Our compliance advisory services help businesses maintain regulatory alignment while minimizing operational and legal risks.",
  },
  {
    title: "Internal Audit Services",
    subtitle: "Risk-Based Audit Aligned with International Standards",
    Icon: AuditIcon,
    detail: "We provide independent internal audit services to help organizations strengthen internal controls, manage operational risks, and improve governance. Our risk-based audit approach evaluates financial processes, compliance systems, and operational efficiency to identify gaps and recommend practical improvements. We offer high-quality, cost-efficient internal audit support aligned with international auditing standards for global clients.",
  },
  {
    title: "Tax Litigation Advisory Support",
    subtitle: "Technical Research & Tax Position Analysis",
    Icon: ScalesIcon,
    detail: "Our services include providing technical research, preparation of documents, analysis of tax positions, and keeping in view leverages on international taxation with a cost-efficient delivery model.",
  },
  {
    title: "Other Professional Services",
    subtitle: "Advisory & Support Tailored to Client Needs",
    Icon: BriefcaseIcon,
    detail: "In addition to the services outlined above, the firm may undertake other lawful professional and advisory services as may be determined by the partners from time to time, consistent with the firm's expertise and the evolving needs of its clients.",
  },
];

export default function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="services" className="py-24 bg-[#dbeafe] scroll-mt-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-[#1a56db] text-sm font-semibold uppercase tracking-widest mb-3">What We Offer</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0d2240] tracking-tight">Our Services</h2>
          <p className="text-lg text-slate-600 mt-4 max-w-2xl mx-auto">
            Click any service to learn more.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map(({ title, subtitle, Icon, detail }, i) => {
            const isOpen = openIndex === i;
            return (
              <button
                key={title}
                onClick={() => toggle(i)}
                className={`text-left rounded-xl border-2 transition-all duration-200 flex flex-col ${
                  isOpen
                    ? "bg-[#0d2240] border-[#1a56db] shadow-xl"
                    : "bg-white border-blue-100 hover:border-[#1a56db] hover:shadow-md"
                }`}
              >
                {/* Top area: icon + title */}
                <div className="p-7 flex flex-col items-center text-center">
                  <div className={`mb-4 ${isOpen ? "text-blue-300" : "text-[#1a56db]"}`}>
                    <Icon />
                  </div>
                  <div className={`w-10 border-t mb-4 ${isOpen ? "border-white/30" : "border-blue-200"}`} />
                  <h3 className={`font-bold text-sm uppercase tracking-wide leading-snug mb-1 ${isOpen ? "text-white" : "text-[#0d2240]"}`}>
                    {title}
                  </h3>
                  <p className={`text-xs leading-relaxed ${isOpen ? "text-blue-300" : "text-slate-500"}`}>{subtitle}</p>

                  {/* Chevron */}
                  <div className={`mt-4 transition-transform duration-200 ${isOpen ? "rotate-180 text-blue-300" : "text-blue-400"}`}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                {/* Expandable detail */}
                {isOpen && (
                  <div className="px-7 pb-7 border-t border-white/10 space-y-3">
                    {detail.split("\n\n").map((para, idx) => (
                      <p key={idx} className="text-blue-100 text-sm leading-relaxed pt-4 first:pt-4">{para}</p>
                    ))}
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
