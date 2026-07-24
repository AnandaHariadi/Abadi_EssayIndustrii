'use client';

import React, { useState } from 'react';
import { runRandomForestRegression, MLInputParams, BiomassType } from '@/lib/mlEngine';

export default function MlPredictionTab() {
  const [params, setParams] = useState<MLInputParams>({
    biomassType: 'BATOK_KELAPA',
    inputWeightKg: 200,
    moisturePercent: 12,
    targetTemperatureC: 430,
    residenceTimeMin: 50,
    heatingRateCMin: 15,
    objective: 'MAX_BIOCHAR',
  });

  const prediction = runRandomForestRegression(params);

  return (
    <div className="space-y-8 animate-fade-in font-sans text-slate-900">
      
      {/* Banner Header - Executive Formal Blue Theme (Zero Component Icons) */}
      <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-lg flex flex-wrap items-center justify-between gap-4">
        <div>
          <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest font-mono">LABORATORIUM AI & RISET BIOMASSA R&D</span>
          <h3 className="text-xl font-extrabold font-heading text-slate-900 mt-0.5">Analitik Prediktif & Preskriptif Machine Learning</h3>
          <p className="text-xs text-slate-500 mt-1">
            Algoritma <strong>Random Forest Regression (Ensemble 100 Decision Trees, Max Depth 15)</strong> dilatih pada 1,250 dataset eksperimen termogravimetri (TGA/DTG).
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-800 text-xs font-bold border border-blue-200 font-mono">
            Akurasi Model R2 = {prediction.r2Score}
          </span>
          <span className="px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200 font-mono">
            Tingkat Kepercayaan {prediction.modelConfidence}%
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Input Form - Clean Formal Aesthetics */}
        <div className="lg:col-span-5 p-6 rounded-3xl bg-white border border-slate-200 shadow-lg space-y-5">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200">
            <h4 className="text-sm font-extrabold font-heading text-slate-900">Parameter Masukan Reaktor Pirolisis</h4>
            <span className="text-[11px] text-blue-600 font-mono font-bold tracking-wider">LIVE PREDICTION</span>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">Jenis Bahan Baku Biomassa (Sampel Evaluasi)</label>
              <select
                value={params.biomassType}
                onChange={(e) => setParams({ ...params, biomassType: e.target.value as BiomassType })}
                className="w-full px-3.5 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 text-xs font-bold focus:outline-none focus:border-blue-600 focus:bg-white transition-all shadow-sm"
              >
                <option value="BATOK_KELAPA">Batok Kelapa (Coconut Shell) - Lignin 36%, Cellulose 42%</option>
                <option value="SEKAM_PADI">Sekam Padi (Rice Husk) - Silica 20%, Cellulose 38%</option>
                <option value="SERBUK_KAYU">Serbuk Kayu Gergaji (Sawdust) - Cellulose 45%, Lignin 28%</option>
                <option value="AMPAS_TEBU">Ampas Tebu (Bagasse) - Hemicellulose 30%, Lignin 22%</option>
                <option value="CANGKANG_SAWIT">Cangkang Kelapa Sawit - Lignin 45%, Fiber 48%</option>
              </select>
            </div>

            {/* Slider 1: Input Weight */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-bold">
                <span className="text-slate-700">Berat Input Umpan Biomassa (W)</span>
                <span className="text-blue-600 font-mono">{params.inputWeightKg} kg</span>
              </div>
              <input
                type="range"
                min="10"
                max="500"
                step="5"
                value={params.inputWeightKg}
                onChange={(e) => setParams({ ...params, inputWeightKg: Number(e.target.value) })}
                className="w-full accent-blue-600 bg-slate-200 h-2 rounded-lg cursor-pointer"
              />
            </div>

            {/* Slider 2: Moisture */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-bold">
                <span className="text-slate-700">Kadar Air Biomassa (Moisture Content %)</span>
                <span className="text-blue-600 font-mono">{params.moisturePercent} %</span>
              </div>
              <input
                type="range"
                min="5"
                max="40"
                step="1"
                value={params.moisturePercent}
                onChange={(e) => setParams({ ...params, moisturePercent: Number(e.target.value) })}
                className="w-full accent-blue-600 bg-slate-200 h-2 rounded-lg cursor-pointer"
              />
            </div>

            {/* Slider 3: Target Temp */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-bold">
                <span className="text-slate-700">Target Suhu Pirolisis Reaktor (T °C)</span>
                <span className="text-blue-600 font-mono">{params.targetTemperatureC} °C</span>
              </div>
              <input
                type="range"
                min="300"
                max="600"
                step="10"
                value={params.targetTemperatureC}
                onChange={(e) => setParams({ ...params, targetTemperatureC: Number(e.target.value) })}
                className="w-full accent-blue-600 bg-slate-200 h-2 rounded-lg cursor-pointer"
              />
            </div>

            {/* Slider 4: Retention Time */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-bold">
                <span className="text-slate-700">Durasi Retensi Pirolisis (Time min)</span>
                <span className="text-blue-600 font-mono">{params.residenceTimeMin} min</span>
              </div>
              <input
                type="range"
                min="15"
                max="120"
                step="5"
                value={params.residenceTimeMin}
                onChange={(e) => setParams({ ...params, residenceTimeMin: Number(e.target.value) })}
                className="w-full accent-blue-600 bg-slate-200 h-2 rounded-lg cursor-pointer"
              />
            </div>

            {/* Objective Options */}
            <div className="pt-2">
              <label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wider">Tujuan Optimasi Target Produk</label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'MAX_BIOCHAR', label: 'Biochar Max' },
                  { id: 'MAX_BIOOIL', label: 'Bio-Oil Max' },
                  { id: 'BALANCED', label: 'Seimbang' },
                ].map((obj) => (
                  <button
                    key={obj.id}
                    type="button"
                    onClick={() => setParams({ ...params, objective: obj.id as any })}
                    className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all border cursor-pointer ${
                      params.objective === obj.id
                        ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-600/20'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {obj.label}
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Right Output Workspace - Detailed R&D Analytics */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* 3 Main Output Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            
            <div className="p-5 rounded-3xl bg-white border border-slate-200 shadow-lg space-y-1.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 font-mono">Hasil Biochar (Padat)</span>
              <p className="text-3xl font-extrabold font-heading text-blue-600">{prediction.yieldBiocharKg} <span className="text-base font-bold text-slate-700">kg</span></p>
              <p className="text-xs text-slate-500 font-medium">{prediction.yieldBiocharPercent}% dari umpan biomassa total</p>
              <div className="w-full bg-slate-100 h-2 rounded-full mt-2 overflow-hidden">
                <div className="bg-blue-600 h-full rounded-full" style={{ width: `${prediction.yieldBiocharPercent}%` }} />
              </div>
            </div>

            <div className="p-5 rounded-3xl bg-white border border-slate-200 shadow-lg space-y-1.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 font-mono">Hasil Bio-Oil (Cair)</span>
              <p className="text-3xl font-extrabold font-heading text-indigo-600">{prediction.yieldBioOilLiters} <span className="text-base font-bold text-slate-700">L</span></p>
              <p className="text-xs text-slate-500 font-medium">{prediction.yieldBioOilPercent}% dari umpan biomassa total</p>
              <div className="w-full bg-slate-100 h-2 rounded-full mt-2 overflow-hidden">
                <div className="bg-indigo-600 h-full rounded-full" style={{ width: `${prediction.yieldBioOilPercent}%` }} />
              </div>
            </div>

            <div className="p-5 rounded-3xl bg-white border border-slate-200 shadow-lg space-y-1.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 font-mono">Energi Syngas (Gas)</span>
              <p className="text-3xl font-extrabold font-heading text-slate-900">{prediction.syngasEnergyKwh} <span className="text-base font-bold text-blue-600">kWh</span></p>
              <p className="text-xs text-slate-500 font-medium">{prediction.yieldSyngasM3} m³ gas pirolisis bersih</p>
              <div className="w-full bg-slate-100 h-2 rounded-full mt-2 overflow-hidden">
                <div className="bg-slate-800 h-full rounded-full" style={{ width: `${prediction.yieldSyngasPercent}%` }} />
              </div>
            </div>

          </div>

          {/* Detailed Thermogravimetric Analysis Card */}
          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-lg grid grid-cols-3 gap-4 text-center">
            <div className="space-y-1 border-r border-slate-100 pr-2">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block font-mono">Karbon Terfiksasi (C-fixed)</span>
              <span className="text-2xl font-extrabold font-heading text-slate-900">{prediction.fixedCarbonPercent}%</span>
              <span className="text-[10px] text-slate-400 block font-medium">Stabilitas Pori Biochar</span>
            </div>
            <div className="space-y-1 border-r border-slate-100 px-2">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block font-mono">Nilai Kalor Biochar (HHV)</span>
              <span className="text-2xl font-extrabold font-heading text-blue-600">{prediction.calorificValueMJkg} MJ/kg</span>
              <span className="text-[10px] text-slate-400 block font-medium">Kepadatan Energi Padat</span>
            </div>
            <div className="space-y-1 pl-2">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block font-mono">CO2e Terfiksasi Permanen</span>
              <span className="text-2xl font-extrabold font-heading text-emerald-600">+{prediction.co2SequestrationKg} kg</span>
              <span className="text-[10px] text-slate-400 block font-medium">Sertifikasi ISO 14064</span>
            </div>
          </div>

          {/* Feature Importance Breakdown */}
          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-lg space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <h4 className="text-sm font-extrabold font-heading text-slate-900">Bobot Signifikansi Fitur (Feature Importance Weights)</h4>
              <span className="text-[11px] font-mono text-blue-600 font-bold">100 DECISION TREES</span>
            </div>

            <div className="space-y-3">
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-slate-800">Suhu Pirolisis (Temp °C)</span>
                  <span className="text-blue-600 font-mono">36.4%</span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-blue-600 h-full rounded-full w-[36.4%]" />
                </div>
                <p className="text-[11px] text-slate-500">Menentukan laju dekomposisi termal lignin & volatilisasi gas syngas</p>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-slate-800">Kadar Air Umpan (Moisture %)</span>
                  <span className="text-blue-600 font-mono">26.1%</span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-blue-500 h-full rounded-full w-[26.1%]" />
                </div>
                <p className="text-[11px] text-slate-500">Mempengaruhi kebutuhan entalpi pengeringan awal biomassa</p>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-slate-800">Durasi Retensi (Time min)</span>
                  <span className="text-blue-600 font-mono">21.8%</span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-indigo-600 h-full rounded-full w-[21.8%]" />
                </div>
                <p className="text-[11px] text-slate-500">Mempengaruhi tingkat devolatilisasi & persentase karbon aktif</p>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
