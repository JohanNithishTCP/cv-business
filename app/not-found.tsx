'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import "./globals.css";
import {
  ArrowRight,
  PlayCircle,
  Layers,
  Activity,
  Users,
  BarChart3,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });

export default function RootNotFound() {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body>
        <div className={`${inter.className} antialiased`}>
          <div className="min-h-screen bg-white text-slate-900 flex flex-col items-center justify-center p-6 relative overflow-hidden font-sans selection:bg-[#1A80C3]/20 selection:text-[#1A80C3]">
            {/* Background Soft Glows */}
            <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-[#1A80C3]/5 rounded-full blur-[120px] pointer-events-none animate-pulse duration-[10s]"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#08949E]/5 rounded-full blur-[100px] pointer-events-none animate-pulse duration-[8s] delay-2000"></div>

            {/* Subtle Grid Background */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#1A80C3 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

            <div className="max-w-5xl w-full text-center relative z-10 space-y-16 py-20">
              {/* Main Logo Branding */}
              <div className="flex justify-center mb-16 animate-in fade-in slide-in-from-top-12 duration-1000">
                <img
                  src="https://cdn.clinicalvisuals.com/siteImages/Clinical_Visuals_Logo.webp"
                  alt="Clinical Visuals"
                  className="h-24 object-contain transition-transform hover:scale-105 duration-500"
                />
              </div>

              {/* Business Proposal Content */}
              <div className="space-y-12 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300 fill-mode-both">
                <div className="flex flex-col items-center space-y-10">
                  <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[#1A80C3]/10 text-[#1A80C3] text-xs font-bold uppercase tracking-[0.2em] shadow-sm border border-[#1A80C3]/5">
                    <ShieldCheck size={16} />
                    Strategic Business Proposal 2026
                  </div>

                  <div className="space-y-6">
                    <h1 className="text-2xl md:text-5xl font-black tracking-tight leading-tight text-slate-900">
                      Transforming Healthcare <br />Through <span className="text-[#1A80C3]">3D Animation</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-500 font-medium max-w-3xl mx-auto leading-relaxed">
                      Precision animation that bridges the gap between complex clinical data and patient understanding. Educated patients have better outcomes.
                    </p>
                  </div>
                </div>
              </div>


            </div>

            <footer className="absolute bottom-12 left-0 right-0 space-y-6">
              {/* Internal Navigation (Repurposed for Proposal Context) */}
              <div className="pt-24 px-6 flex justify-center opacity-60 hover:opacity-100 transition-opacity">
                <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-slate-50 border border-slate-200 text-[11px] font-bold tracking-[0.25em] transition-all">
                  <CheckCircle2 size={16} className="text-[#1A80C3]" />
                  <span className="opacity-70 uppercase">Current Identity:</span>
                  <span className="text-slate-900">{pathname}</span>
                </div>
              </div>
              <div className="h-px w-32 bg-linear-to-r from-transparent via-slate-300 to-transparent mx-auto"></div>
              <div className="flex flex-col items-center gap-4 text-[10px] font-bold tracking-[0.4em] uppercase text-slate-900 opacity-40">
                <span>&copy; 2026 Clinical Visuals Group</span>
              </div>
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}
