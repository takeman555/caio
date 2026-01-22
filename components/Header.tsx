"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "./Button";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const navigation = [
        { name: "About", href: "/about" },
        { name: "CAIOとは", href: "/caio" },
        { name: "サービス", href: "/services" },
        { name: "FAQ", href: "/faq" },
    ];

    return (
        <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <span className="text-2xl font-bold text-primary tracking-tight">
                            CAIO<span className="text-secondary">.</span>Service
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navigation.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="text-text hover:text-primary font-medium transition-colors"
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Button href="/contact" className="px-6 py-2 h-auto text-sm">
                            お問い合わせ
                        </Button>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-text"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-lg">
                    <div className="flex flex-col p-4 space-y-4">
                        {navigation.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="text-text hover:text-primary font-medium py-2"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Link
                            href="/contact"
                            className="text-primary font-bold py-2"
                            onClick={() => setIsOpen(false)}
                        >
                            お問い合わせ
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}
