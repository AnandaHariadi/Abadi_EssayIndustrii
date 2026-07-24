'use client';

import React, { useState } from 'react';

export default function GreenPointsTab() {
  const [points, setPoints] = useState(1450);
  const [wasteKg, setWasteKg] = useState('');
  const [wasteType, setWasteType] = useState('SEKAM_PADI');
  const [redeemNotice, setRedeemNotice] = useState<string | null>(null);

  const handleDepositWaste = (e: React.FormEvent) => {
    e.preventDefault();
    if (!wasteKg || Number(wasteKg) <= 0) return;
    const earned = Math.floor(Number(wasteKg) * 5); // 5 PTS / kg
    setPoints((prev) => prev + earned);
    setRedeemNotice(`Berhasil menyetor ${wasteKg} kg limbah biomassa ke Pos Desa Subang #01! Anda mendapatkan +${earned} Poin Hijau.`);
    setWasteKg('');
    setTimeout(() => setRedeemNotice(null), 4000);
  };

  const handleRedeem = (itemLabel: string, cost: number) => {
    if (points < cost) {
      alert('Saldo Poin Hijau Anda belum mencukupi untuk klaim ini.');
      return;
    }
    setPoints((prev) => prev - cost);
    setRedeemNotice(`Selamat! Kupon insentif "${itemLabel}" berhasil diklaim dan dikirim ke akun Anda.`);
    setTimeout(() => setRedeemNotice(null), 4000);
  };

  const rewardCatalog = [
    { id: '1', title: '1 Karung (25 kg) Biochar Hayati Super', cost: 500, desc: 'Pembenah tanah biochar murni untuk meningkatkan Ph tanah pertanian & mengikat pupuk organik 3x lebih tahan lama.' },
    { id: '2', title: 'Voucher Saldo E-Wallet Rp 50.000', cost: 1000, desc: 'Insentif tunai langsung dikirim ke e-wallet GoPay/OVO/Dana terdaftar masyarakat.' },
    { id: '3', title: '5 Liter Asam Piroligneous (Cuka Kayu Alami)', cost: 750, desc: 'Pestisida dan pengusir hama organik hasil sampingan kondensasi asap pirolisis.' },
    { id: '4', title: 'Paket Benih Padi Unggul & Bibit Organik', cost: 300, desc: 'Paket benih padi varietas tahan kekeringan dukungan Karang Taruna Komunitas.' },
  ];

  const transactionHistory = [
    { date: '24 Juli 2026', desc: 'Setor 50 kg Sekam Padi Pos Subang #01', pts: '+250 PTS', type: 'EARNED' },
    { date: '18 Juli 2026', desc: 'Klaim 1 Karung Biochar Hayati (25 kg)', pts: '-500 PTS', type: 'REDEEMED' },
    { date: '10 Juli 2026', desc: 'Setor 100 kg Batok Kelapa Kering', pts: '+500 PTS', type: 'EARNED' },
    { date: '02 Juli 2026', desc: 'Bonus Sosialisasi Pertanian Sirkular Desa', pts: '+200 PTS', type: 'EARNED' },
  ];

  return (
    <div className="space-y-8 animate-fade-in font-sans text-slate-900">
      
      {/* Banner Header - Clean Emerald Theme (Zero Icons) */}
      <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-lg flex flex-wrap items-center justify-between gap-4">
        <div>
          <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest font-mono">PROGRAM SIRKULAR MASYARAKAT SUBANG</span>
          <h3 className="text-xl font-extrabold font-heading text-slate-900 mt-0.5">Poin Hijau & Insentif Pengolahan Limbah Tani</h3>
          <p className="text-xs text-slate-500 mt-1">
            Kumpulkan Poin Hijau dari setiap setoran limbah biomassa sekam padi & batok kelapa ke Pos Reaktor Desa Subang #01.
          </p>
        </div>

        <div className="px-5 py-2.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-center shadow-sm">
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block font-mono">Saldo Poin Hijau Aktif</span>
          <span className="text-2xl font-extrabold font-heading text-emerald-600 font-mono">{points.toLocaleString()} PTS</span>
        </div>
      </div>

      {redeemNotice && (
        <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-bold">
          <span>{redeemNotice}</span>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Form: Setor Limbah Biomassa */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-lg space-y-5">
            <div className="pb-3 border-b border-slate-200">
              <h4 className="text-sm font-extrabold font-heading text-slate-900">Form Setor Limbah Biomassa Desa</h4>
              <p className="text-xs text-slate-500 mt-0.5">Tiap 1 kg limbah yang disetor mendapatkan 5 Poin Hijau terverifikasi.</p>
            </div>

            <form onSubmit={handleDepositWaste} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">Jenis Limbah Biomassa Disetor</label>
                <select
                  value={wasteType}
                  onChange={(e) => setWasteType(e.target.value)}
                  className="w-full px-3.5 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 text-xs font-bold focus:outline-none focus:border-emerald-600 focus:bg-white transition-all shadow-sm"
                >
                  <option value="SEKAM_PADI">Sekam Padi (Rice Husk) - Subang Tani</option>
                  <option value="BATOK_KELAPA">Batok & Tempurung Kelapa Kering</option>
                  <option value="TONGKOL_JAGUNG">Tongkol Jagung Kebun Warga</option>
                  <option value="SERBUK_KAYU">Serbuk Kayu Olahan Gergaji Desa</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">Berat Limbah (kg)</label>
                <input
                  type="number"
                  placeholder="Masukkan berat limbah (kg)..."
                  value={wasteKg}
                  onChange={(e) => setWasteKg(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 text-xs font-bold focus:outline-none focus:border-emerald-600 focus:bg-white transition-all shadow-sm font-mono"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-lg shadow-emerald-600/20 cursor-pointer active:scale-95 transition-all"
              >
                Setor Limbah & Terima Poin Hijau
              </button>
            </form>
          </div>

          {/* Riwayat Transaksi Poin */}
          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-lg space-y-4">
            <div className="pb-2 border-b border-slate-100 flex justify-between items-center">
              <h4 className="text-xs font-extrabold font-heading text-slate-900 uppercase tracking-wider">Riwayat Mutasi Poin Hijau</h4>
              <span className="text-[10px] font-mono text-emerald-600 font-bold">MUTASI TERAKHIR</span>
            </div>

            <div className="space-y-3">
              {transactionHistory.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center p-3 rounded-2xl bg-slate-50 border border-slate-100">
                  <div>
                    <p className="text-xs font-bold text-slate-900">{item.desc}</p>
                    <p className="text-[10px] text-slate-400 font-medium">{item.date}</p>
                  </div>
                  <span className={`text-xs font-extrabold font-mono ${
                    item.type === 'EARNED' ? 'text-emerald-600' : 'text-slate-600'
                  }`}>
                    {item.pts}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right Section: Katalog Hadiah Insentif */}
        <div className="lg:col-span-7 space-y-4">
          <div className="pb-2 border-b border-slate-200 flex justify-between items-center">
            <h4 className="text-sm font-extrabold font-heading text-slate-900">Katalog Klaim Hadiah & Pupuk Hayati Gratis</h4>
            <span className="text-[11px] font-mono text-emerald-600 font-bold">DUKUNGAN KARANG TARUNA & PERTAMINA</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {rewardCatalog.map((item) => (
              <div key={item.id} className="p-5 rounded-3xl bg-white border border-slate-200 shadow-lg flex flex-col justify-between space-y-3">
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 font-mono">Insentif Komunitas</span>
                    <span className="text-xs font-extrabold text-emerald-600 font-mono px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200">
                      {item.cost} PTS
                    </span>
                  </div>
                  <h5 className="text-sm font-extrabold font-heading text-slate-900">{item.title}</h5>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                </div>

                <button
                  onClick={() => handleRedeem(item.title, item.cost)}
                  className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-emerald-600 text-white font-bold text-xs transition-all shadow-sm cursor-pointer active:scale-95 text-center block mt-2"
                >
                  Klaim Hadiah Ini
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}
