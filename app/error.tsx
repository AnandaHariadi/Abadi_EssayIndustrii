'use client';

import React from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 text-center">
      <div className="max-w-md p-8 bg-white border border-slate-200 rounded-2xl shadow-lg space-y-4">
        <h2 className="text-xl font-bold font-heading text-slate-900">Terjadi Kesalahan Aplikasi</h2>
        <p className="text-xs text-slate-600 leading-relaxed">{error.message || 'Terjadi kesalahan sistem saat memuat halaman.'}</p>
        <button
          onClick={() => reset()}
          className="px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs"
        >
          Muat Ulang Halaman
        </button>
      </div>
    </div>
  );
}
