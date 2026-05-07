"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, Search, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`
        fixed left-0 right-0 z-50 flex justify-center text-base
        transition-all duration-700 ease-in-out 
        ${scrolled ? "top-0 px-0" : "hidden top-6"}
      `}
      >
        {menuOpen && (
          <div
            className="
            absolute
            top-full
            left-0
            w-full
            bg-[#EDEDED]
            shadow-md
            px-8
            py-6
            flex
            flex-col
            gap-5
            text-gray-700
            font-medium
            animate-in slide-in-from-top duration-300
          "
          >
            {["About Us", "Products", "Technical Support", "Contact Us", "Careers"].map((link) => (
              <a key={link} href="#" className="hover:text-[#1BA0D7]"
                onClick={() => setMenuOpen(!menuOpen)}>
                {link}
              </a>
            ))}

            {/* Search LAST */}
            <button className="flex items-center gap-2 text-[#1BA0D7] font-semibold">
              Search
              <Search size={16} />
            </button>
          </div>
        )}
        <div
          className={`
          flex items-center justify-between
          bg-[#EDEDED] shadow-md 
          transition-all duration-700 ease-in-out
          
          /* Key Fixes Below */
          ${scrolled
              ? "w-full max-w-full rounded-none px-12 py-3"
              : "w-full max-w-300 lg:rounded-full px-8 py-3"
            }
        `}
        >
          {/* Logo */}
          <div className="flex flex-col leading-none cursor-pointer">
            <img
              src={`/noxbox/assets/logo.png`}
              alt="Noxbox Logo"
              width={100}
              height={100}
            />
          </div>

          {/* Nav Links */}
          <nav className="hidden lg:flex items-center gap-8  font-medium text-gray-700">
            {["About Us", "Products", "Technical Support", "Contact Us", "Careers"].map((link) => (
              <a key={link} href="#" className="hover:text-[#1BA0D7] transition-colors"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Search Button */}
          <div className="flex items-center gap-4">

            {/* Desktop Search */}
            <button className="hidden lg:flex items-center gap-2 bg-[#1BA0D7] hover:bg-[#1693c6] text-white px-6 py-2.5 rounded-full transition-all active:scale-95">
              Search
              <Search size={16} />
            </button>

            {/* Hamburger */}
            <button
              className="lg:hidden text-gray-700"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

          </div>
        </div>
      </header>
    </>
  );
}