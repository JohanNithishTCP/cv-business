"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface ButtonProps {
    text: string;
    href?: string;
    onClick?: () => void;
    variant?: "primary" | "white" | "outline-white";
    className?: string;
    showIcon?: boolean;
}

export default function Button({
    text,
    href,
    onClick,
    variant = "primary",
    className = "",
    showIcon = true,
}: ButtonProps) {
    const baseWrapper = "group flex gap-0 cursor-pointer items-center border-none bg-transparent p-0";

    // Core sizing ensures the 16px text-base requirement
    const textBaseStyles = "px-7 py-3 rounded-full text-base font-semibold transition-all shadow-md group-hover:shadow-lg flex items-center justify-center";
    const iconBaseStyles = "w-12 h-12 rounded-full flex items-center justify-center transition-all shadow-md group-hover:shadow-lg shrink-0";

    const variantStyles = {
        primary: {
            text: "bg-[#4782d3] text-white group-hover:bg-[#356ab0]",
            icon: "bg-[#4782d3] text-white group-hover:bg-[#356ab0]",
            iconSymbol: "text-white"
        },
        white: {
            text: "bg-white text-[#4782d3] group-hover:bg-blue-50",
            icon: "bg-white text-[#4782d3] group-hover:bg-blue-50",
            iconSymbol: "text-[#4782d3]"
        },
        "outline-white": {
            text: "border border-white/40 text-white hover:bg-white hover:text-[#4782d3] group-hover:bg-white group-hover:text-[#4782d3]",
            icon: "border border-white/40 text-white hover:bg-white hover:text-[#4782d3] group-hover:bg-white group-hover:text-[#4782d3]",
            iconSymbol: "currentColor"
        }
    };

    const styles = variantStyles[variant];

    const content = (
        <>
            <div className={`${textBaseStyles} ${styles.text}`}>
                {text}
            </div>
            {showIcon && (
                <div className={`${iconBaseStyles} ${styles.icon}`}>
                    <ArrowUpRight className={`w-5 h-5 transition-transform duration-300 group-hover:rotate-45 group-hover:translate-x-0.5 ${styles.iconSymbol}`} />
                </div>
            )}
        </>
    );

    const finalWrapper = `${baseWrapper} ${className}`;

    if (href) {
        return (
            <Link href={href} className={finalWrapper}>
                {content}
            </Link>
        );
    }

    return (
        <button type="button" onClick={onClick} className={finalWrapper}>
            {content}
        </button>
    );
}
