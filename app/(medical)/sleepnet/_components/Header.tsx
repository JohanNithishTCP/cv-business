"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, ShoppingCart, ChevronDown, Menu, X } from "lucide-react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`w-full bg-white shadow-sm fixed top-0 z-50 transition-all duration-500 transform ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
                }`}
        >
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <img src={`/sleepnet/logo.png`} alt="Sleepnet" width={`140px`} className="md:w-[170px]" />
                </div>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-8 text-sm text-primary font-medium">
                    <Link href="/" className="hover:text-secondary transition-colors">Home</Link>
                    {["About Us", "Services", "Products", "Resources"].map((item) => (
                        <div key={item} className="flex items-center gap-1 cursor-pointer hover:text-secondary transition-colors">
                            <span>{item}</span>
                            <ChevronDown size={14} />
                        </div>
                    ))}
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-3 md:gap-5 text-primary">
                    <button aria-label="Search" className="hover:text-secondary transition-colors">
                        <Search size={20} />
                    </button>
                    <button aria-label="Cart" className="hover:text-secondary transition-colors">
                        <ShoppingCart size={20} />
                    </button>
                    <Link
                        href="/contact"
                        className="hidden md:block bg-secondary hover:bg-secondary-hover text-white text-sm font-semibold px-6 py-2 rounded transition-colors"
                    >
                        Contact
                    </Link>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-2 text-primary"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="lg:hidden absolute top-20 left-0 w-full bg-white border-t border-gray-100 shadow-xl py-6 px-6 flex flex-col gap-6 z-40 animate-in fade-in slide-in-from-top-4 duration-300">
                    <Link
                        href="/"
                        className="text-primary font-semibold text-lg border-b border-gray-50 pb-2"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Home
                    </Link>
                    {["About Us", "Services", "Products", "Resources"].map((item) => (
                        <div key={item} className="flex flex-col gap-3">
                            <div className="flex items-center justify-between text-primary font-semibold text-lg border-b border-gray-50 pb-2">
                                <span>{item}</span>
                                <ChevronDown size={18} />
                            </div>
                        </div>
                    ))}
                    <Link
                        href="/contact"
                        className="bg-secondary text-center text-white font-semibold py-3 rounded shadow-md mt-4"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Contact
                    </Link>
                </div>
            )}
        </header>
    );
}
