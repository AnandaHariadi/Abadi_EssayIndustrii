'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  onOpenAuthModal: () => void;
  onExploreFeatures: () => void;
}

export default function HeroSection({ onOpenAuthModal, onExploreFeatures }: HeroSectionProps) {
  const handleDashboardRedirect = () => {
    if (typeof window !== 'undefined') {
      const isAuth = localStorage.getItem('abadi_auth_active');
      if (isAuth === 'true') {
        window.location.href = '/dashboard';
      } else {
        window.location.href = '/login?requireAuth=true';
      }
    }
  };

  return (
    <section id="beranda" className="relative bg-white text-slate-900 pt-32 sm:pt-36 pb-20 sm:pb-24 border-b border-slate-100 font-sans overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Executive Headline */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-slate-700 text-xs font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              <span>PLATFORM TEKNOLOGI BIOMASSA & IOT</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-slate-900 tracking-tight leading-[1.12]">
              Konversi Limbah Biomassa Menjadi <span className="bg-gradient-to-r from-orange-600 via-amber-500 to-orange-500 bg-clip-text text-transparent">Energi & Biochar</span> Terukur
            </h1>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl font-normal">
              Sistem ABADI mengintegrasikan telemetri sensor IoT presisi tinggi dengan model <span className="text-slate-900 font-semibold">Random Forest Regression</span> untuk fiksasi karbon permanen dan optimasi energi terbarukan.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={handleDashboardRedirect}
                className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 text-white font-bold text-sm shadow-md shadow-orange-500/20 hover:shadow-lg hover:shadow-orange-500/30 transition-all flex items-center gap-2.5 cursor-pointer active:scale-95"
              >
                <span>Buka Dashboard</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#cara-kerja"
                className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 font-semibold text-sm transition-colors cursor-pointer"
              >
                Lihat Cara Kerja
              </a>
            </div>

            {/* Key Minimal Metrics */}
            <div className="pt-6 border-t border-slate-100 grid grid-cols-3 gap-4 sm:gap-6">
              <div>
                <p className="text-xl sm:text-2xl font-extrabold font-heading text-slate-900">96.8%</p>
                <p className="text-xs text-slate-500 font-medium mt-0.5">Akurasi Model ML</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-extrabold font-heading text-orange-600">12.4 Ton</p>
                <p className="text-xs text-slate-500 font-medium mt-0.5">Biomassa Diolah</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-extrabold font-heading text-slate-900">28.4 Ton</p>
                <p className="text-xs text-slate-500 font-medium mt-0.5">Emisi CO2e Terfiksasi</p>
              </div>
            </div>

          </div>

          {/* Right Column: Larger & Shifted Right 3D Rotating ABADI Reactor Machine */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end items-center relative py-6 lg:pr-2">
            
            {/* Background Glow */}
            <div className="absolute w-[340px] sm:w-[480px] h-[340px] sm:h-[480px] bg-gradient-to-tr from-orange-400/20 via-amber-300/20 to-orange-500/10 rounded-full blur-3xl -z-10 pointer-events-none" />

            {/* Reactor Container with 3D Rotate Sway Animation */}
            <div className="relative group flex items-center justify-center transform translate-x-2 sm:translate-x-6 lg:translate-x-10">
              
              {/* Floating Status Badge Top Left */}
              <div className="absolute -top-4 -left-4 sm:-left-12 z-20 px-4 py-2 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-xl text-left hidden sm:block">
                <span className="text-[9px] font-mono font-bold text-slate-400 uppercase block">NODE SUBANG #01</span>
                <span className="text-xs font-extrabold text-emerald-600 font-mono flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  REAKTOR ONLINE (442°C)
                </span>
              </div>

              {/* Floating Status Badge Bottom Right */}
              <div className="absolute -bottom-2 -right-4 sm:-right-8 z-20 px-4 py-2.5 rounded-2xl bg-slate-900 text-white border border-slate-800 shadow-2xl text-left hidden sm:block">
                <span className="text-[9px] font-mono font-bold text-orange-400 uppercase block">MODEL PREDIKSI ML</span>
                <span className="text-xs font-extrabold font-mono text-white">YIELD BIOCHAR: 37.0%</span>
              </div>

              {/* Fix Reactor Image - Larger Size & Positioned Right */}
              <img
                src="/reaktor-abadi-v3.png"
                alt="Reaktor Pirolisis ABADI Fix Cerdas"
                className="w-[320px] sm:w-[460px] md:w-[540px] lg:w-[580px] h-auto object-contain animate-rotate-sway drop-shadow-2xl cursor-pointer"
              />

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
