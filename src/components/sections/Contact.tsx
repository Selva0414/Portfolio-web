"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CONTACT_DATA } from "@/data";
import { Send, MapPin, Mail, Code, Briefcase, CheckCircle2 } from "lucide-react";
import { MagneticButton } from "../ui/MagneticButton";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="portfolio-section relative z-10">
      <span className="section-ghost">HELLO</span>
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <p className="section-kicker mb-5">06 / Start a conversation</p>
          <h2 className="section-title">Get in <em>touch.</em></h2>
          <p className="text-gray-400 font-mono">Let&apos;s build something amazing together.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="editorial-card p-8 rounded-3xl relative overflow-hidden"
          >
            {/* Background Glow */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/5 rounded-full blur-3xl" />

            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full min-h-[400px] flex flex-col items-center justify-center text-center relative z-10"
              >
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-gray-400">Thank you for reaching out. I&apos;ll get back to you soon.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-400">Name</label>
                    <input required type="text" id="name" className="bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/60 transition-colors" placeholder="John Doe" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-400">Email</label>
                    <input required type="email" id="email" className="bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/60 transition-colors" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="subject" className="text-sm font-medium text-gray-400">Subject</label>
                  <input required type="text" id="subject" className="bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/60 transition-colors" placeholder="Project Inquiry" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-400">Message</label>
                  <textarea required id="message" rows={5} className="bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/60 transition-colors resize-none" placeholder="Hello..." />
                </div>
                <MagneticButton type="submit" className="w-full bg-white text-black hover:bg-white/75 hover:text-black mt-4">
                  Send Message <Send className="w-4 h-4 ml-2" />
                </MagneticButton>
              </form>
            )}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center gap-10"
          >
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">Contact Information</h3>
              <p className="text-gray-400 leading-relaxed mb-8 max-w-md">
                I&apos;m currently available for freelance work and full-time opportunities. If you have a project that needs some creative touch, I&apos;d love to hear about it.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <a href={`mailto:${CONTACT_DATA.email}`} className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/15 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-lg font-mono">{CONTACT_DATA.email}</span>
              </a>
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-mono">{CONTACT_DATA.location}</span>
              </div>
            </div>

            <div className="pt-8 border-t border-white/10 flex gap-4">
              <a href={CONTACT_DATA.github} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full editorial-card flex items-center justify-center text-gray-400 hover:text-white transition-all hover:-translate-y-1">
                <Code className="w-5 h-5" />
              </a>
              <a href={CONTACT_DATA.linkedin} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full editorial-card flex items-center justify-center text-gray-400 hover:text-white transition-all hover:-translate-y-1">
                <Briefcase className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
