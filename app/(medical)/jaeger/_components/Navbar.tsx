"use client";

import Link from "next/link";
import { Search, ChevronDown, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full bg-[#FFFFFF] shadow-sm fixed top-0 left-0 z-50 transition-all duration-500 transform ${scrolled || isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <img src="/jaeger/logo.png" className="w-60 h-15 object-contain" />

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-6 text-[#333333] text-base font-medium">
          <Link href="#" className="font-bold underline">
            Home
          </Link>

          {/* PRODUCTS */}
          <div className="relative group">
            <div className="flex items-center gap-1 cursor-pointer">
              Products <ChevronDown size={16} className="text-[#00689B]" />
            </div>
            <div className="absolute left-0 top-full hidden group-hover:block w-80 pt-2">
              <div className="bg-[#FFFFFF] shadow-lg rounded-md p-2">
                <Link href="#" className="block px-4 py-2 hover:bg-[#00689B] hover:text-white">
                  Pulmonary Function Testing
                </Link>
                <Link href="#" className="block px-4 py-2 hover:bg-[#00689B] hover:text-white">
                  Cardiopulmonary Exercise Testing
                </Link>
                <Link href="#" className="block px-4 py-2 hover:bg-[#00689B] hover:text-white">
                  Spirometry
                </Link>
                <Link href="#" className="block px-4 py-2 hover:bg-[#00689B] hover:text-white">
                  Software
                </Link>
                <Link href="#" className="block px-4 py-2 hover:bg-[#00689B] hover:text-white">
                  Product Security
                </Link>
              </div>
            </div>
          </div>

          <Link href="#" className="">Services</Link>
          <Link href="#" className="hidden">Infection Prevention</Link>

          {/* ABOUT */}
          <div className="relative group">
            <div className="flex items-center gap-1 cursor-pointer">
              About <ChevronDown size={16} className="text-[#00689B]" />
            </div>
            <div className="absolute left-0 top-full hidden group-hover:block w-64 pt-2">
              <div className="bg-[#FFFFFF] shadow-lg rounded-md p-2">
                <Link href="#" className="block px-4 py-2 hover:bg-[#00689B] hover:text-white">
                  Company
                </Link>
                <Link href="#" className="block px-4 py-2 hover:bg-[#00689B] hover:text-white">
                  Leadership
                </Link>
                <Link href="#" className="block px-4 py-2 hover:bg-[#00689B] hover:text-white">
                  Careers
                </Link>
              </div>
            </div>
          </div>

          {/* EDUCATION */}
          <div className="relative group">
            <div className="flex items-center gap-1 cursor-pointer">
              Education & Resources
              <ChevronDown size={16} className="text-[#00689B]" />
            </div>
            <div className="absolute left-0 top-full hidden group-hover:block w-72 pt-2">
              <div className="bg-[#FFFFFF] shadow-lg rounded-md p-2">
                <Link href="#" className="block px-4 py-2 hover:bg-[#00689B] hover:text-white">
                  Articles
                </Link>
                <Link href="#" className="block px-4 py-2 hover:bg-[#00689B] hover:text-white">
                  Guides
                </Link>
                <Link href="#" className="block px-4 py-2 hover:bg-[#00689B] hover:text-white">
                  Downloads
                </Link>
              </div>
            </div>
          </div>

          {/* NEWS */}
          <div className="relative group">
            <div className="flex items-center gap-1 cursor-pointer">
              News <ChevronDown size={16} className="text-[#00689B]" />
            </div>
            <div className="absolute left-0 top-full hidden group-hover:block w-64 pt-2">
              <div className="bg-[#FFFFFF] shadow-lg rounded-md p-2">
                <Link href="#" className="block px-4 py-2 hover:bg-[#00689B] hover:text-white">
                  Latest News
                </Link>
                <Link href="#" className="block px-4 py-2 hover:bg-[#00689B] hover:text-white">
                  Events
                </Link>
              </div>
            </div>
          </div>

          <Link href="#">Contact</Link>
        </nav>

        {/* Desktop Search */}
        <button
          style={{ background: "linear-gradient(180deg, #1E5286 0%, #4A76A8 100%)" }}
          className="hidden lg:flex items-center gap-4 text-[#FFFFFF] text-base font-medium px-6 py-2 rounded-md hover:opacity-90 transition shadow-sm"
        >
          Search
          <Search size={20} />
        </button>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-[#333333]"
          onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white px-6 pb-4 space-y-4 text-[#333333] font-medium">
          <Link href="#" className="block">
            Home
          </Link>
          <Link href="#" className="block">
            Products
          </Link>
          <Link href="#" className="block">
            Services
          </Link>
          <Link href="#" className="block">
            Infection Prevention
          </Link>
          <Link href="#" className="block">
            About
          </Link>
          <Link href="#" className="block">
            Education & Resources
          </Link>
          <Link href="#" className="block">
            News
          </Link>
          <Link href="#" className="block">
            Contact
          </Link>

          {/* Mobile Search */}
          <button
            style={{ background: "linear-gradient(180deg, #1E5286 0%, #4A76A8 100%)" }}
            className="w-full flex items-center justify-center gap-2 text-white py-2 rounded-md"
          >
            Search <Search size={18} />
          </button>
        </div>
      )}
    </header>
  );
}
