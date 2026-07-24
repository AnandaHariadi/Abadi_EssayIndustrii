'use client';

import React, { useState } from 'react';

interface UserProfileTabProps {
  userRole: string;
}

export default function UserProfileTab({ userRole }: UserProfileTabProps) {
  const [savedNotice, setSavedNotice] = useState(false);
  const [profile, setProfile] = useState({
    name: 'Pengguna Terdaftar ABADI',
    email: 'user@abadi-ecotech.id',
    phone: '99999',
    institution: 'UPNVJT (UPN Veteran Jawa Timur)',
    deviceId: 'ABADI-NODE-01-UPNVJT',
    notifications: {
      overTempAlert: true,
      overPressureAlert: true,
      weeklyReport: true,
      pointsReward: true,
    }
  });

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSavedNotice(true);
    setTimeout(() => setSavedNotice(false), 4000);
  };

  return (
    <div className="space-y-8 animate-fade-in font-sans text-slate-900">
      
      {/* Header Banner - Zero Component Icons */}
      <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-lg flex flex-wrap items-center justify-between gap-4">
        <div>
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest font-mono">KONFIGURASI AKUN & NODES</span>
          <h3 className="text-xl font-extrabold font-heading text-slate-900 mt-0.5">Profil Pengguna & Pengaturan Reaktor</h3>
          <p className="text-xs text-slate-500 mt-1">Kelola informasi akun terdaftar, preferensi notifikasi, dan seri perangkat IoT Anda.</p>
        </div>
        <span className="px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-800 text-xs font-bold border border-slate-200 font-mono">
          {userRole}
        </span>
      </div>

      {savedNotice && (
        <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-bold">
          <span>Pengaturan profil dan preferensi notifikasi berhasil diperbarui!</span>
        </div>
      )}

      <form onSubmit={handleSave} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Account Info */}
        <div className="lg:col-span-6 p-6 rounded-3xl bg-white border border-slate-200 shadow-lg space-y-4">
          <h4 className="text-base font-extrabold font-heading text-slate-900 pb-2 border-b border-slate-100">Informasi Pribadi & Instansi</h4>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Nama Lengkap</label>
            <input
              type="text"
              value={profile.name}
              onChange={(e) => setProfile({ ...profile, name: e.target.value })}
              className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 text-xs font-bold focus:outline-none focus:border-slate-800"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Alamat Email Terdaftar</label>
            <input
              type="email"
              value={profile.email}
              onChange={(e) => setProfile({ ...profile, email: e.target.value })}
              className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 text-xs font-bold focus:outline-none focus:border-slate-800 font-mono"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Nomor Telepon & WhatsApp</label>
            <input
              type="text"
              value={profile.phone}
              onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
              className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 text-xs font-bold focus:outline-none focus:border-slate-800 font-mono"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Instansi / Afiliasi Kampus</label>
            <input
              type="text"
              value={profile.institution}
              onChange={(e) => setProfile({ ...profile, institution: e.target.value })}
              className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 text-xs font-bold focus:outline-none focus:border-slate-800"
            />
          </div>
        </div>

        {/* Device & Notification Config */}
        <div className="lg:col-span-6 p-6 rounded-3xl bg-white border border-slate-200 shadow-lg space-y-4 flex flex-col justify-between">
          <div className="space-y-4">
            <h4 className="text-base font-extrabold font-heading text-slate-900 pb-2 border-b border-slate-100">Perangkat Telemetri IoT & Notifikasi</h4>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">ID Perangkat Reaktor Utama</label>
              <input
                type="text"
                disabled
                value={profile.deviceId}
                className="w-full px-4 py-3 rounded-2xl bg-slate-100 border border-slate-200 text-slate-700 text-xs font-mono font-bold cursor-not-allowed"
              />
            </div>

            <div className="space-y-2 pt-2">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">Preferensi Peringatan Sistem</label>
              
              <label className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200 cursor-pointer">
                <span className="text-xs font-bold text-slate-800">Alert Peringatan Suhu Tinggi (&gt; 450°C)</span>
                <input
                  type="checkbox"
                  checked={profile.notifications.overTempAlert}
                  onChange={(e) => setProfile({
                    ...profile,
                    notifications: { ...profile.notifications, overTempAlert: e.target.checked }
                  })}
                  className="accent-slate-900 w-4 h-4 rounded cursor-pointer"
                />
              </label>

              <label className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200 cursor-pointer">
                <span className="text-xs font-bold text-slate-800">Notifikasi Poin Hijau Baru</span>
                <input
                  type="checkbox"
                  checked={profile.notifications.pointsReward}
                  onChange={(e) => setProfile({
                    ...profile,
                    notifications: { ...profile.notifications, pointsReward: e.target.checked }
                  })}
                  className="accent-slate-900 w-4 h-4 rounded cursor-pointer"
                />
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-md cursor-pointer active:scale-95 transition-all text-center block mt-4"
          >
            Simpan Perubahan Profil
          </button>
        </div>

      </form>

    </div>
  );
}
