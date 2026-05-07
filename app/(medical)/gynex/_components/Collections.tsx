"use client";

import React from "react";

const collections = [
    { name: "Equipment", icon: "gynex/images/collection-1.png" },
    { name: "Instructions", icon: "gynex/images/collection-2.png" },
    { name: "Single-use", icon: "gynex/images/collection-3.png" },
    { name: "Care & Cleaning", icon: "gynex/images/collection-4.png" },
    { name: "Electrosurgical", icon: "gynex/images/collection-5.png" }
];

export default function Collections() {
    return (
        <section className="py-24 bg-[#7C2B83]">
            <div className="container mx-auto px-6 md:px-12 text-center">
                <h2 className="text-3xl font-bold !text-white mb-16 tracking-tight">
                    Shop by Collections
                </h2>

                <div className="flex flex-wrap justify-between gap-8 md:gap-12">
                    {collections.map((item, index) => (
                        <div key={index} className="flex flex-col items-center group cursor-pointer">
                            <div className="w-24 h-40 md:w-52 md:h-82 bg-[#F9F9F9] rounded-full mb-6 transition-transform duration-300 group-hover:scale-110 flex items-center justify-center text-4xl shadow-xl overflow-hidden relative">
                                <img src={item.icon} alt={item.name} className="w-full h-full object-contain" />
                            </div>
                            <span className="text-white font-bold text-[20px] tracking-wide">
                                {item.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
