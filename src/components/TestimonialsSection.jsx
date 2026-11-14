"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight, MessageSquareQuote } from "lucide-react";
import { testimonials } from "@/data/portfolioData";

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-white text-black font-sans transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-400/40 text-[16px] font-light text-amber-700 uppercase tracking-widest mb-4 bg-amber-50/50"
          >
            <MessageSquareQuote className="w-4 h-4" />
            <span>Client Feedback</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-light text-black tracking-tight mb-4"
          >
            What Clients &amp; <span className="gradient-text font-normal">Partners Say</span>
          </motion.h2>

          {/* Subtitle Paragraph - Exactly 18px */}
          <p className="text-[18px] text-slate-800 font-light">
            Reviews from project managers, founders, and teams I&apos;ve collaborated with.
          </p>
        </div>

        {/* Carousel Container - All 16px font */}
        <div className="relative p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-xl overflow-hidden min-h-[320px] flex flex-col justify-between bg-white text-[16px]">
          <Quote className="absolute top-6 right-8 w-20 h-20 text-purple-500/10 pointer-events-none" />

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.5 }}
              className="relative z-10"
            >
              {/* Star Rating */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Quote Text - 18px */}
              <p className="text-[18px] text-black font-light italic leading-relaxed mb-8">
                &quot;{testimonials[currentIndex].quote}&quot;
              </p>

              {/* Author Metadata */}
              <div className="flex items-center gap-4 text-[16px]">
                <div className="w-12 h-12 rounded-full p-[2px] gradient-accent">
                  <div className="w-full h-full bg-white rounded-full flex items-center justify-center font-normal text-black text-base">
                    {testimonials[currentIndex].author[0]}
                  </div>
                </div>
                <div>
                  <h4 className="text-[16px] font-normal text-black">
                    {testimonials[currentIndex].author}
                  </h4>
                  <p className="text-[16px] text-purple-700 font-mono font-light">
                    {testimonials[currentIndex].role} • {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Controls */}
          <div className="flex items-center justify-between pt-6 border-t border-slate-200 mt-8 relative z-10 text-[16px]">
            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all ${
                    currentIndex === idx
                      ? "w-8 gradient-accent"
                      : "w-2 bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Prev / Next Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="p-2.5 rounded-xl border border-slate-300 text-slate-800 hover:text-black transition-all cursor-pointer bg-white shadow-sm"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="p-2.5 rounded-xl border border-slate-300 text-slate-800 hover:text-black transition-all cursor-pointer bg-white shadow-sm"
                aria-label="Next Testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
