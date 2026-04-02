"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Activity, Menu, X, Globe } from "lucide-react";
import { Button } from "./Button";
import { useSitePathname } from "@/app/_hooks/useSitePathname";

export const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = useSitePathname();
    // const pathname = usePathname();  ## use this if it was a standalone project

    const isVisualPage = pathname === "/heyPatient-visuals";

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { label: "Home", href: "/" },
        { label: "heyPatient Visuals", href: "/heyPatient-visuals" },
        { label: "Offering", href: "/offering" },
        { label: "About Us", href: "/#about" },
        { label: "News", href: "/#news" },
        { label: "Webinar", href: "/#webinar" },
        { label: "Support", href: "/#support" },
        { label: "Invest", href: "/#invest" },
        { label: "Shop", href: "/#shop" },
    ];

    return (
        <header
            className={`w-full z-100 transition-all duration-500 bg-white ${isScrolled
                ? "fixed top-0 left-0 right-0 shadow-lg py-3 translate-y-0 animate-in slide-in-from-top duration-500"
                : "absolute top-0 py-3"
                }`}
        >
            <div className="site-container">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between">
                        <Link href="/" className="flex items-center gap-2">
                            <img src={`/hey-patient/images/home/logo.png`} alt="Hey Patient" className="h-12 object-contain" />
                        </Link>

                        <nav className="hidden lg:flex items-center space-x-5 xl:space-x-7">
                            {navLinks.map((link) => {
                                const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
                                return (
                                    <Link
                                        key={link.label}
                                        href={link.href}
                                        className={`font-medium tracking-wide transition-colors duration-300 ${isActive ? "text-[#08949E] font-bold!" : "text-[#1E293B] hover:text-[#08949E]"
                                            }`}
                                    >
                                        {link.label}
                                    </Link>
                                );
                            })}
                        </nav>

                        <div className="hidden lg:flex items-center gap-3">
                            <div className="flex items-center gap-1.5 font-bold text-[#1E293B] bg-[#F1F5F9] hover:bg-gray-200 transition-colors rounded-md px-3 py-1.5 cursor-pointer">
                                <div className="text-[16px] leading-none rounded-full">
                                    <img src={`/hey-patient/images/home/usa.png`} alt="" className='w-5 h-5 rounded-full' />
                                </div>
                                <span>EN</span>
                                <span className="text-[8px] ml-0.5 mt-0.5">▼</span>
                            </div>
                            {isVisualPage ? (
                                <>
                                    <Button
                                        variant="outline"
                                        className="px-5 py-1.5 rounded-md font-semibold whitespace-nowrap h-auto border-gray-300 text-gray-700 hover:bg-gray-50 transition-all"
                                        href="https://heypatient.clinicalvisuals.com/login"
                                        target='_blank'
                                    >
                                        Login
                                    </Button>
                                    <Button
                                        variant="primary"
                                        className="px-5 py-1.5 rounded-md font-semibold whitespace-nowrap h-auto transition-all"
                                        href="https://heypatient.clinicalvisuals.com/freetrial"
                                        target='_blank'
                                    >
                                        Free Trial
                                    </Button>
                                </>
                            ) : (
                                <Button
                                    variant="primary"
                                    className="px-5 py-1.5 rounded-md font-semibold whitespace-nowrap h-auto transition-all"
                                >
                                    Contact Us
                                </Button>
                            )}
                        </div>

                        <button
                            className="lg:hidden text-gray-700 hover:text-[#08949E] transition-colors"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {mobileMenuOpen && (
                <div className="lg:hidden bg-white shadow-2xl absolute top-full left-0 right-0 py-6 px-6 flex flex-col space-y-5 animate-in fade-in slide-in-from-top-4 duration-300">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.label}
                                href={link.href}
                                className={`block text-[15px] font-bold transition-colors ${isActive ? "text-[#08949E]" : "text-gray-700 hover:text-[#08949E]"
                                    }`}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                    {isVisualPage ? (
                        <div className="flex flex-col gap-3 pt-2">
                            <Button variant="outline" className="w-full justify-center" href="https://heypatient.clinicalvisuals.com/login" target='_blank'>
                                Login
                            </Button>
                            <Button variant="primary" className="w-full justify-center" href="https://heypatient.clinicalvisuals.com/freetrial" target='_blank'>
                                Free Trial
                            </Button>
                        </div>
                    ) : (
                        <div className="pt-2">
                            <Button variant="primary" className="w-full justify-center">
                                Contact Us
                            </Button>
                        </div>
                    )}
                </div>
            )}
        </header>
    );
};
