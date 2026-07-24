'use client';

import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 text-center">
      <div className="max-w-md p-8 bg-white border border-slate-200 rounded-2xl shadow-lg space-y-4">
        <h2 className="text-4xl font-extrabold font-heading text-orange-600">404</h2>
        <h3 className="text-lg font-bold font-heading text-slate-900">Halaman Tidak Ditemukan</h3>
        <p className="text-xs text-slate-600">Halaman yang Anda cari tidak tersedia atau telah dipindahkan.</p>
        <Link
          href="/"
          className="inline-block px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs transition-colors"
        >
          Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
}
