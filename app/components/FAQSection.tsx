"use client"

import ComponentLoader from "./ComponentLoader"
import AnimatedOnScroll from "./AnimatedOnScroll"

interface FAQSectionProps {
  questions: string[]
}

export default function FAQSection({ questions }: FAQSectionProps) {
  return (
    <ComponentLoader variant="FAQSection">
      <AnimatedOnScroll variant="fadeUp">
        <section className="bg-black py-20 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">

            {/* ================= HEADING ================= */}
            <h2 className="mb-10 sm:mb-14 lg:mb-16 text-center text-3xl sm:text-4xl font-semibold text-white">
              FAQ
            </h2>

            {/* ================= GRID ================= */}
            <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
              {questions.map((q, i) => (
                <div
                  key={i}
                  className="
                    relative
                    rounded-xl
                    bg-gradient-to-r
                    from-black
                    via-black
                    to-yellow-900/60
                    px-5 sm:px-6
                    py-4 sm:py-5
                    ring-1
                    ring-white/10
                    shadow-[0_0_32px_0_rgba(255,255,255,0.06)]
                  "
                >
                  {/* Inner subtle highlight */}
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-white/5" />

                  <div className="flex items-start justify-between gap-4">
                    <span className="text-sm sm:text-[16px] font-medium text-white leading-relaxed">
                      {q}
                    </span>

                    {/* Chevron */}
                    <svg
                      className="h-4 w-4 sm:h-5 sm:w-5 text-white/70 flex-shrink-0 mt-1"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedOnScroll>
    </ComponentLoader>
  )
}
