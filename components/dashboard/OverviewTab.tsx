'use client';

import React from 'react';
import { IoTSensorReading } from '@/lib/iotSimulation';

interface OverviewTabProps {
  latestReading: IoTSensorReading;
  onNavigateTab: (tabId: string) => void;
}

export default function OverviewTab({ latestReading, onNavigateTab }: OverviewTabProps) {
  return (
    <div className="space-y-8 animate-fade-in font-sans text-slate-900">
      
      {/* Header Banner - Zero Component Icons */}
      <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-lg flex flex-wrap items-center justify-between gap-4">
        <div>
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest font-mono">RINGKASAN TEKNIS EXECUTIVE</span>
          <h3 className="text-xl font-extrabold font-heading text-slate-900 mt-0.5">Ringkasan Operasional & Kinerja Reaktor ABADI</h3>
          <p className="text-xs text-slate-500 mt-1">Platform pengolahan limbah biomassa terpadu Subang dengan integrasi sensor IoT & AI ML Random Forest.</p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => onNavigateTab('monitoring')}
            className="px-4 py-2.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-md cursor-pointer"
          >
            Live Telemetri Sensor
          </button>
          <button
            onClick={() => onNavigateTab('ml')}
            className="px-4 py-2.5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md cursor-pointer"
          >
            Prediksi Random Forest ML
          </button>
        </div>
      </div>

      {/* 4 Executive KPI Cards - Zero Component Icons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        <div className="p-5 rounded-3xl bg-white border border-slate-200 shadow-lg space-y-1.5">
          <span className="text-[10px] font-bold text-slate-400 uppercase font-mono">Suhu Reaktor (DHT22)</span>
          <p className="text-3xl font-extrabold font-heading text-orange-600 font-mono">
            {latestReading.dht22.temperatureC.toFixed(1)} <span className="text-base font-bold text-slate-700">°C</span>
          </p>
          <span className="text-xs text-emerald-600 font-bold block">Suhu Pirolisis Optimal</span>
        </div>

        <div className="p-5 rounded-3xl bg-white border border-slate-200 shadow-lg space-y-1.5">
          <span className="text-[10px] font-bold text-slate-400 uppercase font-mono">Tekanan Barometer (BMP280)</span>
          <p className="text-3xl font-extrabold font-heading text-amber-600 font-mono">
            {latestReading.bmp280.pressureHpa.toFixed(1)} <span className="text-base font-bold text-slate-700">hPa</span>
          </p>
          <span className="text-xs text-slate-500 font-medium block">Stabil Tanpa Lonjakan Tekanan</span>
        </div>

        <div className="p-5 rounded-3xl bg-white border border-slate-200 shadow-lg space-y-1.5">
          <span className="text-[10px] font-bold text-slate-400 uppercase font-mono">Volume Biochar Terproduksi</span>
          <p className="text-3xl font-extrabold font-heading text-slate-900 font-mono">
            4.2 <span className="text-base font-bold text-slate-600">Ton</span>
          </p>
          <span className="text-xs text-blue-600 font-bold block">Akumulasi Bulan Ini</span>
        </div>

        <div className="p-5 rounded-3xl bg-white border border-slate-200 shadow-lg space-y-1.5">
          <span className="text-[10px] font-bold text-slate-400 uppercase font-mono">Total Karbon Terfiksasi</span>
          <p className="text-3xl font-extrabold font-heading text-emerald-600 font-mono">
            +28.4 <span className="text-base font-bold text-slate-600">Ton CO2e</span>
          </p>
          <span className="text-xs text-emerald-700 font-bold block">Sertifikasi Fiksasi Karbon</span>
        </div>

      </div>

      {/* Status Node Detail Table */}
      <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-lg space-y-4">
        <div className="flex items-center justify-between">
          <h4 className="text-base font-extrabold font-heading text-slate-900">Status Jaringan Node Reaktor Subang</h4>
          <span className="text-xs font-mono font-bold text-emerald-600">3 NODE OPERASIONAL</span>
        </div>

        <div className="space-y-3">
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex justify-between items-center">
            <div>
              <p className="text-xs font-bold text-slate-900">Subang Node #01 - Reaktor Utama Desa Agroteknologi</p>
              <p className="text-[11px] text-slate-500">Kapasitas: 500 kg/batch | Bahan Umpan: Sekam Padi & Batok Kelapa</p>
            </div>
            <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold font-mono border border-emerald-300">
              OPERATIONAL ONLINE
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex justify-between items-center">
            <div>
              <p className="text-xs font-bold text-slate-900">Subang Node #02 - Reaktor Tambahan Karang Taruna</p>
              <p className="text-[11px] text-slate-500">Kapasitas: 300 kg/batch | Bahan Umpan: Tongkol Jagung</p>
            </div>
            <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold font-mono border border-emerald-300">
              STANDBY READY
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex justify-between items-center">
            <div>
              <p className="text-xs font-bold text-slate-900">Subang Node #03 - Unit Riset Laboratorium UPNVJT</p>
              <p className="text-[11px] text-slate-500">Kapasitas: 50 kg/batch | Uji Eksperimen Thermogravimetric (TGA)</p>
            </div>
            <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold font-mono border border-blue-300">
              R&D CALIBRATION
            </span>
          </div>
        </div>
      </div>

    </div>
  );
}
