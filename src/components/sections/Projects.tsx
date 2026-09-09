"use client";

import { motion } from "framer-motion";
import { ProjectCard } from "../ui/ProjectCard";
import { PROJECTS_DATA } from "@/data";
import { ArrowRight } from "lucide-react";

export function Projects() {
  return (
    <section id="projects" className="portfolio-section projects-section relative z-10">
      <span className="section-ghost">WORK</span>
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="section-kicker mb-5">03 / Selected work</p>
            <h2 className="section-title">Featured <em>projects.</em></h2>
            <p className="text-gray-400 font-mono max-w-xl">
              A selection of my recent work in mobile applications and digital experiences.
            </p>
          </div>
          <button className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest group">
            View All Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS_DATA.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.12, ease: "easeOut" }}
              whileHover={{ y: -8 }}
            >
              <ProjectCard 
                title={project.title}
                description={project.description}
                tags={project.tags}
                githubUrl={project.githubUrl}
                liveUrl={project.liveUrl}
                image={project.image}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
