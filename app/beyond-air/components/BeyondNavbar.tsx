"use client";

// components/Navbar.tsx
import { useEffect, useState } from "react";
import Image from "next/image";

export default function BeyondNavbar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => {
      setIsVisible(window.scrollY > 10);
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

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
      <div className="max-w-380 mx-auto flex items-center justify-between px-6 xl:px-0 py-5">
         
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/beyond-air/assets/beyond-logo.png" // replace with actual
            alt="logo"
            width={200}
            height={200}
          />
        </div>

        {/* Menu */}
        <nav className="hidden md:flex gap-8 text-base text-[#666666]">
          <a className="font-semibold text-black cursor-pointer">Home</a>
          <a className="hover:text-black cursor-pointer">About Us</a>
          <a className="hover:text-black cursor-pointer">Products & Technology</a>
          <a className="hover:text-black cursor-pointer">Pipeline</a>
          <a className="hover:text-black cursor-pointer">News & Events</a>
          <a className="hover:text-black cursor-pointer">Investors</a>
          <a className="hover:text-black cursor-pointer">Careers</a>
        </nav>
      </div>
    </header>
  );
}
