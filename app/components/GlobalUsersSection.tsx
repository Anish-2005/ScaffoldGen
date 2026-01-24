"use client"

import { motion, animate, useMotionValue } from "framer-motion"
import { useEffect, useState } from "react"
import { Wifi, Battery, Signal, Box } from "lucide-react"
import ComponentLoader from "./ComponentLoader"
import AnimatedOnScroll from "./AnimatedOnScroll"

function CountUp({ value }: { value: number }) {
  const mv = useMotionValue(0)
  const [v, setV] = useState(0)

  useEffect(() => {
    const c = animate(mv, value, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (l) => setV(Math.round(l)),
    })
    return () => c.stop()
  }, [value, mv])

  return <span>{v}</span>
}

interface PhoneData {
  value: number
  label: string
}

const phones: PhoneData[] = [
  { value: 15, label: "Active Users" },
  { value: 10, label: "Active Projects" },
  { value: 25, label: "Total Shipment" },
  { value: 52, label: "Total Users" },
  { value: 31, label: "Deployments" },
]

const X_POSITIONS = [-450, -225, 0, 225, 450]

/* PHONE */
function Phone({
  phone,
  index,
  active,
}: {
  phone: PhoneData
  index: number
  active: number
}) {
  let pos = index - active
  if (pos > 2) pos -= phones.length
  if (pos < -2) pos += phones.length
  const isActive = pos === 0

  return (
    <motion.div
      animate={{
        x: X_POSITIONS[pos + 2],
        scale: isActive ? 1 : Math.abs(pos) === 2 ? 0.7 : 0.82,
        opacity: isActive ? 1 : 0.35,
        zIndex: isActive ? 30 : 20 - Math.abs(pos),
      }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className={`
        absolute
        h-[400px] sm:h-[380px] lg:h-[420px]
        w-[220px] sm:w-[210px] lg:w-[240px]
        rounded-[34px]
        bg-gray-200/70
        shadow-[0_40px_90px_rgba(0,0,0,0.65)]
        overflow-hidden
        ${isActive ? 'border-4 border-black' : ''}
      `}
    >
      <div className="absolute top-2 left-0 right-0 px-4 text-xs text-white/70 flex justify-between">
        <span>9:41</span>
        <div className="flex gap-1">
          <Signal className="w-3 h-3" />
          <Wifi className="w-3 h-3" />
          <Battery className="w-4 h-3" />
        </div>
      </div>

      <div className="absolute top-1.5 left-1/2 -translate-x-1/2 h-4 w-20 rounded-full bg-black" />

      <div className="absolute inset-x-3 top-40 rounded-2xl bg-transparent border border-white/30 p-3 shadow-lg">
        {/* ICON */}
        <div className="flex justify-start mb-3">
          <div className="h-6 w-6 rounded-full bg-white flex items-center justify-center">
            <Box className="h-4 w-4 text-black" />
          </div>
        </div>
        <div className="text-2xl font-semibold text-white">
          {isActive ? <CountUp value={phone.value} /> : phone.value}K
        </div>
        <p className="text-xs text-gray-300 mt-1">{phone.label}</p>
        <div className="mt-3 h-10">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 120 40"
            fill="none"
          >
            <path
              d="M3 30 L26 18 L47 24 L70 12 L91 16 L117 4 L117 40 L3 40 Z"
              fill="url(#phoneBlueGradient)"
            />
            <path
              d="M3 30 L26 18 L47 24 L70 12 L91 16 L117 4"
              stroke="#3B82F6"
              strokeWidth="2"
              fill="none"
            />
            <defs>
              <linearGradient id="phoneBlueGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.1" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10" />
    </motion.div>
  )
}

function FloatingStatCard({
  value,
  label,
  percent,
  chartColor = "#F59E0B",
  gradientId = "areaGradient",
}: {
  value: number
  label: string
  percent: string
  chartColor?: string
  gradientId?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="
        w-[170px]
        rounded-2xl
        bg-white
        p-4
        shadow-[0_20px_60px_rgba(0,0,0,0.35)]
      "
    >
      <div className="flex items-start justify-between mb-3">
        <div className="h-7 w-7 rounded-full bg-orange-100 flex items-center justify-center">
          <Box className="h-4 w-4 text-orange-500" />
        </div>

        <svg width="46" height="20" viewBox="0 0 46 20" fill="none">
          <path
            d="M1 15 L10 9 L18 12 L27 6 L35 8 L45 2 L45 20 L1 20 Z"
            fill={`url(#${gradientId})`}
          />
          <path
            d="M1 15 L10 9 L18 12 L27 6 L35 8 L45 2"
            stroke={chartColor}
            strokeWidth="2"
            fill="none"
          />
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor={chartColor} stopOpacity="0.4" />
              <stop offset="100%" stopColor={chartColor} stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="text-3xl font-semibold text-black leading-tight">
        <CountUp value={value} />K
      </div>

      <div className="flex items-center gap-2 mt-1">
        <p className="text-xs text-neutral-500">{label}</p>
        <div className="inline-flex items-center gap-1 rounded-full bg-green-100 px-2 py-0.5">
          <span className="text-[10px] font-medium text-green-600">
            ↑ {percent}
          </span>
        </div>
      </div>
    </motion.div>
  )
}

export default function GlobalUsersSection() {
  const [active, setActive] = useState(2)

  useEffect(() => {
    const t = setInterval(() => {
      setActive((p) => (p + 1) % phones.length)
    }, 3600)
    return () => clearInterval(t)
  }, [])

  return (
    <ComponentLoader variant="GlobalUsersSection">
      <AnimatedOnScroll variant="fadeUp">
        <section className="relative overflow-hidden bg-black py-28">

          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-orange-500/40 blur-[160px]" />
            <div className="absolute -right-40 top-10 h-[460px] w-[460px] rounded-full bg-orange-400/40 blur-[180px]" />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-6 mb-10">
            <span className="inline-block mb-3 rounded-full border border-white/20 px-4 py-1 text-[11px] tracking-[0.3em] text-white">
              Our Solutions
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-white">
              Global Users
            </h2>
          </div>

          {/* GLASS CONTAINER */}
          <div className="relative z-10 mx-auto max-w-7xl px-6">
            <div
              className="
                relative
                rounded-[36px]
                bg-[#2a221d]/90
                backdrop-blur-xl
                py-28
                shadow-[0_90px_180px_rgba(0,0,0,0.75)]
                overflow-hidden
              "
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/0 via-black/10 to-black/40" />

              <div className="relative h-[420px] flex items-center justify-center">
                {phones.map((p, i) => (
                  <Phone key={i} phone={p} index={i} active={active} />
                ))}
              </div>

              <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-[160px] bg-gradient-to-t from-[#2a221d] to-transparent" />

              <div className="absolute left-[32%] top-[28%] z-40">
                <FloatingStatCard
                  value={10}
                  label="Active Projects"
                  percent="2.4%"
                  chartColor="#3B82F6"
                  gradientId="blueGradient"
                />
              </div>

              <div className="absolute right-[30%] top-[55%] z-40">
                <FloatingStatCard
                  value={25}
                  label="Total Projects"
                  percent="5.2%"
                  gradientId="orangeGradient"
                />
              </div>

            </div>
          </div>
        </section>
      </AnimatedOnScroll>
    </ComponentLoader>
  )
}
