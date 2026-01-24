"use client"

import { motion, animate, useMotionValue } from "framer-motion"
import { useEffect, useState } from "react"
import ComponentLoader from "./ComponentLoader"
import AnimatedOnScroll from "./AnimatedOnScroll"

/* ---------------- COUNT UP ---------------- */
function CountUp({ value }: { value: number }) {
  const mv = useMotionValue(0)
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    const controls = animate(mv, value, {
      duration: 2.2,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => setDisplayValue(Math.round(latest)),
    })
    return controls.stop
  }, [value, mv])

  return <motion.span>{displayValue}</motion.span>
}

/* ---------------- SECTION ---------------- */
export default function GlobalUsersSection() {
  return (
    <ComponentLoader variant="GlobalUsersSection">
    <AnimatedOnScroll variant="fadeUp">
    <section className="relative overflow-hidden bg-black py-32">

      {/* ORANGE EDGE GLOWS (EXACT) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 h-[260px] w-[260px] rounded-full bg-orange-500/35 blur-[100px]" />
        <div className="absolute -right-[80px] top-1/2 -translate-y-1/2 h-[220px] w-[220px] rounded-full bg-orange-400/30 blur-[80px]" />
      </div>

      {/* HEADER */}
      <div className="relative z-10 mb-20 flex flex-col items-start mx-auto max-w-[1280px] px-6">
        <div className="mb-3 inline-flex items-center rounded-full border border-white/20 px-4 py-1 backdrop-blur-sm">
          <span className="text-[11px] font-medium tracking-[0.28em] text-white">
            STATISTICS
          </span>
        </div>

        <h2 className="text-7xl font-medium tracking-tight text-white">
          Global Users
        </h2>
      </div>

{/* MAIN GLASS CONTAINER */}
<div className="relative z-10 mx-auto max-w-[1280px] px-6">
  <div
    className="
      relative
      overflow-hidden
      rounded-[28px]
      px-20
      py-24
      bg-white/20
      backdrop-blur-xl
      shadow-[0_90px_180px_rgba(0,0,0,0.75)]
    "
  >
    {/* INNER DEPTH */}
    <div className="pointer-events-none absolute inset-0 rounded-[28px] bg-gradient-to-b from-white/5 via-transparent to-black/25" />
    <div className="pointer-events-none absolute inset-0 rounded-[28px] shadow-[inset_0_0_120px_rgba(0,0,0,0.6)]" />

    {/* EDGE CUTS */}
    <div className="pointer-events-none absolute inset-0 z-20">
      <div className="absolute bottom-0 left-0 right-0 h-[160px] bg-gradient-to-t from-[#1a1714] to-transparent" />
      <div className="absolute left-0 top-0 bottom-0 w-[140px] bg-gradient-to-r from-[#1a1714] to-transparent" />
      <div className="absolute right-0 top-0 bottom-0 w-[140px] bg-gradient-to-l from-[#1a1714] to-transparent" />
    </div>

    {/* PHONES */}
    <div className="relative flex items-end justify-center gap-10 translate-y-10">

      {/* GENERIC PHONE TEMPLATE */}
      {[
        { h: 320, w: 190, o: 0.35 },
        { h: 380, w: 220, o: 0.55 },
      ].map((p, i) => (
        <div
          key={i}
          className="relative rounded-[28px] bg-neutral-700/60"
          style={{ height: p.h, width: p.w, opacity: p.o }}
        >
          {/* STATUS BAR */}
          <div className="absolute top-2 left-0 right-0 px-4 text-[10px] text-white/40 flex justify-between">
            <span>9:41</span>
            <span>▮▮▮</span>
          </div>

          {/* CONTENT */}
          <div className="absolute inset-x-4 top-10 bottom-8 rounded-xl bg-white/5" />

          {/* BOTTOM FADE */}
          <div className="absolute inset-0 rounded-[28px] bg-gradient-to-b from-transparent to-black/30" />
        </div>
      ))}

      {/* CENTER PHONE */}
      <div className="relative z-10 h-[460px] w-[260px] rounded-[34px] bg-neutral-200 shadow-[0_40px_90px_rgba(0,0,0,0.65)]">
        {/* STATUS BAR */}
        <div className="absolute top-2 left-0 right-0 px-4 text-[11px] text-black/50 flex justify-between">
          <span>9:41</span>
          <span>▮▮▮</span>
        </div>

        {/* NOTCH */}
        <div className="absolute top-3 left-1/2 h-5 w-28 -translate-x-1/2 rounded-full bg-black" />

        {/* MAIN CARD */}
        <div className="absolute inset-x-6 top-14 rounded-2xl bg-white p-4 shadow">
          <div className="text-3xl font-semibold text-black">25K</div>
          <p className="text-xs text-neutral-500">Total Shipment</p>

          {/* GRAPH */}
          <div className="mt-3 h-12 w-full rounded bg-gradient-to-r from-indigo-400/40 to-indigo-500/70" />
        </div>

        {/* FADE */}
        <div className="absolute inset-0 rounded-[34px] bg-gradient-to-b from-transparent to-black/10" />
      </div>

      {/* RIGHT PHONES */}
      {[{ h: 380, w: 220, o: 0.55 }, { h: 320, w: 190, o: 0.35 }].map(
        (p, i) => (
          <div
            key={i}
            className="relative rounded-[28px] bg-neutral-700/60"
            style={{ height: p.h, width: p.w, opacity: p.o }}
          >
            <div className="absolute top-2 left-0 right-0 px-4 text-[10px] text-white/40 flex justify-between">
              <span>9:41</span>
              <span>▮▮▮</span>
            </div>

            <div className="absolute inset-x-4 top-10 bottom-8 rounded-xl bg-white/5" />
            <div className="absolute inset-0 rounded-[28px] bg-gradient-to-b from-transparent to-black/30" />
          </div>
        )
      )}
    </div>

    {/* FLOATING CARD — 10K */}
    <div className="absolute left-[18%] top-[44%] z-30 w-[220px] rounded-2xl bg-white px-5 py-4 shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
      <div className="flex items-center justify-between">
        <div className="h-7 w-7 rounded-full bg-orange-200" />
        <div className="h-4 w-10 rounded bg-orange-300/60" />
      </div>

      <div className="mt-2 text-[28px] font-semibold text-black">
        <CountUp value={10} />K
      </div>
      <p className="text-sm text-neutral-500">Active Projects</p>
      <p className="mt-1 text-xs font-medium text-green-500">▲ 2.4%</p>
    </div>

    {/* FLOATING CARD — 25K */}
    <div className="absolute right-[18%] top-[56%] z-30 w-[220px] rounded-2xl bg-white px-5 py-4 shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
      <div className="flex items-center justify-between">
        <div className="h-7 w-7 rounded-full bg-orange-200" />
        <div className="h-4 w-10 rounded bg-orange-300/60" />
      </div>

      <div className="mt-2 text-[28px] font-semibold text-black">
        <CountUp value={25} />K
      </div>
      <p className="text-sm text-neutral-500">Total Projects</p>
      <p className="mt-1 text-xs font-medium text-green-500">▲ 5.2%</p>
    </div>
  </div>
</div>


    </section>
    </AnimatedOnScroll>
    </ComponentLoader>
  )
}
