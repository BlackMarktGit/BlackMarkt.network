import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import ActionButton from '../components/common/ActionButton';
import { ASSESSMENT_DATA } from '../data/platformData';

export default function AssessmentPage() {
  const [answers, setAnswers] = useState({});
  const [calculated, setCalculated] = useState(false);

  const handleSelect = (questionId, score) => {
    setAnswers({ ...answers, [questionId]: score });
  };

  // Calculate score (0-100)
  const totalQuestions = 8;
  const answeredCount = Object.keys(answers).length;
  const totalScore = Object.values(answers).reduce((a, b) => a + b, 0);
  const percentageScore = Math.round((totalScore / (totalQuestions * 10)) * 100) || 0;

  let riskTier = 'Incomplete';
  let tierColor = 'text-[#837E73]';
  let tierDesc = 'Please complete all questions to generate your diagnostic profile.';

  if (answeredCount === totalQuestions) {
    if (percentageScore >= 85) {
      riskTier = 'Sovereign Benchmark';
      tierColor = 'text-[#2E7D32]';
      tierDesc = 'Optimal institutional resilience. Minimal latent technical debt and sound data sovereignty ring-fencing.';
    } else if (percentageScore >= 70) {
      riskTier = 'High-Yield Fiduciary';
      tierColor = 'text-[#D4AF37]';
      tierDesc = 'Substantial systems strength with targeted technical debt liabilities in cross-border or legacy layers.';
    } else if (percentageScore >= 50) {
      riskTier = 'Moderate Technical Exposure';
      tierColor = 'text-[#E65100]';
      tierDesc = 'Significant operational fragility. TSA separation and data localization could cause major budget overruns.';
    } else {
      riskTier = 'Critical Structural Vulnerability';
      tierColor = 'text-[#C62828]';
      tierDesc = 'Urgent red-flag risk. Mainframe dependency and unverified compliance threaten portfolio valuation.';
    }
  }

  return (
    <Layout>
      {/* Hero Header */}
      <section className="relative w-full rounded-[24px] bg-[#0B1320] border border-[#C9A227]/20 p-8 sm:p-14 lg:p-16 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
        <div className="max-w-[960px] flex flex-col gap-4">
          <div className="flex items-center gap-3 text-caption text-[#94A3B8]">
            <span>DIAGNOSTIC SUITE</span>
            <span className="text-white/20">&bull;</span>
            <span className="text-[#C9A227] font-semibold">4-DOMAIN FIDUCIARY EVALUATION</span>
          </div>

          <h1 className="text-[40px] sm:text-[56px] lg:text-[64px] font-headings font-medium tracking-tight text-white leading-[1.02]">
            {ASSESSMENT_DATA.title}
          </h1>

          <p className="text-[18px] sm:text-[22px] text-[#CBD5E1] leading-relaxed max-w-[800px] font-body">
            {ASSESSMENT_DATA.subtitle}. Quantify your architecture debt, regulatory exposure, and transactional fault tolerance in real time.
          </p>
        </div>
      </section>

      {/* Main Diagnostic Questions Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-4 pb-24 lg:pb-0">
        {/* Left Column: Questions */}
        <div className="lg:col-span-8 space-y-8">
          {ASSESSMENT_DATA.domains.map((dom) => (
            <div key={dom.id} className="p-8 sm:p-10 rounded-[24px] bg-[#0B1320] border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.6)] space-y-6">
              <div>
                <h2 className="text-[20px] sm:text-[24px] font-headings font-medium text-white">
                  {dom.name}
                </h2>
                <p className="text-[14px] text-[#94A3B8] mt-1">{dom.description}</p>
              </div>

              <div className="space-y-6">
                {dom.questions.map((q) => (
                  <div key={q.id} className="space-y-3 pt-2">
                    <p className="text-[15px] font-semibold text-[#CBD5E1]">
                      {q.prompt}
                    </p>
                    <div className="space-y-2">
                      {q.options.map((opt, i) => (
                        <label
                          key={i}
                          onClick={() => handleSelect(q.id, opt.score)}
                          className={`flex items-start gap-3 p-3.5 rounded-xl border text-[13.5px] cursor-pointer transition-all ${
                            answers[q.id] === opt.score
                              ? 'bg-[#050505] text-[#C9A227] border-[#C9A227] shadow-md'
                              : 'bg-[#070D18] text-[#CBD5E1] border-white/10 hover:border-white/25 hover:text-white'
                          }`}
                        >
                          <input
                            type="radio"
                            name={q.id}
                            checked={answers[q.id] === opt.score}
                            onChange={() => {}}
                            className="mt-1 accent-[#C9A227]"
                          />
                          <span>{opt.text}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Right Column: Live Readiness Scorecard */}
        <div className="lg:col-span-4">
          <div className="sticky top-28 p-8 rounded-[24px] bg-[#0B1320] border border-[#C9A227]/30 text-white shadow-2xl space-y-6">
            <span className="text-[11px] font-caption text-[#C9A227] uppercase tracking-wider block font-semibold">
              LIVE READINESS TELEMETRY
            </span>

            <div className="text-center py-4">
              <span className="text-[64px] font-headings font-bold text-white block leading-none">
                {percentageScore}
                <span className="text-[24px] text-[#94A3B8]">/100</span>
              </span>
              <span className={`text-[15px] font-headings font-semibold block mt-3 ${tierColor}`}>
                {riskTier}
              </span>
              <span className="text-[11px] text-[#94A3B8] block mt-1">
                {answeredCount} of {totalQuestions} Indicators Evaluated
              </span>
            </div>

            <p className="text-[13.5px] text-[#CBD5E1] leading-relaxed border-t border-white/10 pt-4">
              {tierDesc}
            </p>

            {answeredCount === totalQuestions && (
              <div className="space-y-3 pt-2">
                <ActionButton href="/book-consultation" variant="primary" className="w-full">
                  Remediate with Partners &rarr;
                </ActionButton>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Floating Mobile Telemetry HUD */}
      <div className="fixed bottom-3 left-3 right-3 z-40 lg:hidden p-3.5 rounded-2xl bg-[#0B1320]/95 backdrop-blur-xl border border-[#C9A227]/30 text-white shadow-2xl flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-baseline">
            <span className="text-[26px] font-headings font-bold text-white leading-none">{percentageScore}</span>
            <span className="text-[13px] text-[#94A3B8]">/100</span>
          </div>
          <div className="flex flex-col">
            <span className={`text-[12px] font-semibold leading-tight ${tierColor}`}>{riskTier}</span>
            <span className="text-[10px] text-[#94A3B8]">{answeredCount}/{totalQuestions} Answered</span>
          </div>
        </div>
        {answeredCount === totalQuestions ? (
          <ActionButton href="/book-consultation" variant="primary" className="!h-9 !px-3 !w-auto text-[12px]">
            Remediate &rarr;
          </ActionButton>
        ) : (
          <button
            type="button"
            onClick={() => {
              document.querySelector('.lg\\:col-span-4')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-[11px] font-medium text-[#C9A227] hover:underline px-2 py-1"
          >
            View Status &darr;
          </button>
        )}
      </div>
    </Layout>
  );
}
