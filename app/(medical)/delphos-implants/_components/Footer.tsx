import React from "react";
import {
  FaLinkedinIn,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaLocationDot,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full bg-[#FFFFFF] pt-10 pb-5 px-4">
      {/* Main Gradient Container */}
      <div className="container mx-auto rounded-[40px] bg-linear-to-r from-[#009245] via-[#22B14C] to-[#8CC63F] p-10 md:p-16 text-[#FFFFFF]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Column 1: Logo & Socials */}
          <div data-aos="fade-up" className="space-y-6 lg:col-span-5">
            <div className="relative w-48 h-auto">
              {" "}
              {/* Adjust width as needed */}
              <img
                src="/delphos-implants/images/logo.png"
                alt="Delphos Implants Logo"
                className="w-full h-auto object-contain"
              />
            </div>

            <p className="text-sm lg:text-[17px] leading-relaxed max-w-xs">
              Proud to be a Portuguese company, we have representation in more
              than 28 countries.
            </p>

            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 border border-white/50 rounded-full hover:bg-white/10 transition-colors">
                <FaLinkedinIn size={20} />
              </a>
              <a
                href="#"
                className="p-2 border border-white/50 rounded-full hover:bg-white/10 transition-colors">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div data-aos="fade-up" className="lg:col-span-2">
            <h3 className="text-[24px] font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-sm lg:text-[17px] font-medium">
              <li>
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Enterprise
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Documents
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Products */}
          <div data-aos="fade-up" className="lg:col-span-2">
            <h3 className="text-[24px] font-semibold mb-6">Products</h3>
            <ul className="space-y-4 text-sm lg:text-[17px] font-medium">
              <li>
                <a href="#" className="hover:underline">
                  D2 Face
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  D2 Hand
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  D2 Extremities
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div data-aos="fade-up" className="lg:col-span-3">
            <h3 className="text-[22px] font-semibold mb-6">Contact</h3>
            <ul className="space-y-6 text-sm lg:text-[17px] font-medium">
              <li className="flex items-center gap-3">
                <FaPhone size={18} className="shrink-0" />
                <span>(351) 211 955 986</span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope size={18} className="shrink-0" />
                <a
                  href="mailto:delphos@delphosimplants.com.pt"
                  className="hover:underline">
                  delphos@delphosimplants.com.pt
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FaLocationDot size={18} className="shrink-0 mt-1" />
                <span className="">
                  Estrada Manuel Correia Lopes, Parq. Empresarial Progresso, Armazem n. 5 2785-126 São Domingos de Rana / Portugal
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="mt-5 text-center text-[#484848] font-semibold">
        <p className="sm:text-sm md:text-[16px]">
          Copyright © 2026 Delphos | Powered by{" "}
          <span className="font-semibold">Ravalia</span> - Hosted by{" "}
          <span className="font-semibold">RTW Brasil</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
