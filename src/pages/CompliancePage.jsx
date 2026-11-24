import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import ActionButton from '../components/common/ActionButton';
import { GLOBAL_HUBS } from '../data/platformData';

export default function CompliancePage() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('compliance@blackmarkt.network');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const complianceSections = [
    { id: 'sanctions', label: '1. AML & Global Sanctions' },
    { id: 'fadp', label: '2. Swiss FADP & Sovereignty' },
    { id: 'security', label: '3. ISO 27001 & DORA' },
    { id: 'anti-bribery', label: '4. Anti-Corruption & Independence' },
    { id: 'protocol', label: '5. Institutional DD Protocol' },
    { id: 'contacts', label: '6. Compliance Directory' },
  ];

  return (
    <Layout>
      {/* Hero Header */}
      <section className="relative w-full rounded-[24px] bg-[#0B1320] border border-[#C9A227]/20 p-8 sm:p-14 lg:p-16 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_top_right,rgba(201,162,39,0.12),transparent_70%)] pointer-events-none" />

        <div className="max-w-[960px] flex flex-col gap-4 relative z-10">
          <div className="flex flex-wrap items-center gap-3 text-[12px] font-caption text-[#94A3B8] uppercase tracking-wider">
            <span className="text-[#C9A227] font-semibold">INSTITUTIONAL TRUST &amp; SECURITY</span>
            <span className="text-white/20">&bull;</span>
            <span>FIDUCIARY INTEGRITY</span>
            <span className="text-white/20">&bull;</span>
            <span className="text-emerald-400 font-mono">SOC 2 TYPE II &bull; ISO/IEC 27001</span>
          </div>

          <h1 className="text-[38px] sm:text-[54px] lg:text-[62px] font-headings font-medium tracking-tight text-white leading-[1.05]">
            Compliance &amp; Due Diligence
          </h1>

          <p className="text-[17px] sm:text-[20px] text-[#CBD5E1] leading-relaxed max-w-[840px] font-body">
            Our strategic advisory infrastructure conforms to the world&rsquo;s most rigorous banking secrecy, anti-money laundering (AML), and sovereign data security frameworks.
          </p>

          <div className="flex flex-wrap items-center gap-6 pt-3 text-[13px] text-[#94A3B8] border-t border-white/10 mt-2">
            <div>
              <span className="text-white/40 block text-[11px] uppercase tracking-wider">Sanctions Screening</span>
              <span className="text-white font-medium">OFAC &bull; UK OFSI &bull; EU &bull; SECO (CH)</span>
            </div>
            <div>
              <span className="text-white/40 block text-[11px] uppercase tracking-wider">Data Enclave</span>
              <span className="text-white font-medium">Zurich Tier-IV Air-Gapped Facilities</span>
            </div>
            <div>
              <span className="text-white/40 block text-[11px] uppercase tracking-wider">Office of Chief Compliance Officer</span>
              <button
                onClick={handleCopyEmail}
                className="text-[#C9A227] hover:text-[#DFBA42] font-mono transition-colors inline-flex items-center gap-1.5"
                title="Click to copy"
              >
                compliance@blackmarkt.network
                <span className="text-[11px] bg-white/10 px-1.5 py-0.5 rounded text-white/70">
                  {copiedEmail ? 'Copied!' : 'Copy'}
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Jump Navigation Bar */}
      <section className="my-4 p-4 rounded-[16px] bg-[#070D18] border border-white/10 overflow-x-auto scrollbar-thin">
        <div className="flex items-center gap-2 min-w-max">
          <span className="text-[12px] font-caption text-[#94A3B8] uppercase tracking-wider px-2">Jump to:</span>
          {complianceSections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="text-[12.5px] text-[#CBD5E1] hover:text-[#C9A227] hover:bg-white/5 px-3 py-1.5 rounded-[8px] transition-all font-medium"
            >
              {s.label}
            </a>
          ))}
        </div>
      </section>

      {/* Compliance Pillars */}
      <div className="space-y-6 my-4">
        {/* Pillar 1: AML & Global Sanctions */}
        <section id="sanctions" className="p-8 sm:p-12 lg:p-14 rounded-[24px] bg-[#0B1320] border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.6)]">
          <div className="max-w-[880px] space-y-6 text-[15px] sm:text-[16px] text-[#CBD5E1] leading-relaxed">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#C9A227]/10 border border-[#C9A227]/30 flex items-center justify-center text-[#C9A227] text-[13px] font-mono font-bold">
                01
              </span>
              <h2 className="text-[26px] sm:text-[30px] font-headings font-medium text-white">
                Anti-Money Laundering (AML) &amp; Global Sanctions Oversight
              </h2>
            </div>

            <p>
              Black Markt enforces strict institutional screening protocols on every mandate, investor syndicate, and capital counterparty. Every proposed transaction is subjected to exhaustive verification before advisory engagement letters are executed.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="p-6 rounded-[18px] bg-[#070D18] border border-white/5 space-y-2.5">
                <h3 className="text-[17px] font-headings font-medium text-white">Continuous Sanctions Screening</h3>
                <p className="text-[14px] text-[#94A3B8]">
                  All client entities, beneficial owners, and key executives are screened continuously against international watchlists including US OFAC (Specially Designated Nationals), UK HM Treasury / OFSI, European Union Consolidated Sanctions, Swiss SECO, and UN Security Council regimes.
                </p>
              </div>

              <div className="p-6 rounded-[18px] bg-[#070D18] border border-white/5 space-y-2.5">
                <h3 className="text-[17px] font-headings font-medium text-white">Enhanced Due Diligence (EDD)</h3>
                <p className="text-[14px] text-[#94A3B8]">
                  Mandates involving Politically Exposed Persons (PEPs) or high-growth emerging corridor syndicates require multi-layered forensic accounting, source-of-wealth validation, and Ultimate Beneficial Ownership (UBO) transparency to ensure zero regulatory exposure.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pillar 2: Swiss FADP & Sovereignty */}
        <section id="fadp" className="p-8 sm:p-12 lg:p-14 rounded-[24px] bg-[#0B1320] border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.6)]">
          <div className="max-w-[880px] space-y-6 text-[15px] sm:text-[16px] text-[#CBD5E1] leading-relaxed">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#C9A227]/10 border border-[#C9A227]/30 flex items-center justify-center text-[#C9A227] text-[13px] font-mono font-bold">
                02
              </span>
              <h2 className="text-[26px] sm:text-[30px] font-headings font-medium text-white">
                Swiss Federal Act on Data Protection (FADP) &amp; Sovereign Enclaves
              </h2>
            </div>

            <p>
              All confidential client analytical work-products, cross-border M&amp;A balance sheets, and proprietary financial algorithms can be hosted within air-gapped Swiss data centers in Zurich, operating under the revised Swiss Federal Act on Data Protection (revFADP).
            </p>

            <div className="p-6 rounded-[18px] bg-[#070D18] border border-white/5 space-y-3">
              <h3 className="text-[17px] font-headings font-medium text-white">Jurisdictional Neutrality</h3>
              <p className="text-[14px] text-[#94A3B8] leading-relaxed">
                By maintaining independent Swiss infrastructure, Black Markt provides sovereign clients and institutional family offices with absolute immunity from extraterritorial subpoena reach, unwarranted foreign regulatory overreach, and unauthorized surveillance.
              </p>
            </div>
          </div>
        </section>

        {/* Pillar 3: ISO 27001 & DORA */}
        <section id="security" className="p-8 sm:p-12 lg:p-14 rounded-[24px] bg-[#0B1320] border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.6)]">
          <div className="max-w-[880px] space-y-6 text-[15px] sm:text-[16px] text-[#CBD5E1] leading-relaxed">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#C9A227]/10 border border-[#C9A227]/30 flex items-center justify-center text-[#C9A227] text-[13px] font-mono font-bold">
                03
              </span>
              <h2 className="text-[26px] sm:text-[30px] font-headings font-medium text-white">
                ISO/IEC 27001, SOC 2 Type II &amp; EU DORA Resilience
              </h2>
            </div>

            <p>
              Our firm upholds strict enterprise cybersecurity and operational resilience standards across all communication nodes, mandate rooms, and internal repositories:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="p-6 rounded-[18px] bg-[#070D18] border border-white/5 space-y-2.5">
                <h3 className="text-[17px] font-headings font-medium text-white">ISO/IEC 27001 &amp; SOC 2 Type II</h3>
                <p className="text-[14px] text-[#94A3B8]">
                  Annual independent audits attest that Black Markt&rsquo;s Information Security Management Systems (ISMS) meet rigorous international security criteria for data confidentiality, integrity, and availability.
                </p>
              </div>

              <div className="p-6 rounded-[18px] bg-[#070D18] border border-white/5 space-y-2.5">
                <h3 className="text-[17px] font-headings font-medium text-white">EU DORA Alignment</h3>
                <p className="text-[14px] text-[#94A3B8]">
                  Our advisory architecture incorporates the EU Digital Operational Resilience Act (DORA) frameworks for financial entities, including third-party ICT risk governance and multi-region failover protocols.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pillar 4: Anti-Corruption & Fiduciary Independence */}
        <section id="anti-bribery" className="p-8 sm:p-12 lg:p-14 rounded-[24px] bg-[#0B1320] border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.6)]">
          <div className="max-w-[880px] space-y-6 text-[15px] sm:text-[16px] text-[#CBD5E1] leading-relaxed">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#C9A227]/10 border border-[#C9A227]/30 flex items-center justify-center text-[#C9A227] text-[13px] font-mono font-bold">
                04
              </span>
              <h2 className="text-[26px] sm:text-[30px] font-headings font-medium text-white">
                Fiduciary Independence &amp; Anti-Corruption
              </h2>
            </div>

            <p>
              Black Markt enforces absolute fiduciary independence across every project financing and advisory engagement.
            </p>

            <div className="p-6 rounded-[18px] bg-[#070D18] border border-white/5 space-y-3">
              <h3 className="text-[17px] font-headings font-medium text-white">Anti-Bribery Standards</h3>
              <p className="text-[14px] text-[#94A3B8] leading-relaxed">
                We strictly observe the <strong className="text-white">UK Bribery Act 2010</strong> and the <strong className="text-white">US Foreign Corrupt Practices Act (FCPA)</strong>. We prohibit any facilitation payments, kickbacks, or secret commissions from lenders, equipment vendors, contractors, or technology licensors.
              </p>
            </div>
          </div>
        </section>

        {/* Pillar 5: Institutional Due Diligence Protocol */}
        <section id="protocol" className="p-8 sm:p-12 lg:p-14 rounded-[24px] bg-[#0B1320] border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.6)]">
          <div className="max-w-[880px] space-y-6 text-[15px] sm:text-[16px] text-[#CBD5E1] leading-relaxed">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#C9A227]/10 border border-[#C9A227]/30 flex items-center justify-center text-[#C9A227] text-[13px] font-mono font-bold">
                05
              </span>
              <h2 className="text-[26px] sm:text-[30px] font-headings font-medium text-white">
                Institutional Due Diligence Workflow
              </h2>
            </div>

            <p>
              To ensure full compliance and transaction security, every institutional mandate progresses through our structured four-phase governance lifecycle:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
              <div className="p-6 rounded-[18px] bg-[#070D18] border border-white/5 space-y-2">
                <span className="text-[12px] font-mono text-[#C9A227] font-semibold">STAGE 01</span>
                <h3 className="text-[17px] font-headings font-medium text-white">Bilateral NDA &amp; Conflict Check</h3>
                <p className="text-[13.5px] text-[#94A3B8]">
                  Execution of institutional non-disclosure agreements and formal conflict-of-interest verification across all global desks.
                </p>
              </div>

              <div className="p-6 rounded-[18px] bg-[#070D18] border border-white/5 space-y-2">
                <span className="text-[12px] font-mono text-[#C9A227] font-semibold">STAGE 02</span>
                <h3 className="text-[17px] font-headings font-medium text-white">KYC, CDD &amp; Sanctions Screening</h3>
                <p className="text-[13.5px] text-[#94A3B8]">
                  Full forensic background checks, identity verification, PEP assessments, and multi-jurisdictional sanctions clearance.
                </p>
              </div>

              <div className="p-6 rounded-[18px] bg-[#070D18] border border-white/5 space-y-2">
                <span className="text-[12px] font-mono text-[#C9A227] font-semibold">STAGE 03</span>
                <h3 className="text-[17px] font-headings font-medium text-white">Sovereign &amp; Technical Risk Audit</h3>
                <p className="text-[13.5px] text-[#94A3B8]">
                  Comprehensive risk assessment evaluating regulatory exposure, tax implications, and financial sustainability.
                </p>
              </div>

              <div className="p-6 rounded-[18px] bg-[#070D18] border border-white/5 space-y-2">
                <span className="text-[12px] font-mono text-[#C9A227] font-semibold">STAGE 04</span>
                <h3 className="text-[17px] font-headings font-medium text-white">Mandate Execution &amp; Escrow Governance</h3>
                <p className="text-[13.5px] text-[#94A3B8]">
                  Formalization of scope of engagement, milestone definitions, and tier-one bank escrow account structuring.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pillar 6: Compliance Directory */}
        <section id="contacts" className="p-8 sm:p-12 lg:p-14 rounded-[24px] bg-[#0B1320] border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.6)]">
          <div className="max-w-[880px] space-y-6 text-[15px] sm:text-[16px] text-[#CBD5E1] leading-relaxed">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#C9A227]/10 border border-[#C9A227]/30 flex items-center justify-center text-[#C9A227] text-[13px] font-mono font-bold">
                06
              </span>
              <h2 className="text-[26px] sm:text-[30px] font-headings font-medium text-white">
                Compliance Desk &amp; Legal Counsel Contacts
              </h2>
            </div>

            <p>
              For institutional due diligence requests, KYC pack submissions, or regulatory inquiries, contact our Chief Compliance Officer or regional compliance liaisons:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
              {GLOBAL_HUBS.map((hub) => (
                <div key={hub.city} className="p-6 rounded-[18px] bg-[#070D18] border border-white/5 space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[12px] font-mono text-[#C9A227] uppercase tracking-wider font-semibold">
                      {hub.district}
                    </span>
                    <span className="text-[12px] text-white/50">{hub.city}</span>
                  </div>
                  <h3 className="text-[17px] font-headings font-medium text-white">
                    {hub.city} Compliance Desk
                  </h3>
                  <p className="text-[13.5px] text-[#94A3B8]">
                    {hub.address}
                  </p>
                  <div className="pt-2 border-t border-white/5 flex flex-col gap-1 text-[13px]">
                    <span className="text-[#CBD5E1] font-mono">{hub.phone}</span>
                    <a href={`mailto:${hub.email}`} className="text-[#C9A227] hover:underline font-mono">
                      {hub.email}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Links */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-6 text-[14px]">
              <Link to="/privacy" className="text-[#C9A227] hover:underline font-semibold flex items-center gap-1.5">
                <span>View Privacy Policy &amp; Data Subject Rights</span>
                <span>&rarr;</span>
              </Link>
              <Link to="/terms" className="text-[#C9A227] hover:underline font-semibold flex items-center gap-1.5">
                <span>View Terms of Engagement</span>
                <span>&rarr;</span>
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* Bottom CTA */}
      <section className="rounded-[24px] bg-gradient-to-r from-[#0B1320] via-[#070D18] to-[#0B1320] border border-[#C9A227]/30 text-white p-8 sm:p-14 my-4 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-[680px]">
          <h2 className="text-[28px] sm:text-[34px] font-headings font-medium text-white mb-2">
            Request our institutional compliance dossier
          </h2>
          <p className="text-[15px] text-[#CBD5E1] leading-relaxed">
            Independent SOC 2 Type II audit summaries and Swiss FADP legal opinions are available to institutional legal counsel under bilateral non-disclosure agreement.
          </p>
        </div>
        <ActionButton href="/book-consultation" variant="primary" className="w-[220px] shrink-0">
          Request Compliance Dossier &rarr;
        </ActionButton>
      </section>
    </Layout>
  );
}
