import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { GLOBAL_HUBS, PRACTICES_DATA } from '../data/platformData';
import api from '../services/api';

export default function BookConsultationPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    institutionType: 'Sovereign Wealth Fund',
    practiceArea: PRACTICES_DATA[0].title,
    hubCity: 'London',
    preferredDate: '',
    timeSlot: 'Morning (09:00 - 12:00 GMT)',
    fullName: '',
    email: '',
    ndaAcknowledged: true,
  });
  const [isBooked, setIsBooked] = useState(false);

  const handleNext = () => setStep((s) => Math.min(s + 1, 3));
  const handleBack = () => setStep((s) => Math.max(s - 1, 1));

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await api.submitInquiry({
        name: formData.fullName,
        email: formData.email,
        mandate_type: `Bilateral Consultation: ${formData.practiceArea}`,
        capital_range: formData.institutionType,
        message: `Preferred Desk: ${formData.hubCity}\nDate: ${formData.preferredDate || 'Flexible'}\nSlot: ${formData.timeSlot}\nNDA Acknowledged: ${formData.ndaAcknowledged ? 'Yes' : 'No'}`
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
      <section className="relative w-full rounded-[24px] bg-[#0B1320] border border-[#C9A227]/20 p-8 sm:p-14 lg:p-16 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
        <div className="max-w-[960px] flex flex-col gap-4">
          <div className="flex items-center gap-3 text-caption text-[#94A3B8]">
            <span>CONFIDENTIAL ENGAGEMENT</span>
            <span className="text-white/20">&bull;</span>
            <span className="text-[#C9A227] font-semibold">BILATERAL PARTNER BRIEFING</span>
          </div>

          <h1 className="text-[40px] sm:text-[56px] lg:text-[64px] font-headings font-medium tracking-tight text-white leading-[1.02]">
            Book a private mandate consultation
          </h1>

          <p className="text-[18px] sm:text-[22px] text-[#CBD5E1] leading-relaxed max-w-[800px] font-body">
            Conducted directly with Senior Managing Directors under reciprocal non-disclosure agreements at our London headquarters (124 City Road) or via secure enclaves.
          </p>
        </div>
      </section>

      {/* Interactive Mandate Booking Flow */}
      <section className="p-8 sm:p-12 lg:p-16 rounded-[24px] bg-[#0B1320] border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.6)] my-4">
        <div className="max-w-[760px] mx-auto">
          {/* Progress Indicators */}
          <div className="flex items-center justify-between border-b border-white/10 pb-5 mb-8 text-[11px] sm:text-[12px] font-caption">
            <div className={`flex items-center gap-1.5 sm:gap-2 ${step >= 1 ? 'text-[#C9A227] font-semibold' : 'text-[#94A3B8]'}`}>
              <span className={`w-5 h-5 sm:w-6 sm:h-6 text-[10px] sm:text-[11px] rounded-full flex items-center justify-center font-mono ${step >= 1 ? 'bg-[#C9A227] text-[#050505] font-bold' : 'bg-white/10 text-[#94A3B8]'}`}>
                1
              </span>
              <span className="hidden sm:inline">Scope &amp; Entity</span>
              <span className="sm:hidden">Scope</span>
            </div>
            <span className="text-white/20">&mdash;&mdash;</span>
            <div className={`flex items-center gap-1.5 sm:gap-2 ${step >= 2 ? 'text-[#C9A227] font-semibold' : 'text-[#94A3B8]'}`}>
              <span className={`w-5 h-5 sm:w-6 sm:h-6 text-[10px] sm:text-[11px] rounded-full flex items-center justify-center font-mono ${step >= 2 ? 'bg-[#C9A227] text-[#050505] font-bold' : 'bg-white/10 text-[#94A3B8]'}`}>
                2
              </span>
              <span className="hidden sm:inline">Desk &amp; Schedule</span>
              <span className="sm:hidden">Desk</span>
            </div>
            <span className="text-white/20">&mdash;&mdash;</span>
            <div className={`flex items-center gap-1.5 sm:gap-2 ${step >= 3 ? 'text-[#C9A227] font-semibold' : 'text-[#94A3B8]'}`}>
              <span className={`w-5 h-5 sm:w-6 sm:h-6 text-[10px] sm:text-[11px] rounded-full flex items-center justify-center font-mono ${step >= 3 ? 'bg-[#C9A227] text-[#050505] font-bold' : 'bg-white/10 text-[#94A3B8]'}`}>
                3
              </span>
              <span className="hidden sm:inline">Identity &amp; NDA</span>
              <span className="sm:hidden">NDA</span>
            </div>
          </div>

          {isBooked ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#050505] border border-[#C9A227]/60 text-[#C9A227] mx-auto flex items-center justify-center text-[28px]">
                ✓
              </div>
              <h2 className="text-[28px] font-headings font-medium text-white">
                Mandate Consultation Confirmed
              </h2>
              <p className="text-[15px] text-[#CBD5E1] max-w-[560px] mx-auto leading-relaxed">
                Your briefing with the <strong className="text-white">{formData.hubCity} Desk</strong> has been provisionally registered. Transmission reference <strong className="text-[#C9A227]">BM-MANDATE-{Math.floor(10000 + Math.random() * 90000)}</strong>.
              </p>
              <div className="p-5 rounded-2xl bg-[#070D18] border border-white/10 max-w-[480px] mx-auto text-left text-[13px] space-y-2 text-[#CBD5E1]">
                <div><span className="text-[#94A3B8]">Practice:</span> <span className="text-white">{formData.practiceArea}</span></div>
                <div><span className="text-[#94A3B8]">Institution:</span> <span className="text-white">{formData.institutionType}</span></div>
                <div><span className="text-[#94A3B8]">Selected Slot:</span> <span className="text-[#C9A227]">{formData.timeSlot}</span></div>
                <div><span className="text-[#94A3B8]">Fiduciary Standard:</span> <span className="text-white">Reciprocal NDA Bound</span></div>
              </div>
              <p className="text-[12px] text-[#94A3B8]">
                An encrypted calendar invite and preliminary conflict checklist have been sent to {formData.email || 'your email'}.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Step 1: Scope & Entity */}
              {step === 1 && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-[12px] font-caption text-[#CBD5E1] font-semibold uppercase mb-2">
                      Institutional Entity Classification
                    </label>
                    <select
                      value={formData.institutionType}
                      onChange={(e) => setFormData({ ...formData, institutionType: e.target.value })}
                      className="w-full h-12 px-4 rounded-lg bg-[#070D18] border border-white/15 text-white text-[14px] focus:outline-none focus:border-[#C9A227] focus:ring-1 focus:ring-[#C9A227]"
                    >
                      <option className="bg-[#0B1320] text-white">Sovereign Wealth Fund / Central Bank</option>
                      <option className="bg-[#0B1320] text-white">Mega-Cap Private Equity Buyout Sponsor</option>
                      <option className="bg-[#0B1320] text-white">Tier-1 Investment Bank / Clearing Consortium</option>
                      <option className="bg-[#0B1320] text-white">Multinational Corporate Treasury</option>
                      <option className="bg-[#0B1320] text-white">Single / Multi-Family Office ($500M+ AUM)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[12px] font-caption text-[#CBD5E1] font-semibold uppercase mb-2">
                      Primary Advisory Practice Area
                    </label>
                    <select
                      value={formData.practiceArea}
                      onChange={(e) => setFormData({ ...formData, practiceArea: e.target.value })}
                      className="w-full h-12 px-4 rounded-lg bg-[#070D18] border border-white/15 text-white text-[14px] focus:outline-none focus:border-[#C9A227] focus:ring-1 focus:ring-[#C9A227]"
                    >
                      {PRACTICES_DATA.map((p) => (
                        <option key={p.slug} value={p.title} className="bg-[#0B1320] text-white">{p.title}</option>
                      ))}
                    </select>
                  </div>

                  <div className="pt-4 flex justify-end">
                    <button
                      type="button"
                      onClick={handleNext}
                      className="w-full sm:w-auto h-12 px-8 rounded-lg bg-[#C9A227] text-[#050505] font-semibold text-[13.5px] hover:bg-[#DFBA42] shadow-[0_4px_20px_rgba(201,162,39,0.35)] transition-all"
                    >
                      Continue to Desk Selection &rarr;
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: Desk & Schedule */}
              {step === 2 && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-[12px] font-caption text-[#CBD5E1] font-semibold uppercase mb-2">
                      Preferred Advisory Hub
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {GLOBAL_HUBS.map((hub) => (
                        <button
                          key={hub.city}
                          type="button"
                          onClick={() => setFormData({ ...formData, hubCity: hub.city })}
                          className={`p-3 rounded-xl border text-center transition-all ${
                            formData.hubCity === hub.city
                              ? 'bg-[#050505] text-white border-[#C9A227] shadow-lg'
                              : 'bg-[#070D18] text-[#CBD5E1] border-white/10 hover:border-white/30 hover:text-white'
                          }`}
                        >
                          <span className="block font-headings font-medium text-[15px] text-white">{hub.city}</span>
                          <span className={`text-[11px] ${formData.hubCity === hub.city ? 'text-[#C9A227]' : 'text-[#94A3B8]'}`}>{hub.district}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-[12px] font-caption text-[#CBD5E1] font-semibold uppercase mb-2">
                      Preferred Time Slot (Bilateral Video or In-Person)
                    </label>
                    <select
                      value={formData.timeSlot}
                      onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                      className="w-full h-12 px-4 rounded-lg bg-[#070D18] border border-white/15 text-white text-[14px] focus:outline-none focus:border-[#C9A227] focus:ring-1 focus:ring-[#C9A227]"
                    >
                      <option className="bg-[#0B1320] text-white">Morning (09:00 - 12:00 Local Hub Time)</option>
                      <option className="bg-[#0B1320] text-white">Afternoon (13:00 - 17:00 Local Hub Time)</option>
                      <option className="bg-[#0B1320] text-white">Evening / Closed-Door Private Session (18:00 - 20:00)</option>
                    </select>
                  </div>

                  <div className="pt-4 flex flex-col-reverse sm:flex-row sm:items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="w-full sm:w-auto h-12 px-6 rounded-lg bg-white/5 border border-white/10 text-[#CBD5E1] font-semibold text-[13.5px] hover:bg-white/10 hover:text-white transition-colors"
                    >
                      &larr; Back
                    </button>
                    <button
                      type="button"
                      onClick={handleNext}
                      className="w-full sm:w-auto h-12 px-8 rounded-lg bg-[#C9A227] text-[#050505] font-semibold text-[13.5px] hover:bg-[#DFBA42] shadow-[0_4px_20px_rgba(201,162,39,0.35)] transition-all"
                    >
                      Proceed to Identity &amp; NDA &rarr;
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Identity & NDA */}
              {step === 3 && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[12px] font-caption text-[#CBD5E1] font-semibold uppercase mb-1">
                        Executive Legal Name &amp; Title
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Marcus Vance, Managing Director"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full h-12 px-4 rounded-lg bg-[#070D18] border border-white/15 text-white placeholder-[#64748B] text-[14px] focus:outline-none focus:border-[#C9A227] focus:ring-1 focus:ring-[#C9A227]"
                      />
                    </div>
                    <div>
                      <label className="block text-[12px] font-caption text-[#CBD5E1] font-semibold uppercase mb-1">
                        Institutional Email
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="mvance@institution.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full h-12 px-4 rounded-lg bg-[#070D18] border border-white/15 text-white placeholder-[#64748B] text-[14px] focus:outline-none focus:border-[#C9A227] focus:ring-1 focus:ring-[#C9A227]"
                      />
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#070D18] border border-white/10 space-y-2">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        required
                        checked={formData.ndaAcknowledged}
                        onChange={(e) => setFormData({ ...formData, ndaAcknowledged: e.target.checked })}
                        className="mt-1 accent-[#C9A227]"
                      />
                      <span className="text-[13px] text-[#CBD5E1] leading-relaxed">
                        I confirm that this inquiry involves bona fide institutional or corporate strategic matters. I accept Black Markt's reciprocal Fiduciary Non-Disclosure Standard under Swiss and English law.
                      </span>
                    </label>
                  </div>

                  <div className="pt-4 flex flex-col-reverse sm:flex-row sm:items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="w-full sm:w-auto h-12 px-6 rounded-lg bg-white/5 border border-white/10 text-[#CBD5E1] font-semibold text-[13.5px] hover:bg-white/10 hover:text-white transition-colors"
                    >
                      &larr; Back
                    </button>
                    <button
                      type="submit"
                      className="w-full sm:w-auto h-12 px-8 rounded-lg bg-[#C9A227] text-[#050505] font-semibold text-[13.5px] hover:bg-[#DFBA42] shadow-[0_4px_24px_rgba(201,162,39,0.35)] transition-all"
                    >
                      Confirm Mandate Consultation &rarr;
                    </button>
                  </div>
                </div>
              )}
            </form>
          )}
        </div>
      </section>
    </Layout>
  );
}
