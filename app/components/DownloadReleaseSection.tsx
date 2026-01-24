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

                <button className="mt-6 rounded-md bg-orange-500 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-orange-400">
                  Download for Linux
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

                <button className="mt-6 rounded-md bg-orange-500 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-orange-400">
                  View Latest Release
                </button>
              </div>

            </div>
          </div>
        </section>
      </AnimatedOnScroll>
    </ComponentLoader>
  )
}
