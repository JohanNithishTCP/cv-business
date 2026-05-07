"use client";

// components/Navbar.tsx
import { useEffect, useState } from "react";
import Image from "next/image";

export default function BeyondNavbar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const updateVisibility = () => {
      setIsVisible(window.scrollY > 10);
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { label: "Home", active: true },
    { label: "About Us" },
    { label: "Products & Technology" },
    { label: "Pipeline" },
    { label: "News & Events" },
    { label: "Investors" },
    { label: "Careers" },
  ];

  return (
    <header
      className={[
        `fixed top-0 left-0 w-full z-50 bg-white shadow-sm`,
        "transition-all duration-300 ease-out",
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-2 pointer-events-none",
      ].join(" ")}
    >
      <div className="max-w-380 mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-6 py-4 sm:py-5">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/beyond-air/assets/beyond-logo.png"
            alt="logo"
            width={200}
            height={200}
            className="w-32 sm:w-40 lg:w-50 h-auto"
          />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex gap-8 text-base text-[#666666]">
          {navLinks.map(({ label, active }) => (
            <a
              key={label}
              className={`cursor-pointer ${active ? "font-semibold text-black" : "hover:text-black"}`}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Hamburger Button — mobile & tablet only */}
        <button
          className="lg:hidden flex flex-col justify-center items-center w-11 h-11 gap-1.25 rounded focus:outline-none"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          <span
            className={`block w-6 h-0.5 bg-gray-700 transition-transform duration-300 ${
              isMenuOpen ? "translate-y-1.75 rotate-45" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-gray-700 transition-opacity duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-gray-700 transition-transform duration-300 ${
              isMenuOpen ? "-translate-y-1.75 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile / Tablet Dropdown Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col bg-white border-t border-gray-100 px-4 sm:px-6 pb-4">
          {navLinks.map(({ label, active }) => (
            <a
              key={label}
              className={`flex items-center min-h-11 text-base cursor-pointer border-b border-gray-50 last:border-b-0 ${
                active ? "font-semibold text-black" : "text-[#666666] hover:text-black"
              }`}
              onClick={() => setIsMenuOpen(false)}

            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
