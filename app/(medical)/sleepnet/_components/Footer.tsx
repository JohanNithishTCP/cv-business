"use client";

import { Facebook, Instagram, Twitter, Linkedin, PhoneCall, Mail, MapPin } from "lucide-react";
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="w-full bg-primary relative mt-32">

            {/* Newsletter Overlay */}
            <div className="container mx-auto px-6 relative -top-16 lg:-top-24">
                <div className="w-full bg-[url('/sleepnet/home/subscribe-bg.jpg')] rounded-lg p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl overflow-hidden relative">

                    {/* Decorative Background Elements */}
                    <div className="absolute top-0 left-0 w-64 h-full bg-black/10 rounded-full blur-3xl -ml-32" />
                    <div className="absolute -bottom-24 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl" />

                    <h2 className="text-white text-3xl font-semibold max-w-sm relative z-10">
                        Subscribe to our<br />Newsletter
                    </h2>

                    <form className="flex w-full md:w-auto gap-4 relative z-10" onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="w-full md:w-80 px-6 py-4 bg-white/95 text-primary placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary rounded-sm text-sm"
                        />
                        <button
                            type="submit"
                            className="bg-primary hover:bg-primary-card text-white px-8 py-4 font-semibold text-sm rounded-sm transition-colors whitespace-nowrap"
                        >
                            Subscribe Now
                        </button>
                    </form>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="container mx-auto px-6 pb-8 pt-4">
                <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-8 mb-8">

                    {/* Brand Info */}
                    <div className="lg:w-1/4 flex flex-col gap-6">
                        {/* Logo */}
                        <div className="flex items-center gap-2 mb-4">
                            <img src={`/sleepnet/logo-white.png`} alt="Sleepnet" width={`170px`} />
                        </div>

                        {/* Contact Details */}
                        <div className="flex flex-col gap-4 text-white/80 text-sm">
                            <div className="flex items-start gap-4 hover:text-white transition-colors cursor-pointer group">
                                <PhoneCall size={18} className="mt-0.5 text-secondary group-hover:text-white transition-colors" />
                                <span>1-800-742-3648</span>
                            </div>
                            <div className="flex items-start gap-4 hover:text-white transition-colors cursor-pointer group">
                                <Mail size={18} className="mt-0.5 text-secondary group-hover:text-white transition-colors" />
                                <span>info@sleepnetcorp.com</span>
                            </div>
                            <div className="flex items-start gap-4 hover:text-white transition-colors cursor-pointer group">
                                <MapPin size={18} className="mt-0.5 text-secondary group-hover:text-white transition-colors shrink-0" />
                                <span>5 Merrill Industrial Drive<br />Hampton, NH, USA</span>
                            </div>
                        </div>

                        {/* Social Icons */}
                        <div className="flex gap-2 mt-4 pt-6 border-t border-white/10">
                            <a href="#" className="w-8 h-8 rounded bg-secondary text-white flex items-center justify-center hover:bg-white hover:text-secondary transition-colors"><Facebook size={16} /></a>
                            <a href="#" className="w-8 h-8 rounded bg-secondary text-white flex items-center justify-center hover:bg-white hover:text-secondary transition-colors"><Instagram size={16} /></a>
                            <a href="#" className="w-8 h-8 rounded bg-secondary text-white flex items-center justify-center hover:bg-white hover:text-secondary transition-colors"><Twitter size={16} /></a>
                            <a href="#" className="w-8 h-8 rounded bg-secondary text-white flex items-center justify-center hover:bg-white hover:text-secondary transition-colors"><Linkedin size={16} /></a>
                        </div>
                    </div>

                    {/* Links Grid */}
                    <div className="lg:w-3/4 grid grid-cols-2 md:grid-cols-5 gap-8">
                        {/* Resources */}
                        <div className="flex flex-col gap-4">
                            <h4 className="text-white font-semibold mb-2">Resources</h4>
                            <Link href="#" className="text-white/70 hover:text-secondary text-xs transition-colors">Resource Center</Link>
                            <Link href="#" className="text-white/70 hover:text-secondary text-xs transition-colors">News & Blog</Link>
                            <Link href="#" className="text-white/70 hover:text-secondary text-xs transition-colors">FAQs</Link>
                            <Link href="#" className="text-white/70 hover:text-secondary text-xs transition-colors">Guarantee & Warranty</Link>
                            <Link href="#" className="text-white/70 hover:text-secondary text-xs transition-colors">Press Kit</Link>
                            <Link href="#" className="text-white/70 hover:text-secondary text-xs transition-colors">Sleepnet Brochure</Link>
                        </div>

                        {/* Product by Use */}
                        <div className="flex flex-col gap-4">
                            <h4 className="text-white font-semibold mb-2">Product by Use</h4>
                            <Link href="#" className="text-white/70 hover:text-secondary text-xs transition-colors">Sleep Apnea / CPAP Masks</Link>
                            <Link href="#" className="text-white/70 hover:text-secondary text-xs transition-colors">Pediatric Masks</Link>
                            <Link href="#" className="text-white/70 hover:text-secondary text-xs transition-colors">Home Care</Link>
                            <Link href="#" className="text-white/70 hover:text-secondary text-xs transition-colors">Hospital</Link>
                            <Link href="#" className="text-white/70 hover:text-secondary text-xs transition-colors">Personal Protective Equipment</Link>
                        </div>

                        {/* Product by Type */}
                        <div className="flex flex-col gap-4">
                            <h4 className="text-white font-semibold mb-2">Product by Type</h4>
                            <Link href="#" className="text-white/70 hover:text-secondary text-xs transition-colors">Full Face Masks</Link>
                            <Link href="#" className="text-white/70 hover:text-secondary text-xs transition-colors">Nasal Masks</Link>
                            <Link href="#" className="text-white/70 hover:text-secondary text-xs transition-colors">N95 & N99 Respirators</Link>
                        </div>

                        {/* About Us */}
                        <div className="flex flex-col gap-4">
                            <h4 className="text-white font-semibold mb-2">About Us</h4>
                            <Link href="#" className="text-white/70 hover:text-secondary text-xs transition-colors">Explore Sleepnet</Link>
                            <Link href="#" className="text-white/70 hover:text-secondary text-xs transition-colors">Made in the USA</Link>
                            <Link href="#" className="text-white/70 hover:text-secondary text-xs transition-colors">FAQs</Link>
                            <Link href="#" className="text-white/70 hover:text-secondary text-xs transition-colors">Guarantee & Warranty</Link>
                            <Link href="#" className="text-white/70 hover:text-secondary text-xs transition-colors">Press Kit</Link>
                            <Link href="#" className="text-white/70 hover:text-secondary text-xs transition-colors">Sleepnet Brochure</Link>
                        </div>

                        {/* Services */}
                        <div className="flex flex-col gap-4">
                            <h4 className="text-white font-semibold mb-2">Services</h4>
                            <Link href="#" className="text-white/70 hover:text-secondary text-xs transition-colors">I'm a Distributor</Link>
                            <Link href="#" className="text-white/70 hover:text-secondary text-xs transition-colors">I'm a Provider</Link>
                            <Link href="#" className="text-white/70 hover:text-secondary text-xs transition-colors">I'm a Patient</Link>
                            <Link href="#" className="text-white/70 hover:text-secondary text-xs transition-colors">Where to Buy</Link>
                            <Link href="#" className="text-white/70 hover:text-secondary text-xs transition-colors">Become a Partner</Link>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-white/60 text-xs text-center md:text-left">
                        © 2026 Sleepnet Corporation. All Rights Reserved.
                    </p>
                    <div className="flex items-center gap-4 text-xs">
                        <Link href="/privacy" className="text-white/60 hover:text-secondary transition-colors">Privacy Policy</Link>
                        <span className="text-white/30">|</span>
                        <Link href="/terms" className="text-white/60 hover:text-secondary transition-colors">Terms & Conditions</Link>
                        <span className="text-white/30">|</span>
                        <Link href="/legal" className="text-white/60 hover:text-secondary transition-colors">Legal</Link>
                    </div>
                </div>
            </div>

        </footer>
    );
}
