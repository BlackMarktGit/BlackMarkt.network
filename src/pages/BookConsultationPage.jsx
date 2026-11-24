import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import Icon from '../components/common/Icon';
import { PRACTICES_DATA, INDUSTRIES_DATA, INVESTOR_NETWORK, COMPANY_INFO } from '../data/platformData';
import api from '../services/api';

export default function BookConsultationPage() {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    country: '',
    serviceArea: PRACTICES_DATA[0].title,
    industry: INDUSTRIES_DATA[0].name,
    investorType: INVESTOR_NETWORK[0].type,
    consultationFormat: 'Virtual Briefing (Video Conference)',
    timeframe: 'Immediate (Within 1-2 weeks)',
    objective: '',
    confidentialityAgreed: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isBooked, setIsBooked] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await api.submitInquiry({
        name: formData.name,
        email: formData.email,
        organization: formData.organization,
        mandate_type: `Consultation: ${formData.serviceArea} | ${formData.industry}`,
        capital_range: `${formData.investorType} (${formData.country})`,
        message: `Format: ${formData.consultationFormat}\nTimeframe: ${formData.timeframe}\nObjective:\n${formData.objective}`,
      });
      setIsBooked(true);
    } catch (err) {
      console.error('Booking submission error:', err);
      setIsBooked(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      {/* Hero Header */}
      <section className="relative w-full rounded-[24px] bg-[#0B1320] border border-[#C9A227]/20 p-8 sm:p-14 lg:p-20 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
        <div className="max-w-[960px] flex flex-col gap-6">
          <div className="flex items-center gap-3 text-caption text-[#C9A227]">
            <span className="w-2 h-2 rounded-full bg-[#C9A227]" />
            <span className="text-[11px] sm:text-[12px] font-sans font-semibold tracking-[0.18em] uppercase">
              Strategic Engagement
            </span>
          </div>

          <h1 className="text-[40px] sm:text-[60px] lg:text-[70px] font-headings font-medium tracking-tight text-white leading-[1.02]">
            Book an Advisory Consultation
          </h1>

          <p className="text-[18px] sm:text-[22px] text-[#CBD5E1] leading-relaxed max-w-[800px] font-body">
            Schedule an introductory consultation with our senior advisory team to discuss your project requirements, capital strategy, or expansion plans across African growth markets.
          </p>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="max-w-[880px] mx-auto p-8 sm:p-12 lg:p-16 rounded-[24px] bg-[#0B1320] border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.6)] my-8">
        {isBooked ? (
          <div className="text-center py-12 space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#050505] border border-[#C9A227] text-[#C9A227] mx-auto flex items-center justify-center">
              <Icon name="Check" className="w-8 h-8 text-[#C9A227]" />
            </div>
            <h2 className="text-[28px] font-headings font-medium text-white">
              Consultation Request Submitted
            </h2>
            <p className="text-[15px] text-[#CBD5E1] max-w-[500px] mx-auto leading-relaxed">
              Thank you for scheduling with Black Markt Network Consultancy. Our advisory team will review your mandate parameters and contact you to coordinate dates and briefing materials.
            </p>
            <div className="pt-4">
              <button
                type="button"
                onClick={() => setIsBooked(false)}
                className="px-6 py-2.5 rounded-lg bg-[#C9A227] text-black font-semibold text-[13px] hover:bg-[#DFBA42] transition-colors cursor-pointer"
              >
                Submit Another Request
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <h2 className="text-[24px] font-headings font-medium text-white mb-1">
                Consultation Details
              </h2>
              <p className="text-[14px] text-[#94A3B8]">
                Please complete the form below. All discussions are conducted under strict professional confidentiality.
              </p>
            </div>

            {/* Entity & Contact Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-[12px] font-caption text-[#CBD5E1] font-semibold uppercase tracking-wider mb-2">
                  Full Name *
                </label>
                <input
                  required
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. David Mensah"
                  className="w-full h-11 px-4 rounded-lg bg-[#050505] border border-white/15 text-white placeholder-[#64748B] text-[14px] focus:outline-none focus:border-[#C9A227] focus:ring-1 focus:ring-[#C9A227] transition-all"
                />
              </div>

              <div>
                <label className="block text-[12px] font-caption text-[#CBD5E1] font-semibold uppercase tracking-wider mb-2">
                  Organisation / Company *
                </label>
                <input
                  required
                  type="text"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  placeholder="e.g. Zenith Infrastructure Ltd"
                  className="w-full h-11 px-4 rounded-lg bg-[#050505] border border-white/15 text-white placeholder-[#64748B] text-[14px] focus:outline-none focus:border-[#C9A227] focus:ring-1 focus:ring-[#C9A227] transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-[12px] font-caption text-[#CBD5E1] font-semibold uppercase tracking-wider mb-2">
                  Corporate Email *
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. d.mensah@zenith.com"
                  className="w-full h-11 px-4 rounded-lg bg-[#050505] border border-white/15 text-white placeholder-[#64748B] text-[14px] focus:outline-none focus:border-[#C9A227] focus:ring-1 focus:ring-[#C9A227] transition-all"
                />
              </div>

              <div>
                <label className="block text-[12px] font-caption text-[#CBD5E1] font-semibold uppercase tracking-wider mb-2">
                  Country / Operating Market *
                </label>
                <input
                  required
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  placeholder="e.g. Ghana, South Africa, United Kingdom"
                  className="w-full h-11 px-4 rounded-lg bg-[#050505] border border-white/15 text-white placeholder-[#64748B] text-[14px] focus:outline-none focus:border-[#C9A227] focus:ring-1 focus:ring-[#C9A227] transition-all"
                />
              </div>
            </div>

            {/* Consultation Parameters */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-[12px] font-caption text-[#CBD5E1] font-semibold uppercase tracking-wider mb-2">
                  Advisory Focus Area
                </label>
                <select
                  name="serviceArea"
                  value={formData.serviceArea}
                  onChange={handleChange}
                  className="w-full h-11 px-3 rounded-lg bg-[#050505] border border-white/15 text-white text-[14px] focus:outline-none focus:border-[#C9A227] focus:ring-1 focus:ring-[#C9A227] transition-all"
                >
                  {PRACTICES_DATA.map((p) => (
                    <option key={p.slug} value={p.title} className="bg-[#0B1320] text-white">
                      {p.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[12px] font-caption text-[#CBD5E1] font-semibold uppercase tracking-wider mb-2">
                  Industry Sector
                </label>
                <select
                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
                  className="w-full h-11 px-3 rounded-lg bg-[#050505] border border-white/15 text-white text-[14px] focus:outline-none focus:border-[#C9A227] focus:ring-1 focus:ring-[#C9A227] transition-all"
                >
                  {INDUSTRIES_DATA.map((ind) => (
                    <option key={ind.slug} value={ind.name} className="bg-[#0B1320] text-white">
                      {ind.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div>
                <label className="block text-[12px] font-caption text-[#CBD5E1] font-semibold uppercase tracking-wider mb-2">
                  Client / Investor Type
                </label>
                <select
                  name="investorType"
                  value={formData.investorType}
                  onChange={handleChange}
                  className="w-full h-11 px-3 rounded-lg bg-[#050505] border border-white/15 text-white text-[14px] focus:outline-none focus:border-[#C9A227] focus:ring-1 focus:ring-[#C9A227] transition-all"
                >
                  {INVESTOR_NETWORK.map((inv) => (
                    <option key={inv.type} value={inv.type} className="bg-[#0B1320] text-white">
                      {inv.type}
                    </option>
                  ))}
                  <option value="Project Developer / Sponsor" className="bg-[#0B1320] text-white">
                    Project Developer / Sponsor
                  </option>
                  <option value="Government Entity / State Agency" className="bg-[#0B1320] text-white">
                    Government Entity / State Agency
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-[12px] font-caption text-[#CBD5E1] font-semibold uppercase tracking-wider mb-2">
                  Format Preference
                </label>
                <select
                  name="consultationFormat"
                  value={formData.consultationFormat}
                  onChange={handleChange}
                  className="w-full h-11 px-3 rounded-lg bg-[#050505] border border-white/15 text-white text-[14px] focus:outline-none focus:border-[#C9A227] focus:ring-1 focus:ring-[#C9A227] transition-all"
                >
                  <option className="bg-[#0B1320] text-white">Virtual Briefing (Video Conference)</option>
                  <option className="bg-[#0B1320] text-white">London Headquarters (124 City Road)</option>
                  <option className="bg-[#0B1320] text-white">Regional Delegation Meeting</option>
                </select>
              </div>

              <div>
                <label className="block text-[12px] font-caption text-[#CBD5E1] font-semibold uppercase tracking-wider mb-2">
                  Target Timeframe
                </label>
                <select
                  name="timeframe"
                  value={formData.timeframe}
                  onChange={handleChange}
                  className="w-full h-11 px-3 rounded-lg bg-[#050505] border border-white/15 text-white text-[14px] focus:outline-none focus:border-[#C9A227] focus:ring-1 focus:ring-[#C9A227] transition-all"
                >
                  <option className="bg-[#0B1320] text-white">Immediate (Within 1-2 weeks)</option>
                  <option className="bg-[#0B1320] text-white">Medium Term (Within 1-2 months)</option>
                  <option className="bg-[#0B1320] text-white">Strategic Planning (Next Quarter)</option>
                </select>
              </div>
            </div>

            {/* Objective */}
            <div>
              <label className="block text-[12px] font-caption text-[#CBD5E1] font-semibold uppercase tracking-wider mb-2">
                Mandate Objectives &amp; Background *
              </label>
              <textarea
                required
                rows={4}
                name="objective"
                value={formData.objective}
                onChange={handleChange}
                placeholder="Briefly outline your transaction objectives, capital requirements, or strategic considerations..."
                className="w-full p-4 rounded-lg bg-[#050505] border border-white/15 text-white placeholder-[#64748B] text-[14px] focus:outline-none focus:border-[#C9A227] focus:ring-1 focus:ring-[#C9A227] transition-all resize-none"
              />
            </div>

            {/* Custom Dark/Gold Checkbox */}
            <div className="flex items-start gap-3 pt-1">
              <input
                required
                type="checkbox"
                id="consultation-nda"
                name="confidentialityAgreed"
                checked={formData.confidentialityAgreed}
                onChange={handleChange}
                className="mt-1 w-4 h-4 rounded border-white/30 bg-[#050505] text-[#C9A227] focus:ring-[#C9A227] focus:ring-offset-0 accent-[#C9A227] cursor-pointer"
              />
              <label htmlFor="consultation-nda" className="text-[13px] text-[#94A3B8] leading-snug cursor-pointer">
                I understand that this consultation request is subject to mutual professional discretion and that Black Markt Network Consultancy maintains strict confidentiality over all client information.
              </label>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto h-12 px-8 rounded-lg bg-[#C9A227] text-black font-semibold text-[14px] hover:bg-[#DFBA42] shadow-[0_4px_20px_rgba(201,162,39,0.3)] transition-all cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
              </button>
            </div>
          </form>
        )}
      </section>
    </Layout>
  );
}
