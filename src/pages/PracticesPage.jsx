import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Icon from '../components/common/Icon';
import { PRACTICES_DATA } from '../data/platformData';
import { ArrowRight } from 'lucide-react';

export default function PracticesPage() {
  return (
    <Layout>
      {/* Header Banner */}
      <section className="relative w-full rounded-[24px] bg-[#0B1320] border border-[#C9A227]/20 p-8 sm:p-14 lg:p-20 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] my-2">
        <div className="max-w-[960px] flex flex-col gap-5">
          <div className="flex items-center gap-2 text-[#C9A227]">
            <span className="w-2 h-2 rounded-full bg-[#C9A227]" />
            <span className="text-[11px] sm:text-[12px] font-sans font-semibold tracking-[0.18em] uppercase">
              ADVISORY SERVICES
            </span>
          </div>

          <h1 className="text-[38px] sm:text-[56px] lg:text-[68px] font-headings font-medium tracking-tight text-white leading-[1.04]">
            Strategic Capital &amp; Partnership Advisory
          </h1>

          <p className="text-[18px] sm:text-[22px] text-[#CBD5E1] leading-relaxed max-w-[800px] font-body">
            We provide bespoke strategic capital advisory, capital raising, project finance, and partnership solutions for ambitious African businesses, project sponsors, and governments.
          </p>

          <div className="flex flex-wrap gap-4 pt-3">
            <Link
              to="/book-consultation"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#C9A227] hover:bg-[#DFBA42] text-[#050505] font-semibold text-[13.5px] transition-all shadow-[0_4px_16px_rgba(201,162,39,0.25)]"
            >
              <span>Book a Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/15 text-[13.5px] font-medium transition-all"
            >
              <span>Contact Our Team</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 9 Services Detailed Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-4">
        {PRACTICES_DATA.map((service) => (
          <div
            key={service.slug}
            className="p-8 rounded-[20px] bg-[#0B1320] border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.6)] flex flex-col justify-between hover:border-[#C9A227]/40 hover:-translate-y-1 transition-all duration-300 group"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#121E33] to-[#070D18] border border-[#C9A227]/40 shadow-[0_4px_20px_rgba(201,162,39,0.15)] flex items-center justify-center text-[#C9A227] mb-5 group-hover:border-[#C9A227] transition-all">
                <Icon name={service.iconName} className="w-6 h-6 text-[#C9A227]" />
              </div>

              <h2 className="text-[22px] font-headings font-medium text-white mb-3 group-hover:text-[#C9A227] transition-colors leading-snug">
                <Link to={`/services/${service.slug}`}>{service.title}</Link>
              </h2>

              <p className="text-[14.5px] text-[#94A3B8] leading-relaxed mb-6">
                {service.shortDesc}
              </p>

              {/* Core Deliverables / Focus */}
              <div className="space-y-2 mb-6 pt-2 border-t border-white/5">
                <span className="text-[11px] font-sans font-semibold text-[#C9A227] uppercase tracking-wider block mb-2">
                  Key Capabilities
                </span>
                <ul className="space-y-2">
                  {service.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-[13px] text-[#CBD5E1]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227] mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <Link
                to={`/services/${service.slug}`}
                className="text-[13px] font-semibold text-[#CBD5E1] group-hover:text-[#C9A227] transition-colors flex items-center gap-1.5"
              >
                <span>Read Full Description</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        ))}
      </section>

      {/* Direct CTA Bar */}
      <section className="p-8 sm:p-12 rounded-[24px] bg-[#050505] border border-[#C9A227]/30 text-white shadow-xl my-4 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="max-w-[700px]">
          <span className="text-[#C9A227] text-[11px] font-sans font-semibold tracking-wider uppercase block mb-1">
            Tailored Advisory Engagements
          </span>
          <h3 className="text-[24px] sm:text-[28px] font-headings font-medium text-white">
            Ready to explore how our advisory can support your growth mandate?
          </h3>
          <p className="text-[#94A3B8] text-[14px] mt-2">
            We welcome confidential discussions regarding active fundraising, infrastructure projects, or strategic cross-border partnerships.
          </p>
        </div>

        <Link
          to="/book-consultation"
          className="inline-flex items-center gap-2 whitespace-nowrap bg-[#C9A227] hover:bg-[#DFBA42] text-[#050505] font-semibold px-7 py-4 rounded-xl text-[14px] transition-all shadow-[0_4px_16px_rgba(201,162,39,0.3)] shrink-0"
        >
          <span>Schedule an Introductory Discussion</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </Layout>
  );
}
