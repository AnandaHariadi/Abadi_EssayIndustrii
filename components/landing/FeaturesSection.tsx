'use client';

import React, { useState } from 'react';
import { Activity, BrainCircuit, MapPin, Award, CheckCircle2, ArrowRight, ChevronRight, Sparkles } from 'lucide-react';

interface FeaturesSectionProps {
  onOpenAuthModal: () => void;
}

export default function FeaturesSection({ onOpenAuthModal }: FeaturesSectionProps) {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [mlTemp, setMlTemp] = useState(430);

  const biocharYield = (38 - (mlTemp - 380) * 0.04).toFixed(1);
  const bioOilYield = (24 + Math.sin((mlTemp - 380) * 0.05) * 6).toFixed(1);

  const modules = [
    {
      num: '01',
      title: 'Telemetri Sensor Real-Time',
      subtitle: 'Monitoring Suhu, Tekanan & Gas',
      icon: Activity,
      desc: 'Pembacaan parameter fisik reaktor pirolisis via sensor DHT22, BMP280, & MQ-135 secara kontinu dengan interval 5 detik.',
      tags: ['MQTT WebSockets', 'Log Telemetri', 'Alert Over-Temp'],
    },
    {
      num: '02',
      title: 'Prediksi ML Random Forest',
      subtitle: 'Estimasi Yield Biochar & Suhu Optimal',
      icon: BrainCircuit,
      desc: 'Algoritma machine learning ensembled 100 decision trees yang memprediksi persentase Biochar, Bio-oil, & energi Syngas.',
      tags: ['Akurasi R2 = 0.948', 'Fixed Carbon Optimization', 'Preskriptif AI'],
    },
    {
      num: '03',
      title: 'Peta Sebaran Reaktor Nasional',
      subtitle: 'Visualisasi Geografis 5 Node Aktif',
      icon: MapPin,
      desc: 'Pemantauan titik reaktor aktif di Subang, Malang, Lampung, Karawang, dan Makassar dalam satu tampilan peta interaktif.',
      tags: ['Multi-Node Monitoring', 'Kapasitas Harian', 'OpenStreetMap'],
    },
    {
      num: '04',
      title: 'Gamifikasi Poin Hijau & Forum',
      subtitle: 'Insentif Karbon & Pasar Sirkular',
      icon: Award,
      desc: 'Program reward atas setiap fiksasi karbon biomassa, dilengkapi katalog penukaran e-wallet dan forum kolaborasi pemuda.',
      tags: ['1,450 PTS Saldo', 'Katalog Vouchers', 'Pasar Biochar'],
    },
  ];

  const current = modules[activeTab];

  return (
    <section id="fitur" className="py-24 bg-white text-slate-900 border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-600">Executive Command Hub</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 tracking-tight">
            Arsitektur Fitur Dashboard Presisi Tinggi
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Pilih modul di sebelah kiri untuk melihat simulasi tampilan antarmuka dan analitik secara langsung.
          </p>
        </div>

        {/* Split Command Deck */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Vertical Control Deck */}
          <div className="lg:col-span-5 space-y-3">
            {modules.map((mod, idx) => {
              const Icon = mod.icon;
              const isActive = activeTab === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all flex items-center justify-between group ${
                    isActive
                      ? 'bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 text-white border-orange-500 shadow-lg shadow-orange-500/20'
                      : 'bg-slate-50 border-slate-200 text-slate-800 hover:bg-slate-100'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className={`text-xs font-bold font-mono ${isActive ? 'text-white' : 'text-orange-600'}`}>
                      {mod.num}
                    </span>
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold ${
                      isActive ? 'bg-white/20 text-white' : 'bg-white border border-slate-200 text-slate-800'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold font-heading leading-tight">{mod.title}</h4>
                      <p className={`text-[11px] mt-0.5 ${isActive ? 'text-orange-100 font-medium' : 'text-slate-500'}`}>
                        {mod.subtitle}
                      </p>
                    </div>
                  </div>
                  <ChevronRight className={`w-4 h-4 transition-transform ${isActive ? 'text-white translate-x-1' : 'text-slate-400 group-hover:translate-x-0.5'}`} />
                </button>
              );
            })}
          </div>

          {/* Right Simulation Deck - CLEAN WHITE THEME (Removing dark box) */}
          <div className="lg:col-span-7">
            <div className="p-7 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-orange-600 font-mono">Modul Terpilih #{current.num}</span>
                  <h3 className="text-xl font-extrabold font-heading text-slate-900 mt-0.5">{current.title}</h3>
                </div>
                <button
                  onClick={onOpenAuthModal}
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-xs shadow-md flex items-center gap-1.5"
                >
                  <span>Buka Dashboard</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                {current.desc}
              </p>

              {/* Dynamic Interactive Light Box */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 space-y-4">
                {activeTab === 0 && (
                  <div className="space-y-3">
                    <div className="flex justify-between text-xs font-bold text-slate-600">
                      <span>Status Reaktor Subang Node #01</span>
                      <span className="text-emerald-600 font-bold font-mono">5s MQTT LIVE</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-sm"><p className="text-[10px] text-slate-500 font-medium">DHT22 Suhu</p><p className="text-base font-extrabold text-orange-600 font-heading">435.2 °C</p></div>
                      <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-sm"><p className="text-[10px] text-slate-500 font-medium">BMP280 Tekanan</p><p className="text-base font-extrabold text-slate-900 font-heading">1018 hPa</p></div>
                      <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-sm"><p className="text-[10px] text-slate-500 font-medium">MQ-135 Gas</p><p className="text-base font-extrabold text-orange-600 font-heading">125 PPM</p></div>
                    </div>
                  </div>
                )}

                {activeTab === 1 && (
                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-xs font-bold text-slate-700">
                      <span>Simulasi Suhu Optimasi ML</span>
                      <span className="text-orange-600 font-mono">{mlTemp} °C</span>
                    </div>
                    <input
                      type="range"
                      min={350}
                      max={550}
                      value={mlTemp}
                      onChange={(e) => setMlTemp(Number(e.target.value))}
                      className="w-full accent-orange-500"
                    />
                    <div className="flex justify-between text-xs font-mono font-bold pt-1">
                      <span className="text-slate-700">Biochar Output: <strong className="text-orange-600">{biocharYield}%</strong></span>
                      <span className="text-slate-700">Bio-Oil Output: <strong className="text-orange-600">{bioOilYield}%</strong></span>
                    </div>
                  </div>
                )}

                {activeTab === 2 && (
                  <div className="space-y-2 text-xs font-mono">
                    <div className="flex justify-between text-slate-600 text-[11px] font-bold border-b border-slate-200 pb-1">
                      <span>Monitoring 5 Node Geografis</span>
                      <span className="text-emerald-600 font-bold">100% ONLINE</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 pt-1 font-sans">
                      <div className="p-2.5 rounded-lg bg-white border border-slate-200 text-slate-800 font-bold">Jawa Barat (Subang #01)</div>
                      <div className="p-2.5 rounded-lg bg-white border border-slate-200 text-slate-800 font-bold">Jawa Timur (Malang #02)</div>
                    </div>
                  </div>
                )}

                {activeTab === 3 && (
                  <div className="p-4 rounded-xl bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 text-white flex items-center justify-between shadow-md">
                    <div>
                      <p className="text-[10px] text-orange-100 font-bold uppercase">Saldo Poin Hijau Terdaftar</p>
                      <p className="text-xl font-extrabold font-heading">1,450 PTS</p>
                    </div>
                    <span className="px-3 py-1 rounded-xl bg-white text-orange-600 text-xs font-bold font-mono">REWARDS READY</span>
                  </div>
                )}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-1">
                {current.tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 rounded-lg bg-slate-50 text-slate-700 text-xs font-semibold border border-slate-200">
                    {tag}
                  </span>
                ))}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
