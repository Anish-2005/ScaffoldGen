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

            <h2 className="mb-10 sm:mb-14 lg:mb-16 text-3xl sm:text-4xl font-semibold text-white">
              Organizations
            </h2>

            <div className="flex justify-center">
             <div
  className="
    group
    relative

    /* RESPONSIVE SHAPE */
    aspect-[4/5] sm:aspect-[3/2] lg:aspect-[4/3]
    w-full sm:w-[360px] lg:w-[320px]

    rounded-2xl
    bg-gradient-to-r
    from-black
    to-yellow-900/80

    transition-all
    duration-500
    hover:-translate-y-3
    hover:scale-105
    hover:shadow-[0_25px_60px_rgba(255,120,40,0.3),0_0_40px_rgba(255,120,40,0.15)]
  "
>

                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-black/40" />
                <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 shadow-[inset_0_0_50px_rgba(255,120,40,0.25)]" />
                <div className="relative flex h-full flex-col items-center justify-center gap-4">
                  <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-lg border border-white/20 transition-all duration-300 group-hover:scale-110 group-hover:border-yellow-400/50 group-hover:shadow-[0_0_15px_rgba(255,120,40,0.5)]">
                    {/* eslint-disable-next-line jsx-a11y/alt-text */}
                    <Image className="h-4 w-4 sm:h-5 sm:w-5 text-white/70 transition-all duration-300 group-hover:text-yellow-300" aria-hidden="true" />
                  </div>

                  <span className="text-base sm:text-lg font-medium text-white transition-all duration-300 group-hover:text-yellow-200 group-hover:drop-shadow-[0_0_8px_rgba(255,120,40,0.6)]">
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
