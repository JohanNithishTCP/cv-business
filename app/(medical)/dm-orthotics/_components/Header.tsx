"use client"
import { Search, User, ShoppingBag, ChevronDown, ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#", active: true },
    { name: "Products & Services", href: "#" },
    { name: "Health Professionals", href: "#" },
    { name: "Customer Services", href: "#" },
  ];

  return (
    <header className="bg-white border-b border-border sticky top-0 z-[100] shadow-sm shadow-black/5">
      <div className="container mx-auto px-4 lg:px-6 h-20 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-1 group cursor-pointer">
          <img src="/dm-orthotics/logo.png" className="w-[120px] md:w-[150px]" alt="Logo" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${item.active ? "text-primary" : "text-dark"
                }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Search & Actions */}
        <div className="flex items-center gap-4 md:gap-6">

          <div className="flex items-center gap-3">
            <button className="hidden sm:block text-dark hover:text-primary transition-colors">
              <Search size={22} strokeWidth={2.5} />
            </button>

            <button className="text-dark hover:text-primary transition-colors">
              <User size={22} strokeWidth={2.5} />
            </button>
            <button className="text-dark hover:text-primary transition-colors relative">
              <ShoppingCart size={22} strokeWidth={2.5} />
            </button>
          </div>

          {/* Language Selector - hidden on small mobile */}
          <div className="hidden sm:flex items-center gap-2 border border-border px-2 py-2 bg-gray-100  rounded-sm hover:border-primary transition-colors cursor-pointer ml-1">
            <img src="/dm-orthotics/home/uk.png" className="w-[20px]" alt="UK" />
            <span className="text-[12px] font-medium text-dark uppercase tracking-tight">English</span>
            <ChevronDown size={14} className="text-muted" />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-dark p-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div className={`lg:hidden fixed inset-0 top-20 bg-white z-[90] transition-transform duration-300 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col p-6 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-lg font-semibold py-3 border-b border-border/50 ${item.active ? "text-primary" : "text-dark"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-6 grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 bg-gray-50 p-4 rounded-xl font-bold text-sm">
              <Search size={20} /> Search
            </button>
            <div className="flex items-center justify-center gap-2 bg-gray-50 p-4 rounded-xl font-bold text-sm">
              <img src="/dm-orthotics/home/uk.png" className="w-[20px]" alt="UK" /> EN
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
