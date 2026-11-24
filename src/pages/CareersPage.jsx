import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import ActionButton from '../components/common/ActionButton';
import { CAREERS_DATA } from '../data/platformData';

export default function CareersPage() {
  const [selectedRole, setSelectedRole] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleApply = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setSelectedRole(null);
    }, 2800);
  };

  return (
    <Layout>
      {/* Hero Header */}
      <section className="relative w-full rounded-[24px] bg-[#0B1320] border border-[#C9A227]/20 p-8 sm:p-14 lg:p-20 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
        <div className="max-w-[960px] flex flex-col gap-6">
          <div className="flex items-center gap-3 text-caption text-[#94A3B8]">
            <span>THE FELLOWSHIP</span>
            <span className="text-white/20">&bull;</span>
            <span className="text-[#C9A227] font-semibold">CAREERS &amp; RESEARCH APPOINTMENTS</span>
          </div>

          <h1 className="text-[44px] sm:text-[68px] lg:text-[76px] font-headings font-medium tracking-tight text-white leading-[0.98]">
            Join our advisory fellowship
          </h1>

          <p className="text-[20px] sm:text-[24px] text-[#CBD5E1] leading-relaxed max-w-[800px] font-body">
            We seek exceptional technologists, quantitative researchers, and former investment bankers who thrive on resolving high-stakes challenges with uncompromising intellectual rigor.
          </p>

          <div className="subpage-cta-wrap flex flex-wrap gap-4 pt-2">
            <ActionButton href="#open-roles" variant="primary" className="w-[190px]">
              View Open Roles
            </ActionButton>
            <ActionButton href="/about" variant="on-dark" className="w-[180px]">
              The Firm Culture
            </ActionButton>
          </div>
        </div>
      </section>

      {/* Core Institutional Values */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-2">
        {CAREERS_DATA.values.map((val, idx) => (
          <div key={idx} className="p-8 rounded-[24px] bg-[#0B1320] border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.4)] flex flex-col justify-between hover:border-[#C9A227]/40 transition-all duration-300">
            <div>
              <span className="text-[12px] font-mono text-[#C9A227] font-semibold block mb-3">0{idx + 1} / VALUE</span>
              <h3 className="text-[19px] font-headings font-semibold text-white mb-3">{val.title}</h3>
              <p className="text-[14px] text-[#94A3B8] leading-relaxed">{val.desc}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Open Leadership Roles */}
      <section id="open-roles" className="p-8 sm:p-12 rounded-[24px] bg-[#0B1320] border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.6)] my-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <span className="text-[11px] font-caption text-[#C9A227] uppercase tracking-wider block mb-1 font-semibold">
              CURRENT VACANCIES
            </span>
            <h2 className="text-[28px] sm:text-[36px] font-headings font-medium text-white">
              Active Partner &amp; Fellow appointments
            </h2>
          </div>
          <span className="text-[13px] font-mono text-[#C9A227] font-semibold">
            {CAREERS_DATA.openRoles.length} ACTIVE MANDATES
          </span>
        </div>

        <div className="space-y-6">
          {CAREERS_DATA.openRoles.map((role) => (
            <div
              key={role.id}
              className="p-6 sm:p-8 rounded-[20px] bg-[#070D18] border border-white/10 shadow-xs flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 hover:border-[#C9A227]/40 transition-all duration-300"
            >
              <div className="space-y-2 max-w-[760px]">
                <div className="flex flex-wrap items-center gap-3 text-[12px]">
                  <span className="font-caption text-[#C9A227] font-semibold uppercase tracking-wider">
                    {role.practice}
                  </span>
                  <span className="text-white/20">&bull;</span>
                  <span className="text-[#94A3B8]">{role.location}</span>
                </div>
                <h3 className="text-[20px] sm:text-[23px] font-headings font-medium text-white">
                  {role.title}
                </h3>
                <p className="text-[14.5px] text-[#CBD5E1] leading-relaxed">
                  {role.desc}
                </p>
                <div className="pt-2 text-[13px] font-mono text-[#C9A227] font-semibold">
                  Compensation: {role.comp}
                </div>
              </div>

              <button
                type="button"
                onClick={() => setSelectedRole(role)}
                className="inline-flex items-center justify-center h-11 px-5 rounded-lg bg-[#C9A227] text-[#050505] font-semibold text-[13px] hover:bg-[#DFBA42] shadow-[0_4px_20px_rgba(201,162,39,0.3)] transition-all shrink-0"
              >
                Apply for Mandate &rarr;
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Application Modal */}
      {selectedRole && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-[560px] rounded-[24px] bg-[#0B1320] border border-[#C9A227]/30 p-8 sm:p-10 shadow-2xl">
            <button
              onClick={() => setSelectedRole(null)}
              className="absolute top-6 right-6 text-[#94A3B8] hover:text-white transition-colors"
            >
              ✕
            </button>

            {submitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#050505] border border-[#C9A227]/50 text-[#C9A227] mx-auto flex items-center justify-center text-[24px]">
                  ✓
                </div>
                <h3 className="text-[24px] font-headings font-medium text-white">
                  Dossier Received
                </h3>
                <p className="text-[14px] text-[#CBD5E1]">
                  Your credentials have been securely transmitted to the Managing Partner. Discretion is strictly observed.
                </p>
              </div>
            ) : (
              <form onSubmit={handleApply} className="space-y-4">
                <div>
                  <span className="text-[11px] font-caption text-[#C9A227] font-semibold uppercase tracking-wider block mb-1">
                    CONFIDENTIAL APPLICATION
                  </span>
                  <h3 className="text-[20px] font-headings font-medium text-white">
                    {selectedRole.title}
                  </h3>
                  <p className="text-[13px] text-[#94A3B8] mt-1">{selectedRole.location}</p>
                </div>

                <div>
                  <label className="block text-[12px] font-caption text-[#CBD5E1] font-semibold uppercase mb-1">Full Legal Name</label>
                  <input required type="text" placeholder="Dr. Alexander Thorne" className="w-full h-11 px-4 rounded-lg bg-[#070D18] border border-white/15 text-white placeholder-[#64748B] text-[14px] focus:outline-none focus:border-[#C9A227]" />
                </div>

                <div>
                  <label className="block text-[12px] font-caption text-[#CBD5E1] font-semibold uppercase mb-1">Confidential Email</label>
                  <input required type="email" placeholder="alexander@domain.com" className="w-full h-11 px-4 rounded-lg bg-[#070D18] border border-white/15 text-white placeholder-[#64748B] text-[14px] focus:outline-none focus:border-[#C9A227]" />
                </div>

                <div>
                  <label className="block text-[12px] font-caption text-[#CBD5E1] font-semibold uppercase mb-1">LinkedIn / Dossier Link</label>
                  <input required type="url" placeholder="https://linkedin.com/in/..." className="w-full h-11 px-4 rounded-lg bg-[#070D18] border border-white/15 text-white placeholder-[#64748B] text-[14px] focus:outline-none focus:border-[#C9A227]" />
                </div>

                <div>
                  <label className="block text-[12px] font-caption text-[#CBD5E1] font-semibold uppercase mb-1">Brief Overview of Mandate Experience</label>
                  <textarea rows={3} placeholder="Highlights of M&A due diligence, low-latency systems engineering, or sovereign advisory..." className="w-full p-3 rounded-lg bg-[#070D18] border border-white/15 text-white placeholder-[#64748B] text-[14px] focus:outline-none focus:border-[#C9A227]" />
                </div>

                <button type="submit" className="w-full h-12 rounded-lg bg-[#C9A227] text-[#050505] font-semibold text-[14px] hover:bg-[#DFBA42] shadow-[0_4px_20px_rgba(201,162,39,0.35)] transition-colors">
                  Submit Candidate Dossier &rarr;
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </Layout>
  );
}
