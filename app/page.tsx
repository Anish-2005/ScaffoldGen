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

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <DownloadReleaseSection />
      <FeaturesSection />
      <MajorContributors />
      <GlobalUsersSection />
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
