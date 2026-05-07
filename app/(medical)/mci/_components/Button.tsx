"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface ButtonProps {
    text: string;
    href?: string;
    onClick?: () => void;
    variant?: "primary" | "secondary" | "white" | "blue" | "outline";
    size?: "sm" | "md" | "lg";
    className?: string;
    icon?: React.ReactNode;
    showIcon?: boolean;
    circleIcon?: boolean;
}

const Button = ({
    text,
    href,
    onClick,
    variant = "primary",
    size = "md",
    className = "",
    icon = <ArrowRight size={16} />,
    showIcon = true,
    circleIcon = true
}: ButtonProps) => {
    // Basic shared styles
    const baseStyles = "inline-flex items-center font-bold transition-all duration-300 group rounded-full active:scale-95 shadow-lg";

    // Variant styles
    const variants = {
        primary: "bg-[#103672] text-white",
        secondary: "bg-[#e31e24] text-white", // Red
        white: "bg-white text-[#103672]",
        blue: "bg-[#1e40af] text-white",
        outline: "border-2 border-[#103672] text-[#103672] hover:bg-[#103672] hover:text-white"
    };

    // Size styles
    const sizes = {
        sm: `${circleIcon ? "pl-6 pr-1.5 py-1.5" : "px-6 py-2"} text-[13px] gap-4`,
        md: `${circleIcon ? "pl-8 pr-2 py-2" : "px-8 py-3"} text-[16px] gap-6`,
        lg: `${circleIcon ? "pl-10 pr-2.5 py-2.5" : "px-10 py-4"} text-[17px] gap-8`
    };

    // Icon Circle Backgrounds
    const iconBgs = {
        primary: "bg-secondary",
        secondary: "bg-[#103672]",
        white: "bg-[#103672]",
        blue: "bg-secondary",
        outline: "bg-[#103672] group-hover:bg-white"
    };

    const iconCircleSizes = {
        sm: "w-7 h-7",
        md: "w-8 h-8",
        lg: "w-10 h-10"
    };

    const content = (
        <>
            {text}
            {showIcon && (
                circleIcon ? (
                    <div
                        className={`
                            ${iconCircleSizes[size]} 
                            ${iconBgs[variant]} 
                            rounded-full flex items-center justify-center 
                            transition-all duration-300 
                            overflow-hidden
                            ${variant === 'outline' ? 'text-white group-hover:text-[#103672]' : 'text-white'}
                        `}
                    >
                        <div className="relative flex items-center justify-center w-full h-full">
                           <div className="absolute transition-all duration-500 ease-in-out group-hover:translate-x-10 group-hover:opacity-0">
                                {icon}
                            </div>
                            <div className="absolute transition-all duration-500 ease-in-out -translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100">
                                {icon}
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="transition-transform duration-300 group-hover:translate-x-1">
                        {icon}
                    </div>
                )
            )}
        </>
    );

    const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

    const finalStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className} cursor-pointer`;

    if (href) {
        if (isInternalLink) {
            return (
                <Link
                    href={href}
                    className={finalStyles}
                >
                    {content}
                </Link>
            );
        }
        return (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={finalStyles}
            >
                {content}
            </a>
        );
    }

    return (
        <button
            type="button"
            onClick={onClick}
            className={finalStyles}
        >
            {content}
        </button>
    );
};

export default Button;
