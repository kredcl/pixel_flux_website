"use client";

import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";

interface XRayScannerProps {
    className?: string;
}

export default function XRayScanner({ className = "" }: XRayScannerProps) {
    const [scanPosition, setScanPosition] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    // Continuous scan animation
    useEffect(() => {
        const interval = setInterval(() => {
            setScanPosition((prev) => (prev >= 100 ? 0 : prev + 0.5));
        }, 30);
        return () => clearInterval(interval);
    }, []);

    return (
        <div ref={containerRef} className={`relative overflow-hidden rounded-xl ${className}`}>
            {/* UI Mockup Layer (Visible) */}
            <div className="relative z-10 bg-zinc-900/80 backdrop-blur-xl border border-white/10 rounded-xl p-6">
                {/* Mock Header */}
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-spring-green/20 rounded-lg" />
                        <div>
                            <div className="h-4 w-32 bg-white/20 rounded" />
                            <div className="h-3 w-20 bg-white/10 rounded mt-1" />
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <div className="h-8 w-20 bg-spring-green/20 rounded" />
                        <div className="h-8 w-8 bg-white/10 rounded" />
                    </div>
                </div>

                {/* Mock Content Grid */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="bg-white/5 rounded-lg p-4">
                            <div className="h-16 bg-white/10 rounded mb-3" />
                            <div className="h-3 w-full bg-white/10 rounded mb-2" />
                            <div className="h-3 w-2/3 bg-white/10 rounded" />
                        </div>
                    ))}
                </div>

                {/* Mock Chart */}
                <div className="bg-white/5 rounded-lg p-4">
                    <div className="flex items-end gap-2 h-20">
                        {[40, 65, 35, 80, 55, 70, 45, 90, 60, 75].map((h, i) => (
                            <div
                                key={i}
                                className="flex-1 bg-gradient-to-t from-spring-green/40 to-spring-green/10 rounded-t"
                                style={{ height: `${h}%` }}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Wireframe Layer (Hidden, revealed by scanner) */}
            <div
                className="absolute inset-0 z-20 pointer-events-none"
                style={{
                    clipPath: `inset(0 ${100 - scanPosition}% 0 ${Math.max(0, scanPosition - 15)}%)`
                }}
            >
                <div className="w-full h-full bg-black/90 backdrop-blur-sm border border-spring-green/30 rounded-xl p-6">
                    {/* Wireframe Header */}
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 border border-spring-green/50 rounded-lg flex items-center justify-center">
                                <span className="text-spring-green text-xs font-mono">IMG</span>
                            </div>
                            <div>
                                <div className="h-4 w-32 border border-spring-green/30 rounded flex items-center px-2">
                                    <span className="text-spring-green/70 text-xs font-mono">h1.title</span>
                                </div>
                                <div className="h-3 w-20 border border-spring-green/20 rounded mt-1 flex items-center px-1">
                                    <span className="text-spring-green/50 text-[8px] font-mono">span</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <div className="h-8 w-20 border border-spring-green/40 rounded flex items-center justify-center">
                                <span className="text-spring-green/70 text-xs font-mono">btn</span>
                            </div>
                            <div className="h-8 w-8 border border-spring-green/30 rounded flex items-center justify-center">
                                <span className="text-spring-green/50 text-xs font-mono">⋮</span>
                            </div>
                        </div>
                    </div>

                    {/* Wireframe Grid */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="border border-spring-green/30 rounded-lg p-4">
                                <div className="h-16 border border-dashed border-spring-green/40 rounded mb-3 flex items-center justify-center">
                                    <span className="text-spring-green/60 text-xs font-mono">div.card</span>
                                </div>
                                <div className="h-3 w-full border border-spring-green/20 rounded mb-2" />
                                <div className="h-3 w-2/3 border border-spring-green/20 rounded" />
                            </div>
                        ))}
                    </div>

                    {/* Wireframe Chart */}
                    <div className="border border-spring-green/30 rounded-lg p-4">
                        <div className="flex items-end gap-2 h-20">
                            {[40, 65, 35, 80, 55, 70, 45, 90, 60, 75].map((h, i) => (
                                <div
                                    key={i}
                                    className="flex-1 border border-spring-green/50 rounded-t"
                                    style={{ height: `${h}%` }}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Scanner Laser Bar */}
            <motion.div
                className="absolute top-0 bottom-0 w-1 z-30 pointer-events-none"
                style={{
                    left: `${scanPosition}%`,
                    background: "linear-gradient(180deg, transparent 0%, #05dc80 50%, transparent 100%)",
                    boxShadow: "0 0 20px 5px rgba(5, 220, 128, 0.5), 0 0 40px 10px rgba(5, 220, 128, 0.3)"
                }}
            />

            {/* Scanner Glow Effect */}
            <div
                className="absolute top-0 bottom-0 w-20 z-25 pointer-events-none"
                style={{
                    left: `calc(${scanPosition}% - 40px)`,
                    background: "linear-gradient(90deg, transparent 0%, rgba(5, 220, 128, 0.1) 50%, transparent 100%)"
                }}
            />
        </div>
    );
}
