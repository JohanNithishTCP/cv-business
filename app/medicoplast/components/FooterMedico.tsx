"use client";

import { useEffect } from "react";
import AOS from "aos";

export default function FooterMedico() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <footer className="w-full bg-[#f5f5f5] pt-12">
      
      <div className="max-w-380 mx-auto px-4 sm:px-6 grid md:grid-cols-5 gap-6 md:gap-10">
        
        {/* LEFT SECTION */}
        <div className="md:col-span-2" data-aos="fade-up">
          
          {/* Logo */}
          <div className="mb-6">
                   <div className="flex items-center gap-2 md:-mt-12 cursor-pointer">
            <img
             src="/medicoplast/assets/medico-logo.png"
             alt="Logo"
             className="w-56 md:w-96 h-auto"/>
        </div>

          </div>

          {/* Email Input */}
          <div className="flex items-center w-full max-w-xs bg-white rounded-md">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-2 text-base text-black outline-none placeholder:text-[#666666]"
            />
            <div className="flex shrink p-1">
            <button className="w-12 h-12 bg-[#F29100] rounded-md"></button>
            </div>
                
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 md:col-span-3 text-base text-gray-600">
          
          {/* Company */}
          <div data-aos="fade-up" data-aos-delay="100">
            <h4 className="font-medium text-gray-800 mb-3 text-lg">Company</h4>
            <ul className="space-y-2">
              <li className="cursor-pointer hover:text-gray-900">About us</li>
              <li className="cursor-pointer hover:text-gray-900">Products</li>
              <li className="cursor-pointer hover:text-gray-900">Downloads</li>
              <li className="cursor-pointer hover:text-gray-900">Contact</li>
            </ul>
          </div>

          {/* Services */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h4 className="font-semibold text-gray-800 mb-3 text-lg">Services</h4>
            <ul className="space-y-2">
              <li className="cursor-pointer hover:text-gray-900">Packaging Service</li>
              <li className="cursor-pointer hover:text-gray-900">Sterilization</li>
              <li className="cursor-pointer hover:text-gray-900">Development</li>
            </ul>
          </div>

          {/* Products */}
          <div data-aos="fade-up" data-aos-delay="300">
            <h4 className="font-semibold text-gray-800 mb-3 text-lg">Products</h4>
            <ul className="space-y-2">
              <li className="cursor-pointer hover:text-gray-900">Urology</li>
              <li className="cursor-pointer hover:text-gray-900">Care & More</li>
              <li className="cursor-pointer hover:text-gray-900">Airway</li>
            </ul>
          </div>

          {/* Contact */}
          <div data-aos="fade-up" data-aos-delay="400">
            <h4 className="font-semibold text-gray-800 mb-3 text-lg">Contact</h4>
            <ul className="space-y-2">
              <li>
                MEDICOPLAST International GmbH <br />
                Heuweilerstr. 100, D-66557 Illingen
              </li>
              <li>(49) 06825 / 94 24 – 0</li>
              <li className="text-gray-600 underline cursor-pointer hover:text-gray-900">info@medicoplast.de</li>
            </ul>
          </div>

        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-300 mt-12"></div>

      {/* Bottom Bar */}
      <div className="cursor-pointer max-w-380 mx-auto px-4 sm:px-6 py-4 flex flex-wrap gap-4 text-base text-gray-600">
        <span className="hover:text-gray-900">Contact</span>
        <span className="hover:text-gray-900">General terms and conditions</span>
        <span className="hover:text-gray-900">Data Protection</span>
        <span className="hover:text-gray-900">Imprint</span>
      </div>
    </footer>
  );
}