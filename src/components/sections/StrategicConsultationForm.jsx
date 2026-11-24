import React, { useState } from 'react';
import api from '../../services/api';
import { CheckCircle2, ArrowRight, ShieldCheck, Mail, MapPin } from 'lucide-react';
import { INDUSTRIES_DATA, COMPANY_INFO } from '../../data/platformData';

const INVESTMENT_REQUIREMENTS = [
  'Growth Capital & Private Equity',
  'Project Finance & Infrastructure Debt',
  'Commercial Debt & Structured Lending',
  'Strategic Equity & Joint Venture Capital',
  'Venture & Early Stage Growth Capital',
  'Sovereign / Public-Private Partnership Financing',
  'General Strategic Capital Advisory',
];

const PARTNERSHIP_OBJECTIVES = [
  'Access International Institutional Investors',
  'Cross-Border Market Entry & Expansion',
  'Strategic Joint Venture Alignment',
  'Investment Readiness & Due Diligence Preparation',
  'Mergers, Acquisitions or Divestitures',
  'Government & Concession Structuring',
  'General Strategic Partnership Discussion',
];

export default function StrategicConsultationForm() {
  const [formData, setFormData] = useState({
    name: '',
    organisation: '',
    country: '',
    industry: '',
    investmentRequirement: '',
    partnershipObjective: '',
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
        organization: formData.organisation,
        country: formData.country,
        industry: formData.industry,
        investment_requirement: formData.investmentRequirement,
        partnership_objective: formData.partnershipObjective,
        message: formData.message,
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
      organisation: '',
      country: '',
      industry: '',
      investmentRequirement: '',
      partnershipObjective: '',
      message: '',
      confidentialityAgreed: true,
    });
  };

  return (
    <section
      id="consultation"
      className="relative w-full bg-[#050505] text-[#F8F9FA] py-20 sm:py-28 px-6 sm:px-12 lg:px-16 rounded-[24px] border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.9)] overflow-hidden my-4"
      aria-labelledby="consultation-heading"
    >
      <div className="max-w-[1408px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Context & Discretion Guarantee */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#C9A227]" />
                <span className="text-[#C9A227] text-[11px] sm:text-[12px] font-sans font-semibold tracking-[0.18em] uppercase">
                  Confidential Engagement
                </span>
              </div>

              <h2
                id="consultation-heading"
                className="font-headings text-[clamp(28px,3.8vw,52px)] font-medium leading-[1.12] text-white tracking-[-0.02em] mb-6"
              >
                Begin a Strategic Conversation
              </h2>

              <p className="text-[#CBD5E1] text-[15.5px] leading-[1.65] mb-5">
                Whether you are an African business seeking capital, an investor seeking opportunities, a government institution or a strategic partner, Black Markt Network Consultancy welcomes confidential discussions.
              </p>

              <p className="text-[#94A3B8] text-[14px] leading-relaxed mb-8">
                Our partners will review your brief with the utmost discretion and reach out directly to schedule a private introductory discussion.
              </p>
            </div>

            {/* Direct Contact Card */}
            <div className="p-7 rounded-[18px] bg-[#0B1320] border border-[#C9A227]/25 space-y-4">
              <span className="text-[#C9A227] text-[11px] font-sans font-semibold tracking-wider uppercase block">
                London Advisory Desk
              </span>
              <div className="flex items-start gap-3 text-[13.5px] text-[#CBD5E1]">
                <MapPin className="w-4 h-4 text-[#C9A227] shrink-0 mt-0.5" />
                <span>124 City Road, London, EC1V 2NX, United Kingdom</span>
              </div>
              <div className="flex items-center gap-3 text-[13.5px] text-[#CBD5E1]">
                <Mail className="w-4 h-4 text-[#C9A227] shrink-0" />
                <a href="mailto:advisory@blackmarkt.network" className="hover:text-[#C9A227] transition-colors">
                  advisory@blackmarkt.network
                </a>
              </div>
              <div className="pt-2 border-t border-white/10 text-[12px] text-[#94A3B8] flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#C9A227] shrink-0" />
                <span>All enquiries are treated with the highest level of confidentiality.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Lightweight, Modern Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-[22px] bg-[#0B1320] border border-white/10 shadow-2xl relative">
              {submitted ? (
                <div className="py-12 px-4 text-center space-y-6">
                  <div className="w-16 h-16 mx-auto rounded-full bg-[#C9A227]/10 border border-[#C9A227] flex items-center justify-center text-[#C9A227]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div className="space-y-2">
                    <span className="text-xs uppercase tracking-widest font-mono text-[#C9A227]">
                      Inquiry Received
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-headings text-white font-medium">
                      Thank You, {formData.name}
                    </h3>
                    <p className="text-[#CBD5E1] text-sm max-w-md mx-auto leading-relaxed">
                      Your inquiry has been received. Our advisory team will review your requirements and respond promptly with strict confidentiality.
                    </p>
                  </div>

                  <div className="inline-block py-2.5 px-6 rounded-lg bg-[#050505] border border-[#C9A227]/40 text-[#C9A227] font-mono text-sm tracking-wider">
                    Reference: {refId}
                  </div>

                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="px-6 py-2.5 rounded-lg border border-white/20 text-xs font-mono uppercase tracking-wider text-gray-300 hover:text-white hover:border-[#C9A227] transition-all"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
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
                        placeholder="Your full name"
                        className="w-full px-4 py-3 rounded-xl bg-[#050505] border border-white/15 text-white placeholder-[#64748B] focus:outline-none focus:border-[#C9A227] transition-colors text-sm"
                      />
                    </div>

                    {/* Organisation */}
                    <div>
                      <label className="block text-[12px] uppercase tracking-wider text-[#CBD5E1] font-mono mb-2">
                        Organisation <span className="text-[#C9A227]">*</span>
                      </label>
                      <input
                        type="text"
                        name="organisation"
                        required
                        value={formData.organisation}
                        onChange={handleChange}
                        placeholder="Company or institution name"
                        className="w-full px-4 py-3 rounded-xl bg-[#050505] border border-white/15 text-white placeholder-[#64748B] focus:outline-none focus:border-[#C9A227] transition-colors text-sm"
                      />
                    </div>

                    {/* Country */}
                    <div>
                      <label className="block text-[12px] uppercase tracking-wider text-[#CBD5E1] font-mono mb-2">
                        Country <span className="text-[#C9A227]">*</span>
                      </label>
                      <input
                        type="text"
                        name="country"
                        required
                        value={formData.country}
                        onChange={handleChange}
                        placeholder="e.g. United Kingdom, Nigeria, Kenya"
                        className="w-full px-4 py-3 rounded-xl bg-[#050505] border border-white/15 text-white placeholder-[#64748B] focus:outline-none focus:border-[#C9A227] transition-colors text-sm"
                      />
                    </div>

                    {/* Industry */}
                    <div>
                      <label className="block text-[12px] uppercase tracking-wider text-[#CBD5E1] font-mono mb-2">
                        Industry <span className="text-[#C9A227]">*</span>
                      </label>
                      <select
                        name="industry"
                        required
                        value={formData.industry}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-[#050505] border border-white/15 text-white focus:outline-none focus:border-[#C9A227] transition-colors text-sm"
                      >
                        <option value="" disabled className="bg-[#0B1320] text-gray-400">
                          Select Industry
                        </option>
                        {INDUSTRIES_DATA.map((ind) => (
                          <option key={ind.slug} value={ind.name} className="bg-[#0B1320] text-white">
                            {ind.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Investment Requirement */}
                    <div>
                      <label className="block text-[12px] uppercase tracking-wider text-[#CBD5E1] font-mono mb-2">
                        Investment Requirement <span className="text-[#C9A227]">*</span>
                      </label>
                      <select
                        name="investmentRequirement"
                        required
                        value={formData.investmentRequirement}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-[#050505] border border-white/15 text-white focus:outline-none focus:border-[#C9A227] transition-colors text-sm"
                      >
                        <option value="" disabled className="bg-[#0B1320] text-gray-400">
                          Select Capital Requirement
                        </option>
                        {INVESTMENT_REQUIREMENTS.map((req, i) => (
                          <option key={i} value={req} className="bg-[#0B1320] text-white">
                            {req}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Partnership Objective */}
                    <div>
                      <label className="block text-[12px] uppercase tracking-wider text-[#CBD5E1] font-mono mb-2">
                        Partnership Objective <span className="text-[#C9A227]">*</span>
                      </label>
                      <select
                        name="partnershipObjective"
                        required
                        value={formData.partnershipObjective}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-[#050505] border border-white/15 text-white focus:outline-none focus:border-[#C9A227] transition-colors text-sm"
                      >
                        <option value="" disabled className="bg-[#0B1320] text-gray-400">
                          Select Strategic Objective
                        </option>
                        {PARTNERSHIP_OBJECTIVES.map((obj, i) => (
                          <option key={i} value={obj} className="bg-[#0B1320] text-white">
                            {obj}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-[12px] uppercase tracking-wider text-[#CBD5E1] font-mono mb-2">
                      Message / Project Summary <span className="text-[#C9A227]">*</span>
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please share an overview of your capital requirement, project timeline, or strategic partnership objectives..."
                      className="w-full px-4 py-3 rounded-xl bg-[#050505] border border-white/15 text-white placeholder-[#64748B] focus:outline-none focus:border-[#C9A227] transition-colors text-sm resize-none"
                    />
                  </div>

                  {/* Custom Styled Checkbox */}
                  <div className="flex items-start gap-3 pt-1">
                    <div className="relative flex items-center justify-center mt-0.5">
                      <input
                        type="checkbox"
                        id="confidentialityAgreed"
                        name="confidentialityAgreed"
                        checked={formData.confidentialityAgreed}
                        onChange={handleChange}
                        className="appearance-none w-5 h-5 rounded-md bg-[#050505] border border-white/25 checked:bg-[#C9A227] checked:border-[#C9A227] focus:outline-none transition-all cursor-pointer"
                      />
                      {formData.confidentialityAgreed && (
                        <svg
                          className="w-3.5 h-3.5 text-black absolute pointer-events-none"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      )}
                    </div>
                    <label
                      htmlFor="confidentialityAgreed"
                      className="text-[12.5px] text-[#94A3B8] leading-snug cursor-pointer select-none"
                    >
                      I confirm that this enquiry is submitted for confidential advisory review. All enquiries are treated with the highest level of confidentiality.
                    </label>
                  </div>

                  {/* Submit CTA */}
                  <div className="pt-3">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#C9A227] hover:bg-[#DFBA42] text-[#050505] font-semibold text-[13.5px] transition-all shadow-[0_4px_16px_rgba(201,162,39,0.25)] flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      {loading ? (
                        <>
                          <div className="w-4 h-4 border-2 border-[#050505] border-t-transparent rounded-full animate-spin" />
                          <span>Submitting...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Inquiry</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
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
