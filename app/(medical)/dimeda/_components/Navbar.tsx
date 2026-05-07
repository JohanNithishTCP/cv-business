"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Globe, Search } from "lucide-react";
import Image from "next/image";

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
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 xl:px-0 py-4">
        {/* Logo */}
        <div className="w-40 cursor-pointer">
          <Image
            src="/dimeda/logo.png"
            alt="logo"
            width={130}
            height={40}
            className="object-cover w-full h-auto"
          />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:hidden lg:flex gap-8 text-base text-gray-700">
          <Link
            href="/"
            className="text-[#EB8A20] hover:text-[#dda263] font-medium">
            Home
          </Link>
          <Link href="#" className=" hover:text-[#EB8A20]">
            Company
          </Link>
          <Link href="#" className="hover:text-[#EB8A20]">
            Downloads
          </Link>
          <Link href="#" className="hover:text-[#EB8A20]">
            Product Areas
          </Link>
          <Link href="#" className="hover:text-[#EB8A20]">
            Stock Check
          </Link>
          <Link href="#" className="hover:text-[#EB8A20]">
            Contact
          </Link>
        </nav>

        {/* Icons */}
        <div className="hidden md:hidden lg:flex gap-3">
          <button className="bg-[#EB8A20] p-4 rounded text-white cursor-pointer hover:bg-[#dda263] transition">
            <Globe size={18} />
          </button>
          <button className="bg-[#EB8A20] p-4 rounded text-white cursor-pointer hover:bg-[#dda263] transition">
            <Search size={18} />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-white px-6 pb-4 space-y-4 text-sm flex flex-col">
          <Link href="/" onClick={() => setOpen(false)} className="block">
            Home
          </Link>
          <Link href="#" onClick={() => setOpen(false)} className="block">
            Company
          </Link>
          <Link href="#" onClick={() => setOpen(false)} className="block">
            Downloads
          </Link>
          <Link href="#" onClick={() => setOpen(false)} className="block">
            Product Areas
          </Link>
          <Link href="#" onClick={() => setOpen(false)} className="block">
            Stock Check
          </Link>
          <Link href="#" onClick={() => setOpen(false)} className="block">
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
