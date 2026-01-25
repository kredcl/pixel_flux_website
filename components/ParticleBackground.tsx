"use client";

import React, { useEffect, useRef } from "react";

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    color: string;
    life: number;
    maxLife: number;
}

const ParticleBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let particles: Particle[] = [];
        let animationFrameId: number;
        let mouseX = -1000;
        let mouseY = -1000;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const createParticle = (isInitial = false): Particle => {
            const x = Math.random() * canvas.width;
            const y = isInitial ? Math.random() * canvas.height : canvas.height + 10;
            const size = Math.random() * 3 + 1;
            // Spring Green brand colors with varying opacity
            const opacity = Math.random() * 0.5 + 0.1;
            const color = `rgba(5, 220, 128, ${opacity})`;

            return {
                x,
                y,
                vx: (Math.random() - 0.5) * 0.5, // Slight horizontal drift
                vy: -(Math.random() * 1.5 + 0.5), // Upward movement
                size,
                color,
                life: 0,
                maxLife: Math.random() * 200 + 100,
            };
        };

        const init = () => {
            resizeCanvas();
            particles = [];
            const particleCount = Math.floor(window.innerWidth / 3); // Increased density
            for (let i = 0; i < particleCount; i++) {
                particles.push(createParticle(true));
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach((p, i) => {
                // Basic movement
                p.x += p.vx;
                p.y += p.vy;
                p.life++;

                // Mouse interaction (Repulsion)
                const dx = p.x - mouseX;
                const dy = p.y - mouseY;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const interactionRadius = 150;

                if (distance < interactionRadius) {
                    const forceDirectionX = dx / distance;
                    const forceDirectionY = dy / distance;
                    const force = (interactionRadius - distance) / interactionRadius;
                    const repulsionStrength = 2; // Adjustable strength

                    p.vx += forceDirectionX * force * repulsionStrength;
                    p.vy += forceDirectionY * force * repulsionStrength;
                }

                // Friction to return to normal speed
                p.vx *= 0.98;
                // Gently return to original upward speed if not affected by mouse
                if (p.vy > -0.5 && distance >= interactionRadius) {
                    p.vy -= 0.05;
                }

                // Draw
                ctx.fillStyle = p.color;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fill();

                // Reset if out of bounds or dead
                if (p.y < -10 || (p.y > canvas.height + 20 && p.life > 10) || p.x < -20 || p.x > canvas.width + 20) {
                    particles[i] = createParticle();
                }
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouseX = e.clientX - rect.left;
            mouseY = e.clientY - rect.top;
        };

        const handleMouseLeave = () => {
            mouseX = -1000;
            mouseY = -1000;
        };

        window.addEventListener("resize", resizeCanvas);
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseleave", handleMouseLeave);

        init();
        animate();

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseleave", handleMouseLeave);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 pointer-events-none z-0"
            style={{ background: 'transparent' }}
        />
    );
};

export default ParticleBackground;
