"use client";

import Link from "next/link";
import { Search, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShow(true); // show navbar
      } else {
        setShow(false); // hide navbar
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full bg-gray-100 shadow-sm transition-transform duration-300 z-50 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}>
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <img
          src="/promisemed/logo.png"
          alt="logo"
          width={180}
          height={40}
          className="object-contain"
        />

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 text-[#333333] text-[16px] font-medium">
          <Link
            href="/"
            className="text-[#009B43] font-semibold underline underline-offset-4">
            Home
          </Link>
          <Link href="/">Products</Link>
          <Link href="/">About Promisemed</Link>
          <Link href="/">News and Media</Link>
          <Link href="/">Contact Us</Link>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* Search Button (hide on small) */}
          <button className="hidden lg:flex items-center gap-2 bg-linear-to-r from-[#009B43] to-[#2353A3] text-[#FFFFFF] text-[18px] font-semibold  px-6 py-2 rounded-full">
            Search
            <Search size={18} />
          </button>

          {/* Mobile Menu Button */}
          <button className="lg:hidden" onClick={() => setOpen(!open)}>
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-md z-50">
          <nav className="flex flex-col gap-4 px-6 py-6 text-[#333333] text-[16px] font-medium">
            <Link href="/" onClick={() => setOpen(false)}>
              Home
            </Link>
            <Link href="/" onClick={() => setOpen(false)}>
              Products
            </Link>
            <Link href="/" onClick={() => setOpen(false)}>
              About Promisemed
            </Link>
            <Link href="/" onClick={() => setOpen(false)}>
              News and Media
            </Link>
            <Link href="/" onClick={() => setOpen(false)}>
              Contact Us
            </Link>

            {/* Divider */}
            <div className="border-t pt-4 mt-2"></div>

            {/* Search Button */}
            <button className="flex items-center justify-center gap-2 bg-linear-to-r from-[#009B43] to-[#2353A3] text-[#FFFFFF] text-[18px] font-semibold px-6 py-3 rounded-full w-full cursor-pointer">
              Search
              <Search size={18} />
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
