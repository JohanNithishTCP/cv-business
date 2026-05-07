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
  hasArrow?: boolean;
  arrowVariant?: "white" | "green";
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
  hasArrow = false,
  arrowVariant,
}) => {
  const isGreenArrow = arrowVariant === "green" || (variant === "white" && !arrowVariant);

  const content = (
    <>
      {children}
      {hasArrow && (
        <img 
          src={isGreenArrow ? "/emerald/images/corner-up-right-green.png" : "/emerald/images/corner-up-right.png"} 
          alt="arrow" 
          className={`ml-2 w-4 h-4 object-contain transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5 ${!isGreenArrow ? "brightness-0 invert" : ""}`}
        />
      )}
    </>
  );
  // Base classes
  const baseClasses = "inline-flex items-center justify-center font-semibold transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer";

  // Variant classes
  const variantClasses = {
    primary: "bg-[#014D65] hover:bg-[#013b4d] text-white shadow-sm",
    secondary: "bg-[#003642] hover:bg-[#00262e] text-white shadow-sm",
    outline: "border-2 border-[#014D65] text-[#014D65] hover:bg-[#014D65] hover:text-white",
    white: "bg-white text-[#014D65] hover:bg-[#F5F5F5] border border-[#014D65]",
    ghost: "bg-transparent hover:bg-[#F1F1F1] text-[#333333]",
  };

  // Size classes
  const sizeClasses = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-[16px]",
    lg: "px-8 py-4 text-[18px]",
    xl: "px-10 py-5 text-xl",
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

  if (href) {
    return (
      <Link href={href} className={combinedClasses} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={combinedClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </button>
  );
};

export default Button;
