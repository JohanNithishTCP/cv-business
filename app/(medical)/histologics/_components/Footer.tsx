import Link from "next/link";
import Image from "next/image";
import homeData from "../_data/homeData.json";

export default function Footer() {
    const { about, marketing, quickLinks, contact } = homeData.footer;

    return (
        <footer className="bg-black text-white pt-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
                    {/* Column 1: Logo & Search */}
                    <div className="lg:col-span-1 flex flex-col justify-start" data-aos="fade-up" data-aos-delay="0">
                        <Link href="/" className="mb-8 inline-block">
                            <img
                                src={`/histologics/images/histologics-logo.png`}
                                alt="Histologics"
                                width={150}
                                height={50}
                                className="h-10 w-auto object-contain brightness-0 invert"
                            />
                        </Link>
                        <div className="flex w-full mt-4 max-w-[280px]">
                            <input
                                type="text"
                                placeholder="Email address"
                                className="bg-white text-gray-800 px-4 py-3 rounded-l-md w-full outline-none text-[13px]"
                            />
                            <button className="bg-[#A43B7F] w-12 flex items-center justify-center rounded-r-md hover:bg-[#8f326e] transition-colors">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Column 2: About */}
                    <div className="flex flex-col gap-3" data-aos="fade-up" data-aos-delay="100">
                        <h4 className="text-[16px] font-semibold mb-3 text-white">About</h4>
                        {about.map((link, idx) => (
                            <Link key={idx} href={link.href} className="text-[14px] text-text-white transition-colors">
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Column 3: Marketing */}
                    <div className="flex flex-col gap-3" data-aos="fade-up" data-aos-delay="200">
                        <h4 className="text-[16px] font-semibold mb-3 text-white">Marketing</h4>
                        {marketing.map((link, idx) => (
                            <Link key={idx} href={link.href} className="text-[14px] text-text-white transition-colors">
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Column 4: Quick Links */}
                    <div className="flex flex-col gap-3" data-aos="fade-up" data-aos-delay="300">
                        <h4 className="text-[16px] font-semibold mb-3 text-white">Quick Links</h4>
                        {quickLinks.map((link, idx) => (
                            <Link key={idx} href={link.href} className="text-[14px] text-text-white hover:text-white transition-colors">
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Column 5: Contacts */}
                    <div className="flex flex-col gap-4" data-aos="fade-up" data-aos-delay="400">
                        <h4 className="text-[16px] font-semibold mb-2 text-white">Contacts</h4>
                        <div className="flex items-start gap-3 text-[14px] text-text-white">
                            <svg className="w-5 h-5 flex-shrink-0 text-white mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            {contact.phone}
                        </div>
                        <div className="flex items-start gap-3 text-[14px] text-white">
                            <svg className="w-5 h-5 flex-shrink-0 text-white mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span className="whitespace-pre-line leading-relaxed">{contact.address}</span>
                        </div>

                        {/* Social Icons */}
                        <div className="flex items-center gap-3 mt-4">
                            {/* LinkedIn */}
                            <a href="#" className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center hover:bg-[#A43B7F] hover:border-[#A43B7F] transition-all group">
                                <svg className="w-3.5 h-3.5 text-gray-400 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                            </a>
                            {/* Facebook */}
                            <a href="#" className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center hover:bg-[#A43B7F] hover:border-[#A43B7F] transition-all group">
                                <svg className="w-3.5 h-3.5 text-gray-400 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                                </svg>
                            </a>
                            {/* Instagram */}
                            <a href="#" className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center hover:bg-[#A43B7F] hover:border-[#A43B7F] transition-all group">
                                <svg className="w-3.5 h-3.5 text-gray-400 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>
                            {/* YouTube */}
                            <a href="#" className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center hover:bg-[#A43B7F] hover:border-[#A43B7F] transition-all group">
                                <svg className="w-3.5 h-3.5 text-gray-400 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                                </svg>
                            </a>
                            {/* Email */}
                            <a href="#" className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center hover:bg-[#A43B7F] hover:border-[#A43B7F] transition-all group">
                                <svg className="w-3.5 h-3.5 text-gray-400 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </a>
                            {/* X (Twitter) */}
                            <a href="#" className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center hover:bg-[#A43B7F] hover:border-[#A43B7F] transition-all group">
                                <svg className="w-3 h-3 text-gray-400 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H9.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white py-4 text-center mt-6">
                <p className="text-[13px]! text-gray-700 font-medium">
                    2026 Copyright © Histologics, LLC | All rights reserved.
                </p>
            </div>
        </footer>
    );
}
