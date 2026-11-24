import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';

export default function LegalPage() {
  return (
    <Layout>
      <section className="relative w-full rounded-[24px] bg-[#0B1320] border border-[#C9A227]/20 p-8 sm:p-14 lg:p-16 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
        <div className="max-w-[960px] flex flex-col gap-4">
          <span className="text-[12px] font-caption text-[#C9A227] uppercase tracking-wider font-semibold">
            LEGAL DISCLOSURES &amp; TERMS
          </span>
          <h1 className="text-[40px] sm:text-[56px] font-headings font-medium tracking-tight text-white">
            Terms of Mandate &amp; Governance
          </h1>
          <p className="text-[18px] text-[#CBD5E1]">
            Governing rules of engagement and professional standards for Black Markt Network Consultancy client mandates.
          </p>
        </div>
      </section>

      <section className="p-8 sm:p-12 lg:p-16 rounded-[24px] bg-[#0B1320] border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.6)] my-4">
        <div className="max-w-[800px] mx-auto space-y-8 text-[15px] sm:text-[16px] text-[#CBD5E1] leading-relaxed">
          <div>
            <h2 className="text-[24px] font-headings font-medium text-white mb-3">1. Fiduciary Discretion</h2>
            <p>
              Black Markt Network Consultancy operates under strict professional secrecy agreements. All client technical architectures, balance sheet data, and transaction details are categorized as strictly confidential and shielded by cryptographic air-gaps.
            </p>
          </div>

          <div>
            <h2 className="text-[24px] font-headings font-medium text-white mb-3">2. Independence &amp; Anti-Corruption</h2>
            <p>
              We maintain absolute fiduciary independence. We do not receive commissions, referral fees, or software resale kickbacks from any infrastructure provider, ensuring completely objective counsel for our clients.
            </p>
          </div>

          <div>
            <h2 className="text-[24px] font-headings font-medium text-white mb-3">3. Data Protection &amp; Privacy Policy</h2>
            <p className="mb-3">
              We employ privacy-by-design principles and strict &ldquo;need to know&rdquo; data governance. We do not sell personal data or deploy commercial ad retargeting pixels.
            </p>
            <Link
              to="/privacy"
              className="inline-flex items-center gap-2 text-[#C9A227] hover:text-[#DFBA42] font-semibold text-[14px]"
            >
              <span>Read our full Privacy Policy &amp; Data Subject Rights</span>
              <span>&rarr;</span>
            </Link>
          </div>

          <div>
            <h2 className="text-[24px] font-headings font-medium text-white mb-3">4. Governing Law &amp; Jurisdiction</h2>
            <p>
              Except where explicitly amended by specific written client engagement contracts, all legal relationships with Black Markt Network Consultancy are governed by the substantive laws of Switzerland and the Senior Courts of England and Wales.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
