import Link from "next/link";
import { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "white" | "dark" | "outline";
  size?: "sm" | "md" | "lg";
  showIcon?: boolean;
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
}: ButtonProps) {
  const sizeClasses = {
    sm: "pl-4 pr-1 py-1 text-[14px]",
    md: "pl-6 pr-1 py-1 text-[16px]",
    lg: "pl-8 pr-2 py-3 text-[18px]",
  };

  const iconSizes = {
    sm: { circle: "w-6 h-6", icon: 14 },
    md: { circle: "w-8 h-8", icon: 16 },
    lg: { circle: "w-10 h-10", icon: 20 },
  };

  const baseClasses =
    `inline-flex items-center justify-between gap-6 rounded-full font-semibold transition-all duration-300 cursor-pointer tracking-wider group ${sizeClasses[size]}`;

  const variants = {
    primary: "bg-[#84CFFA] text-[#0E0B06]",
    secondary: "bg-[#064163] text-white",
    white: "bg-white text-[#064163]",
    dark: "bg-[#1A1A1A] text-white",
    outline: "bg-transparent border border-white text-white",
  };

  const iconClasses = {
    primary: "bg-[#064163] text-white",
    secondary: "bg-[#84CFFA] text-[#064163]",
    white: "bg-[#064163] text-white",
    dark: "bg-white text-[#1A1A1A]",
    outline: "bg-white text-[#064163]",
  };

  const combinedClasses = `${baseClasses} ${variants[variant]} ${className}`.trim();

  const content = (
    <>
      <span className="whitespace-nowrap">{children}</span>
      {showIcon && (
        <div className={`${iconSizes[size].circle} rounded-full flex items-center justify-center transition-all duration-300 ${iconClasses[variant]}`}>
          <ArrowUpRight size={iconSizes[size].icon} className="group-hover:rotate-45 transition-transform duration-300" />
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
