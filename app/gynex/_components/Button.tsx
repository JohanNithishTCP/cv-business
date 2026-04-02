"use client";

import React from "react";

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    variant?: "primary" | "outline" | "white" | "dark";
    type?: "button" | "submit";
    size?: "sm" | "md" | "lg";
}

export default function Button({
    children,
    onClick,
    className = "",
    variant = "primary",
    type = "button",
    size = "md"
}: ButtonProps) {

    const baseStyles = "inline-flex items-center justify-center font-bold tracking-wide transition-all duration-300 shadow-md active:scale-95 rounded-lg text-base";

    const variants = {
        primary: "bg-[#7C2B83] text-white hover:bg-[#631c61] shadow-[#7C2B83]/20",
        outline: "border-2 border-[#7C2B83] text-[#7C2B83] hover:bg-[#7C2B83] hover:text-white",
        white: "bg-white text-[#7C2B83] hover:bg-gray-50",
        dark: "bg-[#1a1a1a] text-white hover:bg-black"
    };

    const sizes = {
        sm: "px-6 py-2",
        md: "px-10 py-3.5",
        lg: "px-12 py-4"
    };

    return (
        <button
            type={type}
            onClick={onClick}
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        >
            {children}
        </button>
    );
}
