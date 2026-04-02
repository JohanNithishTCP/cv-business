"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const specialtyLinks = [
    { name: "Otolaryngology", href: "/optomic/specialty/ent" },
    { name: "Urology", href: "/optomic/specialty/urology" },
    { name: "Gynecology", href: "/optomic/specialty/gynecology" },
    { name: "ENT", href: "/optomic/specialty/ent" },
];

const productLinks = [
    { name: "ENT Microscopes", href: "/optomic/products" },
    { name: "ENT Units", href: "/optomic/products" },
    { name: "Colposcopes", href: "/optomic/products" },
    { name: "Gynoscopes", href: "/optomic/products" },
    { name: "Fiberscopes", href: "/optomic/products" },
    { name: "Gynecology Chairs", href: "/optomic/products" },
    { name: "Inject Microscopes", href: "/optomic/products" },
];

const companyLinks = [
    { name: "About Us", href: "/optomic/about" },
    { name: "Our Team", href: "/optomic/team" },
    { name: "Privacy Policy", href: "/optomic/privacy" },
    { name: "Contact", href: "/optomic/contact" },
    { name: "Distributors", href: "/optomic/distributors" },
    { name: "Cookie configuration", href: "/optomic/cookies" },
];

export default function Footer() {
    return (
        <footer className="bg-[#019EE2]">
            <div className="container mx-auto px-6 md:px-12 pt-14 pb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">

                    {/* Brand + Subscribe */}
                    <div className="lg:col-span-3 flex flex-col gap-6">
                        {/* Logo Placeholder */}
                        <Link href="/optomic" className="flex items-center">
                            <div className="w-[250px] rounded-full flex items-center justify-center">
                                <img src="/optomic/f-logo.png" alt="Optomic" className="w-full h-full object-cover" />
                            </div>
                        </Link>

                        {/* Subscribe */}
                        <div>
                            <span className="text-white text-xs font-semibold uppercase tracking-widest block mb-3">
                                Subscribe
                            </span>
                            <div className="flex items-center border border-white/60 rounded overflow-hidden">
                                <input
                                    type="email"
                                    placeholder="Email address"
                                    className="bg-transparent text-white text-sm px-3 py-2.5 flex-1 outline-none placeholder-white/90"
                                />
                                <button className="bg-[#243783] px-3 py-2.5 flex items-center justify-center hover:bg-[#1b2d6b] transition-colors">
                                    <ArrowRight size={16} className="text-white" />
                                </button>
                            </div>
                            <p className="text-white! mt-4">
                                Hello, Our goal is Delivering high-quality medical equipment through innovation, expertise, and trusted standards.
                            </p>
                        </div>
                    </div>

                    {/* Specialty */}
                    <div className="lg:col-span-2 flex flex-col gap-4">
                        <h4 className="text-white! text-[20px] font-bold border-b border-white/40 pb-2">Specialty</h4>
                        <ul className="flex flex-col gap-2.5">
                            {specialtyLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-white text-[16px] hover:text-white transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Products */}
                    <div className="lg:col-span-2 flex flex-col gap-4">
                        <h4 className="text-white! text-[20px] font-bold border-b border-white/40 pb-2">Products</h4>
                        <ul className="flex flex-col gap-2.5">
                            {productLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-white text-[16px] hover:text-white transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div className="lg:col-span-2 flex flex-col gap-4">
                        <h4 className="text-white! text-[20px] font-bold border-b border-white/40 pb-2">Company</h4>
                        <ul className="flex flex-col gap-2.5">
                            {companyLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-white text-[16px] hover:text-white transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* World Map / Global Presence */}
                    <div className="lg:col-span-3 flex flex-col gap-4">
                        <h4 className="text-white! text-[20px] font-bold border-b border-white/40 pb-2">
                            We are present in every continent
                        </h4>
                        {/* World Map Placeholder */}
                        <div className="w-full aspect-[16/9] rounded-lg flex items-center justify-center overflow-hidden">
                            <img src="/optomic/map.png" alt="World Map" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Copyright Bar */}
            <div className="border-t border-white/50 py-4 text-center">
                <p className="text-white/90! text-[14px]">
                    {new Date().getFullYear()} Optomic. All Rights Reserved
                </p>
            </div>
        </footer>
    );
}
