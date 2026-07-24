'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
  LayoutDashboard, Activity, Database, BrainCircuit, MapPin, Leaf,
  Award, ShoppingBag, User, LogOut, Menu, X,
  Users, Wrench, GraduationCap
} from 'lucide-react';

import { generateInitialTelemetryData, generateSingleNextTick, IoTSensorReading } from '@/lib/iotSimulation';
import OverviewTab from '@/components/dashboard/OverviewTab';
import RealtimeMonitoringTab from '@/components/dashboard/RealtimeMonitoringTab';
import ProductionHistoryTab from '@/components/dashboard/ProductionHistoryTab';
import MlPredictionTab from '@/components/dashboard/MlPredictionTab';
import InteractiveMapTab from '@/components/dashboard/InteractiveMapTab';
import EnvironmentalImpactTab from '@/components/dashboard/EnvironmentalImpactTab';
import GreenPointsTab from '@/components/dashboard/GreenPointsTab';
import CircularForumTab from '@/components/dashboard/CircularForumTab';
import UserProfileTab from '@/components/dashboard/UserProfileTab';

// Synchronous initial role getter to prevent any 1-frame hydration flash
const getInitialRoleConfig = () => {
  if (typeof window !== 'undefined') {
    const urlParams = new URLSearchParams(window.location.search);
    const queryRole = urlParams.get('role');

    if (queryRole === 'operator') {
      return { type: 'operator' as const, role: 'Operator Teknis Reaktor Subang', tab: 'monitoring' };
    }
    if (queryRole === 'researcher') {
      return { type: 'researcher' as const, role: 'Peneliti Biomassa & Akademisi R&D', tab: 'ml' };
    }
    if (queryRole === 'community') {
      return { type: 'community' as const, role: 'Masyarakat & Kelompok Tani Subang', tab: 'points' };
    }

    const savedRole = localStorage.getItem('abadi_user_role') || '';
    if (savedRole.includes('Peneliti')) {
      return { type: 'researcher' as const, role: 'Peneliti Biomassa & Akademisi R&D', tab: 'ml' };
    }
    if (savedRole.includes('Operator')) {
      return { type: 'operator' as const, role: 'Operator Teknis Reaktor Subang', tab: 'monitoring' };
    }
  }
  return { type: 'community' as const, role: 'Masyarakat & Kelompok Tani Subang', tab: 'points' };
};

export default function DashboardPage() {
  const router = useRouter();

  // Initialize state synchronously with exact URL role to eliminate hydration flash completely
  const [initialConfig] = useState(getInitialRoleConfig);
  const [roleType, setRoleType] = useState<'community' | 'operator' | 'researcher'>(initialConfig.type);
  const [activeTab, setActiveTab] = useState<string>(initialConfig.tab);
  const [userRole, setUserRole] = useState<string>(initialConfig.role);
  const [telemetryHistory, setTelemetryHistory] = useState<IoTSensorReading[]>([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Authentication Guard & Immediate State Guarantee
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isAuth = localStorage.getItem('abadi_auth_active');
      const urlParams = new URLSearchParams(window.location.search);
      const queryAuth = urlParams.get('auth');

      if (queryAuth === 'active') {
        localStorage.setItem('abadi_auth_active', 'true');
      } else if (isAuth !== 'true') {
        window.location.href = '/login?requireAuth=true';
        return;
      }

      // Synchronize role storage
      localStorage.setItem('abadi_user_role', userRole);
    }
  }, [userRole]);

  useEffect(() => {
    const initial = generateInitialTelemetryData(15);
    setTelemetryHistory(initial);

    const interval = setInterval(() => {
      setTelemetryHistory((prev) => {
        if (prev.length === 0) return initial;
        const last = prev[prev.length - 1];
        const next = generateSingleNextTick(last);
        return [...prev.slice(1), next];
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('abadi_auth_active');
      localStorage.removeItem('abadi_user_role');
      window.location.href = '/login';
    }
  };

  const latestReading = telemetryHistory[telemetryHistory.length - 1] || {
    timestamp: '12:00:00',
    dht22: { temperatureC: 435.0, humidityPercent: 32.0 },
    bmp280: { pressureHpa: 1018.4, temperatureC: 436.2, altitudeMeters: 145 },
    mq135: { airQualityPpm: 125, status: 'NORMAL', gasDetected: 'Gas Bersih' },
    reactorStatus: 'ACTIVE_PYROLYSIS',
  };

  // Nav items customized per role with Lucide Icons (Zero Emojis)
  const getNavItems = () => {
    if (roleType === 'community') {
      return [
        { id: 'points', label: 'Poin Hijau & Hadiah Tani', icon: Award },
        { id: 'circular', label: 'Pasar Sirkular Biochar & Forum', icon: ShoppingBag },
        { id: 'impact', label: 'Dampak Lingkungan Desa', icon: Leaf },
        { id: 'map', label: 'Peta Sebaran Reaktor Desa', icon: MapPin },
        { id: 'profile', label: 'Profil Pengguna Tani', icon: User },
      ];
    } else if (roleType === 'operator') {
      return [
        { id: 'monitoring', label: 'Live Telemetri Sensor Reaktor', icon: Activity },
        { id: 'history', label: 'Riwayat Batch Produksi', icon: Database },
        { id: 'map', label: 'Peta Sebaran Status Node', icon: MapPin },
        { id: 'overview', label: 'Dasbor Ringkasan Teknis', icon: LayoutDashboard },
        { id: 'profile', label: 'Profil & Perangkat Sensor', icon: User },
      ];
    } else {
      return [
        { id: 'ml', label: 'Kalkulator Random Forest ML', icon: BrainCircuit },
        { id: 'impact', label: 'Analitik Dampak Karbon & ESG', icon: Leaf },
        { id: 'history', label: 'Dataset Batch & Thermogravimetric', icon: Database },
        { id: 'circular', label: 'Forum Riset & Ekonomi Sirkular', icon: ShoppingBag },
        { id: 'profile', label: 'Profil Peneliti & Model AI', icon: User },
      ];
    }
  };

  // Dynamic Theme Styling Per Role (Zero Emojis)
  const getRoleHeaderStyle = () => {
    if (roleType === 'community') {
      return 'bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 text-white';
    } else if (roleType === 'operator') {
      return 'bg-gradient-to-r from-slate-900 via-slate-800 to-orange-950 text-white border-b border-orange-500/30';
    } else {
      return 'bg-gradient-to-r from-slate-900 via-indigo-950 to-amber-950 text-white border-b border-amber-500/30';
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      
      {/* Dynamic Role Top Navbar with Official Emblem */}
      <header className={`h-16 sticky top-0 z-30 px-4 sm:px-6 flex items-center justify-between shadow-md ${getRoleHeaderStyle()}`}>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white"
          >
            {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          <button
            onClick={() => window.location.href = '/'}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <img src="/abadi-emblem.png" alt="Logo ABADI" className="w-9 h-9 object-contain" />
            <div className="hidden sm:flex flex-col text-left">
              <span className="text-base font-extrabold font-heading text-white leading-none">
                ABADI<span className="text-amber-300">.</span>
              </span>
              <span className="text-[10px] text-white/80 font-semibold tracking-wider uppercase mt-0.5">
                Eco-Tech Biomassa
              </span>
            </div>
          </button>
        </div>

        {/* Dynamic User Badge & Actions */}
        <div className="flex items-center gap-3">
          <div className="hidden md:flex flex-col text-right">
            <span className="text-xs font-bold text-white">{userRole}</span>
            <span className="text-[10px] text-amber-200 font-mono font-bold uppercase">
              {roleType === 'community'
                ? 'AKSES: INSENTIF & PASAR SIRKULAR'
                : roleType === 'operator'
                ? 'AKSES: LIVE MONITORING TELEMETRI'
                : 'AKSES: PREDIKSI RANDOM FOREST ML'}
            </span>
          </div>

          <span className="px-3 py-1 rounded-xl text-xs font-bold font-mono bg-white/15 text-white border border-white/20 backdrop-blur-md flex items-center gap-1.5">
            {roleType === 'community' ? <Users className="w-3.5 h-3.5" /> : roleType === 'operator' ? <Wrench className="w-3.5 h-3.5" /> : <GraduationCap className="w-3.5 h-3.5" />}
            <span>{roleType === 'community' ? 'Peran Masyarakat' : roleType === 'operator' ? 'Peran Operator' : 'Peran Peneliti'}</span>
          </span>

          <button
            onClick={handleLogout}
            title="Keluar Sesi"
            className="p-2 rounded-xl bg-white/10 hover:bg-red-500/20 text-white border border-white/20 transition-colors flex items-center gap-1.5 text-xs font-bold cursor-pointer"
          >
            <LogOut className="w-4 h-4" />
            <span className="hidden sm:inline">Keluar</span>
          </button>
        </div>
      </header>

      {/* Dynamic Role Specific Banner Top */}
      <div className={`p-6 border-b shadow-sm ${
        roleType === 'community'
          ? 'bg-emerald-50 border-emerald-200 text-emerald-950'
          : roleType === 'operator'
          ? 'bg-slate-900 border-slate-800 text-white'
          : 'bg-indigo-950 border-indigo-900 text-white'
      }`}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          
          {roleType === 'community' && (
            <>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500 text-white flex items-center justify-center font-bold shadow-md">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-700">SUBANG COMMUNITY HUB</span>
                  <h2 className="text-xl font-extrabold font-heading text-emerald-950">Selamat Datang, Bapak/Ibu Petani & Masyarakat Desa!</h2>
                  <p className="text-xs text-emerald-800">Kumpulkan Poin Hijau dari setoran limbah biomassa & tukarkan dengan pupuk biochar hayati gratis.</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="px-4 py-2 rounded-2xl bg-white border border-emerald-300 shadow-sm text-center">
                  <span className="text-[10px] font-bold text-slate-500 uppercase block">Saldo Poin Hijau</span>
                  <span className="text-lg font-extrabold text-emerald-600 font-mono">1,450 PTS</span>
                </div>
                <button onClick={() => setActiveTab('points')} className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md cursor-pointer">
                  Tukarkan Hadiah
                </button>
              </div>
            </>
          )}

          {roleType === 'operator' && (
            <>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-orange-500 text-white flex items-center justify-center font-bold shadow-md">
                  <Wrench className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-orange-400">HARDWARE TELEMETRY COMMAND</span>
                  <h2 className="text-xl font-extrabold font-heading text-white">Stasiun Kontrol Reaktor Subang #01</h2>
                  <p className="text-xs text-slate-300">Pantau fluktuasi suhu reaktor pirolisis, barometer BMP280, & deteksi gas syngas MQ-135 real-time.</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="px-4 py-2 rounded-2xl bg-slate-800 border border-slate-700 shadow-sm text-center">
                  <span className="text-[10px] font-bold text-slate-400 uppercase block">Status Hardware</span>
                  <span className="text-xs font-extrabold text-emerald-400 font-mono flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    ONLINE (442.0°C)
                  </span>
                </div>
                <button onClick={() => setActiveTab('monitoring')} className="px-4 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs shadow-md cursor-pointer">
                  Buka Monitoring Live
                </button>
              </div>
            </>
          )}

          {roleType === 'researcher' && (
            <>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center font-bold shadow-md">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-300">AI R&D LABORATORY</span>
                  <h2 className="text-xl font-extrabold font-heading text-white">Laboratorium Riset Biomassa & Machine Learning</h2>
                  <p className="text-xs text-indigo-200">Simulasikan model Random Forest Regression (100 Decision Trees) untuk memprediksi yield biochar & bio-oil.</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="px-4 py-2 rounded-2xl bg-indigo-900 border border-indigo-700 shadow-sm text-center">
                  <span className="text-[10px] font-bold text-indigo-200 uppercase block">Akurasi Model ML</span>
                  <span className="text-xs font-extrabold text-amber-300 font-mono">R² = 0.948 (94.8%)</span>
                </div>
                <button onClick={() => setActiveTab('ml')} className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs shadow-md cursor-pointer">
                  Jalankan Simulasi ML
                </button>
              </div>
            </>
          )}

        </div>
      </div>

      {/* Main Workspace with Role-Specific Sidebar */}
      <div className="flex-1 flex overflow-hidden">
        
        {/* Left Sidebar */}
        <aside className={`fixed lg:static inset-y-0 left-0 z-20 w-64 bg-white border-r border-slate-200 transform ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 transition-transform duration-200 ease-in-out flex flex-col justify-between p-4 top-16 lg:top-0`}>
          
          <div className="space-y-1">
            <p className="text-[10px] uppercase font-bold text-slate-400 font-mono px-3 mb-2">
              Menu Khusus Peran {roleType === 'community' ? 'Masyarakat' : roleType === 'operator' ? 'Operator' : 'Peneliti'}
            </p>
            {getNavItems().map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setSidebarOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all text-left cursor-pointer ${
                    isActive
                      ? roleType === 'community'
                        ? 'bg-emerald-600 text-white shadow-md shadow-emerald-500/20'
                        : roleType === 'operator'
                        ? 'bg-orange-500 text-white shadow-md shadow-orange-500/20'
                        : 'bg-indigo-900 text-white shadow-md shadow-indigo-500/20'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                  <span className="truncate">{item.label}</span>
                </button>
              );
            })}
          </div>

          <div className={`p-3.5 rounded-2xl border space-y-1 ${
            roleType === 'community'
              ? 'bg-emerald-50 border-emerald-200 text-emerald-950'
              : roleType === 'operator'
              ? 'bg-slate-900 border-slate-800 text-white'
              : 'bg-indigo-950 border-indigo-900 text-white'
          }`}>
            <p className="text-[10px] font-bold uppercase opacity-80">Tampilan Spesialis</p>
            <p className="text-xs font-extrabold font-heading">
              {roleType === 'community' ? 'Program Insentif Tani' : roleType === 'operator' ? 'Subang Node #01 Active' : 'Random Forest Model v2.4'}
            </p>
            <p className="text-[11px] font-mono font-bold flex items-center gap-1 mt-1 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              SISTEM INTERAKTIF READY
            </p>
          </div>

        </aside>

        {/* Main Workspace Area */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          {activeTab === 'points' && <GreenPointsTab />}
          {activeTab === 'monitoring' && <RealtimeMonitoringTab telemetryHistory={telemetryHistory} />}
          {activeTab === 'ml' && <MlPredictionTab />}
          {activeTab === 'overview' && <OverviewTab latestReading={latestReading} onNavigateTab={setActiveTab} />}
          {activeTab === 'history' && <ProductionHistoryTab />}
          {activeTab === 'map' && <InteractiveMapTab />}
          {activeTab === 'impact' && <EnvironmentalImpactTab />}
          {activeTab === 'circular' && <CircularForumTab />}
          {activeTab === 'profile' && <UserProfileTab userRole={userRole} />}
        </main>

      </div>

    </div>
  );
}
