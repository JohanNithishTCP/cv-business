import React from "react";
import { ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full ">
      {/* 1. Newsletter Bar */}
      <div data-aos="fade-up" className="bg-[#F49D00] py-4 px-2 md:px-10">
        <div className="max-w-400 mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-white text-base md:text-lg font-bold max-w-md leading-snug">
            With our newsletter you will always be informed about the update of
            the instructions for use.
          </p>

          <div className="flex w-full md:w-auto max-w-md bg-white rounded-md overflow-hidden">
            <input
              type="email"
              placeholder="Email address"
              className="grow px-4 py-3 outline-none text-gray-600 text-sm"
            />
            <button className="cursor-pointer bg-white px-4 border-l border-gray-100 flex items-center justify-center group">
              <ArrowRight className="w-5 h-5 text-[#F49D00] transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>

      {/* 2. Main Dark Footer */}
      <div className="bg-[#1a1a1a] text-white pt-8 pb-4 px-6 md:px-10 relative overflow-hidden">
        {/* Subtle background pattern overlay if needed */}
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('/path-to-hex-pattern.png')] bg-repeat" />

        <div className="max-w-400 mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 relative z-10">
          {/* Logo & Intro Column */}
          <div data-aos="fade-up" className="md:col-span-4">
            <div className="mb-6">
              <img
                src="/orlvision/logo-footer.png"
                alt="orlvision logo"
                className="h-10 w-auto"
              />
            </div>
            <h4 className="font-bold mb-4">Simple. More. See.</h4>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              Seeing creates trust, both with the doctor and the patient.
              Videoendoscopes from orlvision support the user in efficient
              diagnostics, the "co-view" on a monitor facilitates the dialog
              with the patient.
            </p>
          </div>

          {/* Quick Links Column */}
          <div data-aos="fade-up" className="md:col-span-2">
            <h5 className="font-bold text-lg mb-4">Quick Links</h5>
            <ul className="text-base text-gray-400 space-y-3">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Configurations
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Application
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Downloads
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Trade fairs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Shop
                </a>
              </li>
            </ul>
          </div>

          {/* Certificates Column */}
          <div data-aos="fade-up" className="md:col-span-2">
            <h5 className="font-bold text-lg mb-4">Certificates</h5>
            <ul className="text-base text-gray-400 space-y-3 cursor-pointer">
              <li>ISO 13485:2021</li>
              <li>MDR compliant</li>
            </ul>
          </div>

          {/* Opening Hours Column */}
          <div data-aos="fade-up" className="md:col-span-2">
            <h5 className="font-bold text-lg mb-4">Opening hours</h5>
            <div className="text-base text-gray-400 space-y-1 ">
              <p>Monday - Friday</p>
              <p>8 am - 4 pm</p>
            </div>
          </div>

          {/* Contact Column */}
          <div data-aos="fade-up" className="md:col-span-2">
            <h5 className="font-bold text-lg mb-4">Contact</h5>
            <div className="text-base text-gray-400 space-y-4">
              <p>orlvision GmbH</p>
              <p>Gewerbestrasse 17 D-35633 Lahnau</p>
              <div>
                <p>Phone: +49 6441 679298-0</p>
                <p>Fax: +49 6441 679298-99</p>
              </div>
              <p>
                Email:{" "}
                <a href="mailto:info@orlvision.de" className="hover:text-white">
                  info@orlvision.de
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* 3. Bottom Copyright Bar */}
        <div className="max-w-7xl mx-auto mt-8 pt-2 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-500 uppercase tracking-widest">
            © 2026 orlvision GmbH
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
