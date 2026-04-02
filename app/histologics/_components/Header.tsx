"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import homeData from "../_data/homeData.json";
import Image from "next/image";
import Button from "./Button";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 120) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`z-50 w-full bg-white transition-all duration-300 ${isScrolled ? "fixed top-0 left-0 right-0 shadow-md animate-in slide-in-from-top" : "relative border-b border-gray-200"}`}>
      <div className="container mx-auto px-2 sm:px-3 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold text-[#A43B7F]">
              <img src={`/histologics/images/histologics.png`} alt="Histologics" width={100} height={100} className="w-17.5" />
            </Link>
          </div>
          <nav className="hidden lg:flex space-x-4 xl:space-x-8">
            {homeData.headerLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-gray-700 hover:text-[#A43B7F] px-3 py-2 text-md font-bold transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="hidden lg:flex items-center">
            <Button href="/contact">
              Contact Us
            </Button>
          </div>
          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-[#A43B7F] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#A43B7F] p-2 rounded-md"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {homeData.headerLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-bold text-gray-700 hover:text-[#A43B7F] hover:bg-gray-50 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="px-3 pt-4 pb-2">
              <Button href="/contact" className="w-full">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
