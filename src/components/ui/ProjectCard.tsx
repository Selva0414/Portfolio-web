"use client";

import React, { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, Code } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  className?: string;
}

export function ProjectCard({ title, description, tags, githubUrl, liveUrl, image, className }: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);
  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"]);
  const glare = useMotionTemplate`radial-gradient(420px circle at ${glareX} ${glareY}, rgba(255,255,255,0.16), transparent 42%)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1200,
        transformStyle: "preserve-3d",
      }}
      className={cn(
        "project-card relative w-full max-w-sm rounded-2xl editorial-card p-6 transition-all duration-300 ease-out cursor-pointer group",
        className
      )}
    >
      <div
        className="project-card__glare absolute inset-0 z-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ "--project-glare": glare } as unknown as React.CSSProperties}
      />
      <div style={{ transform: "translateZ(38px)" }} className="relative z-10">
        <div style={{ transform: "translateZ(24px)" }} className="relative w-full h-48 mb-6 rounded-xl overflow-hidden shadow-2xl">
          {image ? (
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
            />
          ) : (
            <div className="w-full h-full bg-darkgray flex items-center justify-center text-gray-500 font-mono text-sm">
              No Image
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 to-transparent" />
        </div>

        <h3 style={{ transform: "translateZ(18px)" }} className="text-xl font-bold font-sans text-white mb-2 group-hover:text-white/60 transition-colors">{title}</h3>
        <p className="text-gray-400 text-sm mb-6 line-clamp-3">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <span key={tag} className="px-2 py-1 text-xs rounded-md bg-white/5 border border-white/10 text-white/70 font-mono">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 mt-auto">
          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Code className="w-5 h-5" />
            </a>
          )}
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
