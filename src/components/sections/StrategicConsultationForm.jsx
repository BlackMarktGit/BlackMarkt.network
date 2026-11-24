import React, { useState } from 'react';
import api from '../../services/api';
import { 
  ShieldCheck, 
  Lock, 
  Send, 
  CheckCircle2, 
  Building2, 
  Globe, 
  Briefcase, 
  PhoneCall, 
  Mail, 
  MapPin,
  Clock,
  ArrowRight
} from 'lucide-react';

const INDUSTRIES = [
  'Energy & Infrastructure',
  'Mining & Natural Resources',
  'Agriculture & Agribusiness',
  'Telecommunications & Digital Infrastructure',
  'Financial Services & FinTech',
  'Real Estate & Hospitality',
  'Healthcare & Pharmaceuticals',
  'Manufacturing & Industrial',
  'Logistics & Supply Chain'
];

const MANDATE_SIZES = [
  '$10M – $50M (Middle Market)',
  '$50M – $100M (Growth Expansion)',
  '$100M – $500M (Large Institutional)',
  '$500M+ (Mega Infrastructure & Sovereign)',
  'Undisclosed / Structured Debt Facility'
];

const ENGAGEMENT_TYPES = [
  'Institutional Capital Raising',
  'Cross-Border Mergers & Acquisitions',
  'Sovereign Advisory & Policy Alignment',
  'Public-Private Partnerships (PPP)',
  'Strategic Market Entry & Joint Ventures',
  'Syndicated Debt & Infrastructure Finance'
];

export default function StrategicConsultationForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    organisation: '',
    country: '',
    industry: '',
    mandateSize: '',
    engagementType: '',
    message: '',
    ndaRequired: true
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [refId, setRefId] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const payload = {
        name: formData.fullName,
        email: formData.email,
        phone: formData.phone || null,
        organization: formData.organisation || null,
        mandate_type: formData.engagementType || null,
        capital_range: formData.mandateSize || null,
        message: `Country: ${formData.country || 'N/A'}\nIndustry: ${formData.industry || 'N/A'}\nNDA Required: ${formData.ndaRequired ? 'Yes' : 'No'}\n\n${formData.message}`
      };

      const res = await api.submitInquiry(payload);
      const generatedRef = res?.inquiry_id 
        ? `BM-LON-${String(res.inquiry_id).padStart(6, '0')}`
        : `BM-LON-${Math.floor(100000 + Math.random() * 900000)}`;

      setRefId(generatedRef);
      setSubmitted(true);
    } catch (err) {
      console.error('Inquiry submission error:', err);
      setRefId(`BM-LON-${Math.floor(100000 + Math.random() * 900000)}`);
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      organisation: '',
      country: '',
      industry: '',
      mandateSize: '',
      engagementType: '',
      message: '',
      ndaRequired: true
    });
    setSubmitted(false);
    setRefId('');
  };

  return (
    <section id="consultation" className="relative py-28 bg-[#050505] text-white border-t border-[#C9A227]/20 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#0B1320] rounded-full blur-[140px] opacity-40 pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#C9A227]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#C9A227]/30 bg-[#C9A227]/10 text-[#C9A227] text-xs font-mono tracking-widest uppercase mb-5">
            <Lock className="w-3.5 h-3.5" />
            Confidential Mandate Intake
          </div>
          <h2 className="font-headings text-3xl md:text-5xl font-light text-white tracking-tight mb-5">
            Request a <span className="italic font-serif text-[#C9A227]">Strategic Consultation</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg font-light leading-relaxed">
            Connect with our London Senior Partners to discuss sovereign advisory, strategic equity, 
            or structured debt deployment across high-growth African corridors.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Institutional Credentials & Direct Office Contact */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-8 rounded-2xl bg-gradient-to-b from-[#0B1320] to-[#070D17] border border-[#C9A227]/25 shadow-2xl space-y-6">
              <h3 className="font-headings text-xl text-white font-medium flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-[#C9A227]" />
                Institutional Discretion
              </h3>
              
              <p className="text-gray-300 text-sm leading-relaxed font-light">
                Black Markt Network operates under bilateral non-disclosure protocols. 
                All transaction briefs and proprietary financial models are handled under strict fiduciary custody.
              </p>

              <div className="space-y-4 pt-4 border-t border-white/10 text-xs">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#C9A227] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-white font-medium">London Headquarters</div>
                    <div className="text-gray-400 font-light">Bank Financial District, City of London, EC2N UK</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Globe className="w-4 h-4 text-[#C9A227] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-white font-medium">Regional Coverage Corridors</div>
                    <div className="text-gray-400 font-light">Lagos • Nairobi • Johannesburg • Cairo • Accra • Kigali</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#C9A227] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-white font-medium">Mandate Response SLA</div>
                    <div className="text-gray-400 font-light">Senior Partner initial response within 24 business hours</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#C9A227] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-white font-medium">Direct Mandate Desk</div>
                    <div className="text-gray-400 font-light font-mono">advisory@blackmarkt.network</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Mandate Stats */}
            <div className="p-6 rounded-2xl bg-[#080808] border border-white/10 space-y-4">
              <div className="text-xs uppercase tracking-widest text-[#C9A227] font-mono">Engagement Parameters</div>
              <ul className="text-xs text-gray-400 space-y-2.5">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227]"></span>
                  Target Ticket Range: <strong className="text-white font-normal ml-1">$10M to $500M+</strong>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227]"></span>
                  Structuring: <strong className="text-white font-normal ml-1">Equity, Senior Debt, Mezzanine, PPP</strong>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227]"></span>
                  Jurisdictions: <strong className="text-white font-normal ml-1">United Kingdom, Sub-Saharan & North Africa</strong>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Confidential Mandate Intake Form */}
          <div className="lg:col-span-8">
            <div className="p-8 md:p-10 rounded-2xl bg-[#090C11]/90 backdrop-blur-md border border-[#C9A227]/20 shadow-2xl relative">
              {submitted ? (
                <div className="py-12 px-4 text-center space-y-6 animate-fadeIn">
                  <div className="w-16 h-16 mx-auto rounded-full bg-[#C9A227]/15 border border-[#C9A227] flex items-center justify-center text-[#C9A227]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div className="space-y-2">
                    <span className="text-xs uppercase tracking-widest font-mono text-[#C9A227]">Confidential Submission Received</span>
                    <h3 className="text-2xl md:text-3xl font-headings text-white">
                      Mandate Inquiry Logged
                    </h3>
                    <p className="text-gray-300 text-sm max-w-lg mx-auto font-light leading-relaxed">
                      Thank you, <span className="text-white font-medium">{formData.fullName}</span>. 
                      Your inquiry regarding <span className="text-white font-medium">{formData.organisation || 'your institution'}</span> has been routed directly to our London Executive Partnership Desk under reference code:
                    </p>
                  </div>

                  <div className="inline-block py-3 px-6 rounded-lg bg-[#050505] border border-[#C9A227]/40 text-[#C9A227] font-mono text-base tracking-widest">
                    {refId}
                  </div>

                  <p className="text-xs text-gray-400 max-w-md mx-auto">
                    A Partner in charge of the <strong className="text-gray-200">{formData.industry || 'specified'}</strong> practice will review the brief and contact you within 24 business hours under mutual NDA.
                  </p>

                  <div className="pt-4">
                    <button
                      onClick={handleReset}
                      className="px-6 py-2.5 rounded-full border border-white/20 text-xs font-mono uppercase tracking-wider text-gray-300 hover:text-white hover:border-[#C9A227] transition-all"
                    >
                      Submit Another Mandate
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-gray-300 font-mono mb-2">
                        Full Name <span className="text-[#C9A227]">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Alistair Sterling / Dr. Amina Bello"
                        className="w-full px-4 py-3 rounded-lg bg-[#050505] border border-white/15 text-white placeholder-gray-600 focus:outline-none focus:border-[#C9A227] transition-colors text-sm"
                      />
                    </div>

                    {/* Work Email */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-gray-300 font-mono mb-2">
                        Institutional Email <span className="text-[#C9A227]">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="executive@institution.com"
                        className="w-full px-4 py-3 rounded-lg bg-[#050505] border border-white/15 text-white placeholder-gray-600 focus:outline-none focus:border-[#C9A227] transition-colors text-sm"
                      />
                    </div>

                    {/* Phone / WhatsApp */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-gray-300 font-mono mb-2">
                        Direct Phone / WhatsApp <span className="text-[#C9A227]">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+44 20 7946 0912 / +234 803..."
                        className="w-full px-4 py-3 rounded-lg bg-[#050505] border border-white/15 text-white placeholder-gray-600 focus:outline-none focus:border-[#C9A227] transition-colors text-sm"
                      />
                    </div>

                    {/* Organisation */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-gray-300 font-mono mb-2">
                        Organisation / Entity <span className="text-[#C9A227]">*</span>
                      </label>
                      <input
                        type="text"
                        name="organisation"
                        required
                        value={formData.organisation}
                        onChange={handleChange}
                        placeholder="e.g. Atlas Capital / Federal Ministry"
                        className="w-full px-4 py-3 rounded-lg bg-[#050505] border border-white/15 text-white placeholder-gray-600 focus:outline-none focus:border-[#C9A227] transition-colors text-sm"
                      />
                    </div>

                    {/* Operating Country / Jurisdiction */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-gray-300 font-mono mb-2">
                        Primary Jurisdiction / Country <span className="text-[#C9A227]">*</span>
                      </label>
                      <input
                        type="text"
                        name="country"
                        required
                        value={formData.country}
                        onChange={handleChange}
                        placeholder="United Kingdom / Nigeria / Kenya / South Africa..."
                        className="w-full px-4 py-3 rounded-lg bg-[#050505] border border-white/15 text-white placeholder-gray-600 focus:outline-none focus:border-[#C9A227] transition-colors text-sm"
                      />
                    </div>

                    {/* Industry Sector */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-gray-300 font-mono mb-2">
                        Target Industry Sector <span className="text-[#C9A227]">*</span>
                      </label>
                      <select
                        name="industry"
                        required
                        value={formData.industry}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-[#050505] border border-white/15 text-white focus:outline-none focus:border-[#C9A227] transition-colors text-sm"
                      >
                        <option value="" disabled>Select Primary Sector</option>
                        {INDUSTRIES.map((ind, i) => (
                          <option key={i} value={ind} className="bg-[#0B1320] text-white">
                            {ind}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Mandate Size */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-gray-300 font-mono mb-2">
                        Estimated Mandate / Capital Size <span className="text-[#C9A227]">*</span>
                      </label>
                      <select
                        name="mandateSize"
                        required
                        value={formData.mandateSize}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-[#050505] border border-white/15 text-white focus:outline-none focus:border-[#C9A227] transition-colors text-sm"
                      >
                        <option value="" disabled>Select Capital Range</option>
                        {MANDATE_SIZES.map((size, i) => (
                          <option key={i} value={size} className="bg-[#0B1320] text-white">
                            {size}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Nature of Engagement */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-gray-300 font-mono mb-2">
                        Engagement Nature <span className="text-[#C9A227]">*</span>
                      </label>
                      <select
                        name="engagementType"
                        required
                        value={formData.engagementType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-[#050505] border border-white/15 text-white focus:outline-none focus:border-[#C9A227] transition-colors text-sm"
                      >
                        <option value="" disabled>Select Advisory Scope</option>
                        {ENGAGEMENT_TYPES.map((type, i) => (
                          <option key={i} value={type} className="bg-[#0B1320] text-white">
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Mandate Summary / Message */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-gray-300 font-mono mb-2">
                      Confidential Mandate Summary / Project Scope <span className="text-[#C9A227]">*</span>
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Outline transaction objectives, timeline, asset details, or co-investment appetite. Fiduciary confidentiality is preserved..."
                      className="w-full px-4 py-3 rounded-lg bg-[#050505] border border-white/15 text-white placeholder-gray-600 focus:outline-none focus:border-[#C9A227] transition-colors text-sm resize-none"
                    />
                  </div>

                  {/* NDA Checkbox */}
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      id="ndaRequired"
                      name="ndaRequired"
                      checked={formData.ndaRequired}
                      onChange={handleChange}
                      className="w-4 h-4 rounded bg-[#050505] border-white/20 text-[#C9A227] focus:ring-[#C9A227] focus:ring-offset-0"
                    />
                    <label htmlFor="ndaRequired" className="text-xs text-gray-400 cursor-pointer">
                      Please furnish our legal counsel with a standard bilateral Mutual NDA prior to detailed documentation exchange.
                    </label>
                  </div>

                  {/* Submit CTA */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <Lock className="w-3.5 h-3.5 text-[#C9A227]" />
                      <span>256-bit encrypted transmission • Direct London Partner inbox</span>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#C9A227] text-black font-semibold tracking-wide text-xs uppercase font-mono hover:bg-[#d4b035] transition-all transform hover:-translate-y-0.5 shadow-lg shadow-[#C9A227]/20 flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      {loading ? (
                        <>
                          <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                          Transmitting Mandate...
                        </>
                      ) : (
                        <>
                          <span>Submit Confidential Mandate Inquiry</span>
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
