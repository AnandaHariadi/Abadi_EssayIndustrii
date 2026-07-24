'use client';

import React from 'react';
import { Github, Globe, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const handleScrollTo = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const cleanId = id.replace('#', '');
    const el = document.getElementById(cleanId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = `/${id}`;
    }
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 text-sm py-16 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Logo & Mission */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-3">
              <img src="/abadi-emblem.png" alt="Logo ABADI" className="w-10 h-10 object-contain" />
              <div className="flex flex-col">
                <span className="text-2xl font-extrabold font-heading text-white leading-none">
                  ABADI<span className="text-orange-500">.</span>
                </span>
                <span className="text-[10px] text-slate-400 font-semibold tracking-wider uppercase mt-0.5">
                  Eco-Tech Biomassa
                </span>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Platform Inovasi IoT Telemetry & ML Random Forest Pyrolysis untuk Pengolahan Biomassa Menjadi Biochar & Energi Terbarukan.
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-3">
            <p className="text-xs uppercase font-bold tracking-wider text-slate-200 font-heading">Navigasi Halaman</p>
            <ul className="space-y-2 text-xs">
              <li><button onClick={(e) => handleScrollTo(e, '#beranda')} className="hover:text-orange-400 transition-colors cursor-pointer">Beranda</button></li>
              <li><button onClick={(e) => handleScrollTo(e, '#tentang-kami')} className="hover:text-orange-400 transition-colors cursor-pointer">Tentang Kami</button></li>
              <li><button onClick={(e) => handleScrollTo(e, '#cara-kerja')} className="hover:text-orange-400 transition-colors cursor-pointer">Cara Kerja Reaktor</button></li>
              <li><button onClick={(e) => handleScrollTo(e, '#fitur')} className="hover:text-orange-400 transition-colors cursor-pointer">Preview Fitur ML</button></li>
              <li><button onClick={(e) => handleScrollTo(e, '#dampak')} className="hover:text-orange-400 transition-colors cursor-pointer">Dampak Lingkungan</button></li>
            </ul>
          </div>

          {/* Col 3: Sensor IoT & Tech */}
          <div className="space-y-3">
            <p className="text-xs uppercase font-bold tracking-wider text-slate-200 font-heading">Teknologi Terpakai</p>
            <ul className="space-y-2 text-xs">
              <li><span className="text-slate-400">Sensor Suhu: DHT22 Telemetry</span></li>
              <li><span className="text-slate-400">Sensor Tekanan: BMP280 Barometer</span></li>
              <li><span className="text-slate-400">Gas Emisi: MQ-135 Air Quality</span></li>
              <li><span className="text-slate-400">AI ML Engine: Random Forest Regression</span></li>
              <li><span className="text-slate-400">Database: Time-series Telemetry Logs</span></li>
            </ul>
          </div>

          {/* Col 4: Social & Links */}
          <div className="space-y-3">
            <p className="text-xs uppercase font-bold tracking-wider text-slate-200 font-heading">Komunitas Pemuda</p>
            <p className="text-xs text-slate-400">Bergabunglah dalam jaringan inovator hijau & pemuda penggerak ekonomi sirkular.</p>
            <div className="flex items-center gap-3 pt-2">
              <a href="#" onClick={(e) => { e.preventDefault(); alert('Media sosial ABADI Eco-Tech sedang disiapkan.'); }} className="w-9 h-9 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-orange-400 hover:border-orange-500 transition-colors cursor-pointer">
                <Github className="w-4 h-4" />
              </a>
              <a href="#" onClick={(e) => { e.preventDefault(); alert('Situs resmi korporat ABADI Eco-Tech.'); }} className="w-9 h-9 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-orange-400 hover:border-orange-500 transition-colors cursor-pointer">
                <Globe className="w-4 h-4" />
              </a>
              <a href="#" onClick={(e) => { e.preventDefault(); alert('Jejaring profesional ABADI di LinkedIn.'); }} className="w-9 h-9 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-orange-400 hover:border-orange-500 transition-colors cursor-pointer">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" onClick={(e) => { e.preventDefault(); alert('Akun resmi X (Twitter) ABADI Eco-Tech.'); }} className="w-9 h-9 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-orange-400 hover:border-orange-500 transition-colors cursor-pointer">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 ABADI Eco-Tech Platform. Hak Cipta Dilindungi Undang-Undang.</p>
          <p>Dikembangkan oleh Tim Inovasi Pemuda ABADI</p>
        </div>
      </div>
    </footer>
  );
}
