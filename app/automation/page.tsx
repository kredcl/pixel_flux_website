"use client";

import PageTransition from "@/components/PageTransition";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import {
    ArrowRight,
    Bot,
    Brain,
    FileText,
    Zap,
    Target,
    TrendingUp,
    DollarSign,
    Search,
    Cpu,
    Link2,
    RefreshCw,
    Sparkles,
    Terminal,
    ChevronRight,
    ChevronDown,
} from "lucide-react";

// Animated Counter Component
function AnimatedCounter({ target, suffix = "", prefix = "", duration = 2000 }: { target: number; suffix?: string; prefix?: string; duration?: number }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (isInView) {
            let startTime: number;
            const step = (timestamp: number) => {
                if (!startTime) startTime = timestamp;
                const progress = Math.min((timestamp - startTime) / duration, 1);
                setCount(Math.floor(progress * target));
                if (progress < 1) {
                    requestAnimationFrame(step);
                }
            };
            requestAnimationFrame(step);
        }
    }, [isInView, target, duration]);

    return (
        <span ref={ref} className="tabular-nums">
            {prefix}{count}{suffix}
        </span>
    );
}

// Typewriter Terminal Component
function TypewriterTerminal() {
    const [lines, setLines] = useState<{ text: string; complete: boolean }[]>([]);
    const ref = useRef(null);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const terminalLines = [
        "> Initializing Lead Scraper... DONE",
        "> Analyzing 500+ Leads with LLM Agent... DONE",
        "> Generating PDF Proposals via API... DONE",
        "> Efficiency increased by 1000%",
    ];

    useEffect(() => {
        if (isInView) {
            let lineIndex = 0;


            const typeNextLine = () => {
                if (lineIndex < terminalLines.length) {
                    let charIndex = 0;
                    const currentLine = terminalLines[lineIndex];

                    const typeChar = () => {
                        if (charIndex <= currentLine.length) {
                            setLines(prev => {
                                const newLines = [...prev];
                                // Ensure we're not exceeding current array bounds unexpectedly if reset happens
                                if (lineIndex === 0 && charIndex === 0) {
                                    return [{ text: "", complete: false }];
                                }

                                if (newLines.length <= lineIndex) {
                                    newLines.push({ text: currentLine.slice(0, charIndex), complete: false });
                                } else {
                                    newLines[lineIndex] = { text: currentLine.slice(0, charIndex), complete: charIndex === currentLine.length };
                                }
                                return newLines;
                            });
                            charIndex++;
                            timeoutRef.current = setTimeout(typeChar, 30);
                        } else {
                            lineIndex++;
                            timeoutRef.current = setTimeout(typeNextLine, 500);
                        }
                    };
                    typeChar();
                } else {
                    // Loop: Wait 3 seconds then restart
                    timeoutRef.current = setTimeout(() => {
                        setLines([]);
                        lineIndex = 0;
                        typeNextLine();
                    }, 3000);
                }
            };

            // Start only if lines are empty (initial start or restart)
            if (lines.length === 0) {
                timeoutRef.current = setTimeout(typeNextLine, 800);
            }

            return () => {
                if (timeoutRef.current) clearTimeout(timeoutRef.current);
            };
        }
    }, [isInView]);

    return (
        <div ref={ref} className="neon-border rounded-lg overflow-hidden">
            {/* Terminal Header */}
            <div className="bg-zinc-900 px-4 py-3 flex items-center gap-2 border-b border-white/10">
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex-1 text-center">
                    <span className="text-gray-500 text-sm font-mono">flux-engine — zsh</span>
                </div>
            </div>

            {/* Terminal Body */}
            <div className="bg-black/80 p-6 font-mono text-sm min-h-[200px]">
                {lines.map((line, i) => (
                    <div key={i} className="mb-2">
                        <span className={line.text.includes("DONE") || line.text.includes("1000%") ? "text-spring-green" : "text-gray-300"}>
                            {line.text}
                        </span>
                        {!line.complete && <span className="animate-pulse text-spring-green">▌</span>}
                    </div>
                ))}
                {lines.length === 0 && (
                    <span className="animate-pulse text-spring-green">▌</span>
                )}
                {lines.length === terminalLines.length && lines[lines.length - 1]?.complete && (
                    <div className="mt-4 text-spring-green animate-pulse">
                        Ready for next automation...
                    </div>
                )}
            </div>
        </div>
    );
}

// Bento Cards Data
const bentoCards = [
    {
        icon: Bot,
        title: "Inteligencia de Extracción",
        description: "Desarrollamos scrapers personalizados que monitorean competidores y extraen leads con precisión quirúrgica.",
        accent: "from-spring-green/20 to-emerald-600/10",
    },
    {
        icon: Brain,
        title: "Calificación con LLMs",
        description: "Modelos Gemini/GPT-4 que analizan la intención de compra y filtran leads por presupuesto y urgencia.",
        accent: "from-purple-500/20 to-spring-green/10",
    },
    {
        icon: FileText,
        title: "Automatización de Documentación",
        description: "Generación automática de propuestas y contratos vía API, integrados directamente con tu CRM.",
        accent: "from-blue-500/20 to-spring-green/10",
    },
];

// Statistics Data
const stats = [
    {
        value: 10,
        suffix: "x",
        label: "Aumento de Eficiencia",
        description: "Sustituimos 16 horas manuales por procesos de 45 segundos.",
        icon: Zap,
    },
    {
        value: 0,
        suffix: "%",
        label: "Error Humano",
        description: "Integridad total de datos y consistencia 24/7.",
        icon: Target,
    },
    {
        value: 300,
        prefix: "+",
        suffix: "%",
        label: "Capacidad de Prospección",
        description: "Escala tu alcance sin contratar personal adicional.",
        icon: TrendingUp,
    },
    {
        value: 0,
        special: "ROI Inmediato",
        label: "Retorno Garantizado",
        description: "Sistemas que se pagan solos en menos de 60 días.",
        icon: DollarSign,
    },
];

// Flux Engine Steps
const fluxEngineSteps = [
    {
        step: "01",
        title: "Auditoría de Procesos",
        description: "Mapeamos cada flujo de trabajo para identificar cuellos de botella y oportunidades de automatización.",
        icon: Search,
    },
    {
        step: "02",
        title: "Arquitectura de Agentes",
        description: "Diseñamos agentes de IA especializados que trabajan 24/7 sin supervisión.",
        icon: Cpu,
    },
    {
        step: "03",
        title: "Integración de Ecosistema",
        description: "Conectamos APIs, bases de datos y herramientas existentes en un flujo unificado.",
        icon: Link2,
    },
    {
        step: "04",
        title: "Optimización Continua",
        description: "Monitoreamos, ajustamos y mejoramos tus automatizaciones constantemente.",
        icon: RefreshCw,
    },
];

export default function Automation() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-spring-green selection:text-black">
            <Navbar />
            <PageTransition>
                {/* Hero Section */}
                <section className="min-h-[85vh] px-4 relative overflow-hidden flex items-center justify-center">
                    {/* Background Glow */}
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-spring-green/10 rounded-full blur-[200px]" />
                        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#16302b]/50 rounded-full blur-[150px]" />
                    </div>

                    <div className="max-w-5xl mx-auto text-center relative z-10 pt-16">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ type: "spring", stiffness: 100, damping: 20 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-spring-green/10 rounded-full text-spring-green text-sm font-medium mb-6">
                                <Bot size={16} />
                                Agentes de IA Autónomos
                            </div>
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight">
                                Orquestación de IA:{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-spring-green to-emerald-600">
                                    Convierte tu Operación en un Motor Autónomo
                                </span>
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto mb-10 leading-relaxed">
                                Diseñamos agentes de IA y flujos de trabajo que eliminan el trabajo manual,
                                califican oportunidades en tiempo real y multiplican la capacidad de tu equipo
                                sin aumentar tu plantilla.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center"
                        >
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-spring-green text-black font-bold rounded-lg hover:scale-105 hover:gap-3 transition-all duration-300 magnetic-btn [&:hover_svg]:rotate-0 shadow-lg shadow-spring-green/25"
                            >
                                Automatizar mi Negocio <ArrowRight size={24} className="transform -rotate-45 transition-transform duration-300" />
                            </Link>
                            <Link
                                href="#casos"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-medium rounded-lg hover:border-spring-green/50 hover:bg-spring-green/5 transition-all duration-300"
                            >
                                Ver Casos de Éxito <ChevronRight size={20} />
                            </Link>
                        </motion.div>
                    </div>
                </section>

                {/* Visual Bridge - The Connector */}
                <div className="relative py-6 flex flex-col items-center">
                    {/* Glowing Line with Light Beam Animation */}
                    <div className="relative h-16 w-px">
                        {/* Base Line */}
                        <div className="absolute inset-0 bg-[#16302b]" />
                        {/* Light Beam */}
                        <motion.div
                            className="absolute top-0 left-0 w-full h-6 bg-gradient-to-b from-spring-green via-spring-green/50 to-transparent"
                            animate={{ y: [0, 40, 0] }}
                            transition={{
                                duration: 1.8,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            style={{ filter: "blur(2px)" }}
                        />
                    </div>

                    {/* Hook Phrase */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ type: "spring", stiffness: 80, damping: 20 }}
                        className="text-center mt-4"
                    >
                        <p className="text-white/60 text-sm tracking-[0.3em] uppercase mb-2">
                            Del caos manual a la precisión algorítmica
                        </p>
                        <motion.div
                            animate={{ y: [0, 5, 0] }}
                            transition={{
                                duration: 1.2,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        >
                            <ChevronDown size={20} className="mx-auto text-spring-green/60" />
                        </motion.div>
                    </motion.div>
                </div>

                {/* Section 2: Inteligencia Operativa (Bento Grid) */}
                <section className="py-24 bg-zinc-950/50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ type: "spring", stiffness: 100, damping: 20 }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
                                Inteligencia Operativa{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-spring-green to-emerald-600">
                                    Extremo a Extremo
                                </span>
                            </h2>
                            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                                Un flujo de trabajo completo que transforma datos en resultados.
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-3 gap-6">
                            {bentoCards.map((card, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ type: "spring", stiffness: 80, damping: 20, delay: i * 0.15 }}
                                    className="neon-border p-8 group relative overflow-hidden"
                                >
                                    {/* Gradient Overlay */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${card.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                                    <div className="relative z-10">
                                        <div className="w-14 h-14 bg-spring-green/10 rounded-xl flex items-center justify-center mb-6 text-spring-green group-hover:scale-110 group-hover:bg-spring-green/20 transition-all duration-300">
                                            <card.icon size={28} />
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-4">{card.title}</h3>
                                        <p className="text-gray-400 leading-relaxed">{card.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Section 6: Terminal de Procesamiento (Wow Effect) */}
                <section className="py-24">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ type: "spring", stiffness: 100, damping: 20 }}
                            className="text-center mb-12"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-spring-green/10 rounded-full text-spring-green text-sm font-medium mb-6">
                                <Terminal size={16} />
                                Live Demo
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
                                Terminal de{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-spring-green to-emerald-600">
                                    Procesamiento
                                </span>
                            </h2>
                            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                                Observa cómo nuestros agentes trabajan en tiempo real.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ type: "spring", stiffness: 60, damping: 20 }}
                        >
                            <TypewriterTerminal />
                        </motion.div>
                    </div>
                </section>

                {/* Section 3: Multiplicador de Eficiencia (Statistics) */}
                <section className="py-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ type: "spring", stiffness: 100, damping: 20 }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
                                Multiplicador de{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-spring-green to-emerald-600">
                                    Eficiencia
                                </span>
                            </h2>
                            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                                Resultados medibles que transforman operaciones.
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {stats.map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ type: "spring", stiffness: 80, damping: 20, delay: i * 0.1 }}
                                    className="neon-border p-6 text-center group cursor-pointer"
                                >
                                    <div className="w-12 h-12 mx-auto mb-4 bg-spring-green/10 rounded-lg flex items-center justify-center text-spring-green group-hover:bg-spring-green/20 transition-colors">
                                        <stat.icon size={24} />
                                    </div>
                                    <p className={`font-bold text-spring-green mb-2 ${stat.special ? "text-3xl md:text-4xl" : "text-5xl md:text-6xl"}`}>
                                        {stat.special ? (
                                            stat.special
                                        ) : (
                                            <AnimatedCounter target={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                                        )}
                                    </p>
                                    <p className="text-white font-semibold mb-1">{stat.label}</p>
                                    <p className="text-gray-500 text-sm">{stat.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Section 4: The Flux Engine (Technical Process) */}
                <section className="py-24 bg-zinc-950/50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ type: "spring", stiffness: 100, damping: 20 }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
                                The{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-spring-green to-emerald-600">
                                    Flux Engine
                                </span>
                            </h2>
                            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                                Nuestra metodología para automatizar tu negocio.
                            </p>
                        </motion.div>

                        {/* Vertical Timeline */}
                        <div className="max-w-3xl mx-auto relative">
                            {/* Timeline Line */}
                            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-spring-green/50 via-spring-green/20 to-transparent" />

                            {fluxEngineSteps.map((step, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ type: "spring", stiffness: 60, damping: 20, delay: i * 0.15 }}
                                    className={`relative flex items-center gap-8 mb-12 last:mb-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                        }`}
                                >
                                    {/* Timeline Dot */}
                                    <div className="absolute left-8 md:left-1/2 w-4 h-4 -translate-x-1/2 bg-spring-green rounded-full shadow-lg shadow-spring-green/50 z-10" />

                                    {/* Content Card */}
                                    <div className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"}`}>
                                        <div className="neon-border p-6 group">
                                            <div className={`flex items-center gap-3 mb-3 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                                                <span className="text-spring-green font-mono text-sm">{step.step}</span>
                                                <div className="w-10 h-10 bg-spring-green/10 rounded-lg flex items-center justify-center text-spring-green group-hover:bg-spring-green/20 transition-colors">
                                                    <step.icon size={20} />
                                                </div>
                                            </div>
                                            <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                                            <p className="text-gray-400 text-sm">{step.description}</p>
                                        </div>
                                    </div>

                                    {/* Spacer for alternating layout */}
                                    <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Section 5: Automatización Accesible (MiPEs) */}
                <section className="py-24 relative overflow-hidden">
                    {/* Background Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#16302b] to-black" />
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-spring-green/10 rounded-full blur-[150px]" />
                    </div>

                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 40, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ type: "spring", stiffness: 80, damping: 20 }}
                            className="text-center"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-spring-green/10 rounded-full text-spring-green text-sm font-medium mb-6">
                                <Sparkles size={16} />
                                Soluciones MiPE
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
                                Potencia de Élite para{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-spring-green to-emerald-600">
                                    Pequeños Empresarios
                                </span>
                            </h2>
                            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
                                Ofrecemos soluciones escalables mediante suscripción, llevando tecnología
                                Fortune 500 al alcance de tu emprendimiento. Sin costos prohibitivos,
                                sin obsolescencia, sin complicaciones.
                            </p>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-spring-green text-black font-bold rounded-lg hover:scale-105 hover:gap-3 transition-all duration-300 magnetic-btn [&:hover_svg]:rotate-0"
                            >
                                Conocer Planes <ArrowRight size={24} className="transform -rotate-45 transition-transform duration-300" />
                            </Link>
                        </motion.div>
                    </div>
                </section>



                <Footer />
            </PageTransition>
        </main>
    );
}
