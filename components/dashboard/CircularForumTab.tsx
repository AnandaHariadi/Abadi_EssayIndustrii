'use client';

import React, { useState } from 'react';

export default function CircularForumTab() {
  const [threads, setThreads] = useState([
    {
      id: 1,
      title: 'Penerapan Biochar Sekam Padi pada Tanaman Padi Varietas Ciherang',
      author: 'Pak Sutrisno (Ketua Kelompok Tani Subang)',
      role: 'Petani Subang',
      date: '24 Juli 2026',
      replies: 12,
      desc: 'Hasil uji coba aplikasi 2 Ton biochar per hektar menunjukkan ketahanan kekeringan tanah meningkat 4 hari lebih lama dibanding lahan kontrol.',
      tag: 'TANI PRAKTIS',
    },
    {
      id: 2,
      title: 'Optimasi Suhu Pyrolysis 450°C untuk Memaksimalkan Pori Karbon Aktif',
      author: 'Dr. Ir. Haryanto',
      role: 'Peneliti Biomassa UPNVJT',
      date: '23 Juli 2026',
      replies: 8,
      desc: 'Analisis mikroskopi SEM mengonfirmasi bahwa retensi suhu pada 450°C selama 45 menit menghasilkan luas permukaan spesifik pore &gt; 350 m²/g.',
      tag: 'RISET AKADEMIS',
    },
    {
      id: 3,
      title: 'Jadwal Pengumpulan Limbah Batok Kelapa Minggu Ini di Desa Agroteknologi',
      author: 'Ahmad Fauzi',
      role: 'Operator Teknis Subang #01',
      date: '22 Juli 2026',
      replies: 15,
      desc: 'Pos Reaktor Subang #01 siap menerima setoran batok kelapa kering setiap hari Senin dan Kamis pukul 08:00 - 15:00 WIB.',
      tag: 'JADWAL REAKTOR',
    },
  ]);

  const [newTitle, setNewTitle] = useState('');
  const [newDesc, setNewDesc] = useState('');

  const handleCreateThread = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle || !newDesc) return;
    const newObj = {
      id: Date.now(),
      title: newTitle,
      author: 'Pengguna Terdaftar ABADI',
      role: 'Anggota Forum Sirkular',
      date: 'Baru saja',
      replies: 0,
      desc: newDesc,
      tag: 'DISKUSI BARU',
    };
    setThreads([newObj, ...threads]);
    setNewTitle('');
    setNewDesc('');
  };

  return (
    <div className="space-y-8 animate-fade-in font-sans text-slate-900">
      
      {/* Header Banner - Zero Component Icons */}
      <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-lg flex flex-wrap items-center justify-between gap-4">
        <div>
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest font-mono">FORUM KOLABORASI MASYARAKAT & PENELITI</span>
          <h3 className="text-xl font-extrabold font-heading text-slate-900 mt-0.5">Pasar Sirkular & Diskusi Komunitas Biochar</h3>
          <p className="text-xs text-slate-500 mt-1">Wadah bertukar pengalaman praktis pertanian biochar, hasil riset akademis, dan jadwal setoran biomassa.</p>
        </div>

        <span className="px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-800 text-xs font-bold font-mono border border-slate-200">
          {threads.length} TOPIK AKTIF
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Form: Buat Topik Baru */}
        <div className="lg:col-span-5 p-6 rounded-3xl bg-white border border-slate-200 shadow-lg space-y-4">
          <div className="pb-2 border-b border-slate-100">
            <h4 className="text-sm font-extrabold font-heading text-slate-900">Mulai Diskusi atau Tanya Jawab Baru</h4>
            <p className="text-xs text-slate-500 mt-0.5">Tanyakan dosis pupuk, aplikasi biochar, atau jadwal reaktor.</p>
          </div>

          <form onSubmit={handleCreateThread} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">Judul Topik Diskusi</label>
              <input
                type="text"
                required
                placeholder="Contoh: Pengalaman aplikasi cuka kayu pada hama wereng..."
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 text-xs font-bold focus:outline-none focus:border-slate-900"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">Isi Pertanyaan / Catatan Lapangan</label>
              <textarea
                rows={4}
                required
                placeholder="Tuliskan pengalaman atau pertanyaan Anda secara rinci..."
                value={newDesc}
                onChange={(e) => setNewDesc(e.target.value)}
                className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 text-xs font-medium focus:outline-none focus:border-slate-900"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-md cursor-pointer active:scale-95 transition-all"
            >
              Kirim Topik Diskusi Ke Forum
            </button>
          </form>
        </div>

        {/* Right List: Utasan Diskusi */}
        <div className="lg:col-span-7 space-y-4">
          <div className="pb-2 border-b border-slate-200 flex justify-between items-center">
            <h4 className="text-sm font-extrabold font-heading text-slate-900">Diskusi Komunitas Terbaru</h4>
            <span className="text-xs font-mono font-bold text-slate-500">TERHUBUNG DENGAN OPERATOR & PENELITI</span>
          </div>

          <div className="space-y-4">
            {threads.map((item) => (
              <div key={item.id} className="p-5 rounded-3xl bg-white border border-slate-200 shadow-md space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 font-mono px-2.5 py-0.5 rounded-full bg-slate-100 border border-slate-200">
                    {item.tag}
                  </span>
                  <span className="text-[11px] text-slate-400 font-mono font-bold">{item.date}</span>
                </div>

                <div>
                  <h5 className="text-base font-extrabold font-heading text-slate-900">{item.title}</h5>
                  <p className="text-xs text-slate-600 leading-relaxed mt-1">{item.desc}</p>
                </div>

                <div className="pt-2 border-t border-slate-100 flex justify-between items-center text-xs text-slate-500 font-medium">
                  <span>Oleh: <strong className="text-slate-800">{item.author}</strong> ({item.role})</span>
                  <span className="font-mono font-bold text-slate-700">{item.replies} balasan</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}
