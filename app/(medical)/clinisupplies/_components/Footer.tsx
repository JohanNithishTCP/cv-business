"use client";

import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0B0F1A] text-gray-300 px-6 pt-16">
      <div className="container mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Logo + Contact */}
          <div data-aos="fade-up" className="space-y-5">
            <div className="flex items-center gap-3">
              {/* Logo */}
              <div className="relative w-14 h-14">
                <Image
                  src="/clinisupplies/footerLogo.png"
                  alt="Clinisupplies Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Text */}
              <h2 className="text-[#FFFFFF] text-2xl font-semibold">
                Clinisupplies
              </h2>
            </div>
            <p className="text-base leading-relaxed">
              1 Blackmoor Lane, Croxley Park,
              <br />
              Watford, Hertfordshire, WD18 8GA
            </p>
            <p className="text-base">
              customerservices@clinisupplies.co.uk <br />
              +44 (0)20 8863 3468
            </p>
            <p className="text-[19px] font-semibold text-[#FFFFFF]">
              Contact Info
            </p>
            {/* Social Icons */}
            <div className="flex gap-4 pt-2">
              <FaFacebookF className="w-5 h-5 cursor-pointer hover:text-[#FFFFFF] transition" />
              <FaTwitter className="w-5 h-5 cursor-pointer hover:text-[#FFFFFF] transition" />
              <FaInstagram className="w-5 h-5 cursor-pointer hover:text-[#FFFFFF] transition" />
              <FaLinkedinIn className="w-5 h-5 cursor-pointer hover:text-[#FFFFFF] transition" />
            </div>
          </div>

          {/* Column 1 */}
          <div data-aos="fade-up">
            <h3 className="text-[#FFFFFF] text-[19px] font-semibold mb-4">
              Our Products
            </h3>
            <ul className="space-y-2 text-base">
              <li>Bladder</li>
              <li>Bowel</li>
              <li>Bandages and Garments</li>
              <li>Accessories</li>
              <li>All products</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div data-aos="fade-up">
            <h3 className="text-[#FFFFFF] text-[19px] font-semibold mb-4">
              Legal & Policies
            </h3>
            <ul className="space-y-2 text-base">
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
              <li>Modern Slavery</li>
              <li>Investors in People</li>
              <li>Recruitment Privacy Policy</li>
              <li>Labour Standards Assurance Policy</li>
              <li>Carbon Reduction Plan</li>
              <li>Whistleblowing Policy</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div data-aos="fade-up">
            <h3 className="text-[#FFFFFF] text-[19px] font-semibold mb-4">
              Company
            </h3>
            <ul className="space-y-2 text-base">
              <li>Accreditations & Certifications</li>
              <li>Sustainability</li>
              <li>Latest vacancies</li>
              <li>News</li>
              <li>Blogs</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div data-aos="fade-up">
            <h3 className="text-[#FFFFFF] text-[19px] font-semibold mb-4">
              Services
            </h3>
            <ul className="space-y-2 text-base">
              <li>Image request form</li>
              <li>Aquaflush Virtual Nursing Service Referral</li>
              <li>Home Delivery</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-base text-gray-400">
          <p>Sitemap</p>
          <p className="mt-3 md:mt-0 mb-2">
            Copyright © Clinisupplies Ltd. 2026
          </p>
        </div>
      </div>
    </footer>
  );
}
