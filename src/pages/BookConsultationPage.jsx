import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import Icon from '../components/common/Icon';
import LuxurySelect from '../components/common/LuxurySelect';
import { PRACTICES_DATA, INDUSTRIES_DATA, INVESTOR_NETWORK, COMPANY_INFO } from '../data/platformData';
import api from '../services/api';

export default function BookConsultationPage() {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
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
        phone: formData.phone,
        organization: formData.organization,
        mandate_type: `Consultation: ${formData.serviceArea} | ${formData.industry}`,
        capital_range: `${formData.investorType} (${formData.country})`,
        message: `Phone: ${formData.phone}\nCountry: ${formData.country}\nFormat: ${formData.consultationFormat}\nTimeframe: ${formData.timeframe}\nObjective:\n${formData.objective}`,
      });
      setIsBooked(true);
    } catch (err) {
      console.error('Booking submission error:', err);
      setIsBooked(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const serviceOptions = PRACTICES_DATA.map((p) => ({ value: p.title, label: p.title }));
  const industryOptions = INDUSTRIES_DATA.map((ind) => ({ value: ind.name, label: ind.name }));
  const investorOptions = [
    ...INVESTOR_NETWORK.map((inv) => ({ value: inv.type, label: inv.type })),
    { value: 'Project Developer / Sponsor', label: 'Project Developer / Sponsor' },
    { value: 'Government Entity / State Agency', label: 'Government Entity / State Agency' },
  ];
  const formatOptions = [
    { value: 'Virtual Briefing (Video Conference)', label: 'Virtual Briefing (Video Conference)' },
    { value: 'London Headquarters (124 City Road)', label: 'London Headquarters (124 City Road)' },
    { value: 'Regional Delegation Meeting', label: 'Regional Delegation Meeting' },
  ];
  const timeframeOptions = [
    { value: 'Immediate (Within 1-2 weeks)', label: 'Immediate (Within 1-2 weeks)' },
    { value: 'Medium Term (Within 1-2 months)', label: 'Medium Term (Within 1-2 months)' },
    { value: 'Strategic Planning (Next Quarter)', label: 'Strategic Planning (Next Quarter)' },
  ];

  return (
    <Layout>
      {/* Hero Header */}
      <section className="relative w-full rounded-[20px] sm:rounded-[24px] bg-[#0B1320] border border-[#C9A227]/20 p-6 sm:p-12 lg:p-16 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
        <div className="max-w-[960px] flex flex-col gap-4 sm:gap-6">
          <div className="flex items-center gap-3 text-caption text-[#C9A227]">
            <span className="w-2 h-2 rounded-full bg-[#C9A227]" />
            <span className="text-[11px] sm:text-[12px] font-sans font-semibold tracking-[0.18em] uppercase">
              Strategic Engagement
            </span>
          </div>

          <h1 className="text-[32px] sm:text-[52px] lg:text-[64px] font-headings font-medium tracking-tight text-white leading-[1.05]">
            Book an Advisory Consultation
          </h1>

          <p className="text-[16px] sm:text-[20px] text-[#CBD5E1] leading-relaxed max-w-[800px] font-body">
            Schedule an introductory consultation with our senior advisory team to discuss your project requirements, capital strategy, or expansion plans across African growth markets.
          </p>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="max-w-[880px] mx-auto p-6 sm:p-10 lg:p-14 rounded-[20px] sm:rounded-[24px] bg-[#0B1320] border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.6)] my-8">
        {isBooked ? (
          <div className="text-center py-12 space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#050505] border border-[#C9A227] text-[#C9A227] mx-auto flex items-center justify-center">
              <Icon name="Check" className="w-8 h-8 text-[#C9A227]" />
            </div>
            <h2 className="text-[26px] sm:text-[28px] font-headings font-medium text-white">
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
          <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
            <div>
              <h2 className="text-[22px] sm:text-[24px] font-headings font-medium text-white mb-1">
                Consultation Details
              </h2>
              <p className="text-[14px] text-[#94A3B8]">
                Please complete the form below. All discussions are conducted under strict professional confidentiality.
              </p>
              <div className="mt-3 flex items-center gap-2 text-[13px] text-[#CBD5E1]">
                <Icon name="Phone" className="w-4 h-4 text-[#C9A227] shrink-0" />
                <span>Direct advisory telephone desk:</span>
                <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="text-[#C9A227] hover:underline font-mono font-medium">
                  {COMPANY_INFO.phoneFormatted}
                </a>
                <span className="text-[12px] text-[#64748B] hidden sm:inline">&bull; London HQ</span>
              </div>
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
                  className="w-full h-11 px-4 rounded-lg bg-[#070D18] border border-white/15 text-white placeholder-[#64748B] text-[14px] focus:outline-none focus:border-[#C9A227] focus:ring-1 focus:ring-[#C9A227] transition-all"
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
                  className="w-full h-11 px-4 rounded-lg bg-[#070D18] border border-white/15 text-white placeholder-[#64748B] text-[14px] focus:outline-none focus:border-[#C9A227] focus:ring-1 focus:ring-[#C9A227] transition-all"
                />
              </div>
            </div>

            {/* Email & Phone Number (Added per User Request) */}
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
                  className="w-full h-11 px-4 rounded-lg bg-[#070D18] border border-white/15 text-white placeholder-[#64748B] text-[14px] focus:outline-none focus:border-[#C9A227] focus:ring-1 focus:ring-[#C9A227] transition-all"
                />
              </div>

              <div>
                <label className="block text-[12px] font-caption text-[#CBD5E1] font-semibold uppercase tracking-wider mb-2">
                  Phone Number *
                </label>
                <input
                  required
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="e.g. +44 20 7000 0000"
                  className="w-full h-11 px-4 rounded-lg bg-[#070D18] border border-white/15 text-white placeholder-[#64748B] text-[14px] focus:outline-none focus:border-[#C9A227] focus:ring-1 focus:ring-[#C9A227] transition-all"
                />
              </div>
            </div>

            {/* Country */}
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
                className="w-full h-11 px-4 rounded-lg bg-[#070D18] border border-white/15 text-white placeholder-[#64748B] text-[14px] focus:outline-none focus:border-[#C9A227] focus:ring-1 focus:ring-[#C9A227] transition-all"
              />
            </div>

            {/* Consultation Parameters (Custom Elite Dropdowns) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <LuxurySelect
                label="Advisory Focus Area"
                value={formData.serviceArea}
                onChange={(val) => setFormData((p) => ({ ...p, serviceArea: val }))}
                options={serviceOptions}
                placeholder="Select Service"
              />

              <LuxurySelect
                label="Industry Sector"
                value={formData.industry}
                onChange={(val) => setFormData((p) => ({ ...p, industry: val }))}
                options={industryOptions}
                placeholder="Select Industry"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <LuxurySelect
                label="Client / Investor Type"
                value={formData.investorType}
                onChange={(val) => setFormData((p) => ({ ...p, investorType: val }))}
                options={investorOptions}
                placeholder="Select Client Type"
              />

              <LuxurySelect
                label="Format Preference"
                value={formData.consultationFormat}
                onChange={(val) => setFormData((p) => ({ ...p, consultationFormat: val }))}
                options={formatOptions}
                placeholder="Select Format"
              />

              <LuxurySelect
                label="Target Timeframe"
                value={formData.timeframe}
                onChange={(val) => setFormData((p) => ({ ...p, timeframe: val }))}
                options={timeframeOptions}
                placeholder="Select Timeframe"
              />
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
                className="w-full p-4 rounded-lg bg-[#070D18] border border-white/15 text-white placeholder-[#64748B] text-[14px] focus:outline-none focus:border-[#C9A227] focus:ring-1 focus:ring-[#C9A227] transition-all resize-none"
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
