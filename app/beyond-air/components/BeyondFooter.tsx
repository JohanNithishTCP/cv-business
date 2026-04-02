"use client";

import { Navigation } from "lucide-react";
import Image from "next/image";

export default function BeyondFooter() {
  return (
    <footer className="relative bg-[#f5f7f9] pt-16 pb-6 overflow-hidden">

      {/* BACKGROUND IMAGE (you will replace) */}
      <div className="absolute inset-0 opacity-4 bg-[url('/beyond-air/assets/beyond-bg.png')] bg-cover bg-center pointer-events-none" />

      <div className="relative max-w-380 mx-auto px-6 xl:px-0">

        {/* TOP SECTION */}
        <div className="grid md:grid-cols-5 gap-10">

          {/* LEFT SIDE */}
          <div data-aos="fade-up" className="md:col-span-2">

            {/* LOGO */}
            <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <Image
            src="/beyond-air/assets/beyond-logo.png" // replace with actual
            alt="logo"
            width={200}
            height={200}
          />
        </div>
            </div>

            {/* EMAIL INPUT */}
            <div className="mt-6 flex items-center bg-[#00A4E4] rounded-md overflow-hidden w-full max-w-sm">

              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 text-sm text-white placeholder-white bg-transparent outline-none"
              />

              <button className="bg-white text-black cursor-pointer w-12 h-12 flex items-center justify-center">
               <Navigation size={25} className="mt-1 -ml-1"/>
              </button>
            </div>

          </div>

          {/* RIGHT SIDE LINKS */}
          <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-8 text-base">

            {/* COLUMN */}
            <div data-aos="fade-up" data-aos-delay="100">
              <p className="font-semibold text-gray-900 mb-3">Quick Links</p>
              <ul className="space-y-2 text-gray-500 cursor-pointer hover:text-gray-900 transition">
                <li>Home</li>
                <li>About Us</li>
                <li>Products</li>
                <li>Pipeline</li>
                <li>Events</li>
                <li>Contact</li>
              </ul>
            </div>

            <div data-aos="fade-up" data-aos-delay="150">
              <p className="font-semibold text-gray-900 mb-3">Our Solutions:</p>
              <ul className="space-y-2 text-gray-500 cursor-pointer hover:text-gray-900 transition">
                <li>Respiratory Care</li>
                <li>Oncology</li>
                <li>Neurology</li>
                <li>Medical Devices</li>
              </ul>
            </div>

            <div data-aos="fade-up" data-aos-delay="200">
              <p className="font-semibold text-gray-900 mb-3">Our Solutions:</p>
              <ul className="space-y-2 text-gray-500 cursor-pointer hover:text-gray-900 transition">
                <li>Contact Us</li>
                <li>Privacy Policy</li>
                <li>Disclaimer</li>
                <li>Regulations</li>
              </ul>
            </div>

            <div data-aos="fade-up" data-aos-delay="250">
              <p className="font-semibold text-gray-900 mb-3">Contact Info</p>
              <ul className="space-y-2 text-gray-500 cursor-pointer hover:text-gray-900 transition">
                <li>Address: Sunrise, Florida, USA</li>
                <li>Email: info@company.com</li>
                <li>Phone: +49 6441679289-0</li>
              </ul>
            </div>

          </div>

        </div>

        {/* DIVIDER */}
        <div className="mt-12 border-t border-gray-300" />

        {/* COPYRIGHT */}
        <p className="text-center text-xs text-gray-500 mt-4">
          © 2026 Beyond Air Inc. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}