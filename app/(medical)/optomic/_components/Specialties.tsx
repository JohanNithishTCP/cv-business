"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

const specialties = [
    {
        icon: "optomic/ent.png",
        label: "ENT",
        title: "ENT",
        items: [
            "ENT Microscopes, Cameras, Light Sources, ENT drills, ENT Chairs Fiberscopes"
        ],
        href: "/optomic/specialty/ent",
    },
    {
        icon: "optomic/gynecology.png",
        label: "Gynecology",
        title: "Gynecology",
        items: ["Colposcopes, Gynecology Chairs, Profuse"],
        href: "/optomic/specialty/gynecology",
    },
    {
        icon: "optomic/urology.png",
        label: "Urology",
        title: "Urology",
        items: [
            "Urological Chairs, Periscopes, Cystoscopes Profuse, Urology",
        ],
        href: "/optomic/specialty/urology",
    },
    {
        icon: "optomic/odontology.png",
        label: "Odontology",
        title: "Odontology",
        items: [
            "Laboratories and Training Units, Light Sources, Visible Microscopes, Image and Video Capturing Software",
        ],
        href: "/optomic/specialty/odontology",
    },
];

export default function Specialties() {
    return (
        <section className="py-20 bg-white" data-aos="fade-up">
            <div className="container mx-auto px-6 md:px-12">
                {/* Heading */}
                <div className="text-center mb-14">
                    <h5 className="text-[16px] font-bold text-[#1A1A1A] mb-3">
                        Our Specialties
                    </h5>
                    <h2 className="!text-[#243783] text-[30px] mb-4 ">
                        Advanced medical solutions for precision and better patient care.
                    </h2>
                    <p className="text-[#333333] max-w-5xl mx-auto leading-relaxed">
                        Explore our range of specialised equipment tailored for ENT, Gynecology, Urology, and Odontology—built
                        to meet the evolving needs of modern healthcare professionals.
                    </p>
                </div>

                {/* Specialty Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {specialties.map((specialty) => (
                        <div
                            key={specialty.label}
                            className="border border-gray-100 rounded-2xl p-7 flex gap-4 shadow-md hover:shadow-lg transition-shadow bg-white"
                        >
                            {/* Icon */}
                            <div className="w-14 h-14 bg-[#E8ECF9] rounded-full flex items-center justify-center shrink-0 p-2 ">
                                <img src={specialty.icon} alt={specialty.title} className="w-full h-full object-cover" />
                            </div>

                            <div className="flex flex-col flex-1">
                                {/* Title */}
                                <h4 className="font-bold text-[19px] text-[#1A1A1A]">
                                    {specialty.title}
                                </h4>

                                {/* Items */}
                                <ul className="text-[#333333] text-[16px] mb-5 leading-relaxed space-y-0.5">
                                    {specialty.items.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>

                                {/* Read More */}
                                <a
                                    href={specialty.href}
                                    className="inline-flex items-center gap-1.5 text-[#019EE2] font-semibold text-[16px] mt-auto hover:gap-3 transition-all"
                                >
                                    Read More <ArrowRight size={13} />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
