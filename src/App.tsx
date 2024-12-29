import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Features } from './pages/Features';
import { Pricing } from './pages/Pricing';
import { Blog } from './pages/Blog';
import { Contact } from './pages/Contact';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';
import { Auth } from './pages/Auth';
import { ForgotPassword } from './pages/ForgotPassword';
import { ResetPassword } from './pages/ResetPassword';
import { AuthGuard } from './components/auth/AuthGuard';
import { AdCopy } from './pages/AdCopy';
import { LongForm } from './pages/LongForm';
import { SocialMedia } from './pages/SocialMedia';
import { YouTubeContent } from './pages/YouTubeContent';
import { DocumentGenerator } from './pages/DocumentGenerator';

export function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/login" element={<Auth />} />
            <Route path="/signup" element={<Auth />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/tools/ad-copy" element={
              <AuthGuard><AdCopy /></AuthGuard>
            } />
            <Route path="/tools/long-form" element={
              <AuthGuard><LongForm /></AuthGuard>
            } />
            <Route path="/tools/social-media" element={
              <AuthGuard><SocialMedia /></AuthGuard>
            } />
            <Route path="/tools/youtube" element={
              <AuthGuard><YouTubeContent /></AuthGuard>
            } />
            <Route path="/tools/documents" element={
              <AuthGuard><DocumentGenerator /></AuthGuard>
            } />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}