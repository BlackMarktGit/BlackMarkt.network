import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ScrollToTop from './components/common/ScrollToTop';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PracticesPage from './pages/PracticesPage';
import PracticeDetailPage from './pages/PracticeDetailPage';
import IndustriesPage from './pages/IndustriesPage';
import IndustryDetailPage from './pages/IndustryDetailPage';
import InvestorsPage from './pages/InvestorsPage';
import TransactionsPage from './pages/TransactionsPage';
import TransactionDetailPage from './pages/TransactionDetailPage';
import InsightsPage from './pages/InsightsPage';
import InsightDetailPage from './pages/InsightDetailPage';
import ContactPage from './pages/ContactPage';
import BookConsultationPage from './pages/BookConsultationPage';
import RequestProposalPage from './pages/RequestProposalPage';
import CompliancePage from './pages/CompliancePage';
import LegalPage from './pages/LegalPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';

export default function App() {
  const basename = import.meta.env.BASE_URL || '/';

  return (
    <BrowserRouter basename={basename}>
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
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/book-consultation" element={<BookConsultationPage />} />
        <Route path="/request-proposal" element={<RequestProposalPage />} />
        <Route path="/compliance" element={<CompliancePage />} />
        <Route path="/legal" element={<LegalPage />} />
        <Route path="/privacy" element={<PrivacyPolicyPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/cookies" element={<PrivacyPolicyPage />} />

        {/* Clean redirects for legacy or shorthand routes */}
        <Route path="/reports" element={<Navigate to="/insights" replace />} />
        <Route path="/leadership" element={<Navigate to="/about" replace />} />
        <Route path="/careers" element={<Navigate to="/about" replace />} />
        <Route path="/assessment" element={<Navigate to="/book-consultation" replace />} />
        <Route path="/shop-now" element={<Navigate to="/book-consultation" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
