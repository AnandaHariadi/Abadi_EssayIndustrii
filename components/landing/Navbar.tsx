'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Menu, X, LayoutDashboard } from 'lucide-react';

interface NavbarProps {
  onOpenAuthModal?: () => void;
}

export default function Navbar({ onOpenAuthModal }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScrollTo = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const cleanId = id.replace('#', '');
    const el = document.getElementById(cleanId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = `/${id}`;
    }
    setMobileMenuOpen(false);
  };

  const handleDashboardClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof window !== 'undefined') {
      const isAuth = localStorage.getItem('abadi_auth_active');
      if (isAuth === 'true') {
        window.location.href = '/dashboard';
      } else {
        window.location.href = '/login?requireAuth=true';
      }
    }
  };

  const navLinks = [
    { name: 'Beranda', href: '#beranda' },
    { name: 'Tentang Kami', href: '#tentang-kami' },
    { name: 'Cara Kerja', href: '#cara-kerja' },
    { name: 'Fitur', href: '#fitur' },
    { name: 'Dampak', href: '#dampak' },
    { name: 'Kontak', href: '#kontak' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo with Official Cropped Emblem */}
        <Link href="/" className="flex items-center gap-3 group">
          <img
            src="/abadi-emblem.png"
            alt="Logo ABADI"
            className="w-10 h-10 object-contain group-hover:scale-105 transition-transform"
          />
          <div className="flex flex-col">
            <span className="text-xl font-extrabold font-heading text-slate-900 tracking-tight leading-none">
              ABADI<span className="text-orange-600">.</span>
            </span>
            <span className="text-[10px] text-slate-500 font-semibold tracking-wider uppercase mt-0.5">
              Eco-Tech Biomassa
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={(e) => handleScrollTo(e, link.href)}
              className="text-xs font-semibold text-slate-600 hover:text-orange-600 transition-colors cursor-pointer"
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={handleDashboardClick}
            className="px-4 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-900 text-xs font-bold transition-all border border-slate-200 flex items-center gap-1.5 cursor-pointer"
          >
            <LayoutDashboard className="w-4 h-4 text-orange-600" />
            <span>Dashboard</span>
          </button>

          <Link
            href="/login"
            className="px-5 py-2.5 rounded-full bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 hover:from-orange-600 hover:to-amber-600 text-white text-xs font-bold shadow-md shadow-orange-500/25 flex items-center gap-1.5 transition-all hover:scale-105 cursor-pointer"
          >
            <span>Masuk / Daftar</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 py-6 space-y-4">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="text-left text-sm font-semibold text-slate-700 hover:text-orange-600 py-1"
              >
                {link.name}
              </button>
            ))}
          </div>
          <div className="pt-4 border-t border-slate-100 flex flex-col gap-2.5">
            <button
              onClick={handleDashboardClick}
              className="w-full py-3 rounded-xl bg-slate-100 text-slate-900 text-xs font-bold text-center border border-slate-200"
            >
              Buka Dashboard
            </button>
            <Link
              href="/login"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white text-xs font-bold text-center block"
            >
              Masuk / Daftar Akun
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
