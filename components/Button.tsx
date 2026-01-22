import Link from "next/link";
import { cn } from "@/lib/utils";
import React from "react";

type ButtonProps = {
    variant?: "primary" | "secondary";
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
    const baseStyles = "inline-flex items-center justify-center px-8 py-4 rounded-lg font-medium transition-all duration-300";

    const variants = {
        primary: "bg-primary text-white hover:bg-opacity-90 shadow-md hover:shadow-lg",
        secondary: "bg-transparent border border-primary text-primary hover:bg-primary hover:text-white",
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
