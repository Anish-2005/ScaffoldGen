"use client"
import Image from "next/image"
import { Github, MessageCircle, Linkedin } from "lucide-react"
import ComponentLoader from "./ComponentLoader"
import AnimatedOnScroll from "./AnimatedOnScroll"

export default function Footer() {
  return (
    <footer className="relative bg-black pt-16 sm:pt-20 lg:pt-24 pb-10">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-20 sm:h-24 bg-gradient-to-b from-neutral-900/40 to-transparent" /> 

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
            <div className="grid grid-cols-1 gap-12 sm:gap-16 md:grid-cols-3">
              <div className="flex justify-center md:justify-start">
                <button 
                  type="button"
                  className="flex items-center gap-3 group cursor-pointer pointer-events-auto relative z-10 bg-transparent border-0 p-0"
                  onClick={() => {
                    window.scrollTo({
                      top: 0,
                      left: 0,
                      behavior: 'smooth'
                    });
                  }}
                >
                  <Image 
                    width={160}
                    height={32}
                    src="/logo.png"
                    alt="ScaffoldGen logo"
                    className="h-8 sm:h-9 w-auto max-w-[160px] transition-all duration-300 group-hover:scale-105 group-hover:drop-shadow-[0_0_8px_rgba(255,120,40,0.4)]"
                  />
                </button>
              </div>

              <div className="text-center md:text-left">
                <h4 className="mb-5 text-base sm:text-lg font-medium text-white">
                  Quick Links
                </h4>

                <ul className="space-y-3 sm:space-y-4 text-sm sm:text-[15px] text-neutral-400">
                  <li className="transition-all duration-300 hover:text-orange-400 hover:translate-x-1 cursor-pointer">Downloads</li>
                  <li className="transition-all duration-300 hover:text-orange-400 hover:translate-x-1 cursor-pointer">Releases</li>
                  <li className="transition-all duration-300 hover:text-orange-400 hover:translate-x-1 cursor-pointer">Documentation</li>
                  <li className="transition-all duration-300 hover:text-orange-400 hover:translate-x-1 cursor-pointer">Support</li>
                </ul>
              </div>

              <div className="text-center md:text-left">
                <h4 className="mb-5 text-base sm:text-lg font-medium text-white">
                  Connect with Us
                </h4>

                <ul className="space-y-3 sm:space-y-4 text-sm sm:text-[15px] text-neutral-400">
                  <li className="flex items-center justify-center md:justify-start gap-3 transition-all duration-300 hover:text-orange-400 hover:translate-x-1 cursor-pointer group">
                    <Linkedin className="w-5 h-5 transition-all duration-300 group-hover:scale-110 group-hover:text-blue-400" />
                    LinkedIn
                  </li>
                  <li className="flex items-center justify-center md:justify-start gap-3 transition-all duration-300 hover:text-orange-400 hover:translate-x-1 cursor-pointer group">
                    <Github className="w-5 h-5 transition-all duration-300 group-hover:scale-110 group-hover:text-gray-300" />
                    GitHub
                  </li>
                  <li className="flex items-center justify-center md:justify-start gap-3 transition-all duration-300 hover:text-orange-400 hover:translate-x-1 cursor-pointer group">
                    <MessageCircle className="w-5 h-5 transition-all duration-300 group-hover:scale-110 group-hover:text-indigo-400" />
                    Discord
                  </li>
                </ul>
              </div>

            </div>

            <div className="mt-16 sm:mt-20 text-center md:text-left text-xs sm:text-sm text-neutral-500 transition-all duration-300 hover:text-neutral-400">
              © 2024 ScaffoldGenCLI. All rights reserved.
            </div>
          </div>
        </footer>
  )
}
