"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, ChevronDown, Menu, X, ArrowUpRight } from "lucide-react";
import Button from "./Button";

const navLinks = [
    { name: "Home", href: "/advanced-instruments" },
    { name: "Company", href: "#", hasDropdown: true },
    { name: "Products", href: "#", hasDropdown: true },
    { name: "News", href: "#" },
    { name: "Contact Us", href: "#" },
    { name: "Anesthesia Machines n2", href: "#" },
];

interface HeaderProps {
    isSticky?: boolean;
}

const Header = ({ isSticky = false }: HeaderProps) => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 100);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 transform ${scrolled || mobileMenuOpen || isSticky ? "translate-y-0 opacity-100 bg-white shadow-lg" : "-translate-y-full opacity-0"
                } ${mobileMenuOpen ? "h-auto py-6" : "h-[80px] py-4"}`}
        >
            <div className="container mx-auto px-4 md:px-0 flex items-center justify-between h-full">
                {/* Logo */}
                <Link href="/advanced-instruments" className="flex items-center">
                    <div className="flex flex-col">
                        <img src="/advanced-instruments/images/advanced-logo.png" alt="Advanced Instruments" className="w-35 md:w-55" />
                    </div>
                </Link>

                {/* Navbar links */}
                <nav className="hidden lg:flex items-center space-x-10">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`text-sm lg:text-base font-medium transition-colors flex items-center gap-1 group ${isActive ? "text-[#00aeef] font-bold!" : "text-[#333333] hover:text-[#00aeef]"
                                    }`}
                            >
                                {link.name}
                                {link.hasDropdown && (
                                    <ChevronDown size={16} className="group-hover:rotate-180 transition-transform duration-300" />
                                )}
                            </Link>
                        );
                    })}
                </nav>

                {/* Search Button */}
                <div className="hidden lg:block">
                    <Button text="Search" variant="search" className="rounded-full!" href="/advanced-instruments/search" />
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden text-[#1a1a1a] p-2"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-2xl border-t py-8 px-4 flex flex-col space-y-5 animate-in slide-in-from-top duration-300">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`text-base font-semibold border-b border-gray-100 pb-3 ${isActive ? "text-[#00aeef]" : "text-[#1a1a1a]"
                                    }`}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                    <Button
                        text="Search"
                        variant="search"
                        className="w-full mt-4"
                        href="/advanced-instruments/search"
                        onClick={() => setMobileMenuOpen(false)}
                    />
                </div>
            )}
        </header>
    );
};

export default Header;
