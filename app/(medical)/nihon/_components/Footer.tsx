"use client";

import React from "react";
import Link from "next/link";
import { Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  const footerLinks = [
    {
      title: "Products",
      links: ["Patient Monitoring", "Resuscitation", "Neurology", "Ventilation", "Cardiology", "In-vitro Diagnostics", "Accessories"]
    },
    {
      title: "Solutions",
      links: ["Critical Care", "Prehospital", "Neuromonitoring (ICU)", "Laboratory (IVD)", "Medical IT", "Public Access AED", "Diagnostics", "Neuromonitoring (Long Term)", "Ward", "Medical IT"]
    },
    {
      title: "How can we help?",
      links: ["Innovative Technologies", "Services", "Support", "News & Events", "Media Center", "Contact"]
    },
    {
      title: "Nihon Kohden Europe",
      links: ["About Us", "Privacy Policy", "Imprint", "Terms & Conditions", "Copyright", "Contact"]
    }
  ];

  return (
    <footer className="bg-[#D8EFFF] pt-20 pb-6 text-[#1A1A1A]">
      <div className="container mx-auto px-4 md:px-12" data-aos="fade-up">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 mb-16">
          {/* Brand Column */}
          <div className="xl:col-span-4 flex flex-col gap-8">
            <Link href="/nihon" className="flex items-center gap-3">
              <img src="/nihon/images/nihon-logo.png" alt="Nihon Kohden Europe" className="w-60 h-auto" />
            </Link>

            <p className="text-[#333333] text-[16px] leading-relaxed text-justify">
              Nihon Kohden is a global medical devices and patient monitoring technology company operating in the MedTech industry.
              Founded in Japan, Nihon Kohden develops advanced patient monitoring systems.
            </p>

            <div className="flex flex-col gap-4">
              <span className="font-bold text-[18px]">Social Media Links</span>
              <div className="flex gap-4">
                <a href="#" className="w-8 h-8 flex items-center justify-center rounded-md bg-[#0068B3] text-white hover:bg-[#00589a] transition-colors">
                  <Linkedin size={18} />
                </a>
                <a href="#" className="w-8 h-8 flex items-center justify-center rounded-md bg-[#0068B3] text-white hover:bg-[#00589a] transition-colors">
                  <Youtube size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div className="xl:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerLinks.map((column) => {
              const showSeeAll = (column.title === "Products" || column.title === "Solutions") && column.links.length > 5;
              const displayLinks = showSeeAll ? column.links.slice(0, 5) : column.links;

              return (
                <div key={column.title} className="flex flex-col gap-6">
                  <h4 className="font-semibold text-[18px]">{column.title}</h4>
                  <ul className="flex flex-col gap-3">
                    {displayLinks.map((link, i) => (
                      <li key={i}>
                        <Link href="#" className="text-[#333333] hover:text-[#0068B3] text-[16px] leading-relaxed transition-colors font-light">
                          {link}
                        </Link>
                      </li>
                    ))}
                    {showSeeAll && (
                      <li>
                        <Link href="#" className="text-[#0068B3] font-bold text-[16px] leading-relaxed transition-colors hover:underline">
                          ...See All
                        </Link>
                      </li>
                    )}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-[#000000]/10 text-center text-[#333333] text-[14px] leading-relaxed font-light">
          © {new Date().getFullYear()} Nihon Kohden Europe GmbH • Rosbach, Germany
        </div>
      </div>
    </footer>
  );
};

export default Footer;
