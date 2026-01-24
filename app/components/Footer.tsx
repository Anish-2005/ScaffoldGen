"use client"
import Image from "next/image"
import ComponentLoader from "./ComponentLoader"
import AnimatedOnScroll from "./AnimatedOnScroll"

export default function Footer() {
  return (
    <ComponentLoader variant="Footer">
      <AnimatedOnScroll variant="fadeUp">
        <footer className="relative bg-black pt-16 sm:pt-20 lg:pt-24 pb-10">
          {/* subtle top fade */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-20 sm:h-24 bg-gradient-to-b from-neutral-900/40 to-transparent" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
            <div className="grid grid-cols-1 gap-12 sm:gap-16 md:grid-cols-3">

              {/* ================= LEFT: LOGO ================= */}
              <div className="flex justify-center md:justify-start">
                <div className="flex items-center gap-3">
                  <Image 
                    width={160}
                    height={32}
                    src="/logo.png"
                    alt="ScaffoldGen logo"
                    className="h-8 sm:h-9 w-auto max-w-[160px]"
                  />
                </div>
              </div>

              {/* ================= MIDDLE: QUICK LINKS ================= */}
              <div className="text-center md:text-left">
                <h4 className="mb-5 text-base sm:text-lg font-medium text-white">
                  Quick Links
                </h4>

                <ul className="space-y-3 sm:space-y-4 text-sm sm:text-[15px] text-neutral-400">
                  <li className="transition hover:text-white cursor-pointer">Downloads</li>
                  <li className="transition hover:text-white cursor-pointer">Releases</li>
                  <li className="transition hover:text-white cursor-pointer">Documentation</li>
                  <li className="transition hover:text-white cursor-pointer">Support</li>
                </ul>
              </div>

              {/* ================= RIGHT: SOCIAL ================= */}
              <div className="text-center md:text-left">
                <h4 className="mb-5 text-base sm:text-lg font-medium text-white">
                  Connect with Us
                </h4>

                <ul className="space-y-3 sm:space-y-4 text-sm sm:text-[15px] text-neutral-400">
                  <li className="flex items-center justify-center md:justify-start gap-3 transition hover:text-white cursor-pointer">
                    <span className="text-lg">in</span>
                    LinkedIn
                  </li>
                  <li className="flex items-center justify-center md:justify-start gap-3 transition hover:text-white cursor-pointer">
                    <span className="text-lg">⌂</span>
                    GitHub
                  </li>
                  <li className="flex items-center justify-center md:justify-start gap-3 transition hover:text-white cursor-pointer">
                    <span className="text-lg">◌</span>
                    Discord
                  </li>
                </ul>
              </div>

            </div>

            {/* ================= BOTTOM ================= */}
            <div className="mt-16 sm:mt-20 text-center md:text-left text-xs sm:text-sm text-neutral-500">
              © 2024 ScaffoldGenCLI. All rights reserved.
            </div>
          </div>
        </footer>
      </AnimatedOnScroll>
    </ComponentLoader>
  )
}
