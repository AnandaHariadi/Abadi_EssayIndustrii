'use client';

import React, { useState, useEffect } from 'react';
import { Leaf, Zap, CloudOff, Globe, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function ImpactSection() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [liveCo2Val, setLiveCo2Val] = useState(28.4);

  // Live pulsing demo for judges
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveCo2Val((prev) => (prev === 28.4 ? 28.6 : 28.4));
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  const roadmapSteps = [
    { phase: 'Fase 1 (2026)', target: '50 Ton CO2e', progress: '56.8% Capaian', desc: 'Fase komersialisasi reaktor Subang #01 & sertifikasi karbon awal.' },
    { phase: 'Fase 2 (2028)', target: '150 Ton CO2e', progress: 'Target 15 Node', desc: 'Ekspansi unit reaktor ke seluruh wilayah pulau Jawa & Sumatra.' },
    { phase: 'Fase 3 (2035)', target: '1,000 Ton CO2e', progress: 'Skala Industri', desc: 'Integrasi pasar karbon internasional & pupuk hayati biochar.' },
    { phase: 'Fase 4 (2060)', target: 'Net-Zero Carbon', progress: 'Zero Emission', desc: 'Target pencapaian emisi netral nasional Indonesia 2060.' },
  ];

  const monthlyData = [
    { month: 'Jan', val: 3.2, pct: 15 },
    { month: 'Feb', val: 5.8, pct: 25 },
    { month: 'Mar', val: 9.4, pct: 38 },
    { month: 'Apr', val: 13.1, pct: 52 },
    { month: 'Mei', val: 17.5, pct: 68 },
    { month: 'Jun', val: 22.8, pct: 82 },
    { month: 'Jul (Live)', val: liveCo2Val, pct: 96 },
  ];

  const activeRoadmap = roadmapSteps[activeStepIndex];

  return (
    <section id="dampak" className="py-24 bg-slate-50 text-slate-900 border-b border-slate-200 font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-600">Matriks Dampak ESG & Karbon</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 tracking-tight">
            Indikator Capaian Fiksasi Karbon & Energi
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Data kuantitatif fiksasi karbon permanen biochar dan substitusi energi terbarukan yang terverifikasi.
          </p>
        </div>

        {/* 3 Metric Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          <div className="p-7 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 font-mono">Limbah Biomassa</span>
              <div className="w-8 h-8 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center font-bold">
                <Leaf className="w-4 h-4" />
              </div>
            </div>
            <p className="text-4xl font-extrabold font-heading text-slate-900">12,450 <span className="text-base font-bold text-orange-600">kg</span></p>
            <p className="text-xs text-slate-600 font-medium">Total biomassa terolah diselamatkan dari pembakaran liar.</p>
          </div>

          <div className="p-7 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 font-mono">Energi Terbarukan</span>
              <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center font-bold">
                <Zap className="w-4 h-4" />
              </div>
            </div>
            <p className="text-4xl font-extrabold font-heading text-slate-900">4,820 <span className="text-base font-bold text-orange-600">kWh</span></p>
            <p className="text-xs text-slate-600 font-medium">Energi biogas yang dihasilkan untuk kebutuhan komunitas.</p>
          </div>

          <div className="p-7 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 font-mono">Fiksasi Karbon</span>
              <div className="w-8 h-8 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center font-bold">
                <CloudOff className="w-4 h-4" />
              </div>
            </div>
            <p className="text-4xl font-extrabold font-heading text-orange-600">{liveCo2Val} <span className="text-base font-bold text-slate-900">Ton CO2e</span></p>
            <p className="text-xs text-slate-600 font-medium">Fiksasi karbon jangka panjang terfiksasi di pori biochar.</p>
          </div>

        </div>

        {/* Live Motion Carbon Reduction Monthly Chart */}
        <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-5 mb-12">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-orange-600 font-mono flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                LIVE DEMO GRAFIK STREAMING
              </span>
              <h4 className="text-lg font-bold font-heading text-slate-900 mt-0.5">Akumulasi Penurunan Emisi CO2e Bulanan (Tahun 2026)</h4>
            </div>
            <span className="text-xs text-emerald-600 font-bold font-mono px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 shadow-sm animate-pulse">
              +18.4% / Bulan (LIVE)
            </span>
          </div>

          {/* Bold Animated Bar Chart */}
          <div className="h-64 bg-slate-50 rounded-2xl p-4 border border-slate-200 flex items-end justify-between gap-3 overflow-hidden relative">
            {monthlyData.map((d, idx) => {
              const isLatest = idx === monthlyData.length - 1;
              return (
                <div key={idx} className="w-full flex flex-col items-center gap-2 group h-full justify-end relative z-10">
                  <span className="text-xs text-orange-600 font-extrabold font-mono">
                    {d.val}T
                  </span>
                  <div
                    className={`w-full rounded-t-xl transition-all duration-500 ${
                      isLatest
                        ? 'bg-gradient-to-t from-orange-600 via-amber-500 to-orange-400 shadow-lg shadow-orange-500/30 animate-pulse'
                        : 'bg-gradient-to-t from-orange-400 to-amber-300 opacity-85 group-hover:opacity-100'
                    }`}
                    style={{ height: `${d.pct}%`, minHeight: '24px' }}
                  />
                  <span className="text-xs text-slate-700 font-extrabold">{d.month}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Interactive Peta Jalan Net-Zero Stepper */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-8">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-slate-100">
            <div className="space-y-1 text-left">
              <div className="inline-flex items-center gap-2 text-orange-600 text-xs font-bold uppercase tracking-widest">
                <Globe className="w-4 h-4" />
                <span>Peta Jalan Net-Zero Emission 2060 Komunitas ABADI</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold font-heading text-slate-900">
                Tahapan Capaian Pengurangan Emisi Karbon Terverifikasi
              </h3>
            </div>

            <div className="px-4 py-2 rounded-xl bg-orange-50 border border-orange-200 text-orange-800 text-xs font-bold font-mono">
              Fase Aktif: {activeRoadmap.phase}
            </div>
          </div>

          {/* Clickable Stepper Roadmap Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {roadmapSteps.map((step, idx) => {
              const isSelected = activeStepIndex === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`p-5 rounded-2xl border text-left space-y-2 transition-all cursor-pointer active:scale-95 ${
                    isSelected
                      ? 'bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 text-white border-orange-500 shadow-lg shadow-orange-500/20'
                      : 'bg-slate-50 border-slate-200 text-slate-800 hover:bg-slate-100'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${
                      isSelected ? 'bg-white text-orange-600' : 'bg-slate-200 text-slate-700'
                    }`}>
                      {step.phase}
                    </span>
                    {isSelected && <CheckCircle2 className="w-4 h-4 text-white" />}
                  </div>

                  <p className={`text-base font-extrabold font-heading ${isSelected ? 'text-white' : 'text-slate-900'}`}>{step.target}</p>
                  <p className={`text-xs font-medium ${isSelected ? 'text-orange-100' : 'text-slate-600'}`}>{step.progress}</p>
                </button>
              );
            })}
          </div>

          {/* Active Phase Explanation Card */}
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
            <p className="text-xs font-bold text-orange-600 uppercase tracking-wider font-mono">Detail {activeRoadmap.phase}</p>
            <p className="text-sm font-bold text-slate-900">{activeRoadmap.target} — {activeRoadmap.progress}</p>
            <p className="text-xs text-slate-600 font-medium mt-1">{activeRoadmap.desc}</p>
          </div>

          {/* Progress Bar */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 space-y-2">
            <div className="flex justify-between text-xs font-bold">
              <span className="text-slate-700">Progres Capaian Karbon Terfiksasi Saat Ini ({activeRoadmap.phase})</span>
              <span className="text-orange-600 font-mono">{liveCo2Val} / 50 Ton CO2e (56.8%)</span>
            </div>
            <div className="w-full bg-slate-200 h-3 rounded-full overflow-hidden p-0.5">
              <div className="bg-gradient-to-r from-orange-500 via-amber-400 to-orange-500 h-full rounded-full w-[56.8%]" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
