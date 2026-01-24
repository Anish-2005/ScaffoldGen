"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function FeaturesSection() {
  return (
    <section className="relative bg-black py-36 overflow-hidden">
      <div className="relative mx-auto max-w-[1400px] px-6">

        {/* CENTER HUB */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2">
          <motion.div
            className="absolute inset-[-36px] rounded-full border border-orange-500/40"
            animate={{ rotate: 360 }}
            transition={{ delay: 2, duration: 18, repeat: Infinity, ease: "linear" }}
          />

          <div className="relative flex h-[88px] w-[88px] items-center justify-center rounded-full bg-[#1a1411] shadow-[0_0_80px_rgba(255,120,40,0.35)]">
            <div className="flex h-[44px] w-[44px] items-center justify-center rounded-xl bg-orange-500">
              <Image src="/Union.png" alt="Union Logo" width={16} height={16} />
            </div>
          </div>
        </div>

        {/* SEPARATOR LINES */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-transparent via-orange-500/30 to-transparent" />
        <div className="pointer-events-none absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />

        {/* QUADRANT GRID */}
        <div className="relative grid grid-cols-2 grid-rows-2 gap-x-40 gap-y-32">
          {/* Top Left: Orange gradient towards right (to-r) */}
          <Quadrant
            gradient="bg-gradient-to-r from-black to-orange-900/30"
            iconBg="bg-orange-500"
            title="Multi-Template & Multi-Language Support"
            desc="Enables developers to work across different technology stacks with a unified command interface."
          />

          {/* Top Right: Transparent background */}
          <Quadrant
            gradient="bg-transparent"
            iconBg="bg-indigo-500"
            title="Interactive Configuration & Prompting"
            desc="Provides a user-friendly experience and minimizes errors from manual configuration."
          />

          {/* Bottom Left: Transparent background */}
          <Quadrant
            gradient="bg-transparent"
            iconBg="bg-rose-600"
            title="Component & Module Generation"
            desc="Significantly speeds up repetitive coding tasks and enforces best practices."
          />

          {/* Bottom Right: Yellow gradient towards left (to-l) */}
          <Quadrant
            gradient="bg-gradient-to-l from-black to-orange-900/30"
            iconBg="bg-yellow-600"
            title="Extensible Post-Processing Pipeline"
            desc="Delivers a fully functional, ready-to-code project immediately after generation."
          />
        </div>
      </div>
    </section>
  )
}

/* ---------------- QUADRANT ---------------- */

function Quadrant({
  gradient,
  iconBg,
  title,
  desc,
}: {
  gradient: string
  iconBg: string
  title: string
  desc: string
}) {
  return (
    <div
      className={`
        group
        relative
        h-[320px]
        px-10
        py-14
        ${gradient}
      `}
    >
      {/* HOVER EDGE GLOW */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 shadow-[inset_0_0_0_1px_rgba(255,140,80,0.45)]" />

      {/* ICON */}
      <div className={`mb-6 flex h-12 w-12 items-center justify-center rounded-xl ${iconBg}`}>
        <span className="text-white text-lg">⬤</span>
      </div>

      {/* TEXT */}
      <h3 className="mb-4 text-xl font-semibold text-white leading-snug max-w-[360px]">
        {title}
      </h3>

      <p className="text-sm leading-relaxed text-white/55 max-w-[360px]">
        {desc}
      </p>
    </div>
  )
}
