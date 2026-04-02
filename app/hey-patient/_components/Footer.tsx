"use client";

import React from 'react';
import Link from 'next/link';
import { Facebook, Linkedin, Instagram, MapPin, Mail, Phone } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="relative">
            {/* Teal Footer Section */}
            <div className="site-container relative overflow-hidden ">
                <div className="bg-[#08949E] text-white pt-24 pb-6 relative overflow-hidden border border-0.5 border-gray-200/20">

                    <img src={`/hey-patient/images/home/f-bg.png`} className="absolute -top-0.5 left-0 w-full h-30 object-cover z-1" alt="" />

                    {/* Background Texture Only */}
                    <div className="absolute inset-0 z-0">
                        <div className="absolute inset-0 opacity-10 bg-[url('/hey-patient/images/home/bg-overlay.jpg')] bg-cover bg-repeat mix-blend-overlay"></div>
                    </div>

                    <div className="container mx-auto px-4 sm:px-10 lg:px-16 relative z-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

                            {/* Mission Column */}
                            <div className="lg:col-span-4">
                                <div className="mb-8">
                                    <Link href="/">
                                        <img
                                            src={`/hey-patient/images/home/logo.png`}
                                            alt="heyPatient"
                                            className="h-10 md:h-12 object-contain -translate-y-17"
                                        />
                                    </Link>
                                </div>
                                <p className=" leading-[1.8] text-white! font-medium max-w-[320px]">
                                    heyPatient helps hospitals and clinics reduce administrative workload while enhancing patient engagement and satisfaction.
                                </p>
                            </div>

                            {/* Contact Us Column */}
                            <div className="lg:col-span-3">
                                <h4 className="font-bold text-[18px] text-white! mb-8">Contact Us</h4>
                                <ul className="space-y-6">
                                    <li className="flex items-start gap-4 text-white">
                                        <MapPin className="w-5 h-5 mt-0.5 shrink-0 opacity-90" />
                                        <span className="">Technoparkstrasse 2, 8406 Winterthur</span>
                                    </li>
                                    <li className="flex items-center gap-4 text-white">
                                        <Mail className="w-5 h-5 shrink-0 opacity-90" />
                                        <span className="">team@heypatient.com</span>
                                    </li>
                                    <li className="flex items-center gap-4 text-white">
                                        <Phone className="w-5 h-5 shrink-0 opacity-90" />
                                        <span className=" font-medium">+41 44 584 02 01</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Quick Links Column */}
                            <div className="lg:col-span-2">
                                <h4 className="font-bold text-[18px] text-white! mb-8">Quick Links</h4>
                                <ul className="space-y-4">
                                    <li><Link href="/" className="font-bold text-white hover:opacity-80 transition-opacity">Home</Link></li>
                                    <li><Link href="/offering" className="text-white hover:opacity-80 transition-opacity">Offering</Link></li>
                                    <li><Link href="/#about" className="text-white hover:opacity-80 transition-opacity">About Us</Link></li>
                                    <li><Link href="/#contact" className="text-white hover:opacity-80 transition-opacity">Contact Us</Link></li>
                                </ul>
                            </div>

                            {/* Subscribe Column */}
                            <div className="lg:col-span-3">
                                <h4 className="font-bold text-[18px] text-white! mb-8">Subscribe</h4>
                                <div className="space-y-3 mb-8">
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className="w-full bg-white text-[#1E293B] px-4 py-3 rounded-md text-[16px] outline-none"
                                    />
                                    <button className="w-full bg-white text-[#08949E] font-bold py-3 rounded-md text-[16px] hover:bg-gray-100 transition-colors shadow-sm">
                                        Subscribe
                                    </button>
                                </div>
                                <div className="flex flex-col gap-5">
                                    <h5 className="text-[16px] font-bold text-white!">Follow us</h5>
                                    <div className="flex gap-4">
                                        <Link href="#" className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center bg-white text-[#08949E] transition-all duration-300">
                                            <Facebook className="w-4 h-4" />
                                        </Link>
                                        <Link href="#" className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center bg-white text-[#08949E] transition-all duration-300">
                                            <Linkedin className="w-4 h-4" />
                                        </Link>
                                        <Link href="#" className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center bg-white text-[#08949E] transition-all duration-300">
                                            <Instagram className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Copyright Area */}
                        <div className="text-[15px]! border-t border-white/20 pt-5 flex flex-col md:flex-row justify-between items-center gap-6">
                            <p className="text-white! font-medium text-[15px]!">
                                © 2026 All Rights Reserved
                            </p>
                            <div className="flex flex-wrap gap-2 lg:gap-10 text-white font-medium">
                                <Link href="#" className="hover:underline underline-offset-4">Imprint</Link>
                                <Link href="#" className="hover:underline underline-offset-4">Privacy policy</Link>
                                <Link href="#" className="hover:underline underline-offset-4">Terms of Use</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
