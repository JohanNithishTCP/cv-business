"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Twitter, Instagram, Facebook, Linkedin, ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
    quickLinks: [
        { name: "Home", href: "/advanced-instruments" },
        { name: "Company", href: "#" },
        { name: "Products", href: "#" },
        { name: "News", href: "#" },
        { name: "Contact Us", href: "#" },
        { name: "Anesthesia Machines v.2", href: "#" },
    ],
    company: [
        { name: "About Us", href: "#" },
        { name: "Our Approach", href: "#" },
        { name: "Our Commitment", href: "#" },
        { name: "Our Commitment to Quality", href: "#" },
    ],
    category: [
        { name: "Privacy Policy", href: "#" },
        { name: "Terms and Conditions", href: "#" },
        { name: "Careers", href: "#" },
        { name: "News", href: "#" },
    ],
};

const Footer = () => {
    const pathname = usePathname();

    const renderLinks = (links: { name: string, href: string }[]) => (
        <ul className="space-y-4">
            {links.map((link) => {
                const isActive = pathname === link.href;
                return (
                    <li key={link.name}>
                        <Link href={link.href} className={`transition-colors font-semibold text-sm md:text-base ${isActive ? "text-[#00aeef]" : "text-gray-600 hover:text-[#00aeef]"}`}>
                            {link.name}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );

    return (
        <>
            <footer className="bg-white border-t border-gray-100 py-10 md:pt-16 md:pb-8 overflow-hidden" id="footer">
                <div className="container mx-auto px-4 md:px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-y-12 gap-x-8 lg:gap-x-4">
                    {/* Brand Column */}
                    <div className="lg:col-span-3 space-y-6" data-aos="fade-up">
                        <Link href="/advanced-instruments" className="flex items-center group">
                            <img src="/advanced-instruments/images/advanced-logo.png" alt="logo" className="w-24 md:w-48" />
                        </Link>
                        <p className="text-base leading-relaxed text-gray-600 max-w-xs">
                            Advanced Instrumentations is a premier global manufacturer of high quality medical equipment & advanced medical supplies
                        </p>
                    </div>

                    {/* Quick Links Column */}
                    <div className="lg:col-span-2" data-aos="fade-up" data-aos-delay="100">
                        <h4 className="text-[#1a1a1a] font-bold text-lg mb-7 tracking-wider">
                            Quick Links
                        </h4>
                        {renderLinks(footerLinks.quickLinks)}
                    </div>

                    {/* Company Column */}
                    <div className="lg:col-span-2" data-aos="fade-up" data-aos-delay="200">
                        <h4 className="text-[#1a1a1a] font-bold text-lg mb-7 tracking-wider">
                            Company
                        </h4>
                        {renderLinks(footerLinks.company)}
                    </div>

                    {/* Category Column */}
                    <div className="lg:col-span-2" data-aos="fade-up" data-aos-delay="300">
                        <h4 className="text-[#1a1a1a] font-bold text-lg mb-7 tracking-wider">
                            Category
                        </h4>
                        {renderLinks(footerLinks.category)}
                    </div>

                    {/* Contact Column */}
                    <div className="lg:col-span-3" data-aos="fade-up" data-aos-delay="400">
                        <h4 className="text-[#1a1a1a] font-bold text-lg mb-7 tracking-wider">
                            Contact Info
                        </h4>
                        <div className="space-y-6">
                            <div className="flex items-start gap-3">
                                <MapPin className="text-[#00aeef] mt-1 shrink-0" size={18} />
                                <p className="text-sm md:text-base font-semibold leading-relaxed text-gray-700">
                                    6805 NW 77th Ct, Miami, FL 33166 USA
                                </p>
                            </div>
                            <div className="flex items-center gap-4 mt-8">
                                {[Twitter, Instagram, Facebook, Linkedin].map((Icon, index) => (
                                    <Link key={index} href="#" className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-[#00aeef] hover:text-white transition-all shadow-sm border border-gray-100">
                                        <Icon size={18} />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="container mx-auto px-4 md:px-0 py-6 border-t border-gray-200 flex flex-col md:flex-row items-center justify-center">
                <p className="text-[#1a1a1a] text-sm tracking-wider text-center md:text-left">
                    © 2026 Advanced Instrumentations. All rights reserved.
                </p>
            </div>
        </>
    );
};

export default Footer;
