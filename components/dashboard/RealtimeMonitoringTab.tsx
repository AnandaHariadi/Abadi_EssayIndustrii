'use client';

import React, { useState, useEffect } from 'react';
import { IoTSensorReading } from '@/lib/iotSimulation';

interface RealtimeMonitoringTabProps {
  telemetryHistory: IoTSensorReading[];
}

export default function RealtimeMonitoringTab({ telemetryHistory: initialData }: RealtimeMonitoringTabProps) {
  // Live ticking state for live streaming telemetry demo
  const [liveTicks, setLiveTicks] = useState([
    { time: '14:40:05', temp: 420, press: 1014, gas: 110 },
    { time: '14:40:10', temp: 423, press: 1015, gas: 115 },
    { time: '14:40:15', temp: 428, press: 1016, gas: 118 },
    { time: '14:40:20', temp: 431, press: 1017, gas: 120 },
    { time: '14:40:25', temp: 435, press: 1018, gas: 122 },
    { time: '14:40:30', temp: 432, press: 1017, gas: 121 },
    { time: '14:40:35', temp: 436, press: 1019, gas: 124 },
    { time: '14:40:40', temp: 440, press: 1020, gas: 126 },
    { time: '14:40:45', temp: 438, press: 1019, gas: 125 },
    { time: '14:40:50', temp: 442, press: 1021, gas: 128 },
    { time: '14:40:55', temp: 445, press: 1022, gas: 130 },
    { time: '14:41:00', temp: 441, press: 1020, gas: 127 },
  ]);

  // Continuous 1.5s interval to simulate live telemetry streaming for judges
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveTicks((prev) => {
        const last = prev[prev.length - 1];
        const nextTemp = Math.min(460, Math.max(410, last.temp + (Math.random() > 0.5 ? 2 : -2)));
        const nextPress = Math.min(1030, Math.max(1005, last.press + (Math.random() > 0.5 ? 1 : -1)));
        const nextGas = Math.min(150, Math.max(100, last.gas + (Math.random() > 0.5 ? 1 : -1)));
        const now = new Date();
        const timeStr = now.toTimeString().split(' ')[0];

        const nextObj = { time: timeStr, temp: nextTemp, press: nextPress, gas: nextGas };
        return [...prev.slice(1), nextObj];
      });
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  const latest = liveTicks[liveTicks.length - 1];

  return (
    <div className="space-y-8 animate-fade-in font-sans text-slate-900">
      
      {/* Control Bar - Formal Industrial Theme (Zero Component Icons) */}
      <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-lg flex flex-wrap items-center justify-between gap-4">
        <div>
          <span className="text-[10px] font-bold text-orange-600 uppercase tracking-widest font-mono">STASIUN KONTROL REAKTOR SUBANG NODE #01</span>
          <div className="flex items-center gap-2 mt-0.5">
            <span className="w-3 h-3 rounded-full bg-orange-500 animate-ping" />
            <h3 className="text-xl font-extrabold font-heading text-slate-900">Monitoring Telemetri Sensor Real-Time</h3>
          </div>
          <p className="text-xs text-slate-500 mt-1">Data diperbarui secara live setiap 1.5 detik via Protokol MQTT Broker WS (Hardware Protocol v2.4)</p>
        </div>

        <div className="flex items-center gap-3">
          <span className="px-3.5 py-1.5 rounded-xl bg-orange-50 border border-orange-200 text-xs font-mono text-orange-700 font-bold">
            Interval: 1500ms
          </span>
          <span className="px-3.5 py-1.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs font-mono text-emerald-700 font-bold flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            MQTT Broker: ONLINE
          </span>
        </div>
      </div>

      {/* Warning Banner */}
      {latest.temp > 450 && (
        <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 flex items-center justify-between shadow-sm">
          <div>
            <p className="text-xs font-bold font-heading">Peringatan Telemetri: Suhu Reaktor Tinggi ({latest.temp} °C)!</p>
            <p className="text-[11px] text-amber-800 font-medium">Suhu mendekati batas 460 °C. Sistem preskriptif merekomendasikan penyesuaian laju pendinginan blower.</p>
          </div>
          <span className="px-3 py-1 rounded-full bg-amber-200 text-amber-900 text-xs font-bold font-mono">WARNING HIGH TEMP</span>
        </div>
      )}

      {/* Hardware Sub-System Status Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        
        <div className="p-5 rounded-3xl bg-white border border-slate-200 shadow-md space-y-1">
          <span className="text-[10px] font-bold text-slate-400 uppercase font-mono">Status Reaktor Utama</span>
          <p className="text-base font-extrabold font-heading text-slate-900">FASE PIROLISIS #3</p>
          <span className="text-[11px] text-emerald-600 font-mono font-bold block">Status: Operasional Terkontrol</span>
        </div>

        <div className="p-5 rounded-3xl bg-white border border-slate-200 shadow-md space-y-1">
          <span className="text-[10px] font-bold text-slate-400 uppercase font-mono">Auto Pressure Valve</span>
          <p className="text-base font-extrabold font-heading text-slate-900">SAFETY CLOSED</p>
          <span className="text-[11px] text-slate-500 font-mono font-bold block">Batas Tekanan: 1050 hPa</span>
        </div>

        <div className="p-5 rounded-3xl bg-white border border-slate-200 shadow-md space-y-1">
          <span className="text-[10px] font-bold text-slate-400 uppercase font-mono">Exhaust Fan Blower</span>
          <p className="text-base font-extrabold font-heading text-orange-600">2,400 RPM</p>
          <span className="text-[11px] text-slate-500 font-mono font-bold block">Sirkulasi Asap Pirolisis</span>
        </div>

        <div className="p-5 rounded-3xl bg-white border border-slate-200 shadow-md space-y-1">
          <span className="text-[10px] font-bold text-slate-400 uppercase font-mono">Elemen Pemanas Stage 3</span>
          <p className="text-base font-extrabold font-heading text-slate-900">HEAT ON (100%)</p>
          <span className="text-[11px] text-emerald-600 font-mono font-bold block">Daya: 4.8 kW Active</span>
        </div>

      </div>

      {/* Live Animated Streaming Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Temperature Live Streaming Chart */}
        <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-lg space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-base font-extrabold font-heading text-slate-900">Live Curve Suhu Reaktor Pirolisis (°C)</h4>
            <span className="text-sm font-extrabold text-orange-600 font-mono px-3 py-1 rounded-xl bg-orange-50 border border-orange-200 shadow-sm animate-pulse">
              {latest.temp}.0 °C
            </span>
          </div>

          {/* Bar Chart Container */}
          <div className="h-64 bg-slate-50 rounded-2xl p-4 border border-slate-200 flex items-end justify-between gap-2 overflow-hidden relative">
            {liveTicks.map((item, idx) => {
              const heightPct = Math.min(100, Math.max(20, ((item.temp - 380) / 100) * 100));
              const isLatest = idx === liveTicks.length - 1;
              return (
                <div key={idx} className="w-full flex flex-col items-center gap-2 relative z-10 h-full justify-end group">
                  <span className="text-[10px] font-mono font-bold text-orange-600 opacity-90 group-hover:opacity-100">
                    {item.temp}°
                  </span>
                  <div
                    className={`w-full rounded-t-lg transition-all duration-500 min-h-[15px] ${
                      isLatest
                        ? 'bg-gradient-to-t from-orange-600 via-amber-500 to-orange-400 shadow-lg shadow-orange-500/30 animate-pulse'
                        : 'bg-gradient-to-t from-orange-400 to-amber-300 opacity-80 group-hover:opacity-100'
                    }`}
                    style={{ height: `${heightPct}%` }}
                  />
                  <span className="text-[10px] text-slate-500 font-mono font-bold truncate w-full text-center">
                    {item.time.split(':')[2]}s
                  </span>
                </div>
              );
            })}
          </div>
          <p className="text-[11px] text-slate-500 text-center font-medium">Menampilkan 12 tick telemetri real-time streaming dari sensor DHT22</p>
        </div>

        {/* Pressure & Gas Live Streaming Chart */}
        <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-lg space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-base font-extrabold font-heading text-slate-900">Live Curve Tekanan (BMP280) & Gas Syngas (MQ-135)</h4>
            <span className="text-sm font-extrabold text-amber-600 font-mono px-3 py-1 rounded-xl bg-amber-50 border border-amber-200 shadow-sm animate-pulse">
              {latest.press} hPa
            </span>
          </div>

          {/* Bar Chart Container */}
          <div className="h-64 bg-slate-50 rounded-2xl p-4 border border-slate-200 flex items-end justify-between gap-2 overflow-hidden relative">
            {liveTicks.map((item, idx) => {
              const pressPct = Math.min(100, Math.max(20, ((item.press - 990) / 40) * 100));
              const isLatest = idx === liveTicks.length - 1;
              return (
                <div key={idx} className="w-full flex flex-col items-center gap-2 relative z-10 h-full justify-end group">
                  <span className="text-[10px] font-mono font-bold text-amber-700 opacity-90 group-hover:opacity-100">
                    {item.press}
                  </span>
                  <div
                    className={`w-full rounded-t-lg transition-all duration-500 min-h-[15px] ${
                      isLatest
                        ? 'bg-gradient-to-t from-amber-600 via-orange-500 to-amber-400 shadow-lg shadow-amber-500/30 animate-pulse'
                        : 'bg-gradient-to-t from-amber-400 to-orange-300 opacity-80 group-hover:opacity-100'
                    }`}
                    style={{ height: `${pressPct}%` }}
                  />
                  <span className="text-[10px] text-slate-500 font-mono font-bold truncate w-full text-center">
                    {item.time.split(':')[2]}s
                  </span>
                </div>
              );
            })}
          </div>
          <p className="text-[11px] text-slate-500 text-center font-medium">Modul sensor BMP280 precision barometer membaca fluktuasi gas syngas</p>
        </div>

      </div>

      {/* Telemetry Log Table */}
      <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-lg space-y-4">
        <div className="flex items-center justify-between">
          <h4 className="text-lg font-extrabold font-heading text-slate-900">Tabel Log Interval Telemetri (Time-Series Data Stream)</h4>
          <span className="text-xs text-slate-500 font-mono font-bold">Total Log: 12 tick aktif</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-700">
            <thead className="bg-slate-100 text-slate-700 font-bold uppercase tracking-wider border-b border-slate-200">
              <tr>
                <th className="p-3.5">Waktu (WIB)</th>
                <th className="p-3.5">Suhu DHT22 (°C)</th>
                <th className="p-3.5">Tekanan BMP280 (hPa)</th>
                <th className="p-3.5">Gas MQ-135 (PPM)</th>
                <th className="p-3.5">Status Reaktor</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-mono">
              {liveTicks.slice().reverse().map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50 transition-colors">
                  <td className="p-3.5 font-bold text-slate-900">{row.time}</td>
                  <td className="p-3.5 text-orange-600 font-bold">{row.temp}.0 °C</td>
                  <td className="p-3.5 text-amber-600 font-bold">{row.press} hPa</td>
                  <td className="p-3.5 text-slate-800">{row.gas} PPM</td>
                  <td className="p-3.5">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">
                      PIROLISIS AKTIF
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
