"use client"

import { useState } from "react"
import Image from "next/image"
import ComponentLoader from "./ComponentLoader"
import AnimatedOnScroll from "./AnimatedOnScroll"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <ComponentLoader variant="Navbar">
      <AnimatedOnScroll variant="fadeDown">
        <nav className="sticky top-0 z-50 border-b border-neutral-800 bg-black/60 backdrop-blur">
          <div className="mx-auto flex h-16 max-w-7xl items-center px-4 sm:px-6 lg:px-8">

            {/* LEFT — LOGO */}
            <div className="flex items-center gap-2">
              <Image
                width={160}
                height={32}
                src="/logo.png"
                alt="ScaffoldGen logo"
                className="h-8 w-40 object-contain"
              />
            </div>

            {/* SPACER */}
            <div className="flex-1" />

            {/* DESKTOP NAV */}
            <div className="hidden items-center gap-6 md:flex">

              <a href="#" className="text-sm text-neutral-400 hover:text-white">
                Downloads
              </a>

              <a href="#" className="text-sm text-neutral-400 hover:text-white">
                Releases
              </a>

              {/* SEARCH */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-56 rounded-md border border-neutral-800 bg-neutral-900/60 px-4 py-2 text-sm text-white placeholder-neutral-500 focus:border-neutral-600 focus:outline-none"
                />
                <svg
                  className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-4.35-4.35m1.85-5.15a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>

              <a href="#" className="text-sm text-neutral-400 hover:text-white">
                Docs
              </a>

              <a href="#" className="text-sm text-neutral-400 hover:text-white">
                Snippet Manager
              </a>
            </div>

            {/* MOBILE HAMBURGER */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden flex items-center justify-center rounded-md border border-neutral-800 p-2 text-neutral-400 hover:text-white"
              aria-label="Toggle Menu"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                {open ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* MOBILE MENU */}
          <div
            className={`
              md:hidden
              overflow-hidden
              transition-all
              duration-300
              ${open ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"}
            `}
          >
            <div className="space-y-4 border-t border-neutral-800 bg-black/90 px-4 py-6">

              {/* SEARCH */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full rounded-md border border-neutral-800 bg-neutral-900/60 px-4 py-2 text-sm text-white placeholder-neutral-500 focus:border-neutral-600 focus:outline-none"
                />
                <svg
                  className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-4.35-4.35m1.85-5.15a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>

              <a href="#" className="block text-sm text-neutral-300 hover:text-white">
                Downloads
              </a>

              <a href="#" className="block text-sm text-neutral-300 hover:text-white">
                Releases
              </a>

              <a href="#" className="block text-sm text-neutral-300 hover:text-white">
                Docs
              </a>

              <a href="#" className="block text-sm text-neutral-300 hover:text-white">
                Snippet Manager
              </a>
            </div>
          </div>
        </nav>
      </AnimatedOnScroll>
    </ComponentLoader>
  )
}
