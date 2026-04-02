"use client";

import { Search, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [visible, setVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      setVisible(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full bg-white border-b border-gray-200 z-50 transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-400 mx-auto flex items-center justify-between h-17.5 px-4 md:px-10 lg:px-4">

        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <img
            src="/utah-medical/assets/utah-logo.png"
            alt="Logo"
            className="w-56 lg:w-52 xl:w-72 h-auto"
          />
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-8">
          <a className="text-[#336FA4] font-medium text-sm xl:text-base" href="#">Home</a>
          <a className="text-gray-600 hover:text-[#336699] text-sm xl:text-base" href="#">Products</a>
          <a className="text-gray-600 hover:text-[#336699] text-sm xl:text-base" href="#">Support</a>
          <a className="text-gray-600 hover:text-[#336699] text-sm xl:text-base" href="#">Careers</a>
          <a className="text-gray-600 hover:text-[#336699] text-sm xl:text-base" href="#">Contact Us</a>
        </nav>

        {/* Desktop Search */}
        <div className="hidden lg:flex items-center border border-gray-300 rounded-md overflow-hidden bg-[#F1F1F1]">
          <input
            type="text"
            placeholder="Search"
            className="px-3 py-1 text-black text-sm outline-none placeholder:text-gray-500 w-28 lg:w-auto"
          />
          <button className="bg-[#336699] px-3 py-2 text-white hover:bg-[#336FA4] cursor-pointer">
            <Search size={16} />
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden text-gray-700 p-2"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 px-4 pb-4">
          <nav className="flex flex-col gap-3 pt-3">
            <a className="text-[#336FA4] font-medium" href="#" onClick={() => setMenuOpen(false)}>Home</a>
            <a className="text-gray-600 hover:text-[#336699]" href="#" onClick={() => setMenuOpen(false)}>Products</a>
            <a className="text-gray-600 hover:text-[#336699]" href="#" onClick={() => setMenuOpen(false)}>Support</a>
            <a className="text-gray-600 hover:text-[#336699]" href="#" onClick={() => setMenuOpen(false)}>Careers</a>
            <a className="text-gray-600 hover:text-[#336699]" href="#" onClick={() => setMenuOpen(false)}>Contact Us</a>
          </nav>
          <div className="flex items-center border border-gray-300 rounded-md overflow-hidden bg-[#F1F1F1] mt-3">
            <input
              type="text"
              placeholder="Search"
              className="px-3 py-1 text-sm outline-none placeholder:text-gray-500 w-full"
            />
            <button className="bg-[#336699] px-3 py-2 text-white">
              <Search size={16} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}