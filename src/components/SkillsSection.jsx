"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Globe, Wrench, Zap, CheckCircle2, Sparkles } from "lucide-react";
import { skillsData } from "@/data/portfolioData";

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState("all");

  const categories = [
    { id: "all", name: "All Skills", icon: Sparkles },
    { id: "frontend", name: "Frontend", icon: Code2 },
    { id: "cms", name: "CMS & Backend", icon: Globe },
    { id: "tools", name: "Tools", icon: Wrench },
    { id: "other", name: "Optimization & SEO", icon: Zap },
  ];

  const getSkillsToDisplay = () => {
    if (activeTab === "all") {
      return [
        ...skillsData.frontend,
        ...skillsData.cms,
        ...skillsData.tools,
        ...skillsData.other,
      ];
    }
    return skillsData[activeTab] || [];
  };

  return (
    <section id="skills" className="gsap-section py-24 px-4 sm:px-6 lg:px-8 relative bg-white text-black font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-400/40 text-[16px] font-light text-blue-700 uppercase tracking-widest mb-4 bg-blue-50/50"
          >
            <Code2 className="w-4 h-4" />
            <span>Tech Stack &amp; Capabilities</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-light text-black tracking-tight mb-4"
          >
            Skills &amp; <span className="gradient-text font-normal">Proficiency</span>
          </motion.h2>

          {/* Subtitle Paragraph - Exactly 18px */}
          <p className="text-[18px] text-slate-800 font-light">
            A comprehensive overview of my technical expertise across modern frontend frameworks, CMS platforms, and website speed engineering.
          </p>
        </div>

        {/* Category Tabs - 16px font */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-12 text-[16px]">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2 px-4.5 py-2.5 rounded-2xl text-[16px] font-light transition-all cursor-pointer ${
                  isActive
                    ? "gradient-accent text-white shadow-lg shadow-purple-500/20 scale-105"
                    : "border border-slate-300 text-slate-800 hover:text-black bg-white shadow-sm"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Animated Skill Cards Grid - All 16px font */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-[16px]"
        >
          <AnimatePresence mode="popLayout">
            {getSkillsToDisplay().map((skill, index) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.04 }}
                className="p-6 rounded-2xl border border-slate-200 relative overflow-hidden group hover:border-purple-400 transition-all bg-white shadow-md"
              >
                {/* Top Skill Row */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-purple-600 group-hover:scale-110 transition-transform">
                      <CheckCircle2 className="w-5 h-5 text-blue-600" />
                    </div>
                    <span className="font-normal text-[16px] text-black">
                      {skill.name}
                    </span>
                  </div>
                  <span className="text-[16px] font-normal font-mono text-purple-700">
                    {skill.level}%
                  </span>
                </div>

                {/* Animated Progress Bar */}
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden p-[1px]">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.1 }}
                    className="h-full rounded-full gradient-accent shadow-sm"
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
