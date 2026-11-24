import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { PRACTICES_DATA } from '../data/platformData';

export default function RequestProposalPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Layout>
      {/* Hero Header */}
      <section className="relative w-full rounded-[24px] bg-[#0B1320] border border-[#C9A227]/20 p-8 sm:p-14 lg:p-16 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
        <div className="max-w-[960px] flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-caption text-[#94A3B8]">
            <span>FORMAL PROCUREMENT &amp; MANDATES</span>
            <span className="hidden sm:inline text-white/20">&bull;</span>
            <span className="text-[#C9A227] font-semibold">REQUEST FOR PROPOSAL (RFP)</span>
          </div>

          <h1 className="text-[40px] sm:text-[56px] lg:text-[64px] font-headings font-medium tracking-tight text-white leading-[1.02]">
            Submit a mandate RFP brief
          </h1>

          <p className="text-[18px] sm:text-[22px] text-[#CBD5E1] leading-relaxed max-w-[800px] font-body">
            Upload institutional specifications, transaction scopes, or diligence requirements. Our Fiduciary Committee delivers formal proposals within 48 hours.
          </p>
        </div>
      </section>

      {/* RFP Submission Form */}
      <section className="p-8 sm:p-12 lg:p-16 rounded-[24px] bg-[#0B1320] border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.6)] my-4">
        <div className="max-w-[820px] mx-auto">
          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#050505] border border-[#C9A227]/60 text-[#C9A227] mx-auto flex items-center justify-center text-[28px]">
                ✓
              </div>
              <h2 className="text-[28px] font-headings font-medium text-white">
                RFP Successfully Received
              </h2>
              <p className="text-[15px] text-[#CBD5E1] max-w-[560px] mx-auto leading-relaxed">
                Your mandate brief has been assigned reference <strong className="text-[#C9A227]">RFP-BM-{Math.floor(10000 + Math.random() * 90000)}</strong>. A Managing Director from the designated practice will contact you within 24 business hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[12px] font-caption text-[#CBD5E1] font-semibold uppercase mb-1">
                    Procuring Entity / Client Organization
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Apex Horizon Capital"
                    className="w-full h-12 px-4 rounded-lg bg-[#070D18] border border-white/15 text-white placeholder-[#64748B] text-[14px] focus:outline-none focus:border-[#C9A227] focus:ring-1 focus:ring-[#C9A227]"
                  />
                </div>
                <div>
                  <label className="block text-[12px] font-caption text-[#CBD5E1] font-semibold uppercase mb-1">
                    Contact Officer &amp; Title
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Sarah Jenkins, Head of Diligence"
                    className="w-full h-12 px-4 rounded-lg bg-[#070D18] border border-white/15 text-white placeholder-[#64748B] text-[14px] focus:outline-none focus:border-[#C9A227] focus:ring-1 focus:ring-[#C9A227]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[12px] font-caption text-[#CBD5E1] font-semibold uppercase mb-1">
                    Advisory Practice Focus
                  </label>
                  <select className="w-full h-12 px-4 rounded-lg bg-[#070D18] border border-white/15 text-white text-[14px] focus:outline-none focus:border-[#C9A227] focus:ring-1 focus:ring-[#C9A227]">
                    {PRACTICES_DATA.map((p) => (
                      <option key={p.slug} value={p.slug} className="bg-[#0B1320] text-white">{p.title}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-[12px] font-caption text-[#CBD5E1] font-semibold uppercase mb-1">
                    Transaction / Asset Scope Size
                  </label>
                  <select className="w-full h-12 px-4 rounded-lg bg-[#070D18] border border-white/15 text-white text-[14px] focus:outline-none focus:border-[#C9A227] focus:ring-1 focus:ring-[#C9A227]">
                    <option className="bg-[#0B1320] text-white">$100M – $500M</option>
                    <option className="bg-[#0B1320] text-white">$500M – $2B</option>
                    <option className="bg-[#0B1320] text-white">$2B – $10B+</option>
                    <option className="bg-[#0B1320] text-white">Sovereign Strategic Advisory (Uncapped)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[12px] font-caption text-[#CBD5E1] font-semibold uppercase mb-1">
                    Desired Go-Live / Close Deadline
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. 14-Day Exclusivity Window"
                    className="w-full h-12 px-4 rounded-lg bg-[#070D18] border border-white/15 text-white placeholder-[#64748B] text-[14px] focus:outline-none focus:border-[#C9A227] focus:ring-1 focus:ring-[#C9A227]"
                  />
                </div>
                <div>
                  <label className="block text-[12px] font-caption text-[#CBD5E1] font-semibold uppercase mb-1">
                    Institutional Email Address
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="s.jenkins@apexhorizon.com"
                    className="w-full h-12 px-4 rounded-lg bg-[#070D18] border border-white/15 text-white placeholder-[#64748B] text-[14px] focus:outline-none focus:border-[#C9A227] focus:ring-1 focus:ring-[#C9A227]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[12px] font-caption text-[#CBD5E1] font-semibold uppercase mb-1">
                  Mandate Specification &amp; Deliverables Requirements
                </label>
                <textarea
                  rows={5}
                  required
                  placeholder="Detail the target asset architecture, regulatory parameters, technical debt scope, and key deliverables expected from Black Markt..."
                  className="w-full p-4 rounded-lg bg-[#070D18] border border-white/15 text-white placeholder-[#64748B] text-[14px] focus:outline-none focus:border-[#C9A227] focus:ring-1 focus:ring-[#C9A227]"
                />
              </div>

              {/* Upload Dropzone Simulator */}
              <div>
                <label className="block text-[12px] font-caption text-[#CBD5E1] font-semibold uppercase mb-1">
                  RFP Tender Documents / NDA (Optional)
                </label>
                <div className="p-6 rounded-xl bg-[#070D18] border-2 border-dashed border-white/15 text-center hover:border-[#C9A227]/50 transition-colors cursor-pointer">
                  <span className="text-[20px] block mb-1">📎</span>
                  <span className="text-[13px] font-medium text-white block">
                    Drag and drop your RFP specification or bilateral NDA
                  </span>
                  <span className="text-[11px] text-[#94A3B8]">
                    PDF, DOCX, or encrypted ZIP up to 50MB. Protected by Swiss FADP.
                  </span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full h-13 py-3.5 rounded-lg bg-[#C9A227] text-[#050505] font-semibold text-[14px] hover:bg-[#DFBA42] shadow-[0_4px_24px_rgba(201,162,39,0.35)] transition-all"
              >
                Submit Institutional RFP &rarr;
              </button>
            </form>
          )}
        </div>
      </section>
    </Layout>
  );
}
