"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import Image from "next/image"

export default function LoadingOverlay() {
  const pathname = usePathname()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const onLoad = () => setTimeout(() => setLoading(false), 260)
    if (typeof window === "undefined") return

    if (document.readyState === "complete") {
      setTimeout(() => setLoading(false), 0)
      return
    }
    window.addEventListener("load", onLoad)
    return () => window.removeEventListener("load", onLoad)
  }, [])

  useEffect(() => {
    if (!pathname) return
    setTimeout(() => setLoading(true), 0)
    const t = setTimeout(() => setLoading(false), 380)
    return () => clearTimeout(t)
  }, [pathname])

  if (!loading) return null

  return (
    <div className="loading-overlay fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-3">
        <div className="relative flex items-center justify-center h-20 w-20">
          <div className="loading-ring absolute inset-0 rounded-full" />
          <div className="relative flex items-center justify-center h-12 w-12 rounded-full bg-orange-600 shadow-md">
            <Image src="/Union.png" alt="logo" width={20} height={20} />
          </div>
        </div>
        <div className="text-sm font-medium text-white/90">Loading…</div>
      </div>
    </div>
  )
}
