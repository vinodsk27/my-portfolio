"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Download, Printer, MapPin, Mail, Phone, Globe, CheckCircle2, Briefcase, GraduationCap } from "lucide-react";
import { personalInfo, experience, projects, education, skillsData } from "@/data/portfolioData";

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto font-sans text-[16px] font-light">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
        />

        {/* Modal Sheet */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 28 }}
          className="resume-modal relative w-full max-w-4xl bg-white text-slate-900 border border-slate-200 rounded-3xl shadow-2xl z-10 overflow-hidden my-8 max-h-[90vh] flex flex-col"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50 sticky top-0 z-20 text-[16px]">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-emerald-500" />
                <span className="font-mono text-slate-700 font-medium uppercase">
                Vinod SK Resume Preview
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl border border-slate-700 text-slate-200 hover:text-white font-light bg-slate-800"
              >
                <Printer className="w-4 h-4" />
                <span>Print</span>
              </button>

              <a
                href="#contact"
                onClick={onClose}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl gradient-accent text-white font-normal shadow-sm"
              >
                <Download className="w-4 h-4" />
                <span>Hire Vinod</span>
              </a>

              <button
                onClick={onClose}
                className="p-1.5 rounded-full text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Resume Body - 16px text */}
          <div className="p-6 sm:p-10 overflow-y-auto space-y-8 text-slate-700 font-sans text-[16px] font-normal">
            {/* Header */}
            <div className="border-b border-slate-800 pb-6 flex flex-col sm:flex-row justify-between items-start gap-4">
              <div>
                <h1 className="text-3xl font-light text-white tracking-tight mb-1">
                  {personalInfo.name}
                </h1>
                <p className="text-[18px] text-purple-400 font-normal mb-2">
                  {personalInfo.title}
                </p>
                <p className="text-[16px] text-slate-400 max-w-xl font-light">
                  {personalInfo.subheading}
                </p>
              </div>

              <div className="text-[16px] space-y-1.5 font-mono text-slate-300 bg-slate-950 p-4 rounded-2xl border border-slate-800 min-w-[220px] font-light">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-blue-400" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-purple-400" />
                  <span>{personalInfo.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-orange-400" />
                  <span>{personalInfo.phone}</span>
                </div>
              </div>
            </div>

            {/* Executive Summary */}
            <div>
              <h2 className="text-[16px] font-mono uppercase text-purple-400 tracking-wider font-normal mb-2">
                Executive Summary
              </h2>
              <p className="text-[16px] text-slate-300 leading-relaxed bg-slate-950 p-4 rounded-2xl border border-slate-800 font-light">
                {personalInfo.aboutDescription}
              </p>
            </div>

            {/* Experience */}
            <div>
              <h2 className="text-[16px] font-mono uppercase text-purple-400 tracking-wider font-normal mb-4 flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-purple-400" />
                <span>Work Experience ({personalInfo.experienceYears} Years)</span>
              </h2>

              {experience.map((exp) => (
                <div key={exp.id} className="space-y-3 bg-slate-950 p-5 rounded-2xl border border-slate-800 mb-4">
                  <div className="flex flex-col sm:flex-row justify-between sm:items-center">
                    <div>
                      <h3 className="font-light text-white text-lg">{exp.role}</h3>
                      <p className="text-[16px] text-blue-400 font-mono">{exp.company} • {exp.location}</p>
                    </div>
                    <span className="text-[16px] text-amber-400 font-mono mt-1 sm:mt-0">{exp.period}</span>
                  </div>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-[16px] text-slate-300 font-light">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-1" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Key Featured Projects */}
            <div>
              <h2 className="text-[16px] font-mono uppercase text-purple-400 tracking-wider font-normal mb-3 flex items-center gap-2">
                <Globe className="w-4 h-4 text-purple-400" />
                <span>Featured Projects</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {projects.map((p) => (
                  <div key={p.id} className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-normal text-[16px] text-white">{p.title}</span>
                      <span className="text-[14px] font-mono text-purple-300 px-2 py-0.5 rounded bg-purple-500/10">
                        {p.category}
                      </span>
                    </div>
                    <p className="text-[16px] text-slate-400 line-clamp-2 font-light">{p.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills & Education */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h2 className="text-[16px] font-mono uppercase text-purple-400 tracking-wider font-normal mb-3">
                  Technical Skills
                </h2>
                <div className="flex flex-wrap gap-1.5">
                  {[...skillsData.frontend, ...skillsData.cms, ...skillsData.tools, ...skillsData.other].map(({ name }) => (
                    <span key={name} className="px-2.5 py-1 rounded-lg text-[16px] font-mono bg-slate-50 border border-slate-200 text-slate-600 font-normal">
                      {name}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-[16px] font-mono uppercase text-purple-400 tracking-wider font-normal mb-3 flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-purple-400" />
                  <span>Education</span>
                </h2>
                {education.map((item) => (
                  <div key={item.degree} className="p-4 rounded-2xl bg-slate-950 border border-slate-800 mb-3">
                    <h3 className="font-normal text-[16px] text-white">{item.degree}</h3>
                    <p className="text-[16px] text-slate-400 font-light">{item.institution} · {item.location} · {item.year}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
