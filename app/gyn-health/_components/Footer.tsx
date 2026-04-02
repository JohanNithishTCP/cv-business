import React from 'react';

export default function Footer() {
    return (
        <footer className=" text-gray-600">
            <div className=" pt-15">
                <div className="site-container">
                    <div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-11 px-2 lg:px-4"
                        data-aos="fade-up"
                    >

                        {/* Brand Column */}
                        <div className="lg:pr-1">
                            <div className="flex items-center text-primary-light mb-6">
                                <img src={`/gyn-health/logo.png`} alt="Logo" width={`215px`} className='p-3 bg-[rgba(244,255,244,0.5)]' />
                            </div>
                            <p className="text-[14px] font-medium text-gray-600 leading-[1.8] mb-8">
                                GynHealth is a trusted women's healthcare which dedicated to comprehensive, compassionate, and personalized care at every stage of life.
                            </p>
                            <div className="flex gap-3">
                                <input
                                    type="email"
                                    placeholder="Enter your email address"
                                    className="flex-1 min-w-0 h-[46px] px-4 rounded bg-[#f5f5f5]/80 text-[12.5px] border border-transparent focus:border-primary focus:bg-white outline-none placeholder:text-gray-400 font-medium"
                                />
                                <button className="bg-[#9d8bb4] text-white px-6 h-[46px] rounded font-bold text-[12.5px] hover:bg-primary-dark transition border-none shrink-0 shadow-sm tracking-wide">
                                    Subscribe
                                </button>
                            </div>
                        </div>

                        {/* Quick Links Column */}
                        <div className="lg:ml-auto">
                            <h4 className="text-[16px] font-bold text-[#86789b] mb-6">Quick Links</h4>
                            <ul className="flex flex-col gap-4 text-[14px] font-medium text-gray-500">
                                <li><a href="#" className="hover:text-primary transition-colors text-primary">Home</a></li>
                                <li><a href="#" className="hover:text-primary transition-colors">About</a></li>
                                <li><a href="#" className="hover:text-primary transition-colors">Services</a></li>
                                <li><a href="#" className="hover:text-primary transition-colors">Products</a></li>
                                <li><a href="#" className="hover:text-primary transition-colors">Gallery</a></li>
                                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
                            </ul>
                        </div>

                        {/* Services Column */}
                        <div className="lg:ml-auto mx-auto">
                            <h4 className="text-[16px] font-bold text-[#86789b] mb-6">Services</h4>
                            <ul className="flex flex-col gap-4 text-[14px] font-medium text-gray-500">
                                <li><a href="#" className="hover:text-primary transition-colors text-primary">Gynecology</a></li>
                                <li><a href="#" className="hover:text-primary transition-colors">Obstetrics</a></li>
                                <li><a href="#" className="hover:text-primary transition-colors">Infertility</a></li>
                                <li><a href="#" className="hover:text-primary transition-colors">Breast Symptoms</a></li>
                                <li><a href="#" className="hover:text-primary transition-colors">Special Consultations</a></li>
                            </ul>
                        </div>

                        {/* Contact Us Column */}
                        <div>
                            <h4 className="text-[16px] font-bold text-[#86789b] mb-6">Contact Us</h4>
                            <ul className="flex flex-col gap-5 text-[14px] font-medium text-gray-500">
                                <li className="flex items-start gap-4">
                                    <svg className="w-5 h-5 text-[#86789b] shrink-0 translate-y-[2px] ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                    <span className="leading-relaxed">Gynhealth AG, Höschgasse<br />50, 8008 Zürich</span>
                                </li>
                                <li className="flex items-center gap-4">
                                    <svg className="w-4 h-4 text-[#86789b] shrink-0 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                    <span>+41438193787</span>
                                </li>
                                <li className="flex items-center gap-4">
                                    <svg className="w-5 h-4 text-[#86789b] shrink-0 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                    <span>team@gyn-health.ch</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>


            </div>
            <div className="bg-[#f0faf4] pb-4">
                <div className="border-t border-black/5"></div>
                <div className=" site-container px-2 lg:px-4 mt-5 flex flex-col md:flex-row justify-between items-center text-[10.5px] font-bold text-gray-500 gap-4">
                    <p>© Copyright © Invotec International Inc</p>
                    <div className="flex items-center">
                        <a href="#" className="hover:text-primary transition-colors px-2">Privacy policy</a>
                        <span className="text-gray-300">|</span>
                        <a href="#" className="hover:text-primary transition-colors px-2">Imprint</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
