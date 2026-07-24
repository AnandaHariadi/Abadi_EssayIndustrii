'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [isRegister, setIsRegister] = useState(false);
  const [name, setName] = useState('');
  const [selectedRoleType, setSelectedRoleType] = useState<'community' | 'operator' | 'researcher'>('community');
  const [email, setEmail] = useState('masyarakat.tani@abadi-ecotech.id');
  const [password, setPassword] = useState('••••••••••••');
  const [requireAuthNotice, setRequireAuthNotice] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      if (urlParams.get('requireAuth') === 'true') {
        setRequireAuthNotice(true);
      }
    }
    router.prefetch('/dashboard');
    router.prefetch('/dashboard?auth=active&role=community');
    router.prefetch('/dashboard?auth=active&role=operator');
    router.prefetch('/dashboard?auth=active&role=researcher');
  }, [router]);

  const handleSelectRole = (type: 'community' | 'operator' | 'researcher') => {
    setSelectedRoleType(type);
    if (type === 'community') {
      setEmail('masyarakat.tani@abadi-ecotech.id');
      setPassword('••••••••••••');
    } else if (type === 'operator') {
      setEmail('operator.reaktor@abadi-ecotech.id');
      setPassword('••••••••••••');
    } else {
      setEmail('peneliti.biomassa@abadi-ecotech.id');
      setPassword('••••••••••••');
    }
  };

  const getRoleTitle = () => {
    if (selectedRoleType === 'community') return 'Masyarakat & Kelompok Tani Subang';
    if (selectedRoleType === 'operator') return 'Operator Teknis Reaktor Subang';
    return 'Peneliti Biomassa & Akademisi R&D';
  };

  const handleInstantNavigate = (e: React.MouseEvent, type: 'community' | 'operator' | 'researcher') => {
    e.preventDefault();
    let roleName = 'Masyarakat & Kelompok Tani Subang';
    if (type === 'operator') roleName = 'Operator Teknis Reaktor Subang';
    if (type === 'researcher') roleName = 'Peneliti Biomassa & Akademisi R&D';

    if (typeof window !== 'undefined') {
      localStorage.setItem('abadi_auth_active', 'true');
      localStorage.setItem('abadi_user_role', roleName);
      localStorage.setItem('abadi_user_email', email);
    }

    router.push(`/dashboard?auth=active&role=${type}`);
  };

  return (
    <div className="min-h-screen w-full bg-white font-sans grid grid-cols-1 lg:grid-cols-12 overflow-x-hidden text-slate-900">
      
      {/* Left Banner */}
      <div className="lg:col-span-5 min-h-screen bg-gradient-to-br from-orange-500 via-amber-500 to-orange-600 text-white p-8 sm:p-12 lg:p-16 flex flex-col justify-between relative">
        
        <div className="flex items-center justify-between z-10">
          <Link href="/" className="flex items-center gap-3 group">
            <img src="/abadi-emblem.png" alt="Logo ABADI" className="w-11 h-11 object-contain group-hover:scale-105 transition-transform" />
            <div className="flex flex-col">
              <span className="text-2xl font-extrabold font-heading text-white tracking-wider leading-none">
                ABADI<span className="text-orange-200">.</span>
              </span>
              <span className="text-[11px] text-orange-100 font-semibold tracking-widest uppercase mt-0.5">
                Eco-Tech Biomassa
              </span>
            </div>
          </Link>

          <Link
            href="/"
            className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold backdrop-blur-sm border border-white/20 transition-all"
          >
            Kembali ke Beranda
          </Link>
        </div>

        <div className="my-auto py-12 space-y-6 z-10 max-w-lg">
          <span className="px-3.5 py-1.5 rounded-full bg-white/15 text-orange-100 text-xs font-mono font-bold tracking-widest uppercase border border-white/20 inline-block">
            PORTAL LINGKUNGAN & SIRKULAR
          </span>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white leading-[1.15] tracking-tight">
            Pemberdayaan Masyarakat & Konversi Biomassa
          </h1>
          
          <p className="text-sm sm:text-base text-orange-100 leading-relaxed font-normal">
            Platform pengolahan limbah biomassa terpadu untuk kelompok tani, masyarakat desa, operator teknis, dan peneliti akademis.
          </p>
        </div>

        <div className="pt-8 border-t border-white/20 z-10 space-y-3">
          <p className="text-xs font-bold uppercase tracking-wider text-orange-100 font-mono">EKOSISTEM TERINTEGRASI</p>
          <div className="flex flex-wrap gap-2 text-xs font-semibold text-white">
            <span className="px-3 py-1.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20">
              Kelompok Tani & Karang Taruna
            </span>
            <span className="px-3 py-1.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20">
              Pertamina Eco-Tech Hub
            </span>
          </div>
        </div>

      </div>

      {/* Right Form */}
      <div className="lg:col-span-7 min-h-screen bg-white p-8 sm:p-12 lg:p-20 flex flex-col justify-center max-w-2xl mx-auto w-full">
        
        {requireAuthNotice && (
          <div className="mb-6 p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900">
            <p className="text-xs font-bold">
              Akses Terproteksi: Silakan pilih peran Anda atau klik Akses Demo di bawah untuk membuka dashboard secara aman.
            </p>
          </div>
        )}

        <div className="space-y-2 mb-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 tracking-tight">
            {isRegister ? 'Pendaftaran Akun Baru' : 'Masuk ke Dashboard ABADI'}
          </h2>
          <p className="text-sm text-slate-500 font-medium">
            Pilih peran pengguna Anda untuk memuat kredensial dan fitur dashboard yang sesuai.
          </p>
        </div>

        {/* Role Selector Tabs - 100% Pure Clean Text */}
        <div className="mb-6 space-y-2">
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider font-mono">Pilih Peran Pengguna:</label>
          <div className="grid grid-cols-3 gap-2.5">
            
            <button
              type="button"
              onClick={() => handleSelectRole('community')}
              className={`p-3.5 rounded-2xl border text-center transition-all cursor-pointer ${
                selectedRoleType === 'community'
                  ? 'bg-orange-500 text-white border-orange-500 shadow-md shadow-orange-500/20 font-extrabold'
                  : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100 font-bold'
              }`}
            >
              <span className="text-xs leading-tight font-heading block">Masyarakat & Petani</span>
            </button>

            <button
              type="button"
              onClick={() => handleSelectRole('operator')}
              className={`p-3.5 rounded-2xl border text-center transition-all cursor-pointer ${
                selectedRoleType === 'operator'
                  ? 'bg-orange-500 text-white border-orange-500 shadow-md shadow-orange-500/20 font-extrabold'
                  : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100 font-bold'
              }`}
            >
              <span className="text-xs leading-tight font-heading block">Operator Reaktor</span>
            </button>

            <button
              type="button"
              onClick={() => handleSelectRole('researcher')}
              className={`p-3.5 rounded-2xl border text-center transition-all cursor-pointer ${
                selectedRoleType === 'researcher'
                  ? 'bg-orange-500 text-white border-orange-500 shadow-md shadow-orange-500/20 font-extrabold'
                  : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100 font-bold'
              }`}
            >
              <span className="text-xs leading-tight font-heading block">Peneliti Biomassa</span>
            </button>

          </div>
        </div>

        {/* Credentials Form */}
        <div className="space-y-4">
          {isRegister && (
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 font-mono">Nama Lengkap Pengguna</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Masukkan nama Anda..."
                className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-orange-500 focus:bg-white font-medium shadow-sm transition-all"
              />
            </div>
          )}

          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider font-mono">Alamat Email / Nomor HP Pengguna</label>
              <span className="text-[10px] font-bold text-orange-600 font-mono uppercase">PERAN: {selectedRoleType}</span>
            </div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3.5 rounded-2xl bg-orange-50/50 border border-orange-200 text-slate-900 text-sm focus:outline-none focus:border-orange-500 font-mono font-bold shadow-sm transition-all"
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider font-mono">Kata Sandi Akses</label>
              {!isRegister && (
                <button
                  type="button"
                  onClick={() => alert('Link reset kata sandi telah dikirim ke akun Anda.')}
                  className="text-xs font-bold text-orange-600 hover:underline cursor-pointer"
                >
                  Lupa Kata Sandi?
                </button>
              )}
            </div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-orange-500 focus:bg-white font-medium shadow-sm transition-all"
            />
          </div>

          <button
            type="button"
            onClick={(e) => handleInstantNavigate(e, selectedRoleType)}
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 hover:from-orange-600 hover:to-amber-600 text-white font-extrabold text-base shadow-xl shadow-orange-500/25 transition-all hover:scale-[1.01] cursor-pointer active:scale-95 text-center block mt-2"
          >
            {isRegister ? 'Daftar & Masuk' : `Masuk Sebagai ${getRoleTitle()}`}
          </button>
        </div>

        {/* Demo Buttons */}
        <div className="pt-6 mt-6 border-t border-slate-100 space-y-3">
          <div className="flex items-center justify-between text-xs text-slate-600">
            <span className="font-semibold">Buka Akses Demo Langsung:</span>
            <button
              type="button"
              onClick={() => setIsRegister(!isRegister)}
              className="font-extrabold text-orange-600 hover:underline cursor-pointer underline-offset-2"
            >
              {isRegister ? 'Masuk Saja' : 'Daftar Akun Baru'}
            </button>
          </div>

          <div className="grid grid-cols-3 gap-2">
            <button
              type="button"
              onClick={(e) => handleInstantNavigate(e, 'community')}
              className="py-3 px-2 rounded-xl bg-orange-50 hover:bg-orange-500 hover:text-white border border-orange-200 text-orange-800 text-[11px] font-bold text-center block transition-all shadow-sm cursor-pointer active:scale-95"
            >
              Demo Masyarakat
            </button>

            <button
              type="button"
              onClick={(e) => handleInstantNavigate(e, 'operator')}
              className="py-3 px-2 rounded-xl bg-slate-50 hover:bg-orange-500 hover:text-white border border-slate-200 text-slate-800 text-[11px] font-bold text-center block transition-all shadow-sm cursor-pointer active:scale-95"
            >
              Demo Operator
            </button>

            <button
              type="button"
              onClick={(e) => handleInstantNavigate(e, 'researcher')}
              className="py-3 px-2 rounded-xl bg-slate-50 hover:bg-orange-500 hover:text-white border border-slate-200 text-slate-800 text-[11px] font-bold text-center block transition-all shadow-sm cursor-pointer active:scale-95"
            >
              Demo Peneliti
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}
