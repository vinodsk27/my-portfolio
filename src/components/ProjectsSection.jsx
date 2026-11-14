"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Eye, Folder } from "lucide-react";
import gsap from "gsap";
import { projects } from "@/data/portfolioData";
import ProjectModal from "./ProjectModal";

export default function ProjectsSection() {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filterTabs = ["All", "WordPress"];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const cards = gsap.utils.toArray(".project-card");
    const cleanups = cards.map((card) => {
      const move = (event) => {
        const rect = card.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        gsap.to(card, { rotationY: x * 5, rotationX: y * -4, y: -5, scale: 1.012, transformPerspective: 1000, duration: 0.35, ease: "power2.out" });
      };
      const reset = () => gsap.to(card, { rotationX: 0, rotationY: 0, y: 0, scale: 1, duration: 0.65, ease: "elastic.out(1, 0.55)" });
      card.addEventListener("pointermove", move);
      card.addEventListener("pointerleave", reset);
      return () => {
        card.removeEventListener("pointermove", move);
        card.removeEventListener("pointerleave", reset);
        gsap.killTweensOf(card);
      };
    });

    return () => cleanups.forEach((cleanup) => cleanup());
  }, [filter]);

  return (
    <section id="projects" className="gsap-section py-24 px-4 sm:px-6 lg:px-8 relative bg-white text-slate-900 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-200 text-[16px] font-medium text-purple-700 uppercase tracking-widest mb-4 bg-purple-50"
          >
            <Folder className="w-4 h-4" />
            <span>Featured Portfolio Work</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-950 tracking-tight mb-4"
          >
            Crafted <span className="gradient-text font-normal">Projects</span> &amp; Client Solutions
          </motion.h2>

          {/* Subtitle Paragraph - Exactly 18px */}
            <p className="text-[18px] text-slate-600 font-normal">
            Selected WordPress websites built for cybersecurity, technology, agriculture and enterprise clients.
          </p>
        </div>

        {/* Filter Tabs - 16px font */}
        <div className="flex items-center justify-center gap-3 mb-12 text-[16px]">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-5 py-2.5 rounded-2xl text-[16px] font-light transition-all cursor-pointer ${
                filter === tab
                  ? "gradient-accent text-white shadow-lg shadow-purple-500/20 scale-105"
                  : "border border-slate-200 text-slate-700 hover:text-slate-950 bg-white shadow-sm"
              }`}
            >
              {tab === "All" ? `All Projects (${projects.length})` : `${tab} Projects`}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid - All 16px font */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-[16px]"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="project-card rounded-3xl border border-slate-200 overflow-hidden flex flex-col justify-between group hover:border-blue-300 hover:shadow-2xl transition-all duration-300 bg-white shadow-lg"
              >
                <div>
                  {/* Preview Banner */}
                  <div
                    className={`project-image h-48 w-full ${project.image ? "bg-cover bg-center" : `bg-gradient-to-br ${project.imageGradient}`} p-4 relative flex flex-col justify-between overflow-hidden group-hover:scale-[1.025] transition-transform duration-500`}
                    style={project.image ? { backgroundImage: `linear-gradient(180deg, rgba(15,23,42,.18), rgba(15,23,42,.55)), url("${project.image}")` } : undefined}
                  >
                    <div className="flex items-center justify-between border-b border-white/20 pb-2">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                        <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full text-[14px] font-mono bg-black/60 text-white font-normal border border-white/10">
                        {project.category}
                      </span>
                    </div>

                    <div className="my-auto text-center">
                      <h4 className="text-2xl font-semibold tracking-tight text-white drop-shadow-md">
                        {project.title}
                      </h4>
                      <p className="text-[14px] text-slate-200 font-mono mt-1 opacity-90 font-normal">
                        {project.url.replace("https://", "").replace("www.", "")}
                      </p>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3 p-4">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-purple-600 text-white font-normal text-[16px] shadow-md hover:bg-purple-500 transition-colors"
                      >
                        <Eye className="w-4 h-4" />
                        <span>Quick View</span>
                      </button>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 text-white font-normal text-[16px] shadow-md hover:bg-blue-500 transition-colors"
                      >
                        <span>Visit Site</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-slate-950 group-hover:text-blue-700 transition-colors">
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-[16px] text-slate-600 leading-relaxed mb-6 line-clamp-3 font-normal">
                      {project.description}
                    </p>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-0.5 rounded-lg text-[16px] font-mono bg-slate-800 border border-slate-700 text-slate-200 font-light"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="px-6 pb-6 pt-0 flex items-center justify-between border-t border-slate-800 mt-auto pt-4 text-[16px]">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-[16px] font-light text-purple-400 hover:underline flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <span>View Case Specs</span>
                    <Eye className="w-4 h-4" />
                  </button>

                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-[16px] font-light text-blue-400 hover:underline transition-colors"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
