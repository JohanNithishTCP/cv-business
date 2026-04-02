"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Search, User, Heart, ShoppingBag, Phone, Instagram, Linkedin, Facebook, MapPin, Menu, X, Twitter } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 250) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/gynex" },
        { name: "About", href: "/gynex/about" },
        { name: "Shop", href: "/gynex/shop" },
        { name: "Info", href: "/gynex/info" },
        { name: "Contact", href: "/gynex/contact" },
    ];

    return (
        <header className="relative w-full z-50">
            {/* Top Bar - Initially relative, stays at top */}
            <div className="bg-[#7C2B83] text-white">
                <div className="container mx-auto px-4 md:px-12 py-2 flex items-center justify-between text-sm font-medium">
                    <div className="flex items-center gap-6">
                        <a href="tel:888-485-4644" className="flex items-center gap-2 hover:text-white/80 transition-colors">
                            <Phone size={14} strokeWidth={2} />
                            <span className="hidden sm:inline">888-485-4644</span>
                        </a>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="h-8 w-8 bg-white flex items-center justify-center rounded-full">
                            <Facebook size={18} className="cursor-pointer text-[#7C2B83] hover:text-white/80 transition-colors hidden sm:block" />
                        </div>
                        <div className="h-8 w-8 bg-white flex items-center justify-center rounded-full">
                            <Linkedin size={18} className="cursor-pointer text-[#7C2B83] hover:text-white/80 transition-colors hidden sm:block" />
                        </div>
                        <div className="h-8 w-8 bg-white flex items-center justify-center rounded-full">
                            <Instagram size={18} className="cursor-pointer text-[#7C2B83] hover:text-white/80 transition-colors hidden sm:block" />
                        </div>
                        <div className="h-8 w-8 bg-white flex items-center justify-center rounded-full">
                            <Twitter size={18} className="cursor-pointer text-[#7C2B83] hover:text-white/80 transition-colors hidden sm:block" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Navbar Wrapper - Fixed behavior after scroll */}
            <div className={`h-[70px] md:h-[80px] w-full relative`}>
                <nav className={`w-full transition-all duration-300 ease-in-out ${isScrolled
                    ? "fixed top-0 left-0 bg-white shadow-lg z-[100]"
                    : "absolute top-0 left-0 bg-white border-b border-gray-100 shadow-sm"
                    }`}>
                    <div className="container mx-auto px-4 md:px-12 h-[70px] md:h-[80px] flex items-center justify-between">
                        {/* Logo */}
                        <Link href="/gynex" className="flex items-center gap-2 group shrink-0">
                            <img src="/gynex/images/gynex-logo.png" alt="Gynex Logo" className="w-50" />
                        </Link>

                        {/* Desktop Menu */}
                        <div className="hidden lg:flex items-center gap-10 font-bold text-[16px] tracking-wider">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-[#333333] hover:text-[#7C2B83] transition-colors relative group py-2"
                                >
                                    {link.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#7C2B83] transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                            ))}
                        </div>

                        {/* Right Icons */}
                        <div className="flex items-center gap-1 md:gap-3 text-[#333333]">
                            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer hidden sm:block">
                                <Search size={22} strokeWidth={1.5} />
                            </button>
                            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer">
                                <User size={22} strokeWidth={1.5} />
                            </button>
                            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer hidden sm:block">
                                <Heart size={22} strokeWidth={1.5} />
                            </button>
                            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors relative cursor-pointer">
                                <ShoppingBag size={22} strokeWidth={1.5} />
                                <span className="absolute top-0 right-0 bg-[#7C2B83] text-white text-[10px] w-4.5 h-4.5 rounded-full flex items-center justify-center font-bold border-2 border-white">0</span>
                            </button>

                            {/* Mobile Hamburger */}
                            <button
                                className="lg:hidden p-2 text-[#7C2B83]"
                                onClick={() => setMobileOpen(!mobileOpen)}
                            >
                                {mobileOpen ? <X size={28} /> : <Menu size={28} />}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Drawer */}
                    <AnimatePresence>
                        {mobileOpen && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                className="lg:hidden bg-white border-t border-gray-100 overflow-hidden shadow-xl"
                            >
                                <div className="flex flex-col p-6 gap-4 font-bold uppercase tracking-wider text-sm">
                                    {navLinks.map((link) => (
                                        <Link
                                            key={link.name}
                                            href={link.href}
                                            className="text-[#333] hover:text-[#7C2B83] py-2 border-b border-gray-50 last:border-0"
                                            onClick={() => setMobileOpen(false)}
                                        >
                                            {link.name}
                                        </Link>
                                    ))}
                                    <div className="flex gap-6 pt-4 border-t border-gray-100 mt-2">
                                        <Search size={20} className="text-[#7C2B83]" />
                                        <Heart size={20} className="text-[#7C2B83]" />
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </nav>
            </div>
        </header>
    );
}
