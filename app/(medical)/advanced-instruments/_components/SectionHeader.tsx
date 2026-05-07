"use client";

import React from "react";

interface SectionHeaderProps {
    label?: string;
    title: string;
    centered?: boolean;
    light?: boolean;
}

const SectionHeader = ({
    label,
    title,
    centered = false,
    light = false,
}: SectionHeaderProps) => {
    return (
        <div
            className={`flex flex-col ${centered ? "items-center text-center max-w-3xl mx-auto" : "items-start text-left"}`}
            data-aos="fade-up"
        >
            {label && (
                <div className="flex items-center gap-3 mb-4 group">
                    <span
                        className={`text-sm md:text-base font-bold tracking-wider ${light ? "text-white" : "text-[#333333]"
                            }`}
                    >
                        {label}
                    </span>
                    <div className={`h-[4px] w-12 ${light ? "bg-gradient-to-r from-[#80D4F7] to-white" : "bg-gradient-to-r from-white to-[#80D4F7]"}  transition-all duration-300 group-hover:w-16`} />
                </div>
            )}
            <h2
                className={`text-md md:text-2xl font-bold! leading-tight mb-6 ${light ? "text-white!" : "text-[#333333]!"
                    }`}
            >
                {title}
            </h2>
        </div>
    );
};

export default SectionHeader;
