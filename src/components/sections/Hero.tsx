"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import Image from "next/image";

const ROLES = [
  { prefix: "Software", suffix: "Developer" },
  { prefix: "App", suffix: "Developer" },
  { prefix: "Web", suffix: "Developer" },
  { prefix: "Full Stack", suffix: "Developer" }
];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const imageRef = useRef<HTMLDivElement>(null);
  const imageX = useMotionValue(0);
  const imageY = useMotionValue(0);
  const imageXSpring = useSpring(imageX, { stiffness: 180, damping: 18 });
  const imageYSpring = useSpring(imageY, { stiffness: 180, damping: 18 });
  const imageRotateX = useTransform(imageYSpring, [-0.5, 0.5], ["9deg", "-9deg"]);
  const imageRotateY = useTransform(imageXSpring, [-0.5, 0.5], ["-9deg", "9deg"]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleImageMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return;
    const bounds = imageRef.current.getBoundingClientRect();
    imageX.set((event.clientX - bounds.left) / bounds.width - 0.5);
    imageY.set((event.clientY - bounds.top) / bounds.height - 0.5);
  };

  const resetImageTilt = () => {
    imageX.set(0);
    imageY.set(0);
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-end overflow-hidden bg-black">

      {/* Huge Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-[11vw] sm:text-[13vw] md:text-[14vw] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-[#e5e5e5] via-[#a3a3a3] to-[#262626] select-none whitespace-nowrap"
          style={{ lineHeight: 0.8, WebkitTextFillColor: 'transparent' }}
        >
          PORTFOLIO
        </motion.h1>
      </div>

      {/* Center Image */}
      <div className="absolute inset-x-0 bottom-0 flex justify-center z-10">
        <motion.div
          ref={imageRef}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          onMouseMove={handleImageMove}
          onMouseLeave={resetImageTilt}
          whileHover={{ scale: 1.035, y: -8 }}
          style={{ rotateX: imageRotateX, rotateY: imageRotateY, transformPerspective: 1200, transformStyle: "preserve-3d" }}
          className="hero-portrait relative w-[250px] md:w-[350px] lg:w-[450px] aspect-[3/4] cursor-pointer"
        >
          {/* We wrap the image in a div to apply a horizontal mask (fading the shoulders), 
              while the image itself handles the vertical mask (fading the bottom). */}
          <div 
            className="absolute inset-0"
            style={{
              maskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)'
            }}
          >
            <Image
              src="/selva_black.png"
              alt="Selu - Software Developer"
              fill
              className="object-cover object-top"
              priority
              style={{
                maskImage: 'linear-gradient(to top, transparent 2%, black 35%)',
                WebkitMaskImage: 'linear-gradient(to top, transparent 2%, black 35%)',
                mixBlendMode: 'lighten'
              }}
            />
          </div>
        </motion.div>
      </div>

      {/* Bottom Content Area */}
      <div className="relative z-20 w-full max-w-[1400px] mx-auto px-8 pb-16 flex items-end justify-between">

        {/* Left: Role Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="pointer-events-auto h-[3rem] md:h-[4rem] flex items-center"
        >
          <div className="text-2xl md:text-4xl lg:text-5xl text-white tracking-tight flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={roleIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="flex items-center gap-3 whitespace-nowrap"
              >
                <span className="font-bold">{ROLES[roleIndex].prefix}</span>
                <span className="font-light italic text-gray-400">{ROLES[roleIndex].suffix}</span>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Right: CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex items-center gap-6 pointer-events-auto"
        >
          <a href="#projects" className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
            <ArrowDownRight className="w-4 h-4 md:w-5 md:h-5" />
          </a>
          <a href="#contact" className="px-6 py-2 md:px-8 md:py-3 rounded-full border border-white/20 text-xs md:text-sm font-medium hover:bg-white hover:text-black transition-colors tracking-widest uppercase">
            Contact
          </a>
        </motion.div>

      </div>
    </section>
  );
}
