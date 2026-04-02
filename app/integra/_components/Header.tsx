import { ChevronDown, CircleUserRound, Search, Menu } from "lucide-react";

export default function Header() {
    return (
        <header data-aos="fade-down" className="relative w-full px-2 md:px-4 mx-auto z-50 pt-2 lg:px-12">
            <div className="hidden lg:flex justify-between px-8 py-2 gap-6 text-[11px] font-semibold text-zinc-500 tracking-wide">
                <div className="flex justify-start px-8 py-2 gap-6 text-[16px]">
                    <a href="#" className="hover:text-zinc-800 transition-colors">Resources & Support</a>
                    <a href="#" className="hover:text-zinc-800 transition-colors">Careers</a>
                    <a href="#" className="hover:text-zinc-800 transition-colors">Investors</a>
                </div>
                <div className="flex justify-start px-8 py-2 gap-6">
                    <Search className="text-[#43C056]" />
                    <CircleUserRound className="text-[#43C056]" />
                </div>
            </div>

            <div className="bg-white rounded-[2rem] border border-[#43C056] px-4 md:px-6 py-2 flex items-center justify-between shadow-sm">
                {/* Logo */}
                <div className="flex items-center gap-2 pl-2">
                    <img src={`/integra/logo.png`} alt="Logo" className="w-40" />
                </div>

                {/* Nav Links */}
                <nav className="hidden md:flex items-center gap-8 text-[13px] font-bold text-zinc-800">
                    <a href="#" className="flex items-center gap-1 text-[16px] hover:text-[#43C056] transition-colors">
                        Healthcare Professionals <ChevronDown className="w-3.5 h-3.5 text-zinc-400 font-bold" strokeWidth={3} />
                    </a>
                    <a href="#" className="flex items-center gap-1 text-[16px] hover:text-[#43C056] transition-colors">
                        Patients & Caregivers <ChevronDown className="w-3.5 h-3.5 text-zinc-400 font-bold" strokeWidth={3} />
                    </a>
                    <a href="#" className="flex items-center gap-1 text-[16px] hover:text-[#43C056] transition-colors">
                        Our Company <ChevronDown className="w-3.5 h-3.5 text-zinc-400 font-bold" strokeWidth={3} />
                    </a>
                    <a href="#" className="hover:text-[#43C056] text-[16px] transition-colors">News</a>
                </nav>

                {/* CTA & Mobile Menu */}
                <div className="flex items-center gap-3">
                    <button className="hidden md:block bg-[#43C056] hover:bg-[#38A849] text-white px-7 py-2 rounded-full text-[16px] font-semibold transition-colors">
                        Contact Us
                    </button>
                    <button className="lg:hidden p-2 text-zinc-700 hover:text-[#43C056] flex items-center justify-center">
                        <Menu className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </header>
    );
}
