"use client"

import ComponentLoader from "./ComponentLoader"
import AnimatedOnScroll from "./AnimatedOnScroll"
import Image from "next/image"

interface Testimonial {
  quote: string
  name: string
  role: string
  avatar?: string
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[]
}

export default function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  return (
    <ComponentLoader variant="TestimonialsSection">
      <AnimatedOnScroll variant="fadeUp">
        <section className="relative z-30 py-20 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            {/* ORANGE GLOW BACKGROUND */}
            <div className="absolute inset-0 overflow-hidden">
              <div
                className="
          absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          w-[800px] h-[600px]
          bg-[radial-gradient(ellipse_at_center,rgba(255,120,40,0.15)_0%,transparent_70%)]
          blur-[80px]
          opacity-60
        "
              />
            </div>

            {/* HEADING */}
            <div className="relative z-10 mb-12 sm:mb-16 lg:mb-20 text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-4">
                What Developers Say
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-neutral-400 max-w-2xl mx-auto">
                Hear from developers who have transformed their workflow with ScaffoldGen CLI
              </p>
            </div>

            {/* TESTIMONIALS GRID */}
            <div className="relative z-10 grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="
                    group
                    relative
                    rounded-[16px] sm:rounded-[20px]
                    bg-gradient-to-br
                    from-black/80
                    via-gray-900/60
                    to-orange-900/20
                    p-6 sm:p-8
                    ring-1
                    ring-white/10
                    shadow-[0_8px_32px_0_rgba(255,120,40,0.15)]
                    backdrop-blur-sm
                    transition-all
                    duration-500
                    hover:-translate-y-2
                    hover:scale-[1.02]
                    hover:shadow-[0_20px_60px_0_rgba(255,120,40,0.25),0_0_40px_rgba(255,120,40,0.1)]
                    hover:ring-orange-400/20
                  "
                >
                  {/* GLOW EFFECT */}
                  <div
                    className="
              absolute inset-0
              rounded-[16px] sm:rounded-[20px]
              bg-[radial-gradient(ellipse_at_top_right,rgba(255,120,40,0.1)_0%,transparent_60%)]
              blur-[20px]
              opacity-50
              transition-all
              duration-500
              group-hover:opacity-80
              group-hover:blur-[25px]
            "
                  />

                  {/* QUOTE ICON */}
                  <div className="relative z-10 mb-4">
                    <svg
                      className="w-8 h-8 text-orange-400 transition-all duration-300 group-hover:scale-110 group-hover:text-orange-300 group-hover:drop-shadow-[0_0_8px_rgba(255,165,0,0.6)]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14,17H17L19,13V7H13V13H16M6,17H9L11,13V7H5V13H8L6,17Z" />
                    </svg>
                  </div>

                  <blockquote className="relative z-10 text-sm sm:text-base text-neutral-200 leading-relaxed mb-6 transition-all duration-300 group-hover:text-white/90 group-hover:drop-shadow-[0_0_4px_rgba(255,255,255,0.1)]">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>

                  <div className="relative z-10 flex items-center gap-3">
                    {testimonial.avatar ? (
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        width={40}
                        height={40}
                        className="w-10 h-10 rounded-full ring-2 ring-orange-400/30 transition-all duration-300 group-hover:scale-110 group-hover:ring-orange-400/60 group-hover:shadow-[0_0_15px_rgba(255,120,40,0.4)]"
                      />
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-orange-400/20 ring-2 ring-orange-400/30 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-orange-400/30 group-hover:ring-orange-400/60 group-hover:shadow-[0_0_15px_rgba(255,120,40,0.4)]">
                        <span className="text-orange-400 font-semibold text-sm transition-all duration-300 group-hover:text-orange-300">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                    )}
                    <div>
                      <div className="text-white font-medium text-sm sm:text-base transition-all duration-300 group-hover:text-orange-200 group-hover:drop-shadow-[0_0_6px_rgba(255,165,0,0.4)]">
                        {testimonial.name}
                      </div>
                      <div className="text-neutral-400 text-xs sm:text-sm transition-all duration-300 group-hover:text-neutral-300">
                        {testimonial.role}
                      </div>
                    </div>
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