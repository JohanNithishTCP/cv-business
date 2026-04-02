'use client';

import React from 'react';
import { Facebook, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import Button from './Button';
import Link from 'next/link';
import { useSitePathname } from '@/app/_hooks/useSitePathname';

export default function Footer() {
    const pathname = useSitePathname();
    // const pathname = usePathname();  ## use this if it was a standalone project

    const navItems = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Services', href: '/our-service' },
        { name: 'Products', href: '/products' },
        { name: 'Gallery', href: '/gallery' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <footer className="bg-white border-t border-gray-200 ">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="col-span-1 md:col-span-1">
                        <div className='mb-8'>
                            <Link href="/"><img src={`/kap-medical/images/logo.png`} alt="logo" className='h-12' /></Link>
                        </div>
                        <p className="text-md! text-gray-700! leading-relaxed! mb-8">
                            KAP Medical is a designer and manufacturer of state-
                            of-the-art Therapeutic Support Surfaces and other
                            medical electronic products.
                        </p>
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="bg-gray-100 text-sm! px-3! py-2! rounded-l w-full focus:outline-none focus:ring-1 focus:ring-[#D32F2F]"
                            />
                            <Button variant="danger" className="rounded-l-none">
                                Subscribe
                            </Button>
                        </div>
                    </div>

                    <div className="col-span-1 lg:pl-25">
                        <h4 className="font-bold text-[#002B49]! mb-4 text-xl!">Quick Links</h4>
                        <ul className="space-y-2 text-md! font-normal">
                            {navItems.map((item) => {
                                const isActive = pathname === item.href;
                                return (
                                    <li key={item.name}>
                                        <Link
                                            href={item.href}
                                            className={`${isActive ? 'text-[#D32F2F] font-semibold' : 'text-gray-700!'
                                                } hover:text-[#D32F2F] transition-colors`}
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    <div className="col-span-1">
                        <h4 className="font-bold text-[#002B49]! mb-4 text-xl!">Contact Us</h4>
                        <ul className="space-y-4 text-md! font-normal">
                            <li className="flex gap-2 items-start">
                                <MapPin size={16} className="text-[#D32F2F] shrink-0 mt-0.5" />
                                <span className='text-gray-700!'>1110 Pine Street, Corona,<br />California, USA</span>
                            </li>
                            <li className="flex gap-2 items-center">
                                <Phone size={16} className="text-[#D32F2F] shrink-0" />
                                <a href="tel:+19513404503" className='text-gray-700!'>+1 951 340 4503</a>
                            </li>
                            <li className="flex gap-2 items-center">
                                <Mail size={16} className="text-[#D32F2F] shrink-0" />
                                <a href="mailto:sales@kapmedical.com" className='text-gray-700!'>sales@kapmedical.com</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="bg-[#002B49] py-4 text-center">
                <p className="text-white/60! text-[14px]! m-0!">
                    Copyright © 2026 KAP Medical. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
