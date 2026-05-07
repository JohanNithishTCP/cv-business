"use client";

import Link from "next/link";
import { Search, Menu, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-[#6C7EB7] shadow-sm z-50">
      <div className="container mx-auto flex items-center justify-between px-6 h-20">
        {/* Logo */}
        <Image
          src="/de-soutter-medical/logo.png"
          alt="logo"
          width={140}
          height={40}
          className="object-contain"
        />

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 text-base text-white">
          <Link href="/" className="font-bold underline underline-offset-4">
            Home
          </Link>
          <Link href="#">Products</Link>
          <Link href="#">About Us</Link>
          <Link href="#">Support</Link>
          <Link href="#">Events</Link>
          <Link href="#">Videos</Link>
          <Link href="#">Contact</Link>
          <Link href="#">Careers</Link>
        </nav>

        {/* Right Side */}
        <div className="hidden lg:flex bg-white text-[#333] rounded-full px-3 py-1 items-center gap-2">
          <span className="text-sm px-6">Search</span>
          <Search size={16} />
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden text-white" onClick={() => setOpen(true)}>
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-[#6C7EB7] text-white transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}>
        {/* Top bar */}
        <div className="flex items-center justify-between px-6 h-20 border-b border-white/20">
          <Image
            src="/de-soutter-medical/logo.png"
            alt="logo"
            width={120}
            height={40}
          />

          <button onClick={() => setOpen(false)}>
            <X size={28} />
          </button>
        </div>

        {/* Menu Links */}
        <nav className="flex flex-col gap-6 px-6 py-8 text-lg">
          <Link href="/" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link href="#" onClick={() => setOpen(false)}>
            Products
          </Link>
          <Link href="#" onClick={() => setOpen(false)}>
            About Us
          </Link>
          <Link href="#" onClick={() => setOpen(false)}>
            Support
          </Link>
          <Link href="#" onClick={() => setOpen(false)}>
            Events
          </Link>
          <Link href="#" onClick={() => setOpen(false)}>
            Videos
          </Link>
          <Link href="#" onClick={() => setOpen(false)}>
            Contact
          </Link>
          <Link href="#" onClick={() => setOpen(false)}>
            Careers
          </Link>
        </nav>

        {/* Mobile Search */}
        <div className="px-6">
          <div className="bg-white text-[#333] rounded-full px-4 py-2 flex items-center gap-2">
            <span className="text-sm">Search</span>
            <Search size={16} />
          </div>
        </div>
      </div>
    </header>
  );
}
