"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  ArrowRight,
  Download,
  Sparkles,
  MapPin,
  CheckCircle2,
  Code,
  Zap,
  Copy,
  Check,
  Award,
  MessageSquare,
} from "lucide-react";
import { personalInfo, statistics } from "@/data/portfolioData";
import TypewriterEffect from "./TypewriterEffect";
import TerminalCodeTyping from "./TerminalCodeTyping";

const ROLES = [
  "Frontend UI Developer",
  "WordPress Specialist",
  "Shopify Developer",
  "Elementor Developer",
  "WooCommerce Developer",
];

export default function HeroSection({ openResumeModal }) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeTab, setActiveTab] = useState("terminal");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section
      id="hero"
      className="gsap-section relative min-h-[92vh] flex flex-col justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white text-black font-sans"
    >
      {/* Background Subtle Gradient Mesh Lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-blue-500/10 via-purple-500/10 to-orange-400/10 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />
      <div className="absolute -top-20 right-10 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none animate-float-slow" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none animate-float-reverse" />

      {/* Main Grid Container */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10 my-auto">
        
        {/* Left Column: Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 flex flex-col items-start text-left"
        >
          {/* Status Badge & Copy Email Pill */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 text-[16px] font-light shadow-sm bg-white"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-emerald-700 font-mono font-normal tracking-wide">
                {personalInfo.availability}
              </span>
            </motion.div>

            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-slate-300 text-[16px] text-slate-800 hover:border-purple-500 transition-colors bg-white shadow-sm cursor-pointer"
              title="Click to copy email address"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-700 font-medium">Copied Email!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-slate-500" />
                  <span className="font-mono text-black font-normal">{personalInfo.email}</span>
                </>
              )}
            </button>
          </div>

          {/* Dynamic Code Typing Header */}
          <div className="h-10 sm:h-12 mb-3 flex items-center">
            <span className="text-[16px] font-mono uppercase tracking-widest text-slate-700 mr-2 font-normal">
              I am a
            </span>
            <div className="text-[18px] sm:text-xl font-mono text-purple-700 font-semibold">
              <TypewriterEffect
                words={ROLES}
                prefix="<"
                suffix=" />"
                typingSpeed={70}
                deletingSpeed={40}
                delayBetween={2200}
              />
            </div>
          </div>

          {/* Main Heading - Thin Font as Requested */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.12] text-black mb-6">
            Building Responsive Websites with{" "}
            <span className="gradient-text font-normal">WordPress &amp; Shopify</span>
          </h1>

          {/* Subheading - Exactly 18px Paragraph after Heading */}
          <p className="text-[18px] text-slate-800 max-w-2xl mb-8 leading-relaxed font-light">
            With <strong className="font-normal text-black">2 years of experience</strong>, I build responsive, SEO-friendly websites with <span className="font-normal text-blue-700">WordPress</span>, <span className="font-normal text-emerald-700">Shopify</span>, HTML, CSS and JavaScript.
          </p>

          {/* Action Buttons - 16px font */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto mb-10 text-[16px]">
            <a
              href="#projects"
              className="flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl text-white font-normal text-[16px] shadow-lg shadow-purple-500/20 hover:shadow-purple-500/35 hover:scale-[1.03] active:scale-[0.98] transition-all group gradient-accent cursor-pointer"
            >
              <span>Explore Works</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <button
              onClick={openResumeModal}
              className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl border border-slate-300 text-black font-normal text-[16px] hover:bg-slate-100 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer bg-white shadow-sm"
            >
              <Download className="w-4 h-4 text-purple-600" />
              <span>Get Resume</span>
            </button>

            <a
              href="#contact"
              className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl border border-slate-300 text-slate-800 hover:text-black transition-all text-[16px] font-normal bg-white shadow-sm"
            >
              <MessageSquare className="w-4 h-4 text-blue-600" />
              <span>Let&apos;s Talk</span>
            </a>
          </div>

          {/* Primary Tech Stack Chips - 16px font */}
          <div className="flex items-center gap-2.5 flex-wrap pt-4 border-t border-slate-200 w-full text-[16px]">
            <span className="text-[16px] font-mono uppercase text-slate-700 tracking-wider font-normal mr-1">
              Core Tech Stack:
            </span>
            {[
              { name: "WordPress", bg: "bg-blue-50 text-blue-800 border-blue-200" },
              { name: "Elementor", bg: "bg-pink-50 text-pink-800 border-pink-200" },
              { name: "Tailwind CSS", bg: "bg-cyan-50 text-cyan-800 border-cyan-200" },
              { name: "JavaScript", bg: "bg-amber-50 text-amber-900 border-amber-200" },
              { name: "Shopify", bg: "bg-emerald-50 text-emerald-800 border-emerald-200" },
              { name: "WooCommerce", bg: "bg-violet-50 text-violet-800 border-violet-200" },
            ].map((tech) => (
              <span
                key={tech.name}
                className={`px-3 py-1 rounded-lg text-[16px] font-normal border ${tech.bg} shadow-sm transition-transform hover:scale-105`}
              >
                {tech.name}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Right Column: Developer Showcase Card & Terminal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 relative flex justify-center"
        >
          {/* Floating Badges */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -right-2 z-20 px-3.5 py-2 rounded-xl border border-purple-400/40 shadow-xl bg-white flex items-center gap-2 text-[16px] font-mono"
          >
            <div className="p-1.5 rounded-md bg-purple-500/20 text-purple-600">
              <Zap className="w-4 h-4" />
            </div>
            <div>
              <span className="text-slate-500 text-[14px] block leading-none font-sans">Speed</span>
              <span className="font-normal text-black text-[16px]">SEO &amp; Speed</span>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-6 -left-4 z-20 px-3.5 py-2 rounded-xl border border-blue-400/40 shadow-xl bg-white flex items-center gap-2 text-[16px] font-mono"
          >
            <div className="p-1.5 rounded-md bg-blue-500/20 text-blue-600">
              <Award className="w-4 h-4" />
            </div>
            <div>
              <span className="text-slate-500 text-[14px] block leading-none font-sans">Delivered</span>
              <span className="font-normal text-black text-[16px]">2 Years Experience</span>
            </div>
          </motion.div>

          {/* Main Card Container */}
          <div className="relative w-full max-w-md p-6 rounded-3xl border border-slate-200 shadow-2xl bg-white font-sans overflow-hidden">
            {/* Profile Header */}
            <div className="flex items-center gap-4 mb-5 pb-5 border-b border-slate-200">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl p-1 shadow-md gradient-accent shrink-0">
                <div className="w-full h-full rounded-[14px] overflow-hidden relative bg-slate-950">
                  <Image
                    src="/vinod-portrait.png"
                    alt="Vinod SK Avatar"
                    fill
                    sizes="(max-width: 640px) 64px, 80px"
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center">
                  <CheckCircle2 className="w-3 h-3 text-white" />
                </div>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-normal text-black flex items-center gap-1.5">
                  {personalInfo.name}
                  <Sparkles className="w-4 h-4 text-amber-500" />
                </h3>
                <p className="text-[16px] text-purple-700 font-mono mb-1 font-normal">
                  {personalInfo.shortRole}
                </p>
                <p className="text-[16px] text-slate-700 flex items-center gap-1 font-light">
                  <MapPin className="w-4 h-4 text-blue-600" />
                  {personalInfo.location}
                </p>
              </div>
            </div>

            {/* Switcher Tabs - 16px font */}
            <div className="flex items-center gap-1 p-1 mb-4 rounded-xl bg-slate-100 text-[16px] font-mono">
              <button
                onClick={() => setActiveTab("terminal")}
                className={`flex-1 py-1.5 rounded-lg transition-all text-center cursor-pointer font-normal ${
                  activeTab === "terminal"
                    ? "bg-white text-purple-700 shadow-sm"
                    : "text-slate-700 hover:text-black"
                }`}
              >
                Code CLI
              </button>
              <button
                onClick={() => setActiveTab("overview")}
                className={`flex-1 py-1.5 rounded-lg transition-all text-center cursor-pointer font-normal ${
                  activeTab === "overview"
                    ? "bg-white text-purple-700 shadow-sm"
                    : "text-slate-700 hover:text-black"
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab("stack")}
                className={`flex-1 py-1.5 rounded-lg transition-all text-center cursor-pointer font-normal ${
                  activeTab === "stack"
                    ? "bg-white text-purple-700 shadow-sm"
                    : "text-slate-700 hover:text-black"
                }`}
              >
                Skills Matrix
              </button>
            </div>

            {/* Tab Content - All 16px font */}
            <div className="min-h-[175px] flex flex-col justify-center text-[16px]">
              {activeTab === "terminal" && <TerminalCodeTyping />}

              {activeTab === "overview" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-3"
                >
                  <div className="grid grid-cols-2 gap-2.5">
                    <div className="p-3 rounded-xl border border-slate-200 flex items-center gap-2.5 bg-slate-50">
                      <div className="p-1.5 rounded-lg bg-blue-500/10 text-blue-600">
                        <Code className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-[14px] text-slate-500">Figma to Code</div>
                        <div className="text-[16px] font-normal text-black">Pixel-Perfect</div>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl border border-slate-200 flex items-center gap-2.5 bg-slate-50">
                      <div className="p-1.5 rounded-lg bg-purple-500/10 text-purple-600">
                        <Zap className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-[14px] text-slate-500">Optimization</div>
                        <div className="text-[16px] font-normal text-black">Sub-second Speed</div>
                      </div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 text-[16px] text-slate-800 leading-relaxed font-light">
                    Building responsive WordPress and Shopify websites with clear navigation and user-friendly layouts.
                  </div>
                </motion.div>
              )}

              {activeTab === "stack" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-2.5"
                >
                  {[
                    { label: "WordPress & Elementor", pct: "90%", color: "bg-blue-600" },
                    { label: "HTML5 / CSS3", pct: "85%", color: "bg-purple-600" },
                    { label: "Shopify & WooCommerce", pct: "80%", color: "bg-amber-500" },
                    { label: "SEO & Responsive Design", pct: "85%", color: "bg-emerald-600" },
                  ].map((skill) => (
                    <div key={skill.label} className="space-y-1">
                      <div className="flex justify-between text-[16px] font-mono font-normal">
                        <span className="text-black">{skill.label}</span>
                        <span className="text-purple-700">{skill.pct}</span>
                      </div>
                      <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                        <div className={`h-full ${skill.color} rounded-full`} style={{ width: skill.pct }} />
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Statistics Counter Bar - All 16px font */}
      <div className="max-w-7xl mx-auto w-full mt-14 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
          {statistics.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + idx * 0.1 }}
              className="p-5 rounded-2xl border border-slate-200 text-center relative overflow-hidden bg-white shadow-md group hover:border-purple-500 transition-all"
            >
              <div className="text-3xl sm:text-4xl font-normal gradient-text mb-1 font-mono group-hover:scale-105 transition-transform">
                {stat.value}
                {stat.suffix}
              </div>
              <div className="text-[16px] text-slate-800 font-light">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
