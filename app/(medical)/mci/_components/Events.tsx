"use client";

import React from "react";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import SectionHeader from "./SectionHeader";

const Events = () => {
    const events = [
        {
            title: "Arab Health 2023(Dubai)",
            path: "/mci/images/blog-1.png",
            date: "JAN 30 - FEB 2, 2023",
            location: "Dubai World Trade Centre"
        },
        {
            title: "AAOMS 2022(New Orleans)",
            path: "/mci/images/blog-2.png",
            date: "SEP 12 - 17, 2022",
            location: "New Orleans, Louisiana"
        },
        {
            title: "FIME 2022(Miami Beach)",
            path: "/mci/images/blog-3.png",
            date: "JULY 27-29, 2022",
            location: "Miami Beach Convention Center"
        }
    ];

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 text-center">
                {/* Header Area */}
                <div className="space-y-6 mb-20 flex flex-col items-center" data-aos="fade-up">
                    <SectionHeader
                        center
                        subtitle="Global Events & Conferences"
                        title="Connecting, Learning, and Leading in Healthcare Innovation"
                    />

                    <p className="text-gray-500 font-medium max-w-4xl mx-auto text-sm lg:text-[15px] leading-relaxed">
                        MCI actively participates in leading international medical conferences and exhibitions across the globe, including prominent events in Miami, Singapore, São Paulo, Dubai, and New Orleans. These platforms bring together industry experts, surgeons, and innovators to share knowledge, explore advancements, and discuss the future of healthcare.
                    </p>
                </div>

                {/* Events Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {events.map((event, idx) => (
                        <div
                            key={idx}
                            data-aos="fade-up"
                            data-aos-delay={idx * 100}
                            className="flex flex-col group items-center text-center"
                        >
                            <div className="aspect-square w-full rounded-[2rem] overflow-hidden bg-gray-100 mb-6 shadow-xl shadow-black/5 flex items-center justify-center relative transition-transform duration-500 group-hover:scale-[1.02]">
                                <img src={event.path} alt={event.title} className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                            </div>

                            <div className="space-y-2">
                                <h3 className="text-base lg:text-[20px] font-bold text-gray-900 transition-colors">
                                    {event.title}
                                </h3>
                                <div className="relative group/link inline-block">
                                    <Link href="#" className="inline-flex items-center gap-1.5 text-[#0e2a5e] font-bold text-sm lg:text-base transition-colors">
                                        Details <ExternalLink size={14} />
                                    </Link>
                                    <span className="absolute -bottom-1 left-0 h-0.5 bg-secondary transition-all duration-300 w-0 group-hover/link:w-full"></span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Events;
