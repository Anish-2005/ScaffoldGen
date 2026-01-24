"use client"

import ComponentLoader from "./ComponentLoader"
import AnimatedOnScroll from "./AnimatedOnScroll"

export default function DownloadReleaseSection() {
  return (
    <ComponentLoader variant="DownloadReleaseSection">
      <AnimatedOnScroll variant="fadeUp">
        <section className="relative z-10 bg-transparent py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl w-full px-4 sm:px-6">

            <div className="grid gap-12 sm:gap-16 md:gap-20 md:grid-cols-2 place-content-center mx-auto">

              {/* ================= LATEST DOWNLOAD ================= */}
              <div className="md:ml-[10px] text-center md:text-left">
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Latest Download
                </h3>

                <p className="mt-4 max-w-md mx-auto md:mx-0 text-sm leading-relaxed text-neutral-400">
                  The latest version of our CLI tool is now available for download on
                  Linux. Get the latest features and improvements by downloading the
                  latest release.
                </p>

                <button className="group relative mt-6 rounded-md bg-[#ff6b35] px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-[#ff9a6b] hover:scale-105 hover:shadow-[0_0_20px_rgba(255,107,53,0.4)] overflow-hidden">
                  <span className="pointer-events-none absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="absolute inset-[-4px] rounded-md bg-[conic-gradient(from_0deg,transparent_0deg,rgba(255,180,120,0.8)_40deg,rgba(255,180,120,0.4)_70deg,transparent_110deg)] blur-[6px] animate-[perimeter-beam_2s_linear_infinite]" />
                    <span className="absolute inset-[2px] rounded-md bg-[#ff6b35]" />
                  </span>
                  <span className="relative z-10 group-hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.7)] transition-all duration-300">Download for Linux</span>
                </button>
              </div>

              {/* ================= LATEST RELEASE ================= */}
              <div className="md:ml-[10px] text-center md:text-left">
                <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                  Latest Release
                </h3>

                <p className="mt-4 max-w-md mx-auto md:mx-0 text-sm leading-relaxed text-neutral-400">
                  Check out the latest release of our CLI tool, packed with new features
                  and improvements. See what’s new and get the latest version.
                </p>

                <button className="group relative mt-6 rounded-md bg-[#ff6b35] px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-[#ff9a6b] hover:scale-105 hover:shadow-[0_0_20px_rgba(255,107,53,0.4)] overflow-hidden">
                  <span className="pointer-events-none absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="absolute inset-[-4px] rounded-md bg-[conic-gradient(from_0deg,transparent_0deg,rgba(255,180,120,0.8)_40deg,rgba(255,180,120,0.4)_70deg,transparent_110deg)] blur-[6px] animate-[perimeter-beam_2s_linear_infinite]" />
                    <span className="absolute inset-[2px] rounded-md bg-[#ff6b35]" />
                  </span>
                  <span className="relative z-10 group-hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.7)] transition-all duration-300">View Latest Release</span>
                </button>
              </div>

            </div>
          </div>
        </section>
      </AnimatedOnScroll>
    </ComponentLoader>
  )
}
