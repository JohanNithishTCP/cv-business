"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import Button from "./Button";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/kimal" },
    { name: "About Us", href: "#" },
    { name: "Products", href: "#" },
    { name: "Maternity by Kimal", href: "#" },
    { name: "Contact us", href: "#" },
    { name: "Careers", href: "#" },
    { name: "News & Events", href: "#" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Show header after scrolling down 100px (adjust this value if you want it exactly after a full screen)
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Check on initial mount
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 bg-white shadow-sm border-b border-gray-50 transition-transform duration-500 ${isScrolled || isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-[80px]">
            {/* Logo */}
            <Link href="/kimal" className="flex flex-col leading-tight z-50">
              <img src="/kimal/images/kimal-logo.png" alt="kimal-logo" className="w-32 md:w-36 xl:w-40 object-contain" />
            </Link>

            {/* Navigation */}
            <nav className="hidden lg:flex items-center gap-8 text-sm md:text-base font-semibold">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative group pb-1 transition-colors ${isActive ? "text-[#4782d3]" : "text-slate-700 hover:text-[#4782d3]"}`}
                  >
                    {link.name}
                    <span
                      className={`absolute left-0 bottom-0 w-full h-[2px] bg-[#4782d3] transition-transform duration-300 origin-center ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
                    ></span>
                  </Link>
                );
              })}
            </nav>

            {/* Search Button */}
            <Button text="Search Products" className="hidden lg:flex" />

            {/* Mobile Menu Toggle Button */}
            <div className="lg:hidden flex items-center z-50">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-slate-700 hover:text-[#4782d3] transition-colors p-2"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Full Overlay */}
      <div
        className={`lg:hidden fixed inset-0 top-[80px] bg-white z-40 overflow-y-auto transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex flex-col px-4 py-8 space-y-6 text-lg font-medium">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`border-b border-gray-100 pb-4 flex items-center justify-between transition-colors ${isActive ? "text-[#4782d3]" : "text-slate-800 hover:text-[#4782d3]"}`}
              >
                {link.name}
              </Link>
            );
          })}

          <div className="pt-6">
            <Button text="Search Products" className="w-full justify-center" />
          </div>
        </div>
      </div>
    </>
  );
}
