'use client';

import React from 'react';
import { ArrowRight, Cpu, TrendingUp, ShieldCheck } from 'lucide-react';

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
    <section id="beranda" className="relative bg-white text-slate-900 pt-36 pb-24 border-b border-slate-100 font-sans">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Minimalist Executive Headline */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-slate-700 text-xs font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-orange-500" />
              <span>PLATFORM TEKNOLOGI BIOMASSA & IOT</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold font-heading text-slate-900 tracking-tight leading-[1.15]">
              Konversi Limbah Biomassa Menjadi <span className="bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">Energi & Biochar</span> Terukur
            </h1>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl font-normal">
              Sistem ABADI mengintegrasikan telemetri sensor IoT presisi tinggi dengan model <span className="text-slate-900 font-semibold">Random Forest Regression</span> untuk fiksasi karbon permanen dan optimasi energi terbarukan.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-3">
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
            <div className="pt-6 border-t border-slate-100 grid grid-cols-3 gap-6">
              <div>
                <p className="text-2xl font-extrabold font-heading text-slate-900">96.8%</p>
                <p className="text-xs text-slate-500 font-medium mt-0.5">Akurasi Model ML</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold font-heading text-orange-600">12.4 Ton</p>
                <p className="text-xs text-slate-500 font-medium mt-0.5">Biomassa Diolah</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold font-heading text-slate-900">28.4 Ton</p>
                <p className="text-xs text-slate-500 font-medium mt-0.5">Emisi CO2e Terfiksasi</p>
              </div>
            </div>

          </div>

          {/* Right Column: Clean Minimalist Preview Box */}
          <div className="lg:col-span-5">
            <div className="p-7 rounded-2xl bg-white border border-slate-200 shadow-xl space-y-5">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Reaktor Subang Node #01</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Batok Kelapa • Batch #2026-089</p>
                </div>
                <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                  ONLINE
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <p className="text-xs text-slate-500 font-medium">Suhu Reaktor (DHT22)</p>
                  <p className="text-2xl font-extrabold text-orange-600 font-heading mt-1">435.2 °C</p>
                  <p className="text-[11px] text-slate-500 mt-1">Status Optimal</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <p className="text-xs text-slate-500 font-medium">Tekanan (BMP280)</p>
                  <p className="text-2xl font-extrabold text-slate-900 font-heading mt-1">1018.4 hPa</p>
                  <p className="text-[11px] text-slate-500 mt-1">Stabil Barometrik</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex justify-between text-xs font-bold text-slate-700">
                  <span>Estimasi Biochar (Random Forest)</span>
                  <span className="text-orange-600 font-mono">37.0% (92.5 kg)</span>
                </div>
                <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-orange-500 to-amber-500 h-full w-[85%]" />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
