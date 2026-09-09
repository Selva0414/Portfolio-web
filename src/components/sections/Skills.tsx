"use client";

import { useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { SKILLS_DATA } from "@/data";
import type { LucideIcon } from "lucide-react";

type SkillItem = { name: string; icon: LucideIcon; level: number; description: string };

function SkillCard({ item, index }: { item: SkillItem; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const rotateX = useSpring(useMotionValue(0), { stiffness: 180, damping: 18 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 180, damping: 18 });

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    const bounds = event.currentTarget.getBoundingClientRect();
    rotateX.set(((event.clientY - bounds.top) / bounds.height - 0.5) * -10);
    rotateY.set(((event.clientX - bounds.left) / bounds.width - 0.5) * 10);
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onPointerMove={handlePointerMove}
      onPointerLeave={() => {
        rotateX.set(0);
        rotateY.set(0);
      }}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      className="skill-card group cursor-pointer"
    >
      <div className="skill-card__shine" />
      <div className="relative flex items-start justify-between gap-4">
        <div className="flex items-center gap-4 min-w-0">
          <div className="skill-card__icon">
            <item.icon className="w-6 h-6 text-white" />
          </div>
          <div className="min-w-0">
            <h4 className="text-white font-bold text-lg">{item.name}</h4>
            <span className="block mt-1 text-xs text-gray-400 font-mono leading-relaxed">{item.description}</span>
          </div>
        </div>
        <div
          className="skill-card__meter shrink-0"
          style={{ background: `conic-gradient(#ffffff ${item.level}%, rgba(255, 255, 255, 0.12) 0)` }}
          aria-label={`${item.level}% proficiency`}
        >
          <span>{item.level}%</span>
        </div>
      </div>
      <div className="relative mt-7">
        <div className="flex items-center justify-between mb-2 text-[10px] font-mono tracking-[0.18em] uppercase text-gray-500">
          <span>Proficiency</span>
          <span className="text-gray-300">{item.level} / 100</span>
        </div>
        <div className="skill-card__track">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${item.level}%` } : { width: 0 }}
          transition={{ duration: 1.15, delay: 0.15 + index * 0.08, ease: "easeOut" }}
          className="skill-card__progress"
        />
        </div>
      </div>
    </motion.div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="portfolio-section portfolio-section--black skills-section relative z-10">
      <span className="section-ghost">STACK</span>
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="section-kicker mb-5">02 / Tools of the trade</p>
          <h2 className="section-title">Tech <em>stack.</em></h2>
          <p className="text-gray-400 font-mono">Technologies I work with — hover over a card to explore.</p>
        </div>

        <div className="flex flex-col gap-16">
          {SKILLS_DATA.map((category) => (
            <div key={category.category}>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-8 h-px bg-white/60" />
                {category.category}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item, idx) => (
                  <SkillCard key={item.name} item={item} index={idx} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
