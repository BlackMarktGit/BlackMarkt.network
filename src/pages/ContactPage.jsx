import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import ActionButton from '../components/common/ActionButton';
import Icon from '../components/common/Icon';
import LuxurySelect from '../components/common/LuxurySelect';
import { PRACTICES_DATA, INDUSTRIES_DATA, COMPANY_INFO } from '../data/platformData';
import api from '../services/api';

export default function ContactPage() {
  const [formSent, setFormSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    country: '',
    serviceArea: PRACTICES_DATA[0].title,
    industry: INDUSTRIES_DATA[0].name,
    message: '',
    consent: false,
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
    setSubmitting(true);

    try {
      await api.submitInquiry({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        organization: formData.organization,
        mandate_type: `${formData.serviceArea} (${formData.industry})`,
        capital_range: formData.country,
        message: `Phone: ${formData.phone || 'N/A'}\nCountry: ${formData.country}\n\n${formData.message}`,
      });
      setFormSent(true);
      setFormData({
        name: '',
        organization: '',
        email: '',
        phone: '',
        country: '',
        serviceArea: PRACTICES_DATA[0].title,
        industry: INDUSTRIES_DATA[0].name,
        message: '',
        consent: false,
      });
    } catch (err) {
      console.error('Contact inquiry error:', err);
      setFormSent(true);
    } finally {
      setSubmitting(false);
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
              Get in Touch
            </span>
          </div>

          <h1 className="text-[32px] sm:text-[52px] lg:text-[64px] font-headings font-medium tracking-tight text-white leading-[1.05]">
            Contact Our Advisory Team
          </h1>

          <p className="text-[16px] sm:text-[20px] text-[#CBD5E1] leading-relaxed max-w-[800px] font-body">
            Connect directly with Black Markt Network Consultancy regarding transaction mandates, strategic capital advisory, or institutional partnership opportunities.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-8">
        {/* Left Column: Corporate & Contact Details */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 sm:p-8 rounded-[20px] sm:rounded-[24px] bg-[#0B1320] border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.4)] space-y-6">
            <div>
              <span className="text-[11px] font-caption text-[#C9A227] uppercase tracking-wider block mb-2 font-semibold">
                London Headquarters
              </span>
              <h2 className="text-[20px] sm:text-[22px] font-headings font-medium text-white">
                {COMPANY_INFO.name}
              </h2>
              <p className="text-[13px] text-[#94A3B8] mt-0.5">
                {COMPANY_INFO.legalStatus} &bull; Reg: {COMPANY_INFO.registrationNumber}
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-white/10 text-[14px]">
              <div className="flex items-start gap-3">
                <Icon name="MapPin" className="w-5 h-5 text-[#C9A227] shrink-0 mt-0.5" />
                <div>
                  <span className="text-white block font-medium">Registered Address</span>
                  <span className="text-[#94A3B8]">{COMPANY_INFO.registeredAddress}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Icon name="Mail" className="w-5 h-5 text-[#C9A227] shrink-0 mt-0.5" />
                <div>
                  <span className="text-white block font-medium">Advisory Inquiries</span>
                  <a href={`mailto:${COMPANY_INFO.emails.advisory}`} className="text-[#C9A227] hover:underline break-all">
                    {COMPANY_INFO.emails.advisory}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Icon name="Mail" className="w-5 h-5 text-[#C9A227] shrink-0 mt-0.5" />
                <div>
                  <span className="text-white block font-medium">Client Services</span>
                  <a href={`mailto:${COMPANY_INFO.emails.clientService}`} className="text-[#C9A227] hover:underline break-all">
                    {COMPANY_INFO.emails.clientService}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Icon name="User" className="w-5 h-5 text-[#C9A227] shrink-0 mt-0.5" />
                <div>
                  <span className="text-white block font-medium">Managing Director Desk</span>
                  <a href={`mailto:${COMPANY_INFO.emails.executive}`} className="text-[#C9A227] hover:underline break-all">
                    {COMPANY_INFO.emails.executive}
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10">
              <span className="text-[12px] text-[#64748B] block">
                VAT Registration: {COMPANY_INFO.vatNumber}
              </span>
            </div>
          </div>

          {/* Quick Schedule Prompt */}
          <div className="p-6 sm:p-8 rounded-[20px] sm:rounded-[24px] bg-[#050505] border border-[#C9A227]/30 text-white shadow-[0_16px_40px_rgba(0,0,0,0.6)]">
            <span className="text-[11px] font-caption text-[#C9A227] uppercase tracking-wider block mb-2 font-semibold">
              Formal Consultation
            </span>
            <h3 className="text-[18px] sm:text-[19px] font-headings font-medium text-white mb-2">
              Prefer a structured briefing?
            </h3>
            <p className="text-[14px] text-[#94A3B8] leading-relaxed mb-4">
              Schedule a dedicated discussion with our strategic advisory team to review your transaction parameters.
            </p>
            <ActionButton href="/book-consultation" variant="primary" className="w-full">
              Book Consultation
            </ActionButton>
          </div>
        </div>

        {/* Right Column: Custom Modern Form with Zero Grey Dropdowns */}
        <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 rounded-[20px] sm:rounded-[24px] bg-[#0B1320] border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.6)]">
          {formSent ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#050505] border border-[#C9A227] text-[#C9A227] mx-auto flex items-center justify-center">
                <Icon name="Check" className="w-8 h-8 text-[#C9A227]" />
              </div>
              <h2 className="text-[26px] sm:text-[28px] font-headings font-medium text-white">
                Inquiry Received
              </h2>
              <p className="text-[15px] text-[#CBD5E1] max-w-[480px] mx-auto leading-relaxed">
                Thank you for contacting Black Markt Network Consultancy. Our team will review your inquiry and follow up promptly.
              </p>
              <button
                type="button"
                onClick={() => setFormSent(false)}
                className="mt-4 px-6 py-2.5 rounded-lg bg-[#C9A227] text-black font-semibold text-[13px] hover:bg-[#DFBA42] transition-colors cursor-pointer"
              >
                Submit Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <h2 className="text-[22px] sm:text-[24px] font-headings font-medium text-white mb-1">
                  Send an Inquiry
                </h2>
                <p className="text-[14px] text-[#94A3B8]">
                  Please provide relevant details regarding your requirement.
                </p>
              </div>

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
                    placeholder="e.g. John Doe"
                    className="w-full h-11 px-4 rounded-lg bg-[#070D18] border border-white/15 text-white placeholder-[#64748B] text-[14px] focus:outline-none focus:border-[#C9A227] focus:ring-1 focus:ring-[#C9A227] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-[12px] font-caption text-[#CBD5E1] font-semibold uppercase tracking-wider mb-2">
                    Organisation / Entity *
                  </label>
                  <input
                    required
                    type="text"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    placeholder="e.g. Acme Capital Partners"
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
                    placeholder="e.g. j.doe@company.com"
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
                    placeholder="e.g. +44 20 7946 0000"
                    className="w-full h-11 px-4 rounded-lg bg-[#070D18] border border-white/15 text-white placeholder-[#64748B] text-[14px] focus:outline-none focus:border-[#C9A227] focus:ring-1 focus:ring-[#C9A227] transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[12px] font-caption text-[#CBD5E1] font-semibold uppercase tracking-wider mb-2">
                    Country / Location *
                  </label>
                  <input
                    required
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    placeholder="e.g. United Kingdom, Kenya, Nigeria"
                    className="w-full h-11 px-4 rounded-lg bg-[#070D18] border border-white/15 text-white placeholder-[#64748B] text-[14px] focus:outline-none focus:border-[#C9A227] focus:ring-1 focus:ring-[#C9A227] transition-all"
                  />
                </div>

                <div>
                  <LuxurySelect
                    label="Advisory Service Area"
                    value={formData.serviceArea}
                    onChange={(val) => setFormData((p) => ({ ...p, serviceArea: val }))}
                    options={serviceOptions}
                    placeholder="Select Service"
                  />
                </div>
              </div>

              <div>
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
                  Message / Inquiry Details *
                </label>
                <textarea
                  required
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Outline the scope of your inquiry, capital requirement, or partnership objectives..."
                  className="w-full p-4 rounded-lg bg-[#070D18] border border-white/15 text-white placeholder-[#64748B] text-[14px] focus:outline-none focus:border-[#C9A227] focus:ring-1 focus:ring-[#C9A227] transition-all resize-none"
                />
              </div>

              {/* Custom Dark/Gold Checkbox */}
              <div className="flex items-start gap-3 pt-1">
                <input
                  required
                  type="checkbox"
                  id="contact-consent"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  className="mt-1 w-4 h-4 rounded border-white/30 bg-[#050505] text-[#C9A227] focus:ring-[#C9A227] focus:ring-offset-0 accent-[#C9A227] cursor-pointer"
                />
                <label htmlFor="contact-consent" className="text-[13px] text-[#94A3B8] leading-snug cursor-pointer">
                  I understand that communication through this inquiry form is treated with strict professional confidentiality by Black Markt Network Consultancy.
                </label>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full sm:w-auto h-12 px-8 rounded-lg bg-[#C9A227] text-black font-semibold text-[14px] hover:bg-[#DFBA42] shadow-[0_4px_20px_rgba(201,162,39,0.3)] transition-all cursor-pointer disabled:opacity-50"
                >
                  {submitting ? 'Submitting...' : 'Submit Inquiry'}
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </Layout>
  );
}
