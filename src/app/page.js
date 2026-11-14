"use client";

import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import ScrollProgress from "@/components/ScrollProgress";
import ResumeModal from "@/components/ResumeModal";

export default function Home() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
      <main className="min-h-screen relative overflow-hidden bg-white text-slate-900 font-sans font-light">
      {/* Scroll Progress Bar at top */}
      <ScrollProgress />

      {/* 1. Hero Section */}
      <HeroSection openResumeModal={() => setIsResumeModalOpen(true)} />

      {/* 2. About Me Section */}
      <AboutSection />

      {/* 3. Skills Section */}
      <SkillsSection />

      {/* 4. Featured Projects Section */}
      <ProjectsSection />

      {/* 5. Experience Timeline */}
      <ExperienceSection />

      {/* 6. Services Section */}
      <ServicesSection />

      {/* 7. Contact Section */}
      <ContactSection />

      {/* Interactive Resume Download / View Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </main>
  );
}
