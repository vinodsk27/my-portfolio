"use client";

import { motion } from "framer-motion";
import { LayoutGrid, Code2, Globe, Layers, Zap, Rocket, ShieldCheck, CheckCircle2, ArrowUpRight } from "lucide-react";
import { services } from "@/data/portfolioData";

export default function ServicesSection() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case "LayoutGrid":
        return <LayoutGrid className="w-6 h-6 text-blue-400" />;
      case "Code2":
        return <Code2 className="w-6 h-6 text-purple-400" />;
      case "Globe":
        return <Globe className="w-6 h-6 text-cyan-400" />;
      case "Layers":
        return <Layers className="w-6 h-6 text-pink-400" />;
      case "Zap":
        return <Zap className="w-6 h-6 text-amber-400" />;
      case "Rocket":
        return <Rocket className="w-6 h-6 text-emerald-400" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-6 h-6 text-indigo-400" />;
      default:
        return <Code2 className="w-6 h-6 text-blue-400" />;
    }
  };

  return (
    <section id="services" className="gsap-section py-24 px-4 sm:px-6 lg:px-8 relative bg-white text-slate-900 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-200 text-[16px] font-medium text-purple-700 uppercase tracking-widest mb-4 bg-purple-50"
          >
            <Rocket className="w-4 h-4" />
            <span>Specialized Services</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-950 tracking-tight mb-4"
          >
            Solutions <span className="gradient-text font-normal">I Provide</span>
          </motion.h2>

          {/* Subtitle Paragraph - Exactly 18px */}
          <p className="text-[18px] text-slate-300 font-light">
            End-to-end web design and development services engineered for high speed, conversion, and seamless client management.
          </p>
        </div>

        {/* Services Cards Grid - All 16px font */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-[16px]">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="p-8 rounded-3xl border border-slate-800 relative overflow-hidden group hover:border-purple-500/50 transition-all duration-300 flex flex-col justify-between bg-slate-900 shadow-xl"
            >
              <div>
                {/* Service Icon */}
                <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-md">
                  {getIcon(service.icon)}
                </div>

                <h3 className="text-2xl font-light text-white mb-3 flex items-center justify-between">
                  <span>{service.title}</span>
                  <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-purple-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </h3>

                <p className="text-[16px] text-slate-300 leading-relaxed mb-6 font-light">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-[16px] text-slate-300 font-light">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service Action Link */}
              <a
                href="#contact"
                className="pt-4 border-t border-slate-800 text-[16px] font-normal text-purple-400 group-hover:underline flex items-center gap-1.5 transition-colors"
              >
                <span>Inquire About This Service</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
