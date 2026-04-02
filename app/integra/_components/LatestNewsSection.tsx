import { ChevronRight, ChevronsRight, ChevronsLeft, ArrowUpRight } from "lucide-react";

export default function LatestNewsSection() {
    const news = [
        {
            id: 1,
            title: "Integra LifeSciences Announces Key Executive Leadership Appointments",
            image: "diff-1.png",
        },
        {
            id: 2,
            title: "Purpose in Motion: Turning Integrity into Impact",
            image: "diff-2.png",
        },
        {
            id: 3,
            title: "Restoring Lives Beyond the Operating Room",
            image: "diff-3.png",
        },
        {
            id: 4,
            title: "Integra LifeSciences Receives FDA 510(k) Clearance",
            image: "diff-4.png",
        }
    ];

    return (
        <section className="relative w-full bg-[#EAF8F1] py-16 md:py-24 px-4 md:px-8 overflow-hidden rounded-t-[2rem] md:rounded-t-[3rem]">
            {/* Decorative Asterisk */}
            <div className="absolute -top-20 right-10 opacity-60 z-0">
                <img src={`/integra/home/star-l.png`} alt="Asterisk" className="w-45" />
            </div>

            <div className="max-w-[1440px] w-full mx-auto relative z-10 flex flex-col items-center">
                {/* Header */}
                <div data-aos="fade-up" className="flex items-center gap-2 text-[16px] font-bold text-zinc-800 tracking-wider mb-2">
                    <ChevronsRight className="w-4 h-4 text-[#00A150]" />
                    Latest News
                    <ChevronsLeft className="w-4 h-4 text-[#00A150]" />
                </div>
                <h2 data-aos="fade-up" data-aos-delay="100" className="text-[28px] md:text-[36px] font-bold text-zinc-900 tracking-tight mb-12 md:mb-16">
                    What Makes Us Different
                </h2>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-16">
                    {news.map((item, index) => (
                        <div key={item.id} data-aos="fade-up" data-aos-delay={150 + index * 100} className="flex flex-col bg-transparent group cursor-pointer">
                            {/* Image Card Container */}
                            <div className="w-full aspect-square  bg-transparent mb-5 relative transition-shadow">
                                {/* Real Image Placeholder */}
                                <div className="absolute inset-0 bg-transparent flex items-center justify-center text-zinc-400 text-sm">
                                    <img src={`/integra/home/${item.image}`} alt="" className="w-full h-full object-cover rounded-4xl" />
                                </div>
                                {/* Arrow Button */}
                                <div className="absolute -bottom-0.5 -right-0.5 w-16 h-16 bg-white/90 backdrop-blur-md rounded-full border-12 border-[#EAF8F1]">
                                    <div className="w-full h-full rounded-full flex items-center justify-center text-zinc-500 group-hover:text-[#00A150] group-hover:bg-white transition-colors">
                                        <ArrowUpRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </div>

                            {/* Title */}
                            <h3 className="text-[16px] font-bold text-center text-zinc-900 leading-[1.4] transition-colors group-hover:text-[#00A150]">
                                {item.title}
                            </h3>
                        </div>
                    ))}
                </div>

                {/* Button */}
                <button data-aos="fade-up" data-aos-offset="0" className="group pl-6 pr-1.5 py-1.5 rounded-full bg-[#00A150] hover:bg-[#008A44] text-white text-[16px] font-semibold flex items-center gap-4 transition-colors shadow-md">
                    Search Specialist
                    <span className="w-7 h-7 rounded-full bg-white text-[#00A150] flex items-center justify-center group-hover:bg-zinc-50 transition-colors shadow-sm">
                        <ChevronRight className="w-4 h-4 ml-0.5" strokeWidth={3} />
                    </span>
                </button>
            </div>
        </section>
    );
}
