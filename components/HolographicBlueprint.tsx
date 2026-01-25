"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { Database, Cloud, Code2, Cpu, Layout, Server, Brain, Settings, ToggleLeft, ToggleRight, Zap, CheckCircle2 } from "lucide-react";

export default function HolographicBlueprint() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    const spotlight = useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(5, 220, 128, 0.08), transparent 70%)`;

    const panelClass = "w-[220px] h-[300px] md:w-[260px] md:h-[360px] rounded-2xl border-2 border-spring-green bg-black/90 backdrop-blur-sm shadow-[0_0_30px_rgba(5,220,128,0.15),inset_0_0_30px_rgba(5,220,128,0.05)] flex flex-col p-4 relative overflow-hidden";

    // Card configurations
    const cardConfigs = [
        { baseZ: 0, zIndex: 40 },
        { baseZ: -80, zIndex: 30 },
        { baseZ: -160, zIndex: 20 },
        { baseZ: -240, zIndex: 10 },
    ];

    const getAnimationProps = (index: number) => {
        const config = cardConfigs[index];
        return {
            rotateY: -45,
            z: config.baseZ,
            y: [0, -8, 0],
        };
    };

    return (
        <section
            className="relative min-h-[100vh] bg-black overflow-hidden flex flex-col items-center justify-center py-24 md:py-32"
            onMouseMove={handleMouseMove}
        >
            <div className="absolute inset-0 bg-[#020a05] pointer-events-none" />

            <motion.div
                className="absolute inset-0 pointer-events-none z-10"
                style={{ background: spotlight }}
            />

            <div className="container mx-auto px-4 z-20">
                {/* Header Centrado */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16 md:mb-24"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-spring-green/30 bg-spring-green/5 text-spring-green text-xs font-mono tracking-widest mb-6 shadow-[0_0_15px_rgba(5,220,128,0.2)]">
                        <Server size={14} />
                        <span>FULL STACK VISUALIZED</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-display font-bold text-white tracking-tight">
                        ADN DIGITAL <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-spring-green to-emerald-500">EL MOTOR DE TU NEGOCIO</span>
                    </h2>
                </motion.div>

                {/* Layout 2 Columnas */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Columna Izquierda: Tarjetas 3D */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex items-center justify-center lg:justify-end pr-0 lg:pr-12 h-[450px]"
                        style={{ perspective: "1200px" }}
                    >
                        <div
                            className="relative"
                            style={{
                                transformStyle: "preserve-3d",
                                width: "700px", // Increased width for wider spread
                                height: "380px"
                            }}
                        >
                            {/* ========== PANEL 1: UI/UX ========== */}
                            <motion.div
                                className={panelClass}
                                animate={getAnimationProps(0)}
                                transition={{
                                    y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                                    rotateY: { duration: 0.5, type: "spring" },
                                    z: { duration: 0.5, type: "spring" },
                                }}
                                style={{
                                    position: "absolute",
                                    left: "0",
                                    top: "0",
                                    zIndex: 40,
                                    transformStyle: "preserve-3d"
                                }}
                            >
                                <div className="flex justify-between items-center mb-3 pb-2 border-b border-spring-green/20">
                                    <div className="w-6 h-6 rounded-lg border border-spring-green flex items-center justify-center">
                                        <Layout size={12} className="text-spring-green" />
                                    </div>
                                    <div className="flex gap-1">
                                        <div className="w-6 h-1.5 bg-spring-green/40 rounded-full" />
                                        <div className="w-3 h-1.5 bg-spring-green/40 rounded-full" />
                                    </div>
                                </div>

                                <div className="w-full h-16 border border-spring-green/30 rounded-lg bg-spring-green/5 mb-2 relative overflow-hidden p-2">
                                    <svg className="w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none">
                                        <motion.path
                                            d="M0 35 L15 28 L30 32 L45 20 L60 25 L75 15 L90 18 L100 10"
                                            fill="none"
                                            stroke="#05dc80"
                                            strokeWidth="2"
                                            initial={{ pathLength: 0 }}
                                            animate={{ pathLength: 1 }}
                                            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                                        />
                                        <path d="M0 35 L15 28 L30 32 L45 20 L60 25 L75 15 L90 18 L100 10 V40 H0 Z" fill="url(#chartGradient)" opacity="0.3" />
                                        <defs>
                                            <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="0%" stopColor="#05dc80" />
                                                <stop offset="100%" stopColor="transparent" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>

                                <div className="flex justify-between items-center mb-2 px-1">
                                    <div className="flex items-center gap-1">
                                        <motion.div animate={{ opacity: [1, 0.5, 1] }} transition={{ duration: 2, repeat: Infinity }}>
                                            <ToggleRight size={18} className="text-spring-green" />
                                        </motion.div>
                                        <span className="text-[8px] text-spring-green/70">ACTIVE</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <ToggleLeft size={18} className="text-spring-green/30" />
                                        <span className="text-[8px] text-spring-green/30">IDLE</span>
                                    </div>
                                </div>

                                <div className="space-y-1.5 mb-2">
                                    {[85, 60, 92].map((val, i) => (
                                        <div key={i} className="flex items-center gap-2">
                                            <div className="w-full h-1.5 bg-spring-green/10 rounded-full overflow-hidden">
                                                <motion.div
                                                    className="h-full bg-spring-green/60 rounded-full"
                                                    initial={{ width: 0 }}
                                                    animate={{ width: `${val}%` }}
                                                    transition={{ duration: 1.5, delay: i * 0.2 }}
                                                />
                                            </div>
                                            <span className="text-[7px] text-spring-green/50 w-6">{val}%</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="grid grid-cols-3 gap-1.5 flex-1">
                                    {[1, 2, 3, 4, 5, 6].map(i => (
                                        <motion.div
                                            key={i}
                                            className="border border-spring-green/20 rounded p-1.5 flex items-center justify-center"
                                            animate={i === 2 || i === 5 ? { borderColor: ["rgba(5,220,128,0.2)", "rgba(5,220,128,0.6)", "rgba(5,220,128,0.2)"] } : {}}
                                            transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
                                        >
                                            <div className="w-3 h-3 rounded bg-spring-green/10" />
                                        </motion.div>
                                    ))}
                                </div>
                                <div className="absolute bottom-1.5 right-2 text-[6px] font-mono text-spring-green/50">LAYER_01_UI</div>
                            </motion.div>

                            {/* ========== PANEL 2: API / CODE ========== */}
                            <motion.div
                                className={panelClass}
                                animate={getAnimationProps(1)}
                                transition={{
                                    y: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 },
                                    rotateY: { duration: 0.5, type: "spring" },
                                    z: { duration: 0.5, type: "spring" },
                                }}
                                style={{
                                    position: "absolute",
                                    left: "140px", // Increased offset
                                    top: "0",
                                    zIndex: 30,
                                    transformStyle: "preserve-3d"
                                }}
                            >
                                <div className="flex items-center gap-1.5 mb-1 pb-1 border-b border-spring-green/20">
                                    <div className="w-2 h-2 rounded-full bg-red-500/60" />
                                    <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
                                    <div className="w-2 h-2 rounded-full bg-spring-green/60" />
                                    <span className="text-[7px] text-spring-green/50 ml-2 font-mono">terminal.flux</span>
                                </div>
                                <div className="flex-1 bg-black/50 rounded border border-spring-green/20 p-1.5 overflow-hidden relative">
                                    <motion.div
                                        className="space-y-0.5 font-mono text-[6px] leading-tight"
                                        animate={{ y: [0, -60, 0] }}
                                        transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
                                    >
                                        <div className="text-spring-green/60"><span className="text-purple-400">import</span> {'{ Flux, Core }'} <span className="text-purple-400">from</span> <span className="text-orange-400">&apos;@pixelflux/core&apos;</span>;</div>
                                        <div className="text-spring-green/60"><span className="text-purple-400">import</span> {'{ NeuralNet }'} <span className="text-purple-400">from</span> <span className="text-orange-400">&apos;@ai/engine&apos;</span>;</div>
                                        <div className="text-spring-green/60">&nbsp;</div>
                                        <div className="text-spring-green/60"><span className="text-purple-400">class</span> <span className="text-yellow-400">FluxController</span> <span className="text-purple-400">extends</span> Core <span className="text-yellow-400">{'{'}</span></div>
                                        <div className="text-spring-green/60">&nbsp;&nbsp;<span className="text-purple-400">constructor</span>(props) <span className="text-yellow-400">{'{'}</span></div>
                                        <div className="text-spring-green/60">&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">super</span>(props);</div>
                                        <div className="text-spring-green/60">&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">this</span>.state = <span className="text-yellow-400">{'{'}</span></div>
                                        <div className="text-spring-green/60">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;active: <span className="text-purple-400">true</span>,</div>
                                        <div className="text-spring-green/60">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;mode: <span className="text-orange-400">&apos;holographic&apos;</span>,</div>
                                        <div className="text-spring-green/60">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;latency: <span className="text-orange-400">0.05ms</span></div>
                                        <div className="text-spring-green/60">&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-400">{'}'}</span>;</div>
                                        <div className="text-spring-green/60">&nbsp;&nbsp;<span className="text-yellow-400">{'}'}</span></div>
                                        <div className="text-spring-green/60">&nbsp;</div>
                                        <div className="text-spring-green/60">&nbsp;&nbsp;<span className="text-purple-400">async</span> <span className="text-blue-400">initialize</span>() <span className="text-yellow-400">{'{'}</span></div>
                                        <div className="text-spring-green/60">&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">const</span> nucleus = <span className="text-purple-400">await</span> Flux.connect(<span className="text-orange-400">&apos;wss://api.flux.io&apos;</span>);</div>
                                        <div className="text-spring-green/60">&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">if</span> (nucleus.ready) <span className="text-yellow-400">{'{'}</span></div>
                                        <div className="text-spring-green/60">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.<span className="text-blue-400">log</span>(<span className="text-orange-400">&apos;System Online&apos;</span>);</div>
                                        <div className="text-spring-green/60">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">return</span> nucleus.syncData();</div>
                                        <div className="text-spring-green/60">&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-400">{'}'}</span></div>
                                        <div className="text-spring-green/60">&nbsp;&nbsp;<span className="text-yellow-400">{'}'}</span></div>
                                        <div className="text-spring-green/60">&nbsp;</div>
                                        <div className="text-spring-green/60">&nbsp;&nbsp;<span className="text-purple-400">function</span> <span className="text-blue-400">optimize</span>(data) <span className="text-yellow-400">{'{'}</span></div>
                                        <div className="text-spring-green/60">&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">return</span> data.map(x =&gt; x * <span className="text-purple-400">2</span>).filter(Boolean);</div>
                                        <div className="text-spring-green/60">&nbsp;&nbsp;<span className="text-yellow-400">{'}'}</span></div>
                                        <div className="text-spring-green/60">&nbsp;</div>
                                        <div className="text-spring-green/60">&nbsp;&nbsp;<span className="text-purple-400">const</span> metrics = <span className="text-blue-400">useMetrics</span>();</div>
                                        <div className="text-spring-green/60">&nbsp;&nbsp;<span className="text-purple-400">useEffect</span>(() =&gt; <span className="text-yellow-400">{'{'}</span></div>
                                        <div className="text-spring-green/60">&nbsp;&nbsp;&nbsp;&nbsp;NeuralNet.inject(<span className="text-orange-400">&apos;context&apos;</span>, metrics);</div>
                                        <div className="text-spring-green/60">&nbsp;&nbsp;<span className="text-yellow-400">{'}'}</span>, [metrics]);</div>
                                        <div className="text-spring-green/60"><span className="text-purple-400">{'}'}</span></div>
                                        <div className="text-spring-green/60"><span className="text-purple-400">export default new</span> FluxController();</div>
                                    </motion.div>
                                    <motion.div
                                        className="absolute bottom-1 left-1 w-1 h-2.5 bg-spring-green"
                                        animate={{ opacity: [1, 0, 1] }}
                                        transition={{ duration: 1, repeat: Infinity }}
                                    />
                                </div>
                                <div className="flex items-center justify-center gap-2 mt-1.5 py-1 border border-spring-green/30 rounded bg-spring-green/5">
                                    <div className="w-1.5 h-1.5 rounded-full bg-spring-green" />
                                    <span className="text-[8px] font-bold text-spring-green">REST API ACTIVE</span>
                                    <Code2 size={10} className="text-spring-green/60" />
                                </div>
                                <div className="absolute bottom-1.5 right-2 text-[6px] font-mono text-spring-green/50">LAYER_02_LOGIC</div>
                            </motion.div>

                            {/* ========== PANEL 3: CLOUD / DB / AI ========== */}
                            <motion.div
                                className={panelClass}
                                animate={getAnimationProps(2)}
                                transition={{
                                    y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.6 },
                                    rotateY: { duration: 0.5, type: "spring" },
                                    z: { duration: 0.5, type: "spring" },
                                }}
                                style={{
                                    position: "absolute",
                                    left: "280px", // Increased offset
                                    top: "0",
                                    zIndex: 20,
                                    transformStyle: "preserve-3d"
                                }}
                            >
                                <div className="flex-1 relative">
                                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 120">
                                        <line x1="50" y1="25" x2="25" y2="60" stroke="#16302b" strokeWidth="1" />
                                        <line x1="50" y1="25" x2="75" y2="60" stroke="#16302b" strokeWidth="1" />
                                        <line x1="25" y1="60" x2="50" y2="95" stroke="#16302b" strokeWidth="1" />
                                        <line x1="75" y1="60" x2="50" y2="95" stroke="#16302b" strokeWidth="1" />
                                        <line x1="25" y1="60" x2="75" y2="60" stroke="#16302b" strokeWidth="1" />
                                        <motion.circle r="3" fill="#05dc80" animate={{ cx: [50, 25, 50, 75, 50], cy: [25, 60, 95, 60, 25] }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} />
                                    </svg>
                                    <div className="absolute top-2 left-1/2 -translate-x-1/2 flex flex-col items-center">
                                        <Cloud size={32} className="text-spring-green stroke-[1.5]" />
                                        <span className="text-[6px] text-spring-green/50 mt-0.5">CLOUD</span>
                                    </div>
                                    <div className="absolute top-1/2 -translate-y-1/2 left-2 flex flex-col items-center">
                                        <Brain size={28} className="text-spring-green stroke-[1.5]" />
                                        <span className="text-[6px] text-spring-green/50 mt-0.5">AI</span>
                                    </div>
                                    <div className="absolute top-1/2 -translate-y-1/2 right-2 flex flex-col items-center">
                                        <Settings size={28} className="text-spring-green stroke-[1.5]" />
                                        <span className="text-[6px] text-spring-green/50 mt-0.5">ENGINE</span>
                                    </div>
                                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                                        {[1, 2, 3].map(i => (
                                            <div key={i} className="w-6 h-8 border border-spring-green/50 rounded bg-spring-green/5 relative">
                                                <div className="absolute top-1/3 left-0 w-full h-[1px] bg-spring-green/30" />
                                                <div className="absolute top-2/3 left-0 w-full h-[1px] bg-spring-green/30" />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="absolute bottom-1.5 right-2 text-[6px] font-mono text-spring-green/50">LAYER_03_DATA</div>
                            </motion.div>

                            {/* ========== PANEL 4: HARDWARE / CIRCUIT ========== */}
                            <motion.div
                                className={panelClass}
                                animate={getAnimationProps(3)}
                                transition={{
                                    y: { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.9 },
                                    rotateY: { duration: 0.5, type: "spring" },
                                    z: { duration: 0.5, type: "spring" },
                                }}
                                style={{
                                    position: "absolute",
                                    left: "420px", // Increased offset
                                    top: "0",
                                    zIndex: 10,
                                    transformStyle: "preserve-3d"
                                }}
                            >
                                <svg className="absolute inset-0 w-full h-full" width="100%" height="100%">
                                    <pattern id="pcbAdvanced" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                                        <path d="M0 20 H15 M25 20 H40" stroke="#16302b" strokeWidth="1" />
                                        <path d="M20 0 V15 M20 25 V40" stroke="#16302b" strokeWidth="1" />
                                        <rect width="100%" height="100%" fill="url(#pcbAdvanced)" opacity="0.4" />
                                    </pattern>
                                </svg>
                                <div className="flex-1 relative z-10 flex flex-col items-center justify-center gap-3">
                                    <div className="flex gap-3">
                                        {[1, 2, 3].map(i => (
                                            <motion.div key={i} className="w-8 h-3 rounded-sm border border-spring-green/40 bg-spring-green/10 flex items-center justify-center pt-[1px]" animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.4 }}>
                                                <div className="flex gap-[1px]"><div className="w-[2px] h-2 bg-spring-green/60 rounded-full" /></div>
                                            </motion.div>
                                        ))}
                                    </div>
                                    <div className="w-20 h-20 border-2 border-spring-green bg-[#020a05] rounded-lg flex items-center justify-center shadow-[0_0_20px_rgba(5,220,128,0.3)] relative">
                                        <Cpu size={28} className="text-spring-green" />
                                    </div>
                                    <div className="flex gap-2">
                                        {[1, 2, 3, 4].map(i => <div key={i} className="w-5 h-5 border border-spring-green/40 bg-spring-green/5 rounded-sm flex items-center justify-center"><Zap size={10} className="text-spring-green/60" /></div>)}
                                    </div>
                                </div>
                                <div className="absolute bottom-1.5 right-2 text-[6px] font-mono text-spring-green/50">LAYER_04_HARDWARE</div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Columna Derecha: Texto Explicativo */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-left"
                    >
                        <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-6">
                            Construimos Soluciones, <br />
                            <span className="text-gray-400">No Solo Interfaces</span>
                        </h3>
                        <p className="text-gray-400 mb-8 leading-relaxed">
                            En Pixel Flux, entendemos que una web o app exitosa es como un iceberg: la belleza que ves en la superficie (UI/UX) solo funciona si tiene una base indestructible debajo.
                        </p>

                        <div className="space-y-6 mb-8">
                            <div className="flex gap-4">
                                <div className="mt-1">
                                    <CheckCircle2 className="text-spring-green" size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold mb-1">Inteligente</h4>
                                    <p className="text-sm text-gray-400">Con una lógica y APIs que procesan datos en milisegundos.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="mt-1">
                                    <CheckCircle2 className="text-spring-green" size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold mb-1">Escalable</h4>
                                    <p className="text-sm text-gray-400">Respaldado por una infraestructura en la Nube y Bases de Datos listas para crecer sin límites.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="mt-1">
                                    <CheckCircle2 className="text-spring-green" size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold mb-1">Eficiente</h4>
                                    <p className="text-sm text-gray-400">Desarrollado con una arquitectura de Código Puro (Circuitos) optimizada para la máxima velocidad.</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-4 border-l-2 border-spring-green bg-spring-green/5 rounded-r-lg">
                            <p className="text-spring-green font-medium italic">
                                "No lanzamos sitios web; desplegamos activos digitales diseñados para dominar el mercado."
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
