"use client";

import React from "react";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

interface ButtonProps {
    text: string;
    href?: string;
    onClick?: () => void;
    variant?: "primary" | "white" | "outline" | "search";
    className?: string;
    showIcon?: boolean;
}

const Button = ({
    text,
    href,
    onClick,
    variant = "primary",
    className = "",
    showIcon = true,
}: ButtonProps) => {
    const baseStyles = "inline-flex items-center justify-between font-semibold transition-all duration-300 group rounded-lg active:scale-95 shadow-sm overflow-hidden text-sm md:text-base";

    const variants = {
        primary: "bg-[#00aeef] text-white",
        white: "bg-white text-[#00aeef]",
        outline: "border border-white text-white hover:bg-white hover:text-[#00aeef]",
        search: "bg-[#00aeef] text-white px-4 py-1.5 min-w-[100px]"
    };

    const padding = variant === "search" ? "px-6 py-2" : "pl-8 pr-1.5 py-1.5 md:py-2 md:pr-2";

    const content = (
        <>
            <span className={variant === "search" ? "mx-auto" : "mr-4"}>{text}</span>
            {showIcon && variant !== "search" && (
                <div className={`${variant === 'white' ? 'bg-[#00aeef]/10' : 'bg-white/30'} ${variant === 'outline' ? 'group-hover:bg-[#00aeef]/10' : ''} w-8 h-8 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 shrink-0 ml-auto`}>
                    <ChevronRight size={18} className={`${variant === 'white' ? 'text-[#00aeef]' : 'text-white'} ${variant === 'outline' ? 'group-hover:text-[#00aeef]' : ''} stroke-[3]`} />
                </div>
            )}
            {variant === "search" && (
                <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>
            )}
        </>
    );

    const finalStyles = `${baseStyles} ${variants[variant]} ${padding} ${className}`;

    if (href) {
        return (
            <Link href={href} className={finalStyles}>
                {content}
            </Link>
        );
    }

    return (
        <button type="button" onClick={onClick} className={finalStyles}>
            {content}
        </button>
    );
};

export default Button;
