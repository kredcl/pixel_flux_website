"use client";

import PageTransition from "@/components/PageTransition";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import {
    Laptop,
    Smartphone,
    CheckCircle,
    Zap,
    Timer,
    Code2,
    Search,
    Shield,
    Rocket,
    ArrowRight,
    ClipboardList,
    Palette,
    Cpu,
    Cloud,
    Utensils,
    Check,
    X,
    ChevronDown,
} from "lucide-react";

// Animated Counter Component
function AnimatedCounter({ target, suffix = "", duration = 2000 }: { target: number; suffix?: string; duration?: number }) {
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
            {count}{suffix}
        </span>
    );
}

// Statistics data
const stats = [
    {
        value: 99,
        suffix: "/100",
        label: "Puntuación en Google Core Web Vitals",
        description: "Velocidad pura que Google ama.",
        icon: Zap,
    },
    {
        value: 1.1,
        prefix: "< ",
        suffix: "s",
        label: "Tiempo de carga promedio",
        description: "Cero fricción, máxima retención.",
        icon: Timer,
    },
    {
        value: 100,
        suffix: "%",
        label: "Código nativo y escalable",
        description: "Sin plantillas pesadas ni dependencias obsoletas.",
        icon: Code2,
    },
    {
        value: 0,
        special: "SEO-First",
        label: "Arquitectura optimizada",
        description: "Diseñada para que tu negocio sea el primero en ser encontrado.",
        icon: Search,
    },
];

// Comparison table data
const comparisonData = [
    {
        aspect: "Tecnología",
        conventional: "WordPress/Plantillas",
        pixelFlux: "Next.js & React (High-End)",
    },
    {
        aspect: "Velocidad",
        conventional: "Lenta por plugins",
        pixelFlux: "Carga Instantánea (Serverless)",
    },
    {
        aspect: "Seguridad",
        conventional: "Vulnerable",
        pixelFlux: "Arquitectura Blindada",
    },
    {
        aspect: "Escalabilidad",
        conventional: "Muy limitada",
        pixelFlux: "Preparada para el futuro",
    },
];

// Flux Blueprint steps
const fluxBlueprint = [
    {
        step: "01",
        title: "Auditoría & Estrategia",
        description: "Entendemos tu modelo de negocio antes de tocar el código.",
        icon: ClipboardList,
    },
    {
        step: "02",
        title: "Prototipado de Alta Fidelidad",
        description: "Validamos la experiencia de usuario (UX) con diseños interactivos.",
        icon: Palette,
    },
    {
        step: "03",
        title: "Vibe Coding & Desarrollo",
        description: "Programación ágil asistida por IA para una precisión técnica del 100%.",
        icon: Cpu,
    },
    {
        step: "04",
        title: "Despliegue Cloud Start-up",
        description: "Lanzamiento optimizado en nuestra infraestructura de Hostinger.",
        icon: Cloud,
    },
];

export default function Development() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-spring-green selection:text-black">
            <Navbar />
            <PageTransition>
                {/* Hero Section */}
                <section className="pt-32 pb-20 px-4 max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ type: "spring", stiffness: 100, damping: 20 }}
                        className="text-center mb-20"
                    >
                        <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
                            Desarrollo{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-spring-green to-emerald-600">
                                Web y Apps
                            </span>
                        </h1>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            Creamos sitios web perfectos y aplicaciones robustas utilizando las últimas tecnologías.
                        </p>
                    </motion.div>

                    {/* Existing Service Cards - PRESERVED */}
                    <div className="grid md:grid-cols-2 gap-12 mb-8">
                        <motion.div
                            initial={{ opacity: 0, y: 50, scale: 0.9 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 80, damping: 20 }}
                            className="neon-border p-8 group"
                        >
                            <Laptop className="w-12 h-12 text-spring-green mb-6 group-hover:scale-110 transition-transform" />
                            <h2 className="text-3xl font-bold mb-4">Desarrollo Web</h2>
                            <ul className="space-y-3 text-gray-300">
                                <li className="flex items-center gap-3">
                                    <CheckCircle className="text-spring-green flex-shrink-0" size={20} /> Next.js y React
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle className="text-spring-green flex-shrink-0" size={20} /> Tailwind CSS y Framer Motion
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle className="text-spring-green flex-shrink-0" size={20} /> Optimización SEO
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle className="text-spring-green flex-shrink-0" size={20} /> Integración CMS
                                </li>
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 50, scale: 0.9 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.15 }}
                            className="neon-border p-8 group"
                        >
                            <Smartphone className="w-12 h-12 text-spring-green mb-6 group-hover:scale-110 transition-transform" />
                            <h2 className="text-3xl font-bold mb-4">Desarrollo de Apps</h2>
                            <ul className="space-y-3 text-gray-300">
                                <li className="flex items-center gap-3">
                                    <CheckCircle className="text-spring-green flex-shrink-0" size={20} /> React Native / Expo
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle className="text-spring-green flex-shrink-0" size={20} /> Soporte Multiplataforma
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle className="text-spring-green flex-shrink-0" size={20} /> Rendimiento Nativo
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle className="text-spring-green flex-shrink-0" size={20} /> Despliegue en App Store
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                </section>

                {/* Visual Bridge - Scroll Hook */}
                <div className="relative py-4 flex flex-col items-center">
                    {/* Glowing Line with Pulse Animation */}
                    <div className="relative h-16 w-px">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-spring-green/50 to-transparent" />
                        <motion.div
                            className="absolute top-0 left-0 w-full h-6 bg-gradient-to-b from-spring-green to-transparent"
                            animate={{ y: [0, 40, 0] }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            style={{ filter: "blur(2px)" }}
                        />
                    </div>

                    {/* Scroll Hook Text */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mt-3"
                    >
                        <p className="text-[#606060] text-sm tracking-wider uppercase mb-2">
                            La tecnología es el motor. Los datos son la prueba.
                        </p>
                        <motion.div
                            animate={{ y: [0, 5, 0] }}
                            transition={{
                                duration: 1.2,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        >
                            <ChevronDown size={18} className="mx-auto text-spring-green/50" />
                        </motion.div>
                    </motion.div>
                </div>

                {/* Section 1: Ingeniería de Alto Rendimiento (Statistics) */}
                <section className="pt-16 pb-24 bg-zinc-950/50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ type: "spring", stiffness: 100, damping: 20 }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
                                Ingeniería de{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-spring-green to-emerald-600">
                                    Alto Rendimiento
                                </span>
                            </h2>
                            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                                Métricas que demuestran nuestra excelencia técnica.
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
                                    <p className="text-4xl md:text-5xl font-bold text-spring-green mb-2">
                                        {stat.special ? (
                                            stat.special
                                        ) : (
                                            <>
                                                {stat.prefix}
                                                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                                            </>
                                        )}
                                    </p>
                                    <p className="text-white font-semibold mb-1">{stat.label}</p>
                                    <p className="text-gray-500 text-sm">{stat.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Section 2: Arquitectura Superior vs. Webs Convencionales */}
                <section className="py-24">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ type: "spring", stiffness: 100, damping: 20 }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
                                Arquitectura{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-spring-green to-emerald-600">
                                    Superior
                                </span>
                            </h2>
                            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                                Comparativa vs. Webs Convencionales
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ type: "spring", stiffness: 60, damping: 20 }}
                            className="glass-card overflow-hidden rounded-2xl"
                        >
                            {/* Table Header */}
                            <div className="grid grid-cols-3 gap-0 border-b border-white/10">
                                <div className="p-6 bg-white/5">
                                    <p className="text-gray-400 font-medium">Aspecto</p>
                                </div>
                                <div className="p-6 bg-white/5 border-l border-white/10">
                                    <p className="text-gray-400 font-medium">WordPress / Plantillas</p>
                                </div>
                                <div className="p-6 neon-border border-0 border-l border-white/10 scale-[1.02] relative z-10 bg-spring-green/5">
                                    <p className="text-spring-green font-bold">Arquitectura Pixel Flux</p>
                                </div>
                            </div>

                            {/* Table Rows */}
                            {comparisonData.map((row, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="grid grid-cols-3 gap-0 border-b border-white/5 last:border-0 cursor-pointer hover:bg-white/5 transition-colors"
                                >
                                    <div className="p-6">
                                        <p className="text-white font-medium">{row.aspect}</p>
                                    </div>
                                    <div className="p-6 border-l border-white/10 flex items-center gap-2">
                                        <X size={16} className="text-red-400 flex-shrink-0" />
                                        <p className="text-gray-400">{row.conventional}</p>
                                    </div>
                                    <div className="p-6 border-l border-white/10 bg-spring-green/5 flex items-center gap-2">
                                        <Check size={16} className="text-spring-green flex-shrink-0" />
                                        <p className="text-spring-green font-medium">{row.pixelFlux}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* Section 3: Profundización */}
                <section className="py-24 bg-zinc-950/50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -60 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ type: "spring", stiffness: 60, damping: 20 }}
                            >
                                <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
                                    Desarrollo Web y{" "}
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-spring-green to-emerald-600">
                                        Ecosistemas de Apps
                                    </span>
                                </h2>
                                <p className="text-2xl text-spring-green font-semibold mb-6">
                                    Construimos más que interfaces; creamos activos digitales.
                                </p>
                                <p className="text-lg text-gray-400 leading-relaxed">
                                    En Pixel Flux Creative, el desarrollo web no es un proceso aislado.
                                    Creamos aplicaciones web progresivas (PWA) que se sienten como apps
                                    nativas y aplicaciones móviles robustas que escalan junto con tu visión.
                                    Utilizamos el poder de Next.js para garantizar que tu sitio sea una
                                    herramienta de marketing imparable.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 60 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ type: "spring", stiffness: 60, damping: 20, delay: 0.2 }}
                                className="grid grid-cols-2 gap-4"
                            >
                                {[
                                    { icon: Laptop, label: "PWA Ready" },
                                    { icon: Smartphone, label: "Apps Nativas" },
                                    { icon: Rocket, label: "Alto Rendimiento" },
                                    { icon: Shield, label: "Seguridad Total" },
                                ].map((item, i) => (
                                    <div
                                        key={i}
                                        className="neon-border p-6 text-center group"
                                    >
                                        <item.icon className="w-10 h-10 mx-auto mb-3 text-spring-green group-hover:scale-110 transition-transform" />
                                        <p className="text-white font-medium">{item.label}</p>
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Section 4: Flux Blueprint (Nuestro Proceso) */}
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
                                The{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-spring-green to-emerald-600">
                                    Flux Blueprint
                                </span>
                            </h2>
                            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                                Nuestro proceso probado para resultados excepcionales.
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {fluxBlueprint.map((step, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 60, scale: 0.85, rotateX: 15 }}
                                    whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ type: "spring", stiffness: 70, damping: 18, delay: i * 0.12 }}
                                    className="glass-card neon-border p-6 group"
                                >
                                    <span className="step-number text-4xl font-bold font-display block mb-4">
                                        {step.step}
                                    </span>
                                    <div className="w-10 h-10 bg-spring-green/10 rounded-lg flex items-center justify-center mb-4 text-spring-green group-hover:bg-spring-green/20 transition-colors">
                                        <step.icon size={20} />
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                                    <p className="text-gray-400 text-sm">{step.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Section 5: Soluciones Especializadas para MiPEs */}
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
                                <Utensils size={16} />
                                Soluciones MiPE
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
                                Sistemas{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-spring-green to-emerald-600">
                                    Listos para el Mercado
                                </span>
                            </h2>
                            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
                                Entendemos los desafíos de las micro y pequeñas empresas. Por eso, hemos
                                desarrollado soluciones específicas como nuestros{" "}
                                <span className="text-spring-green font-semibold">Smart Dining Systems</span>,
                                permitiendo que negocios gastronómicos accedan a tecnología de punta mediante suscripción.
                            </p>
                            <Link
                                href="/#ecosistema-mipe"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-spring-green text-black font-bold rounded-lg hover:scale-105 hover:gap-3 transition-all duration-300 magnetic-btn [&:hover_svg]:rotate-0"
                            >
                                Conocer Smart Dining Systems <ArrowRight size={24} className="transform -rotate-45 transition-transform duration-300" />
                            </Link>
                        </motion.div>
                    </div>
                </section>

                <Footer />
            </PageTransition>
        </main>
    );
}
