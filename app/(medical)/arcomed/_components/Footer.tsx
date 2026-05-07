import React from "react";
import { ArrowRight } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    "Home",
    "Infusion Therapy",
    "Innovation",
    "Consumables",
    "Accessories",
    "Original",
    "About Arcomed",
  ];

  const cookiePolicy = ["Terms of Use", "Privacy Policy"];

  return (
    <footer className="w-full bg-[#FFFFFF] pt-16 lg:pt-20 pb-8  border-t border-gray-100">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-12 mb-16">
        {/* Logo & Description (4 columns) */}
        <div data-aos="fade-up" className="lg:col-span-3 space-y-6">
          <div className="flex items-start">
            <img
              src="/arcomed/logo.png" // place inside public/images/
              alt="Arcomed Logo"
              className="h-12 w-auto object-contain"
            />
          </div>
          <p className="text-[#333333] text-base leading-relaxed max-w-sm text-justify">
            arcomed is the undisputed technology leader in the market of
            hospital infusion. Founded more than 45 years ago in Switzerland, we
            are pioneers in the development and launch of new technologies to
            increase standards of quality and safety in hospitals.
          </p>
        </div>

        {/* Quick Links (2 columns) */}
        <div data-aos="fade-up" className="lg:col-span-2 space-y-4">
          <h4 className="text-[19px] font-medium text-[#333333]">
            Quick Links
          </h4>
          <ul className="space-y-3">
            {quickLinks.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="text-[#333333] text-base hover:text-[#D3121A] transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Cookie Policy (2 columns) */}
        <div data-aos="fade-up" className="lg:col-span-2 space-y-4">
          <h4 className="text-[19px] font-medium text-[#333333]">
            Cookie Policy
          </h4>
          <ul className="space-y-3">
            {cookiePolicy.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="text-[#333333] text-base hover:text-[#D3121A] transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact & Newsletter (4 columns) */}
        <div data-aos="fade-up" className="lg:col-span-2 space-y-8">
          <div className="space-y-4">
            <h4 className="text-[19px] font-medium text-[#333333]">Contact</h4>
            <div className="text-[#333333] text-base space-y-1">
              <p>+41 43 388 9030</p>
              <p>Steinackerstrasse 29, Kloten,</p>
              <p>Zurich 8302, CH</p>
            </div>
          </div>
        </div>

        <div data-aos="fade-up" className="lg:col-span-3 space-y-4">
          <h4 className="text-[#C10E1A] text-[20px] font-semibold">
            Ready to shape the future with us?
          </h4>

          {/* Newsletter Input */}
          <div className="relative inline-flex items-center w-full max-w-xs">
            <input
              type="email"
              placeholder="Please Enter Your Email"
              className="w-full bg-[#EFEFEF] rounded-full py-3 px-6 pr-14 text-base text-[#616161] focus:ring-1 focus:ring-gray-200 outline-none placeholder:text-gray-400 shadow-inner"
            />

            {/* Floating Circle Arrow */}
            <div className="absolute right-3 top-1/2 -translate-y-1/2 translate-x-1/2 w-12 h-12 border-2 border-[#FFFFFF] bg-[#353A3D] rounded-full shadow-lg flex items-center justify-center cursor-pointer">
              <ArrowRight size={20} className="text-[#FFFFFF]" />
            </div>
          </div>

          <div className="space-y-1 pt-2">
            <p className="text-[#333333] text-base">
              Modern Slavery and Human Trafficking Statement 2026
            </p>
            <p className="text-[#333333] text-base">
              Carbon Reduction Plan: Arcomed AG
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="pt-8 border-t border-gray-300">
        <p className="text-center text-[#333333] text-base">
          Copyright © 2026 - Arcomed, All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
