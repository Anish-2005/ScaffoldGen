'use client';

import Image from 'next/image';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
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



      {/* Latest Download & Release */}
    <section className="relative z-10 bg-transparent py-24">
      <div className="mx-auto max-w-7xl w-full px-6">
        <div className="grid gap-20 md:grid-cols-2 place-content-center mx-auto">
          {/* Latest Download */}
          <div className="ml-[10px]">
            <h3 className="text-2xl font-bold text-white">
              Latest Download
            </h3>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-neutral-400">
              The latest version of our CLI tool is now available for download on
              Linux. Get the latest features and improvements by downloading the
              latest release.
            </p>
            <button className="mt-6 rounded-md bg-orange-500 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-orange-400">
              Download for Linux
            </button>
          </div>
          {/* Latest Release */}
          <div className="ml-[10px]">
            <h3 className="text-2xl font-extrabold text-white">
              Latest Release
            </h3>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-neutral-400">
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


      {/* Features Grid */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            {/* Feature 1 */}
            <div className="relative rounded-lg border border-gray-800 bg-gray-900/30 p-8 transition hover:border-gray-700 hover:bg-gray-900/50">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-600">
                <span className="text-xl font-bold text-white">⚙️</span>
              </div>
              <h3 className="text-xl font-bold text-white">Multi-Template & Multi-Language Support</h3>
              <p className="mt-4 text-gray-400">
                Enables developers to work across different technology stacks with a unified command interface.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="relative rounded-lg border border-gray-800 bg-gray-900/30 p-8 transition hover:border-gray-700 hover:bg-gray-900/50">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600">
                <span className="text-xl font-bold text-white">🎛️</span>
              </div>
              <h3 className="text-xl font-bold text-white">Interactive Configuration & Prompting</h3>
              <p className="mt-4 text-gray-400">
                Provides a user-friendly experience and makes the scaffolding process more intuitive.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="relative rounded-lg border border-gray-800 bg-gray-900/30 p-8 transition hover:border-gray-700 hover:bg-gray-900/50">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-600">
                <span className="text-xl font-bold text-white">📦</span>
              </div>
              <h3 className="text-xl font-bold text-white">Component & Module Generation</h3>
              <p className="mt-4 text-gray-400">
                Significantly speeds up repetitive coding tasks and enforces best practices.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="relative rounded-lg border border-gray-800 bg-gray-900/30 p-8 transition hover:border-gray-700 hover:bg-gray-900/50">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-green-600">
                <span className="text-xl font-bold text-white">🔄</span>
              </div>
              <h3 className="text-xl font-bold text-white">Extensible Post-Processing Pipeline</h3>
              <p className="mt-4 text-gray-400">
                Delivers a fully functional, ready-to-code project immediately after generation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contributors Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-bold text-white sm:text-4xl">Major Contributors</h2>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {contributors.map((contributor, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center rounded-lg bg-gradient-to-b from-gray-800 to-gray-900 p-8 text-center transition hover:from-gray-700 hover:to-gray-800"
              >
                <div className="mb-4 h-16 w-16 rounded-full bg-gray-700" />
                <h3 className="font-semibold text-white">{contributor.name}</h3>
                <p className="mt-2 text-sm text-gray-400">{contributor.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Users Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500">Our Statistics</h2>
          <h3 className="mt-2 text-3xl font-bold text-white sm:text-4xl">Global Users</h3>
          <div className="mt-12 rounded-lg bg-gradient-to-b from-gray-800/50 to-gray-900 p-12">
            <div className="flex items-center justify-center gap-8 flex-wrap">
              {[
                { label: '10K', size: 'lg' },
                { label: '15K', size: 'md' },
                { label: '2.5K', size: 'sm' },
                { label: '25K', size: 'xl' },
                { label: '8K', size: 'md' },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className={`flex items-center justify-center rounded-xl bg-gray-600 font-bold text-white ${stat.size === 'sm'
                      ? 'h-20 w-20 text-xs'
                      : stat.size === 'md'
                        ? 'h-24 w-24 text-sm'
                        : stat.size === 'lg'
                          ? 'h-28 w-28 text-lg'
                          : 'h-32 w-32 text-2xl'
                    }`}
                >
                  {stat.label}
                </div>
              ))}
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
      <footer className="border-t border-gray-800 bg-black px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <div className="flex items-center gap-2">
                <div className="size-8 rounded bg-gradient-to-br from-orange-500 to-orange-600" />
                <span className="text-lg font-semibold text-white">ScaffoldGen</span>
              </div>
            </div>
            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <h4 className="font-semibold text-white">Quick Links</h4>
                <ul className="mt-4 space-y-2 text-sm text-gray-400">
                  <li>
                    <a href="#" className="transition hover:text-white">
                      Downloads
                    </a>
                  </li>
                  <li>
                    <a href="#" className="transition hover:text-white">
                      Releases
                    </a>
                  </li>
                  <li>
                    <a href="#" className="transition hover:text-white">
                      Documentation
                    </a>
                  </li>
                  <li>
                    <a href="#" className="transition hover:text-white">
                      Support
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white">Connect with Us</h4>
                <ul className="mt-4 flex gap-4">
                  <li>
                    <a href="#" className="text-gray-400 transition hover:text-white">
                      <Github size={20} />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 transition hover:text-white">
                      <Linkedin size={20} />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 transition hover:text-white">
                      <Twitter size={20} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
            <p>© 2024 ScaffoldGen CLI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
