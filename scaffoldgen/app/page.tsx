'use client';

import Image from 'next/image';
import Navbar from './Navbar';
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
      <Navbar />
{/* Hero Section */}
<section className="relative min-h-screen overflow-hidden bg-black pt-20 pb-[32rem] text-center font-sans">

  {/* Heading */}
  <h1
    className="
      relative z-10
      text-[56px]
      font-bold
      tracking-tight
      text-[#ff6b35]
    "
  >
    ScaffoldGen
  </h1>

  {/* Subtext */}
  <p
    className="
      relative z-10
      mx-auto mt-5 max-w-2xl
      px-4
      text-[16px]
      font-normal
      leading-relaxed
      text-neutral-300/90
    "
  >
    A powerful command-line interface tool for developers, designed to streamline
    your workflow and boost your productivity
  </p>

  {/* Buttons */}
  <div className="relative z-10 mt-8 flex justify-center gap-4 px-4">
    <button
      className="
        rounded-lg
        bg-[#ff6b35]
        px-7 py-3.5
        text-[15px]
        font-semibold
        text-white
        shadow-lg
        shadow-orange-500/20
        transition-all
        hover:bg-[#ff7b45]
        hover:shadow-orange-500/30
      "
    >
      Download for Linux
    </button>

    <button
      className="
        rounded-lg
        border-2 border-[#ff6b35]
        bg-transparent
        px-7 py-3.5
        text-[15px]
        font-semibold
        text-[#ff6b35]
        transition-all
        hover:bg-[#ff6b35]/10
      "
    >
      Download for Windows
    </button>
  </div>

  {/* Planet/Arc Glow Effect */}
  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[750px]">

    {/* Deep ambient base glow */}
    <div
      className="absolute left-1/2 top-[48%] h-[600px] w-[1100px] -translate-x-1/2 rounded-full"
      style={{
        background:
          "radial-gradient(ellipse at center, rgba(200,80,30,0.2) 0%, rgba(180,70,25,0.15) 30%, rgba(140,50,20,0.08) 50%, transparent 70%)",
        filter: "blur(120px)",
      }}
    />

    {/* Mid-level warm glow */}
    <div
      className="absolute left-1/2 top-[44%] h-[600px] w-[1100px] -translate-x-1/2 rounded-full"
      style={{
        background:
          "radial-gradient(ellipse at center, rgba(255,140,50,0.22) 0%, rgba(255,120,40,0.16) 35%, rgba(240,100,30,0.1) 55%, transparent 72%)",
        filter: "blur(80px)",
      }}
    />

    {/* Bright inner core glow */}
    <div
      className="absolute left-1/2 top-[42%] h-[600px] w-[1100px] -translate-x-1/2 rounded-full"
      style={{
        background:
          "radial-gradient(ellipse at center, rgba(255,200,120,0.18) 0%, rgba(255,160,80,0.14) 28%, rgba(255,140,60,0.08) 48%, transparent 62%)",
        filter: "blur(50px)",
      }}
    />

    {/* Sharp bright arc rim - main feature */}
    <div
      className="absolute left-1/2 top-[40%] h-[600px] w-[1100px] -translate-x-1/2 rounded-full"
      style={{
        background:
          "radial-gradient(ellipse at center, transparent 58.5%, rgba(255,220,140,0.95) 59.8%, rgba(255,190,110,1) 60.3%, rgba(255,160,80,0.98) 60.8%, rgba(255,130,50,0.75) 61.5%, rgba(220,100,40,0.35) 62.5%, transparent 64%)",
        filter: "blur(1.5px)",
      }}
    />

    {/* Outer rim soft glow */}
    <div
      className="absolute left-1/2 top-[40%] h-[600px] w-[1100px] -translate-x-1/2 rounded-full"
      style={{
        background:
          "radial-gradient(ellipse at center, transparent 58%, rgba(255,150,70,0.35) 60%, rgba(255,120,50,0.25) 61.5%, rgba(200,90,40,0.12) 63.5%, transparent 67%)",
        filter: "blur(20px)",
      }}
    />

    {/* Upper highlight/bloom */}
    <div
      className="absolute left-1/2 top-[38%] h-[600px] w-[1100px] -translate-x-1/2 rounded-full"
      style={{
        background:
          "radial-gradient(ellipse at center, transparent 59%, rgba(255,230,180,0.4) 60.2%, transparent 61.5%)",
        filter: "blur(8px)",
      }}
    />

    {/* Bottom atmospheric fade with warmth */}
    <div
      className="absolute left-1/2 top-[54%] h-[450px] w-[1100px] -translate-x-1/2"
      style={{
        background:
          "linear-gradient(to bottom, rgba(255,110,40,0.12) 0%, rgba(200,80,30,0.08) 25%, rgba(150,60,20,0.04) 50%, transparent 100%)",
        filter: "blur(60px)",
      }}
    />

    {/* Subtle lower edge definition */}
    <div
      className="absolute left-1/2 top-[58%] h-[350px] w-[1100px] -translate-x-1/2"
      style={{
        background:
          "linear-gradient(to bottom, rgba(180,70,25,0.06) 0%, transparent 70%)",
        filter: "blur(35px)",
      }}
    />

  </div>
</section>

 {/* About Section */}
{/* About Section */}
<section className="relative z-30 -mt-[260px] pb-40">
  <div className="mx-auto max-w-7xl px-6">
    
    {/* Glow Shell */}
    <div className="relative rounded-[28px] p-[2px]">
      <div
        className="absolute inset-0 rounded-[28px]"
        style={{
          background:
            "radial-gradient(100% 100% at 50% 100%, rgba(255,120,40,0.4) 0%, rgba(255,120,40,0.2) 40%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Inner Card */}
      <div className="relative rounded-[24px] bg-black px-12 py-14">
        <div className="grid items-center gap-12 md:grid-cols-2">

          {/* Left Content */}
          <div>
            <h3 className="text-2xl font-semibold text-white">
              About ScaffoldGen CLI
            </h3>

            <p className="mt-6 mb-8 max-w-md text-base leading-relaxed text-neutral-400">
              Our CLI tool is a powerful and versatile command-line interface that
              helps developers streamline their workflow and boost their productivity.
              With a wide range of features and customization options, it's the
              perfect tool for any developer looking to optimize their development
              process.
            </p>

            <button className="rounded-lg bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-600">
              Learn More
            </button>
          </div>

          {/* Terminal */}
          <div className="relative rounded-xl bg-[#1a1a1a] shadow-[0_20px_60px_rgba(0,0,0,0.7)]">
            {/* Terminal Header */}
            <div className="flex items-center gap-2 rounded-t-xl bg-[#2a2a2a] px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-red-500" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-500" />
              <span className="ml-auto text-xs text-neutral-500">
                scaffoldgen
              </span>
            </div>

            {/* Terminal Body */}
            <pre className="px-6 py-8 text-sm leading-loose text-neutral-300" style={{ minHeight: '280px' }}>
<span className="text-cyan-400">~&gt;</span> cd web_development{"\n"}
<span className="text-cyan-400">~&gt;</span> scaffoldgen new **my-awesome-app** --template next{"\n"}
<span className="text-cyan-400">~&gt;</span> scaffoldgen generate **component** UserProfile --t{"\n"}
<span className="text-cyan-400">~&gt;</span> scaffoldgen create **route** auth --handler **logi{"\n"}
<span className="text-cyan-400">~&gt;</span> scaffoldgen config set **default-lang** python
            </pre>
          </div>

        </div>
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
