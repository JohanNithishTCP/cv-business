"use client";

import Link from "next/link";
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary" | "outline" | "white" | "ghost";
  size?: "sm" | "md" | "lg" | "xl";
  rounded?: "sm" | "md" | "lg" | "full" | "none";
  fullWidth?: boolean;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  href,
  onClick,
  className = "",
  variant = "primary",
  size = "md",
  rounded = "lg",
  fullWidth = false,
  type = "button",
  disabled = false,
}) => {
  // Base classes
  const baseClasses = "inline-flex items-center justify-center font-bold transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer";

  // Variant classes
  const variantClasses = {
    primary: "bg-[#059347] hover:bg-[#047a3a] text-white shadow-md",
    secondary: "bg-[#8BC541] hover:bg-[#7ab336] text-white shadow-md",
    outline: "border-2 border-[#059347] text-[#059347] hover:bg-[#059347] hover:text-white",
    white: "border border-white text-white hover:bg-white hover:text-[#059347]",
    ghost: "bg-transparent hover:bg-[#F1F1F1] text-[#333333]",
  };

  // Size classes
  const sizeClasses = {
    sm: "px-4 py-2 text-xs",
    md: "px-5 py-3 text-[16px]",
    lg: "px-8 py-3 text-[18px]",
    xl: "px-10 py-4 text-xl",
  };

  // Rounded classes
  const roundedClasses = {
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    full: "rounded-full",
    none: "rounded-none",
  };

  const combinedClasses = `
    ${baseClasses} 
    ${variantClasses[variant]} 
    ${sizeClasses[size]} 
    ${roundedClasses[rounded]} 
    ${fullWidth ? "w-full" : "w-auto"} 
    ${className}
  `.trim();

  // If href is provided, render as a Next.js Link
  if (href) {
    return (
      <Link href={href} className={combinedClasses} onClick={onClick}>
        {children}
      </Link>
    );
  }

  // Otherwise, render as a standard button
  return (
    <button
      type={type}
      className={combinedClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
