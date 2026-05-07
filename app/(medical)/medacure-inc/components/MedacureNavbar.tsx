"use client";

import { useEffect, useState } from "react";
import { Search } from "lucide-react";

export default function MedacureNavbar() {
  const [show, setShow] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > 100) {
        setShow(true);
      } else {
        setShow(false);
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <div 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        show ? "translate-y-0 bg-white shadow-md" : "-translate-y-full"
      }`}
    >
      <div className="max-w-380 mx-auto px-6 py-2 flex items-center justify-between">
        {/* Logo */}
        <div className="">
          <img src="/medacure/assets/medacure-logo2.png" alt="Medacure Logo" className="" />
        </div>

        {/* Nav Links */}
        <div className="hidden lg:flex gap-8 text-gray-600 font-medium">
          <a href="#" className="font-bold">Home</a>
          <a href="#" className="hover:text-gray-900">About</a>
          <a href="#" className="hover:text-gray-900">Products</a>
          <a href="#" className="hover:text-gray-900">Furniture</a>
          <a href="#" className="hover:text-gray-900">Contact</a>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
          <Search className="w-7 h-7 cursor-pointer text-black" />
          <button className="cursor-pointer text-[#333333] px-14 py-3 rounded-full border-2 border-[#2E2662]">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}