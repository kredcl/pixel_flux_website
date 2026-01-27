"use client";

import PageTransition from "@/components/PageTransition";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { PixelCanvas } from "@/components/PixelCanvas";
import ParticleBackground from "@/components/ParticleBackground";
import XRayScanner from "@/components/XRayScanner";
import HolographicBlueprint from "@/components/HolographicBlueprint";
import {
    ArrowRight,
    Code,
    Bot,
    Zap,
    Search,
    Cpu,
    Cloud,
    TrendingUp,
    Utensils,
    Hexagon,
    Atom,
    Circle,
    Terminal,
    Sparkles,
    Gem,
    Brain,
    Rocket,
    Palette,
    Wand2,
    Globe,
    Scan,
    type LucideIcon
} from "lucide-react";
import { useParams } from "next/navigation";

// Tech stack items with Lucide icons
const techStack: { name: string; icon: LucideIcon }[] = [
    { name: "Next.js", icon: Hexagon },
    { name: "React", icon: Atom },
    { name: "Node.js", icon: Circle },
    { name: "Python", icon: Terminal },
    { name: "OpenAI", icon: Bot },
    { name: "Gemini", icon: Gem },
    { name: "LLMs", icon: Brain },
    { name: "Antigravity", icon: Rocket },
    { name: "Tailwind CSS", icon: Palette },
    { name: "Framer Motion", icon: Wand2 },
];

export default function HomePage({ dict }: { dict: any }) {
    const params = useParams();
    const lang = params.lang as string;

    // Flux Process steps from dictionary
    const fluxProcess = [
        {
            step: "01",
            title: dict.home.flux_process.steps["01"].title,
            desc: dict.home.flux_process.steps["01"].desc,
            icon: Search,
        },
        {
            step: "02",
            title: dict.home.flux_process.steps["02"].title,
            desc: dict.home.flux_process.steps["02"].desc,
            icon: Cpu,
        },
        {
            step: "03",
            title: dict.home.flux_process.steps["03"].title,
            desc: dict.home.flux_process.steps["03"].desc,
            icon: Cloud,
        },
        {
            step: "04",
            title: dict.home.flux_process.steps["04"].title,
            desc: dict.home.flux_process.steps["04"].desc,
            icon: TrendingUp,
        },
    ];

    return (
        <main className="min-h-screen bg-black text-white selection:bg-spring-green selection:text-black overflow-hidden relative">
            <Navbar dict={dict} />

            <PageTransition>
                {/* Hero Section */}
                <section className="relative h-screen flex items-center justify-center px-4 pt-20">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-spring-green/20 rounded-full blur-[128px] animate-pulse" />
                        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-dark-green/30 rounded-full blur-[128px]" />
                    </div>

                    <ParticleBackground />

                    <div className="relative z-10 max-w-5xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="text-5xl md:text-8xl font-bold font-display tracking-tight mb-8">
                                {dict.home.hero.title_start}
                                <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-spring-green to-emerald-600">
                                    {dict.home.hero.title_end}
                                </span>
                            </h1>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto"
                        >
                            {dict.home.hero.subtitle}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center"
                        >
                            <Link
                                href={`/${lang}/development`}
                                className="px-8 py-4 bg-spring-green text-black font-bold rounded-lg flex items-center justify-center gap-2 hover:scale-105 hover:gap-3 transition-all duration-300 magnetic-btn [&:hover_svg]:rotate-0"
                            >
                                {dict.home.hero.cta_work} <ArrowRight size={24} className="transform -rotate-45 transition-transform duration-300" />
                            </Link>
                            <Link
                                href={`/${lang}/contact`}
                                className="group relative px-8 py-4 border border-white/20 text-white font-medium rounded-lg hover:border-spring-green/50 overflow-hidden transition-colors"
                            >
                                <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <PixelCanvas
                                        gap={4}
                                        speed={35}
                                        colors={['#05dc80', '#02674f', '#ffffff']}
                                        variant="default"
                                    />
                                </div>
                                <span className="relative z-10">{dict.common.contact_us}</span>
                            </Link>
                        </motion.div>
                    </div>
                </section>

                {/* Services Section */}
                <section className="py-24 bg-zinc-950/50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{
                                type: "spring",
                                stiffness: 100,
                                damping: 20,
                                mass: 0.8
                            }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
                                {dict.home.services.title_start}{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-spring-green to-emerald-600">
                                    {dict.home.services.title_end}
                                </span>
                            </h2>
                            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                                {dict.home.services.subtitle}
                            </p>
                        </motion.div>

                        {/* Service Cards */}
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: Code,
                                    title: dict.home.services.web_dev.title,
                                    desc: dict.home.services.web_dev.desc,
                                    href: `/${lang}/development`,
                                },
                                {
                                    icon: Bot,
                                    title: dict.home.services.ai_auto.title,
                                    desc: dict.home.services.ai_auto.desc,
                                    href: `/${lang}/automation`,
                                },
                                {
                                    icon: Zap,
                                    title: dict.home.services.performance.title,
                                    desc: dict.home.services.performance.desc,
                                    href: `/${lang}/development`,
                                },
                            ].map((service, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 80,
                                        damping: 20,
                                        delay: i * 0.15
                                    }}
                                    className="neon-border p-8 group"
                                >
                                    <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mb-6 text-spring-green group-hover:scale-110 transition-transform">
                                        <service.icon size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                                    <p className="text-gray-400 mb-6">{service.desc}</p>
                                    <Link
                                        href={service.href}
                                        className="relative z-10 text-spring-green font-medium inline-flex items-center gap-2 hover:gap-3 transition-all duration-300 [&:hover_svg]:rotate-0"
                                    >
                                        <span>{dict.common.read_more}</span>
                                        <ArrowRight
                                            size={20}
                                            className="transform -rotate-45 transition-transform duration-300"
                                        />
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                <HolographicBlueprint />

                {/* The Flux Process */}
                <section className="py-24 relative overflow-hidden">
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-spring-green/10 rounded-full blur-[150px]" />
                    </div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 40, scale: 0.98 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{
                                type: "spring",
                                stiffness: 100,
                                damping: 20,
                                mass: 0.8
                            }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
                                {dict.home.flux_process.title_start}{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-spring-green to-emerald-600">
                                    {dict.home.flux_process.title_end}
                                </span>
                            </h2>
                            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                                {dict.home.flux_process.subtitle}
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {fluxProcess.map((step, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 60, scale: 0.85, rotateX: 15 }}
                                    whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 70,
                                        damping: 18,
                                        delay: i * 0.12
                                    }}
                                    className="glass-card neon-border p-6 group"
                                >
                                    <span className="step-number text-4xl font-bold font-display block mb-4">
                                        {step.step}
                                    </span>
                                    <div className="w-10 h-10 bg-spring-green/10 rounded-lg flex items-center justify-center mb-4 text-spring-green group-hover:bg-spring-green/20 transition-colors">
                                        <step.icon size={20} />
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                                    <p className="text-gray-400 text-sm">{step.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* X-Ray Scanner */}
                <section className="py-24 bg-zinc-950/50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -60 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ type: "spring", stiffness: 60, damping: 20 }}
                            >
                                <XRayScanner />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 60 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ type: "spring", stiffness: 60, damping: 20, delay: 0.2 }}
                            >
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-spring-green/10 rounded-full text-spring-green text-sm font-medium mb-6">
                                    <Scan size={16} />
                                    {dict.home.xray.badge}
                                </div>
                                <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
                                    {dict.home.xray.title_start}{" "}
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-spring-green to-emerald-600">
                                        {dict.home.xray.title_end}
                                    </span>
                                </h2>
                                <p className="text-xl text-gray-400 mb-6 leading-relaxed">
                                    {dict.home.xray.desc}
                                </p>
                                <ul className="space-y-3 text-gray-300">
                                    {dict.home.xray.list.map((item: string, i: number) => (
                                        <li key={i} className="flex items-center gap-3">
                                            <div className="w-2 h-2 bg-spring-green rounded-full" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* MiPE Section */}
                <section className="py-24 bg-zinc-950/50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -80, filter: "blur(10px)" }}
                                whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{
                                    type: "spring",
                                    stiffness: 60,
                                    damping: 20,
                                    mass: 1
                                }}
                            >
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-spring-green/10 rounded-full text-spring-green text-sm font-medium mb-6">
                                    <Sparkles size={16} />
                                    {dict.home.mipe.badge}
                                </div>
                                <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
                                    {dict.home.mipe.title_start}{" "}
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-spring-green to-emerald-600">
                                        {dict.home.mipe.title_end}
                                    </span>
                                </h2>
                                <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                                    {dict.home.mipe.desc_start}{" "}
                                    <Link href="https://restaurantes-chile.com/" target="_blank" className="text-spring-green font-semibold hover:underline">{dict.home.mipe.link_text}</Link>{" "}
                                    {dict.home.mipe.desc_end}
                                </p>
                                <Link
                                    href="https://restaurantes-chile.com/#/planes"
                                    target="_blank"
                                    className="inline-flex items-center gap-2 px-8 py-4 bg-spring-green text-black font-bold rounded-lg hover:scale-105 hover:gap-3 transition-all duration-300 magnetic-btn [&:hover_svg]:rotate-0"
                                >
                                    {dict.common.view_plans} <ArrowRight size={24} className="transform -rotate-45 transition-transform duration-300" />
                                </Link>
                            </motion.div>

                            {/* Bento Grid */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, filter: "blur(15px)" }}
                                whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{
                                    type: "spring",
                                    stiffness: 50,
                                    damping: 25,
                                    mass: 1.2,
                                    delay: 0.2
                                }}
                                className="relative"
                            >
                                <div className="grid grid-cols-2 gap-4">
                                    {/* Top Box */}
                                    <Link href="https://restaurantes-chile.com/" target="_blank" className="col-span-2 neon-border p-6 backdrop-blur-xl block hover:scale-[1.02] transition-transform duration-300">
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 bg-spring-green/20 rounded-lg flex items-center justify-center">
                                                    <Globe size={20} className="text-spring-green" />
                                                </div>
                                                <div>
                                                    <p className="text-white font-bold text-lg">restaurantes-chile.com</p>
                                                    <p className="text-gray-500 text-xs">{dict.home.mipe.platform}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2 px-3 py-1 bg-spring-green/10 rounded-full">
                                                <div className="w-2 h-2 bg-spring-green rounded-full animate-pulse" />
                                                <span className="text-spring-green text-xs font-medium">Live</span>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-3 gap-3">
                                            <div className="bg-white/5 rounded-lg p-3 text-center">
                                                <p className="text-2xl font-bold text-spring-green">24</p>
                                                <p className="text-gray-500 text-xs">{dict.home.mipe.stats.restaurants}</p>
                                            </div>
                                            <div className="bg-white/5 rounded-lg p-3 text-center">
                                                <p className="text-2xl font-bold text-white">1.2K</p>
                                                <p className="text-gray-500 text-xs">{dict.home.mipe.stats.visits}</p>
                                            </div>
                                            <div className="bg-white/5 rounded-lg p-3 text-center">
                                                <p className="text-2xl font-bold text-emerald-400">+38%</p>
                                                <p className="text-gray-500 text-xs">{dict.home.mipe.stats.conversion}</p>
                                            </div>
                                        </div>
                                    </Link>

                                    {/* Bottom Left - Brutal Burger */}
                                    <Link href="https://brutalburger.restaurantes-chile.com/" target="_blank" className="neon-border p-5 backdrop-blur-xl group block hover:scale-[1.02] transition-transform duration-300">
                                        <div className="flex items-center gap-2 mb-3">
                                            <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center">
                                                <Utensils size={16} className="text-orange-400" />
                                            </div>
                                            <span className="text-white font-bold text-sm">Brutal Burger</span>
                                        </div>
                                        <div className="aspect-[4/3] bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-lg mb-3 overflow-hidden relative">
                                            <Image
                                                src="/assets/images/brutalbruger.webp"
                                                alt="Brutal Burger"
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-gray-400 text-xs">Las Condes</span>
                                            <div className="flex items-center gap-1">
                                                <span className="text-yellow-400 text-xs">★</span>
                                                <span className="text-white text-xs font-medium">4.9</span>
                                            </div>
                                        </div>
                                    </Link>

                                    {/* Bottom Right - Volcano Pizza */}
                                    <Link href="https://volcanopizza.restaurantes-chile.com/" target="_blank" className="neon-border p-5 backdrop-blur-xl group block hover:scale-[1.02] transition-transform duration-300">
                                        <div className="flex items-center gap-2 mb-3">
                                            <div className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center">
                                                <Utensils size={16} className="text-red-400" />
                                            </div>
                                            <span className="text-white font-bold text-sm">Volcano Pizza</span>
                                        </div>
                                        <div className="aspect-[4/3] bg-gradient-to-br from-red-500/10 to-amber-500/10 rounded-lg mb-3 overflow-hidden relative">
                                            <Image
                                                src="/assets/images/volcanopizza.webp"
                                                alt="Volcano Pizza"
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-gray-400 text-xs">Providencia</span>
                                            <div className="flex items-center gap-1">
                                                <span className="text-yellow-400 text-xs">★</span>
                                                <span className="text-white text-xs font-medium">4.8</span>
                                            </div>
                                        </div>
                                    </Link>
                                </div>

                                <div className="absolute -top-4 -right-4 w-32 h-32 bg-spring-green/20 rounded-full blur-[80px]" />
                                <div className="absolute -bottom-4 -left-4 w-40 h-40 bg-dark-green/30 rounded-full blur-[80px]" />
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Tech Stack */}
                <section className="py-16 border-t border-b border-white/5 overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{
                                type: "spring",
                                stiffness: 100,
                                damping: 20
                            }}
                            className="text-center text-gray-500 text-sm uppercase tracking-widest mb-8"
                        >
                            {dict.home.tech_stack.label}
                        </motion.p>
                    </div>

                    <div className="w-full overflow-hidden">
                        <motion.div
                            className="flex"
                            animate={{ x: ["0%", "-50%"] }}
                            transition={{
                                x: {
                                    duration: 20,
                                    repeat: Infinity,
                                    ease: "linear",
                                },
                            }}
                            style={{ width: "max-content" }}
                        >
                            {/* First set */}
                            {techStack.map((tech, i) => {
                                const IconComponent = tech.icon;
                                return (
                                    <div
                                        key={`a-${i}`}
                                        className="flex items-center gap-3 px-8 py-4 mx-4 bg-white/5 rounded-xl hover:bg-spring-green/10 transition-all duration-300 group flex-shrink-0"
                                    >
                                        <IconComponent size={20} className="text-gray-500 group-hover:text-spring-green transition-colors" />
                                        <span className="text-lg font-medium text-gray-400 group-hover:text-spring-green transition-colors whitespace-nowrap">
                                            {tech.name}
                                        </span>
                                    </div>
                                );
                            })}
                            {/* Duplicate set */}
                            {techStack.map((tech, i) => {
                                const IconComponent = tech.icon;
                                return (
                                    <div
                                        key={`b-${i}`}
                                        className="flex items-center gap-3 px-8 py-4 mx-4 bg-white/5 rounded-xl hover:bg-spring-green/10 transition-all duration-300 group flex-shrink-0"
                                    >
                                        <IconComponent size={20} className="text-gray-500 group-hover:text-spring-green transition-colors" />
                                        <span className="text-lg font-medium text-gray-400 group-hover:text-spring-green transition-colors whitespace-nowrap">
                                            {tech.name}
                                        </span>
                                    </div>
                                );
                            })}
                        </motion.div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="py-24">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 50, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{
                                type: "spring",
                                stiffness: 80,
                                damping: 20,
                                mass: 0.9
                            }}
                        >
                            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
                                {dict.home.cta_final.title_start}{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-spring-green to-emerald-600">
                                    {dict.home.cta_final.title_end}
                                </span>{" "}
                                {dict.home.cta_final.title_suffix}
                            </h2>
                            <p className="text-xl text-gray-400 mb-10">
                                {dict.home.cta_final.subtitle}
                            </p>
                            <Link
                                href={`/${lang}/contact`}
                                className="inline-flex items-center gap-2 px-10 py-5 bg-spring-green text-black text-lg font-bold rounded-lg hover:scale-105 hover:gap-3 transition-all duration-300 magnetic-btn [&:hover_svg]:rotate-0"
                            >
                                {dict.common.start_project} <ArrowRight size={24} className="transform -rotate-45 transition-transform duration-300" />
                            </Link>
                        </motion.div>
                    </div>
                </section>

                <Footer dict={dict} />
            </PageTransition>
        </main>
    );
}
