"use client";

import { ArrowDown, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

export const NavbarMedico = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 bg-[#F9F9F9] backdrop-blur-md border-b border-gray-200 transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"}`}>
      <div className="max-w-380 mx-auto flex items-center justify-between px-4 sm:px-6 py-5">

        {/* Logo */}
        <div className="flex items-center gap-2 -mt-4.5 cursor-pointer">
            <img
             src="/medicoplast/assets/medico-logo.png"
             alt="Logo"
             className="w-40 md:w-80 h-auto"/>
        </div>

        {/* Menu (desktop) */}
        <nav className="hidden lg:flex items-center gap-8 text-base text-gray-700">
          <a href="#" className="hover:text-black">Home</a>
          <a href="#" className="hover:text-black">About Us</a>
          <a href="#" className="hover:text-black">Products</a>
          <a href="#" className="hover:text-black flex items-center">Catalog 
            <span className="mt-0.5 hover:text-gray-700">
              <ChevronDown className="size-5 text-gray-600 hover:text-gray-900"/>
              </span> 
              </a>
          <a href="#" className="hover:text-black">Download/IFU</a>
        </nav>

        {/* Right section (desktop) */}
        <div className="hidden lg:flex items-center gap-4">

          {/* Flags */}
          <div className="flex items-center gap-2 cursor-pointer">
            <img src="/medicoplast/assets/medico-flag.png" alt="DE" className="w-10 h-7 object-cover" />
            <div className="w-10 h-7 flex items-center justify-center rounded-full  border-gray-900">
            <img src="/medicoplast/assets/medico-country.png" alt="EN" className="w-6 h-6 object-cover shrink-0 rounded-full" />
            </div>
          </div>

          {/* CTA */}
          <button className="bg-[#F29100] hover:bg-[#F29100] text-white text-[14px] px-8 py-3 font-bold cursor-pointer">
            CONTACT US
          </button>
        </div>

        {/* Hamburger button (mobile) */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2 min-w-11 min-h-11 items-center justify-center cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <nav className="lg:hidden bg-[#F9F9F9] border-t border-gray-200 px-4 sm:px-6 py-4 flex flex-col gap-1 text-base text-gray-700">
          <a href="#" className="hover:text-black py-3 border-b border-gray-100">Home</a>
          <a href="#" className="hover:text-black py-3 border-b border-gray-100">About Us</a>
          <a href="#" className="hover:text-black py-3 border-b border-gray-100">Products</a>
          <a href="#" className="hover:text-black py-3 border-b border-gray-100">Catalog ▾</a>
          <a href="#" className="hover:text-black py-3 border-b border-gray-100">Download/IFU</a>
          <div className="flex items-center gap-3 pt-4">
            <img src="/medicoplast/assets/medico-flag.png" alt="DE" className="w-10 h-7 object-cover" />
            <div className="w-10 h-7 flex items-center justify-center rounded-full border-gray-900">
              <img src="/medicoplast/assets/medico-country.png" alt="EN" className="w-6 h-6 object-cover shrink-0 rounded-full" />
            </div>
            <button className="ml-auto bg-[#F29100] hover:bg-[#F29100] text-white text-[14px] px-6 py-3 font-bold cursor-pointer min-h-11">
              CONTACT US
            </button>
          </div>
        </nav>
      )}
    </header>
  );
};
