import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import ActionButton from '../components/common/ActionButton';
import Icon from '../components/common/Icon';
import { COMPANY_INFO } from '../data/platformData';

export default function CompliancePage() {
  const compliancePillars = [
    {
      title: 'Anti-Money Laundering (AML) & Sanctions',
      iconName: 'ShieldCheck',
      desc: 'We adhere to UK Money Laundering Regulations, international FATF guidelines, and global sanctions screening across all advisory engagements and transaction counterparties.',
    },
    {
      title: 'Anti-Bribery & Corruption (ABC)',
      iconName: 'Scale',
      desc: 'Our operations strictly comply with the UK Bribery Act 2010 and international anti-corruption conventions. We do not pay, solicit, or receive unlawful inducements or undisclosed fees.',
    },
    {
      title: 'Client Confidentiality & Discretion',
      iconName: 'Lock',
      desc: 'All client information, mandate parameters, proprietary business plans, and financial documentation are governed by rigorous bilateral non-disclosure agreements.',
    },
    {
      title: 'Conflict of Interest Management',
      iconName: 'CheckCircle',
      desc: 'We enforce proactive conflict screening prior to executing any client engagement letter to preserve fiduciary independence and protect counterparties.',
    },
    {
      title: 'Corporate Governance & Transparency',
      iconName: 'Building',
      desc: `Black Markt Network Consultancy operates as an official subsidiary of ${COMPANY_INFO.parentCompany}, registered in England and Wales (Company No. ${COMPANY_INFO.registrationNumber}, VAT No. ${COMPANY_INFO.vatNumber}).`,
    },
    {
      title: 'Data Protection & Statutory Compliance',
      iconName: 'FileText',
      desc: 'Full compliance with the UK Data Protection Act 2018 and UK GDPR, ensuring all institutional contact and transaction data is handled lawfully and transparently.',
    },
  ];

  return (
    <Layout>
      {/* Hero Header */}
      <section className="relative w-full rounded-[24px] bg-[#0B1320] border border-[#C9A227]/20 p-8 sm:p-14 lg:p-20 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
        <div className="max-w-[960px] flex flex-col gap-6">
          <div className="flex items-center gap-3 text-caption text-[#C9A227]">
            <span className="w-2 h-2 rounded-full bg-[#C9A227]" />
            <span className="text-[11px] sm:text-[12px] font-sans font-semibold tracking-[0.18em] uppercase">
              Regulatory Standards &amp; Integrity
            </span>
          </div>

          <h1 className="text-[40px] sm:text-[60px] lg:text-[70px] font-headings font-medium tracking-tight text-white leading-[1.02]">
            Compliance &amp; Governance
          </h1>

          <p className="text-[18px] sm:text-[22px] text-[#CBD5E1] leading-relaxed max-w-[800px] font-body">
            Professional governance frameworks, anti-financial crime protocols, and ethical standards that guide every strategic transaction and client mandate.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <ActionButton href="/contact" variant="primary" className="w-[180px]">
              Compliance Inquiries
            </ActionButton>
            <ActionButton href="/privacy" variant="on-dark" className="w-[180px]">
              Privacy Policy
            </ActionButton>
          </div>
        </div>
      </section>

      {/* Compliance Pillars Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
        {compliancePillars.map((pillar, idx) => (
          <div
            key={idx}
            className="p-8 rounded-[24px] bg-[#0B1320] border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.4)] flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#050505] border border-[#C9A227]/30 flex items-center justify-center text-[#C9A227] mb-6">
                <Icon name={pillar.iconName} className="w-6 h-6 text-[#C9A227]" />
              </div>
              <h3 className="text-[20px] font-headings font-medium text-white mb-3">
                {pillar.title}
              </h3>
              <p className="text-[14px] sm:text-[15px] text-[#94A3B8] leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* Corporate Registration Verification */}
      <section className="p-8 sm:p-12 rounded-[24px] bg-[#0B1320] border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.6)] my-8">
        <div className="max-w-[800px]">
          <span className="text-[11px] font-caption text-[#C9A227] uppercase tracking-wider block mb-2 font-semibold">
            Entity Disclosures
          </span>
          <h2 className="text-[26px] sm:text-[32px] font-headings font-medium text-white mb-4">
            Statutory Registration &amp; Registered Office
          </h2>
          <div className="space-y-3 text-[15px] text-[#CBD5E1] leading-relaxed">
            <p>
              <strong className="text-white">{COMPANY_INFO.name}</strong> is a registered limited company incorporated in England and Wales under Company Registration Number <strong className="text-[#C9A227]">{COMPANY_INFO.registrationNumber}</strong>, operating as an active subsidiary of <strong className="text-white">{COMPANY_INFO.parentCompany}</strong>.
            </p>
            <p>
              Our registered office is situated at <strong className="text-white">{COMPANY_INFO.registeredAddress}</strong>. Our registered VAT number is <strong className="text-[#C9A227]">{COMPANY_INFO.vatNumber}</strong>.
            </p>
            <p>
              For formal compliance inquiries, institutional due diligence packages, or statutory filings, please contact our administrative desk at{' '}
              <a href={`mailto:${COMPANY_INFO.emails.clientService}`} className="text-[#C9A227] hover:underline">
                {COMPANY_INFO.emails.clientService}
              </a>{' '}
              or{' '}
              <a href={`mailto:${COMPANY_INFO.emails.advisory}`} className="text-[#C9A227] hover:underline">
                {COMPANY_INFO.emails.advisory}
              </a>.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
