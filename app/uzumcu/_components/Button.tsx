"use client";

import Link from "next/link";
import React from "react";

interface ButtonProps {
    children: React.ReactNode;
    variant?: "primary" | "outline" | "white" | "ghost" | "light" | "dark";
    size?: "sm" | "md" | "lg" | "xl";
    radius?: "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "full";
    className?: string;
    href?: string;
    onClick?: () => void;
    icon?: React.ReactNode;
    iconPosition?: "left" | "right";
    fullWidth?: boolean;
    type?: "button" | "submit" | "reset";
}

export default function Button({
    children,
    variant = "primary",
    size = "md",
    radius = "md",
    className = "",
    href,
    onClick,
    icon,
    iconPosition = "right",
    fullWidth = false,
    type = "button",
}: ButtonProps) {
    const baseStyles = "inline-flex items-center justify-center font-bold tracking-wide transition-all duration-300 active:scale-95 cursor-pointer disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
        primary: "bg-[#3183C0] text-white hover:bg-[#296EA1] shadow-lg shadow-[#3183C0]/20 border-transparent",
        outline: "border-2 border-white/40 text-white hover:bg-white hover:text-primary backdrop-blur-md",
        white: "bg-white text-primary hover:bg-[#3183C0] hover:text-white shadow-xl shadow-black/5",
        ghost: "bg-transparent text-[#3183C0] hover:bg-[#3183C0]/10 border-transparent",
        light: "bg-[#3183C0]/10 text-primary hover:bg-[#3183C0]/20 border-transparent",
        dark: "bg-[#111827] text-white hover:bg-gray-800 border-transparent",
    };

    const sizes = {
        sm: "px-5 py-2 text-xs",
        md: "px-7 py-3 text-sm",
        lg: "px-10 py-4 text-base",
        xl: "px-12 py-5 text-lg",
    };

    const radiuses = {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        "2xl": "rounded-2xl",
        full: "rounded-full",
    };

    const width = fullWidth ? "w-full" : "";

    const combinedClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${radiuses[radius]} ${width} ${className}`;

    const content = (
        <>
            {icon && iconPosition === "left" && <span className="mr-2">{icon}</span>}
            {children}
            {icon && iconPosition === "right" && <span className="ml-2">{icon}</span>}
        </>
    );

    if (href) {
        return (
            <Link href={href} className={combinedClasses}>
                {content}
            </Link>
        );
    }

    return (
        <button type={type} onClick={onClick} className={combinedClasses}>
            {content}
        </button>
    );
}
