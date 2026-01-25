"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseEnter = () => setIsVisible(true);
        const handleMouseLeave = () => setIsVisible(false);

        // Detect hovering over interactive elements
        const handleElementHover = () => {
            const interactiveElements = document.querySelectorAll(
                'a, button, [role="button"], input, textarea, select, .cursor-pointer'
            );

            interactiveElements.forEach((el) => {
                el.addEventListener("mouseenter", () => setIsHovering(true));
                el.addEventListener("mouseleave", () => setIsHovering(false));
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        document.body.addEventListener("mouseenter", handleMouseEnter);
        document.body.addEventListener("mouseleave", handleMouseLeave);

        // Run after a short delay to ensure DOM is ready
        const timeout = setTimeout(handleElementHover, 100);

        // Re-run on route changes (for Next.js)
        const observer = new MutationObserver(() => {
            handleElementHover();
        });
        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            document.body.removeEventListener("mouseenter", handleMouseEnter);
            document.body.removeEventListener("mouseleave", handleMouseLeave);
            clearTimeout(timeout);
            observer.disconnect();
        };
    }, [isVisible]);

    if (!isVisible) return null;

    return (
        <motion.div
            className="fixed top-0 left-0 pointer-events-none z-[9999]"
            animate={{
                x: position.x - 10,
                y: position.y - 2,
                rotate: isHovering ? 20 : 0,
                scale: isHovering ? 1.3 : 1,
            }}
            transition={{
                type: "spring",
                stiffness: 500,
                damping: 28,
                mass: 0.5,
            }}
        >
            {/* Pure triangle cursor - simple equilateral triangle pointing right */}
            <svg
                width="20"
                height="18"
                viewBox="0 0 20 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                    filter: isHovering
                        ? "drop-shadow(0 0 10px rgba(5, 220, 128, 0.9))"
                        : "drop-shadow(0 0 4px rgba(5, 220, 128, 0.5))",
                }}
            >
                <path
                    d="M2 2L18 9L2 16V2Z"
                    fill={isHovering ? "#05dc80" : "#02674f"}
                    stroke={isHovering ? "#000000" : "#05dc80"}
                    strokeWidth="2"
                    strokeLinejoin="round"
                />
            </svg>
        </motion.div>
    );
};

export default CustomCursor;
