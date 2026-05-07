"use client";

import { useState } from "react";
import { ArrowUpRight, ArrowRight, ChevronsRight, ChevronsLeft, ChevronRight } from "lucide-react";

export default function ServicesSection() {
    const [openIndex, setOpenIndex] = useState<number>(0);

    const services = [
        {
            id: "01",
            title: "Neurology",
            img: "/integra/home/service-1.png",
            description: "We are the global leader in neurosurgery, offering a broad portfolio of products and solutions for dural access and repair, cerebral spinal fluid management and neuro-critical care.",
        },
        {
            id: "02",
            title: "Wound Reconstruction and Care",
            img: "/integra/home/service-2.png",
            description: "Integra offers a broad portfolio addressing a full spectrum of needs when managing complex wounds. Learn more about our comprehensive solutions in tissue regeneration and advanced wound care.",
        },
        {
            id: "03",
            title: "Surgical Reconstruction",
            img: "/integra/home/service-3.png",
            description: "Explore Integra's advanced solutions for plastic and reconstructive surgery, complex hernias, as well as nerve and tendon repair and protection.",
        },
        {
            id: "04",
            title: "Ear, Nose and Throat",
            img: "/integra/home/service-4.png",
            description: "Partnering with physicians to deliver new technology that enables safe, fast and effective treatments in ENT.",
        },
        {
            id: "05",
            title: "Surgical Instrumentation and Lightning",
            img: "/integra/home/service-5.png",
            description: "Partnering with physicians to deliver new technology that enables safe, fast and effective treatments in ENT.",
        }
    ];

    return (
        <section className="relative w-full bg-[#EAF8F1] py-16 md:py-24 px-4 md:px-8 overflow-hidden">
            {/* Decorative Asterisks */}
            <div className="absolute top-12 left-12 opacity-80 z-0">
                <img src={`/integra/home/star-l.png`} alt="Asterisk" className="w-30" />
            </div>
            <div className="absolute top-12 right-12 opacity-80 z-0">
                <img src={`/integra/home/star-l.png`} alt="Asterisk" className="w-35" />
            </div>
            <div className="absolute top-1/2 -right-8 opacity-80 z-0">
                <img src={`/integra/home/star.png`} alt="Asterisk" className="w-25" />
            </div>
            <div className="absolute bottom-12 left-16 opacity-80 z-0">
                <img src={`/integra/home/star.png`} alt="Asterisk" className="w-35" />
            </div>

            <div className="max-w-[1280px] w-full mx-auto relative z-10 flex flex-col items-center">
                {/* Header Section */}
                <div data-aos="fade-up" className="flex items-center gap-2 text-[16px] font-bold text-zinc-800 tracking-wider mb-2">
                    <ChevronsRight className="w-4 h-4 text-[#00A150]" />
                    Services
                    <ChevronsLeft className="w-4 h-4 text-[#00A150]" />
                </div>
                <h2 data-aos="fade-up" data-aos-delay="100" className="text-[28px] md:text-[36px] font-bold text-[#00A150] mb-8 md:mb-12 tracking-tight text-center leading-[1.2]">
                    Unleashing Possibilities in Patient Care
                </h2>

                {/* Accordion Container */}
                <div className="w-full border-t border-[#B4DEC7]">
                    {services.map((service, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div key={service.id} data-aos="fade-up" data-aos-delay={150 + index * 50} className="w-full border-b border-[#B4DEC7] flex flex-col bg-transparent overflow-hidden">
                                <button
                                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                                    className={`w-full flex items-center text-left transition-all duration-300 py-4 md:py-6 px-2 md:px-6
                    ${isOpen ? "bg-[linear-gradient(90deg,#00A551_62.98%,#BAFFB4_100%)] text-white" : "hover:bg-black/5 text-zinc-900"}
                  `}
                                >
                                    <div className="w-[80%] md:w-[35%] font-bold text-[18px] md:text-[24px] pr-2 md:pr-4">
                                        {service.id}. {service.title}
                                    </div>
                                    <div className={`hidden md:block w-[55%] text-[16px] pr-12 font-medium leading-relaxed
                    ${isOpen ? "text-white/90" : "text-zinc-600"}
                  `}>
                                        {service.description}
                                    </div>
                                    <div className="w-[20%] md:w-[10%] flex justify-end">
                                        <div className={`w-9 h-9 rounded-full border flex items-center justify-center transition-colors 
                      ${isOpen ? "border-white/40 bg-[#00A150] " : "border-zinc-400 "}
                    `}>
                                            {isOpen ? (
                                                <ArrowRight className="w-4 h-4 text-white" />
                                            ) : (
                                                <ArrowUpRight className="w-4 h-4 text-zinc-500" />
                                            )}
                                        </div>
                                    </div>
                                </button>

                                {/* Expanded Content View (Image Panel) */}
                                <div
                                    className={`w-full overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <div className="w-full h-64 md:h-[350px] bg-zinc-300 relative">
                                        <div className="absolute inset-0 flex items-center justify-center text-zinc-600 bg-black/10">
                                            <img src={service.img} alt="Services" className="w-full h-full object-cover" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <button data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" className="group mt-10 md:mt-16 pl-6 pr-1.5 py-1.5 rounded-full bg-[#00A150] hover:bg-[#008A44] text-white text-[16px] font-semibold flex items-center gap-4 transition-colors shadow-md w-fit">
                    Search Specialist
                    <span className="w-7 h-7 rounded-full bg-white text-[#00A150] flex items-center justify-center group-hover:bg-zinc-50 transition-colors shadow-sm">
                        <ChevronRight className="w-4 h-4 ml-0.5" strokeWidth={3} />
                    </span>
                </button>
            </div>
        </section>
    );
}
