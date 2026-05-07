"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

import Button from "./Button";

export default function Header() {
    const [lang, setLang] = useState("EN");
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        // Initial check
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className="w-full relative z-50">
            <style>{`
                @keyframes slideDown {
                    from { transform: translateY(-100%); }
                    to { transform: translateY(0); }
                }
                .animate-slide-down {
                    animation: slideDown 0.4s ease-out forwards;
                }
            `}</style>
            {/* Header Placeholder (prevents layout jumping when position becomes fixed) */}
            <div className="h-20 w-full relative z-40">
                <div
                    className={`bg-white/90 backdrop-blur-md w-full transition-colors duration-300 ${isScrolled ? "fixed top-0 left-0 right-0 shadow-sm animate-slide-down z-50" : "absolute top-0 left-0 right-0 z-40"
                        }`}
                >
                    <div className="container mx-auto px-4 flex items-center justify-between h-20">
                        {/* Logo */}
                        <div className="flex items-center gap-2">
                            <div className="flex flex-col">
                                <img src={`/uzumcu/images/uzumcu-logo.png`} alt="UZUMCU" className="h-10" />
                            </div>
                        </div>

                        {/* Navigation */}
                        <nav className="hidden md:flex items-center gap-8">
                            {["Corporate", "Products", "News", "Contact Us"].map((item) => (
                                <Link
                                    key={item}
                                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                                    className="font-black hover:text-primary transition-colors tracking-wide"
                                >
                                    {item}
                                </Link>
                            ))}
                        </nav>

                        {/* Actions */}
                        <div className="flex items-center gap-4">
                            <Button
                                variant="primary"
                                size="md"
                                radius="full"
                                icon={<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>}
                            >
                                Search
                            </Button>

                            <div className="flex items-center gap-1 text-sm font-black cursor-pointer hover:text-primary transition-colors">
                                <span>{lang}</span>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

