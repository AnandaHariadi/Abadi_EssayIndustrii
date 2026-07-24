'use client';

import React from 'react';

export default function EnvironmentalImpactTab() {
  return (
    <div className="space-y-8 animate-fade-in font-sans text-slate-900">
      
      {/* Header Banner - Zero Component Icons */}
      <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-lg flex flex-wrap items-center justify-between gap-4">
        <div>
          <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest font-mono">ANALITIK SERTIFIKASI NET-ZERO & ESG</span>
          <h3 className="text-xl font-extrabold font-heading text-slate-900 mt-0.5">Metrik Dampak Lingkungan & Carbon Offsets</h3>
          <p className="text-xs text-slate-500 mt-1">Laporan fiksasi karbon permanen, reduksi gas rumah kaca, dan restorasi kesuburan tanah pertanian Subang.</p>
        </div>

        <div className="flex items-center gap-3">
          <span className="px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200 font-mono">
            Sertifikasi Standar ISO 14064-2
          </span>
        </div>
      </div>

      {/* 4 ESG Cards - Zero Component Icons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        <div className="p-5 rounded-3xl bg-white border border-slate-200 shadow-lg space-y-1">
          <span className="text-[10px] font-bold text-slate-400 uppercase font-mono">Total Karbon Terfiksasi</span>
          <p className="text-3xl font-extrabold font-heading text-emerald-600 font-mono">+28.4 <span className="text-base font-bold text-slate-700">Ton</span></p>
          <p className="text-xs text-slate-500 font-medium">Permanen Terkunci dalam Pori Biochar (&gt; 100 Tahun)</p>
        </div>

        <div className="p-5 rounded-3xl bg-white border border-slate-200 shadow-lg space-y-1">
          <span className="text-[10px] font-bold text-slate-400 uppercase font-mono">Limbah Biomassa Terolah</span>
          <p className="text-3xl font-extrabold font-heading text-slate-900 font-mono">14.2 <span className="text-base font-bold text-slate-700">Ton</span></p>
          <p className="text-xs text-slate-500 font-medium">Mencegah Pembakaran Liar di Lahan Pertanian</p>
        </div>

        <div className="p-5 rounded-3xl bg-white border border-slate-200 shadow-lg space-y-1">
          <span className="text-[10px] font-bold text-slate-400 uppercase font-mono">Peningkatan Ph Lahan Tani</span>
          <p className="text-3xl font-extrabold font-heading text-blue-600 font-mono">+1.8 <span className="text-base font-bold text-slate-700">pH</span></p>
          <p className="text-xs text-slate-500 font-medium">Restorasi Lahan Kritis Terkontaminasi Pupuk Kimia</p>
        </div>

        <div className="p-5 rounded-3xl bg-white border border-slate-200 shadow-lg space-y-1">
          <span className="text-[10px] font-bold text-slate-400 uppercase font-mono">Substitusi Bahan Bakar Fosil</span>
          <p className="text-3xl font-extrabold font-heading text-amber-600 font-mono">8,450 <span className="text-base font-bold text-slate-700">kWh</span></p>
          <p className="text-xs text-slate-500 font-medium">Energi Syngas Terbarukan untuk Pengeringan Tani</p>
        </div>

      </div>

      {/* Carbon Matrix & ESG Roadmap Section */}
      <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-lg space-y-4">
        <div className="pb-2 border-b border-slate-100 flex justify-between items-center">
          <h4 className="text-sm font-extrabold font-heading text-slate-900">Rincian Metodologi Perhitungan Carbon Sequestration</h4>
          <span className="text-xs font-mono text-emerald-600 font-bold">STANDAR IPPC & GOLD STANDARD</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-700">
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
            <span className="font-extrabold text-slate-900 block font-heading">1. Karbon Terikat (Biochar Stable Carbon)</span>
            <p className="text-slate-500 leading-relaxed">71.8% dari massa biochar merupakan karbon elemental terikat yang tidak mengalami pembusukan anaerobik.</p>
          </div>
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
            <span className="font-extrabold text-slate-900 block font-heading">2. Penyerapan Nutrisi & Air Lahan</span>
            <p className="text-slate-500 leading-relaxed">Kapasitas pertukaran kation (KPK) tanah meningkat 42%, mengurangi erosi & kebutuhan pupuk kimia Sintetis.</p>
          </div>
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
            <span className="font-extrabold text-slate-900 block font-heading">3. Reduksi Metana (CH4 Avoidance)</span>
            <p className="text-slate-500 leading-relaxed">Pencegahan pembusukan basah sekam padi di pembuangan mengurangi emisi CH4 sebesar 28.0 kg CO2e / Ton.</p>
          </div>
        </div>
      </div>

    </div>
  );
}
