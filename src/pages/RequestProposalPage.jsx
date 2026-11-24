import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import Icon from '../components/common/Icon';
import LuxurySelect from '../components/common/LuxurySelect';
import { PRACTICES_DATA, INDUSTRIES_DATA, COMPANY_INFO } from '../data/platformData';
import api from '../services/api';

export default function RequestProposalPage() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    organization: '',
    contactName: '',
    email: '',
    phone: '',
    country: '',
    practiceArea: PRACTICES_DATA[0].title,
    industry: INDUSTRIES_DATA[0].name,
    scopeSummary: '',
    ndaAcknowledged: false,
  });

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
        name: formData.contactName,
        email: formData.email,
        phone: formData.phone,
        organization: formData.organization,
        mandate_type: `RFP: ${formData.practiceArea}`,
        capital_range: `${formData.industry} (${formData.country})`,
        message: `Phone: ${formData.phone}\nCountry: ${formData.country}\n\n${formData.scopeSummary}`,
      });
      setSubmitted(true);
    } catch (err) {
      console.error('RFP submission error:', err);
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const serviceOptions = PRACTICES_DATA.map((p) => ({ value: p.title, label: p.title }));
  const industryOptions = INDUSTRIES_DATA.map((ind) => ({ value: ind.name, label: ind.name }));

  return (
    <Layout>
      {/* Hero Header */}
      <section className="relative w-full rounded-[20px] sm:rounded-[24px] bg-[#0B1320] border border-[#C9A227]/20 p-6 sm:p-12 lg:p-16 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
        <div className="max-w-[960px] flex flex-col gap-4 sm:gap-6">
          <div className="flex items-center gap-3 text-caption text-[#C9A227]">
            <span className="w-2 h-2 rounded-full bg-[#C9A227]" />
            <span className="text-[11px] sm:text-[12px] font-sans font-semibold tracking-[0.18em] uppercase">
              Formal Engagement
            </span>
          </div>

          <h1 className="text-[32px] sm:text-[52px] lg:text-[64px] font-headings font-medium tracking-tight text-white leading-[1.05]">
            Submit a Request for Proposal (RFP)
          </h1>

          <p className="text-[16px] sm:text-[20px] text-[#CBD5E1] leading-relaxed max-w-[800px] font-body">
            Provide transaction specifications, advisory requirements, or project scopes. Our advisory committee will review your brief and respond with a formal proposal.
          </p>
        </div>
      </section>

      {/* RFP Submission Form */}
      <section className="max-w-[840px] mx-auto p-6 sm:p-10 lg:p-14 rounded-[20px] sm:rounded-[24px] bg-[#0B1320] border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.6)] my-8">
        {submitted ? (
          <div className="text-center py-12 space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#050505] border border-[#C9A227] text-[#C9A227] mx-auto flex items-center justify-center">
              <Icon name="Check" className="w-8 h-8 text-[#C9A227]" />
            </div>
            <h2 className="text-[26px] sm:text-[28px] font-headings font-medium text-white">
              Proposal Request Received
            </h2>
            <p className="text-[15px] text-[#CBD5E1] max-w-[500px] mx-auto leading-relaxed">
              Thank you for submitting your mandate brief to Black Markt Network Consultancy. Our team will review the parameters and reach out within 2 business days.
            </p>
            <div className="pt-4">
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="px-6 py-2.5 rounded-lg bg-[#C9A227] text-black font-semibold text-[13px] hover:bg-[#DFBA42] transition-colors cursor-pointer"
              >
                Submit Another Brief
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
            <div>
              <h2 className="text-[22px] sm:text-[24px] font-headings font-medium text-white mb-1">
                Mandate Information
              </h2>
              <p className="text-[14px] text-[#94A3B8]">
                Please outline the key parameters of the advisory mandate.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-[12px] font-caption text-[#CBD5E1] font-semibold uppercase tracking-wider mb-2">
                  Client / Procuring Entity *
                </label>
                <input
                  required
                  type="text"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  placeholder="e.g. Apex Horizon Capital"
                  className="w-full h-11 px-4 rounded-lg bg-[#070D18] border border-white/15 text-white placeholder-[#64748B] text-[14px] focus:outline-none focus:border-[#C9A227] focus:ring-1 focus:ring-[#C9A227] transition-all"
                />
              </div>

              <div>
                <label className="block text-[12px] font-caption text-[#CBD5E1] font-semibold uppercase tracking-wider mb-2">
                  Contact Officer *
                </label>
                <input
                  required
                  type="text"
                  name="contactName"
                  value={formData.contactName}
                  onChange={handleChange}
                  placeholder="e.g. Sarah Jenkins"
                  className="w-full h-11 px-4 rounded-lg bg-[#070D18] border border-white/15 text-white placeholder-[#64748B] text-[14px] focus:outline-none focus:border-[#C9A227] focus:ring-1 focus:ring-[#C9A227] transition-all"
                />
              </div>
            </div>

            {/* Email & Phone */}
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
                  placeholder="e.g. s.jenkins@apexhorizon.com"
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

            <div>
              <label className="block text-[12px] font-caption text-[#CBD5E1] font-semibold uppercase tracking-wider mb-2">
                Country / Market *
              </label>
              <input
                required
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                placeholder="e.g. United Kingdom"
                className="w-full h-11 px-4 rounded-lg bg-[#070D18] border border-white/15 text-white placeholder-[#64748B] text-[14px] focus:outline-none focus:border-[#C9A227] focus:ring-1 focus:ring-[#C9A227] transition-all"
              />
            </div>

            {/* Custom Elite Dropdowns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <LuxurySelect
                label="Advisory Service Scope"
                value={formData.practiceArea}
                onChange={(val) => setFormData((p) => ({ ...p, practiceArea: val }))}
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

            <div>
              <label className="block text-[12px] font-caption text-[#CBD5E1] font-semibold uppercase tracking-wider mb-2">
                Scope Summary &amp; Deliverables *
              </label>
              <textarea
                required
                rows={4}
                name="scopeSummary"
                value={formData.scopeSummary}
                onChange={handleChange}
                placeholder="Describe the required advisory deliverables, transaction structure, or evaluation criteria..."
                className="w-full p-4 rounded-lg bg-[#070D18] border border-white/15 text-white placeholder-[#64748B] text-[14px] focus:outline-none focus:border-[#C9A227] focus:ring-1 focus:ring-[#C9A227] transition-all resize-none"
              />
            </div>

            {/* Custom Checkbox */}
            <div className="flex items-start gap-3 pt-1">
              <input
                required
                type="checkbox"
                id="rfp-nda"
                name="ndaAcknowledged"
                checked={formData.ndaAcknowledged}
                onChange={handleChange}
                className="mt-1 w-4 h-4 rounded border-white/30 bg-[#050505] text-[#C9A227] focus:ring-[#C9A227] focus:ring-offset-0 accent-[#C9A227] cursor-pointer"
              />
              <label htmlFor="rfp-nda" className="text-[13px] text-[#94A3B8] leading-snug cursor-pointer">
                I confirm that this submission is an authorized mandate inquiry and agree to Black Markt Network Consultancy handling the details confidentially.
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
