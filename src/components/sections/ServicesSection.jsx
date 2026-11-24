import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Icon from '../common/Icon';
import { PRACTICES_DATA } from '../../data/platformData';

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative w-full bg-[#050505] text-[#F8F9FA] py-20 sm:py-28 px-6 sm:px-12 lg:px-16 rounded-[24px] border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.9)] overflow-hidden my-4"
      aria-labelledby="services-heading"
    >
      <div className="max-w-[1408px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10">
          <div className="max-w-[700px]">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#C9A227]" />
              <span className="text-[#C9A227] text-[11px] sm:text-[12px] font-sans font-semibold tracking-[0.18em] uppercase">
                Advisory Services
              </span>
            </div>
            <h2
              id="services-heading"
              className="font-headings text-[clamp(28px,3.8vw,52px)] font-medium leading-[1.12] text-white tracking-[-0.02em]"
            >
              Strategic Capital &amp; Advisory Capabilities
            </h2>
          </div>
          <p className="text-[#94A3B8] max-w-[440px] text-[14.5px] leading-relaxed">
            Our role extends beyond traditional fundraising. We develop tailored capital strategies, structure investment opportunities, enhance investment readiness and facilitate high-value partnerships.
          </p>
        </div>

        {/* 9 Services Modern Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-12">
          {PRACTICES_DATA.map((service) => (
            <div
              key={service.slug}
              className="group bg-[#0B1320] border border-white/10 hover:border-[#C9A227]/40 p-7 sm:p-8 rounded-[18px] flex flex-col justify-between transition-all duration-300 hover:shadow-[0_16px_40px_rgba(0,0,0,0.7)] hover:-translate-y-1 relative overflow-hidden"
            >
              <div>
                {/* Premium Icon Header */}
                <div className="w-12 h-12 rounded-xl bg-[#050505] border border-[#C9A227]/30 flex items-center justify-center text-[#C9A227] mb-5 group-hover:border-[#C9A227] group-hover:bg-[#C9A227]/10 transition-all">
                  <Icon name={service.iconName} className="w-6 h-6 text-[#C9A227]" />
                </div>

                {/* Service Title */}
                <h3 className="font-headings text-[21px] sm:text-[23px] text-white font-medium mb-3 group-hover:text-[#C9A227] transition-colors leading-[1.2]">
                  {service.title}
                </h3>

                {/* Concise Factual Description */}
                <p className="text-[#94A3B8] text-[14px] leading-relaxed mb-6">
                  {service.shortDesc}
                </p>
              </div>

              {/* Direct Learn More Action */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <Link
                  to={`/services/${service.slug}`}
                  className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#CBD5E1] group-hover:text-[#C9A227] transition-colors"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Consultation Banner */}
        <div className="mt-14 p-8 sm:p-10 rounded-[18px] bg-[#0B1320] border border-[#C9A227]/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <span className="text-[#C9A227] text-[11px] font-sans font-semibold tracking-wider uppercase block mb-1">
              Custom Advisory Mandates
            </span>
            <h4 className="font-headings text-[20px] sm:text-[24px] text-white font-medium">
              Have an active capital raising or strategic partnership mandate?
            </h4>
          </div>
          <Link
            to="/book-consultation"
            className="inline-flex items-center gap-2 whitespace-nowrap bg-[#C9A227] hover:bg-[#DFBA42] text-[#050505] font-semibold px-6 py-3.5 rounded-[10px] text-[13.5px] transition-all shadow-[0_4px_16px_rgba(201,162,39,0.25)] shrink-0"
          >
            <span>Request a Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
