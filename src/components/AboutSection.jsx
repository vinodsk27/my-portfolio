"use client";

import { motion } from "framer-motion";
import { UserCheck, Award, GraduationCap, Sparkles, CheckCircle, Code, Cpu, Target } from "lucide-react";
import { personalInfo, careerHighlights } from "@/data/portfolioData";

export default function AboutSection() {
  return (
    <section id="about" className="gsap-section py-24 px-4 sm:px-6 lg:px-8 relative bg-white text-slate-900 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-200 text-[16px] font-medium text-purple-700 uppercase tracking-widest mb-4 bg-purple-50"
          >
            <UserCheck className="w-4 h-4" />
            <span>About Me</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-950 tracking-tight mb-6"
          >
            {personalInfo.aboutTitle}
          </motion.h2>

          {/* Subtitle Paragraph - Exactly 18px */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[18px] text-slate-300 leading-relaxed font-light"
          >
            {personalInfo.aboutDescription}
          </motion.p>
        </div>

        {/* 4-Card Bento Grid - All 16px font */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-[16px]">
          {/* Card 1: Experience */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-6 rounded-3xl border border-slate-800 relative overflow-hidden group flex flex-col justify-between bg-slate-900 shadow-xl hover:border-blue-500/50 transition-all"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all pointer-events-none" />
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-700 mb-6 group-hover:scale-110 transition-transform">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-light text-white mb-2">Experience</h3>
              <div className="text-3xl font-mono font-normal text-blue-400 mb-3">2+ Years</div>
              <p className="text-[16px] text-slate-300 leading-relaxed mb-4 font-light">
                Two years of experience with frontend development, WordPress customization, Shopify and WooCommerce.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-800 flex items-center gap-2 text-[16px] font-light text-slate-400">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span>Working with an Australia-based company</span>
            </div>
          </motion.div>

          {/* Card 2: Core Skills Overview */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-6 rounded-3xl border border-slate-800 relative overflow-hidden group flex flex-col justify-between bg-slate-900 shadow-xl hover:border-purple-500/50 transition-all"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl group-hover:bg-purple-500/20 transition-all pointer-events-none" />
            <div>
              <div className="w-12 h-12 rounded-2xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-700 mb-6 group-hover:scale-110 transition-transform">
                <Code className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-light text-white mb-2">Technical Mastery</h3>
              <p className="text-[16px] text-slate-300 leading-relaxed mb-4 font-light">
                Proficient across modern CMS &amp; JS tools:
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {["WordPress", "Elementor", "Gutenberg", "HTML", "CSS", "Shopify", "WooCommerce"].map((s) => (
                  <span key={s} className="px-2.5 py-1 rounded-lg text-[16px] font-mono bg-purple-50 border border-purple-100 text-purple-700 font-medium">
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div className="pt-4 border-t border-slate-800 flex items-center gap-2 text-[16px] font-light text-slate-400">
              <Cpu className="w-4 h-4 text-purple-400" />
              <span>Mobile-responsive development</span>
            </div>
          </motion.div>

          {/* Card 3: Education */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="p-6 rounded-3xl border border-slate-800 relative overflow-hidden group flex flex-col justify-between bg-slate-900 shadow-xl hover:border-amber-500/50 transition-all"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl group-hover:bg-amber-500/20 transition-all pointer-events-none" />
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-700 mb-6 group-hover:scale-110 transition-transform">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-light text-white mb-2">Education</h3>
              <div className="text-[16px] font-normal text-amber-400 mb-1">B.Sc. Computer Science</div>
              <p className="text-[16px] text-slate-300 leading-relaxed mb-4 font-light">
                Gulbarga University (GUG), Karnataka · 2022
              </p>
              <div className="text-[16px] font-normal text-amber-400 mb-1">Pre-University Course</div>
              <p className="text-[16px] text-slate-300 leading-relaxed mb-4 font-light">St. Mary PU College, Gulbarga · 2019</p>
            </div>
            <div className="pt-4 border-t border-slate-800 flex items-center gap-2 text-[16px] font-light text-slate-400">
              <CheckCircle className="w-4 h-4 text-amber-400" />
              <span>SEO &amp; speed optimization</span>
            </div>
          </motion.div>

          {/* Card 4: Key Wins */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="p-6 rounded-3xl border border-slate-800 relative overflow-hidden group flex flex-col justify-between bg-slate-900 shadow-xl hover:border-emerald-500/50 transition-all"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-emerald-500/20 transition-all pointer-events-none" />
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700 mb-6 group-hover:scale-110 transition-transform">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-light text-white mb-2">Key Wins</h3>
              <ul className="space-y-2 text-[16px] text-slate-300 mb-4 font-light">
                {careerHighlights.slice(0, 3).map((item) => (
                  <li key={item.title} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 flex-shrink-0" />
                    <span>{item.title}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="pt-4 border-t border-slate-800 flex items-center gap-2 text-[16px] font-light text-slate-400">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>WordPress · Shopify · Frontend</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
