"use client";
// Emerald Navbar Component - Floating Design

import Link from "next/link";
import { Menu, X, Search } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/emerald" },
    { name: "Products", href: "#products" },
    { name: "About Us", href: "#about" },
    { name: "Contact Us", href: "#contact" },
    { name: "Part Lookup", href: "#lookup" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full flex justify-center transition-all duration-300 z-[100] ${scrolled ? "fixed top-0 left-0" : "relative my-6"
        }`}
    >
      <div
        className={`bg-white border border-[#E5E5E5] transition-all duration-300 flex items-center justify-between ${scrolled
          ? "w-full rounded-none py-3 px-10 shadow-sm"
          : `w-[95%] px-10 py-4 ${open ? "rounded-2xl" : "rounded-2xl"}`
          }`}
      >
        {/* Logo */}
        <div className="flex items-center">
          <div className="flex items-center gap-0">
            <img src="/emerald/images/emerald-logo.png" alt="logo" className="w-40" />
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex gap-8 text-[#333333] text-[17px] font-medium items-center ml-auto mr-12">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`${pathname === link.href ? "text-[#059347] font-semibold" : "text-[#555555] hover:text-[#059347]"
                } transition-all`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Search Bar (Wide design like photo) */}
        <div className="hidden lg:flex items-center bg-[#F7F7F7] rounded-full px-4 py-1.5 w-[400px] border border-transparent focus-within:border-[#014D6522] transition-all">
          <input
            type="text"
            placeholder="Search Products"
            className="bg-transparent border-none outline-none text-sm lg:text-[17px] w-full text-[#333333] placeholder:text-[#999999] font-albert"
          />
          <button className="bg-[#059347] p-2 rounded-full text-white hover:bg-[#047a3a] transition-all scale-110 ml-2">
            <Search size={17} strokeWidth={3} />
          </button>
        </div>

        {/* Mobile Icon */}
        <div className="lg:hidden text-[#014D65]">
          {open ? (
            <X size={28} onClick={() => setOpen(false)} className="cursor-pointer" />
          ) : (
            <Menu size={28} onClick={() => setOpen(true)} className="cursor-pointer" />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden absolute top-full left-[2.5%] w-[95%] bg-white border border-[#E5E5E5] rounded-2xl mt-2 flex flex-col gap-4 text-[#333333] text-[17px] p-6 shadow-xl z-50">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`${pathname === link.href ? "text-[#014D65] font-bold" : "font-normal"
                } transition-all`}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center bg-[#F7F7F7] rounded-full px-4 py-2 mt-2">
            <input
              type="text"
              placeholder="Search Products"
              className="bg-transparent border-none outline-none text-sm w-full font-albert"
            />
            <button className="bg-[#059347] p-1.5 rounded-full text-white">
              <Search size={18} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
