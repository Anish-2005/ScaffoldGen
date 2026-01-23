'use client';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import DownloadReleaseSection from './components/DownloadReleaseSection';
import { ChevronDown, Download, Github, Linkedin, Twitter, Image } from 'lucide-react';
import { useState } from 'react';
import Footer from './components/Footer';
import FAQSection from './components/FAQSection';
import OrganizationSection from './components/OrganizationSection';

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


     
      <OrganizationSection />
      <FAQSection questions={[
        "What is the ScaffoldingGen CLI Tool?",
        "How do I install the ScaffoldGen CLI Tool?",
        "What features does the ScaffoldGen CLI Tool have?",
        "How do I contribute to the Scaffolding CLI tool?",
        "Is the ScaffoldGen CLI tool free to use?",
        "Where can I get support?",
      ]} />
        <Footer />

    </div>
  );
}
