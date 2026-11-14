import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import { personalInfo } from "@/data/portfolioData";

export const metadata = {
  title: "About Vinod SK | Frontend & WordPress Developer",
  description: "Meet Vinod SK, a frontend, WordPress and Shopify developer with two years of experience.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-32 sm:px-8 lg:grid-cols-[1fr_.8fr] lg:gap-20 lg:pb-28">
        <div className="gsap-section">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[.2em] text-blue-700">About me</p>
          <h1 className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">A little about the developer behind the websites.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">{personalInfo.aboutDescription}</p>
          <p className="mt-5 inline-flex items-center gap-2 text-sm text-slate-500"><MapPin size={16} />{personalInfo.location}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/portfolio" className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700">View my work <ArrowRight size={16} /></Link>
            <Link href="/contact" className="rounded-full border border-slate-300 px-5 py-3 text-sm font-medium text-slate-800 transition hover:border-slate-950">Get in touch</Link>
          </div>
        </div>
        <div className="gsap-section relative mx-auto w-full max-w-md">
          <div className="absolute -inset-4 -rotate-3 rounded-[2rem] bg-blue-50" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.7rem] border border-slate-200 bg-slate-100 shadow-xl">
            <Image src="/vinod-portrait.png" alt="Vinod SK" fill priority sizes="(max-width: 768px) 90vw, 420px" className="object-cover object-top" />
          </div>
        </div>
      </section>
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
    </main>
  );
}
