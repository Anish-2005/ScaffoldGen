"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Coins, Wallet, BarChart, PieChart } from "lucide-react"
import ComponentLoader from "./ComponentLoader"
import AnimatedOnScroll from "./AnimatedOnScroll"

export default function FeaturesSection() {
    return (
        <ComponentLoader variant="FeaturesSection">
            <AnimatedOnScroll variant="fadeIn">
                <section className="relative bg-black py-20 lg:py-36 overflow-hidden">
                    <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6">

                        {/* ================= CENTER HUB (DESKTOP ONLY) ================= */}
                        <div className="absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2 hidden lg:block">
                            <motion.div
                                className="absolute inset-[-42px] z-10"
                                initial={{ rotate: 0 }}
                                animate={{ rotate: 360 }}
                                transition={{
                                    duration: 22,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                            >
                                <div
                                    className="absolute inset-0 rounded-full"
                                    style={{
                                        background:
                                            "conic-gradient(from 0deg, rgba(255,115,0,0.0), rgba(255,115,0,0.95), rgba(255,115,0,0.0))",
                                        maskImage:
                                            "radial-gradient(circle, transparent 70%, black 71%, black 73%, transparent 74%)",
                                        WebkitMaskImage:
                                            "radial-gradient(circle, transparent 70%, black 71%, black 73%, transparent 74%)",
                                        filter: "blur(3px)",
                                    }}
                                />
                                <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-orange-500 shadow-[0_0_12px_rgba(255,140,80,0.9)]" />
                                <span className="absolute left-1/2 bottom-0 h-2 w-2 -translate-x-1/2 rounded-full bg-orange-500 shadow-[0_0_12px_rgba(255,140,80,0.9)]" />
                            </motion.div>

                            <div className="relative flex h-[88px] w-[88px] items-center justify-center rounded-full bg-[#1a1411] shadow-[0_0_90px_rgba(255,120,40,0.45)]">
                                <div className="flex h-[44px] w-[44px] items-center justify-center rounded-xl bg-orange-500">
                                    <Image
                                        src="/Union.png"
                                        alt="Union Logo"
                                        width={16}
                                        height={16}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* ================= SEPARATOR LINES (DESKTOP ONLY) ================= */}
                        <div className="pointer-events-none absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-transparent via-orange-500/30 to-transparent hidden lg:block" />
                        <div className="pointer-events-none absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent hidden lg:block" />

                        {/* ================= GRID ================= */}
                        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0">
                            <Quadrant
                                gradient="bg-gradient-to-r from-black via-black to-orange-900/30"
                                iconBg="bg-orange-500"
                                icon={<Coins size={28} className="text-white" />}
                                title="Multi-Template & Multi-Language Support"
                                desc="Enables developers to work across different technology stacks with a unified command interface."
                            />

                            <Quadrant
                                gradient="bg-transparent"
                                iconBg="bg-indigo-500"
                                icon={<Wallet size={28} className="text-white" />}
                                title="Interactive Configuration & Prompting"
                                desc="Provides a user-friendly experience and minimizes errors from manual configuration."
                            />

                            <Quadrant
                                gradient="bg-transparent"
                                iconBg="bg-rose-600"
                                icon={<BarChart size={28} className="text-white" />}
                                title="Component & Module Generation"
                                desc="Significantly speeds up repetitive coding tasks and enforces best practices."
                            />

                            <Quadrant
                                gradient="bg-gradient-to-l from-black via-black to-orange-900/30"
                                iconBg="bg-yellow-600"
                                icon={<PieChart size={28} className="text-white" />}
                                title="Extensible Post-Processing Pipeline"
                                desc="Delivers a fully functional, ready-to-code project immediately after generation."
                            />
                        </div>
                    </div>
                </section>
            </AnimatedOnScroll>
        </ComponentLoader>
    )
}

/* ================= QUADRANT ================= */

function Quadrant({
    gradient,
    iconBg,
    icon,
    title,
    desc,
}: {
    gradient: string
    iconBg: string
    icon: React.ReactNode
    title: string
    desc: string
}) {
    return (
        <div
            className={`
                group
                relative
                min-h-[260px] lg:min-h-[320px]
                px-6 lg:px-10
                py-10 lg:py-14
                flex flex-col items-center justify-center text-center
                transition-all duration-500
                hover:scale-105 hover:-translate-y-2
                ${gradient}
            `}
        >
            <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 border border-orange-900 group-hover:shadow-[0_0_12px_2px_rgba(255,140,80,0.18),0_0_25px_rgba(255,140,80,0.1)] group-hover:bg-orange-400/5" />

            <div className={`mb-6 flex h-12 w-12 items-center justify-center rounded-xl ${iconBg} transition-all duration-300 group-hover:scale-110`}>
                {icon}
            </div>

            <h3 className="mb-4 text-lg lg:text-xl font-semibold text-white leading-snug max-w-[360px] transition-all duration-300 group-hover:text-orange-300 group-hover:drop-shadow-[0_0_8px_rgba(255,165,0,0.5)]">
                {title}
            </h3>

            <p className="text-sm leading-relaxed text-white/55 max-w-[360px] transition-all duration-300 group-hover:text-white/80">
                {desc}
            </p>
        </div>
    )
}
