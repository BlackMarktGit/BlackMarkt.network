import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/common/ScrollToTop';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PracticesPage from './pages/PracticesPage';
import PracticeDetailPage from './pages/PracticeDetailPage';
import IndustriesPage from './pages/IndustriesPage';
import IndustryDetailPage from './pages/IndustryDetailPage';
import TransactionsPage from './pages/TransactionsPage';
import TransactionDetailPage from './pages/TransactionDetailPage';
import InsightsPage from './pages/InsightsPage';
import InsightDetailPage from './pages/InsightDetailPage';
import ReportsPage from './pages/ReportsPage';
import LeadershipPage from './pages/LeadershipPage';
import InvestorsPage from './pages/InvestorsPage';
import CareersPage from './pages/CareersPage';
import ContactPage from './pages/ContactPage';
import BookConsultationPage from './pages/BookConsultationPage';
import RequestProposalPage from './pages/RequestProposalPage';
import AssessmentPage from './pages/AssessmentPage';
import CompliancePage from './pages/CompliancePage';
import LegalPage from './pages/LegalPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<PracticesPage />} />
        <Route path="/services/:slug" element={<PracticeDetailPage />} />
        <Route path="/industries" element={<IndustriesPage />} />
        <Route path="/industries/:slug" element={<IndustryDetailPage />} />
        <Route path="/investors" element={<InvestorsPage />} />
        <Route path="/transactions" element={<TransactionsPage />} />
        <Route path="/transactions/:slug" element={<TransactionDetailPage />} />
        <Route path="/insights" element={<InsightsPage />} />
        <Route path="/insights/:slug" element={<InsightDetailPage />} />
        <Route path="/reports" element={<ReportsPage />} />
        <Route path="/leadership" element={<LeadershipPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/book-consultation" element={<BookConsultationPage />} />
        <Route path="/request-proposal" element={<RequestProposalPage />} />
        <Route path="/assessment" element={<AssessmentPage />} />
        <Route path="/compliance" element={<CompliancePage />} />
        <Route path="/privacy" element={<PrivacyPolicyPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/cookies" element={<PrivacyPolicyPage />} />
        <Route path="/shop-now" element={<RequestProposalPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}
