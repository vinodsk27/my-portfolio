"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";
import { LinkedinIcon } from "@/components/SocialIcons";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    const text = [
      `Hi Vinod, my name is ${formData.name}.`,
      `Email: ${formData.email}`,
      formData.subject ? `Subject: ${formData.subject}` : "",
      formData.message,
    ].filter(Boolean).join("\n\n");
    window.open(`https://wa.me/918748970331?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
    setStatus("opened");
  };

  return (
    <section id="contact" className="gsap-section py-24 px-4 sm:px-6 lg:px-8 relative bg-white text-slate-900 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-200 text-[16px] font-medium text-purple-700 uppercase tracking-widest mb-4 bg-purple-50"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Contact Me</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-950 tracking-tight mb-4"
          >
            Let&apos;s Build Something <span className="gradient-text font-normal">Great</span>
          </motion.h2>

          {/* Subtitle Paragraph - Exactly 18px */}
          <p className="text-[18px] text-slate-300 font-light">
            Tell me a little about your project. The form will open a WhatsApp message addressed to me.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-[16px]">
          {/* Left Column: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-8 rounded-3xl border border-slate-800 space-y-6 bg-slate-900 shadow-xl">
              <h3 className="text-2xl font-light text-white mb-2">
                Contact Information
              </h3>
              <p className="text-[16px] text-slate-300 leading-relaxed mb-6 font-light">
                Feel free to reach out directly via email, phone, or LinkedIn. I usually respond within 24 hours.
              </p>

              {/* Email */}
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-4 p-4 rounded-2xl border border-slate-200 hover:border-purple-300 transition-all group bg-slate-50 shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-700 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[14px] text-slate-400 font-mono uppercase font-light">Direct Email</div>
                  <div className="text-[16px] font-normal text-white group-hover:text-blue-400 transition-colors">
                    {personalInfo.email}
                  </div>
                </div>
              </a>

              {/* Phone */}
              <a
                href={`tel:${personalInfo.phone.replace(/\s+/g, "")}`}
                className="flex items-center gap-4 p-4 rounded-2xl border border-slate-200 hover:border-purple-300 transition-all group bg-slate-50 shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-700 group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[14px] text-slate-400 font-mono uppercase font-light">Phone / WhatsApp</div>
                  <div className="text-[16px] font-normal text-white group-hover:text-purple-400 transition-colors">
                    {personalInfo.phone}
                  </div>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4 p-4 rounded-2xl border border-slate-200 bg-slate-50 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-700">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[14px] text-slate-400 font-mono uppercase font-light">Location</div>
                  <div className="text-[16px] font-normal text-white">
                    {personalInfo.location}
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-4 border-t border-slate-800">
                <div className="text-[16px] font-mono uppercase text-slate-400 mb-3 font-light">
                  Connect On Socials
                </div>
                <div className="flex items-center gap-3 text-[16px]">
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-800 text-slate-300 hover:text-white transition-all text-[16px] font-light bg-slate-900 shadow-sm"
                  >
                    <LinkedinIcon className="w-4 h-4 text-blue-400" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form - All 16px font */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="p-8 sm:p-10 rounded-3xl border border-slate-800 relative bg-slate-900 shadow-xl font-light">
              {status === "opened" ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-light text-white">WhatsApp message is ready</h3>
                  <p className="text-[16px] text-slate-300 max-w-md mx-auto font-light">
                    Review the prefilled message in WhatsApp and tap Send to contact Vinod.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="px-6 py-2.5 rounded-xl bg-purple-600 text-white text-[16px] font-normal hover:bg-purple-500 transition-colors cursor-pointer"
                  >
                    Edit Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label className="block text-[16px] font-mono uppercase text-slate-300 mb-2 font-light">
                        Your Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-[16px] font-light focus:outline-none focus:border-purple-500 transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-[16px] font-mono uppercase text-slate-300 mb-2 font-light">
                        Your Email <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-[16px] font-light focus:outline-none focus:border-purple-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-[16px] font-mono uppercase text-slate-300 mb-2 font-light">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Inquiry / Hiring Opportunity"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-[16px] font-light focus:outline-none focus:border-purple-500 transition-colors"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-[16px] font-mono uppercase text-slate-300 mb-2 font-light">
                      Your Message <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your website requirements..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-[16px] font-light focus:outline-none focus:border-purple-500 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl gradient-accent text-white font-normal text-[16px] shadow-lg shadow-purple-500/20 hover:shadow-purple-500/35 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>Continue in WhatsApp</span>
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
