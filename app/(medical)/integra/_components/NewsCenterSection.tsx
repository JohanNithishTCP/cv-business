import { ChevronRight, ChevronsRight, ChevronsLeft } from "lucide-react";

export default function NewsCenterSection() {
    return (
        <section className="relative w-full max-w-[1440px] mx-auto py-16 md:py-24 px-4 md:px-8 flex flex-col md:flex-row gap-10 md:gap-16 items-center">
            {/* Content Side */}
            <div data-aos="fade-right" className="w-full md:w-[50%] flex flex-col justify-center">
                <div className="flex items-center gap-2 text-[16px] font-bold text-zinc-800 tracking-wider mb-2">
                    <ChevronsRight className="w-4 h-4 text-[#00A150]" />
                    News Center
                    <ChevronsLeft className="w-4 h-4 text-[#00A150]" />
                </div>
                <h2 className="text-[28px] md:text-[36px] font-bold text-zinc-900 leading-[1.2] tracking-tight mb-6 md:mb-8">
                    Integra LifeSciences Reports<br />
                    Fourth Quarter and Full-Year<br />
                    2025 Financial Results
                </h2>
                <p className="text-[16px] text-zinc-600 mb-10 leading-[1.8] pr-4 text-justify">
                    In the fourth quarter, we drove tangible operational progress while continuing to deliver for our customers and patients,” said Mojdeh Poul, president and chief executive officer. “During 2025, we further strengthened our quality management system, advanced our Compliance Master Plan, and progressed execution of our remediation work. Our operational and execution focus resulted in significant outcomes in key areas, namely Integra Skin supply reliability, healthier safety stock levels across our portfolio, and early relaunch of PriMatrix and Durepair.
                </p>

                <button className="group pl-6 pr-1.5 py-1.5 rounded-full bg-[#00A150] hover:bg-[#008A44] text-white text-[16px] font-semibold flex items-center gap-4 transition-colors shadow-md w-fit">
                    Search Specialist
                    <span className="w-7 h-7 rounded-full bg-white text-[#00A150] flex items-center justify-center group-hover:bg-zinc-50 transition-colors shadow-sm">
                        <ChevronRight className="w-4 h-4 ml-0.5" strokeWidth={3} />
                    </span>
                </button>
            </div>

            {/* Image Side */}
            <div data-aos="fade-left" className="w-full md:w-[50%] aspect-[4/3] bg-zinc-200 rounded-[2rem] overflow-hidden relative shadow-lg">
                <video
                    src="https://cdn.clinicalvisuals.com/medical/integralife/landingpage/integralife_02.webm"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                />
            </div>
        </section>
    );
}
