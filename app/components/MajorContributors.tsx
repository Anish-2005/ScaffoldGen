"use client"

import { ImageIcon } from "lucide-react"
import ComponentLoader from "./ComponentLoader"
import AnimatedOnScroll from "./AnimatedOnScroll"

export default function MajorContributors() {
  const contributors = [
    { name: "Name 1", role: "Core Contributor", image: null },
    { name: "Name 2", role: "Core Contributor", image: null },
    { name: "Name 3", role: "Core Contributor", image: null },
    { name: "Name 4", role: "Core Contributor", image: null },
  ]

  return (
    <ComponentLoader variant="MajorContributors">
      <AnimatedOnScroll variant="fadeIn">
        <section className="relative bg-black py-20 lg:py-28">
          <div className="mx-auto max-w-[1280px] px-4 sm:px-6">

            {/* ================= HEADING ================= */}
            <h2 className="mb-10 lg:mb-14 text-center text-3xl sm:text-4xl font-medium text-white">
              Major Contributors
            </h2>

            {/* ================= CARDS GRID ================= */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {contributors.map((c, i) => (
                <div
                  key={i}
                  className="
                    group
                    relative
                    h-[260px] sm:h-[280px] lg:h-[300px]
                    rounded-lg
                    bg-gradient-to-r
                    from-black
                    via-black
                    to-yellow-900/60
                    p-5 lg:p-6
                    transition-all
                    duration-500
                    hover:-translate-y-2
                    hover:shadow-[0_30px_80px_rgba(255,120,40,0.25)]
                    flex
                    flex-col
                  "
                >
                  {/* Subtle inner sheen */}
                  <div className="pointer-events-none absolute inset-0 rounded-lg bg-gradient-to-b from-white/5 via-transparent to-black/40" />

                  {/* Content */}
                  <div className="relative z-10 flex h-full flex-col items-center">

                    {/* Avatar */}
                    <div
                      className="
                        mt-4 sm:mt-6
                        mb-6
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-md
                        border
                        border-white/20
                        text-white/60
                      "
                    >
                      {c.image ? (
                        <img
                          src={c.image}
                          alt={c.name}
                          className="h-full w-full rounded-md object-cover"
                        />
                      ) : (
                        <ImageIcon className="h-6 w-6" />
                      )}
                    </div>

                    {/* Name + Role pinned to bottom */}
                    <div className="mt-auto pb-2 text-center">
                      <p className="text-base sm:text-lg font-medium text-white leading-tight">
                        {c.name}
                      </p>
                      <p className="mt-1 text-sm text-white/50">
                        {c.role}
                      </p>
                    </div>
                  </div>

                  {/* Hover glow (safe on mobile) */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      rounded-2xl
                      opacity-0
                      transition-opacity
                      duration-500
                      group-hover:opacity-100
                      shadow-[inset_0_0_60px_rgba(255,120,40,0.35)]
                    "
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedOnScroll>
    </ComponentLoader>
  )
}
