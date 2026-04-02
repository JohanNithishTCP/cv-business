import Link from 'next/link';
import React from 'react';

interface ButtonProps {
    children: React.ReactNode;
    href?: string;
    onClick?: () => void;
    className?: string;
    variant?: 'primary' | 'secondary' | 'outline' | 'danger';
    size?: 'sm' | 'md' | 'lg';
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    children,
    href,
    onClick,
    className = '',
    variant = 'primary',
    size = 'md',
    type = 'button',
    disabled = false,
}) => {
    const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-300 rounded cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed';

    const variants = {
        primary: 'bg-[#002B49] text-white hover:bg-[#003d66] shadow-lg hover:shadow-xl',
        secondary: 'bg-[#BF0D3E] text-white hover:bg-[#a30b35] shadow-lg hover:shadow-xl',
        danger: 'bg-[#D32F2F] text-white hover:bg-[#b71c1c] shadow-lg hover:shadow-xl',
        outline: 'border-2 border-[#002B49] text-[#002B49] hover:bg-[#002B49] hover:text-white',
    };

    const sizes = {
        sm: 'px-4 py-1.5 text-xs',
        md: 'px-6 py-2 text-sm',
        lg: 'px-8 py-3 text-base',
    };

    const combinedClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

    if (href) {
        return (
            <Link href={href} className={combinedClasses}>
                {children}
            </Link>
        );
    }

    return (
        <button
            type={type}
            onClick={onClick}
            className={combinedClasses}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;
