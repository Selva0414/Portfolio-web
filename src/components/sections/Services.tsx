"use client";

import { motion } from "framer-motion";
import { SERVICES_DATA } from "@/data";

export function Services() {
  return (
    <section id="services" className="portfolio-section relative z-10">
      <span className="section-ghost">DO</span>
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <p className="section-kicker mb-5">05 / How I can help</p>
          <h2 className="section-title">What I <em>do.</em></h2>
          <p className="text-gray-400 font-mono">Specialized services and expertise.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -12, rotateX: idx % 2 ? -4 : 4, rotateY: idx % 2 ? 4 : -4, scale: 1.015 }}
              style={{ transformPerspective: 1000, transformStyle: "preserve-3d" }}
              className="editorial-card depth-card p-8 rounded-2xl transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="w-7 h-7 text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
