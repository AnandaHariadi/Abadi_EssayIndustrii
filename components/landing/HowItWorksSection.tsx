'use client';

import React from 'react';
import { Truck, Cpu, Radio, BrainCircuit, BarChart3, CheckCircle2 } from 'lucide-react';

export default function HowItWorksSection() {
  const steps = [
    {
      num: '01',
      title: 'Pengumpulan & Input Limbah Biomassa',
      description: 'Limbah organik seperti batok kelapa, sekam padi, dan serbuk kayu dimasukkan ke dalam ruang pengering awal (pre-dryer chamber) reaktor ABADI.',
      badge: 'Input & Pre-Drying',
      icon: Truck,
    },
    {
      num: '02',
      title: 'Pembacaan Sensor Telemetri Presisi',
      description: 'Modul sensor IoT (DHT22 untuk suhu & kelembaban, BMP280 barometer tekanan tabung, dan MQ-135 kualitas gas) membaca kondisi reaktor secara berkelanjutan.',
      badge: 'Sensors: DHT22, BMP280, MQ-135',
      icon: Cpu,
    },
    {
      num: '03',
      title: 'Transmisi Real-Time via Protokol MQTT',
      description: 'Paket data telemetri dikirim secara kontinyu dengan interval 5 detik ke server backend Node.js dan disimpan dalam database time-series.',
      badge: 'MQTT Broker & Telemetry',
      icon: Radio,
    },
    {
      num: '04',
      title: 'Analitik Prediktif ML (Random Forest)',
      description: 'Flask API Python mengeksekusi algoritma Random Forest Regression untuk menghitung estimasi yield Biochar, Bio-oil, energi Syngas, serta memberikan rekomendasi suhu optimal.',
      badge: 'Machine Learning Engine',
      icon: BrainCircuit,
    },
    {
      num: '05',
      title: 'Visualisasi Dashboard & Produk Akhir',
      description: 'Hasil pengolahan dan grafik real-time ditampilkan di dashboard. Pengguna memperoleh Biochar berkualitas tinggi terfiksasi karbon dan insentif Poin Hijau.',
      badge: 'Dashboard & Output',
      icon: BarChart3,
    },
  ];

  return (
    <section id="cara-kerja" className="py-24 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-600">Arsitektur Transmisi Data</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 tracking-tight">
            Alur Integrasi Reaktor Hingga Analitik Cloud
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Metode otomatisasi bertahap yang mengintegrasikan fisik perangkat reaktor dengan pemrosesan cloud.
          </p>
        </div>

        {/* 2-Column Split Placement Model */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Sticky Executive Architecture Box */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-6">
              
              <div className="pb-4 border-b border-slate-100">
                <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-[11px] font-bold border border-orange-200">
                  SISTEM TERPARISIPASI
                </span>
                <h3 className="text-2xl font-extrabold font-heading text-slate-900 mt-3">
                  Transmisi Data 5 Detik Berkelanjutan
                </h3>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed">
                Arsitektur terintegrasi memastikan setiap sesi pirolisis terpantau tanpa jeda, meminimalisir risiko anomali suhu dan mengoptimalkan hasil karbon terfiksasi.
              </p>

              <div className="space-y-3 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <p className="text-xs text-slate-500 font-medium">Protokol Komunikasi</p>
                  <p className="text-sm font-bold text-slate-900">MQTT WebSockets v3.1.1</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <p className="text-xs text-slate-500 font-medium">Mesin Kecerdasan Buatan</p>
                  <p className="text-sm font-bold text-orange-600">Random Forest (100 Ensembled Trees)</p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Connected Timeline Nodes */}
          <div className="lg:col-span-7 relative pl-4 sm:pl-8 space-y-8">
            
            {/* Vertical Timeline Connection Line */}
            <div className="absolute left-[27px] sm:left-[43px] top-6 bottom-6 w-0.5 bg-gradient-to-b from-orange-500 via-amber-400 to-orange-600" />

            {steps.map((st, idx) => {
              const Icon = st.icon;
              return (
                <div key={idx} className="relative flex items-start gap-5 group">
                  
                  {/* Timeline Badge Node */}
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-white border-2 border-orange-500 text-orange-600 font-bold font-heading text-sm sm:text-base flex items-center justify-center flex-shrink-0 shadow-md relative z-10 group-hover:bg-gradient-to-tr group-hover:from-orange-500 group-hover:to-amber-500 group-hover:text-white transition-all">
                    {st.num}
                  </div>

                  {/* Step Card */}
                  <div className="flex-1 p-6 rounded-2xl bg-white border border-slate-200 shadow-md hover:shadow-lg transition-all space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="text-base sm:text-lg font-bold font-heading text-slate-900">
                        {st.title}
                      </h4>
                      <span className="px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[10px] font-mono font-bold border border-slate-200">
                        {st.badge}
                      </span>
                    </div>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {st.description}
                    </p>
                  </div>

                </div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}
