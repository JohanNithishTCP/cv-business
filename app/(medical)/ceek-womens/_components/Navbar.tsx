"use client";

import Image from "next/image";
import { Search, ShoppingCart, User, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full bg-[#6F6589] overflow-hidden z-50 transition-transform duration-300 ${visible ? "translate-y-0" : "-translate-y-full"}`}>
      {/* WHITE ANGLED BACKGROUND */}
      <div className="absolute left-0 top-0 h-full w-40 md:w-40 lg:w-80 bg-[#FFFFFF] z-0">
        <div className="absolute right-10 top-0 h-full w-87.5 bg-[#FFFFFF]" />
      </div>

      {/* MAIN NAV */}
      <div className="container mx-auto h-20 flex items-center justify-between px-6 relative z-10">
        {/* LOGO */}
        <Image
          src="/ceek/logo.png"
          alt="logo"
          width={120}
          height={50}
          className="h-12 w-auto object-contain"
        />

        {/* DESKTOP MENU */}
        <nav className="hidden lg:flex items-center gap-8 text-base text-white font-medium">
          <a href="#" className="hover:text-[#ffffffd6]">Home</a>
          <a href="#" className="hover:text-[#ffffffd6]">About Us</a>
          <a href="#" className="hover:text-[#ffffffd6]">Products</a>
          <a href="#" className="hover:text-[#ffffffd6]">Company</a>
          <a href="#" className="hover:text-[#ffffffd6]">Contact us</a>
          <a href="#" className="hover:text-[#ffffffd6]">News</a>
        </nav>

        {/* RIGHT SECTION */}
        <div className="flex items-center gap-3 text-white">
          {/* ICONS (hide on small if needed) */}
          <div className="hidden sm:flex items-center gap-3">
            <div className="w-9 cursor-pointer h-9 rounded-full border flex items-center justify-center hover:bg-white hover:text-[#6F6685] transition">
              <Search className="w-4 h-4" />
            </div>
            <div className="w-9 h-9 cursor-pointer rounded-full border flex items-center justify-center hover:bg-white hover:text-[#6F6685] transition">
              <ShoppingCart className="w-4 h-4" />
            </div>
            <div className="w-9 h-9 cursor-pointer rounded-full border flex items-center justify-center hover:bg-white hover:text-[#6F6685] transition">
              <User className="w-4 h-4" />
            </div>
          </div>

          {/* BUTTON (hide on very small) */}
          <button className="hidden md:block cursor-pointer border px-4 py-2 rounded-lg text-sm font-semibold hover:bg-white hover:text-[#6F6685] transition">
            Visit NellaSpec
          </button>

          {/* MOBILE MENU BUTTON */}
          <button className="lg:hidden" onClick={() => setOpen(!open)}>
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="lg:hidden bg-[#6F6589] text-white px-6 py-6 space-y-5 relative z-10">
          <a href="#" className="block">
            Home
          </a>
          <a href="#" className="block">
            About Us
          </a>
          <a href="#" className="block">
            Products
          </a>
          <a href="#" className="block">
            Company
          </a>
          <a href="#" className="block">
            Contact us
          </a>
          <a href="#" className="block">
            News
          </a>

          {/* Optional mobile button */}
          <button className="w-full border px-4 py-2 rounded-lg mt-4">
            Visit NellaSpec
          </button>
        </div>
      )}
    </header>
  );
}
