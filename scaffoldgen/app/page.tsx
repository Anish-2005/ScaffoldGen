'use client';

import Image from 'next/image';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import DownloadReleaseSection from './components/DownloadReleaseSection';
import { ChevronDown, Download, Github, Linkedin, Twitter } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  const faqItems = [
    {
      question: 'What is the ScaffoldGen CLI?',
      answer: 'ScaffoldGen CLI is a powerful command-line interface that connects interface builders and empowers you to create seamless workflows. It enables developers to scaffold projects with customizable templates and configurations.',
    },
    {
      question: 'How do I install the ScaffoldGen CLI?',
      answer: 'You can install ScaffoldGen CLI using npm or yarn. Simply run "npm install -g scaffoldgen" or "yarn global add scaffoldgen" to get started with the latest version.',
    },
    {
      question: 'What features does the ScaffoldGen CLI have?',
      answer: 'ScaffoldGen CLI includes multi-template and multi-language support, interactive configuration and prompting, component and module generation, and extensible post-processing pipeline capabilities.',
    },
    {
      question: 'How do I contribute to the ScaffoldGen CLI repo?',
      answer: 'We welcome contributions! You can contribute by forking the repository on GitHub, making your changes, and submitting a pull request. Please check our contribution guidelines for more details.',
    },
    {
      question: 'Is the ScaffoldGen CLI tool free to use?',
      answer: 'Yes, ScaffoldGen CLI is completely free and open-source, available under the MIT license. You can use it for personal, commercial, and educational purposes.',
    },
    {
      question: 'Where can I get support?',
      answer: 'You can get support through our GitHub issues, documentation, or community forum. Our team and community members are ready to help with any questions or issues you encounter.',
    },
  ];

  const contributors = [
    { name: 'Name 1', role: 'Core Contributor' },
    { name: 'Name 2', role: 'Core Contributor' },
    { name: 'Name 3', role: 'Core Contributor' },
    { name: 'Name 4', role: 'Core Contributor' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <DownloadReleaseSection />


    <section className="relative overflow-hidden bg-black py-40">
  <div className="relative mx-auto max-w-7xl">

    {/* ================= BACKGROUND QUADRANT GLOWS ================= */}
    {/* Top Left */}
    <div className="absolute left-0 top-0 h-[420px] w-[420px] rounded-2xl bg-gradient-to-br from-orange-500/25 to-transparent blur-[80px]" />

    {/* Bottom Right */}
    <div className="absolute right-0 bottom-0 h-[420px] w-[420px] rounded-2xl bg-gradient-to-tr from-orange-500/25 to-transparent blur-[80px]" />

    {/* ================= CENTER HUB ================= */}
    <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
      <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-orange-500">
        <span className="text-2xl font-bold text-black">S</span>

        {/* connector dots */}
        <span className="absolute -left-2 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-orange-500" />
        <span className="absolute -right-2 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-orange-500" />
        <span className="absolute left-1/2 -top-2 h-2 w-2 -translate-x-1/2 rounded-full bg-orange-500" />
        <span className="absolute left-1/2 -bottom-2 h-2 w-2 -translate-x-1/2 rounded-full bg-orange-500" />
      </div>
    </div>

    {/* ================= FEATURES ================= */}
    <div className="relative grid grid-cols-2 gap-x-32 gap-y-40">

      {/* Top Left Feature */}
      <div className="relative text-center">
        <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500">
          <span className="text-white">⚙️</span>
        </div>

        <h3 className="text-xl font-medium text-white">
          Multi-Template & Multi-Language Support
        </h3>

        <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-neutral-400">
          Enables developers to work across different technology stacks with a unified command interface.
        </p>
      </div>

      {/* Top Right Feature */}
      <div className="relative text-center">
        <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600">
          <span className="text-white">🚗</span>
        </div>

        <h3 className="text-xl font-medium text-white">
          Interactive Configuration & Prompting
        </h3>

        <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-neutral-400">
          Provides a user-friendly experience and minimizes errors from manual configuration.
        </p>
      </div>

      {/* Bottom Left Feature */}
      <div className="relative text-center">
        <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-red-600">
          <span className="text-white">📊</span>
        </div>

        <h3 className="text-xl font-medium text-white">
          Component & Module Generation
        </h3>

        <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-neutral-400">
          Significantly speeds up repetitive coding tasks and enforces best practices.
        </p>
      </div>

      {/* Bottom Right Feature */}
      <div className="relative text-center">
        <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-500">
          <span className="text-white">⏱️</span>
        </div>

        <h3 className="text-xl font-medium text-white">
          Extensible Post-Processing Pipeline
        </h3>

        <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-neutral-400">
          Delivers a fully functional, ready-to-code project immediately after generation.
        </p>
      </div>

    </div>
  </div>
</section>


      {/* Organizations Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-bold text-white sm:text-4xl">Organizations</h2>
          <div className="mt-12 rounded-lg bg-gray-900/50 p-12 text-center">
            <div className="inline-block rounded-full bg-gray-800 p-4">
              <span className="text-2xl">🏢</span>
            </div>
            <p className="mt-6 text-gray-400">Resourcio Community</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-3xl font-bold text-white sm:text-4xl">FAQ</h2>
          <div className="mt-12 space-y-4">
            {faqItems.map((item, idx) => (
              <div
                key={idx}
                className="overflow-hidden rounded-lg border border-gray-800 bg-gray-900/50 transition hover:border-gray-700"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full px-6 py-4 text-left transition hover:bg-gray-900"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-white">{item.question}</h3>
                    <ChevronDown
                      size={20}
                      className={`flex-shrink-0 transition-transform duration-300 ${expandedFAQ === idx ? 'rotate-180' : ''
                        } text-gray-400`}
                    />
                  </div>
                </button>
                {expandedFAQ === idx && (
                  <div className="border-t border-gray-800 px-6 py-4 text-gray-400">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
     <footer className="relative bg-black pt-24 pb-10">
  {/* subtle top fade */}
  <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-neutral-900/40 to-transparent" />

  <div className="relative mx-auto max-w-7xl px-6">
    <div className="grid grid-cols-1 gap-16 md:grid-cols-3">

      {/* LEFT: Logo */}
      <div>
        <div className="flex items-center gap-3">
          {/* Logo image */}
          <img
            src="/logo.png"
            alt="ScaffoldGen logo"
            className="h-8 w-40"
          />

        </div>
      </div>

      {/* MIDDLE: Quick Links */}
      <div>
        <h4 className="mb-6 text-lg font-medium text-white">
          Quick Links
        </h4>

        <ul className="space-y-4 text-[15px] text-neutral-400">
          <li className="transition hover:text-white">Downloads</li>
          <li className="transition hover:text-white">Releases</li>
          <li className="transition hover:text-white">Documentation</li>
          <li className="transition hover:text-white">Support</li>
        </ul>
      </div>

      {/* RIGHT: Social */}
      <div>
        <h4 className="mb-6 text-lg font-medium text-white">
          Connect with Us
        </h4>

        <ul className="space-y-4 text-[15px] text-neutral-400">
          <li className="flex items-center gap-3 transition hover:text-white">
            <span className="text-lg">in</span>
            LinkedIn
          </li>
          <li className="flex items-center gap-3 transition hover:text-white">
            <span className="text-lg">⌂</span>
            GitHub
          </li>
          <li className="flex items-center gap-3 transition hover:text-white">
            <span className="text-lg">◌</span>
            Discord
          </li>
        </ul>
      </div>

    </div>

    {/* Bottom copyright */}
    <div className="mt-20 text-sm text-neutral-500">
      © 2024 ScaffoldGenCLI All rights reserved.
    </div>
  </div>
</footer>

    </div>
  );
}
