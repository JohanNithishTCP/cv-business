"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ArrowRight, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const menu = [
    { name: "Home", dropdown: ["Overview", "Updates"] },
    { name: "Products", dropdown: ["Microscopes", "Accessories"] },
    { name: "Services", dropdown: ["Support", "Training"] },
    { name: "Warranty", dropdown: ["Register", "Policy"] },
    { name: "About", dropdown: ["Company", "Team"] },
    { name: "Contact", dropdown: ["Email", "Locations"] },
  ];

  return (
    <>
      <header
        className={`w-full bg-[#FFFFFF] shadow-sm fixed top-0 left-0 z-50 transition-transform duration-300 ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between h-16 lg:h-auto">
          {/* Logo */}
          <div className="flex items-center shrink-0 lg:h-22">
            <Image
              src="/seiler/logo.png"
              alt="Seiler Medical"
              width={120}
              height={36}
              className="w-[100px] md:w-[120px] lg:w-[140px] h-auto"
            />
          </div>

          {/* Desktop right side */}
          <div className="hidden lg:flex flex-col items-end w-full">
            {/* Top bar */}
            <div className="flex items-center gap-6 text-base text-[#333333] py-2">
              <button className="hover:text-[#0475BC] transition-colors">Schedule a Demo</button>
              <button className="hover:text-[#0475BC] transition-colors">Corporate Site</button>
              <button className="group inline-flex items-center gap-3 bg-[#0475BC] hover:bg-[#035f98] text-[#FFFFFF] px-4 py-1.5 rounded-full text-base font-semibold transition-all duration-300 cursor-pointer">
                <span>Search</span>
                <span className="w-7 h-7 bg-[#FFFFFF] rounded-full flex items-center justify-center transform transition duration-300 group-hover:scale-110">
                  <ArrowRight className="text-[#0475BC]" size={14} />
                </span>
              </button>
            </div>

            {/* Main nav */}
            <nav className="flex items-center gap-8 text-base font-medium text-[#333333] pb-3">
              {menu.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setOpen(item.name)}
                  onMouseLeave={() => setOpen(null)}
                >
                  <div className="flex items-center gap-1 cursor-pointer hover:text-[#0475BC]">
                    {item.name}
                    <ChevronDown size={14} />
                  </div>
                  <div
                    className={`absolute top-full left-0 mt-2 w-44 bg-[#FFFFFF] shadow-lg rounded-lg py-2 transition-all duration-200 ${
                      open === item.name
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible translate-y-2"
                    }`}
                  >
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub}
                        href="#"
                        className="block px-4 py-2 text-sm hover:bg-gray-100"
                      >
                        {sub}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </nav>
          </div>

          {/* Tablet top-bar actions (md only) */}
          <div className="hidden md:flex lg:hidden items-center gap-4 text-sm text-[#333333]">
            <button className="hover:text-[#0475BC] transition-colors whitespace-nowrap">Schedule a Demo</button>
            <button className="hover:text-[#0475BC] transition-colors whitespace-nowrap">Corporate Site</button>
          </div>

          {/* Hamburger button (mobile + tablet) */}
          <button
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-md text-[#333333] hover:bg-gray-100 transition-colors ml-2"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile/tablet drawer */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-opacity duration-300 ${
          mobileOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/40"
          onClick={() => setMobileOpen(false)}
        />

        {/* Drawer panel */}
        <div
          className={`absolute top-16 left-0 right-0 bg-[#FFFFFF] shadow-xl overflow-y-auto max-h-[calc(100vh-4rem)] transition-transform duration-300 ${
            mobileOpen ? "translate-y-0" : "-translate-y-4"
          }`}
        >
          {/* Mobile-only top actions */}
          <div className="md:hidden flex flex-col gap-0 border-b border-gray-100 px-5 py-3">
            <button className="text-left py-2.5 text-sm text-[#333333] hover:text-[#0475BC] transition-colors">
              Schedule a Demo
            </button>
            <button className="text-left py-2.5 text-sm text-[#333333] hover:text-[#0475BC] transition-colors">
              Corporate Site
            </button>
          </div>

          {/* Nav items */}
          <nav className="px-5 py-2">
            {menu.map((item) => (
              <div key={item.name} className="border-b border-gray-100 last:border-0">
                <button
                  className="w-full flex items-center justify-between py-3.5 text-base font-medium text-[#333333] hover:text-[#0475BC] transition-colors"
                  onClick={() =>
                    setMobileExpanded((prev) => (prev === item.name ? null : item.name))
                  }
                >
                  {item.name}
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${
                      mobileExpanded === item.name ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {mobileExpanded === item.name && (
                  <div className="pb-2 pl-4">
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub}
                        href="#"
                        className="block py-2 text-sm text-[#555555] hover:text-[#0475BC] transition-colors"
                        onClick={() => setMobileOpen(false)}
                      >
                        {sub}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Search CTA */}
          <div className="px-5 py-4 border-t border-gray-100">
            <button className="w-full inline-flex items-center justify-center gap-3 bg-[#0475BC] hover:bg-[#035f98] text-[#FFFFFF] px-4 py-2.5 rounded-full text-base font-semibold transition-all duration-300">
              <span>Search</span>
              <span className="w-7 h-7 bg-[#FFFFFF] rounded-full flex items-center justify-center">
                <ArrowRight className="text-[#0475BC]" size={14} />
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
