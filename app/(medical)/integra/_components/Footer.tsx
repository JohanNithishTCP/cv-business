import { ArrowRight, Linkedin, Youtube, Instagram, Twitter } from "lucide-react";

export default function Footer() {
    return (
        <footer className="relative w-full bg-[#0E1513] text-white pt-16 md:pt-24 pb-8 md:pb-12 px-4 md:px-8 overflow-hidden">
            {/* Background Decoratives (Subtle stars/shapes) */}
            <div className="absolute top-0 right-0 pointer-events-none">
                <img src={`/integra/home/footer-bg.png`} alt="Asterisk" className="w-45" />
            </div>

            <div className="absolute bottom-0 left-0 pointer-events-none">
                <img src={`/integra/home/footer-bg.png`} alt="Asterisk" className="w-45 transform rotate-180" />
            </div>

            <div className="max-w-[1440px] w-full mx-auto relative z-10 flex flex-col md:flex-row gap-16 md:gap-8 justify-between">
                {/* Left Side - CTA & Newsletter */}
                <div data-aos="fade-right" className="w-full md:w-[45%] flex flex-col items-start pr-0 md:pr-10">
                    <div className="flex items-center gap-2 mb-5">
                        <img src={`/integra/logo-white.png`} alt="Logo" className="w-40 md:w-48" />
                    </div>
                    <h2 className="text-[28px] md:text-[35px] font-bold text-white leading-[1.2] tracking-tight mb-6 md:mb-8 mt-10 md:mt-0">
                        ENHANCE HEALTH CARE, BOOST<br />
                        CONFIDENCE, START TODAY!
                    </h2>

                    <div className="w-full relative mb-16">
                        <input
                            type="email"
                            placeholder="Enter Email Address"
                            className="w-full bg-white rounded-full py-3.5 pl-6 pr-14 text-zinc-900 text-sm focus:outline-none placeholder:text-zinc-400 border border-transparent focus:border-[#008A44]"
                        />
                        <button className="absolute right-1.5 top-1.5 bottom-1.5 aspect-square bg-[#1a7458] hover:bg-[#135d45] rounded-full flex items-center justify-center transition-colors">
                            <ArrowRight className="w-4 h-4 text-white" />
                        </button>
                    </div>

                    <div className="w-full h-[1px] bg-white/10 mb-8" />

                    {/* Social Icons & Copyright */}
                    <div className="flex gap-4 mb-8">
                        <a href="#" className="w-9 h-9 border border-white/20 rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg>
                        </a>
                        <a href="#" className="w-9 h-9 border border-white/20 rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors">
                            <Youtube className="w-4 h-4" />
                        </a>
                        <a href="#" className="w-9 h-9 border border-white/20 rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors">
                            <Instagram className="w-4 h-4" />
                        </a>
                        <a href="#" className="w-9 h-9 border border-white/20 rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors">
                            <Linkedin className="w-4 h-4" />
                        </a>
                    </div>

                    <p className="text-[14px] text-white/50 tracking-wide">
                        Copyright © 2026 Integra. All Rights Reserved
                    </p>
                </div>

                {/* Right Side - Links Grid */}
                <div data-aos="fade-left" data-aos-delay="200" className="w-full md:w-[55%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-8">
                    <div className="flex flex-col gap-5">
                        <h4 className="text-[18px] font-bold text-white mb-2">Company</h4>
                        <a href="#" className="text-[14px] text-white/70 hover:text-white transition-colors">Careers</a>
                        <a href="#" className="text-[14px] text-white/70 hover:text-white transition-colors">Investor Portal</a>
                        <a href="#" className="text-[14px] text-white/70 hover:text-white transition-colors">Contact</a>
                    </div>

                    <div className="flex flex-col gap-5">
                        <h4 className="text-[18px] font-bold text-white mb-2">Company</h4>
                        <a href="#" className="text-[14px] text-white/70 hover:text-white transition-colors">IFUs and PILs</a>
                        <a href="#" className="text-[14px] text-white/70 hover:text-white transition-colors">Service and Repair</a>
                        <a href="#" className="text-[14px] text-white/70 hover:text-white transition-colors">Investigator Portal</a>
                        <a href="#" className="text-[14px] text-white/70 hover:text-white transition-colors">Biomaterial Partnerships</a>
                        <a href="#" className="text-[14px] text-white/70 hover:text-white transition-colors">Class I Devices - IFUs</a>
                        <a href="#" className="text-[14px] text-white/70 hover:text-white transition-colors">Integra Foundation</a>
                    </div>

                    <div className="flex flex-col gap-5 pr-10">
                        <h4 className="text-[18px] font-bold text-white mb-2">Company</h4>
                        <a href="#" className="text-[14px] text-white/70 hover:text-white transition-colors">Integra LifeSciences Grants</a>
                        <a href="#" className="text-[14px] text-white/70 hover:text-white transition-colors">Warranty, Terms and Conditions</a>
                        <a href="#" className="text-[14px] text-white/70 hover:text-white transition-colors">Purchase Order Terms</a>
                        <a href="#" className="text-[14px] text-white/70 hover:text-white transition-colors">Tissue Technologies Blog</a>
                        <a href="#" className="text-[14px] text-white/70 hover:text-white transition-colors">Codman Specialty Surgical Blog</a>
                        <a href="#" className="text-[14px] text-white/70 hover:text-white transition-colors">Integra Institute</a>
                    </div>
                </div>

                {/* Logo Bottom Right */}
                {/* <div data-aos="zoom-in" data-aos-delay="400" className="relative md:absolute mt-8 md:mt-0 md:bottom-0 md:right-10 flex items-center justify-start md:justify-end">
                    <div className="flex items-center gap-2">
                        <img src={`/integra/logo-white.png`} alt="Logo" className="w-40 md:w-48" />
                    </div>
                </div> */}
            </div>
        </footer>
    );
}
