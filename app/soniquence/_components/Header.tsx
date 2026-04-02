"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 w-full z-50 brand-gradient transition-all duration-300 transform ${isScrolled || mobileMenuOpen ? 'translate-y-0 opacity-100 shadow-lg' : '-translate-y-full opacity-0'} ${mobileMenuOpen ? 'h-auto py-4' : 'h-[80px] py-4 flex items-center'}`}>
            <div
                className="site-container flex flex-wrap items-center justify-between w-full"
            >
                {/* Logo */}
                <div className="shrink-0 flex items-center gap-2 text-white font-bold text-xl md:text-2xl tracking-tighter">
                    <img src={`/soniquence/logo.png`} alt="Logo" className="w-[120px] md:w-[150px]" />
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-white p-2"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {mobileMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>

                {/* Navigation (Desktop) */}
                <nav className="hidden md:flex text-[16px] space-x-10">
                    <Link href="/" className="text-white font-bold tracking-wide">Home</Link>
                    <Link href="/technology" className="text-white/90 hover:text-white transition-colors font-medium tracking-wide">Technology</Link>
                    <Link href="/media" className="text-white/90 hover:text-white transition-colors font-medium tracking-wide">Media</Link>
                    <Link href="/resources" className="text-white/90 hover:text-white transition-colors font-medium tracking-wide">Resources</Link>
                    <Link href="/about" className="text-white/90 hover:text-white transition-colors font-medium tracking-wide">About Us</Link>
                </nav>

                {/* Contact Button (Desktop) */}
                <div className="hidden md:block">
                    <button className="px-8 py-2.5 rounded-lg bg-[#B000F5] border border-white text-white font-bold transition-colors text-sm tracking-wide shadow-sm hover:bg-[#E54DFF]">
                        Contact Us
                    </button>
                </div>

                {/* Mobile Menu Dropdown */}
                {mobileMenuOpen && (
                    <div className="w-full flex flex-col mt-4 space-y-4 md:hidden pb-4">
                        <Link href="/" onClick={() => setMobileMenuOpen(false)} className="text-white font-bold tracking-wide text-lg">Home</Link>
                        <Link href="/technology" onClick={() => setMobileMenuOpen(false)} className="text-white/90 hover:text-white transition-colors font-medium tracking-wide text-lg">Technology</Link>
                        <Link href="/media" onClick={() => setMobileMenuOpen(false)} className="text-white/90 hover:text-white transition-colors font-medium tracking-wide text-lg">Media</Link>
                        <Link href="/resources" onClick={() => setMobileMenuOpen(false)} className="text-white/90 hover:text-white transition-colors font-medium tracking-wide text-lg">Resources</Link>
                        <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="text-white/90 hover:text-white transition-colors font-medium tracking-wide text-lg">About Us</Link>
                        <button className="w-full mt-2 px-8 py-3 rounded-lg bg-[#B000F5] border border-white text-white font-bold transition-colors text-base tracking-wide shadow-sm hover:bg-[#E54DFF]">
                            Contact Us
                        </button>
                    </div>
                )}
            </div>
        </header>
    );
}
