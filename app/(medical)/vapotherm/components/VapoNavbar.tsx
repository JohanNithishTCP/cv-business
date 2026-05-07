"use client";

import { useEffect, useState } from "react";
import { ChevronDown, Menu, Phone, Search, X } from "lucide-react";
import Image from "next/image";

export default function VapoNavbar() {
  const [show, setShow] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    "High Velocity Therapy",
    "Patient Care Areas",
    "Products",
    "Resources",
    "About Us",
  ];

  return (
    <div
      className={`fixed top-0 w-full bg-[#0c66affd] left-0 z-50 transition-transform duration-500 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-380 mx-auto">
        {/* Top Bar */}
        <div className="text-white text-sm px-4 md:px-6 lg:px-8 xl:px-4 xxl:px-0 py-2 flex justify-between items-center">
          <span className="flex gap-2 items-center">
            <Phone size={15} /> 1.844.381.8276
          </span>
          <div className="hidden sm:flex items-center gap-4">
            <span className="underline cursor-pointer">COVID-19</span>
            <div className="flex items-center gap-1 cursor-pointer">
              🇬🇧 <span>EN</span> <ChevronDown size={15} />
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-white">
        <div className="max-w-380 mx-auto px-4 md:px-6 lg:px-8 xl:px-4 xxl:px-0 py-4 flex items-center justify-between">
          {/* Logo */}
          <Image
            src="/vapotherm/assets/vapotherm-logo.png"
            alt="Vapotherm Logo"
            width={200}
            height={60}
            className="w-32 md:w-40 lg:w-52 h-auto"
          />

          {/* Desktop Menu */}
          <div className="hidden lg:flex gap-6 xl:gap-8 text-gray-700 text-sm xl:text-base font-medium">
            {navItems.map((item) => (
              <span key={item} className="flex items-center gap-1 cursor-pointer hover:text-[#0C66AF] transition-colors whitespace-nowrap">
                {item} <ChevronDown size={15} />
              </span>
            ))}
          </div>

          {/* Right */}
          <div className="flex items-center gap-2 md:gap-4">
            <button
              aria-label="Search"
              className="min-w-[44px] min-h-[44px] flex items-center justify-center cursor-pointer"
            >
              <Search size={18} className="text-black" />
            </button>
            <button className="cursor-pointer bg-[#0C66AF] hover:bg-[#0c66afdd] text-white px-3 md:px-8 py-2 rounded-full text-xs md:text-sm whitespace-nowrap min-h-[44px]">
              View Products
            </button>
            {/* Hamburger — mobile & tablet only */}
            <button
              aria-label="Toggle menu"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="lg:hidden min-w-[44px] min-h-[44px] flex items-center justify-center text-gray-700"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile / Tablet Menu Panel */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-100">
            {navItems.map((item) => (
              <button
                key={item}
                className="w-full flex items-center justify-between px-6 py-3 min-h-[44px] text-gray-700 text-base font-medium border-b border-gray-100 hover:bg-gray-50 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
                <ChevronDown size={16} />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
