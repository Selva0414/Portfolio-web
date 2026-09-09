"use client";

import { CONTACT_DATA } from "@/data";
import { ArrowUp, Code, Briefcase, Mail } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-10 border-t border-white/10 bg-obsidian py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="text-center md:text-left">
          <a href="#home" className="text-xl font-black tracking-tighter text-white mb-2 inline-block">
            SELU<span className="text-cyan">.DEV</span>
          </a>
          <p className="text-gray-500 text-sm font-mono">
            Designed & Developed by Selu &copy; {new Date().getFullYear()}
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a href={CONTACT_DATA.github} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <Code className="w-5 h-5" />
          </a>
          <a href={CONTACT_DATA.linkedin} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-cyan transition-colors">
            <Briefcase className="w-5 h-5" />
          </a>
          <a href={`mailto:${CONTACT_DATA.email}`} className="text-gray-400 hover:text-cyan transition-colors">
            <Mail className="w-5 h-5" />
          </a>
        </div>

        <button 
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-cyan hover:border-cyan/50 transition-colors"
          aria-label="Back to Top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>

      </div>
      
      {/* Subtle glowing line at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan/50 to-transparent opacity-50" />
    </footer>
  );
}
