import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import ActionButton from '../components/common/ActionButton';
import { GLOBAL_HUBS } from '../data/platformData';

export default function TermsPage() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('legal@blackmarkt.network');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const sections = [
    { id: 'acceptance', label: '1. Acceptance & Entity' },
    { id: 'ip', label: '2. Intellectual Property & Trademarks' },
    { id: 'advisory-disclaimer', label: '3. No Advisory Relationship' },
    { id: 'warranties', label: '4. Limitation of Liability' },
    { id: 'fiduciary', label: '5. Fiduciary Discretion & NDA' },
    { id: 'anti-corruption', label: '6. Independence & Anti-Bribery' },
    { id: 'third-party', label: '7. External Intelligence & Links' },
    { id: 'jurisdiction', label: '8. Governing Law & Dispute Resolution' },
    { id: 'contacts', label: '9. Legal Notices & Hubs' },
  ];

  return (
    <Layout>
      {/* Hero Header - 2-Column Balanced Grid */}
      <section className="relative w-full rounded-[24px] bg-[#0B1320] border border-[#C9A227]/20 p-8 sm:p-14 lg:p-16 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_top_right,rgba(201,162,39,0.12),transparent_70%)] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10 w-full">
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-[12px] font-caption text-[#94A3B8] uppercase tracking-wider">
              <span className="text-[#C9A227] font-semibold">GOVERNANCE &amp; ENGAGEMENT</span>
              <span className="text-white/20">&bull;</span>
              <span>TERMS OF ENGAGEMENT</span>
              <span className="text-white/20">&bull;</span>
              <span className="text-emerald-400 font-mono">SWISS &amp; UK JURISDICTION</span>
            </div>

            <h1 className="text-[38px] sm:text-[54px] lg:text-[62px] font-headings font-medium tracking-tight text-white leading-[1.05]">
              Terms of Engagement
            </h1>

            <p className="text-[17px] sm:text-[20px] text-[#CBD5E1] leading-relaxed font-body">
              Governing rules of engagement, professional standards, and conditions of digital access for Black Markt Network Consultancy and our institutional counterparts.
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-3 text-[13px] text-[#94A3B8] border-t border-white/10 mt-2">
              <div>
                <span className="text-white/40 block text-[11px] uppercase tracking-wider">Registered Entity</span>
                <span className="text-white font-medium">Black Markt Network Consultancy (subsidiary of LSTC)</span>
              </div>
              <div>
                <span className="text-white/40 block text-[11px] uppercase tracking-wider">Governing Framework</span>
                <span className="text-white font-medium">Senior Courts of England &amp; Swiss Commercial Law</span>
              </div>
            </div>
          </div>

          {/* Right Column: Legal Counsel Box */}
          <div className="lg:col-span-5 xl:col-span-4 p-6 sm:p-8 rounded-[20px] bg-[#070D18]/90 border border-[#C9A227]/30 shadow-2xl flex flex-col justify-between gap-5">
            <div>
              <span className="text-[11px] font-mono text-[#C9A227] uppercase tracking-widest block font-semibold mb-1">
                Office of General Counsel
              </span>
              <h3 className="text-[18px] font-headings font-medium text-white mb-2">
                Legal &amp; Mandate Oversight
              </h3>
              <p className="text-[13.5px] text-[#94A3B8] leading-relaxed">
                Direct statutory oversight for bilateral Non-Disclosure Agreements, master advisory engagement letters, and institutional mandate governance.
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <button
                onClick={handleCopyEmail}
                className="w-full text-left p-3 rounded-[12px] bg-white/5 hover:bg-white/10 border border-white/10 text-[13px] text-[#CBD5E1] font-mono flex items-center justify-between transition-colors group"
              >
                <span className="truncate group-hover:text-[#C9A227]">legal@blackmarkt.network</span>
                <span className="text-[11px] bg-white/10 px-2 py-1 rounded text-white/70 shrink-0 ml-2">
                  {copiedEmail ? 'Copied!' : 'Copy'}
                </span>
              </button>

              <ActionButton
                href="mailto:legal@blackmarkt.network?subject=Legal%20Inquiry%20-%20Terms%20of%20Engagement"
                variant="primary"
                className="w-full text-[13px] py-2.5"
              >
                Contact Legal Counsel &rarr;
              </ActionButton>
            </div>
          </div>
        </div>
      </section>

      {/* Jump Navigation Bar */}
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

      {/* Main Terms Sections */}
      <div className="space-y-6 my-4 w-full">
        {/* Section 1: Acceptance & Entity - 2-Column Split */}
        <section id="acceptance" className="p-8 sm:p-12 lg:p-14 rounded-[24px] bg-[#0B1320] border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.6)] w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start w-full">
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#C9A227]/10 border border-[#C9A227]/30 flex items-center justify-center text-[#C9A227] text-[13px] font-mono font-bold">
                  01
                </span>
                <h2 className="text-[26px] sm:text-[30px] font-headings font-medium text-white">
                  Acceptance of Terms &amp; Corporate Identity
                </h2>
              </div>

              <p className="text-[15px] sm:text-[16px] text-[#CBD5E1] leading-relaxed">
                Welcome to the digital portal of <strong className="text-white">Black Markt Network Consultancy</strong> (&ldquo;Black Markt&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;the Firm&rdquo;), a subsidiary of <strong className="text-white">LSTC</strong>, registered in England and Wales under registration number <strong className="text-white">11124243</strong>.
              </p>

              <p className="text-[14.5px] text-[#94A3B8] leading-relaxed">
                The registered and principal headquarters address is <strong className="text-white">124 City Road London, EC1V 2NX, England</strong>. Registered VAT Number <strong className="text-white">477993219</strong>, operating international advisory representations in New York, Zurich, Singapore, and Dubai.
              </p>

              <p className="text-[14.5px] text-[#CBD5E1] leading-relaxed">
                By accessing, browsing, evaluating, or downloading any strategic research, whitepapers, or content from this website (<a href="https://blackmarkt.network" className="text-[#C9A227] hover:underline">blackmarkt.network</a>), you expressly acknowledge and agree to be bound by these Terms of Engagement. If you do not accept these terms in their entirety, you must discontinue your use of this digital platform immediately.
              </p>
            </div>

            <div className="lg:col-span-6 p-6 sm:p-8 rounded-[18px] bg-[#070D18] border border-white/5 space-y-4">
              <h3 className="text-[18px] font-headings font-medium text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#C9A227]" />
                Corporate Structure &amp; Governance
              </h3>
              <p className="text-[14px] text-[#94A3B8] leading-relaxed">
                Black Markt operates under strict British corporate governance and Swiss fiduciary oversight. A formal register of advisory partners, practice directors, and authorized mandate signatories is maintained and available for inspection by accredited institutional clients at our London and Zurich registered offices.
              </p>
              <div className="pt-4 border-t border-white/5 grid grid-cols-2 gap-4 text-[13px]">
                <div>
                  <span className="text-[#64748B] block text-[11px] uppercase">Company Number</span>
                  <span className="text-white font-mono font-medium">11124243</span>
                </div>
                <div>
                  <span className="text-[#64748B] block text-[11px] uppercase">VAT Registration</span>
                  <span className="text-white font-mono font-medium">477993219</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Intellectual Property - 2-Column Grid */}
        <section id="ip" className="p-8 sm:p-12 lg:p-14 rounded-[24px] bg-[#0B1320] border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.6)] w-full">
          <div className="space-y-6 w-full">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#C9A227]/10 border border-[#C9A227]/30 flex items-center justify-center text-[#C9A227] text-[13px] font-mono font-bold">
                02
              </span>
              <h2 className="text-[26px] sm:text-[30px] font-headings font-medium text-white">
                Intellectual Property &amp; Trademarks
              </h2>
            </div>

            <p className="text-[15px] sm:text-[16px] text-[#CBD5E1] leading-relaxed">
              Unless otherwise explicitly indicated, all contents published on this digital platform—including analytical methodologies, sector models, deal transaction structures, whitepapers, graphics, code, and interface arrangement—are the proprietary intellectual property of Black Markt Network Consultancy.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 sm:p-8 rounded-[18px] bg-[#070D18] border border-white/5 space-y-3">
                <h3 className="text-[18px] font-headings font-medium text-white">
                  Registered Trademarks &amp; Proprietary Assets
                </h3>
                <p className="text-[14px] text-[#94A3B8] leading-relaxed">
                  The words &ldquo;Black Markt&rdquo;, &ldquo;Black Markt Network Consultancy&rdquo;, and the Black Markt Network heraldic crest are protected trademarks registered with intellectual property registries across the UK, Europe, and the United States. Nothing contained on this site shall be construed as granting any license or right to utilize any trademark or copyrighted asset without prior written authorization from Black Markt.
                </p>
              </div>

              <div className="p-6 sm:p-8 rounded-[18px] bg-[#070D18] border border-white/5 space-y-3">
                <h3 className="text-[18px] font-headings font-medium text-white">
                  Limited Permitted License
                </h3>
                <p className="text-[14px] text-[#94A3B8] leading-relaxed">
                  You may view, download, and print a single copy of our public research briefs solely for your internal, non-commercial institutional assessment, provided that you make no modifications to the materials and preserve all copyright, trademark, and authorship attributions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: No Advisory Relationship Disclaimer - 2-Column Split */}
        <section id="advisory-disclaimer" className="p-8 sm:p-12 lg:p-14 rounded-[24px] bg-[#0B1320] border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.6)] w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start w-full">
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#C9A227]/10 border border-[#C9A227]/30 flex items-center justify-center text-[#C9A227] text-[13px] font-mono font-bold">
                  03
                </span>
                <h2 className="text-[26px] sm:text-[30px] font-headings font-medium text-white">
                  No Professional Advisory Relationship Created
                </h2>
              </div>

              <p className="text-[15px] sm:text-[16px] text-[#CBD5E1] leading-relaxed">
                Your access to or receipt of information from this platform does not establish an attorney-client, fiduciary, or financial advisory relationship between you and Black Markt Network Consultancy.
              </p>

              <p className="text-[14.5px] text-[#94A3B8] leading-relaxed">
                Formal strategic advisory representation commences solely upon the mutual execution of a countersigned <strong className="text-white">Engagement Letter (Mandate Agreement)</strong> and a formal <strong className="text-white">Bilateral Non-Disclosure Agreement (NDA)</strong>.
              </p>
            </div>

            <div className="lg:col-span-6 p-6 sm:p-8 rounded-[18px] bg-[#C9A227]/5 border border-[#C9A227]/25 space-y-3">
              <h3 className="text-[18px] font-headings font-medium text-white">
                Informational Nature of Public Digital Content
              </h3>
              <p className="text-[14px] text-[#CBD5E1] leading-relaxed">
                The publications, sector commentary, case studies, and perspectives available on this platform are distributed strictly for general informational purposes. They do not constitute investment advice, legal counsel, financial structuring opinions, or tax advisory services.
              </p>
              <p className="text-[13.5px] text-[#94A3B8]">
                Prospective project sponsors, investors, and sovereign clients must independently conduct their own technical, financial, and legal due diligence before executing transactions or deploying capital.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Limitation of Liability - 2-Column Grid */}
        <section id="warranties" className="p-8 sm:p-12 lg:p-14 rounded-[24px] bg-[#0B1320] border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.6)] w-full">
          <div className="space-y-6 w-full">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#C9A227]/10 border border-[#C9A227]/30 flex items-center justify-center text-[#C9A227] text-[13px] font-mono font-bold">
                04
              </span>
              <h2 className="text-[26px] sm:text-[30px] font-headings font-medium text-white">
                Limitation of Liability &amp; Warranty Disclaimer
              </h2>
            </div>

            <p className="text-[15px] sm:text-[16px] text-[#CBD5E1] leading-relaxed">
              While Black Markt exercises diligent editorial care to ensure that public market insights and historical transaction summaries are derived from credible data sets, all materials on this platform are provided strictly on an <strong className="text-white">&ldquo;as is&rdquo;</strong> and <strong className="text-white">&ldquo;as available&rdquo;</strong> basis.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 sm:p-8 rounded-[18px] bg-[#070D18] border border-white/5 space-y-3">
                <h3 className="text-[18px] font-headings font-medium text-white">No Implied Warranties</h3>
                <p className="text-[14px] text-[#94A3B8] leading-relaxed">
                  Information is provided without warranties of any kind, whether express, statutory, or implied, including, but not limited to, implied warranties of satisfactory quality, fitness for a particular investment objective, non-infringement, or accuracy of forward-looking estimates.
                </p>
              </div>

              <div className="p-6 sm:p-8 rounded-[18px] bg-[#070D18] border border-white/5 space-y-3">
                <h3 className="text-[18px] font-headings font-medium text-white">Exclusion of Consequential Damages</h3>
                <p className="text-[14px] text-[#94A3B8] leading-relaxed">
                  To the fullest extent permitted by law, neither Black Markt nor its partners, directors, advisors, or employees shall be held liable for any direct, indirect, incidental, consequential, punitive, or special damages arising out of or in connection with access to this platform.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Fiduciary Discretion & NDA - 2-Column Grid */}
        <section id="fiduciary" className="p-8 sm:p-12 lg:p-14 rounded-[24px] bg-[#0B1320] border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.6)] w-full">
          <div className="space-y-6 w-full">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#C9A227]/10 border border-[#C9A227]/30 flex items-center justify-center text-[#C9A227] text-[13px] font-mono font-bold">
                05
              </span>
              <h2 className="text-[26px] sm:text-[30px] font-headings font-medium text-white">
                Fiduciary Discretion &amp; Banking Secrecy
              </h2>
            </div>

            <p className="text-[15px] sm:text-[16px] text-[#CBD5E1] leading-relaxed">
              Black Markt operates in accordance with strict international professional secrecy agreements. In all formalized client mandates:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 sm:p-8 rounded-[18px] bg-[#070D18] border border-white/5 space-y-2.5">
                <h3 className="text-[18px] font-headings font-medium text-white">Cryptographic Air-Gaps</h3>
                <p className="text-[14px] text-[#94A3B8] leading-relaxed">
                  Sensitive client balance sheets, transaction pricing, syndicate participation books, and technical designs are segregated behind Swiss air-gapped sovereign compute enclaves in Zurich.
                </p>
              </div>

              <div className="p-6 sm:p-8 rounded-[18px] bg-[#070D18] border border-white/5 space-y-2.5">
                <h3 className="text-[18px] font-headings font-medium text-white">Perpetual Non-Disclosure</h3>
                <p className="text-[14px] text-[#94A3B8] leading-relaxed">
                  Our non-disclosure obligations remain in full legal force perpetually, surviving transaction completion or the natural expiration of advisory engagements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Independence & Anti-Corruption - 3-Column Grid */}
        <section id="anti-corruption" className="p-8 sm:p-12 lg:p-14 rounded-[24px] bg-[#0B1320] border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.6)] w-full">
          <div className="space-y-6 w-full">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#C9A227]/10 border border-[#C9A227]/30 flex items-center justify-center text-[#C9A227] text-[13px] font-mono font-bold">
                06
              </span>
              <h2 className="text-[26px] sm:text-[30px] font-headings font-medium text-white">
                Fiduciary Independence &amp; Anti-Corruption
              </h2>
            </div>

            <p className="text-[15px] sm:text-[16px] text-[#CBD5E1] leading-relaxed">
              We maintain rigorous structural independence across all strategic operations. Black Markt enforces an unconditional ban on vendor kickbacks, undisclosed referral fees, or broker commissions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-[18px] bg-[#070D18] border border-white/5 space-y-2 flex flex-col justify-between">
                <div>
                  <h3 className="text-[17px] font-headings font-medium text-white mb-2">UK Bribery Act 2010</h3>
                  <p className="text-[13.5px] text-[#94A3B8] leading-relaxed">
                    We maintain strict zero-tolerance policies governing commercial bribery, undue inducement, or facilitation payments across all operating jurisdictions.
                  </p>
                </div>
                <span className="text-[11px] font-mono text-[#64748B] pt-3 border-t border-white/5">Statutory UK Standard</span>
              </div>

              <div className="p-6 rounded-[18px] bg-[#070D18] border border-white/5 space-y-2 flex flex-col justify-between">
                <div>
                  <h3 className="text-[17px] font-headings font-medium text-white mb-2">US FCPA Compliance</h3>
                  <p className="text-[13.5px] text-[#94A3B8] leading-relaxed">
                    All cross-border syndications, international infrastructure bids, and sovereign public-private partnerships adhere to rigorous anti-corruption oversight.
                  </p>
                </div>
                <span className="text-[11px] font-mono text-[#64748B] pt-3 border-t border-white/5">International Governance</span>
              </div>

              <div className="p-6 rounded-[18px] bg-[#070D18] border border-white/5 space-y-2 flex flex-col justify-between">
                <div>
                  <h3 className="text-[17px] font-headings font-medium text-white mb-2">Pure Alignment of Interests</h3>
                  <p className="text-[13.5px] text-[#94A3B8] leading-relaxed">
                    Our advisory remuneration is derived strictly from agreed client retainers and transparent success-based mandate deliverables, with zero third-party kickbacks.
                  </p>
                </div>
                <span className="text-[11px] font-mono text-[#64748B] pt-3 border-t border-white/5">Fiduciary Guarantee</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Third-Party Links & Section 8: Governing Law - 2-Column Split */}
        <section id="jurisdiction" className="p-8 sm:p-12 lg:p-14 rounded-[24px] bg-[#0B1320] border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.6)] w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start w-full">
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#C9A227]/10 border border-[#C9A227]/30 flex items-center justify-center text-[#C9A227] text-[13px] font-mono font-bold">
                  07
                </span>
                <h2 className="text-[24px] sm:text-[28px] font-headings font-medium text-white">
                  Third-Party Intelligence &amp; External Links
                </h2>
              </div>
              <p className="text-[14.5px] text-[#CBD5E1] leading-relaxed">
                This website may feature links or citations to third-party research reports, financial benchmark databases, or institutional portals not operated by Black Markt. Such links are provided solely as convenience indicators. Black Markt expresses no judgment, makes no warranty, and accepts no legal liability concerning the veracity, compliance, or security of external platforms.
              </p>
            </div>

            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#C9A227]/10 border border-[#C9A227]/30 flex items-center justify-center text-[#C9A227] text-[13px] font-mono font-bold">
                  08
                </span>
                <h2 className="text-[24px] sm:text-[28px] font-headings font-medium text-white">
                  Governing Law &amp; Dispute Resolution
                </h2>
              </div>
              <p className="text-[14.5px] text-[#CBD5E1] leading-relaxed">
                These Terms of Engagement and any digital disputes arising out of the use of this platform shall be governed by, and interpreted in accordance with, the substantive laws of England and Wales and Swiss Commercial Law.
              </p>
              <div className="p-5 rounded-[16px] bg-[#070D18] border border-white/5 space-y-1.5">
                <h4 className="text-[15px] font-headings font-medium text-white">Exclusive Forum</h4>
                <p className="text-[13px] text-[#94A3B8]">
                  Exclusive jurisdiction lies with the <strong className="text-white">Commercial Court of the High Court of Justice in London, UK</strong>, or, where an engagement explicitly specifies Swiss seat, the <strong className="text-white">Commercial Court of Zurich, Switzerland</strong>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 9: Legal Notices & Hubs - 3-Column Grid */}
        <section id="contacts" className="p-8 sm:p-12 lg:p-14 rounded-[24px] bg-[#0B1320] border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.6)] w-full">
          <div className="space-y-6 w-full">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#C9A227]/10 border border-[#C9A227]/30 flex items-center justify-center text-[#C9A227] text-[13px] font-mono font-bold">
                09
              </span>
              <h2 className="text-[26px] sm:text-[30px] font-headings font-medium text-white">
                Legal Inquiries &amp; Global Hubs
              </h2>
            </div>

            <p className="text-[15px] sm:text-[16px] text-[#CBD5E1] leading-relaxed">
              Official legal notices, corporate communications, or subpoena service requests should be addressed in writing to our Office of General Counsel or your regional hub:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
              {GLOBAL_HUBS.map((hub) => (
                <div key={hub.city} className="p-6 rounded-[18px] bg-[#070D18] border border-white/5 space-y-2.5 flex flex-col justify-between hover:border-[#C9A227]/30 transition-all">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[12px] font-mono text-[#C9A227] uppercase tracking-wider font-semibold">
                        {hub.district}
                      </span>
                      <span className="text-[12px] text-white/50">{hub.city}</span>
                    </div>
                    <h3 className="text-[17px] font-headings font-medium text-white mb-1">
                      {hub.city} Legal Office
                    </h3>
                    <p className="text-[13.5px] text-[#94A3B8]">
                      {hub.address}
                    </p>
                  </div>
                  <div className="pt-2 border-t border-white/5 flex flex-col gap-1 text-[13px]">
                    <span className="text-[#CBD5E1] font-mono">{hub.phone}</span>
                    <a href={`mailto:${hub.email}`} className="text-[#C9A227] hover:underline font-mono">
                      {hub.email}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Cross Links to Privacy Policy and Compliance */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-6 text-[14px]">
              <Link to="/privacy" className="text-[#C9A227] hover:underline font-semibold flex items-center gap-1.5">
                <span>View Privacy Policy &amp; Data Rights</span>
                <span>&rarr;</span>
              </Link>
              <Link to="/compliance" className="text-[#C9A227] hover:underline font-semibold flex items-center gap-1.5">
                <span>View Compliance &amp; Due Diligence Dossier</span>
                <span>&rarr;</span>
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* Bottom CTA */}
      <section className="rounded-[24px] bg-gradient-to-r from-[#0B1320] via-[#070D18] to-[#0B1320] border border-[#C9A227]/30 text-white p-8 sm:p-14 my-4 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 w-full">
        <div className="max-w-[680px]">
          <h2 className="text-[28px] sm:text-[34px] font-headings font-medium text-white mb-2">
            Initiate a Formal Mandate
          </h2>
          <p className="text-[15px] text-[#CBD5E1] leading-relaxed">
            Our legal and transactional advisory team provides tailored non-disclosure agreements and institutional terms for qualifying mandates.
          </p>
        </div>
        <ActionButton href="/book-consultation" variant="primary" className="w-[220px] shrink-0">
          Request Consultation &rarr;
        </ActionButton>
      </section>
    </Layout>
  );
}
