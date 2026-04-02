"use client";
import Link from 'next/link';

export default function Footer() {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    };
    return (
        <footer className="w-full flex flex-col">
            {/* Main Footer Content */}
            <div className="w-full brand-gradient text-white py-16">
                <div className="site-container">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

                        {/* Column 1: Info */}
                        <div data-aos="fade-up" data-aos-delay="0" className="space-y-6">
                            {/* Logo placeholder - replace with actual image when available */}
                            <div className="flex items-center gap-2 font-bold text-2xl tracking-tighter mb-4">
                                <img src={`/soniquence/logo.png`} alt="Logo" width={150} className="brightness-0 invert" style={{ filter: 'brightness(0) invert(1)' }} />
                            </div>

                            <ul className="space-y-4 text-[15px] font-medium leading-relaxed">
                                <li className="flex items-start gap-3">
                                    <svg className="w-5 h-5 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                    <span>2477 Grand Avenue, Baldwin,<br />NY 11510-3531 U.S.A.</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                    <span>(516)-654-4000</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 00-2 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" /></svg>
                                    <span>(516) 654-8000</span>
                                </li>
                            </ul>
                        </div>

                        {/* Column 2: Pages */}
                        <div data-aos="fade-up" data-aos-delay="100">
                            <h3 className="text-[18px] font-bold mb-6 tracking-wide">Pages</h3>
                            <ul className="space-y-4 text-[14px] font-medium text-white/90">
                                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                                <li><Link href="/technology" className="hover:text-white transition-colors">Technology</Link></li>
                                <li><Link href="/media" className="hover:text-white transition-colors">Media</Link></li>
                                <li><Link href="/resources" className="hover:text-white transition-colors">Resources</Link></li>
                                <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                            </ul>
                        </div>

                        {/* Column 3: Company */}
                        <div data-aos="fade-up" data-aos-delay="200">
                            <h3 className="text-[18px] font-bold mb-6 tracking-wide">Company</h3>
                            <ul className="space-y-4 text-[14px] font-medium text-white/90">
                                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Statement</Link></li>
                                <li><Link href="/sitemap" className="hover:text-white transition-colors">Sitemap</Link></li>
                                <li><Link href="/login" className="hover:text-white transition-colors">MDR IFU Login</Link></li>
                                <li><Link href="/tech" className="hover:text-white transition-colors">Technology</Link></li>
                                <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                            </ul>
                        </div>

                        {/* Column 4: Newsletter */}
                        <div data-aos="fade-up" data-aos-delay="300">
                            <h3 className="text-[18px] font-bold mb-6 tracking-wide">Subscribe to Our Newsletter</h3>
                            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                                <input
                                    type="email"
                                    placeholder="Enter your email address"
                                    className="w-full px-4 py-3 rounded-md text-[14px] text-gray-900 bg-[#F5F5F5] border-none focus:ring-2 focus:ring-white/50 outline-none"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="w-fit border border-white px-6 py-2.5 bg-[#B000F5] hover:bg-[#A800FF] text-white text-[13px] font-bold rounded-md transition-colors"
                                >
                                    Subscribe Now
                                </button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>

            <div className="w-full bg-white py-4 border-t border-gray-100 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
                <div className="site-container text-center text-[13px] font-semibold text-[#555555]">
                    Copyright ©2023 Soniquence | All Rights Reserved
                </div>
            </div>
        </footer>
    );
}
