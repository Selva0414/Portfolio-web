"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { CERTIFICATES_DATA } from "@/data";

export function Certificates() {
  return (
    <section id="certificates" className="portfolio-section portfolio-section--soft relative z-10">
      <span className="section-ghost">AWARDS</span>
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <p className="section-kicker mb-5">04 / Credentials</p>
          <h2 className="section-title">My <em>certificates.</em></h2>
          <p className="mt-5 text-gray-400 font-mono">A selection of credentials earned along my learning journey.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CERTIFICATES_DATA.map((certificate, idx) => (
            <motion.article
              key={certificate.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              whileHover={{ y: -10, rotateX: 5, rotateY: idx % 2 ? 4 : -4, scale: 1.02 }}
              style={{ transformPerspective: 1000, transformStyle: "preserve-3d" }}
              className="editorial-card depth-card rounded-2xl p-6 min-h-48 flex flex-col justify-between"
            >
              <Award className="w-9 h-9 text-white" aria-hidden="true" />
              <div className="mt-10">
                <p className="text-xs font-mono tracking-[0.18em] uppercase text-gray-500 mb-3">Credential</p>
                <h3 className="text-2xl font-bold text-white">{certificate.title}</h3>
                <p className="mt-2 text-gray-400">{certificate.issuer}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
