"use client";

import React from "react";
import { Check, CheckCircle2 } from "lucide-react";

const serviceItems = [
    {
        title: "Professional Support",
        description:
            "Dedicated customer care to assist clients with expert guidance, personalised solutions, and continuous support to ensure a smooth and reliable experience.",
    },
    {
        title: "Reliable After-Sales Service",
        description:
            "Ensuring equipment remains in perfect working condition over time through skilful maintenance, on-site performance, and dedicated after-sales support.",
    },
    {
        title: "Multiple Contact Channels",
        description:
            "Connect easily through multiple support channels for rapid help and guidance.",
    },
];

export default function Service() {
    return (
        <section className="w-full bg-white" data-aos="fade-up">
            <div className="container mx-auto px-6 md:px-12 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left — Video / Image Placeholder */}
                    <div className="h-[500px] relative overflow-hidden rounded-xl">
                        <video src="http://cdn.clinicalvisuals.com/medical/tsi/landingpage/tsi_01.webm" autoPlay loop muted playsInline className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                    </div>

                    {/* Right — Service Content */}
                    <div className="flex flex-col">
                        <span className="font-semibold mb-3">
                            Service
                        </span>
                        <h2 className="!text-[#243783] text-[30px] mb-4">
                            Ensuring reliable service and continued support.
                        </h2>
                        <p className="text-[#333333] text-[16px] mb-8 text-justify">
                            Both Customer Care and After-Sales Service are priorities for Optomic. We look after the end
                            professional&apos;s needs, and guarantee the perfect condition of the equipment during its life.
                            Optomic offers to its clients many ways of contact, enabling communication between them and
                            the company at all times.
                        </p>

                        <ul className="space-y-6">
                            {serviceItems.map((item, index) => (
                                <li key={index} className="grid grid-cols-[2rem_1fr] gap-4 items-start">
                                    <div className="w-7 h-7 bg-[#243783] rounded-full flex items-center justify-center">
                                        <Check size={22} className="text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-[#1A1A1A] text-[19px] mb-1">
                                            {item.title}
                                        </h4>
                                        <p className="leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
