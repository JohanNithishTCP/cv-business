"use client";

import { ArrowRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function MedasNavbar() {
  const [visible, setVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 bg-white ${
        visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <div className="flex items-center justify-between max-w-380 mx-auto py-4 px-4">
        {/* Logo */}
        <img src="/medas-innovation/assets/medas-logo.png" alt="logo" className="w-30 h-12" />

        {/* Nav Links — desktop only */}
        <div className="hidden lg:flex gap-8 text-gray-700">
          <a href="#" className="font-semibold">Home</a>
          <a href="#" className="hover:text-gray-900">Products</a>
          <a href="#" className="hover:text-gray-900">Company</a>
          <a href="#" className="hover:text-gray-900">Services</a>
          <a href="#" className="hover:text-gray-900">News</a>
          <a href="#" className="hover:text-gray-900">Download</a>
        </div>

        {/* CTA — desktop only */}
        <button className="hidden lg:flex bg-[#0287C3] text-white font-semibold px-6 py-2 rounded-md items-center gap-2 hover:bg-[#006AB1] transition">
          Contact <span><ArrowRight /></span>
        </button>

        {/* Hamburger — mobile & tablet */}
        <button
          className="lg:hidden flex items-center justify-center w-11 h-11 rounded-md text-gray-700 hover:bg-gray-100 transition"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile / Tablet Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 pb-6">
          <nav className="flex flex-col text-gray-700">
            <a href="#" className="font-semibold py-3 border-b border-gray-100">Home</a>
            <a href="#" className="hover:text-gray-900 py-3 border-b border-gray-100">Products</a>
            <a href="#" className="hover:text-gray-900 py-3 border-b border-gray-100">Company</a>
            <a href="#" className="hover:text-gray-900 py-3 border-b border-gray-100">Services</a>
            <a href="#" className="hover:text-gray-900 py-3 border-b border-gray-100">News</a>
            <a href="#" className="hover:text-gray-900 py-3">Download</a>
          </nav>
          <button className="mt-4 w-full bg-[#0287C3] text-white font-semibold px-6 py-3 rounded-md flex items-center justify-center gap-2 hover:bg-[#006AB1] transition min-h-[44px]">
            Contact <span><ArrowRight /></span>
          </button>
        </div>
      )}
    </div>
  );
}
