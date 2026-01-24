"use client"

import { motion, useReducedMotion, Variants } from "framer-motion"
import React from "react"

const variants: Record<string, Variants> = {
  fadeUp: {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.64, ease: [0.22, 1, 0.36, 1] } },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  },
  fadeRight: {
    hidden: { opacity: 0, x: -18 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.64, ease: [0.22, 1, 0.36, 1] } },
  },
  fadeDown: {
    hidden: { opacity: 0, y: -12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.58, ease: [0.22, 1, 0.36, 1] } },
  },
  zoomIn: {
    hidden: { opacity: 0, scale: 0.985 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.64, ease: [0.22, 1, 0.36, 1] } },
  },
}

export default function AnimatedOnScroll({
  children,
  variant = "fadeUp",
  className = "",
}: {
  children: React.ReactNode
  variant?: string
  className?: string
}) {
  const chosen = variants[variant] ?? variants.fadeUp
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      initial={shouldReduceMotion ? "visible" : "hidden"}
      whileInView={shouldReduceMotion ? "visible" : "visible"}
      viewport={{ once: true, amount: 0.38 }}
      variants={shouldReduceMotion ? { visible: { opacity: 1 } } : chosen}
      className={className}
    >
      {children}
    </motion.div>
  )
}
