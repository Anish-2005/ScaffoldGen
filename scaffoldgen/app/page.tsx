'use client';

import Image from 'next/image';
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
function BottomGlow() {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[260px]">
      {/* Ambient base glow */}
      <div
        className="absolute left-1/2 -translate-x-1/2 bottom-[-45%] w-[600px] h-[400px] rounded-full blur-[80px]"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,120,40,0.45), rgba(255,120,40,0.15) 40%, transparent 70%)",
        }}
      />
      {/* Main arc glow */}
      <div
        className="absolute left-1/2 -translate-x-1/2 bottom-[-55%] w-[800px] h-[480px] rounded-full blur-[40px]"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,140,60,0.9) 0%, rgba(255,120,40,0.55) 35%, rgba(255,90,20,0.25) 55%, transparent 70%)",
          maskImage:
            "radial-gradient(ellipse at center, black 45%, transparent 60%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 45%, transparent 60%)",
        }}
      />
      {/* Bright arc stroke */}
      <div
        className="absolute left-1/2 -translate-x-1/2 bottom-[-58%] w-[800px] h-[480px] rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 58%, rgba(255,170,90,0.9) 60%, transparent 63%)",
          filter: "blur(6px)",
        }}
      />
    </div>
  );
}

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-neutral-800 bg-black/60 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center px-4 sm:px-6 lg:px-8">

          {/* Left: Logo */}
          <div className="flex items-center gap-2">
            <img
              src="/logo.png"
              alt="ScaffoldGen logo"
              className="h-8 w-40"
            />
          </div>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Right: Nav items + Search + Links */}
          <div className="flex items-center gap-6">

            {/* Nav links (just left of search) */}
            <div className="hidden items-center gap-6 md:flex">
              <a
                href="#"
                className="text-sm text-neutral-400 transition hover:text-white"
              >
                Downloads
              </a>
              <a
                href="#"
                className="text-sm text-neutral-400 transition hover:text-white"
              >
                Releases
              </a>
            </div>

            {/* Search */}
            <div className="relative hidden sm:block">
              <input
                type="text"
                placeholder="Search..."
                className="w-56 rounded-md border border-neutral-800 bg-neutral-900/60 px-4 py-2 text-base text-white placeholder-neutral-500 focus:border-neutral-600 focus:outline-none"
              />
              <svg
                className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-500"
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

            <a
              href="#"
              className="text-sm text-neutral-400 transition hover:text-white"
            >
              Docs
            </a>
            <a
              href="#"
              className="text-sm text-neutral-400 transition hover:text-white"
            >
              Snippet Manager
            </a>

          </div>
        </div>
      </nav>

      {/* Hero Section */}
<section className="relative min-h-screen overflow-hidden bg-black pt-32 pb-[28rem] text-center font-sans">

  {/* Heading */}
  <h1
    className="
      relative z-10
      text-[48px]
      font-semibold
      tracking-[-0.015em]
      text-orange-500
    "
  >
    ScaffoldGen
  </h1>

  {/* Subtext */}
  <p
    className="
      relative z-10
      mx-auto mt-4 max-w-xl
      text-[15px]
      font-normal
      leading-relaxed
      text-neutral-300/80
    "
  >
    A powerful command-line interface tool for developers, designed to streamline
    your workflow and boost your productivity
  </p>

  {/* Buttons */}
  <div className="relative z-10 mt-6 flex justify-center gap-4">
    <button
      className="
        rounded-md
        bg-orange-500
        px-6 py-3
        text-[14px]
        font-medium
        text-white
        transition
        hover:bg-orange-400
      "
    >
      Download for Linux
    </button>

    <button
      className="
        rounded-md
        border border-orange-500/70
        px-6 py-3
        text-[14px]
        font-medium
        text-orange-400
        transition
        hover:bg-orange-500/10
      "
    >
      Download for Windows
    </button>
  </div>
  {/* Bottom Glow */}
  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[650px]">

    {/* Ambient glow */}
    <div
      className="absolute left-1/2 top-[42%] h-[900px] w-[1700px] -translate-x-1/2 rounded-full"
      style={{
        background:
          "radial-gradient(ellipse at center, rgba(255,140,60,0.38) 0%, rgba(255,110,40,0.28) 28%, rgba(255,80,20,0.18) 48%, transparent 66%)",
        filter: "blur(130px)",
      }}
    />

    {/* Bright arc rim (lifted + thinner) */}
    <div
      className="absolute left-1/2 top-[34%] h-[900px] w-[1700px] -translate-x-1/2 rounded-full"
      style={{
        background:
          "radial-gradient(ellipse at center, transparent 60%, rgba(255,190,110,1) 61.2%, rgba(255,150,70,0.7) 62.4%, transparent 64%)",
        filter: "blur(3px)",
      }}
    />

    {/* Grainy lower edge */}
    <div
      className="absolute left-1/2 top-[50%] h-[380px] w-[1700px] -translate-x-1/2"
      style={{
        background:
          "repeating-radial-gradient(circle at center, rgba(255,95,35,0.2) 0px, rgba(255,95,35,0.2) 1px, rgba(0,0,0,0) 2px)",
        WebkitMaskImage:
          "linear-gradient(to top, black 42%, transparent 78%)",
        maskImage:
          "linear-gradient(to top, black 42%, transparent 78%)",
        filter: "blur(12px)",
        opacity: 0.9,
      }}
    />

  </div>
</section>


      {/* About Section */}
      {/* Overlapping Info Section */}
<section className="relative z-20 -mt-48 pb-32">
  <div className="mx-auto max-w-6xl px-6">

    <div className="grid gap-8 md:grid-cols-2">

      {/* Left Card */}
      <div className="rounded-xl border border-white/10 bg-neutral-900/80 p-8 backdrop-blur-md">
        <h3 className="text-lg font-medium text-white">
          About ScaffoldGen CLI
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-neutral-400">
          Our CLI tool is a powerful and versatile command-line interface that
          helps developers streamline their workflow and boost productivity.
          With a wide range of features and customization options, it is the
          perfect tool for any developer looking to optimize their development
          process.
        </p>

        <button className="mt-6 rounded-md bg-orange-500 px-4 py-2 text-sm font-medium text-white hover:bg-orange-400">
          Learn More
        </button>
      </div>

      {/* Right Card (Terminal) */}
      <div className="rounded-xl border border-white/10 bg-neutral-900/80 p-6 backdrop-blur-md">
        {/* Fake window controls */}
        <div className="mb-4 flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-red-500/80" />
          <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
          <span className="h-3 w-3 rounded-full bg-green-500/80" />
          <span className="ml-auto text-xs text-neutral-400">
            scaffoldgen
          </span>
        </div>

        {/* Terminal content */}
        <pre className="text-sm leading-relaxed text-neutral-200">
<span className="text-green-400">$</span> cd web-development{"\n"}
<span className="text-green-400">$</span> scaffoldgen new my-awesome-app --template next{"\n"}
<span className="text-green-400">$</span> scaffoldgen generate component UserProfile{"\n"}
<span className="text-green-400">$</span> scaffoldgen create route auth --handler login{"\n"}
<span className="text-green-400">$</span> scaffoldgen config set default-lang python
        </pre>
      </div>

    </div>
  </div>
</section>


      {/* Latest Download & Release */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-lg bg-gray-900/50 p-8">
              <h3 className="text-2xl font-bold text-white">Latest Download</h3>
              <p className="mt-4 text-gray-400">
                The latest version of v2.0.1 is now available for download on Linux. Get the newest features and improvements by downloading the latest release.
              </p>
              <button className="mt-6 inline-flex items-center gap-2 rounded-lg bg-orange-600 px-6 py-2 font-semibold text-white transition hover:bg-orange-700">
                <Download size={16} />
                Download Latest
              </button>
            </div>
            <div className="rounded-lg bg-gray-900/50 p-8">
              <h3 className="text-2xl font-bold text-white">Latest Release</h3>
              <p className="mt-4 text-gray-400">
                Check out the latest release of our CLI tool, packed with new features and enhancements! Get the detailed release notes by viewing the release details.
              </p>
              <button className="mt-6 inline-flex items-center gap-2 rounded-lg bg-orange-600 px-6 py-2 font-semibold text-white transition hover:bg-orange-700">
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
