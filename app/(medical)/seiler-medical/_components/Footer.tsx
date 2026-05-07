import Image from "next/image";
import React from "react";
// Importing specific icons from the React Icons library
import {
  FaYoutube,
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";
import { MdPhone } from "react-icons/md";

const Footer = () => {
  const footerLinks = {
    "Quick Links": [
      "Home",
      "Products",
      "Services",
      "Warranty",
      "About",
      "Contact",
    ],
    Resources: [
      "Returns",
      "Careers",
      "Dealer Login",
      "Privacy",
      "Corporate Site",
    ],
  };

  const socialLinks = [
    { icon: <FaYoutube />, href: "#" },
    { icon: <FaLinkedinIn />, href: "#" },
    { icon: <FaInstagram />, href: "#" },
    { icon: <FaFacebookF />, href: "#" },
  ];

  return (
    <footer className="bg-white pt-16 pb-8 px-6 border-t border-gray-100">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center h-18">
                    <Image
                      src="/seiler/logo.png"
                      alt="Seiler Medical"
                      width={140}
                      height={40}
                    />
            </div>
            <p className="text-gray-500 text-base leading-relaxed max-w-xs">
              Seiler Medical provides high quality optics and service to the
              medical and dental industry.
            </p>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="space-y-4">
              <h4 className="font-bold text-gray-800 text-lg">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-[#0077b6] text-base transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact & Social Column */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-bold text-gray-800 text-lg">Contact</h4>
              <div className="text-gray-500 text-base space-y-1">
                <p>3433 Tree Court Industrial Blvd.</p>
                <p>St. Louis, MO 63122</p>
              </div>
              <a
                href="tel:18004892282"
                className="flex items-center gap-2 text-[#0077b6] text-base font-semibold hover:underline">
                <MdPhone size={18} />
                1-800-489-2282
              </a>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold text-gray-800 text-lg">
              Social Media Links
            </h4>
            <div className="flex gap-2">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="bg-[#0077b6] text-white p-2 rounded hover:bg-[#005f92] transition-all flex items-center justify-center w-8 h-8">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="border-t border-gray-200 pt-8 text-center">
          <p className="text-gray-500 text-base font-medium">
            Copyright © 2026 Seiler Instrument Inc. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
