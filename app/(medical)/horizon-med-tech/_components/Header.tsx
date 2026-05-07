"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, Linkedin, Globe, Phone, Menu, X, ChevronDown } from "lucide-react";
import Button from "./Button";

const navLinks = [
  { name: "Home", href: "/horizon-med-tech" },
  { name: "About", href: "#" },
  { name: "Products", href: "#" },
  { name: "Training", href: "#" },
  { name: "Contact", href: "#" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      // Sticky after the top bar height (~40px)
      if (window.scrollY > 160) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full relative z-50">
      {/* Top Bar - Full Width, White Background */}
      <div className="bg-[#064163] border-b border-gray-100 text-gray-600 h-[40px] hidden md:block">
        <div className="container mx-auto px-4 md:px-12 h-full flex justify-between items-center text-[13px]">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-white" />
              <a href="mailto:info@horizon-medtech.com" className="text-white transition-colors text-[14px]">
                info@horizon-medtech.com
              </a>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1 cursor-pointer text-white transition-colors">
              <Globe size={16} className="text-white" />
              <span className="font-medium text-[14px]">EN</span>
              <ChevronDown size={14} />
            </div>
            <div className="h-4 w-[1px] bg-gray-200"></div>
            <a href="#" className="text-white transition-colors">
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar Placeholder (to avoid jumping) */}
      <div className="h-[75px] md:h-[80px] w-full bg-[#064163] relative">
        {/* Main Navbar - Full Width, Primary Color Background */}
        <nav className={`bg-white text-[#064163] shadow-md w-full transition-all duration-300 ease-in-out ${isScrolled ? 'fixed top-0 left-0 animate-in slide-in-from-top-full z-[60]' : 'absolute top-0 left-0 z-40'}`}>
          <div className="container mx-auto h-[75px] md:h-[80px] px-4 md:px-12 flex justify-between items-center">
            {/* Logo Section */}
            <Link href="/horizon-med-tech" className="flex items-center">
              <div className="">
                <img src="/horizon/images/horizon-logo.png" alt="horizon-logo" className="w-24" />
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8 font-medium text-[16px] text-[#555]">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`hover:text-[#064163] transition-colors py-2 ${isActive ? "text-[#064163] font-bold" : "text-[#827E76]"}`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            {/* Right Action / Contact Info */}
            <div className="flex items-center gap-4">
              <div className="hidden lg:flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#064163] flex items-center justify-center text-white">
                  <Phone size={20} fill="currentColor" strokeWidth={0} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[12px] text-gray-400 uppercase tracking-wider font-bold">Call Us On</span>
                  <span className="text-[16px] font-bold text-[#064163] tracking-tight">+44 (0)330 043 9066</span>
                </div>
              </div>

              <button
                className="lg:hidden text-[#064163] p-2 ml-4"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed top-[75px] md:top-[80px] left-0 w-full h-[calc(100vh-75px)] bg-[#064163] text-white py-10 px-8 flex flex-col space-y-6 animate-in slide-in-from-right duration-500 z-[70]">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-base font-bold border-b border-white/10 pb-4 transition-all ${isActive ? "text-[#84CFFA] pl-4" : "text-white"}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="pt-8 flex flex-col gap-6 text-sm">
            <div className="flex items-center gap-3">
              <Phone size={20} className="text-[#84CFFA]" />
              <span className="font-bold">+44 (0)330 043 9066</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={20} className="text-[#84CFFA]" />
              <span>info@horizon-medtech.com</span>
            </div>
            <Button href="#" variant="white" className="w-full mt-4">
              CONTACT US
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}


