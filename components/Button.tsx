import Link from "next/link";
import { cn } from "@/lib/utils";
import React from "react";

type ButtonProps = {
    variant?: "primary" | "secondary" | "gold";
    children: React.ReactNode;
    className?: string;
    href?: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
};

export default function Button({
    variant = "primary",
    children,
    className,
    href,
    onClick,
    type = "button",
}: ButtonProps) {
    const baseStyles = "inline-flex items-center justify-center px-8 py-4 rounded-lg font-bold tracking-wider transition-all duration-300 relative overflow-hidden";

    const variants = {
        primary: "bg-primary text-white shadow-lg hover:shadow-xl hover:bg-slate-900 border border-primary/50",
        secondary: "bg-white border border-primary text-primary hover:bg-gray-50",
        gold: "bg-gold-gradient text-white shadow-md hover:shadow-lg transform hover:-translate-y-0.5",
    };

    const styles = cn(baseStyles, variants[variant], className);

    if (href) {
        return (
            <Link href={href} className={styles}>
                {children}
            </Link>
        );
    }

    return (
        <button type={type} className={styles} onClick={onClick}>
            {children}
        </button>
    );
}
