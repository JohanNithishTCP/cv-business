import Image from "next/image";
import React from "react";
// Install via: npm install react-icons
import { FaYoutube, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#222222] text-[#d1d1d1] pt-16 pb-8 px-6 md:px-12 lg:px-24 font-sans text-[13px]">
      <div className="container mx-auto">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-12">
          {/* Logo and Description */}
          <div data-aos="fade-up" className="lg:col-span-4 pr-4">
            <div className="mb-12">
              <Image
                src="/de-soutter-medical/logo.png" // 👉 put your logo here
                alt="De Soutter Medical"
                width={300}
                height={70}
                className="object-contain"
                priority
              />
            </div>
            <p className="leading-relaxed max-w-sm">
              De Soutter Medical specialise in the development, production and
              worldwide distribution of high performance powered orthopaedic
              tools for surgical procedures.
            </p>
          </div>

          {/* Quick Links */}
          <div data-aos="fade-up" className="lg:col-span-2 pr-4">
            <h3 className="text-[#FFFFFF] font-medium mb-6 text-[19px]">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                "Home",
                "Infusion Therapy",
                "Innovation",
                "Consumables",
                "Accessories",
                "Original",
                "About Arcomed",
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="hover:text-[#FFFFFF] text-base transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Address */}
          <div data-aos="fade-up" className="lg:col-span-2 pr-4">
            <h3 className="text-[#FFFFFF] font-medium mb-6 text-[19px]">
              Address
            </h3>
            <div className="space-y-4">
              <p className="text-base text-[#FFFFFF]">
                UK & International Head Office
              </p>
              <address className="not-italic leading-relaxed text-base">
                De Soutter Medical Limited
                <br />
                Halton Brook Business Park,
                <br />
                Weston Road, Aston Clinton,
                <br />
                Bucks, HP22 5WF
                <br />
                United Kingdom
              </address>
            </div>
          </div>

          {/* Contact & Socials */}
          <div data-aos="fade-up" className="lg:col-span-2 pr-4">
            <h3 className="text-[#FFFFFF] font-medium mb-6 text-[19px]">
              Contact
            </h3>
            <div className="space-y-2 mb-8">
              <p>Tel: +44 (0) 1296 634 000</p>
              <p>Fax: +44 (0) 1296 634 033</p>
              <p>
                Email:{" "}
                <a
                  href="mailto:info@de-soutter.com"
                  className="hover:text-[#FFFFFF] text-base border-b border-transparent hover:border-[#FFFFFF] transition-all">
                  info@de-soutter.com
                </a>
              </p>
            </div>
          </div>
          <div data-aos="fade-up" className="lg:col-span-2 pr-4">
            <h3 className="text-[#FFFFFF] font-medium mb-6 text-[19px]">
              Social Media Links
            </h3>
            <div className="flex gap-3">
              {/* Icon wrappers matching the image style */}
              <a
                href="#"
                className="bg-[#FFFFFF] p-2 rounded text-[#222222] hover:bg-red-600 hover:text-[#FFFFFF] transition-all">
                <FaYoutube size={18} />
              </a>
              <a
                href="#"
                className="bg-[#FFFFFF] p-2 rounded text-[#222222] hover:bg-[#0077b5] hover:text-[#FFFFFF] transition-all">
                <FaLinkedinIn size={18} />
              </a>
              <a
                href="#"
                className="bg-[#FFFFFF] p-2 rounded text-[#222222] hover:bg-black hover:text-[#FFFFFF] transition-all">
                <FaXTwitter size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#FFFFFF]/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4   text-gray-500">
          <p className=" text-xs md:text-sm lg:text-[16px]">
            © Copyright De Soutter Medical {currentYear}. All Rights Reserved.
            Company Registration No. 3164365
          </p>
          <div className="flex gap-4  text-xs md:text-sm lg:text-[16px]">
            <a href="#" className="hover:text-[#FFFFFF] transition-colors">
              Code of Ethics Statement
            </a>
            <span className="text-gray-700">|</span>
            <a href="#" className="hover:text-[#FFFFFF] transition-colors">
              Privacy Notice
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
