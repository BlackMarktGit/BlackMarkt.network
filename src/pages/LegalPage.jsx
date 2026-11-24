import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Icon from '../components/common/Icon';
import { COMPANY_INFO } from '../data/platformData';

export default function LegalPage() {
  return (
    <Layout>
      <section className="relative w-full rounded-[24px] bg-[#0B1320] border border-[#C9A227]/20 p-8 sm:p-14 lg:p-20 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
        <div className="max-w-[960px] flex flex-col gap-6">
          <div className="flex items-center gap-3 text-caption text-[#C9A227]">
            <span className="w-2 h-2 rounded-full bg-[#C9A227]" />
            <span className="text-[11px] sm:text-[12px] font-sans font-semibold tracking-[0.18em] uppercase">
              Legal &amp; Regulatory
            </span>
          </div>
          <h1 className="text-[40px] sm:text-[60px] lg:text-[70px] font-headings font-medium tracking-tight text-white leading-[1.02]">
            Legal Disclosures &amp; Terms
          </h1>
          <p className="text-[18px] sm:text-[22px] text-[#CBD5E1] leading-relaxed max-w-[800px] font-body">
            Official statutory disclosures, professional terms of mandate engagement, and data protection policies for Black Markt Network Consultancy.
          </p>
        </div>
      </section>

      <section className="p-8 sm:p-12 lg:p-16 rounded-[24px] bg-[#0B1320] border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.6)] my-8">
        <div className="max-w-[840px] mx-auto space-y-8 text-[15px] sm:text-[16px] text-[#CBD5E1] leading-relaxed">
          <div>
            <h2 className="text-[24px] font-headings font-medium text-white mb-3">
              1. Corporate Identity &amp; Statutory Status
            </h2>
            <p>
              {COMPANY_INFO.name} is a company incorporated in England and Wales under Company Registration Number {COMPANY_INFO.registrationNumber}, operating as a subsidiary of {COMPANY_INFO.parentCompany}. Registered Office: {COMPANY_INFO.registeredAddress}. Registered VAT Number: {COMPANY_INFO.vatNumber}.
            </p>
          </div>

          <div>
            <h2 className="text-[24px] font-headings font-medium text-white mb-3">
              2. Professional Mandates &amp; Advisory Scope
            </h2>
            <p>
              The information published on this website is provided for informational and preliminary introduction purposes only. Nothing on this website constitutes a formal offer, financial promotion, investment recommendation, or solicitation of securities. Advisory services are provided solely under formal, bilaterally executed engagement letters.
            </p>
          </div>

          <div>
            <h2 className="text-[24px] font-headings font-medium text-white mb-3">
              3. Confidentiality &amp; Client Secrecy
            </h2>
            <p>
              We treat all client discussions, transaction documentation, and project specifics with the utmost discretion and confidentiality. Bilateral non-disclosure agreements govern all formal client engagements.
            </p>
          </div>

          <div>
            <h2 className="text-[24px] font-headings font-medium text-white mb-3">
              4. Governing Law &amp; Jurisdiction
            </h2>
            <p>
              This website and all interactions governed hereunder are subject to the laws of England and Wales. Counterparties submit to the jurisdiction of the Senior Courts of England and Wales.
            </p>
          </div>

          <div className="pt-6 border-t border-white/10 flex flex-wrap gap-6 text-[14px]">
            <Link to="/privacy" className="inline-flex items-center gap-1.5 text-[#C9A227] hover:underline font-semibold">
              <span>Privacy Policy</span>
              <Icon name="ArrowRight" className="w-4 h-4" />
            </Link>
            <Link to="/terms" className="inline-flex items-center gap-1.5 text-[#C9A227] hover:underline font-semibold">
              <span>Terms of Engagement</span>
              <Icon name="ArrowRight" className="w-4 h-4" />
            </Link>
            <Link to="/compliance" className="inline-flex items-center gap-1.5 text-[#C9A227] hover:underline font-semibold">
              <span>Compliance Standards</span>
              <Icon name="ArrowRight" className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
