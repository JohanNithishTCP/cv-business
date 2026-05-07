"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

export default function SternFooter() {

  return (
    <footer className="bg-[#f7f7f7] pt-20 pb-8 overflow-hidden">

      <div className="max-w-380 mx-auto px-4 sm:px-6">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-10">

          {/* BRAND */}
          <div
            data-aos="fade-right"
            className="sm:col-span-2 md:col-span-3 lg:col-span-1"
          >
          <div>
            <Image src="/stern-med/sternmed-logo.png" alt="SternMed Logo" width={190} height={120} />
          </div>

            <p className="text-base text-gray-500 leading-relaxed mt-8">
              With our international team of experts, SternMed stands
              for reliable medical technology.
            </p>

            {/* SOCIALS */}
            <div className="flex items-center gap-3 mt-6">

              {[<BsInstagram/>, <BsLinkedin/>, <FaFacebook/>, <BsYoutube/>].map((item, index) => (
                <button
                  key={index}
                  className="w-10 h-10 rounded-full border border-[#0077B5] text-[#0077B5] flex items-center justify-center hover:bg-[#0077B5] hover:text-white transition"
                >
                  {item}
                </button>
              ))}

            </div>
          </div>

          {/* QUICK LINKS */}
          <div data-aos="fade-up" data-aos-delay="100">
            <h3 className="font-semibold text-gray-800 mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-base text-gray-500">
              <li><a href="#" className="hover:text-[#0077B5] transition">Home</a></li>
              <li><a href="#" className="hover:text-[#0077B5] transition">Products</a></li>
              <li><a href="#" className="hover:text-[#0077B5] transition">About SternMed</a></li>
              <li><a href="#" className="hover:text-[#0077B5] transition">Be Our Dealer</a></li>
              <li><a href="#" className="hover:text-[#0077B5] transition">Contact Us</a></li>
            </ul>
          </div>

          {/* MEDICAL EQUIPMENT */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h3 className="font-semibold text-gray-800 mb-5">
              Medical Equipment
            </h3>

            <ul className="space-y-3 text-base text-gray-500">
              <li><a href="#" className="hover:text-[#0077B5] transition">Medical Imaging Systems</a></li>
              <li><a href="#" className="hover:text-[#0077B5] transition">OR Solutions</a></li>
              <li><a href="#" className="hover:text-[#0077B5] transition">Patient Care</a></li>
            </ul>
          </div>

          {/* COMPANY */}
          <div data-aos="fade-up" data-aos-delay="300">
            <h3 className="font-semibold text-gray-800 mb-5">
              Company
            </h3>

            <ul className="space-y-3 text-base text-gray-500">
              <li><a href="#" className="hover:text-[#0077B5] transition">News</a></li>
              <li><a href="#" className="hover:text-[#0077B5] transition">Career</a></li>
              <li><a href="#" className="hover:text-[#0077B5] transition">About Us</a></li>
            </ul>
          </div>

          {/* ADDRESS */}
          <div data-aos="fade-up" data-aos-delay="400">
            <h3 className="font-semibold text-gray-800 mb-5">
              Address
            </h3>

            <div className="space-y-3 text-base text-gray-500 leading-relaxed">
              <p>
                SternMed GmbH <br />
                Schubertstr. 31 <br />
                88214 Ravensburg – Germany
              </p>

              <p className="flex items-center gap-2">
                <span className="text-[#0077B5]">📞</span>
                +49 751 35 97 80
              </p>

              <p className="flex items-center gap-2">
                <span className="text-[#0077B5]">✉</span>
                email@sternmed.de
              </p>
            </div>
          </div>

          {/* PARTNER */}
          <div
            data-aos="fade-left"
            className="sm:col-span-2 md:col-span-2 lg:col-span-1 lg:text-right"
          >
          <div>
            <Image src="/stern-med/stern-gha-logo.png" alt="SternMed Logo" width={190} height={120} />
          </div>
            <p className="text-base text-gray-500 leading-relaxed max-w-[180px]">
              Member of the German Healthcare Alliance (GHA)
            </p>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="border-t border-gray-300 mt-14 pt-6">

          {/* COPYRIGHT */}
          <div className="text-center text-base text-gray-500">
            © 2026 SternMed GmbH. All rights reserved. Site Notice |
            Privacy Policy | Cookie Preference
          </div>

        </div>

      </div>
    </footer>
  );
}