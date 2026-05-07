"use client";

import React from "react";
import { Linkedin, Facebook, Instagram } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
    const pathname = usePathname();
    const quickLinks = [
        { name: "Home", href: "/mci" },
        { name: "Company", href: "#" },
        { name: "Products", href: "#" },
        { name: "Events", href: "#" },
        { name: "Instruction for use", href: "#" },
        { name: "Contact Us", href: "#" }
    ];

    return (
        <footer className="relative pt-20 pb-4 bg-[url('/mci/images/footer-bg.png')] bg-cover bg-center overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 items-start">
                    {/* Logo column */}
                    <div className="space-y-6" data-aos="fade-up">
                        <Link href="/mci">
                            <img src="/mci/images/mci-logo.png" alt="MCI Logo" className="w-36" />
                        </Link>
                    </div>

                    {/* Quick Links column */}
                    <div className="space-y-6" data-aos="fade-up" data-aos-delay="100">
                        <h4 className="text-gray-900 font-bold text-base lg:text-[20px]">Quick Links</h4>
                        <ul className="space-y-3">
                            {quickLinks.map((item) => {
                                const isActive = pathname === item.href;
                                return (
                                    <li key={item.name}>
                                        <Link
                                            href={item.href}
                                            className={`${isActive ? "text-red-600 underline font-bold" : "text-gray-600 font-medium"} text-sm lg:text-base hover:text-red-600 transition-colors underline-offset-4 decoration-2`}
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    {/* Contact Info column */}
                    <div className="space-y-6" data-aos="fade-up" data-aos-delay="200">
                        <h4 className="text-gray-900 font-bold text-base lg:text-[20px]">Contact Info</h4>
                        <div className="space-y-4 text-gray-600 text-sm lg:text-base font-medium">
                            <p>+01.954.306.2521</p>
                            <p className="max-w-[220px]">
                                4592 North Hiatus Road, Sunrise, FL 33351 / USA
                            </p>
                            <p>customer.service@mci-medical.com</p>
                        </div>
                    </div>

                    {/* Social Media Links column */}
                    <div className="space-y-6" data-aos="fade-up" data-aos-delay="300">
                        <h4 className="text-gray-900 font-bold text-base lg:text-[20px]">Social Media Links</h4>
                        <div className="flex items-center gap-3">
                            {[
                                { icon: <Linkedin size={18} /> },
                                { icon: <Facebook size={18} /> },
                                { icon: <Instagram size={18} /> }
                            ].map((item, idx) => (
                                <Link
                                    key={idx}
                                    href="#"
                                    className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-red-600 shadow-md border border-gray-100 hover:scale-110 transition-all"
                                >
                                    {item.icon}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-4 border-t border-gray-400">
                    <p className="text-gray-500 text-[12px] font-medium text-center ">
                        © MCI – Medical Concept Innovation Inc – All Rights reserved – Merely illustrative images – Rev 370 | 2023
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
