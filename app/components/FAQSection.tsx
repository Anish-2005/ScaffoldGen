"use client"

import { useState } from "react"
import ComponentLoader from "./ComponentLoader"
import AnimatedOnScroll from "./AnimatedOnScroll"

interface FAQItem {
  question: string
  answer: string
}

interface FAQSectionProps {
  questions: string[]
}

export default function FAQSection({ questions }: FAQSectionProps) {
  // Sample answers for each question
  const faqData: FAQItem[] = questions.map((q, i) => ({
    question: q,
    answer: getSampleAnswer(i)
  }))

  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

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
              {faqData.map((faq, i) => (
                <div
                  key={i}
                  className="
                    group
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
                    transition-all
                    duration-300
                    hover:ring-orange-400/20
                    hover:shadow-[0_0_40px_0_rgba(255,120,40,0.15)]
                    cursor-pointer
                  "
                  onClick={() => toggleFAQ(i)}
                >
                  {/* Inner subtle highlight */}
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-white/5 transition-all duration-300 group-hover:ring-orange-400/10" />

                  <div className="flex items-start justify-between gap-4">
                    <span className="text-sm sm:text-[16px] font-medium text-white leading-relaxed transition-all duration-300 group-hover:text-orange-200">
                      {faq.question}
                    </span>

                    {/* Chevron */}
                    <svg
                      className={`h-4 w-4 sm:h-5 sm:w-5 text-white/70 flex-shrink-0 mt-1 transition-all duration-300 ${
                        openIndex === i ? 'rotate-180 text-orange-400' : 'group-hover:text-orange-300'
                      }`}
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

                  {/* Answer */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      openIndex === i ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="text-sm text-white/70 leading-relaxed border-t border-white/10 pt-4">
                      {faq.answer}
                    </p>
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

// Sample answers for FAQs
function getSampleAnswer(index: number): string {
  const answers = [
    "ScaffoldGen CLI is a powerful command-line tool designed to streamline your development workflow. It helps developers quickly scaffold projects, generate components, and manage configurations with ease.",
    "Yes, ScaffoldGen supports multiple programming languages including JavaScript, TypeScript, Python, and more. You can specify your preferred language during project initialization.",
    "Installation is simple! Just run `npm install -g scaffoldgen` or `yarn global add scaffoldgen` in your terminal. Make sure you have Node.js installed on your system.",
    "ScaffoldGen offers templates for React, Vue, Angular, Next.js, Express, FastAPI, and many more frameworks. You can also create custom templates for your specific needs.",
    "The CLI provides interactive prompts to guide you through configuration. You can also use flags and options for quick setup, or create configuration files for automated workflows.",
    "Yes, ScaffoldGen includes built-in testing setup for popular testing frameworks like Jest, Vitest, and PyTest. It automatically configures testing environments based on your project type.",
    "ScaffoldGen generates production-ready code with best practices built-in. It includes proper file structure, linting configuration, and optimized build settings.",
    "The CLI is extensible through plugins and custom templates. You can create your own generators and share them with the community through the ScaffoldGen marketplace.",
    "ScaffoldGen works on Windows, macOS, and Linux. It requires Node.js 16+ and supports all major package managers including npm, yarn, and pnpm."
  ]
  return answers[index % answers.length]
}
