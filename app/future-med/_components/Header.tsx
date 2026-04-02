"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { MenuIcon, CloseIcon } from "./Icons";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`w-full bg-primary text-white fixed top-0 z-[100] transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"}`}>
      <div className="container h-20 my-3 flex items-center justify-between">
        {/* Logo Placeholder */}
        <div className="flex items-center justify-center rounded overflow-hidden">
          <img src={`/future-med/logo.png`} alt="Logo" className="w-20 h-20 object-cover" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 font-medium para">
          <Link href="/" className="hover:text-gray-200 transition-colors">Home</Link>
          <Link href="/products" className="hover:text-gray-200 transition-colors">Products</Link>
          <Link href="/about" className="hover:text-gray-200 transition-colors">About Us</Link>
          <Link href="/news" className="hover:text-gray-200 transition-colors">News</Link>
        </nav>

        {/* Action Button & Mobile Menu Toggle */}
        <div className="flex items-center gap-4">
          <Link href="/contact" className="hidden md:flex bg-white text-black text-sm font-semibold px-6 py-2.5 rounded hover:bg-gray-100 transition-colors">
            Contact Us
          </Link>
          <button
            className="md:hidden flex items-center justify-center hover:bg-white/10 p-2 rounded-full transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-primary flex flex-col items-center py-8 gap-6 md:hidden shadow-xl border-t border-white/10 z-40">
          <Link href="/" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-200 transition-colors para">Home</Link>
          <Link href="/products" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-200 transition-colors para">Products</Link>
          <Link href="/about" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-200 transition-colors para">About Us</Link>
          <Link href="/news" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-200 transition-colors para">News</Link>
          <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="bg-white text-black text-sm font-semibold px-8 py-3 rounded hover:bg-gray-100 transition-colors inline-block mt-4">
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
}
