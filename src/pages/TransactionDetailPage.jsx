import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { TRANSACTIONS_DATA } from '../data/platformData';
import { ArrowRight, CheckCircle2, ChevronRight, MapPin, Briefcase } from 'lucide-react';

export default function TransactionDetailPage() {
  const { slug } = useParams();
  const tx = TRANSACTIONS_DATA.find((t) => t.slug === slug) || TRANSACTIONS_DATA[0];

  return (
    <Layout>
      {/* Breadcrumb Header Card */}
      <section className="relative w-full rounded-[24px] bg-[#0B1320] border border-[#C9A227]/20 p-8 sm:p-14 lg:p-16 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] my-2">
        <div className="flex items-center gap-2 text-[12px] text-[#94A3B8] mb-5 overflow-hidden">
          <Link to="/" className="hover:text-white transition-colors shrink-0">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-white/30 shrink-0" />
          <Link to="/transactions" className="hover:text-white transition-colors shrink-0">Transactions</Link>
          <ChevronRight className="w-3.5 h-3.5 text-white/30 shrink-0" />
          <span className="text-[#C9A227] font-semibold truncate">{tx.title}</span>
        </div>

        <div className="max-w-[960px] flex flex-col gap-5">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-[#C9A227] text-[11px] font-sans font-semibold tracking-wider uppercase bg-[#050505] border border-[#C9A227]/30 px-3 py-1 rounded-full">
              {tx.sector}
            </span>
            <span className="flex items-center gap-1.5 text-[12px] text-[#CBD5E1]">
              <MapPin className="w-3.5 h-3.5 text-[#C9A227]" />
              <span>{tx.location}</span>
            </span>
          </div>

          <h1 className="text-[36px] sm:text-[52px] lg:text-[62px] font-headings font-medium tracking-tight text-white leading-[1.04]">
            {tx.title}
          </h1>

          <div className="inline-block">
            <span className="text-[14px] text-white font-medium bg-white/5 border border-white/10 px-4 py-2 rounded-lg">
              Advisory Scope: <strong className="text-[#C9A227]">{tx.scope}</strong>
            </span>
          </div>

          <div className="flex flex-wrap gap-4 pt-3">
            <Link
              to="/book-consultation"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#C9A227] hover:bg-[#DFBA42] text-[#050505] font-semibold text-[13.5px] transition-all shadow-[0_4px_16px_rgba(201,162,39,0.25)]"
            >
              <span>Discuss a Similar Mandate</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/transactions"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/15 text-[13.5px] font-medium transition-all"
            >
              <span>Back to Transactions</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-4">
        {/* Left Column: Transaction Case Details */}
        <div className="lg:col-span-8 p-8 sm:p-12 rounded-[24px] bg-[#0B1320] border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.6)] space-y-6">
          <span className="text-[#C9A227] text-[11px] font-sans font-semibold uppercase tracking-wider block">
            Transaction Case Study
          </span>

          <h2 className="text-[26px] sm:text-[32px] font-headings font-medium text-white leading-snug">
            Transaction Context &amp; Advisory Role
          </h2>

          <div className="text-[16px] text-[#CBD5E1] leading-[1.7] space-y-4">
            <p>{tx.overview}</p>
            <p>
              Every transaction mandate is guided by strict fiduciary discretion, careful counterparty alignment, and rigorous commercial structuring to create enduring value across African growth markets and international investor networks.
            </p>
          </div>

          <div className="pt-6 border-t border-white/10">
            <h3 className="text-white font-headings text-[20px] font-medium mb-4">
              Key Advisory Services Delivered
            </h3>
            <div className="space-y-3">
              {tx.servicesDelivered.map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-[#050505]/60 border border-white/5">
                  <CheckCircle2 className="w-5 h-5 text-[#C9A227] shrink-0 mt-0.5" />
                  <span className="text-[14px] text-[#CBD5E1]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Inquire & Related */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <div className="p-8 rounded-[24px] bg-[#050505] border border-[#C9A227]/30 shadow-xl space-y-5">
            <span className="text-[#C9A227] text-[11px] font-sans font-semibold uppercase tracking-wider block">
              Confidential Discussion
            </span>
            <h3 className="text-white font-headings text-[22px] font-medium leading-snug">
              Engage our team on your transaction
            </h3>
            <p className="text-[#94A3B8] text-[13.5px] leading-relaxed">
              We welcome confidential inquiries from project sponsors, corporations, governments, and institutional investors.
            </p>
            <Link
              to="/book-consultation"
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-[#C9A227] hover:bg-[#DFBA42] text-[#050505] font-semibold text-[13.5px] transition-all"
            >
              <span>Request a Discussion</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Other Transactions */}
          <div className="p-8 rounded-[24px] bg-[#0B1320] border border-white/10 space-y-4">
            <h4 className="text-white font-headings text-[18px] font-medium border-b border-white/10 pb-3">
              Other Transactions
            </h4>
            <div className="flex flex-col gap-2">
              {TRANSACTIONS_DATA.filter((t) => t.slug !== tx.slug).map((other) => (
                <Link
                  key={other.slug}
                  to={`/transactions/${other.slug}`}
                  className="text-[13.5px] text-[#CBD5E1] hover:text-[#C9A227] transition-colors py-1.5 flex items-center justify-between group"
                >
                  <span className="truncate">{other.title}</span>
                  <span className="text-white/20 group-hover:text-[#C9A227] text-sm">&rarr;</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
