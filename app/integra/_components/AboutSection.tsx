import { ChevronRight, ChevronsRight, ChevronsLeft } from "lucide-react";

export default function AboutSection() {
    return (
        <section className="relative overflow-hidden">
            <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none z-0 select-none">
                <span
                    className="text-[5vw] font-extrabold text-zinc-100 tracking-tighter leading-none"
                    style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                >
                    ABOUT US
                </span>
            </div>
            <div className="w-full max-w-[1440px] mx-auto flex flex-col lg:flex-row pt-12 md:pt-16 pb-16 md:pb-24 px-4 md:px-8 gap-12 lg:gap-16 items-center overflow-hidden">
                {/* "ABOUT US" vertical watermark */}


                {/* Left side: Image + green box */}
                <div data-aos="fade-right" className="w-full lg:w-[45%] relative z-10 shrink-0">
                    {/* Main image — rounded corners, portrait ratio */}
                    <div className="w-full rounded-3xl overflow-hidden shadow-lg relative">
                        <img
                            src={`/integra/home/about.png`}
                            alt="About"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Green box — overlaps bottom-right of image */}
                    <div className="absolute -bottom-6 -right-2 md:-bottom-8 md:-right-8 w-44 h-32 md:w-56 md:h-40 bg-[#00A150] rounded-[1.5rem] md:rounded-[2rem] border-[8px] md:border-[12px] border-white z-20 shadow-md flex items-center justify-center gap-2 md:gap-3">
                        <span className="text-white text-[42px] md:text-[56px] font-bold tracking-tighter leading-none">30+</span>
                        <span className="text-white text-[12px] md:text-[15px] font-medium leading-[1.2]">
                            Years of<br />Experience
                        </span>
                    </div>

                </div>

                {/* Right side: Content */}
                <div data-aos="fade-left" className="w-full lg:w-[55%] flex flex-col justify-center relative z-10 md:pl-2 lg:pl-4 mt-6 md:mt-0">
                    {/* Eyebrow */}
                    <div className="flex items-center gap-2 text-[14px] md:text-[16px] font-extrabold text-[#1F2937] tracking-wide mb-3">
                        <ChevronsRight className="w-4 h-4 text-[#00A150]" />
                        About Us
                        <ChevronsLeft className="w-4 h-4 text-[#00A150]" />
                    </div>

                    <h2 className="text-[28px] md:text-[36px] font-bold text-[#0F172A] leading-[1.2] tracking-tight mb-4 md:mb-5">
                        Committed to Restoring Lives Through Innovation
                    </h2>

                    <p className="text-[16px] text-zinc-500 mb-8 leading-relaxed">
                        Integra LifeSciences is a global medical technology leader dedicated to restoring lives. We are advancing transformational care through impactful innovation in neurosurgery and tissue reconstruction, specialized fields that demand exceptional expertise and precision.
                    </p>

                    {/* Feature Box */}
                    <div className="flex items-start gap-4 mb-8">
                        <div className="bg-[#EAF5EF] rounded-xl p-3 w-12 h-12 flex items-center justify-center shrink-0 mt-0.5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#00A150]">
                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#00A150" />
                            </svg>
                        </div>
                        <p className="text-[16px] text-zinc-500 leading-relaxed font-medium">
                            Our portfolio of highly differentiated gold-standard products and solutions is built on decades of clinical evidence and trusted by healthcare professionals to improve patient outcomes.
                        </p>
                    </div>

                    {/* Purpose & Vision joined container */}
                    <div className="flex flex-col md:flex-row bg-[linear-gradient(180deg,#FFFFFF_0%,#94FFEA_100%)] rounded-2xl p-6 gap-6 mb-8">
                        {/* Purpose */}
                        <div className="flex-1 flex flex-col gap-2">
                            <h3 className="text-zinc-900 font-bold text-[16px]">Our Purpose</h3>
                            <p className="text-[#3b7c63] font-medium text-[15px] leading-[1.6]">
                                Integra is committed to restoring lives through innovative medical technologies that create healthier people.
                            </p>
                        </div>

                        {/* Divider line */}
                        <div className="hidden md:block w-px bg-teal-600/20" />
                        <div className="md:hidden h-px w-full bg-teal-600/20" />

                        {/* Vision */}
                        <div className="flex-1 flex flex-col gap-2">
                            <h3 className="text-zinc-900 font-bold text-[16px]">Our Vision</h3>
                            <p className="text-[#3b7c63] font-medium text-[15px] leading-[1.6]">
                                Advancing transformational care, delivering impactful innovation, and enriching life moments.
                            </p>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <button className="group pl-5 pr-1.5 py-1.5 rounded-full bg-[#00A150] hover:bg-[#008A44] text-white text-[16px] font-semibold flex items-center gap-3 transition-colors shadow-md w-fit">
                        Know More about Us
                        <span className="w-7 h-7 rounded-full bg-white text-[#00A150] flex items-center justify-center group-hover:bg-zinc-50 transition-colors shadow-sm">
                            <ChevronRight className="w-4 h-4 ml-0.5" strokeWidth={3} />
                        </span>
                    </button>
                </div>
            </div>
        </section>
    );
}
