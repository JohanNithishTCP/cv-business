"use client";

import { ArrowRight, ChevronDown, Earth, Menu, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function SternNavbar() {
  const [showNav, setShowNav] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setShowNav(true);
      } else {
        setShowNav(false);
        setMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        showNav ? "translate-y-0 bg-white shadow-md" : "-translate-y-full"
      }`}
    >
      <div className="max-w-380 mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div>
          <Image src="/stern-med/sternmed-logo.png" alt="SternMed Logo" width={190} height={120} />
        </div>

        {/* Nav Links — desktop only */}
        <nav className="hidden lg:flex items-center gap-8 text-base font-medium text-gray-700">
          <a href="#" className="hover:text-[#1E6FB6]">
            Home
          </a>
          <a href="#" className="hover:text-[#1E6FB6] flex items-center gap-1">
            Products <ChevronDown size={20} className="mt-1" />
          </a>
          <a href="#" className="hover:text-[#1E6FB6] flex items-center gap-1">
            About SternMed <ChevronDown size={20} className="mt-1" />
          </a>
          <a href="#" className="hover:text-[#1E6FB6]">
            Be Our Dealer
          </a>
          <a href="#" className="hover:text-[#1E6FB6]">
            Contact Us
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button className="hidden sm:flex bg-[#1E6FB6] text-white gap-1 text-base px-4 py-2 rounded-md hover:bg-[#1E6FB6]/90 cursor-pointer transition">
            Search <ArrowRight />
          </button>
          <button className="cursor-pointer border p-2 rounded-md bg-[#1E6FB6]">
            <Earth className="text-white" />
          </button>

          {/* Hamburger — visible on mobile and tablet */}
          <button
            className="lg:hidden p-2 rounded-md border border-gray-200 text-gray-700 hover:bg-gray-100 transition"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile / Tablet dropdown menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-md px-6 py-4 flex flex-col gap-4 text-base font-medium text-gray-700">
          <a href="#" className="hover:text-[#1E6FB6]" onClick={() => setMenuOpen(false)}>
            Home
          </a>
          <a href="#" className="hover:text-[#1E6FB6] flex items-center gap-1" onClick={() => setMenuOpen(false)}>
            Products <ChevronDown size={18} className="mt-0.5" />
          </a>
          <a href="#" className="hover:text-[#1E6FB6] flex items-center gap-1" onClick={() => setMenuOpen(false)}>
            About SternMed <ChevronDown size={18} className="mt-0.5" />
          </a>
          <a href="#" className="hover:text-[#1E6FB6]" onClick={() => setMenuOpen(false)}>
            Be Our Dealer
          </a>
          <a href="#" className="hover:text-[#1E6FB6]" onClick={() => setMenuOpen(false)}>
            Contact Us
          </a>
          <button className="sm:hidden bg-[#1E6FB6] text-white flex gap-1 text-base px-4 py-2 rounded-md hover:bg-[#1E6FB6]/90 cursor-pointer transition w-fit">
            Search <ArrowRight />
          </button>
        </div>
      )}
    </header>
  );
}
