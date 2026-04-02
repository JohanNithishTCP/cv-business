"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Mail, Globe, ChevronDown, Menu, X, ArrowDown, Instagram, YoutubeIcon, Facebook, Twitter, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./Button";
import { FacebookIcon } from "@/app/future-med/_components/Icons";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 250);
        };
        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/optomic" },
        { name: "Products", href: "/optomic/products" },
        { name: "Specialty", href: "/optomic/specialty" },
        { name: "About us", href: "/optomic/about" },
        { name: "Contact", href: "/optomic/contact" },
    ];

    return (
        <header className="relative w-full z-50">
            {/* Top Bar */}
            <div className="bg-[#243783] text-white">
                <div className="container mx-auto px-4 md:px-12 py-2 flex items-center justify-between text-base font-medium">
                    <div className="flex items-center gap-6">
                        <a
                            href="tel:+34918044444"
                            className="flex items-center gap-2 hover:text-white/80 transition-colors"
                        >
                            <Phone size={18} strokeWidth={2} />
                            <span className="hidden sm:inline !text-[15px]">Tel: (+34) 91 804 44 44</span>
                        </a>
                        <a
                            href="mailto:comercial@optomic.com"
                            className="hidden md:flex items-center gap-2 hover:text-white/80 transition-colors"
                        >
                            <Mail size={18} strokeWidth={2} />
                            <span className="!text-[15px]">comercial@optomic.com</span>
                        </a>
                    </div>
                    <div className="flex items-center gap-5">
                        <Facebook className="text-white" size={18} strokeWidth={2} />
                        <Instagram className="text-white" size={18} strokeWidth={2} />
                        <Twitter className="text-white" size={18} strokeWidth={2} />

                    </div>
                </div>
            </div>

            {/* Main Navbar Wrapper */}
            <div className="h-[64px] md:h-[72px] w-full relative">
                <nav
                    className={`w-full transition-all duration-300 ease-in-out ${isScrolled
                        ? "fixed top-0 left-0 bg-white shadow-lg z-[100]"
                        : "absolute top-0 left-0 bg-white border-b border-gray-100 shadow-sm"
                        }`}
                >
                    <div className="container mx-auto px-4 md:px-12 h-[64px] md:h-[72px] flex items-center justify-between">
                        {/* Logo Placeholder */}
                        <Link href="/optomic" className="flex items-center gap-2 shrink-0">
                            {/* Logo Image Placeholder */}
                            <div className="w-[180px] rounded-full flex items-center justify-center">
                                <img src="/optomic/optomic-logo.png" alt="Optomic Logo" className="" />
                            </div>
                        </Link>

                        {/* Desktop Menu */}
                        <div className="hidden lg:flex items-center gap-8 font-medium text-[16px]">
                            {navLinks.map((link) => {
                                const isActive = pathname === link.href;
                                return (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className={`${isActive ? "text-[#243783] font-bold" : "text-[#333333]"
                                            } hover:text-[#243783] transition-colors relative group py-2`}
                                    >
                                        {link.name}
                                        <span
                                            className={`absolute -bottom-1 left-0 h-0.5 bg-[#243783] transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"
                                                }`}
                                        ></span>
                                    </Link>
                                );
                            })}
                        </div>

                        {/* Right Actions */}
                        <div className="flex items-center gap-2 text-[#333333]">
                            {/* Downloads Button */}
                            <div className="hidden sm:block">
                                <Button variant="optomic" size="sm" icon={Download}>
                                    Downloads
                                </Button>
                            </div>

                            {/* Language / Globe Icon */}
                            {/* <button className="p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer hidden sm:flex items-center justify-center">
                                <Globe size={20} strokeWidth={1.5} className="text-[#243783]" />
                            </button> */}

                            {/* Mobile Hamburger */}
                            <button
                                className="lg:hidden p-2 text-[#243783]"
                                onClick={() => setMobileOpen(!mobileOpen)}
                            >
                                {mobileOpen ? <X size={26} /> : <Menu size={26} />}
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
                                <div className="flex flex-col p-6 gap-4 font-medium text-sm">
                                    {navLinks.map((link) => {
                                        const isActive = pathname === link.href;
                                        return (
                                            <Link
                                                key={link.name}
                                                href={link.href}
                                                className={`py-2 border-b border-gray-50 last:border-0 ${isActive ? "text-[#243783]" : "text-[#333]"
                                                    } hover:text-[#243783]`}
                                                onClick={() => setMobileOpen(false)}
                                            >
                                                {link.name}
                                            </Link>
                                        );
                                    })}
                                    <Button variant="optomic" size="sm" icon={Download} className="mt-2 text-white">
                                        Downloads
                                    </Button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </nav>
            </div>
        </header>
    );
}
