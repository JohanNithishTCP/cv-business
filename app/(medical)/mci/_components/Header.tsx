"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe, ChevronDown, Menu, X, Calendar } from "lucide-react";
import Button from "./Button";

export default function Header() {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 250);
        };
        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    const navLinks = [
        { name: "Home", href: "/mci" },
        { name: "Company", href: "#" },
        { name: "Products", href: "#", hasDropdown: true },
        { name: "Events", href: "#" },
        { name: "Instruction for use", href: "#" },
        { name: "Contact Us", href: "#" },
    ];
    return (
        <header className="relative w-full z-50">
            {/* ... main navbar */}
            <div className="h-[72px] md:h-[80px] w-full relative">
                <nav
                    className={`w-full transition-all duration-300 ease-in-out ${isScrolled
                        ? "fixed top-0 left-0 bg-white/95 backdrop-blur-md shadow-lg z-[100] py-2"
                        : "absolute top-0 left-0 bg-white border-b border-gray-100 py-4"
                        }`}
                >
                    <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
                        {/* Logo Look */}
                        <Link href="/mci" className="shrink-0">
                            <div className="flex items-center gap-1 font-black text-3xl">
                                <img src="/mci/images/mci-logo.png" alt="MCI Logo" className="w-25" />
                            </div>
                        </Link>
                        {/* Desktop Menu */}
                        <div className="hidden lg:flex items-center gap-8 font-semibold text-[15px]">
                            {navLinks.map((link) => {
                                const isActive = pathname === link.href;
                                return (
                                    <div key={link.name} className="relative group py-2">
                                        <Link
                                            href={link.href}
                                            className={`${isActive ? "text-secondary" : "text-primary hover:text-secondary"} transition-colors flex items-center gap-1 text-[16px]`}
                                        >
                                            {link.name}
                                            {link.hasDropdown && <ChevronDown size={14} className="text-secondary" />}
                                        </Link>
                                        <span className={`absolute -bottom-1 left-0 h-0.5 bg-secondary transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}></span>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Right Actions */}
                        <div className="flex items-center gap-4">
                            <div className="hidden sm:flex items-center gap-2 text-primary font-bold text-[15px] cursor-pointer group">
                                <div className="bg-[#EB1925] p-2 rounded-lg">
                                    <Globe size={20} className="text-white group-hover:scale-110 transition-transform" />
                                </div>
                                <span className="flex items-center gap-1">EN <ChevronDown size={14} className=" font-extrabold" /></span>
                            </div>

                            <Button
                                text="Book Appointment"
                                variant="secondary"
                                size="sm"
                                circleIcon={false}
                                icon={<Calendar size={18} />}
                                className="!hidden lg:inline-flex!"
                            />

                            {/* Mobile Hamburger */}
                            <button
                                className="lg:hidden p-2 text-primary"
                                onClick={() => setMobileOpen(!mobileOpen)}
                            >
                                {mobileOpen ? <X size={28} /> : <Menu size={28} />}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Drawer */}
                    {mobileOpen && (
                        <div
                            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden shadow-xl"
                        >
                            <div className="flex flex-col p-6 gap-4 font-bold text-[16px]">
                                {navLinks.map((link) => {
                                    const isActive = pathname === link.href;
                                    return (
                                        <Link
                                            key={link.name}
                                            href={link.href}
                                            className={`py-2 border-b border-gray-50 last:border-0 ${isActive ? "text-secondary font-bold" : "text-primary font-medium"} hover:text-secondary transition-colors`}
                                            onClick={() => setMobileOpen(false)}
                                        >
                                            {link.name}
                                        </Link>
                                    );
                                })}
                                <Button
                                    text="Book Appointment"
                                    variant="secondary"
                                    size="sm"
                                    circleIcon={false}
                                    icon={<Calendar size={18} />}
                                    className="w-full justify-center mt-2"
                                />
                            </div>
                        </div>
                    )}
                </nav>
            </div>
        </header>
    );
}
