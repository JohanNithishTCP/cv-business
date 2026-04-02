import Link from 'next/link';
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    children: React.ReactNode;
    href?: string;
    target?: string;
}

export const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    size = 'md',
    className = '',
    children,
    href,
    target,
    ...props
}) => {
    const baseStyles = "inline-flex items-center justify-center rounded-full font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
        primary: "bg-[#08949E] text-white hover:bg-[#067a82] ",
        secondary: "bg-white text-[#08949E] hover:bg-gray-100 focus:ring-white border border-transparent",
        outline: "border-2 border-[#08949E] text-[#08949E] hover:bg-[#F6F6F6]! hover:text-[#08949E]",
        ghost: "bg-transparent text-[#08949E] hover:bg-[#08949E]/10 ",
    };

    const sizes = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
    };

    const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

    if (href) {
        if (href.startsWith('http') || target === '_blank') {
            return (
                <a href={href} target={target} className={combinedClassName}>
                    {children}
                </a>
            );
        }
        return (
            <Link href={href} className={combinedClassName}>
                {children}
            </Link>
        );
    }

    return (
        <button
            className={combinedClassName}
            {...props}
        >
            {children}
        </button>
    );
};

