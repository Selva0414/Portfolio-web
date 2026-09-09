"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { ABOUT_DATA } from "@/data";

function AnimatedCounter({ value, label }: { value: number; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView) {
      let start = 0;
      const duration = 2000;
      const stepTime = Math.abs(Math.floor(duration / value));
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === value) clearInterval(timer);
      }, stepTime);
      return () => clearInterval(timer);
    }
  }, [inView, value]);

  return (
    <div ref={ref} className="editorial-card rounded-2xl p-6 text-center transition-colors">
      <div className="text-4xl md:text-5xl font-black text-white mb-2">
        {count}
        <span className="text-white/50">+</span>
      </div>
      <div className="text-sm text-gray-400 font-medium">{label}</div>
    </div>
  );
}

export function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  return (
    <section id="about" className="portfolio-section portfolio-section--black relative z-10">
      <span className="section-ghost">ABOUT</span>
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
          }}
          className="mb-16"
        >
          <p className="section-kicker mb-5">01 / A little introduction</p>
          <h2 className="section-title">About <em>me.</em></h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-10">
          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.2 } }
            }}
          >
            <div className="editorial-card rounded-3xl p-7 md:p-10 flex flex-col md:flex-row md:items-end gap-8 justify-between">
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-sans max-w-3xl">
                {ABOUT_DATA.intro}
              </p>
              <div className="flex gap-4 shrink-0">
              <div className="flex -space-x-4">
                <div className="w-12 h-12 rounded-full border-2 border-black bg-white text-black flex items-center justify-center font-bold shadow-xl">
                  UI
                </div>
                <div className="w-12 h-12 rounded-full border-2 border-obsidian bg-gray-800 flex items-center justify-center font-bold text-white shadow-xl">
                  AI
                </div>
                <div className="w-12 h-12 rounded-full border-2 border-black bg-white/20 flex items-center justify-center font-bold text-white shadow-xl">
                  UX
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-sm font-bold text-white">Focus Areas</span>
                <span className="text-xs text-gray-400 font-mono">Mobile & AI Integration</span>
              </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.4 } }
            }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4"
          >
            {ABOUT_DATA.stats.map((stat, idx) => (
              <AnimatedCounter key={idx} value={stat.value} label={stat.label} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
