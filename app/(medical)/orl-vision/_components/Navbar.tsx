"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Globe, Search, ArrowRight } from "lucide-react";
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
      className={`fixed top-0 left-0 w-full bg-white shadow-sm transition-transform duration-300 z-50 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}>
      <div className="max-w-400 mx-auto flex items-center justify-between py-4 px-4 md:px-6 lg:px-12 2xl:px-0">
        {/* Logo */}
        <div className="w-32 md:w-36 lg:w-40">
          <Image
            src="/orlvision/logo.png"
            alt="logo"
            width={130}
            height={40}
            className="object-cover w-full h-auto"
          />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex gap-4 xl:gap-8 text-sm xl:text-base text-gray-700">
          <Link
            href="#"
            className="text-[#F49D00] hover:text-[#dda263] font-medium">
            Home
          </Link>
          <Link href="#" className=" hover:text-[#F49D00]">
            Product
          </Link>
          <Link href="#" className="hover:text-[#F49D00]">
            Configuration
          </Link>
          <Link href="#" className="hover:text-[#F49D00]">
            Application
          </Link>
          <Link href="#" className="hover:text-[#F49D00]">
            Downloads
          </Link>
          <Link href="#" className="hover:text-[#F49D00]">
            Trade Fairs
          </Link>
          <Link href="#" className="hover:text-[#F49D00]">
            Contact
          </Link>
          <Link href="#" className="hover:text-[#F49D00]">
            Shop
          </Link>
        </nav>

        {/* Icons */}
        <div data-aos="fade-up" className="hidden lg:block">
          <div className="relative inline-block group">
            <button className="bg-[#F49D00] cursor-pointer text-white font-semibold text-base px-5 py-2 pr-14 rounded-full hover:bg-[#F49D00] transition">
              Make appointment
            </button>

            {/* Floating Arrow */}
            <span className="absolute top-1/2 -translate-y-1/2 right-1 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md transition-transform">
              <ArrowRight size={18} className="text-[#F49D00] cursor-pointer" />
            </span>
          </div>
        </div>

        {/* Mobile/Tablet Menu Button */}
        <button
          className="lg:hidden flex items-center justify-center min-w-11 min-h-11 p-2"
          onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile/Tablet Menu */}
      {open && (
        <div className="lg:hidden bg-white px-6 pb-6 space-y-1 text-sm flex flex-col">
          <Link href="/" onClick={() => setOpen(false)} className="block py-3 border-b border-gray-100">
            Home
          </Link>
          <Link
            href="#"
            onClick={() => setOpen(false)}
            className="block py-3 border-b border-gray-100">
            Product
          </Link>
          <Link
            href="#"
            onClick={() => setOpen(false)}
            className="block py-3 border-b border-gray-100">
            Configuration
          </Link>
          <Link
            href="#"
            onClick={() => setOpen(false)}
            className="block py-3 border-b border-gray-100">
            Application
          </Link>
          <Link
            href="#"
            onClick={() => setOpen(false)}
            className="block py-3 border-b border-gray-100">
            Downloads
          </Link>
          <Link
            href="#"
            onClick={() => setOpen(false)}
            className="block py-3 border-b border-gray-100">
            Trade Fairs
          </Link>
          <Link
            href="#"
            onClick={() => setOpen(false)}
            className="block py-3 border-b border-gray-100">
            Contact
          </Link>
          <Link href="#" onClick={() => setOpen(false)} className="block py-3 border-b border-gray-100">
            Shop
          </Link>

          {/* CTA Button in mobile/tablet menu */}
          <div className="pt-4">
            <div className="relative inline-block w-full">
              <button className="w-full bg-[#F49D00] cursor-pointer text-white font-semibold text-base px-5 py-3 pr-14 rounded-full hover:bg-[#dda263] transition text-left">
                Make appointment
              </button>
              <span className="absolute top-1/2 -translate-y-1/2 right-1 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
                <ArrowRight size={18} className="text-[#F49D00]" />
              </span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
