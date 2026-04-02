'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useSitePathname } from '@/app/_hooks/useSitePathname';
import { Phone, Menu, X } from 'lucide-react';

export default function Navbar() {
    const pathname = useSitePathname();
    // const pathname = usePathname();  ## use this if it was a standalone project
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Services', href: '/our-service' },
        { name: 'Products', href: '/products' },
        { name: 'Gallery', href: '/gallery' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <header className="sticky top-0 z-50 w-full bg-white shadow-sm border-b border-gray-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center">
                            <img src={`/kap-medical/images/logo.png`} alt="logo" className="h-10 md:h-12" />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        {navItems.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`text-md font-semibold transition-colors hover:text-[#D32F2F] ${isActive ? 'text-[#D32F2F]' : 'text-gray-700'
                                        }`}
                                >
                                    {item.name}
                                </Link>
                            );
                        })}
                    </nav>

                    <div className="flex items-center gap-4">
                        {/* Desktop Call */}
                        <a href="tel:+19513404503" className="hidden md:flex items-center gap-5 text-[#002B49] font-semibold">
                            <div className="p-2 bg-[#D32F2F] rounded-full text-white">
                                <Phone size={22} />
                            </div>
                            <div className="flex flex-col text-md! leading-tight">
                                <span className="text-gray-500">Call us on</span>
                                <span>+1 951 340 4503</span>
                            </div>
                        </a>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden p-2 text-gray-700 hover:text-[#D32F2F] transition-colors focus:outline-none"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Drawer */}
            <div
                className={`md:hidden absolute top-20 left-0 w-full bg-white transition-all duration-300 ease-in-out border-t border-gray-100 shadow-xl overflow-hidden ${isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
                    }`}
            >
                <div className="px-6 py-8 flex flex-col space-y-6">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setIsMenuOpen(false)}
                                className={`text-lg font-bold tracking-wide transition-colors ${isActive ? 'text-[#D32F2F]' : 'text-gray-800'
                                    }`}
                            >
                                {item.name}
                            </Link>
                        );
                    })}
                    <div className="pt-6 border-t border-gray-100">
                        <a href="tel:+19513404503" className="flex items-center gap-4 text-[#002B49] font-bold">
                            <div className="p-3 bg-[#D32F2F] rounded-full text-white">
                                <Phone size={22} />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-gray-500 text-sm font-normal">Call us anytime</span>
                                <span className="text-lg">+1 951 340 4503</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}
