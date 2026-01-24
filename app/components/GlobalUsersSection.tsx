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
      duration: 6,
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
        <section className="relative overflow-hidden bg-black py-20 sm:py-24 lg:py-32">

          {/* ORANGE EDGE GLOWS */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 h-[200px] w-[200px] sm:h-[260px] sm:w-[260px] rounded-full bg-orange-500/35 blur-[90px] sm:blur-[100px]" />
            <div className="absolute -right-[60px] sm:-right-[80px] top-1/2 -translate-y-1/2 h-[180px] w-[180px] sm:h-[220px] sm:w-[220px] rounded-full bg-orange-400/30 blur-[70px] sm:blur-[80px]" />
          </div>

          {/* HEADER */}
          <div className="relative z-10 mb-14 sm:mb-16 lg:mb-20 flex flex-col items-start mx-auto max-w-[1280px] px-4 sm:px-6">
            <div className="mb-3 inline-flex items-center rounded-full border border-white/20 px-4 py-1 backdrop-blur-sm">
              <span className="text-[10px] sm:text-[11px] font-medium tracking-[0.28em] text-white">
                STATISTICS
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-medium tracking-tight text-white">
              Global Users
            </h2>
          </div>

          {/* MAIN GLASS CONTAINER */}
          <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6">
            <div
              className="
                relative
                overflow-hidden
                rounded-[22px] sm:rounded-[28px]
                px-6 sm:px-12 lg:px-20
                py-16 sm:py-20 lg:py-24
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
                <div className="absolute bottom-0 left-0 right-0 h-[120px] sm:h-[160px] bg-gradient-to-t from-[#1a1714] to-transparent" />
                <div className="absolute left-0 top-0 bottom-0 w-[80px] sm:w-[140px] bg-gradient-to-r from-[#1a1714] to-transparent" />
                <div className="absolute right-0 top-0 bottom-0 w-[80px] sm:w-[140px] bg-gradient-to-l from-[#1a1714] to-transparent" />
              </div>

              {/* PHONES */}
              <div className="relative flex items-end justify-center gap-4 sm:gap-8 lg:gap-10 translate-y-6 sm:translate-y-10">

                {/* LEFT STACK */}
                {[{ h: 240, w: 140, o: 0.3 }, { h: 300, w: 170, o: 0.5 }].map(
                  (p, i) => (
                    <div
                      key={i}
                      className="relative rounded-[22px] bg-neutral-700/60"
                      style={{
                        height: p.h,
                        width: p.w,
                        opacity: p.o,
                      }}
                    >
                      <div className="absolute top-2 left-0 right-0 px-3 text-[9px] text-white/40 flex justify-between">
                        <span>9:41</span>
                        <span>▮▮▮</span>
                      </div>
                      <div className="absolute inset-x-3 top-8 bottom-6 rounded-lg bg-white/5" />
                      <div className="absolute inset-0 rounded-[22px] bg-gradient-to-b from-transparent to-black/30" />
                    </div>
                  )
                )}

                {/* CENTER PHONE */}
                <div className="relative z-10 h-[360px] sm:h-[420px] lg:h-[460px] w-[200px] sm:w-[230px] lg:w-[260px] rounded-[30px] bg-neutral-200 shadow-[0_40px_90px_rgba(0,0,0,0.65)]">
                  <div className="absolute top-2 left-0 right-0 px-4 text-[10px] text-black/50 flex justify-between">
                    <span>9:41</span>
                    <span>▮▮▮</span>
                  </div>

                  <div className="absolute top-3 left-1/2 h-4 sm:h-5 w-24 sm:w-28 -translate-x-1/2 rounded-full bg-black" />

                  <div className="absolute inset-x-4 sm:inset-x-6 top-12 sm:top-14 rounded-2xl bg-white p-4 shadow">
                    <div className="text-2xl sm:text-3xl font-semibold text-black">25K</div>
                    <p className="text-xs text-neutral-500">Total Shipment</p>
                    <div className="mt-3 h-10 sm:h-12 w-full rounded bg-gradient-to-r from-indigo-400/40 to-indigo-500/70" />
                  </div>

                  <div className="absolute inset-0 rounded-[30px] bg-gradient-to-b from-transparent to-black/10" />
                </div>

                {/* RIGHT STACK */}
                {[{ h: 300, w: 170, o: 0.5 }, { h: 240, w: 140, o: 0.3 }].map(
                  (p, i) => (
                    <div
                      key={i}
                      className="relative rounded-[22px] bg-neutral-700/60"
                      style={{
                        height: p.h,
                        width: p.w,
                        opacity: p.o,
                      }}
                    >
                      <div className="absolute top-2 left-0 right-0 px-3 text-[9px] text-white/40 flex justify-between">
                        <span>9:41</span>
                        <span>▮▮▮</span>
                      </div>
                      <div className="absolute inset-x-3 top-8 bottom-6 rounded-lg bg-white/5" />
                      <div className="absolute inset-0 rounded-[22px] bg-gradient-to-b from-transparent to-black/30" />
                    </div>
                  )
                )}
              </div>

              {/* FLOATING CARDS */}
              <div className="absolute left-[8%] sm:left-[18%] top-[42%] sm:top-[44%] z-30 w-[180px] sm:w-[220px] rounded-2xl bg-white px-4 sm:px-5 py-3 sm:py-4 shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
                <div className="mt-1 text-[22px] sm:text-[28px] font-semibold text-black">
                  <CountUp value={10} />K
                </div>
                <p className="text-sm text-neutral-500">Active Projects</p>
              </div>

              <div className="absolute right-[8%] sm:right-[18%] top-[58%] sm:top-[56%] z-30 w-[180px] sm:w-[220px] rounded-2xl bg-white px-4 sm:px-5 py-3 sm:py-4 shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
                <div className="mt-1 text-[22px] sm:text-[28px] font-semibold text-black">
                  <CountUp value={25} />K
                </div>
                <p className="text-sm text-neutral-500">Total Projects</p>
              </div>

            </div>
          </div>
        </section>
      </AnimatedOnScroll>
    </ComponentLoader>
  )
}
