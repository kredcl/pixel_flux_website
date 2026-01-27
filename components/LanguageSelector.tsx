"use client";

import { usePathname, useRouter } from "next/navigation";
import { i18n } from "@/app/i18n-config";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

// Flag SVGs (Minimalist & Sleek)
const ChileFlag = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24" width="24" height="18" className="rounded-[2px] shadow-sm">
        <rect width="32" height="24" fill="#d52b1e" />
        <rect width="32" height="12" fill="#fff" />
        <rect width="12" height="12" fill="#0039a6" />
        <path d="M6 3.5l1.2 3.6h3.8L8 9.3l1.1 3.5L6 10.6l-3.1 2.2L4 9.3l-3-2.2h3.8z" fill="#fff" />
    </svg>
);

const CanadaFlag = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24" width="24" height="18" className="rounded-[2px] shadow-sm">
        <rect width="32" height="24" fill="#bf0a30" />
        <rect x="8" width="16" height="24" fill="#fff" />
        <path d="M16 4l1.5 8h4.5l-3.5 2.5 1.5 5-4-3-4 3 1.5-5-3.5-2.5h4.5z" fill="#bf0a30" transform="scale(0.8) translate(4, 2)" />
    </svg>
);

export default function LanguageSelector() {
    const pathname = usePathname();
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const [currentLang, setCurrentLang] = useState<"es" | "en">(i18n.defaultLocale as "es" | "en");

    useEffect(() => {
        const segments = pathname.split("/");
        const locale = segments[1];
        if (i18n.locales.includes(locale as any)) {
            setCurrentLang(locale as any);
        }
    }, [pathname]);

    const handleLanguageChange = (locale: string) => {
        if (locale === currentLang) return;
        const segments = pathname.split("/");
        // Replace the locale segment
        if (i18n.locales.includes(segments[1] as any)) {
            segments[1] = locale;
        } else {
            // If no locale in path (e.g. root), add it (though middleware should handle this)
            segments.splice(1, 0, locale);
        }
        const newPath = segments.join("/");
        router.push(newPath || `/${locale}`);
        setIsOpen(false);
    };

    return (
        <div className="relative z-50">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 transition-colors border border-white/10 backdrop-blur-sm"
            >
                {currentLang === "es" ? <ChileFlag /> : <CanadaFlag />}
                <span className="text-sm font-medium uppercase text-gray-300 font-display">{currentLang}</span>
                <ChevronDown size={14} className={`text-gray-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full right-0 mt-2 w-36 bg-black/90 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl shadow-spring-green/5 overflow-hidden ring-1 ring-white/5"
                    >
                        <div className="p-1 space-y-1">
                            <button
                                onClick={() => handleLanguageChange("es")}
                                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg transition-all ${currentLang === "es" ? "bg-white/10" : "hover:bg-white/5"}`}
                            >
                                <div className="flex items-center gap-3">
                                    <ChileFlag />
                                    <span className={`text-sm font-medium ${currentLang === "es" ? "text-spring-green" : "text-gray-400"}`}>ES</span>
                                </div>
                                {currentLang === "es" && <div className="w-1.5 h-1.5 rounded-full bg-spring-green shadow-[0_0_8px_#05dc80]" />}
                            </button>
                            <button
                                onClick={() => handleLanguageChange("en")}
                                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg transition-all ${currentLang === "en" ? "bg-white/10" : "hover:bg-white/5"}`}
                            >
                                <div className="flex items-center gap-3">
                                    <CanadaFlag />
                                    <span className={`text-sm font-medium ${currentLang === "en" ? "text-spring-green" : "text-gray-400"}`}>EN</span>
                                </div>
                                {currentLang === "en" && <div className="w-1.5 h-1.5 rounded-full bg-spring-green shadow-[0_0_8px_#05dc80]" />}
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
