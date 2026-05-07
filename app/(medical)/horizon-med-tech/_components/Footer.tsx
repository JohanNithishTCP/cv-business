import React from "react";
import Link from "next/link";
import { Linkedin, Phone, Mail, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#064163] text-white pt-24 pb-0 relative overflow-hidden">
      {/* Background Topographic lines (Using the same pattern as About/Training for consistency) */}
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none bg-[url('/horizon/images/about-bg.png')] bg-cover bg-center"
      />

      <div className="container mx-auto px-4 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20 mb-20">

          {/* Brand Column */}
          <div className="flex flex-col gap-8">
            <Link href="/horizon">
              <img src="/horizon/images/horizon-logo-footer.png" alt="Horizon Logo" className="w-32" />
            </Link>
            <p className="text-gray-300 text-[17px] leading-relaxed font-light">
              We are a clinically-led medical technology business. Our main focus is neonatal and paediatric health.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded-full bg-white text-[#064163] flex items-center justify-center hover:bg-[#84CFFA] transition-all transform hover:scale-110">
                <Linkedin size={22} fill="currentColor" strokeWidth={0} />
              </a>
            </div>
          </div>

          {/* Links Column */}
          <div className="flex flex-col gap-8">
            <h4 className="font-bold text-xl tracking-tight text-white">Links</h4>
            <ul className="flex flex-col gap-4 text-[14px] text-gray-300 font-light">
              {["Home", "Products", "Training", "About Us", "Contact", "Anti Modern Slavery"].map((item) => (
                <li key={item} className="hover:text-[#84CFFA] transition-colors cursor-pointer text-[17px]">
                  <Link href="#">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="flex flex-col gap-8">
            <h4 className="font-bold text-xl tracking-tight text-white">Contact Info</h4>
            <div className="flex flex-col gap-6 text-[14px]">
              <div className="flex items-start gap-4">
                <div className="mt-1 text-[#84CFFA]">
                  <Phone size={18} fill="currentColor" strokeWidth={0} />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[13px] font-bold uppercase tracking-wider">Call Us On</span>
                  <span className="font-bold text-base text-[17px]">+44 (0)330 043 9066</span>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 text-[#84CFFA]">
                  <Mail size={18} fill="currentColor" strokeWidth={0} />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[13px] font-bold uppercase tracking-wider">Email Us On</span>
                  <span className="font-bold text-base text-[17px] lowercase">info@horizon-medtech.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Column */}
          <div className="flex flex-col gap-8">
            <h4 className="font-bold text-xl tracking-tight text-white">Newsletter</h4>
            <div className="relative group">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-white rounded-xl py-4.5 px-6 pr-16 text-[#064163] text-sm focus:outline-none shadow-inner"
              />
              <button className="absolute right-2 top-2 bottom-2 aspect-square bg-[#064163] text-white rounded-lg flex items-center justify-center hover:bg-[#84CFFA] transition-colors group/btn">
                <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Branded Copyright Bar */}
      <div className="w-full bg-[#84CFFA] py-4 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-[#064163] text-[14px] font-medium tracking-wide">
            © Copyright 2026 by <span className="font-bold">Horizon Med Tech</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
