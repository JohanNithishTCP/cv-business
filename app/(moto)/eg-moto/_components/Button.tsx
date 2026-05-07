import React, { ReactNode } from "react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "white" | "dark" | "outline";
  size?: "sm" | "md" | "lg";
  showIcon?: boolean;
  uppercase?: boolean;
}

export default function Button({
  children,
  href,
  onClick,
  className = "",
  type = "button",
  variant = "primary",
  size = "md",
  showIcon = true,
  uppercase = false,
}: ButtonProps) {
  const sizeClasses = {
    sm: "px-5 py-2 text-[14px]",
    md: "px-8 py-3 text-[16px]",
    lg: "px-10 py-4 text-[20px]",
  };

  const iconSizes = {
    sm: 14,
    md: 20,
    lg: 24,
  };

  const baseClasses =
    `inline-flex items-center justify-center gap-4 rounded-xl font-bold transition-all duration-300 cursor-pointer tracking-normal group ${sizeClasses[size]}`;

  const variants = {
    primary: "bg-[#0068B3] text-white hover:bg-[#00589a]",
    secondary: "bg-[#D8EFFF] text-[#0068B3] hover:bg-[#c0e4ff]",
    white: "bg-white text-[#0068B3] hover:bg-gray-50",
    dark: "bg-[#333333] text-white hover:bg-black",
    outline: "bg-transparent border border-white text-white hover:bg-white hover:text-[#0068B3]",
  };

  const combinedClasses = `${baseClasses} ${variants[variant]} ${className}`.trim();

  const content = (
    <>
      <span className={`whitespace-nowrap ${uppercase ? 'uppercase' : ''}`}>{children}</span>
      {showIcon && (
        <div className="flex items-center justify-center transition-all duration-300 group-hover:translate-x-1">
          <img src="/nihon/images/arrow.png" alt="Icon" className="transition-transform duration-300" width={iconSizes[size]} height={iconSizes[size]} />
        </div>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={combinedClasses} onClick={onClick}>
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
