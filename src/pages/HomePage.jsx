import React from 'react';
import Layout from '../components/layout/Layout';
import Hero from '../components/sections/Hero';
import AboutUsSection from '../components/sections/AboutUsSection';
import ServicesSection from '../components/sections/ServicesSection';
import IndustriesSection from '../components/sections/IndustriesSection';
import InvestorsSection from '../components/sections/InvestorsSection';
import TransactionsSection from '../components/sections/TransactionsSection';
import CorporateValuesSection from '../components/sections/CorporateValuesSection';
import StrategicConsultationForm from '../components/sections/StrategicConsultationForm';

export default function HomePage() {
  return (
    <Layout fullBleed={true}>
      {/* 1. Hero Section: London Bank / African Metropolis Skyline & Strategic Mandate Header */}
      <Hero />

      {/* 2. About Us: Who We Are & London-Africa Strategic Corridors */}
      <AboutUsSection />

      {/* 3. Core Advisory Services: The 9 Client Practice Areas */}
      <ServicesSection />

      {/* 4. Industries: The 9 Transformative Growth Sectors */}
      <IndustriesSection />

      {/* 5. Global Investor Network: Sovereign, Institutional & Private Capital */}
      <InvestorsSection />

      {/* 6. Transaction Capabilities & Execution Lifecycle */}
      <TransactionsSection />

      {/* 7. Corporate Values: Mission, Vision & Fiduciary Standards */}
      <CorporateValuesSection />

      {/* 8. Confidential Mandate Intake & Strategic Consultation Form */}
      <StrategicConsultationForm />
    </Layout>
  );
}
