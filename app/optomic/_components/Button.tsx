"use client";

import Link from "next/link";
import { ArrowUpRight, LucideIcon } from "lucide-react";

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    href?: string;
    className?: string;
    variant?: "primary" | "outline" | "white" | "dark" | "optomic";
    type?: "button" | "submit";
    size?: "sm" | "md" | "lg";
    icon?: LucideIcon;
}

export default function Button({
    children,
    onClick,
    href,
    className = "",
    variant = "primary",
    type = "button",
    size = "md",
    icon: Icon = ArrowUpRight
}: ButtonProps) {

    const baseStyles = "inline-flex items-center justify-center font-semibold tracking-wide transition-all duration-300 shadow-sm active:scale-95 text-base relative group overflow-hidden";

    const variants = {
        primary: "bg-[#243783] text-white hover:bg-[#1b2d6b] shadow-[#243783]/20 rounded-md",
        outline: "border-2 border-[#243783] text-[#243783] hover:bg-[#243783] hover:text-white rounded-md",
        white: "bg-white text-[#243783] hover:bg-gray-50 rounded-md",
        dark: "bg-[#1a2350] text-white hover:bg-[#0e1830] rounded-md",
        optomic: "bg-[#0090D4] text-white rounded-full p-0"
    };

    const sizes = {
        sm: "px-5 py-2",
        md: "px-8 py-3",
        lg: "px-12 py-4"
    };

    const heights = {
        sm: "h-[44px]",
        md: "h-[56px]",
        lg: "h-[64px]"
    };

    const circleSizes = {
        sm: "h-[38px]",
        md: "h-[48px]",
        lg: "px-[56px]"
    };

    const isInternalLink = href && href.startsWith('/');

    const content = (
        <>
            {variant === "optomic" ? (
                <div className={`${baseStyles} ${variants[variant]} ${heights[size]} ${className} !overflow-visible flex items-center justify-between pl-5 pr-1 relative ${size === 'sm' ? 'min-w-[160px]' : 'min-w-[220px]'} w-auto`}>
                    <span className={`${size === 'sm' ? 'text-[16px]' : 'text-[17px]'} font-bold tracking-tight whitespace-nowrap pr-4`}>
                        {children}
                    </span>
                    <div className={`${size === 'sm' ? 'h-[36px]' : 'h-[48px]'} aspect-square flex items-center justify-center overflow-hidden rounded-full shadow-lg z-10 transition-all duration-300 bg-[#243783] group-hover:scale-110`}>
                        <div className="relative w-full h-full flex items-center justify-center">
                            <Icon
                                size={size === 'sm' ? 16 : 20}
                                strokeWidth={3}
                                className="absolute transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1) group-hover:translate-x-10 group-hover:-translate-y-10 opacity-100 group-hover:opacity-0 text-white"
                            />
                            <Icon
                                size={size === 'sm' ? 16 : 20}
                                strokeWidth={3}
                                className="absolute -translate-x-10 translate-y-10 transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1) group-hover:translate-x-0 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 text-white"
                            />
                        </div>
                    </div>
                </div>
            ) : (
                <div className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}>
                    {children}
                </div>
            )}
        </>
    );

    if (href) {
        if (isInternalLink) {
            return (
                <Link href={href} className="inline-block">
                    {content}
                </Link>
            );
        }
        return (
            <a href={href} className="inline-block" target="_blank" rel="noopener noreferrer">
                {content}
            </a>
        );
    }

    return (
        <button
            type={type}
            onClick={onClick}
            className="inline-block"
        >
            {content}
        </button>
    );
}
