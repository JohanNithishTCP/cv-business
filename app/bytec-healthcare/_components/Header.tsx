'use client';
import { useState, useEffect } from 'react';

export default function Header() {
    const [isVisible, setIsVisible] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className={`fixed top-0 z-50 w-full border-b border-gray-100 bg-white transition-all duration-500 ease-in-out ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
            <div className="container flex items-center justify-between h-20">
                <div className="flex items-center gap-2">
                    {/* Logo Placeholder - Bytec Healthcare */}
                    <div className="flex items-center gap-2">
                        <img src={`/bytec-healthcare/logo.png`} alt="Logo" />
                    </div>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-10">
                    <div className="group relative py-8">
                        <a href="#" className="flex items-center gap-1.5 font-medium text-black group-hover:text-secondary transition-colors">
                            Products
                            <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                        </a>
                        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-50">
                            <div className="bg-white border border-gray-100 shadow-2xl rounded-2xl p-6 min-w-[240px] grid gap-4">
                                {[
                                    { title: "Mobile Carts", desc: "Premium clinical workstations" },
                                    { title: "Tablet Carts", desc: "Lightweight mobility solutions" },
                                    { title: "Wall Mounts", desc: "Space-saving ergonomic mounts" },
                                    { title: "Accessories", desc: "Power modules and addons" }
                                ].map((item, i) => (
                                    <a key={i} href="#" className="group/item flex flex-col p-2 rounded-xl hover:bg-gray-50 transition-colors">
                                        <span className="font-bold text-sm text-primary group-hover/item:text-secondary">{item.title}</span>
                                        <span className="text-[11px] text-gray-500">{item.desc}</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="group relative py-8">
                        <a href="#" className="flex items-center gap-1.5 font-medium text-black group-hover:text-secondary transition-colors">
                            Computing
                            <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                        </a>
                        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-50">
                            <div className="bg-white border border-gray-100 shadow-2xl rounded-2xl p-6 min-w-[240px] grid gap-4">
                                {[
                                    { title: "Medical PC", desc: "Infection control computing" },
                                    { title: "Medical Monitors", desc: "High-resolution clinical displays" },
                                    { title: "Point of Care", desc: "Integrated smart systems" }
                                ].map((item, i) => (
                                    <a key={i} href="#" className="group/item flex flex-col p-2 rounded-xl hover:bg-gray-50 transition-colors">
                                        <span className="font-bold text-sm text-primary group-hover/item:text-secondary">{item.title}</span>
                                        <span className="text-[11px] text-gray-500">{item.desc}</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    <a href="#" className="font-medium text-black hover:text-secondary transition-colors py-8">Support</a>
                    <a href="#" className="font-medium text-black hover:text-secondary transition-colors py-8">About Us</a>
                </nav>

                <div className="flex items-center gap-4">
                    {/* Desktop Contact Button */}
                    <button className="hidden md:flex items-center gap-2 bg-secondary text-white px-8 py-2.5 rounded-full font-semibold hover:bg-primary transition-all shadow-lg shadow-secondary/20 active:scale-95 group/btn">
                        <span>Contact us</span>
                        <svg className="w-5 h-5 transition-transform group-hover/btn:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                    </button>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-gray-600 hover:text-secondary focus:outline-none"
                        onClick={toggleMobileMenu}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <div className={`md:hidden bg-white border-b border-gray-100 absolute left-0 w-full transition-all duration-300 ease-in-out overflow-hidden ${isMobileMenuOpen ? 'max-h-[500px] opacity-100 visible overflow-y-auto' : 'max-h-0 opacity-0 invisible'}`}>
                <nav className="flex flex-col py-4 px-4 pb-6 gap-4">
                    <a href="#" className="font-medium text-black hover:text-secondary transition-colors py-2 border-b border-gray-50">Products</a>
                    <a href="#" className="font-medium text-black hover:text-secondary transition-colors py-2 border-b border-gray-50">Computing</a>
                    <a href="#" className="font-medium text-black hover:text-secondary transition-colors py-2 border-b border-gray-50">Support</a>
                    <a href="#" className="font-medium text-black hover:text-secondary transition-colors py-2 mb-2">About Us</a>

                    <button className="flex items-center justify-center gap-2 bg-secondary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary transition-all shadow-lg shadow-secondary/20 active:scale-95 group/btn w-full">
                        <span>Contact us</span>
                        <svg className="w-5 h-5 transition-transform group-hover/btn:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                    </button>
                </nav>
            </div>
        </header>
    );
}
