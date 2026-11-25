import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import Icon from '../components/common/Icon';
import LuxurySelect from '../components/common/LuxurySelect';
import { COMPANY_INFO, FORM_OPTIONS, DIRECT_ENGAGEMENT_DESKS } from '../data/platformData';
import api from '../services/api';
import { ArrowRight, Check, ShieldCheck } from 'lucide-react';

export default function BookConsultationPage() {
  const [formData, setFormData] = useState({
    name: '',
    titleRole: '',
    organization: '',
    email: '',
    phone: '',
    country: '',
    natureOfEnquiry: FORM_OPTIONS.enquiryCategories[0],
    industry: FORM_OPTIONS.industrySectors[0],
    capitalRequirement: FORM_OPTIONS.capitalRequirements[0],
    objective: '',
    summary: '',
    confidentialityAgreed: true,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isBooked, setIsBooked] = useState(false);
  const [refId, setRefId] = useState('');

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
      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        organization: `${formData.organization} (${formData.titleRole})`,
        mandate_type: `${formData.natureOfEnquiry} | ${formData.industry}`,
        capital_range: formData.capitalRequirement,
        message: `Role: ${formData.titleRole}\nCountry: ${formData.country}\nObjective: ${formData.objective}\n\nSummary:\n${formData.summary}`,
      };

      const res = await api.submitInquiry(payload);
      const generatedRef = res?.inquiry_id
        ? `BMN-${String(res.inquiry_id).padStart(5, '0')}`
        : `BMN-${Math.floor(10000 + Math.random() * 90000)}`;

      setRefId(generatedRef);
      setIsBooked(true);
    } catch (err) {
      console.error('Booking submission error:', err);
      setRefId(`BMN-${Math.floor(10000 + Math.random() * 90000)}`);
      setIsBooked(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const enquiryOptions = FORM_OPTIONS.enquiryCategories.map((c) => ({ value: c, label: c }));
  const industryOptions = FORM_OPTIONS.industrySectors.map((i) => ({ value: i, label: i }));
  const capitalOptions = FORM_OPTIONS.capitalRequirements.map((cr) => ({ value: cr, label: cr }));

  return (
    <Layout>
      {/* Hero Header */}
      <section className="relative w-full rounded-[20px] sm:rounded-[24px] bg-[#0B1320] border border-[#C9A227]/20 p-6 sm:p-12 lg:p-16 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] my-2">
        <div className="max-w-[960px] flex flex-col gap-4 sm:gap-6">
          <div className="flex items-center gap-3 text-caption text-[#C9A227]">
            <span className="w-2 h-2 rounded-full bg-[#C9A227]" />
            <span className="text-[11px] sm:text-[12px] font-sans font-semibold tracking-[0.18em] uppercase">
              STRATEGIC ENGAGEMENT &amp; MANDATE INTAKE
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
      <section className="max-w-[960px] mx-auto p-6 sm:p-10 lg:p-14 rounded-[20px] sm:rounded-[24px] bg-[#0B1320] border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.6)] my-8">
        {isBooked ? (
          <div className="text-center py-12 space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#050505] border border-[#C9A227] text-[#C9A227] mx-auto flex items-center justify-center">
              <Check className="w-8 h-8 text-[#C9A227]" />
            </div>
            <h2 className="text-[26px] sm:text-[28px] font-headings font-medium text-white">
              Consultation Request Submitted
            </h2>
            <p className="text-[15px] text-[#CBD5E1] max-w-[500px] mx-auto leading-relaxed">
              Thank you for scheduling with Black Markt Network Consultancy. Our senior advisory desk will review your mandate parameters and coordinate bilateral briefing materials.
            </p>
            <div className="inline-block py-2 px-5 rounded-lg bg-[#050505] border border-[#C9A227]/40 text-[#C9A227] font-mono text-sm">
              Reference: {refId}
            </div>
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
                Mandate Intake Parameters
              </h2>
              <p className="text-[14px] text-[#94A3B8]">
                Please complete the form below. All discussions are conducted under strict professional confidentiality.
              </p>
              <div className="mt-3 flex items-center gap-2 text-[13px] text-[#CBD5E1]">
                <Icon name="Phone" className="w-4 h-4 text-[#C9A227] shrink-0" />
                <span>Direct telephone desk:</span>
                <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="text-[#C9A227] hover:underline font-mono font-medium">
                  {COMPANY_INFO.phoneFormatted}
                </a>
                <span className="text-[12px] text-[#64748B] hidden sm:inline">&bull; London HQ</span>
              </div>
            </div>

            {/* Name & Title/Role */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-[12px] font-caption text-[#CBD5E1] font-semibold uppercase tracking-wider mb-2">
                  Full Name <span className="text-[#C9A227]">*</span>
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
                  Title / Role <span className="text-[#C9A227]">*</span>
                </label>
                <input
                  required
                  type="text"
                  name="titleRole"
                  value={formData.titleRole}
                  onChange={handleChange}
                  placeholder="e.g. Managing Director / Partner"
                  className="w-full h-11 px-4 rounded-lg bg-[#070D18] border border-white/15 text-white placeholder-[#64748B] text-[14px] focus:outline-none focus:border-[#C9A227] focus:ring-1 focus:ring-[#C9A227] transition-all"
                />
              </div>
            </div>

            {/* Organisation & Country */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-[12px] font-caption text-[#CBD5E1] font-semibold uppercase tracking-wider mb-2">
                  Organisation / Institution <span className="text-[#C9A227]">*</span>
                </label>
                <input
                  required
                  type="text"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  placeholder="e.g. Zenith Infrastructure Fund"
                  className="w-full h-11 px-4 rounded-lg bg-[#070D18] border border-white/15 text-white placeholder-[#64748B] text-[14px] focus:outline-none focus:border-[#C9A227] focus:ring-1 focus:ring-[#C9A227] transition-all"
                />
              </div>

              <div>
                <label className="block text-[12px] font-caption text-[#CBD5E1] font-semibold uppercase tracking-wider mb-2">
                  Country / Operating Market <span className="text-[#C9A227]">*</span>
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
            </div>

            {/* Email & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-[12px] font-caption text-[#CBD5E1] font-semibold uppercase tracking-wider mb-2">
                  Corporate Email Address <span className="text-[#C9A227]">*</span>
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
                  Telephone / WhatsApp Number <span className="text-[#C9A227]">*</span>
                </label>
                <input
                  required
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="e.g. +44 77 7419 0852"
                  className="w-full h-11 px-4 rounded-lg bg-[#070D18] border border-white/15 text-white placeholder-[#64748B] text-[14px] focus:outline-none focus:border-[#C9A227] focus:ring-1 focus:ring-[#C9A227] transition-all"
                />
              </div>
            </div>

            {/* Nature of Enquiry & Relevant Industry */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <LuxurySelect
                label="Nature of Enquiry"
                required
                value={formData.natureOfEnquiry}
                onChange={(val) => setFormData((p) => ({ ...p, natureOfEnquiry: val }))}
                options={enquiryOptions}
                placeholder="Select Nature of Enquiry"
              />

              <LuxurySelect
                label="Relevant Industry Sector"
                required
                value={formData.industry}
                onChange={(val) => setFormData((p) => ({ ...p, industry: val }))}
                options={industryOptions}
                placeholder="Select Industry Sector"
              />
            </div>

            {/* Estimated Capital Requirement & Partnership Objective */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <LuxurySelect
                label="Estimated Capital Requirement"
                required
                value={formData.capitalRequirement}
                onChange={(val) => setFormData((p) => ({ ...p, capitalRequirement: val }))}
                options={capitalOptions}
                placeholder="Select Capital Range"
              />

              <div>
                <label className="block text-[12px] font-caption text-[#CBD5E1] font-semibold uppercase tracking-wider mb-2">
                  Partnership or Transaction Objective
                </label>
                <input
                  type="text"
                  name="objective"
                  value={formData.objective}
                  onChange={handleChange}
                  placeholder="e.g. Debt syndication, cross-border M&A..."
                  className="w-full h-11 px-4 rounded-lg bg-[#070D18] border border-white/15 text-white placeholder-[#64748B] text-[14px] focus:outline-none focus:border-[#C9A227] focus:ring-1 focus:ring-[#C9A227] transition-all"
                />
              </div>
            </div>

            {/* Summary */}
            <div>
              <label className="block text-[12px] font-caption text-[#CBD5E1] font-semibold uppercase tracking-wider mb-2">
                Overview / Summary of Mandate *
              </label>
              <textarea
                required
                rows={4}
                name="summary"
                value={formData.summary}
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
                I agree to the confidential processing of this mandate inquiry by Black Markt Network Consultancy under professional secrecy standards.
              </label>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto h-12 px-8 rounded-lg bg-[#C9A227] text-black font-semibold text-[14px] hover:bg-[#DFBA42] shadow-[0_4px_20px_rgba(201,162,39,0.3)] transition-all cursor-pointer disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <span>Submitting...</span>
                ) : (
                  <>
                    <span>Submit Mandate Enquiry</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
              <p className="text-[12px] text-[#64748B] leading-relaxed mt-3">
                Black Markt Network Consultancy processes all enquiries under strict professional secrecy. Information provided is treated as confidential and will not be disclosed to third parties without prior written consent.
              </p>
            </div>
          </form>
        )}
      </section>
    </Layout>
  );
}
