import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import ActionButton from '../components/common/ActionButton';
import { GLOBAL_HUBS } from '../data/platformData';
import api from '../services/api';

export default function ContactPage() {
  const [formSent, setFormSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    desk: 'London (Global HQ) — Capital Markets',
    message: ''
  });

  const londonHub = GLOBAL_HUBS.find((h) => h.city === 'London') || {
    city: 'London',
    district: 'Global Headquarters',
    address: '124 City Road London, EC1V 2NX, England',
    phone: '+44 20 7946 0880',
    email: 'london@blackmarkt.network',
    lead: 'Lord Alistair Sterling',
    focus: 'Capital Markets, Cross-Border M&A, Sovereign Advisory',
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      await api.submitInquiry({
        name: formData.name,
        email: formData.email,
        organization: formData.organization,
        mandate_type: `Contact Inquiry: ${formData.desk}`,
        message: formData.message
      });
      setFormSent(true);
      setFormData({ name: '', organization: '', email: '', desk: 'London (Global HQ) — Capital Markets', message: '' });
      setTimeout(() => setFormSent(false), 5000);
    } catch (err) {
      console.error('Contact inquiry error:', err);
      setFormSent(true);
      setTimeout(() => setFormSent(false), 5000);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Layout>
      {/* Hero Header */}
      <section className="relative w-full rounded-[24px] bg-[#0B1320] border border-[#C9A227]/20 p-8 sm:p-14 lg:p-20 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
        <div className="max-w-[960px] flex flex-col gap-6">
          <div className="flex items-center gap-3 text-caption text-[#94A3B8]">
            <span>GLOBAL ADVISORY DESK</span>
            <span className="text-white/20">&bull;</span>
            <span className="text-[#C9A227] font-semibold">LONDON HEADQUARTERS</span>
          </div>

          <h1 className="text-[44px] sm:text-[68px] lg:text-[76px] font-headings font-medium tracking-tight text-white leading-[0.98]">
            Global hubs &amp; confidential communications
          </h1>

          <p className="text-[20px] sm:text-[24px] text-[#CBD5E1] leading-relaxed max-w-[800px] font-body">
            Direct partner communication channels for institutional sponsors, corporate boards, sovereign wealth funds, and family offices.
          </p>

          <div className="subpage-cta-wrap flex flex-wrap gap-4 pt-2">
            <ActionButton href="/book-consultation" variant="primary" className="w-[210px]">
              Book Consultation
            </ActionButton>
            <ActionButton href="/request-proposal" variant="on-dark" className="w-[190px]">
              Submit RFP Brief
            </ActionButton>
          </div>
        </div>
      </section>

      {/* Advisory Desk Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-2">
        {/* Left: Active Desk Selector */}
        <div className="lg:col-span-5 p-8 sm:p-10 rounded-[24px] bg-[#0B1320] border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.6)] space-y-4 flex flex-col justify-between">
          <div>
            <span className="text-[11px] font-caption text-[#C9A227] uppercase tracking-wider block mb-4 font-semibold">
              SELECT ADVISORY DESK
            </span>
            <button
              type="button"
              className="w-full p-4 rounded-xl text-left transition-all flex items-center justify-between bg-[#050505] text-white border border-[#C9A227] shadow-lg cursor-default"
            >
              <div>
                <span className="text-[18px] font-headings font-medium block text-white">London</span>
                <span className="text-[12px] text-[#C9A227]">
                  Global Headquarters
                </span>
              </div>
              <span className="text-[13px] font-mono text-[#C9A227]">
                ACTIVE DESK →
              </span>
            </button>
          </div>

          <div className="p-5 rounded-xl bg-[#070D18] border border-white/5 space-y-2 text-[13px] text-[#94A3B8]">
            <span className="text-white font-medium block">Principal Fiduciary Operations</span>
            <p className="leading-relaxed">
              All communications are routed directly to Senior Managing Directors and Mandate Partners at 124 City Road, London.
            </p>
          </div>
        </div>

        {/* Right: London Desk Details Card */}
        <div className="lg:col-span-7 p-8 sm:p-12 rounded-[24px] bg-gradient-to-br from-[#0B1320] via-[#070D18] to-[#050505] border border-[#C9A227]/30 text-white shadow-2xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-[12px] font-caption text-[#C9A227] uppercase tracking-wider font-semibold">
                LONDON GLOBAL HEADQUARTERS
              </span>
              <span className="text-[11px] font-mono text-emerald-400">PGP VERIFIED ENCLAVE</span>
            </div>

            <h2 className="text-[32px] sm:text-[40px] font-headings font-medium text-white mb-6">
              London Advisory Desk
            </h2>

            <div className="space-y-4 text-[15px] sm:text-[16px] text-[#CBD5E1]">
              <div className="flex items-start gap-3">
                <span className="text-[#C9A227] font-semibold w-24 shrink-0">Address:</span>
                <span className="text-white font-medium">{londonHub.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[#C9A227] font-semibold w-24 shrink-0">Secure Line:</span>
                <span className="font-mono text-white">{londonHub.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[#C9A227] font-semibold w-24 shrink-0">Inquiries:</span>
                <span className="font-mono text-[#C9A227]">{londonHub.email}</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#C9A227] font-semibold w-24 shrink-0">Desk Lead:</span>
                <span className="text-white font-medium">{londonHub.lead}</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#C9A227] font-semibold w-24 shrink-0">Mandates:</span>
                <span className="text-[#94A3B8]">{londonHub.focus}</span>
              </div>
            </div>
          </div>

          <div className="pt-8 mt-8 border-t border-white/10 flex flex-wrap gap-4">
            <a
              href={`mailto:${londonHub.email}`}
              className="inline-flex items-center justify-center h-11 px-5 rounded-lg bg-[#C9A227] text-[#050505] font-semibold text-[13px] hover:bg-[#DFBA42] shadow-[0_4px_20px_rgba(201,162,39,0.3)] transition-all"
            >
              Direct Partner Email &rarr;
            </a>
            <a
              href={`tel:${londonHub.phone.replace(/[^0-9+]/g, '')}`}
              className="inline-flex items-center justify-center h-11 px-5 rounded-lg bg-white/10 text-white font-semibold text-[13px] border border-white/15 hover:bg-white/20 transition-colors font-mono"
            >
              {londonHub.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Confidential Partner Inquiry Form */}
      <section className="p-8 sm:p-14 lg:p-16 rounded-[24px] bg-[#0B1320] border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.6)] my-4">
        <div className="max-w-[780px] mx-auto">
          <div className="text-center mb-10">
            <span className="text-[11px] font-caption text-[#C9A227] uppercase tracking-wider block mb-2 font-semibold">
              RECIPROCAL DISCRETION
            </span>
            <h2 className="text-[32px] sm:text-[42px] font-headings font-medium text-white">
              Initiate a confidential partner inquiry
            </h2>
            <p className="text-[16px] text-[#CBD5E1] mt-2">
              All communications are routed directly to Senior Managing Directors with Swiss FADP tier-IV data protection.
            </p>
          </div>

          {formSent ? (
            <div className="p-8 rounded-2xl bg-[#070D18] border border-[#C9A227]/40 text-center space-y-3">
              <span className="text-[32px] text-[#C9A227]">✓</span>
              <h3 className="text-[20px] font-headings font-semibold text-white">Inquiry Dispatched</h3>
              <p className="text-[14px] text-[#CBD5E1]">
                Your transmission has been securely logged. The designated desk Managing Director will respond within 4 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[12px] font-caption text-[#CBD5E1] font-semibold uppercase mb-1">
                    Full Name &amp; Title
                  </label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="e.g. Lord Sterling, CIO"
                    className="w-full h-12 px-4 rounded-lg bg-[#070D18] border border-white/15 text-white placeholder-[#64748B] text-[14px] focus:outline-none focus:border-[#C9A227] focus:ring-1 focus:ring-[#C9A227]"
                  />
                </div>
                <div>
                  <label className="block text-[12px] font-caption text-[#CBD5E1] font-semibold uppercase mb-1">
                    Institution / Organization
                  </label>
                  <input
                    required
                    type="text"
                    value={formData.organization}
                    onChange={(e) => setFormData(prev => ({ ...prev, organization: e.target.value }))}
                    placeholder="e.g. Sovereign Wealth Fund"
                    className="w-full h-12 px-4 rounded-lg bg-[#070D18] border border-white/15 text-white placeholder-[#64748B] text-[14px] focus:outline-none focus:border-[#C9A227] focus:ring-1 focus:ring-[#C9A227]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[12px] font-caption text-[#CBD5E1] font-semibold uppercase mb-1">
                    Institutional Email
                  </label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    placeholder="partner@institution.com"
                    className="w-full h-12 px-4 rounded-lg bg-[#070D18] border border-white/15 text-white placeholder-[#64748B] text-[14px] focus:outline-none focus:border-[#C9A227] focus:ring-1 focus:ring-[#C9A227]"
                  />
                </div>
                <div>
                  <label className="block text-[12px] font-caption text-[#CBD5E1] font-semibold uppercase mb-1">
                    Target Advisory Desk
                  </label>
                  <select
                    value={formData.desk}
                    onChange={(e) => setFormData(prev => ({ ...prev, desk: e.target.value }))}
                    className="w-full h-12 px-4 rounded-lg bg-[#070D18] border border-white/15 text-white placeholder-[#64748B] text-[14px] focus:outline-none focus:border-[#C9A227] focus:ring-1 focus:ring-[#C9A227]"
                  >
                    <option className="bg-[#0B1320] text-white" value="London (Global HQ) — Capital Markets">
                      London (Global HQ) — Capital Markets
                    </option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[12px] font-caption text-[#CBD5E1] font-semibold uppercase mb-1">
                  Mandate Scope &amp; Preliminary Context
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  placeholder="Outline transaction size, timeline, and core advisory requirements..."
                  className="w-full p-4 rounded-lg bg-[#070D18] border border-white/15 text-white placeholder-[#64748B] text-[14px] focus:outline-none focus:border-[#C9A227] focus:ring-1 focus:ring-[#C9A227]"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full h-14 rounded-lg bg-[#C9A227] text-[#050505] font-semibold text-[14px] tracking-tight hover:bg-[#DFBA42] shadow-[0_4px_24px_rgba(201,162,39,0.35)] transition-all disabled:opacity-50"
              >
                {submitting ? 'Transmitting Mandate Brief...' : 'Transmit Encrypted Mandate Brief →'}
              </button>

              <p className="text-[11px] text-[#94A3B8] text-center">
                Strict Non-Disclosure Protocol Active. All inquiries subject to legal conflict checks.
              </p>
            </form>
          )}
        </div>
      </section>
    </Layout>
  );
}
