'use client';

import React, { useState } from 'react';
import { X, Lock, Mail, User, Flame, ArrowRight, ShieldCheck, Cpu, Loader2 } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (userRole: string) => void;
}

export default function AuthModal({ isOpen, onClose, onLoginSuccess }: AuthModalProps) {
  const [isRegister, setIsRegister] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('operator@abadi-ecotech.id');
  const [password, setPassword] = useState('••••••••••••');
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      onLoginSuccess('Operator Reaktor ABADI');
      window.location.href = '/dashboard';
    }, 300);
  };

  const handleQuickDemo = (role: string) => {
    setIsLoading(true);
    setTimeout(() => {
      onLoginSuccess(role);
      window.location.href = '/dashboard';
    }, 300);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-4xl bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-12 text-slate-900 font-sans">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          disabled={isLoading}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Side Banner - Customized ABADI Corporate Identity */}
        <div className="md:col-span-5 p-8 sm:p-10 bg-gradient-to-br from-orange-500 via-amber-500 to-orange-600 text-white flex flex-col justify-between relative overflow-hidden">
          
          <div className="space-y-6 relative z-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-white/20 flex items-center justify-center text-white font-bold backdrop-blur-sm">
                <Flame className="w-6 h-6 fill-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-extrabold font-heading text-white tracking-wider leading-none">
                  ABADI<span className="text-orange-200">.</span>
                </span>
                <span className="text-[10px] text-orange-100 font-semibold tracking-widest uppercase mt-0.5">
                  Eco-Tech Enterprise
                </span>
              </div>
            </div>

            <div className="space-y-3 pt-4">
              <span className="px-3 py-1 rounded-full bg-white/15 text-orange-100 text-[10px] font-mono font-bold tracking-wider uppercase border border-white/20">
                PLATFORM DIGITAL REAKTOR
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-heading leading-tight">
                Akselerasi Riset & Konversi Biomassa
              </h3>
              <p className="text-xs text-orange-100 leading-relaxed font-medium">
                Pantau telemetri sensor IoT presisi tinggi dan model kecerdasan buatan Random Forest dalam satu dashboard terpadu.
              </p>
            </div>
          </div>

          <div className="pt-6 relative z-10 border-t border-white/20 space-y-2">
            <p className="text-[11px] font-bold uppercase tracking-wider text-orange-100">Ekosistem Terintegrasi</p>
            <div className="flex flex-wrap gap-2 text-xs font-semibold text-white">
              <span className="px-2.5 py-1 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-orange-200" />
                <span>Pertamina Eco-Tech</span>
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 flex items-center gap-1">
                <Cpu className="w-3.5 h-3.5 text-orange-200" />
                <span>Protokol MQTT WS</span>
              </span>
            </div>
          </div>

        </div>

        {/* Right Side Form - 100% Bahasa Indonesia */}
        <div className="md:col-span-7 p-8 sm:p-10 flex flex-col justify-center space-y-6 bg-white">
          
          <div>
            <h3 className="text-2xl font-extrabold font-heading text-slate-900">
              {isRegister ? 'Pendaftaran Akun Baru' : 'Masuk ke Dashboard ABADI'}
            </h3>
            <p className="text-xs text-slate-500 mt-1 font-medium">
              Silakan masukkan kredensial akun Anda untuk mengakses sistem monitoring reaktor.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {isRegister && (
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Nama Lengkap Pengguna</label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Masukkan nama lengkap Anda..."
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-orange-500 focus:bg-white font-medium"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Alamat Email Korporat</label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="operator@abadi-ecotech.id"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-orange-500 focus:bg-white font-medium"
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="text-xs font-bold text-slate-700">Kata Sandi</label>
                {!isRegister && (
                  <button type="button" className="text-xs font-bold text-orange-600 hover:underline">
                    Lupa Kata Sandi?
                  </button>
                )}
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-orange-500 focus:bg-white font-medium"
                />
              </div>
            </div>

            <div className="flex items-center gap-2 pt-1">
              <input type="checkbox" id="terms-modal" required defaultChecked className="accent-orange-500 w-4 h-4 rounded" />
              <label htmlFor="terms-modal" className="text-xs text-slate-600 font-medium">
                Saya menyetujui <span className="text-orange-600 font-bold hover:underline cursor-pointer">Syarat & Ketentuan Penggunaan</span>
              </label>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-sm shadow-lg shadow-orange-500/25 flex items-center justify-center gap-2 transition-all hover:scale-[1.01]"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-white" />
                  <span>Membuka Dashboard...</span>
                </>
              ) : (
                <>
                  <span>{isRegister ? 'Daftar Akun Baru' : 'Masuk ke Dashboard'}</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Quick Demo Options - Bahasa Indonesia */}
          <div className="pt-4 border-t border-slate-100 text-center space-y-3">
            <p className="text-xs text-slate-500 font-medium">
              {isRegister ? 'Sudah memiliki akun?' : 'Belum memiliki akun?'}{' '}
              <button
                type="button"
                onClick={() => setIsRegister(!isRegister)}
                className="font-bold text-orange-600 hover:underline"
              >
                {isRegister ? 'Masuk Sekarang' : 'Daftar Akun Baru'}
              </button>
            </p>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <button
                type="button"
                disabled={isLoading}
                onClick={() => handleQuickDemo('Operator Subang Main Node')}
                className="py-2.5 rounded-xl bg-slate-50 hover:bg-orange-50 hover:text-orange-700 border border-slate-200 text-slate-800 text-xs font-bold transition-colors flex items-center justify-center gap-1.5"
              >
                {isLoading ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <span>Demo Operator Reaktor</span>}
              </button>
              <button
                type="button"
                disabled={isLoading}
                onClick={() => handleQuickDemo('Peneliti Pemuda Bio-Energy')}
                className="py-2.5 rounded-xl bg-slate-50 hover:bg-orange-50 hover:text-orange-700 border border-slate-200 text-slate-800 text-xs font-bold transition-colors flex items-center justify-center gap-1.5"
              >
                {isLoading ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <span>Demo Peneliti Biomassa</span>}
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
