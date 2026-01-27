"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code, Bot, Mail, Home } from "lucide-react";
import LanguageSelector from "./LanguageSelector";

export default function Navbar({ dict }: { dict: any }) {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const params = useParams();
    const lang = params.lang as string;

    const navItems = [
        { name: dict.nav.home, href: `/${lang}`, icon: Home },
        { name: dict.nav.development, href: `/${lang}/development`, icon: Code },
        { name: dict.nav.automation, href: `/${lang}/automation`, icon: Bot },
        { name: dict.nav.contact, href: `/${lang}/contact`, icon: Mail },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href={`/${lang}`} className="flex items-center gap-2 group">
                        <Image
                            src="/assets/images/logo_pxf_n2.png"
                            alt="Pixel Flux Logo"
                            width={32}
                            height={32}
                            className="group-hover:scale-110 group-hover:rotate-90 transition-transform duration-500"
                        />
                        <span className="text-2xl font-bold font-display tracking-wider text-white">
                            PIXEL <span className="text-spring-green">FLUX</span>
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`relative text-sm font-medium transition-colors hover:text-spring-green ${isActive ? "text-spring-green" : "text-gray-300"
                                        }`}
                                >
                                    {item.name}
                                    {isActive && (
                                        <motion.div
                                            layoutId="navbar-indicator"
                                            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-spring-green shadow-[0_0_10px_#05dc80]"
                                        />
                                    )}
                                </Link>
                            );
                        })}
                        <LanguageSelector />
                    </div>

                    {/* Mobile Menu Button - Includes Lang Selector in Mobile Header or Menu? Usually Menu */}
                    <div className="md:hidden flex items-center gap-4">
                        <LanguageSelector />
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white hover:text-spring-green transition-colors"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-black border-b border-white/10 overflow-hidden"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-2">
                            {navItems.map((item) => {
                                const isActive = pathname === item.href;
                                return (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className={`flex items-center gap-4 px-4 py-3 rounded-lg border border-transparent transition-all ${isActive
                                            ? "bg-spring-green/10 border-spring-green/20 text-spring-green"
                                            : "text-gray-400 hover:text-white hover:bg-white/5"
                                            }`}
                                    >
                                        <item.icon size={20} />
                                        <span className="font-medium">{item.name}</span>
                                    </Link>
                                );
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
