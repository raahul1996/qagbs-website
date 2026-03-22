function AccountingIcon() {
  return (
    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 7H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4 0V5a2 2 0 114 0v2m-4 0h4m-5 8h2m-2 4h6m2-4h.01" />
    </svg>
  );
}
function TaxIcon() {
  return (
    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  );
}
function ErpIcon() {
  return (
    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
    </svg>
  );
}
function CashIcon() {
  return (
    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  );
}
function ShieldIcon() {
  return (
    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );
}
function AuditIcon() {
  return (
    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  );
}
function ScalesIcon() {
  return (
    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
    </svg>
  );
}
function BriefcaseIcon() {
  return (
    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

const services = [
  { title: "Global Accounting & Bookkeeping", subtitle: "International Accounting & Cost Accounting Support", Icon: AccountingIcon },
  { title: "Tax Advisory & Cross Border Transactions", subtitle: "Planning, Compliance & Regulatory Guidance", Icon: TaxIcon },
  { title: "Support for ERP Implementation", subtitle: "Finance-First System Integration & Deployment", Icon: ErpIcon },
  { title: "Working Capital Advisory Management", subtitle: "Cash Flow Optimization & Liquidity Management", Icon: CashIcon },
  { title: "Compliance Advisory Services", subtitle: "Statutory, Financial & Governance Obligations", Icon: ShieldIcon },
  { title: "Internal Audit Services", subtitle: "Risk-Based Audit Aligned with International Standards", Icon: AuditIcon },
  { title: "Tax Litigation Advisory Support", subtitle: "Technical Research & Tax Position Analysis", Icon: ScalesIcon },
  { title: "Other Professional Services", subtitle: "Advisory & Support Tailored to Client Needs", Icon: BriefcaseIcon },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#dbeafe]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-[#1a56db] text-sm font-semibold uppercase tracking-widest mb-3">What We Offer</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0d2240] tracking-tight">
            Our Services
          </h2>
          <p className="text-lg text-slate-600 mt-4 max-w-2xl mx-auto">
            Integrated professional services that strengthen financial transparency, enhance operational efficiency, and support informed decision-making.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map(({ title, subtitle, Icon }) => (
            <div
              key={title}
              className="bg-[#0d2240] hover:bg-[#1a3a6b] transition-colors duration-200 rounded-xl p-8 flex flex-col items-center text-center cursor-default"
            >
              <div className="mb-5"><Icon /></div>
              <div className="w-12 border-t border-white/30 mb-5" />
              <h3 className="text-white font-bold text-sm uppercase tracking-wide leading-snug mb-2">{title}</h3>
              <p className="text-blue-300 text-xs leading-relaxed">{subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
