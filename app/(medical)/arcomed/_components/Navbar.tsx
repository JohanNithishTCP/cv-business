"use client";

import Link from "next/link";
import { Search, Menu, X, User, Globe } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Infusion Therapy", href: "/" },
  { name: "Innovation", href: "/" },
  { name: "Consumables", href: "/" },
  { name: "Accessories", href: "/" },
  { name: "Original", href: "/" },
  { name: "About Arcomed", href: "/" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);
  const pathname = usePathname();

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
      className={`fixed top-0 left-0 w-full bg-[#FFFFFF] shadow-sm transition-transform duration-300 z-50 ${show ? "translate-y-0" : "-translate-y-full"
        }`}>
      <div className="container mx-auto flex items-center justify-between px-6 h-20">
        {/* Logo */}
        <img
          src="/arcomed/logo.png"
          alt="logo"
          className="object-contain w-[180px] h-[40px]"
        />

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 text-[#333333] text-[16px] font-medium">
          {navLinks.map((link) => {
            const isActive = link.name === "Home";
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative py-1 transition-colors hover:text-[#C10E1A] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[#C10E1A] after:transition-all after:duration-300 ${isActive
                  ? "text-[#C10E1A] font-semibold after:w-full"
                  : "after:w-0 hover:after:w-full"
                  }`}>
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* Globe */}

          <div className="hidden sm:flex w-12 h-12 border-2 border-[#FFFFFF] bg-[#C10E1A] rounded-full items-center justify-center shadow-lg">
            <Globe size={20} className="text-[#FFFFFF]" />
          </div>

          {/* Login Button */}
          <div className="hidden sm:flex relative items-center">
            <button className="bg-[#C10E1A] text-[#FFFFFF] text-[16px] font-semibold px-8 h-10 rounded-full flex items-center pr-12">
              Login
            </button>

            <div className="absolute right-2 top-1/2 -translate-y-1/2 translate-x-1/2 w-10 h-10 border-2 border-[#FFFFFF] rounded-full bg-[#353A3D] flex items-center justify-center shadow-lg">
              <User size={18} className="text-[#FFFFFF]" />
            </div>
          </div>

          {/* Mobile Menu */}
          <button className="lg:hidden flex items-center justify-center h-12 w-12">
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
    </header>
  );
}
