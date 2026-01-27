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
import { useParams } from "next/navigation";

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

export default function DevelopmentPage({ dict }: { dict: any }) {
    const params = useParams();
    const lang = params.lang as string;

    const stats = [
        {
            value: 99,
            suffix: "/100",
            label: dict.development.performance.stats.web_vitals.label,
            description: dict.development.performance.stats.web_vitals.desc,
            icon: Zap,
        },
        {
            value: 1.1,
            prefix: "< ",
            suffix: "s",
            label: dict.development.performance.stats.load_time.label,
            description: dict.development.performance.stats.load_time.desc,
            icon: Timer,
        },
        {
            value: 100,
            suffix: "%",
            label: dict.development.performance.stats.code_quality.label,
            description: dict.development.performance.stats.code_quality.desc,
            icon: Code2,
        },
        {
            value: 0,
            special: dict.development.performance.stats.seo.special,
            label: dict.development.performance.stats.seo.label,
            description: dict.development.performance.stats.seo.desc,
            icon: Search,
        },
    ];

    const comparisonData = [
        {
            aspect: dict.development.architecture.table.rows.tech.aspect,
            conventional: dict.development.architecture.table.rows.tech.conventional,
            pixelFlux: dict.development.architecture.table.rows.tech.pixel_flux,
        },
        {
            aspect: dict.development.architecture.table.rows.speed.aspect,
            conventional: dict.development.architecture.table.rows.speed.conventional,
            pixelFlux: dict.development.architecture.table.rows.speed.pixel_flux,
        },
        {
            aspect: dict.development.architecture.table.rows.security.aspect,
            conventional: dict.development.architecture.table.rows.security.conventional,
            pixelFlux: dict.development.architecture.table.rows.security.pixel_flux,
        },
        {
            aspect: dict.development.architecture.table.rows.scalability.aspect,
            conventional: dict.development.architecture.table.rows.scalability.conventional,
            pixelFlux: dict.development.architecture.table.rows.scalability.pixel_flux,
        },
    ];

    const fluxBlueprint = [
        {
            step: "01",
            title: dict.development.flux_blueprint.steps["01"].title,
            description: dict.development.flux_blueprint.steps["01"].desc,
            icon: ClipboardList,
        },
        {
            step: "02",
            title: dict.development.flux_blueprint.steps["02"].title,
            description: dict.development.flux_blueprint.steps["02"].desc,
            icon: Palette,
        },
        {
            step: "03",
            title: dict.development.flux_blueprint.steps["03"].title,
            description: dict.development.flux_blueprint.steps["03"].desc,
            icon: Cpu,
        },
        {
            step: "04",
            title: dict.development.flux_blueprint.steps["04"].title,
            description: dict.development.flux_blueprint.steps["04"].desc,
            icon: Cloud,
        },
    ];

    return (
        <main className="min-h-screen bg-black text-white selection:bg-spring-green selection:text-black">
            <Navbar dict={dict} />
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
                            {dict.development.hero.title_start}{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-spring-green to-emerald-600">
                                {dict.development.hero.title_end}
                            </span>
                        </h1>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            {dict.development.hero.subtitle}
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-12 mb-8">
                        {/* Web Dev Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 50, scale: 0.9 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 80, damping: 20 }}
                            className="neon-border p-8 group"
                        >
                            <Laptop className="w-12 h-12 text-spring-green mb-6 group-hover:scale-110 transition-transform" />
                            <h2 className="text-3xl font-bold mb-4">{dict.development.services.web.title}</h2>
                            <ul className="space-y-3 text-gray-300">
                                {dict.development.services.web.list.map((item: string, i: number) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <CheckCircle className="text-spring-green flex-shrink-0" size={20} /> {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* App Dev Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 50, scale: 0.9 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.15 }}
                            className="neon-border p-8 group"
                        >
                            <Smartphone className="w-12 h-12 text-spring-green mb-6 group-hover:scale-110 transition-transform" />
                            <h2 className="text-3xl font-bold mb-4">{dict.development.services.apps.title}</h2>
                            <ul className="space-y-3 text-gray-300">
                                {dict.development.services.apps.list.map((item: string, i: number) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <CheckCircle className="text-spring-green flex-shrink-0" size={20} /> {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </section>

                {/* Visual Bridge */}
                <div className="relative py-4 flex flex-col items-center">
                    <div className="relative h-16 w-px">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-spring-green/50 to-transparent" />
                        <motion.div
                            className="absolute top-0 left-0 w-full h-6 bg-gradient-to-b from-spring-green to-transparent"
                            animate={{ y: [0, 40, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                            style={{ filter: "blur(2px)" }}
                        />
                    </div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mt-3"
                    >
                        <p className="text-[#606060] text-sm tracking-wider uppercase mb-2">
                            {dict.development.bridge.text}
                        </p>
                        <motion.div
                            animate={{ y: [0, 5, 0] }}
                            transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <ChevronDown size={18} className="mx-auto text-spring-green/50" />
                        </motion.div>
                    </motion.div>
                </div>

                {/* Stats */}
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
                                {dict.development.performance.title_start}{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-spring-green to-emerald-600">
                                    {dict.development.performance.title_end}
                                </span>
                            </h2>
                            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                                {dict.development.performance.subtitle}
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

                {/* Architecture Table */}
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
                                {dict.development.architecture.title_start}{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-spring-green to-emerald-600">
                                    {dict.development.architecture.title_end}
                                </span>
                            </h2>
                            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                                {dict.development.architecture.subtitle}
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
                                    <p className="text-gray-400 font-medium">{dict.development.architecture.table.aspect}</p>
                                </div>
                                <div className="p-6 bg-white/5 border-l border-white/10">
                                    <p className="text-gray-400 font-medium">{dict.development.architecture.table.conventional}</p>
                                </div>
                                <div className="p-6 neon-border border-0 border-l border-white/10 scale-[1.02] relative z-10 bg-spring-green/5">
                                    <p className="text-spring-green font-bold">{dict.development.architecture.table.pixel_flux}</p>
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

                {/* Deep Dive */}
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
                                    {dict.development.deep_dive.title_start}{" "}
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-spring-green to-emerald-600">
                                        {dict.development.deep_dive.title_end}
                                    </span>
                                </h2>
                                <p className="text-2xl text-spring-green font-semibold mb-6">
                                    {dict.development.deep_dive.highlight}
                                </p>
                                <p className="text-lg text-gray-400 leading-relaxed">
                                    {dict.development.deep_dive.desc}
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 60 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ type: "spring", stiffness: 60, damping: 20, delay: 0.2 }}
                                className="grid grid-cols-2 gap-4"
                            >
                                {/* Icons kept static or map from logic if needed, names can be hardcoded or dict */}
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

                {/* Flux Blueprint */}
                <section className="py-24">
                    {/* ... */}
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        {/* ... Header */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ type: "spring", stiffness: 100, damping: 20 }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
                                {dict.development.flux_blueprint.title_start}{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-spring-green to-emerald-600">
                                    {dict.development.flux_blueprint.title_end}
                                </span>
                            </h2>
                            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                                {dict.development.flux_blueprint.subtitle}
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

                {/* MiPE Solutions */}
                <section className="py-24 relative overflow-hidden">
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
                                {dict.home.mipe.badge}
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
                                {dict.development.mipe_solutions.title_start}{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-spring-green to-emerald-600">
                                    {dict.development.mipe_solutions.title_end}
                                </span>
                            </h2>
                            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
                                {dict.development.mipe_solutions.desc}
                                <span className="text-spring-green font-semibold">{dict.development.mipe_solutions.highlight}</span>
                                {dict.development.mipe_solutions.desc_end}
                            </p>
                            <Link
                                href={`/${lang}#ecosistema-mipe`}
                                className="inline-flex items-center gap-2 px-8 py-4 bg-spring-green text-black font-bold rounded-lg hover:scale-105 hover:gap-3 transition-all duration-300 magnetic-btn [&:hover_svg]:rotate-0"
                            >
                                {dict.common.know_smart_dining} <ArrowRight size={24} className="transform -rotate-45 transition-transform duration-300" />
                            </Link>
                        </motion.div>
                    </div>
                </section>

                <Footer dict={dict} />
            </PageTransition>
        </main>
    );
}
