"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Globe, Layers } from "lucide-react";

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

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

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 28 }}
          className="relative w-full max-w-3xl rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-2xl z-10 overflow-hidden my-8 bg-white text-slate-900"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full text-slate-600 hover:text-slate-950 transition-colors bg-slate-100"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Top Header */}
          <div className="flex items-center gap-3 mb-4 text-[16px]">
            <span className="px-3 py-1 rounded-full font-mono font-medium bg-purple-50 text-purple-700 border border-purple-100">
              {project.category} Project
            </span>
            <div className="flex items-center gap-1.5 text-slate-600 font-normal">
              <Globe className="w-4 h-4 text-blue-400" />
              <span>Production Web App</span>
            </div>
          </div>

          <h3 className="text-2xl sm:text-3xl font-semibold text-slate-950 mb-3">
            {project.title}
          </h3>

          <p className="text-slate-600 text-[16px] leading-relaxed mb-6 font-normal">
            {project.extendedDetails || project.description}
          </p>

          {/* Browser Mockup */}
          <div className="project-browser-preview w-full h-48 sm:h-64 rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border border-slate-800 p-4 mb-6 relative overflow-hidden flex flex-col justify-between text-white">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-rose-500" />
                <div className="w-3 h-3 rounded-full bg-amber-500" />
                <div className="w-3 h-3 rounded-full bg-emerald-500" />
              </div>
              <div className="text-[14px] font-mono text-slate-100 bg-white/10 px-4 py-1 rounded-md border border-white/20">
                {project.url}
              </div>
            </div>

            <div className="flex-1 flex items-center justify-center text-center p-4">
              <div>
                <h4 className="text-xl font-light gradient-text font-mono mb-2">
                  {project.title}
                </h4>
                <p className="text-[16px] text-slate-400 max-w-md font-light">
                  {project.description}
                </p>
              </div>
            </div>
          </div>

          {/* Tech Stack Badges */}
          <div className="mb-6">
            <h4 className="text-[16px] font-mono uppercase text-slate-400 tracking-wider font-light mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4 text-purple-400" />
              <span>Technologies Used</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-xl text-[16px] font-medium border border-slate-200 text-slate-700 bg-slate-50"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800 text-[16px]">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl text-slate-700 hover:text-slate-950 font-medium border border-slate-200 bg-white"
            >
              Close
            </button>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-2.5 rounded-xl gradient-accent text-white font-normal text-[16px] shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <span>Visit Website</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
