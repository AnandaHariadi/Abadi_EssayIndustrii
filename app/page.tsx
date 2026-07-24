'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

import Navbar from '@/components/landing/Navbar';
import HeroSection from '@/components/landing/HeroSection';
import AboutSection from '@/components/landing/AboutSection';
import HowItWorksSection from '@/components/landing/HowItWorksSection';
import FeaturesSection from '@/components/landing/FeaturesSection';
import ImpactSection from '@/components/landing/ImpactSection';
import ContactSection from '@/components/landing/ContactSection';
import Footer from '@/components/landing/Footer';
import AuthModal from '@/components/auth/AuthModal';

export default function LandingPageHub() {
  const router = useRouter();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const handleOpenAuthModal = () => {
    setIsAuthModalOpen(true);
  };

  const handleLoginSuccess = (role: string) => {
    setIsAuthModalOpen(false);
    window.location.href = '/dashboard';
  };

  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans selection:bg-orange-500 selection:text-white">
      {/* Navbar with Anchor Scroll & Redirect Auth Modal */}
      <Navbar
        onOpenAuthModal={handleOpenAuthModal}
      />

      {/* Hero Section */}
      <HeroSection
        onOpenAuthModal={handleOpenAuthModal}
        onExploreFeatures={() => {
          const el = document.getElementById('fitur');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Tentang Kami Section */}
      <AboutSection />

      {/* Cara Kerja Section */}
      <HowItWorksSection />

      {/* Fitur Section */}
      <FeaturesSection onOpenAuthModal={handleOpenAuthModal} />

      {/* Dampak Section */}
      <ImpactSection />

      {/* Kontak Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Authentication Modal */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />
    </main>
  );
}
