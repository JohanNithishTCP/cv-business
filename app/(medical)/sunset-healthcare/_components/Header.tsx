"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Search, Menu, X } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/sunset-healthcare", active: true },
    { name: "Sunset Healthcare Solutions", href: "#", active: false },
    { name: "Products", href: "#", active: false },
    { name: "Acute Care", href: "#", active: false },
    { name: "Resources", href: "#", active: false },
    { name: "Ordering", href: "#", active: false },
    { name: "About", href: "#", active: false },
    { name: "Contact Us", href: "#", active: false },
    { name: "News", href: "#", active: false },
  ];

  return (
    <header className={`w-full bg-white border-b border-gray-100 fixed top-0 z-50 transition-all duration-500 transform ${isScrolled ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none text-white"
      }`}>
      <div className="container py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/sunset-healthcare" className="flex items-center">
            <div className="w-[150px] md:w-[200px] h-[40px] md:h-[50px] flex flex-col items-center justify-center rounded overflow-hidden">
              <img src="/sunset-healthcare/logo.png" alt="Logo" className="h-full object-contain" />
            </div>
          </Link>
        </div>

        {/* Navigation - Desktop */}
        <nav className="hidden xl:flex items-center gap-5 lg:gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-[15px] font-semibold transition-colors hover:text-primary relative ${link.active
                ? "text-primary pb-[2px] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-primary"
                : "text-gray-700"
                }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2 md:gap-3">
          <button className="hidden sm:flex w-9 h-9 items-center justify-center bg-primary text-white rounded-full hover:bg-primary-hover transition-colors">
            <Search size={16} />
          </button>
          <button className="hidden sm:flex bg-primary hover:bg-primary-hover text-white text-[13px] font-bold px-5 py-2.5 rounded-full transition-colors">
            Pay Online
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="xl:hidden w-10 h-10 flex items-center justify-center text-gray-700 hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`xl:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "max-h-[80vh] opacity-100 overflow-y-auto" : "max-h-0 opacity-0 overflow-hidden"
        }`}>
        <nav className="flex flex-col p-6 gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-[16px] font-semibold py-2 border-b border-gray-50 transition-colors ${link.active ? "text-primary" : "text-gray-700 hover:text-primary"
                }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex flex-col gap-3 mt-4">
            <button className="flex items-center gap-3 text-gray-700 font-semibold py-2">
              <Search size={20} /> Search
            </button>
            <button className="w-full bg-primary text-white font-bold py-3 rounded-full hover:bg-primary-hover transition-colors">
              Pay Online
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
