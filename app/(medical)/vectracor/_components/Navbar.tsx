"use client";

import { Search, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const NAV_ITEMS = [
  "Home",
  "About Us",
  "Products",
  "Veterinary Products",
  "Software",
  "Customer Care",
  "Contact Us",
  "Clinical Research",
  "OEM",
  "Connect to a Technician",
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`w-full bg-white border-b border-gray-200 fixed top-0 z-50 transition-transform duration-300 ${visible ? "translate-y-0" : "-translate-y-full"}`}>
      <div className="max-w-[1600px] mx-auto flex items-center justify-between px-6 py-1">

        {/* Logo */}
        <div>
          <img src="/vectracor/VectraCor.png" className="w-48 h-16 md:w-60 md:h-20 object-contain" />
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-8 text-base font-medium text-gray-700">
          {NAV_ITEMS.map((item, i) => (
            <a key={i} href="#" className={`hover:text-[#25477F] transition lg:${i=== 6 || i === 7 || i === 8 ? "hidden" : "block"} `}>
              {item}
            </a>
          ))}
        </nav>

        {/* Right side: Search + Hamburger */}
        <div className="flex items-center gap-3">
          <button className="cursor-pointer w-10 h-10 flex items-center justify-center rounded-full bg-[#25477F] text-white hover:bg-[#102b57] transition shadow-[0px_4px_12px_rgba(0,0,0,0.40)] border-2 border-[#B5D2FF] hover:border-[#102b57]">
            <Search size={16} />
          </button>

          {/* Hamburger — visible below lg */}
          <button
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-md text-gray-700 hover:bg-gray-100 transition"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile / Tablet Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-md">
          <nav className="flex flex-col px-6 py-4 gap-1">
            {NAV_ITEMS.map((item, i) => (
              <a
                key={i}
                href="#"
                className="py-2.5 text-sm font-medium text-gray-700 border-b border-gray-100 last:border-0 hover:text-blue-600 transition"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
