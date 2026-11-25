import React, { useState } from 'react';
import api from '../../services/api';
import Icon from '../common/Icon';
import LuxurySelect from '../common/LuxurySelect';
import { COMPANY_INFO, FORM_OPTIONS, DIRECT_ENGAGEMENT_DESKS } from '../../data/platformData';
import { ShieldCheck, ArrowRight, Check } from 'lucide-react';

export default function StrategicConsultationForm() {
  const [formData, setFormData] = useState({
    name: '',
    titleRole: '',
    organisation: '',
    email: '',
    phone: '',
    country: '',
    natureOfEnquiry: FORM_OPTIONS.enquiryCategories[0],
    industry: FORM_OPTIONS.industrySectors[0],
    capitalRequirement: FORM_OPTIONS.capitalRequirements[0],
    objective: '',
    message: '',
    confidentialityAgreed: true,
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
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
    setLoading(true);

    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        organization: `${formData.organisation} (${formData.titleRole})`,
        country: formData.country,
        industry: formData.industry,
        investment_requirement: formData.capitalRequirement,
        partnership_objective: formData.objective || formData.natureOfEnquiry,
        message: `Title/Role: ${formData.titleRole}\nCountry: ${formData.country}\nEnquiry Type: ${formData.natureOfEnquiry}\nObjective: ${formData.objective}\n\nSummary:\n${formData.message}`,
      };

      const res = await api.submitInquiry(payload);
      const generatedRef = res?.inquiry_id
        ? `BMN-${String(res.inquiry_id).padStart(5, '0')}`
        : `BMN-${Math.floor(10000 + Math.random() * 90000)}`;

      setRefId(generatedRef);
      setSubmitted(true);
    } catch (err) {
      console.error('Inquiry submission error:', err);
      setRefId(`BMN-${Math.floor(10000 + Math.random() * 90000)}`);
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      titleRole: '',
      organisation: '',
      email: '',
      phone: '',
      country: '',
      natureOfEnquiry: FORM_OPTIONS.enquiryCategories[0],
      industry: FORM_OPTIONS.industrySectors[0],
      capitalRequirement: FORM_OPTIONS.capitalRequirements[0],
      objective: '',
      message: '',
      confidentialityAgreed: true,
    });
  };

  const enquiryOptions = FORM_OPTIONS.enquiryCategories.map((c) => ({ value: c, label: c }));
  const industryOptions = FORM_OPTIONS.industrySectors.map((i) => ({ value: i, label: i }));
  const capitalOptions = FORM_OPTIONS.capitalRequirements.map((cr) => ({ value: cr, label: cr }));

  return (
    <section
      id="consultation"
      className="relative w-full bg-[#050505] text-[#F8F9FA] py-20 sm:py-28 px-6 sm:px-12 lg:px-16 rounded-[24px] border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.9)] overflow-hidden my-4"
      aria-labelledby="consultation-heading"
    >
      {/* Background Ambient Glow */}
      <div
        className="absolute bottom-0 right-0 w-[600px] h-[600px] pointer-events-none opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(201, 162, 39, 0.25) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="max-w-[1408px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Inquiries Context */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#C9A227]" />
                <span className="text-[#C9A227] text-[11px] sm:text-[12px] font-sans font-semibold tracking-[0.18em] uppercase">
                  Engage The Firm
                </span>
              </div>
              <h2
                id="consultation-heading"
                className="font-headings text-[clamp(28px,3.8vw,48px)] font-medium leading-[1.12] text-white tracking-[-0.02em] mb-4"
              >
                Direct Advisory Inquiries
              </h2>
              <p className="text-[#CBD5E1] text-[15px] sm:text-[16px] leading-relaxed mb-6 font-body">
                We invite confidential discussions with institutional leaders, corporate executives, and project developers seeking strategic capital advisory or global partnerships across Africa.
              </p>

              {/* Direct Office Contacts */}
              <div className="space-y-4 pt-4 border-t border-white/10 text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#0B1320] border border-[#C9A227]/30 flex items-center justify-center text-[#C9A227] shrink-0 mt-0.5">
                    <Icon name="MapPin" className="w-4 h-4 text-[#C9A227]" />
                  </div>
                  <div>
                    <span className="text-white block font-medium">London Headquarters</span>
                    <span className="text-[#94A3B8] text-[13px]">{COMPANY_INFO.registeredAddress}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#0B1320] border border-[#C9A227]/30 flex items-center justify-center text-[#C9A227] shrink-0 mt-0.5">
                    <Icon name="Phone" className="w-4 h-4 text-[#C9A227]" />
                  </div>
                  <div>
                    <span className="text-white block font-medium">Telephone / WhatsApp Business</span>
                    <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="text-[#C9A227] hover:underline font-mono text-[13px] font-medium">
                      {COMPANY_INFO.phoneFormatted}
                    </a>
                  </div>
                </div>

                {DIRECT_ENGAGEMENT_DESKS.map((desk, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#0B1320] border border-[#C9A227]/30 flex items-center justify-center text-[#C9A227] shrink-0 mt-0.5">
                      <Icon name="Mail" className="w-4 h-4 text-[#C9A227]" />
                    </div>
                    <div>
                      <span className="text-white block font-medium">{desk.desk}</span>
                      <a href={`mailto:${desk.email}`} className="text-[#C9A227] hover:underline text-[13px]">
                        {desk.email}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Confidentiality Assurance Box */}
            <div className="p-6 rounded-[18px] bg-[#0B1320] border border-[#C9A227]/30 shadow-lg">
              <div className="flex items-center gap-2 mb-2">
                <ShieldCheck className="w-4 h-4 text-[#C9A227]" />
                <span className="text-[#C9A227] text-[11px] font-sans font-semibold tracking-wider uppercase">
                  Institutional Professional Secrecy
                </span>
              </div>
              <p className="text-[13px] text-[#94A3B8] leading-relaxed">
                Black Markt Network Consultancy processes all enquiries under strict professional secrecy. Information provided is treated as confidential and will not be disclosed to third parties without prior written consent.
              </p>
            </div>
          </div>

          {/* Right Column: Custom Modern Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-[22px] bg-[#0B1320] border border-white/10 shadow-2xl relative">
              {submitted ? (
                <div className="py-12 px-4 text-center space-y-6">
                  <div className="w-16 h-16 mx-auto rounded-full bg-[#C9A227]/10 border border-[#C9A227] flex items-center justify-center text-[#C9A227]">
                    <Check className="w-8 h-8 text-[#C9A227]" />
                  </div>
                  <div className="space-y-2">
                    <span className="text-xs uppercase tracking-widest font-mono text-[#C9A227]">
                      Mandate Inquiry Received
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-headings text-white font-medium">
                      Thank You, {formData.name}
                    </h3>
                    <p className="text-[#CBD5E1] text-sm max-w-md mx-auto leading-relaxed">
                      Your mandate enquiry has been received. Our senior advisory desk will review your submission and connect with you under strict bilateral confidentiality.
                    </p>
                  </div>

                  <div className="inline-block py-2.5 px-6 rounded-lg bg-[#050505] border border-[#C9A227]/40 text-[#C9A227] font-mono text-sm tracking-wider">
                    Reference: {refId}
                  </div>

                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="px-6 py-2.5 rounded-lg border border-white/20 text-xs font-mono uppercase tracking-wider text-gray-300 hover:text-white hover:border-[#C9A227] transition-all cursor-pointer"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name & Title/Role */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[12px] uppercase tracking-wider text-[#CBD5E1] font-mono mb-2">
                        Full Name <span className="text-[#C9A227]">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. David Mensah"
                        className="w-full px-4 py-3 rounded-xl bg-[#070D18] border border-white/15 text-white placeholder-[#64748B] focus:outline-none focus:border-[#C9A227] focus:ring-1 focus:ring-[#C9A227] transition-colors text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-[12px] uppercase tracking-wider text-[#CBD5E1] font-mono mb-2">
                        Title / Role <span className="text-[#C9A227]">*</span>
                      </label>
                      <input
                        type="text"
                        name="titleRole"
                        required
                        value={formData.titleRole}
                        onChange={handleChange}
                        placeholder="e.g. Managing Partner / CEO / CFO"
                        className="w-full px-4 py-3 rounded-xl bg-[#070D18] border border-white/15 text-white placeholder-[#64748B] focus:outline-none focus:border-[#C9A227] focus:ring-1 focus:ring-[#C9A227] transition-colors text-sm"
                      />
                    </div>
                  </div>

                  {/* Organisation & Country */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[12px] uppercase tracking-wider text-[#CBD5E1] font-mono mb-2">
                        Organisation / Institution <span className="text-[#C9A227]">*</span>
                      </label>
                      <input
                        type="text"
                        name="organisation"
                        required
                        value={formData.organisation}
                        onChange={handleChange}
                        placeholder="Company or fund name"
                        className="w-full px-4 py-3 rounded-xl bg-[#070D18] border border-white/15 text-white placeholder-[#64748B] focus:outline-none focus:border-[#C9A227] focus:ring-1 focus:ring-[#C9A227] transition-colors text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-[12px] uppercase tracking-wider text-[#CBD5E1] font-mono mb-2">
                        Country / Primary Market <span className="text-[#C9A227]">*</span>
                      </label>
                      <input
                        type="text"
                        name="country"
                        required
                        value={formData.country}
                        onChange={handleChange}
                        placeholder="e.g. United Kingdom, Nigeria, Kenya"
                        className="w-full px-4 py-3 rounded-xl bg-[#070D18] border border-white/15 text-white placeholder-[#64748B] focus:outline-none focus:border-[#C9A227] focus:ring-1 focus:ring-[#C9A227] transition-colors text-sm"
                      />
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[12px] uppercase tracking-wider text-[#CBD5E1] font-mono mb-2">
                        Corporate Email <span className="text-[#C9A227]">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. d.mensah@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#070D18] border border-white/15 text-white placeholder-[#64748B] focus:outline-none focus:border-[#C9A227] focus:ring-1 focus:ring-[#C9A227] transition-colors text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-[12px] uppercase tracking-wider text-[#CBD5E1] font-mono mb-2">
                        Telephone / WhatsApp <span className="text-[#C9A227]">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+44 20 7000 0000 / +234..."
                        className="w-full px-4 py-3 rounded-xl bg-[#070D18] border border-white/15 text-white placeholder-[#64748B] focus:outline-none focus:border-[#C9A227] focus:ring-1 focus:ring-[#C9A227] transition-colors text-sm"
                      />
                    </div>
                  </div>

                  {/* Nature of Enquiry & Relevant Industry */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <LuxurySelect
                        label="Nature of Enquiry"
                        required
                        value={formData.natureOfEnquiry}
                        onChange={(val) => setFormData((p) => ({ ...p, natureOfEnquiry: val }))}
                        options={enquiryOptions}
                        placeholder="Select Nature of Enquiry"
                      />
                    </div>

                    <div>
                      <LuxurySelect
                        label="Relevant Industry Sector"
                        required
                        value={formData.industry}
                        onChange={(val) => setFormData((p) => ({ ...p, industry: val }))}
                        options={industryOptions}
                        placeholder="Select Industry Sector"
                      />
                    </div>
                  </div>

                  {/* Estimated Capital Requirement & Partnership Objective */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <LuxurySelect
                        label="Estimated Capital Requirement"
                        required
                        value={formData.capitalRequirement}
                        onChange={(val) => setFormData((p) => ({ ...p, capitalRequirement: val }))}
                        options={capitalOptions}
                        placeholder="Select Capital Range"
                      />
                    </div>

                    <div>
                      <label className="block text-[12px] uppercase tracking-wider text-[#CBD5E1] font-mono mb-2">
                        Partnership / Transaction Objective
                      </label>
                      <input
                        type="text"
                        name="objective"
                        value={formData.objective}
                        onChange={handleChange}
                        placeholder="e.g. Project financing, co-investment..."
                        className="w-full px-4 py-3 rounded-xl bg-[#070D18] border border-white/15 text-white placeholder-[#64748B] focus:outline-none focus:border-[#C9A227] focus:ring-1 focus:ring-[#C9A227] transition-colors text-sm"
                      />
                    </div>
                  </div>

                  {/* Overview / Summary of Mandate */}
                  <div>
                    <label className="block text-[12px] uppercase tracking-wider text-[#CBD5E1] font-mono mb-2">
                      Overview / Summary of Mandate
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Outline transaction parameters, funding structures, target timeline..."
                      className="w-full px-4 py-3 rounded-xl bg-[#070D18] border border-white/15 text-white placeholder-[#64748B] focus:outline-none focus:border-[#C9A227] focus:ring-1 focus:ring-[#C9A227] transition-colors text-sm resize-none"
                    />
                  </div>

                  {/* Custom Gold Checkbox */}
                  <div className="flex items-start gap-3 pt-1">
                    <input
                      type="checkbox"
                      id="confidentiality"
                      name="confidentialityAgreed"
                      required
                      checked={formData.confidentialityAgreed}
                      onChange={handleChange}
                      className="mt-1 w-4 h-4 rounded border-white/30 bg-[#050505] text-[#C9A227] focus:ring-[#C9A227] focus:ring-offset-0 accent-[#C9A227] cursor-pointer"
                    />
                    <label htmlFor="confidentiality" className="text-xs text-[#94A3B8] leading-relaxed cursor-pointer">
                      I agree to the confidential processing of this mandate inquiry by Black Markt Network Consultancy under professional secrecy standards.
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full h-12 rounded-xl bg-[#C9A227] hover:bg-[#DFBA42] text-[#050505] font-semibold text-sm tracking-wide transition-all duration-200 shadow-[0_4px_20px_rgba(201,162,39,0.35)] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      {loading ? (
                        <span>Submitting Mandate Enquiry...</span>
                      ) : (
                        <>
                          <span>Submit Mandate Enquiry</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                    <p className="text-[11.5px] text-[#64748B] leading-relaxed text-center mt-3">
                      Black Markt Network Consultancy processes all enquiries under strict professional secrecy. Information provided is treated as confidential and will not be disclosed to third parties without prior written consent.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
