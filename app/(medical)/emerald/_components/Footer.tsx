"use client";

import React from "react";
import Link from "next/link";
import { Mail, Phone, Send } from "lucide-react";

const Footer = () => {
  return (
    <footer className="pt-12 lg:pt-16 pb-8 lg:pb-12">
      <div className="w-[95%] mx-auto border border-[#DDDDDD] rounded-[2rem] p-10 md:p-12 md:pb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Column 1: Logo & Desc */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-0">
              <img src="/emerald/images/emerald-logo.png" alt="Logo" className="w-48 h-auto" />
            </div>
            <p className="lg:text-[16px] text-[14px] text-[#333333] leading-relaxed ">
              Emerald is a leading manufacturer of high quality durable medical equipment. We specialize in providing Hospital beds, Wheelchairs, Mattresses and other medical equipment that is safe, reliable, and easy to use.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-[20px] font-bold text-[#014D65] font-albert">Quick Links</h3>
            <ul className="space-y-3">
              {["Home", "About Us", "Products", "Contact Us", "Part Lookup"].map((link) => (
                <li key={link}>
                  <Link href={`#${link.toLowerCase().replace(" ", "-")}`} className="text-[16px] text-[#333333] hover:text-[#059347] transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="lg:col-span-3 space-y-6">
            <h3 className="text-[20px] font-bold text-[#014D65] font-albert">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#F5F5F5] flex items-center justify-center text-[#059347]">
                  <Mail size={20} />
                </div>
                <span className="text-[16px] text-[#333333]">Sales@emeraldsupply.net</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#F5F5F5] flex items-center justify-center text-[#059347]">
                  <Phone size={20} />
                </div>
                <span className="text-[16px] text-[#333333]">1 (888) 363-5563</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="lg:col-span-3 space-y-6">
            <h3 className="text-[20px] font-bold text-[#014D65] font-albert">Subscribe Our Newsletter</h3>
            <div className="relative flex items-center bg-[#014D65] rounded-xl p-1 shadow-sm">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-transparent text-white placeholder:text-white/70 py-3 px-5 outline-none border-none text-[16px]"
              />
              <button className="bg-[#199A68] w-12 h-12 rounded-lg flex items-center justify-center text-white hover:bg-[#158358] transition-all shrink-0">
                <Send size={20} className="transform translate-x-[-1px]" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-[#DDDDDD] text-center">
          <p className="text-[16px] text-[#333333]">
            © Copyright <span className="font-bold text-[#666666]">Emerald Supply</span> 2026. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
