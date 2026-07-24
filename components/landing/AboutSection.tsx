'use client';

import React from 'react';
import { AlertTriangle, ShieldCheck, Leaf, Layers } from 'lucide-react';

export default function AboutSection() {
  const cards = [
    {
      icon: AlertTriangle,
      title: 'Tantangan Biomassa & Energi',
      description: 'Penumpukan limbah pertanian tanpa pengelolaan terukur memicu pembuangan terbuka dan kehilangan potensi nilai energi terbarukan.',
    },
    {
      icon: ShieldCheck,
      title: 'Teknologi Reaktor Terintegrasi',
      description: 'Penggabungan sensor IoT presisi dengan pemroses telemetry cloud untuk monitoring suhu dan tekanan pirolisis secara real-time.',
    },
    {
      icon: Leaf,
      title: 'Fiksasi Karbon & Net-Zero',
      description: 'Menghasilkan biochar terfiksasi karbon jangka panjang yang siap diintegrasikan ke dalam skema perdagangan karbon dan pertanian berbasis data.',
    }
  ];

  return (
    <section id="tentang-kami" className="py-20 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-600">Tentang Solusi ABADI</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 tracking-tight">
            Pengelolaan Biomassa Terintegrasi berbasis Data & AI
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Menjawab krisis pengelolaan limbah biomassa melalui teknologi reaktor terukur dan analitik prediktif.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-7 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow space-y-4"
              >
                <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold font-heading text-slate-900">{item.title}</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
