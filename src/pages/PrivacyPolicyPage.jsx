import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import ActionButton from '../components/common/ActionButton';

export default function PrivacyPolicyPage() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('data-protection@blackmarkt.network');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const sections = [
    { id: 'scope', label: '1. Policy Scope' },
    { id: 'collection', label: '2. What We Collect' },
    { id: 'purposes', label: '3. Purposes & Processing' },
    { id: 'security', label: '4. Security & "Need to Know"' },
    { id: 'sources', label: '5. How We Collect Data' },
    { id: 'transfers', label: '6. Cross-Border Transfers' },
    { id: 'legal-basis', label: '7. Legal Basis & Retention' },
    { id: 'rights', label: '8. Your Statutory Rights' },
  ];

  return (
    <Layout>
      {/* Hero Header - 2-Column Desktop Grid */}
      <section className="relative w-full rounded-[24px] bg-[#0B1320] border border-[#C9A227]/20 p-8 sm:p-14 lg:p-16 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_top_right,rgba(201,162,39,0.12),transparent_70%)] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10 w-full">
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-[12px] font-caption text-[#94A3B8] uppercase tracking-wider">
              <span className="text-[#C9A227] font-semibold">LEGAL CHARTER</span>
              <span className="text-white/20">&bull;</span>
              <span>DATA PROTECTION</span>
              <span className="text-white/20">&bull;</span>
              <span className="text-emerald-400 font-mono">UK GDPR &amp; DATA PRIVACY COMPLIANT</span>
            </div>

            <h1 className="text-[38px] sm:text-[54px] lg:text-[62px] font-headings font-medium tracking-tight text-white leading-[1.05]">
              Privacy Policy
            </h1>

            <p className="text-[17px] sm:text-[20px] text-[#CBD5E1] leading-relaxed font-body">
              Black Markt Network Consultancy is committed to protecting your privacy and upholding the highest standards of professional secrecy, discretion, and sovereign data governance across our global advisory practice.
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-3 text-[13px] text-[#94A3B8] border-t border-white/10 mt-2">
              <div>
                <span className="text-white/40 block text-[11px] uppercase tracking-wider">Jurisdiction</span>
                <span className="text-white font-medium">UK GDPR &bull; Data Protection Act 2018</span>
              </div>
              <div>
                <span className="text-white/40 block text-[11px] uppercase tracking-wider">Review Schedule</span>
                <span className="text-white font-medium">Annual Audit (Effective Nov 2026)</span>
              </div>
            </div>
          </div>

          {/* Right Column: DPO Summary Card */}
          <div className="lg:col-span-5 xl:col-span-4 p-6 sm:p-8 rounded-[20px] bg-[#070D18]/90 border border-[#C9A227]/30 shadow-2xl flex flex-col justify-between gap-5">
            <div>
              <span className="text-[11px] font-mono text-[#C9A227] uppercase tracking-widest block font-semibold mb-1">
                Data Controller Representation
              </span>
              <h3 className="text-[18px] font-headings font-medium text-white mb-2">
                Data Protection Officer
              </h3>
              <p className="text-[13.5px] text-[#94A3B8] leading-relaxed">
                Direct statutory oversight for Subject Access Requests, data processing queries, and cross-border regulatory compliance.
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <button
                onClick={handleCopyEmail}
                className="w-full text-left p-3 rounded-[12px] bg-white/5 hover:bg-white/10 border border-white/10 text-[13px] text-[#CBD5E1] font-mono flex items-center justify-between transition-colors group"
              >
                <span className="truncate group-hover:text-[#C9A227]">data-protection@blackmarkt.network</span>
                <span className="text-[11px] bg-white/10 px-2 py-1 rounded text-white/70 shrink-0 ml-2">
                  {copiedEmail ? 'Copied!' : 'Copy'}
                </span>
              </button>

              <ActionButton
                href="mailto:data-protection@blackmarkt.network?subject=Privacy%20Inquiry%20-%20Data%20Protection%20Office"
                variant="primary"
                className="w-full text-[13px] py-2.5"
              >
                Contact Data Protection Officer &rarr;
              </ActionButton>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation Jump Bar */}
      <section className="my-4 p-4 rounded-[16px] bg-[#070D18] border border-white/10 overflow-x-auto scrollbar-thin w-full">
        <div className="flex items-center gap-2 min-w-max">
          <span className="text-[12px] font-caption text-[#94A3B8] uppercase tracking-wider px-2">Jump to:</span>
          {sections.map((s) => (
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

      {/* Main Privacy Policy Body */}
      <div className="space-y-6 my-4 w-full">
        {/* Section 1: Scope - 2 Column Balanced Grid */}
        <section id="scope" className="p-8 sm:p-12 lg:p-14 rounded-[24px] bg-[#0B1320] border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.6)] w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start w-full">
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#C9A227]/10 border border-[#C9A227]/30 flex items-center justify-center text-[#C9A227] text-[13px] font-mono font-bold">
                  01
                </span>
                <h2 className="text-[26px] sm:text-[30px] font-headings font-medium text-white">
                  Policy Scope &amp; Commitment
                </h2>
              </div>
              <p className="text-[15px] sm:text-[16px] text-[#CBD5E1] leading-relaxed">
                Black Markt Network Consultancy (&ldquo;Black Markt&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), a subsidiary of <strong className="text-white">LSTC</strong>, registered in England and Wales under registration number <strong className="text-white">11124243</strong> (registered address: <strong className="text-white">124 City Road London, EC1V 2NX, England</strong>; Registered VAT Number: <strong className="text-white">477993219</strong>), is strictly committed to protecting your privacy.
              </p>
              <p className="text-[14.5px] text-[#94A3B8] leading-relaxed">
                This policy governs our handling of personal and institutional data across our strategic practices, transactional advisory, executive recruitment, and our digital domain (<a href="https://blackmarkt.network" className="text-[#C9A227] hover:underline">blackmarkt.network</a>).
              </p>
            </div>

            <div className="lg:col-span-7 p-6 sm:p-8 rounded-[18px] bg-[#070D18] border border-white/5 space-y-3.5">
              <h3 className="text-[17px] font-headings font-medium text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#C9A227]" />
                This Privacy Policy Explicitly:
              </h3>
              <ul className="space-y-3 text-[14px] text-[#CBD5E1]">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#C9A227] text-[18px] leading-none">&bull;</span>
                  <span>Sets out the types of personal and institutional data we collect about you and how it is utilized;</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#C9A227] text-[18px] leading-none">&bull;</span>
                  <span>Outlines how we ensure your data is safeguarded under institutional-grade encryption;</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#C9A227] text-[18px] leading-none">&bull;</span>
                  <span>Explains how we collect and process your personal data during professional mandates;</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#C9A227] text-[18px] leading-none">&bull;</span>
                  <span>Explains how data is shared securely across our global offices;</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#C9A227] text-[18px] leading-none">&bull;</span>
                  <span>Sets out our legal basis for holding and processing your data under international regulations;</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#C9A227] text-[18px] leading-none">&bull;</span>
                  <span>Explains the statutory rights you retain in relation to your personal records;</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#C9A227] text-[18px] leading-none">&bull;</span>
                  <span>Explains how to contact our dedicated Data Protection Office with any inquiries or requests.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 2: What We Collect - Full-Width 3-Column Grid */}
        <section id="collection" className="p-8 sm:p-12 lg:p-14 rounded-[24px] bg-[#0B1320] border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.6)] w-full">
          <div className="space-y-6 w-full">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#C9A227]/10 border border-[#C9A227]/30 flex items-center justify-center text-[#C9A227] text-[13px] font-mono font-bold">
                  02
                </span>
                <h2 className="text-[26px] sm:text-[30px] font-headings font-medium text-white">
                  What We Collect
                </h2>
              </div>
              <span className="text-[12px] font-mono text-[#C9A227] uppercase tracking-wider font-semibold">
                Three Core Data Categories
              </span>
            </div>

            <p className="text-[15px] sm:text-[16px] text-[#CBD5E1] leading-relaxed">
              The type of personal data Black Markt Network Consultancy collects regarding client representatives, sovereign counterparts, institutional investors, suppliers, recruitment candidates, and prior or current clients includes:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 sm:p-8 rounded-[18px] bg-[#070D18] border border-white/5 space-y-3 flex flex-col justify-between hover:border-[#C9A227]/30 transition-all">
                <div>
                  <span className="text-[12px] font-mono text-[#C9A227] uppercase tracking-wider block font-semibold mb-2">Category A</span>
                  <h3 className="text-[19px] font-headings font-medium text-white mb-2">Identity Information</h3>
                  <p className="text-[14px] text-[#94A3B8] leading-relaxed">
                    Full legal name, executive title, residential or professional address, nationality, passport/ID verification data (where required for statutory AML/KYC checks), and personal contact telephone and email details.
                  </p>
                </div>
                <div className="pt-4 border-t border-white/5 text-[12px] text-[#64748B] font-mono">
                  Encrypted &bull; Restricted Access
                </div>
              </div>

              <div className="p-6 sm:p-8 rounded-[18px] bg-[#070D18] border border-white/5 space-y-3 flex flex-col justify-between hover:border-[#C9A227]/30 transition-all">
                <div>
                  <span className="text-[12px] font-mono text-[#C9A227] uppercase tracking-wider block font-semibold mb-2">Category B</span>
                  <h3 className="text-[19px] font-headings font-medium text-white mb-2">Employment Information</h3>
                  <p className="text-[14px] text-[#94A3B8] leading-relaxed">
                    Executive title, institutional affiliation, corporate entity name, official work contact credentials, career history, board directorships, previous mandates, and transactional experience.
                  </p>
                </div>
                <div className="pt-4 border-t border-white/5 text-[12px] text-[#64748B] font-mono">
                  Fiduciary Classification
                </div>
              </div>

              <div className="p-6 sm:p-8 rounded-[18px] bg-[#070D18] border border-white/5 space-y-3 flex flex-col justify-between hover:border-[#C9A227]/30 transition-all">
                <div>
                  <span className="text-[12px] font-mono text-[#C9A227] uppercase tracking-wider block font-semibold mb-2">Category C</span>
                  <h3 className="text-[19px] font-headings font-medium text-white mb-2">Mandate &amp; Background</h3>
                  <p className="text-[14px] text-[#94A3B8] leading-relaxed">
                    Strategic sector interests, project parameters, transactional preferences, balance sheet criteria, and advisory scope provided directly by you during consultations and scoping sessions.
                  </p>
                </div>
                <div className="pt-4 border-t border-white/5 text-[12px] text-[#64748B] font-mono">
                  Bilateral NDA Protected
                </div>
              </div>
            </div>

            <div className="p-5 rounded-[16px] bg-[#C9A227]/5 border border-[#C9A227]/20 flex items-start gap-4 text-[14px] text-[#CBD5E1]">
              <span className="text-[#C9A227] text-[20px] font-bold leading-none">&bull;</span>
              <p>
                <strong className="text-white">Fiduciary Classification:</strong> All personal and engagement information provided to Black Markt is classified as strictly confidential and is protected by non-disclosure protocols and professional legal privilege standards.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Purposes of Processing - 2x2 Full Grid */}
        <section id="purposes" className="p-8 sm:p-12 lg:p-14 rounded-[24px] bg-[#0B1320] border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.6)] w-full">
          <div className="space-y-6 w-full">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#C9A227]/10 border border-[#C9A227]/30 flex items-center justify-center text-[#C9A227] text-[13px] font-mono font-bold">
                03
              </span>
              <h2 className="text-[26px] sm:text-[30px] font-headings font-medium text-white">
                Purposes of Processing
              </h2>
            </div>

            <p className="text-[15px] sm:text-[16px] text-[#CBD5E1] leading-relaxed">
              Personal data collected by Black Markt is processed exclusively for defined, legitimate business and advisory purposes:
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="p-6 sm:p-8 rounded-[18px] bg-[#070D18] border border-white/5 space-y-3">
                <h3 className="text-[18px] font-headings font-medium text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#C9A227]" />
                  1. Provision of Advisory Services
                </h3>
                <ul className="space-y-2 text-[14px] text-[#94A3B8] pl-4 list-disc list-outside marker:text-[#C9A227]">
                  <li>Delivering high-stakes strategic mandates, M&amp;A advisory, infrastructure financing, and cross-border partnership structuring.</li>
                  <li>Maintaining accurate client, counterparty, and supplier records.</li>
                  <li>Executing formal engagement letters and fulfilling contractual deliverables.</li>
                </ul>
              </div>

              <div className="p-6 sm:p-8 rounded-[18px] bg-[#070D18] border border-white/5 space-y-3">
                <h3 className="text-[18px] font-headings font-medium text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#C9A227]" />
                  2. Client Relationship Management &amp; Direct Thought Leadership
                </h3>
                <ul className="space-y-2 text-[14px] text-[#94A3B8] pl-4 list-disc list-outside marker:text-[#C9A227]">
                  <li>Acquiring and maintaining accurate contact records for prospective, current, and former institutional partners;</li>
                  <li>Keeping clients informed through personalized communications, market insights, quarterly macroeconomic reports, and private briefings;</li>
                  <li>Distributing invitations to executive roundtables, sovereign investment summits, and invitation-only symposiums;</li>
                  <li>Maintaining, securing, and testing the IT platforms and client portals powering our advisory services.</li>
                </ul>
              </div>

              <div className="p-6 sm:p-8 rounded-[18px] bg-[#070D18] border border-white/5 space-y-3">
                <h3 className="text-[18px] font-headings font-medium text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#C9A227]" />
                  3. Executive Talent &amp; Advisory Recruitment
                </h3>
                <p className="text-[14px] text-[#94A3B8] leading-relaxed">
                  Collecting and reviewing CVs, professional backgrounds, and qualifications of senior advisors and specialists applying for roles within Black Markt. Candidate information is retained strictly in accordance with our statutory talent retention schedules.
                </p>
              </div>

              <div className="p-6 sm:p-8 rounded-[18px] bg-[#070D18] border border-white/5 space-y-3">
                <h3 className="text-[18px] font-headings font-medium text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#C9A227]" />
                  4. Regulatory Compliance &amp; Legal Obligations
                </h3>
                <p className="text-[14px] text-[#94A3B8] leading-relaxed">
                  Fulfilling regulatory reporting, anti-money laundering (AML), Know-Your-Customer (KYC) identity verifications, sanctions screening (OFAC, UK, EU, SECO), and disclosures mandated by applicable law or judicial decree.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Security & "Need to Know" - 2-Column Full Grid */}
        <section id="security" className="p-8 sm:p-12 lg:p-14 rounded-[24px] bg-[#0B1320] border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.6)] w-full">
          <div className="space-y-6 w-full">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#C9A227]/10 border border-[#C9A227]/30 flex items-center justify-center text-[#C9A227] text-[13px] font-mono font-bold">
                04
              </span>
              <h2 className="text-[26px] sm:text-[30px] font-headings font-medium text-white">
                Security, Confidentiality &amp; &ldquo;Need to Know&rdquo; Policy
              </h2>
            </div>

            <p className="text-[15px] sm:text-[16px] text-[#CBD5E1] leading-relaxed">
              Black Markt Network Consultancy applies rigorous technical and organizational safeguards to ensure that all stored personal and engagement data is fortified against unauthorized access, alteration, loss, or disclosure.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 sm:p-8 rounded-[18px] bg-[#070D18] border border-white/5 space-y-3">
                <h3 className="text-[18px] font-headings font-medium text-white">
                  ISO/IEC 27001 Certification Scope
                </h3>
                <p className="text-[14px] text-[#94A3B8] leading-relaxed">
                  All digital systems, databases, and communication channels utilized to store or process client records operate within the scope of our ISO/IEC 27001 alignment, featuring AES-256 encryption at rest and TLS 1.3 in transit.
                </p>
              </div>

              <div className="p-6 sm:p-8 rounded-[18px] bg-[#070D18] border border-white/5 space-y-3">
                <h3 className="text-[18px] font-headings font-medium text-white">
                  Strict &ldquo;Need to Know&rdquo; Protocol
                </h3>
                <p className="text-[14px] text-[#94A3B8] leading-relaxed">
                  We enforce an explicit &ldquo;need to know&rdquo; governance model across our global practice. Personal and client records are restricted solely to authorized advisory partners and compliance staff directly assigned to the engagement.
                </p>
              </div>
            </div>

            <p className="text-[14px] text-[#94A3B8]">
              Where Black Markt utilizes third-party infrastructure providers (e.g. enterprise hosting, secure document enclaves, or compliance screening software), we mandate that they execute binding Data Processing Agreements (DPAs) guaranteeing equivalent data protection and confidentiality standards.
            </p>
          </div>
        </section>

        {/* Section 5: How We Collect Data - 2x2 Grid */}
        <section id="sources" className="p-8 sm:p-12 lg:p-14 rounded-[24px] bg-[#0B1320] border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.6)] w-full">
          <div className="space-y-6 w-full">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#C9A227]/10 border border-[#C9A227]/30 flex items-center justify-center text-[#C9A227] text-[13px] font-mono font-bold">
                05
              </span>
              <h2 className="text-[26px] sm:text-[30px] font-headings font-medium text-white">
                How We Collect Data
              </h2>
            </div>

            <p className="text-[15px] sm:text-[16px] text-[#CBD5E1] leading-relaxed">
              Black Markt collects personal and business data through four primary channels:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-[18px] bg-[#070D18] border border-white/5 space-y-2">
                <span className="text-[#C9A227] font-mono text-[13px] font-bold block">
                  1. Directly from You
                </span>
                <p className="text-[14px] text-[#CBD5E1] leading-relaxed">
                  Information provided directly when requesting advisory consultations, submitting proposal requests, engaging our services, or submitting recruitment credentials.
                </p>
              </div>

              <div className="p-6 rounded-[18px] bg-[#070D18] border border-white/5 space-y-2">
                <span className="text-[#C9A227] font-mono text-[13px] font-bold block">
                  2. Publicly Available Sources
                </span>
                <p className="text-[14px] text-[#CBD5E1] leading-relaxed">
                  Verified professional registries, regulatory filings, corporate gazettes (e.g. UK Companies House, SEC EDGAR, Swiss Commercial Register), and executive directories such as LinkedIn.
                </p>
              </div>

              <div className="p-6 rounded-[18px] bg-[#070D18] border border-white/5 space-y-2">
                <span className="text-[#C9A227] font-mono text-[13px] font-bold block">
                  3. Third Parties Acting on Instruction
                </span>
                <p className="text-[14px] text-[#CBD5E1] leading-relaxed">
                  Information communicated by authorized intermediaries, family offices, prime brokerages, legal counsel, or executive search consultancies acting explicitly on your behalf.
                </p>
              </div>

              <div className="p-6 rounded-[18px] bg-[#070D18] border border-white/5 space-y-2">
                <span className="text-[#C9A227] font-mono text-[13px] font-bold block">
                  4. Through Our Digital Platform
                </span>
                <p className="text-[14px] text-[#CBD5E1] leading-relaxed">
                  Visiting <strong className="text-white">blackmarkt.network</strong> is fundamentally anonymous. We do not engage in surveillance or sell your data. We may process IP addresses solely for firewall defense, error diagnostics, and aggregate traffic telemetry.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-[12px] bg-white/[0.02] border border-white/5 text-[13.5px] text-[#94A3B8]">
              <strong className="text-white">Physical Office Visits:</strong> We do not collect or log personal biometric or tracking data from visitors to our physical suites beyond standard commercial building reception registers.
            </div>
          </div>
        </section>

        {/* Section 6: Data Transfers - 2-Column Split */}
        <section id="transfers" className="p-8 sm:p-12 lg:p-14 rounded-[24px] bg-[#0B1320] border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.6)] w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start w-full">
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#C9A227]/10 border border-[#C9A227]/30 flex items-center justify-center text-[#C9A227] text-[13px] font-mono font-bold">
                  06
                </span>
                <h2 className="text-[26px] sm:text-[30px] font-headings font-medium text-white">
                  International Data Transfers
                </h2>
              </div>
              <p className="text-[15px] sm:text-[16px] text-[#CBD5E1] leading-relaxed">
                Black Markt operates from our headquarters in <strong>London (124 City Road)</strong>, collaborating with institutional counterparties across Europe, North America, the Middle East, and key growth markets in Africa.
              </p>
              <p className="text-[14.5px] text-[#94A3B8] leading-relaxed">
                On occasion, fulfilling complex cross-border client mandates requires sharing relevant data between these regional offices. In all such events, Black Markt takes appropriate legal and technical steps to guarantee that your personal data receives full and equivalent protection.
              </p>
            </div>

            <div className="lg:col-span-6 p-6 sm:p-8 rounded-[18px] bg-[#070D18] border border-white/5 space-y-3">
              <h3 className="text-[17px] font-headings font-medium text-white">Transfer Safeguards &amp; Legal Adequacy</h3>
              <p className="text-[14px] text-[#94A3B8]">
                Transfers between jurisdictions are executed under approved statutory transfer mechanisms:
              </p>
              <ul className="space-y-2.5 text-[14px] text-[#CBD5E1] pl-4 list-disc list-outside marker:text-[#C9A227]">
                <li>UK International Data Transfer Agreements (IDTA) / Addendum;</li>
                <li>Approved Standard Contractual Clauses (SCCs);</li>
                <li>Statutory adequacy regulations recognized under UK data protection law;</li>
                <li>Bilateral intra-group and client data transfer agreements.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 7: Legal Basis & Retention - 4-Column Grid */}
        <section id="legal-basis" className="p-8 sm:p-12 lg:p-14 rounded-[24px] bg-[#0B1320] border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.6)] w-full">
          <div className="space-y-6 w-full">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#C9A227]/10 border border-[#C9A227]/30 flex items-center justify-center text-[#C9A227] text-[13px] font-mono font-bold">
                07
              </span>
              <h2 className="text-[26px] sm:text-[30px] font-headings font-medium text-white">
                Legal Basis &amp; Retention Schedules
              </h2>
            </div>

            <p className="text-[15px] sm:text-[16px] text-[#CBD5E1] leading-relaxed">
              Under applicable data protection laws (including the UK Data Protection Act 2018 and UK GDPR), our legal basis for collecting and processing personal information encompasses:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-5 sm:p-6 rounded-[16px] bg-[#070D18] border border-white/5 space-y-2 flex flex-col justify-between">
                <div>
                  <span className="text-[#C9A227] font-semibold text-[14px] block mb-1">Legitimate Interests</span>
                  <p className="text-[13px] text-[#94A3B8] leading-relaxed">
                    Managing professional relationships, conducting high-value consultancy, and sharing relevant market insights with verified counterparts.
                  </p>
                </div>
                <span className="text-[11px] font-mono text-[#64748B] pt-2 border-t border-white/5">Primary Advisory Basis</span>
              </div>

              <div className="p-5 sm:p-6 rounded-[16px] bg-[#070D18] border border-white/5 space-y-2 flex flex-col justify-between">
                <div>
                  <span className="text-[#C9A227] font-semibold text-[14px] block mb-1">Contractual Performance</span>
                  <p className="text-[13px] text-[#94A3B8] leading-relaxed">
                    Executing engagement letters, delivering advisory scopes of work, and managing fiduciary transactions.
                  </p>
                </div>
                <span className="text-[11px] font-mono text-[#64748B] pt-2 border-t border-white/5">Mandate Agreement</span>
              </div>

              <div className="p-5 sm:p-6 rounded-[16px] bg-[#070D18] border border-white/5 space-y-2 flex flex-col justify-between">
                <div>
                  <span className="text-[#C9A227] font-semibold text-[14px] block mb-1">Legal Mandate</span>
                  <p className="text-[13px] text-[#94A3B8] leading-relaxed">
                    Satisfying financial compliance, statutory audits, sanctions checks, and anti-money laundering (AML) duties.
                  </p>
                </div>
                <span className="text-[11px] font-mono text-[#64748B] pt-2 border-t border-white/5">Regulatory Requirement</span>
              </div>

              <div className="p-5 sm:p-6 rounded-[16px] bg-[#070D18] border border-white/5 space-y-2 flex flex-col justify-between">
                <div>
                  <span className="text-[#C9A227] font-semibold text-[14px] block mb-1">Consent</span>
                  <p className="text-[13px] text-[#94A3B8] leading-relaxed">
                    Voluntary subscriptions to our quarterly advisory research reports and invitation-only investor summits.
                  </p>
                </div>
                <span className="text-[11px] font-mono text-[#64748B] pt-2 border-t border-white/5">Explicit Opt-In</span>
              </div>
            </div>

            <p className="text-[14px] text-[#94A3B8]">
              <strong className="text-white">Strict Retention Periods:</strong> We maintain formal data retention policies. Personal records are retained only for the duration necessary to satisfy the purpose of collection, fulfill contractual mandates, or comply with statutory financial accounting requirements (typically 5 to 7 years following completion of a mandate).
            </p>
          </div>
        </section>

        {/* Section 8: Your Rights - 3-Column Grid */}
        <section id="rights" className="p-8 sm:p-12 lg:p-14 rounded-[24px] bg-[#0B1320] border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.6)] w-full">
          <div className="space-y-6 w-full">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#C9A227]/10 border border-[#C9A227]/30 flex items-center justify-center text-[#C9A227] text-[13px] font-mono font-bold">
                08
              </span>
              <h2 className="text-[26px] sm:text-[30px] font-headings font-medium text-white">
                Your Statutory Rights
              </h2>
            </div>

            <p className="text-[15px] sm:text-[16px] text-[#CBD5E1] leading-relaxed">
              In line with current data privacy regulations, all individuals regarding whom we hold personal information retain the following enforceable rights:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              <div className="p-5 rounded-[16px] bg-[#070D18] border border-white/5 space-y-1.5 flex flex-col justify-between">
                <div>
                  <h3 className="text-[16px] font-headings font-medium text-white flex items-center gap-2 mb-1">
                    <span className="text-[#C9A227]">&bull;</span>
                    The Right of Access
                  </h3>
                  <p className="text-[13.5px] text-[#94A3B8]">
                    The right to request confirmation of whether we process your data and obtain a comprehensive copy of your personal records.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-[16px] bg-[#070D18] border border-white/5 space-y-1.5 flex flex-col justify-between">
                <div>
                  <h3 className="text-[16px] font-headings font-medium text-white flex items-center gap-2 mb-1">
                    <span className="text-[#C9A227]">&bull;</span>
                    The Right to Rectification
                  </h3>
                  <p className="text-[13.5px] text-[#94A3B8]">
                    The right to correct any inaccurate, outdated, or incomplete records we maintain about you.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-[16px] bg-[#070D18] border border-white/5 space-y-1.5 flex flex-col justify-between">
                <div>
                  <h3 className="text-[16px] font-headings font-medium text-white flex items-center gap-2 mb-1">
                    <span className="text-[#C9A227]">&bull;</span>
                    The Right to Erasure
                  </h3>
                  <p className="text-[13.5px] text-[#94A3B8]">
                    The right to request that your records be erased from active databases, subject to statutory retention obligations.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-[16px] bg-[#070D18] border border-white/5 space-y-1.5 flex flex-col justify-between">
                <div>
                  <h3 className="text-[16px] font-headings font-medium text-white flex items-center gap-2 mb-1">
                    <span className="text-[#C9A227]">&bull;</span>
                    The Right to be Informed
                  </h3>
                  <p className="text-[13.5px] text-[#94A3B8]">
                    The right to transparent disclosures detailing how, why, and on what legal grounds your personal data is processed.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-[16px] bg-[#070D18] border border-white/5 space-y-1.5 flex flex-col justify-between">
                <div>
                  <h3 className="text-[16px] font-headings font-medium text-white flex items-center gap-2 mb-1">
                    <span className="text-[#C9A227]">&bull;</span>
                    The Right to Object
                  </h3>
                  <p className="text-[13.5px] text-[#94A3B8]">
                    The right to object to processing grounded in legitimate business interests unless compelling legitimate grounds override.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-[16px] bg-[#070D18] border border-white/5 space-y-1.5 flex flex-col justify-between">
                <div>
                  <h3 className="text-[16px] font-headings font-medium text-white flex items-center gap-2 mb-1">
                    <span className="text-[#C9A227]">&bull;</span>
                    Direct Unsubscribe
                  </h3>
                  <p className="text-[13.5px] text-[#94A3B8]">
                    Instant opt-out from any advisory mailing list or research distribution via the footer link in any distributed mail.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 rounded-[18px] bg-gradient-to-r from-[#070D18] to-[#0B1320] border border-[#C9A227]/30 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h4 className="text-[17px] font-headings font-medium text-white">How to Exercise Your Rights</h4>
                <p className="text-[13.5px] text-[#94A3B8] mt-1">
                  Submit formal requests to our Data Protection Officer:
                </p>
                <a
                  href="mailto:data-protection@blackmarkt.network"
                  className="text-[#C9A227] hover:underline font-mono text-[14px] font-semibold mt-1 inline-block"
                >
                  data-protection@blackmarkt.network
                </a>
              </div>
              <ActionButton
                href="mailto:data-protection@blackmarkt.network?subject=Subject%20Access%20Request%20-%20Data%20Protection"
                variant="primary"
                className="w-auto px-6 py-2.5 text-[13px] shrink-0"
              >
                Submit Data Request &rarr;
              </ActionButton>
            </div>

            {/* Trademark Notice */}
            <div className="pt-6 border-t border-white/10 text-[12.5px] text-[#64748B] space-y-1.5">
              <p>
                &ldquo;Black Markt&rdquo;, &ldquo;Black Markt Network Consultancy&rdquo;, and the Black Markt Network crest are proprietary registered trademarks. All rights reserved.
              </p>
              <p>
                &copy; {new Date().getFullYear()} Black Markt Network Consultancy (a subsidiary of LSTC, Reg No. 11124243, VAT 477993219, 124 City Road, London, EC1V 2NX). All rights reserved.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Bottom CTA */}
      <section className="rounded-[24px] bg-gradient-to-r from-[#0B1320] via-[#070D18] to-[#0B1320] border border-[#C9A227]/30 text-white p-8 sm:p-14 my-4 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 w-full">
        <div className="max-w-[680px]">
          <h2 className="text-[28px] sm:text-[34px] font-headings font-medium text-white mb-2">
            Have questions about client confidentiality?
          </h2>
          <p className="text-[15px] text-[#CBD5E1] leading-relaxed">
            Our legal and data compliance team is available to review customized data processing addenda (DPAs) or mutual non-disclosure agreements prior to formal mandate onboarding.
          </p>
        </div>
        <ActionButton href="/contact" variant="primary" className="w-[220px] shrink-0">
          Contact Advisory Desk &rarr;
        </ActionButton>
      </section>
    </Layout>
  );
}
