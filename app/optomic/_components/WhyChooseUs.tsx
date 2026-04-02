"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";

const features = [
    {
        title: "Certified Quality",
        icon: "/optomic/why-choose-1.svg",
        description:
            "Compliant with European standards, including ISO certifications and CE marking, guaranteeing safe and reliable equipment.",
    },
    {
        title: "After-Sales Support",
        icon: "/optomic/why-choose-2.svg",
        description:
            "Dedicated and professional after-sales service to maintain product performance throughout its lifecycle.",
    },
    {
        title: "Global Presence",
        icon: "/optomic/why-choose-3.svg",
        description:
            "Operating across five continents with a trusted network of distributors, delivering support and solutions worldwide.",
    },
];

export default function WhyChooseUs() {
    return (
        <section className="w-full py-16 md:py-20 pr-0 lg:pr-12 bg-[url('/optomic/bg-why.png')] bg-cover bg-center bg-no-repeat" data-aos="fade-up">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-[48%_52%] gap-20">
                    {/* Left Content */}
                    <div className="flex flex-col justify-center">
                        <span className="text-[#fff] font-semibold mb-3">
                            Why Choose Us
                        </span>
                        <h2 className="text-white! text-2xl md:text-3xl font-bold mb-4 leading-tight">
                            OPTOMIC, products designed by and for specialists
                        </h2>
                        <p className="text-white! text-base leading-relaxed mb-8 text-justify">
                            With over 30 years of experience and advanced in-house R&D, in-house production, and
                            certified quality standards to deliver reliable medical solutions. Our strong focus on innovation,
                            customer support, and global distribution ensures that healthcare professionals receive
                            high-performance equipment and cost-effective service worldwide.
                        </p>

                        <ul className="space-y-5">
                            {features.map((feature, index) => (
                                <li key={index} className="grid grid-cols-[3.5rem_1fr] gap-4 items-start">

                                    <div className="w-14 h-14 bg-[#0096D6] rounded-full shadow-lg shadow-[#0096D6]/30 transition-all duration-300 group-hover/item:scale-110 group-hover/item:shadow-[#0096D6]/50 p-2">
                                        <img src={feature.icon} alt="Check" className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <h4 className="text-white! font-semibold text-[19px] mb-0.5">
                                            {feature.title}
                                        </h4>
                                        <p className="text-white! text-sm leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right — Video Placeholder */}
                    <div className="min-h-[380px] lg:min-h-0 relative overflow-hidden rounded-xl">
                        <video src="https://cdn.clinicalvisuals.com/medical/tsi/landingpage/tsi_01.webm" autoPlay loop muted className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>
        </section>
    );
}
