"use client";

import { Facebook, Instagram, Linkedin, Youtube, Menu, X } from "lucide-react";

import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", active: true },
  { label: "Company" },
  { label: "Products & Solutions" },
  { label: "Downloads" },
  { label: "Careers" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${scrolled ? "translate-y-0" : "-translate-y-full"}`}>

      {/* Top Bar */}
      <div className="bg-[#006AB1] text-white text-sm flex justify-between px-6 py-2">
        <div className="flex gap-4 cursor-pointer">
          <Facebook size={18} />
          <Instagram size={18} />
          <Linkedin size={18} />
          <Youtube size={18} />
        </div>
        <div className="border px-3 py-1 rounded text-xs cursor-pointer">
          EN ▾
        </div>
      </div>

      {/* Main Navbar */}
      <div
        className={`flex items-center justify-between px-6 md:px-8 py-4 transition-all ${scrolled ? "bg-white shadow-md" : "bg-white/90 backdrop-blur"
          }`}
      >
        {/* Logo */}
        <div className="font-bold text-xl text-blue-600">
          <img src={`/atmosmed/assets/atmos_logo 1.png`} alt="Logo" width={50} height={50} />
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-8 text-base text-gray-700 cursor-pointer">
          {navLinks.map((link) => (
            <a
              key={link.label}
              className={link.active ? "text-[#16679b] font-semibold" : "hover:text-[#16679b]"}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right side: CTA + Hamburger */}
        <div className="flex items-center gap-3">
          <button className="bg-[#006AB1] text-white px-5 py-2 rounded hover:bg-[#16679b] text-sm">
            Contact
          </button>
          <button
            className="lg:hidden text-gray-700"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-96" : "max-h-0"
          } ${scrolled ? "bg-white shadow-md" : "bg-white/95"}`}
      >
        <div className="flex flex-col px-6 py-4 gap-4 text-base text-gray-700">
          {navLinks.map((link) => (
            <a
              key={link.label}
              className={`cursor-pointer border-b border-gray-100 pb-2 ${link.active ? "text-blue-600 font-semibold" : "hover:text-blue-400"
                }`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
