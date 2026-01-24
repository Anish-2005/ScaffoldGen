'use client';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import DownloadReleaseSection from './components/DownloadReleaseSection';
import Footer from './components/Footer';
import FAQSection from './components/FAQSection';
import OrganizationSection from './components/OrganizationSection';
import GlobalUsersSection from './components/GlobalUsersSection';
import MajorContributors from './components/MajorContributors';
import FeaturesSection from './components/FeaturesSection';
import TestimonialsSection from './components/TestimonialsSection';

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-black via-gray-950 to-black">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <DownloadReleaseSection />
      <FeaturesSection />
      <MajorContributors />
      <GlobalUsersSection />
      <TestimonialsSection testimonials={[
        {
          quote: "ScaffoldGen CLI has revolutionized our development workflow. What used to take hours now takes minutes!",
          name: "Sarah Chen",
          role: "Senior Full-Stack Developer"
        },
        {
          quote: "The code generation is incredibly accurate and follows best practices. It's like having an expert developer on your team.",
          name: "Marcus Rodriguez",
          role: "Tech Lead at StartupXYZ"
        },
        {
          quote: "Finally, a CLI tool that understands modern development stacks. The TypeScript support is phenomenal.",
          name: "Emily Watson",
          role: "Frontend Engineer"
        },
        {
          quote: "Our team's productivity increased by 40% since adopting ScaffoldGen. The component generation is a game-changer.",
          name: "David Kim",
          role: "Engineering Manager"
        },
        {
          quote: "The best investment we've made for our development pipeline. Clean, consistent code every time.",
          name: "Lisa Thompson",
          role: "DevOps Engineer"
        },
        {
          quote: "ScaffoldGen CLI makes complex project setups trivial. I can't imagine working without it now.",
          name: "Alex Johnson",
          role: "Software Architect"
        }
      ]} />
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
