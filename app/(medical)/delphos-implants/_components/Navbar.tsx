"use client";


import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/delphos-implants" },
    { name: "Enterprise", href: "#enterprise" },
    { name: "Products", href: "#products" },
    { name: "Documents", href: "#documents" },
    { name: "Contact", href: "#contact" },
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
      className={`w-full flex justify-center transition-all duration-300 z-[100] ${scrolled ? "fixed top-0 left-0" : "relative my-4"
        }`}>
      <div
        className={`bg-[#059347] px-6 py-3 shadow-lg transition-all duration-300 ${scrolled
          ? "w-full rounded-none"
          : `w-[95%] ${open ? "rounded-2xl" : "rounded-full"}`
          }`}>
        {/* INNER (content constraint) */}
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src="/delphos-implants/images/logo.png" alt="logo" width={180} height={180} />
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex gap-6 text-[#FFFFFF] text-[17px]">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`${pathname === link.href ? "font-bold" : "font-normal"} transition-all`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Icon */}
          <div className="lg:hidden text-[#FFFFFF]">
            {open ? (
              <X
                size={28}
                onClick={() => setOpen(false)}
                className="cursor-pointer"
              />
            ) : (
              <Menu
                size={28}
                onClick={() => setOpen(true)}
                className="cursor-pointer"
              />
            )}
          </div>
        </div>

        {/* Mobile Menu (also constrained) */}
        {open && (
          <div className="lg:hidden mt-4 max-w-7xl mx-auto flex flex-col gap-4 text-[#FFFFFF] text-[17px] px-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`${pathname === link.href ? "font-bold" : "font-normal"} transition-all`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
