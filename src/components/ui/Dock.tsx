"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, type MotionValue } from "framer-motion";
import { Home, User, FolderGit2, Mail, TerminalSquare, type LucideIcon } from "lucide-react";

const DOCK_ITEMS = [
  { icon: Home, label: "Home", href: "#home" },
  { icon: User, label: "About", href: "#about" },
  { icon: FolderGit2, label: "Projects", href: "#projects" },
  { icon: TerminalSquare, label: "Skills", href: "#skills" },
  { icon: Mail, label: "Contact", href: "#contact" },
];

export function Dock() {
  const mouseX = useMotionValue(Infinity);

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <motion.div
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className="flex h-16 items-end gap-4 rounded-2xl glass px-4 pb-3 shadow-2xl"
      >
        {DOCK_ITEMS.map((item, idx) => (
          <DockItem key={idx} mouseX={mouseX} {...item} />
        ))}
      </motion.div>
    </div>
  );
}

function DockItem({ mouseX, icon: Icon, label, href }: { mouseX: MotionValue<number>; icon: LucideIcon; label: string; href: string }) {
  const ref = useRef<HTMLAnchorElement>(null);

  const distance = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <motion.a
      ref={ref}
      href={href}
      style={{ width, height: width }}
      className="group relative flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan/50 hover:text-cyan text-gray-400 transition-colors"
    >
      <Icon className="w-1/2 h-1/2" />
      <span className="absolute -top-10 left-1/2 -translate-x-1/2 rounded-md glass px-2 py-1 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity">
        {label}
      </span>
    </motion.a>
  );
}
