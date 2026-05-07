"use client";

import { Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <>
    <footer className="bg-gray-100 py-8 md:py-12 px-4 md:px-10 lg:px-4">
      <div className="max-w-400 mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 lg:gap-10">

        {/* LOGO */}
        <div data-aos="fade-up" >
          <div className="flex items-center gap-2 mb-3 border">
                      <img
            src="/utah-medical/assets/utah-logo.png"
            alt="Logo"
            className="w-56 lg:w-52 xl:w-64 h-auto"
          />
          </div>

          <div className="text-gray-600">
            <p>
              Utah Medical Products, Inc.® with particular interest in healthcare for women and their babies, develops, manufactures and markets specialty medical devices.
            </p>
          </div>
        </div>

        {/* PRODUCTS */}
        <div data-aos="fade-up" data-aos-delay="100" >
          <h4 className="text-xl font-semibold text-[#336699] mb-3 border-b border-gray-300 pb-1">
            Products
          </h4>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-3 text-base text-gray-600">
            <ul className="space-y-3 cursor-pointer">
              <li className="hover:text-[#336699] transition-colors cursor-pointer">Blood Pressure/Blood Mgt</li>
              <li className="hover:text-[#336699] transition-colors cursor-pointer">Electrosurgery</li>
              <li className="hover:text-[#336699] transition-colors cursor-pointer">Labor and Delivery</li>
              <li className="hover:text-[#336699] transition-colors cursor-pointer">Neonatal Intensive Care</li>
              <li className="hover:text-[#336699] transition-colors cursor-pointer">Urological Care</li>
            </ul>

            <ul className="space-y-3 cursor-pointer">
              <li className="hover:text-[#336699] transition-colors cursor-pointer">Womens Pelvic Health</li>
              <li className="hover:text-[#336699] transition-colors cursor-pointer">OEM/Capabilities</li>
              <li className="hover:text-[#336699] transition-colors cursor-pointer">Biopharma</li>
            </ul>
          </div>
        </div>

        {/* CUSTOMER SERVICE */}
        <div data-aos="fade-up" data-aos-delay="200" className="px-0 lg:px-10">
          <h4 className="text-xl font-semibold text-[#336699] mb-3">
            Customer Service
          </h4>

          <ul className="space-y-2 text-base text-gray-600 cursor-pointer">
            <li className="hover:text-[#336699] transition-colors cursor-pointer">Ordering</li>
            <li className="hover:text-[#336699] transition-colors cursor-pointer">Customer Service</li>
            <li className="hover:text-[#336699] transition-colors cursor-pointer">Product Education</li>
            <li className="hover:text-[#336699] transition-colors cursor-pointer">Regulatory and Quality</li>
            <li className="hover:text-[#336699] transition-colors cursor-pointer">Legal</li>
            <li className="hover:text-[#336699] transition-colors cursor-pointer">Site Map</li>
            <li className="hover:text-[#336699] transition-colors cursor-pointer">Website Terms of Use</li>
            <li className="hover:text-[#336699] transition-colors cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

        {/* EVENTS */}
        <div data-aos="fade-up" data-aos-delay="300" >
          <h4 className="text-xl font-semibold text-[#336699] mb-3">
            Events & Meetings
          </h4>

          <ul className="space-y-2 text-base text-gray-600 cursor-pointer">
            <li className="hover:text-[#336699] transition-colors cursor-pointer">Global</li>
            <li className="hover:text-[#336699] transition-colors cursor-pointer">Careers</li>
            <li className="hover:text-[#336699] transition-colors cursor-pointer">Investor Relations</li>
            <li className="hover:text-[#336699] transition-colors cursor-pointer">Newsroom</li>
            <li className="hover:text-[#336699] transition-colors cursor-pointer">Contact Us</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div data-aos="fade-up" data-aos-delay="400" >
          <h4 className="text-xl font-semibold text-[#336699] mb-3">
            Contact Info
          </h4>

          <div className="space-y-3 text-base text-gray-600">
            <div className="flex items-center gap-2 hover:text-[#336699] transition-colors cursor-pointer">
              <Phone size={14} className="text-[#336699]" />
              <span>1-800-533-4984</span>
            </div>

            <div className="ml-6 hover:text-[#336699] transition-colors cursor-pointer">1-801-566-1200.</div>

            <div className="flex items-center gap-2 hover:text-[#336699] transition-colors cursor-pointer">
              <Mail size={14} className="text-[#336699]" />
              <span>info@utahmed.com</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
    <div className="bg-[#2F6A9F]">
      <p className="text-center text-white py-4">Copyright © 2026 Utah Medical Products</p>
    </div>
    </>
  );
}