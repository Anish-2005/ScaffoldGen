import ComponentLoader from "./ComponentLoader"
import AnimatedOnScroll from "./AnimatedOnScroll"
import React, { useState, useEffect } from 'react'

const lines = [
  {
    text: "~> cd web_development\n",
    colors: [
      { start: 0, end: 1, class: 'text-cyan-400' },
      { start: 1, end: 2, class: 'text-green-400' },
      { start: 3, end: 5, class: 'text-yellow-300' },
      { start: 5, end: 21, class: '' },
    ],
  },
  {
    text: "~> scaffoldgen new **my-awesome-app** --template next-ts --style tailwind\n",
    colors: [
      { start: 0, end: 1, class: 'text-cyan-400' },
      { start: 1, end: 2, class: 'text-green-400' },
      { start: 3, end: 13, class: 'text-yellow-300' },
      { start: 13, end: 30, class: 'text-yellow-300' },
      { start: 30, end: 65, class: '' },
    ],
  },
  {
    text: "~> scaffoldgen generate **component** UserProfile --type rfc\n",
    colors: [
      { start: 0, end: 1, class: 'text-cyan-400' },
      { start: 1, end: 2, class: 'text-green-400' },
      { start: 3, end: 23, class: 'text-yellow-300' },
      { start: 23, end: 34, class: 'text-yellow-300' },
      { start: 34, end: 54, class: '' },
    ],
  },
  {
    text: "~> scaffoldgen create **route** auth --handler login,register\n",
    colors: [
      { start: 0, end: 1, class: 'text-cyan-400' },
      { start: 1, end: 2, class: 'text-green-400' },
      { start: 3, end: 20, class: 'text-yellow-300' },
      { start: 20, end: 27, class: 'text-yellow-300' },
      { start: 27, end: 58, class: '' },
    ],
  },
  {
    text: "~> scaffoldgen config set **default-lang** python",
    colors: [
      { start: 0, end: 1, class: 'text-cyan-400' },
      { start: 1, end: 2, class: 'text-green-400' },
      { start: 3, end: 23, class: 'text-yellow-300' },
      { start: 23, end: 38, class: 'text-yellow-300' },
      { start: 38, end: 44, class: '' },
    ],
  },
]

export default function AboutSection() {
  const [currentLine, setCurrentLine] = useState(0)
  const [currentChar, setCurrentChar] = useState(0)
  const [paused, setPaused] = useState(false)

  const renderColoredText = (text: string, colors: { start: number; end: number; class: string }[], keyPrefix: string) => {
    const result: React.ReactElement[] = []
    let lastEnd = 0
    for (const color of colors) {
      if (color.start >= text.length) continue
      if (lastEnd < color.start) {
        result.push(<span key={`${keyPrefix}-${lastEnd}`}>{text.substring(lastEnd, color.start)}</span>)
      }
      result.push(<span key={`${keyPrefix}-${color.start}`} className={color.class}>{text.substring(color.start, Math.min(color.end, text.length))}</span>)
      lastEnd = Math.max(lastEnd, color.end)
    }
    if (lastEnd < text.length) {
      result.push(<span key={`${keyPrefix}-${lastEnd}`}>{text.substring(lastEnd)}</span>)
    }
    return result
  }

  const renderText = () => {
    const elements: React.ReactElement[] = []
    for (let i = 0; i <= currentLine; i++) {
      const line = lines[i]
      const textToRender = i === currentLine ? line.text.substring(0, currentChar) : line.text
      elements.push(...renderColoredText(textToRender, line.colors, `line-${i}`))
    }
    return elements
  }

  useEffect(() => {
    if (paused) return

    const interval = setInterval(() => {
      setCurrentChar((prev) => {
        const line = lines[currentLine]
        if (prev < line.text.length) {
          return prev + 1
        } else {
          if (currentLine < lines.length - 1) {
            setCurrentLine(currentLine + 1)
            return 0
          } else {
            setPaused(true)
            setTimeout(() => {
              setPaused(false)
              setCurrentLine(0)
              setCurrentChar(0)
            }, 2000)
            return prev
          }
        }
      })
    }, 50) // Adjust speed

    return () => clearInterval(interval)
  }, [currentLine, paused])

  return (
    <ComponentLoader variant="AboutSection">
      <AnimatedOnScroll variant="fadeUp">
        <section className="relative z-30 -mt-[80px] sm:-mt-[140px] md:-mt-[180px] lg:-mt-[280px] pb-20 md:pb-28 lg:pb-44">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            <div className="relative rounded-[20px] md:rounded-[24px] lg:rounded-[28px] p-[2px]">

              <div
                className="
      absolute inset-[-8%]
      rounded-[28px]
      bg-[radial-gradient(ellipse_at_bottom,rgba(255,120,40,0.85)_0%,rgba(255,120,40,0.45)_20%,rgba(255,90,20,0.25)_40%,transparent_100%)]
      blur-[60px]
      md:blur-[70px]
      lg:blur-[80px]
      opacity-90
    "
              />

              <div
                className="
      absolute inset-[-4%]
      rounded-[26px]
      bg-[radial-gradient(ellipse_at_right,rgba(255,140,60,0.25)_0%,transparent_100%)]
      blur-[40px]
      opacity-60
    "
              />


              <div className="relative rounded-[16px] md:rounded-[20px] lg:rounded-[24px] bg-black px-5 pt-6 pb-8 sm:px-7 sm:pt-8 sm:pb-10 md:px-10 md:pt-10 md:pb-12 lg:px-12 lg:pt-12 lg:pb-16">
                <div className="grid gap-8 md:gap-10 lg:gap-12 lg:grid-cols-2">

                  <div className="lg:order-1">
                    <h3 className="text-lg md:text-[19px] lg:text-[20px] xl:text-[22px] font-medium text-white">
                      About ScaffoldGen CLI
                    </h3>

                    <p className="mt-4 md:mt-5 px-4 py-2 md:px-0 md:py-0 max-w-full md:max-w-md text-sm md:text-[13.5px] lg:text-[14px] xl:text-[14.5px] leading-relaxed text-neutral-400">
                      Our CLI tool is a powerful and versatile command-line interface that
                      helps developers streamline their workflow and boost productivity.
                      With a wide range of features and customization options, it&apos;s the
                      perfect tool for any developer looking to optimize their development
                      process.
                    </p>

                    <button className="group relative mt-6 md:mt-7 rounded-md bg-[#ff6b35] px-5 py-2.5 text-xs md:text-[13px] lg:text-[13.5px] font-medium text-white transition-all duration-300 hover:bg-[#ff9a6b] hover:scale-105 hover:shadow-[0_0_20px_rgba(255,107,53,0.4)] overflow-hidden">
                      <span className="pointer-events-none absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="absolute inset-[-4px] rounded-md bg-[conic-gradient(from_0deg,transparent_0deg,rgba(255,180,120,0.8)_40deg,rgba(255,180,120,0.4)_70deg,transparent_110deg)] blur-[6px] animate-[perimeter-beam_2s_linear_infinite]" />
                        <span className="absolute inset-[2px] rounded-md bg-[#ff6b35]" />
                      </span>
                      <span className="relative z-10 group-hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.7)] transition-all duration-300">Learn More</span>
                    </button>

                    <div className="hidden lg:block h-10" />
                  </div>

                  {/* TERMINAL AREA */}
                  <div className="relative px-4 py-2 md:px-0 md:py-0 overflow-hidden lg:order-2 w-full max-w-full">
                    <div className="absolute -inset-x-2 -inset-y-2 sm:-inset-x-3 sm:-inset-y-3 md:-inset-x-4 md:-inset-y-4 lg:-inset-x-5 lg:-inset-y-5 xl:-inset-x-6 xl:-inset-y-6 rounded-xl md:rounded-2xl lg:rounded-3xl bg-gradient-to-b from-neutral-700/40 via-neutral-800/30 to-transparent blur-[16px] md:blur-[22px] lg:blur-[26px] xl:blur-[30px]" />
                    <div className="relative overflow-x-auto w-full max-w-full">
                      <div className="w-full max-w-full sm:min-w-[240px] md:min-w-[280px] lg:min-w-[320px] xl:min-w-[380px] rounded-lg md:rounded-xl lg:rounded-2xl bg-neutral-950 shadow-[0_20px_60px_rgba(0,0,0,0.8)] md:shadow-[0_25px_70px_rgba(0,0,0,0.8)] lg:shadow-[0_30px_80px_rgba(0,0,0,0.8)]">
                        <div className="flex items-center gap-2 rounded-t-lg md:rounded-t-xl lg:rounded-t-2xl bg-neutral-800 px-3 py-2.5 sm:px-3 sm:py-2.5 md:px-4 md:py-3 lg:px-5 lg:py-3">
                          <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 md:h-3.5 md:w-3.5 rounded-full bg-red-500" />
                          <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 md:h-3.5 md:w-3.5 rounded-full bg-yellow-400" />
                          <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 md:h-3.5 md:w-3.5 rounded-full bg-green-500" />
                          <span className="ml-auto text-[10px] sm:text-[11px] md:text-[12px] lg:text-xs">
                            scaffoldgen
                          </span>
                        </div>
                        <pre className="px-3 pt-3 pb-4 sm:px-3 sm:pt-3 sm:pb-4 md:px-4 md:pt-4 md:pb-5 lg:px-5 lg:pt-4 lg:pb-6 xl:px-6 xl:pt-5 xl:pb-8 text-[10px] sm:text-[11px] md:text-[12px] lg:text-sm xl:text-[13px] leading-relaxed text-neutral-200 whitespace-pre-line break-all overflow-x-auto max-w-full">
                          {renderText()}
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedOnScroll>
    </ComponentLoader>
  )
}