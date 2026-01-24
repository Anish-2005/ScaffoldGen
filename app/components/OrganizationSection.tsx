"use client"

import { Image } from "lucide-react"
import ComponentLoader from "./ComponentLoader"
import AnimatedOnScroll from "./AnimatedOnScroll"

export default function OrganizationSection() {
  return (
    <ComponentLoader variant="OrganizationSection">
      <AnimatedOnScroll variant="fadeIn">
        <section className="bg-black pt-20 sm:pt-24 lg:pt-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 text-center">

            {/* ================= HEADING ================= */}
            <h2 className="mb-10 sm:mb-14 lg:mb-16 text-3xl sm:text-4xl font-semibold text-white">
              Organizations
            </h2>

            {/* ================= CARD ================= */}
            <div className="flex justify-center">
              <div
                className="
                  relative
                  h-[200px] sm:h-[220px]
                  w-full max-w-[320px] sm:max-w-[360px]
                  rounded-2xl
                  bg-gradient-to-r
                  from-black
                  via-black
                  to-yellow-900/60
                "
              >
                {/* Soft inner shading */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-black/40" />

                {/* Content */}
                <div className="relative flex h-full flex-col items-center justify-center gap-4">
                  {/* Icon */}
                  <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-lg border border-white/20">
                    <Image className="h-4 w-4 sm:h-5 sm:w-5 text-white/70" />
                  </div>

                  {/* Text */}
                  <span className="text-base sm:text-lg font-medium text-white">
                    Resourcio Community
                  </span>
                </div>
              </div>
            </div>

          </div>
        </section>
      </AnimatedOnScroll>
    </ComponentLoader>
  )
}
