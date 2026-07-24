'use client';

import React from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="id">
      <body className="bg-slate-50 min-h-screen flex items-center justify-center p-6 text-center">
        <div className="max-w-md p-8 bg-white border border-slate-200 rounded-2xl shadow-lg space-y-4">
          <h2 className="text-xl font-bold text-slate-900">Terjadi Kesalahan Sistem</h2>
          <p className="text-xs text-slate-600">{error.message}</p>
          <button
            onClick={() => reset()}
            className="px-5 py-2.5 rounded-xl bg-orange-600 text-white font-bold text-xs"
          >
            Coba Lagi
          </button>
        </div>
      </body>
    </html>
  );
}
