import Link from 'next/link';

interface ButtonProps {
    href?: string;
    onClick?: () => void;
    variant?: 'primary' | 'danger' | 'outline';
    children: React.ReactNode;
    className?: string;
}

const Button = ({ href, onClick, variant = 'primary', children, className = '' }: ButtonProps) => {
    const baseStyles = "px-8 py-3 font-bold uppercase text-sm tracking-widest transition-all rounded-sm flex items-center gap-2 inline-flex";

    const variants = {
        primary: "bg-primary text-white hover:bg-primary-dark",
        danger: "bg-[#D32F2F] text-white hover:bg-[#B71C1C]",
        outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white"
    };

    const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

    if (href) {
        return (
            <Link href={href} className={combinedClasses}>
                {children}
            </Link>
        );
    }

    return (
        <button onClick={onClick} className={combinedClasses}>
            {children}
        </button>
    );
};

export default Button;
