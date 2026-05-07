import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-white pt-16 pb-4 font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-y-12 lg:gap-x-8 mb-10">
          {/* Logo & Newsletter - Spans 4/12 columns */}
          <div data-aos="fade-up" className="lg:col-span-4 flex flex-col">
            <div className="mb-4">
              <Image
                src="/austofix/austofix.png"
                alt="Austo Fix"
                width={160}
                height={160}
              />
            </div>

            <div className="space-y-4">
              <h4 className="text-[#76A73F] font-bold text-sm tracking-tight">
                Subscribe to Our Newsletter
              </h4>
              {/* Newsletter Input with the specific shadow and rounded corners from image */}
              <div className="flex items-center bg-white border border-gray-100 rounded-xl p-1.5 shadow-xl shadow-gray-200/50 max-w-90">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 h-10 text-[13px] leading-none outline-none text-gray-500 placeholder:text-gray-300"
                />

                <button className="bg-[#76A73F] text-white px-5 h-10 rounded-lg text-[13px] font-semibold hover:bg-[#659134] transition-colors whitespace-nowrap">
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>

          {/* Quick Links - Spans 2/12 */}
          <div
            data-aos="fade-up"
            className="lg:col-span-2 flex flex-col space-y-6">
            <h3 className="font-bold text-sm text-gray-900">Quick Links</h3>
            <ul className="space-y-3 text-[13px] text-gray-700 font-medium">
              <li>
                <a href="#" className="hover:text-[#76A73F]">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#76A73F]">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#76A73F]">
                  Implants
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#76A73F]">
                  Clean Rooms
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#76A73F]">
                  Ideas
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#76A73F]">
                  eIFU
                </a>
              </li>
            </ul>
          </div>

          {/* Visiting Address - Spans 2/12 */}
          <div
            data-aos="fade-up"
            className="lg:col-span-2 flex flex-col space-y-6">
            <h3 className="font-bold text-sm text-gray-900">
              Visiting Address
            </h3>
            <div className="space-y-2 text-[13px] text-gray-700 leading-relaxed font-medium">
              <p>28 Dalgleish Street Thebarton</p>
              <p>SA 5031 Australia</p>
              <p className="pt-1">Phone: 1300 727 075</p>
              <p>Fax: (+61) 08 8 351 08 55</p>
              <p>E-mail: info@austofix.com.au</p>
            </div>
          </div>

          {/* Registered Address - Spans 2/12 */}
          <div
            data-aos="fade-up"
            className="lg:col-span-2 flex flex-col space-y-6">
            <h3 className="font-bold text-sm text-gray-900">
              Registered Address
            </h3>
            <div className="space-y-2 text-[13px] text-gray-700 leading-relaxed font-medium">
              <p>18 Kinkaid Avenue North Plympton</p>
              <p>SA 5037 Australia</p>
              <p className="pt-1">Phone: 1300 727 075</p>
              <p>Fax: (+61) 08 8 351 08 55</p>
              <p>E-mail: info@austofix.com.au</p>
            </div>
          </div>

          {/* Legal - Spans 2/12 */}
          <div
            data-aos="fade-up"
            className="lg:col-span-2 flex flex-col space-y-4">
            <h3 className="font-bold text-sm text-gray-900">Legal</h3>
            <ul className="space-y-3 text-[13px] text-gray-700 font-medium">
              <li>
                <a href="#" className="hover:text-[#76A73F]">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#76A73F]">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar Divider */}
        <div className="border-t border-gray-200 pt-2">
          <p className="text-center text-[11px] text-gray-800 font-semibold tracking-wide">
            Copyright © 2025 Austofix Australia Pty Ltd
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
