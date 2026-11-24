import React from 'react';
import Layout from '../components/layout/Layout';
import ActionButton from '../components/common/ActionButton';
import Counter from '../components/common/Counter';

export default function AboutPage() {
  const pillars = [
    {
      num: '01',
      title: 'Forensic Scrutiny',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
          <line x1="11" y1="8" x2="11" y2="14" />
          <line x1="8" y1="11" x2="14" y2="11" />
        </svg>
      ),
      desc: 'We inspect line-by-line architecture, proprietary codebases, technical debt, and latent operational liabilities that standard management consultancies overlook.',
    },
    {
      num: '02',
      title: 'Sovereign Security',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      ),
      desc: 'Deploying air-gapped zero-trust enclaves, quantum-resistant cryptographic systems, and multi-jurisdictional data residency adhering to Swiss FADP and ISO 27001.',
    },
    {
      num: '03',
      title: 'Inviolable Discretion',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      ),
      desc: 'Protected by Swiss banking secrecy precedents and British common-law fiduciary covenants, all client communications and mandate telemetry remain strictly confidential.',
    },
    {
      num: '04',
      title: 'Value Realization',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
          <polyline points="16 7 22 7 22 13" />
        </svg>
      ),
      desc: 'We directly tie our advisory frameworks to EBITDA multiple expansion, Day-1 separation velocity, and multi-decade sovereign capital preservation.',
    },
  ];

  return (
    <Layout>
      {/* Top Banner Card */}
      <section className="relative w-full rounded-[24px] bg-[#0B1320] border border-[#C9A227]/20 p-8 sm:p-14 lg:p-20 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
        <div className="max-w-[1000px] flex flex-col gap-6">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-caption text-[#C9A227]">
            <span className="w-2 h-2 rounded-full bg-[#C9A227]" />
            <span className="text-[11px] sm:text-[12px] font-sans font-semibold tracking-[0.18em] uppercase">THE FIRM</span>
            <span className="hidden sm:inline text-white/30">&bull;</span>
            <span className="text-[#C9A227] font-semibold">ESTABLISHED 2026</span>
          </div>

          <h1 className="text-[44px] sm:text-[68px] lg:text-[76px] font-headings font-medium tracking-tight text-white leading-[0.98]">
            Institutional gravity &amp; strategic foresight
          </h1>

          <p className="text-[20px] sm:text-[24px] text-[#CBD5E1] leading-relaxed max-w-[820px] font-body">
            Black Markt Network Consultancy bridges the critical divide between high-stakes global capital allocation and sovereign digital infrastructure engineering.
          </p>

          <div className="subpage-cta-wrap flex flex-wrap gap-4 pt-4">
            <ActionButton href="/book-consultation" className="w-[210px]">
              Initiate Consultation
            </ActionButton>
            <ActionButton href="/leadership" variant="on-dark" className="w-[190px]">
              Meet the Council
            </ActionButton>
          </div>
        </div>

        {/* Hairline geometric accent */}
        <div className="absolute right-0 top-0 bottom-0 w-1/3 pointer-events-none opacity-20 hidden lg:block">
          <svg className="w-full h-full" viewBox="0 0 400 400" fill="none">
            <circle cx="200" cy="200" r="180" stroke="#C9A227" strokeWidth="1" strokeDasharray="4 4" />
            <circle cx="200" cy="200" r="120" stroke="#C9A227" strokeWidth="1.5" />
            <line x1="20" y1="200" x2="380" y2="200" stroke="#C9A227" strokeWidth="0.75" />
            <line x1="200" y1="20" x2="200" y2="380" stroke="#C9A227" strokeWidth="0.75" />
          </svg>
        </div>
      </section>

      {/* Telemetry Numbers Strip */}
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 my-2">
        <div className="p-4 sm:p-6 lg:p-8 rounded-[20px] bg-[#0B1320] border border-white/10 hover:border-[#C9A227]/40 shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex flex-col justify-between overflow-hidden transition-all duration-300">
          <p className="text-[10.5px] sm:text-caption text-[#94A3B8] uppercase tracking-wider truncate">ADVISORY VOLUME</p>
          <div className="text-[26px] xs:text-[30px] sm:text-[44px] lg:text-[52px] font-headings font-bold text-white my-1 sm:my-2 tracking-tight leading-none whitespace-nowrap">
            $<Counter target={42} duration={1.2} />B+
          </div>
          <span className="text-[11px] sm:text-[12px] font-caption text-[#C9A227] font-semibold truncate">Across 18 Jurisdictions</span>
        </div>

        <div className="p-4 sm:p-6 lg:p-8 rounded-[20px] bg-[#0B1320] border border-white/10 hover:border-[#C9A227]/40 shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex flex-col justify-between overflow-hidden transition-all duration-300">
          <p className="text-[10.5px] sm:text-caption text-[#94A3B8] uppercase tracking-wider truncate">SYSTEM RESILIENCE</p>
          <div className="text-[26px] xs:text-[30px] sm:text-[44px] lg:text-[52px] font-headings font-bold text-white my-1 sm:my-2 tracking-tight leading-none whitespace-nowrap">
            99.999%
          </div>
          <span className="text-[11px] sm:text-[12px] font-caption text-[#08D797] font-semibold truncate">Tier-IV Architecture</span>
        </div>

        <div className="p-4 sm:p-6 lg:p-8 rounded-[20px] bg-[#0B1320] border border-white/10 hover:border-[#C9A227]/40 shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex flex-col justify-between overflow-hidden transition-all duration-300">
          <p className="text-[10.5px] sm:text-caption text-[#94A3B8] uppercase tracking-wider truncate">STRATEGIC DEPLOYS</p>
          <div className="text-[26px] xs:text-[30px] sm:text-[44px] lg:text-[52px] font-headings font-bold text-white my-1 sm:my-2 tracking-tight leading-none whitespace-nowrap">
            <Counter target={260} duration={1.5} />+
          </div>
          <span className="text-[11px] sm:text-[12px] font-caption text-[#CBD5E1] font-semibold truncate">Critical Enclaves Active</span>
        </div>

        <div className="p-4 sm:p-6 lg:p-8 rounded-[20px] bg-[#0B1320] border border-white/10 hover:border-[#C9A227]/40 shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex flex-col justify-between overflow-hidden transition-all duration-300">
          <p className="text-[10.5px] sm:text-caption text-[#94A3B8] uppercase tracking-wider truncate">RETENTION RATE</p>
          <div className="text-[26px] xs:text-[30px] sm:text-[44px] lg:text-[52px] font-headings font-bold text-white my-1 sm:my-2 tracking-tight leading-none whitespace-nowrap">
            <Counter target={94} duration={1.3} />%
          </div>
          <span className="text-[11px] sm:text-[12px] font-caption text-[#CBD5E1] font-semibold truncate">Institutional Mandates</span>
        </div>
      </section>

      {/* Narrative Section: Heritage & The Nexus */}
      <section className="rounded-[24px] bg-[#050505] border border-white/10 p-8 sm:p-14 lg:p-16 my-2 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C9A227]" />
              <span className="text-[#C9A227] text-[11px] sm:text-[12px] font-sans font-semibold tracking-[0.18em] uppercase">
                OUR HERITAGE &amp; ETHOS
              </span>
            </div>
            <h2 className="text-[34px] sm:text-[46px] font-headings font-medium tracking-tight text-white leading-[1.05]">
              Navigating capital markets with forensic precision
            </h2>
            <div className="mt-4 p-5 rounded-xl bg-[#0B1320] border border-[#C9A227]/25 shadow-sm">
              <span className="text-[12px] font-caption text-[#C9A227] uppercase tracking-wider block mb-1 font-semibold">
                Fiduciary Headquarters
              </span>
              <p className="text-[14px] text-white font-medium leading-snug">
                Principal Headquarters: 124 City Road London, EC1V 2NX, England, with international advisory representations in New York, Zurich, Singapore, and Dubai.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#0B1320] border border-white/10 shadow-sm space-y-2">
              <span className="text-[11px] font-mono text-[#C9A227] uppercase tracking-wider block font-semibold">
                Corporate Registration &amp; Legal Entity
              </span>
              <p className="text-[13.5px] text-[#CBD5E1] leading-relaxed">
                Black Markt Network Consultancy a subsidiary of LSTC, registered in England and Wales under registration number 11124243. The registered address 124 City Road London, EC1V 2NX, England. Registered VAT Number 477993219.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-6 text-[17px] sm:text-[19px] text-[#CBD5E1] leading-relaxed">
            <p>
              Traditional management consultancies lack the deep architectural and engineering fluency required to evaluate modern high-load infrastructure. Conversely, pure engineering agencies lack the fiduciary acumen and capital markets mastery demanded by corporate boards and sovereign syndicates.
            </p>
            <p>
              Black Markt stands singularly at this intersection. Headquartered across the world’s foremost financial centers, our Senior Managing Directors advise on multi-billion dollar transactions, sovereign cloud enclaves, and mission-critical enterprise modernizations where systemic failure is not an option.
            </p>
            <p className="text-[15px] font-caption text-[#94A3B8] border-l-2 border-[#C9A227] pl-4">
              Operating under strict non-disclosure covenants and full alignment with Swiss FADP, UK FCA oversight standards, and US regulatory frameworks.
            </p>
          </div>
        </div>
      </section>

      {/* Four Fiduciary Pillars Grid */}
      <section className="rounded-[24px] bg-[#0B1320] border border-white/10 p-8 sm:p-14 lg:p-16 my-2 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
        <div className="text-center max-w-[700px] mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-[#C9A227]" />
            <span className="text-[#C9A227] text-[11px] sm:text-[12px] font-sans font-semibold tracking-[0.18em] uppercase">
              OPERATING PRINCIPLES
            </span>
          </div>
          <h2 className="text-[36px] sm:text-[50px] font-headings font-medium tracking-tight text-white leading-[1.02]">
            The Four Fiduciary Pillars
          </h2>
          <p className="mt-4 text-[17px] sm:text-[19px] text-[#94A3B8]">
            Rigorous methodologies engineered to protect capital integrity and guarantee execution certainty.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((p) => (
            <div
              key={p.num}
              className="p-8 rounded-[20px] bg-[#050505] border border-white/10 hover:border-[#C9A227]/40 shadow-[0_16px_40px_rgba(0,0,0,0.7)] flex flex-col justify-between hover:shadow-[0_20px_50px_rgba(0,0,0,0.9)] transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 text-[#C9A227] flex items-center justify-center">
                    {p.icon}
                  </span>
                  <span className="text-[18px] font-headings font-semibold text-[#C9A227]/70">
                    {p.num}
                  </span>
                </div>
                <h3 className="text-[24px] font-headings font-medium text-white mb-3">
                  {p.title}
                </h3>
                <p className="text-[15px] sm:text-[16px] text-[#94A3B8] leading-relaxed">
                  {p.desc}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-[12px] font-caption text-[#C9A227] font-semibold uppercase tracking-wider">
                <span>Verified Protocol</span>
                <span>&bull;</span>
                <span>Tier-IV Certified</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Direct Engagement CTA Banner */}
      <section className="rounded-[24px] bg-[#050505] border border-[#C9A227]/30 text-white p-8 sm:p-14 lg:p-16 my-4 shadow-[0_25px_60px_rgba(0,0,0,0.9)] flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-[650px]">
          <span className="text-[12px] font-caption text-[#C9A227] tracking-wider uppercase block mb-2 font-semibold">
            Institutional Engagement
          </span>
          <h2 className="text-[32px] sm:text-[44px] font-headings font-medium tracking-tight leading-[1.05] text-white">
            Engage the Firm on your next strategic mandate
          </h2>
          <p className="mt-3 text-[16px] sm:text-[18px] text-[#94A3B8] leading-relaxed">
            Our Senior Managing Directors are available for confidential consultations, transaction scoping, and private RFP briefs.
          </p>
        </div>
        <div className="subpage-cta-wrap shrink-0 flex flex-row gap-3 w-full sm:w-auto [&>*]:flex-1 sm:[&>*]:flex-initial">
          <ActionButton href="/book-consultation" className="w-full sm:w-[200px] !text-[12.5px] sm:!text-[14px]">
            Book Consultation
          </ActionButton>
          <ActionButton href="/request-proposal" variant="on-dark" className="w-full sm:w-[190px] !text-[12.5px] sm:!text-[14px]">
            Submit RFP
          </ActionButton>
        </div>
      </section>
    </Layout>
  );
}
