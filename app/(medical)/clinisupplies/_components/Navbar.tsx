"use client";

import Image from "next/image";
import { Truck, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);

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
      className={`fixed top-0 left-0 w-full bg-gray-100 shadow-sm transition-transform duration-300 z-50 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}>
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* LOGO */}
        <div className="flex items-center gap-2">
          <Image
            src="/clinisupplies/logo.png"
            alt="Clinisupplies"
            width={180}
            height={180}
          />
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden xl:flex items-center gap-8 text-base text-[#333333] font-medium">
          <a href="#" className="text-[#F26828]">
            Home
          </a>
          <a href="#">Services</a>
          <a href="#">Products</a>
          <a href="#">About us</a>
          <a href="#">Sustainability</a>
          <a href="#">Careers</a>
          <a href="#">Contact us</a>
        </nav>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">
          {/* BUTTON (hidden on small screens if you want) */}
          <button className="hidden sm:flex items-center gap-2 border-2 text-[#11121B] font-semibold border-[#F26828] text-base px-5 py-2 rounded-full hover:bg-[#F26828] hover:text-white transition-all group">
            Home Delivery
            <Truck size={25} />
          </button>

          {/* MOBILE MENU BUTTON */}
          {/* Mobile Menu Button */}
          <button
            className="xl:hidden text-[#333333]"
            onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="xl:hidden bg-white px-6 pb-4 space-y-4 text-sm flex flex-col">
          <nav className="flex flex-col px-5 gap-6 text-[#333333] font-medium">
            <a href="#" className="text-[#F26828]">
              Home
            </a>
            <a href="#">Services</a>
            <a href="#">Products</a>
            <a href="#">About us</a>
            <a href="#">Sustainability</a>
            <a href="#">Careers</a>
            <a href="#">Contact us</a>

            {/* BUTTON IN MOBILE */}
            <button className="flex items-center gap-2 border-2 text-[#11121B] font-semibold border-[#F26828] text-base px-5 py-2 rounded-full hover:bg-[#F26828] hover:text-white transition-all group">
              Home Delivery
              <Truck size={20} />
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
