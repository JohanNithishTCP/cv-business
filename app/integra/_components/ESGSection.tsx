import { ChevronRight, ChevronsRight, ChevronsLeft } from "lucide-react";

export default function ESGSection() {
    return (
        <section className="relative w-full max-w-[1440px] mx-auto py-16 md:py-24 px-4 md:px-8 flex flex-col md:flex-row gap-10 md:gap-16 items-center">
            {/* Img Container */}
            <div data-aos="fade-right" className="w-full md:w-[50%] aspect-video md:aspect-[4/3] bg-zinc-700 rounded-[1.5rem] md:rounded-[2rem] overflow-hidden relative shadow-lg">
                {/* Placeholder for the black and white clinical image */}
                <div className="absolute inset-0 flex items-center justify-center text-zinc-400 bg-zinc-800">
                    <video
                        src="https://cdn.clinicalvisuals.com/animations/videos/ent/otitis_media/hls.m3u8"
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            {/* Content */}
            <div data-aos="fade-left" className="w-full md:w-[50%] flex flex-col justify-center">
                <div className="flex items-center gap-2 text-[16px] font-bold text-zinc-800 tracking-wider mb-2">
                    <ChevronsRight className="w-4 h-4 text-[#00A150]" />
                    Restoring Lives
                    <ChevronsLeft className="w-4 h-4 text-[#00A150]" />
                </div>
                <h2 className="text-[28px] md:text-[36px] font-bold text-zinc-900 leading-[1.2] tracking-tight mb-4 md:mb-6">
                    Environmental, Social, and Governance (ESG)
                </h2>
                <p className="text-[16px] text-zinc-600 mb-4 leading-[1.7]">
                    In all that we do, we are unwavering in our commitment to excellence. We live this vision every day by being supportive, transparent and accountable to our stakeholders, including healthcare providers and their patients, our colleagues, suppliers, and other business partners and all the communities we operate in and serve.
                </p>
                <p className="text-[16px] text-zinc-600 mb-8 leading-[1.7]">
                    Improving the lives of patients around the world is our driving force. Through technologies that transform care, we restore health. Product safety, patient welfare, community relations, and affordability and access matter deeply to Integra and we are laser-focused on continuous improvement in these areas.
                </p>

                <button className="group mt-2 pl-6 pr-1.5 py-1.5 rounded-full bg-[#00A150] hover:bg-[#008A44] text-white text-[16px] font-semibold flex items-center gap-4 transition-colors shadow-md w-fit">
                    Search Specialist
                    <span className="w-7 h-7 rounded-full bg-white text-[#00A150] flex items-center justify-center group-hover:bg-zinc-50 transition-colors shadow-sm">
                        <ChevronRight className="w-4 h-4 ml-0.5" strokeWidth={3} />
                    </span>
                </button>
            </div>
        </section>
    );
}
