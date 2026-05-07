"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, Linkedin, Globe, Phone, Menu, X, ChevronDown } from "lucide-react";
import Button from "./Button";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Products", href: "#" },
  { name: "Solutions", href: "#" },
  { name: "Technologies", href: "#" },
  { name: "Services", href: "#" },
  { name: "News & Events", href: "#" },
  { name: "Career", href: "#" },
  { name: "About Us", href: "#" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
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
      {/* Top Bar - Full Width, Primary Color Background */}
      <div className="bg-[#0068B3] text-white h-[40px] hidden md:block">
        <div className="container mx-auto px-4 md:px-12 h-full flex justify-end items-center text-[16px] gap-6 font-medium">
          <Link href="#" className="hover:text-white/80 transition-colors">Media Center</Link>
          <Link href="#" className="hover:text-white/80 transition-colors">Corporate Website</Link>
          <Link href="#" className="hover:text-white/80 transition-colors">Contact</Link>
          <div className="flex items-center justify-center border border-white/40 rounded-full w-6 h-6 cursor-pointer hover:bg-white/10 transition-colors">
            <Globe size={12} />
          </div>
        </div>
      </div>

      {/* Main Navbar Placeholder */}
      <div className="h-[75px] md:h-[80px] w-full bg-white relative">
        {/* Main Navbar */}
        <nav className={`bg-white text-[#0068B3] shadow-sm w-full transition-all duration-300 ease-in-out ${isScrolled ? 'fixed top-0 left-0 animate-in slide-in-from-top-full z-[60]' : 'absolute top-0 left-0 z-40'}`}>
          <div className="container mx-auto h-[75px] md:h-[80px] px-4 md:px-12 flex justify-between items-center">
            {/* Logo Section */}
            <Link href="/" className="flex items-center gap-3">
              <div className="flex items-center">
                <img src="/nihon/images/nihon-logo.png" alt="Nihon Kohden Logo" className="w-55 object-contain" />
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden min-[1300px]:flex items-center space-x-6 font-medium text-[16px] tracking-wide">
              {navLinks.map((link, i) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`hover:text-[#0068B3] ${i === 4 ? "hidden" : ""} transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#0068B3] hover:after:w-full after:transition-all ${isActive ? "text-[#0068B3] font-bold after:w-full" : "text-[#111]"}`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            {/* Right Action / Search & Login */}
            <div className="flex items-center gap-2">
              <div className="hidden min-[1300px]:flex items-center gap-2">
                <button className="bg-[#0068B3] text-white px-4 py-1.5 rounded-full flex items-center gap-2 text-[16px] font-bold hover:bg-[#00589a] transition-all hover:shadow-md active:scale-95">
                  <span>Search</span>
                  <div className="bg-white/20 rounded-full p-1">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                  </div>
                </button>
                <button className="bg-[#0068B3] text-white px-4 py-1.5 rounded-full flex items-center gap-2 text-[16px] font-bold hover:bg-[#00589a] transition-all hover:shadow-md active:scale-95">
                  <span>Login</span>
                  <div className="bg-white/20 rounded-full p-1">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                  </div>
                </button>
              </div>

              <button
                className="min-[1300px]:hidden text-[#0068B3] p-2"
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
        <div className="min-[1300px]:hidden fixed top-[75px] md:top-[80px] left-0 w-full h-[calc(100vh-75px)] bg-[#0068B3] text-white py-10 px-8 flex flex-col space-y-6 animate-in slide-in-from-right duration-500 z-[70]">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-base font-bold border-b border-white/10 pb-4 transition-all ${isActive ? "text-[#D8EFFF] pl-4" : "text-white"}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="pt-8 flex flex-col gap-6 text-sm">
            <button className="flex items-center gap-3 bg-white text-[#0068B3] px-6 py-3 rounded-full font-bold justify-center">
              Search <Globe size={18} />
            </button>
            <button className="flex items-center gap-3 border border-white px-6 py-3 rounded-full font-bold justify-center">
              Login <X size={18} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
