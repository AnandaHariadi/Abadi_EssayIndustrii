'use client';

import React, { useState } from 'react';

export default function ProductionHistoryTab() {
  const [filterBiomass, setFilterBiomass] = useState('ALL');

  const historyData = [
    { id: 'BATCH-2026-089', date: '24 Juli 2026', biomass: 'SEKAM_PADI', weight: '250 kg', temp: '445 °C', biochar: '87.5 kg', bioOil: '52.0 L', syngas: '62 kWh', carbon: '+142 kg', status: 'VERIFIED' },
    { id: 'BATCH-2026-088', date: '23 Juli 2026', biomass: 'BATOK_KELAPA', weight: '300 kg', temp: '480 °C', biochar: '114.0 kg', bioOil: '68.5 L', syngas: '84 kWh', carbon: '+198 kg', status: 'VERIFIED' },
    { id: 'BATCH-2026-087', date: '22 Juli 2026', biomass: 'TONGKOL_JAGUNG', weight: '200 kg', temp: '420 °C', biochar: '62.0 kg', bioOil: '48.0 L', syngas: '49 kWh', carbon: '+98 kg', status: 'VERIFIED' },
    { id: 'BATCH-2026-086', date: '21 Juli 2026', biomass: 'SERBUK_KAYU', weight: '400 kg', temp: '450 °C', biochar: '136.0 kg', bioOil: '92.0 L', syngas: '108 kWh', carbon: '+240 kg', status: 'VERIFIED' },
    { id: 'BATCH-2026-085', date: '20 Juli 2026', biomass: 'SEKAM_PADI', weight: '250 kg', temp: '430 °C', biochar: '82.5 kg', bioOil: '51.0 L', syngas: '58 kWh', carbon: '+135 kg', status: 'VERIFIED' },
  ];

  const filtered = filterBiomass === 'ALL'
    ? historyData
    : historyData.filter((item) => item.biomass === filterBiomass);

  return (
    <div className="space-y-8 animate-fade-in font-sans text-slate-900">
      
      {/* Header Banner - Zero Component Icons */}
      <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-lg flex flex-wrap items-center justify-between gap-4">
        <div>
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest font-mono">DATABASE BATCH RIWAYAT PRODUKSI</span>
          <h3 className="text-xl font-extrabold font-heading text-slate-900 mt-0.5">Dataset Produksi Biochar & Bio-Oil Reaktor</h3>
          <p className="text-xs text-slate-500 mt-1">Data historis hasil konversi pirolisis biomassa terverifikasi untuk analisis Machine Learning & Audit Karbon.</p>
        </div>

        <div className="flex items-center gap-3">
          <select
            value={filterBiomass}
            onChange={(e) => setFilterBiomass(e.target.value)}
            className="px-3.5 py-2 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-800 focus:outline-none focus:border-slate-900"
          >
            <option value="ALL">Semua Jenis Biomassa</option>
            <option value="SEKAM_PADI">Sekam Padi</option>
            <option value="BATOK_KELAPA">Batok Kelapa</option>
            <option value="TONGKOL_JAGUNG">Tongkol Jagung</option>
            <option value="SERBUK_KAYU">Serbuk Kayu</option>
          </select>
        </div>
      </div>

      {/* History Table */}
      <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-lg space-y-4">
        <div className="flex items-center justify-between pb-2 border-b border-slate-100">
          <h4 className="text-sm font-extrabold font-heading text-slate-900">Log Rincian Umpan & Yield Hasil Pirolisis</h4>
          <span className="text-xs font-mono font-bold text-slate-500">{filtered.length} BATCH TERVERIFIKASI</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-700">
            <thead className="bg-slate-100 text-slate-700 font-bold uppercase tracking-wider border-b border-slate-200">
              <tr>
                <th className="p-3.5">ID Batch</th>
                <th className="p-3.5">Tanggal Operasi</th>
                <th className="p-3.5">Bahan Umpan</th>
                <th className="p-3.5">Berat Umpan</th>
                <th className="p-3.5">Suhu Pirolisis</th>
                <th className="p-3.5">Yield Biochar</th>
                <th className="p-3.5">Yield Bio-Oil</th>
                <th className="p-3.5">Fiksasi CO2e</th>
                <th className="p-3.5">Status Audit</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-mono">
              {filtered.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                  <td className="p-3.5 font-bold text-slate-900">{item.id}</td>
                  <td className="p-3.5 text-slate-600 font-sans">{item.date}</td>
                  <td className="p-3.5 font-bold text-blue-600">{item.biomass}</td>
                  <td className="p-3.5 text-slate-800">{item.weight}</td>
                  <td className="p-3.5 text-orange-600 font-bold">{item.temp}</td>
                  <td className="p-3.5 text-emerald-600 font-bold">{item.biochar}</td>
                  <td className="p-3.5 text-indigo-600 font-bold">{item.bioOil}</td>
                  <td className="p-3.5 text-emerald-700 font-bold">{item.carbon}</td>
                  <td className="p-3.5">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">
                      ISO VERIFIED
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
