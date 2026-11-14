"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle2, Sparkles } from "lucide-react";
import { experience } from "@/data/portfolioData";

export default function ExperienceSection() {
  return (
    <section id="experience" className="gsap-section py-24 px-4 sm:px-6 lg:px-8 relative bg-white text-black font-sans">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-400/40 text-[16px] font-light text-blue-700 uppercase tracking-widest mb-4 bg-blue-50/50"
          >
            <Briefcase className="w-4 h-4" />
            <span>Career History</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-light text-black tracking-tight mb-4"
          >
            Work <span className="gradient-text font-normal">Experience</span>
          </motion.h2>

          {/* Subtitle Paragraph - Exactly 18px */}
          <p className="text-[18px] text-slate-800 font-light">
            My professional journey crafting modern frontend websites and WordPress enterprise platforms.
          </p>
        </div>

        {/* Animated Vertical Timeline - All 16px font */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-slate-300 space-y-12 text-[16px]">
          {experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group"
            >
              {/* Timeline Node Point */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full bg-white border-2 border-purple-500 flex items-center justify-center group-hover:scale-125 transition-transform shadow-lg">
                <div className="w-2 h-2 rounded-full gradient-accent" />
              </div>

              {/* Main Timeline Card */}
              <div className="p-6 sm:p-8 rounded-3xl border border-slate-200 relative overflow-hidden group-hover:border-purple-400 transition-all bg-white shadow-md">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 pb-4 border-b border-slate-200">
                  <div>
                    <h3 className="text-2xl font-light text-black mb-1">
                      {exp.role}
                    </h3>
                    <p className="text-[16px] text-purple-700 font-normal flex items-center gap-2">
                      {exp.url ? (
                        <a href={exp.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                          {exp.company}
                        </a>
                      ) : (
                        <span>{exp.company}</span>
                      )}
                      <span className="text-slate-400">•</span>
                      <span className="text-slate-700 flex items-center gap-1 text-[16px] font-light">
                        <MapPin className="w-4 h-4 text-blue-600" />
                        {exp.location}
                      </span>
                    </p>
                  </div>

                  <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-purple-800 text-[16px] font-mono w-fit font-normal">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <p className="text-[16px] text-slate-800 leading-relaxed mb-6 font-light">
                  {exp.description}
                </p>

                {/* Key Responsibilities Checklist */}
                <div className="mb-6">
                  <h4 className="text-[16px] font-mono uppercase text-slate-700 tracking-wider font-normal mb-3 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amber-500" />
                    <span>Core Responsibilities &amp; Deliverables</span>
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <div key={rIdx} className="flex items-start gap-2.5 text-[16px] text-slate-800 font-light">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-1" />
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies Badges */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-200">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-xl text-[16px] font-mono bg-slate-100 border border-slate-200 text-slate-800 font-normal"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
