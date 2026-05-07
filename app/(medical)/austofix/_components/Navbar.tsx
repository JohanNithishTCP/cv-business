"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const navLinks = [
    "Home",
    "About us",
    "Implants",
    "Clean Room",
    "Ideas",
    "Contact us",
    "eIFU",
  ];

  const cleanRoomItems = [
    { name: "Modular OT", href: "/clean-room/modular-ot" },
    { name: "Wall Panels", href: "/clean-room/wall-panels" },
    { name: "Ceiling System", href: "/clean-room/ceiling" },
  ];

  return (
    <header className="w-full bg-gray-100 shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="w-40">
          <Image
            src="/austofix/austofix.png"
            alt="logo"
            width={160}
            height={50}
            className="object-cover w-full h-auto"
          />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          {navLinks.map((link, index) =>
            link === "Clean Room" ? (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => setDropdown(true)}
                onMouseLeave={() => setDropdown(false)}>
                <button className="flex items-center gap-1 hover:text-[#6CA033] transition">
                  {link}
                  <ChevronDown size={16} />
                </button>

                {/* Dropdown */}
                {dropdown && (
                  <div className="absolute top-8 left-0 bg-white shadow-lg rounded-md w-48 py-2">
                    {cleanRoomItems.map((item, i) => (
                      <Link
                        key={i}
                        href={item.href}
                        className="block px-4 py-2 hover:bg-gray-100">
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={index}
                href="#"
                className="hover:text-[#6CA033] transition">
                {link}
              </Link>
            ),
          )}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <div className="relative inline-block group mt-3">
            <button className="bg-[#6CA033] text-white px-6 py-3 pr-14 rounded-full hover:bg-[#5a8c2a] transition ">
              Make an appointment
            </button>

            {/* Floating Arrow */}
            <span className="absolute top-1/2 -translate-y-1/2 -right-3 w-10 h-10 bg-[#BDD630] rounded-full flex items-center justify-center shadow-md group-hover:rotate-45 transition-transform">
              <ArrowUpRight size={18} className="text-white" />
            </span>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white px-6 pb-4 space-y-3">
          {navLinks.map((link, index) =>
            link === "Clean Room" ? (
              <div key={index}>
                <p className="font-medium">{link}</p>
                <div className="ml-4 mt-2 space-y-2">
                  {cleanRoomItems.map((item, i) => (
                    <Link
                      key={i}
                      href={item.href}
                      className="block text-gray-600">
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={index}
                href="#"
                className="block text-gray-700 hover:text-[#5a8c2a]">
                {link}
              </Link>
            ),
          )}
          <div className="relative inline-block group mt-3">
            <button className="bg-[#6CA033] text-white px-6 py-3 pr-14 rounded-full hover:bg-[#5a8c2a] transition">
              Make an appointment
            </button>

            {/* Floating Arrow */}
            <span className="absolute top-1/2 -translate-y-1/2 -right-3 w-10 h-10 bg-[#BDD630] rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform shadow-md">
              <ArrowUpRight size={18} className="text-white" />
            </span>
          </div>
        </div>
      )}
    </header>
  );
}
