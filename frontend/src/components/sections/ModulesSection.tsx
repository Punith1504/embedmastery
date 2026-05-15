"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { GlassCard } from "../ui/GlassCard";

const modules = [
  {
    day: "Day 1",
    title: "The Frequency Blueprint",
    description: "Tune into the 'Alpha State' on command. Discover how your brainwaves dictate what you attract.",
    icon: (
      <svg viewBox="0 0 64 64" className="w-12 h-12" fill="none">
        <circle cx="32" cy="32" r="28" stroke="url(#grad1)" strokeWidth="2" opacity="0.6"/>
        <path d="M12 32 Q 22 12, 32 32 Q 42 52, 52 32" stroke="url(#grad1)" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        <defs><linearGradient id="grad1" x1="0" y1="0" x2="64" y2="64"><stop stopColor="#FFD700"/><stop offset="1" stopColor="#00FFFF"/></linearGradient></defs>
      </svg>
    ),
  },
  {
    day: "Day 1",
    title: "Subconscious Purge",
    description: "Locate and permanently delete the deep neural blocks sabotaging your success.",
    icon: (
      <svg viewBox="0 0 64 64" className="w-12 h-12" fill="none">
        <circle cx="32" cy="32" r="20" stroke="#8A2BE2" strokeWidth="2" opacity="0.5"/>
        <circle cx="32" cy="32" r="12" stroke="#FFD700" strokeWidth="1.5" opacity="0.7"/>
        <circle cx="32" cy="32" r="4" fill="#FFD700" opacity="0.9"/>
        <path d="M32 12 V8 M32 56 V52 M12 32 H8 M56 32 H52" stroke="#8A2BE2" strokeWidth="1.5" opacity="0.4"/>
      </svg>
    ),
  },
  {
    day: "Day 2",
    title: "Quantum Goal Integration",
    description: "Plant your desires directly into the quantum field for rapid, effortless materialization.",
    icon: (
      <svg viewBox="0 0 64 64" className="w-12 h-12" fill="none">
        <ellipse cx="32" cy="32" rx="28" ry="12" stroke="#00FFFF" strokeWidth="1.5" opacity="0.4" transform="rotate(0 32 32)"/>
        <ellipse cx="32" cy="32" rx="28" ry="12" stroke="#FFD700" strokeWidth="1.5" opacity="0.4" transform="rotate(60 32 32)"/>
        <ellipse cx="32" cy="32" rx="28" ry="12" stroke="#8A2BE2" strokeWidth="1.5" opacity="0.4" transform="rotate(120 32 32)"/>
        <circle cx="32" cy="32" r="5" fill="url(#grad2)" opacity="0.9"/>
        <defs><radialGradient id="grad2"><stop stopColor="#FFD700"/><stop offset="1" stopColor="#00FFFF"/></radialGradient></defs>
      </svg>
    ),
  },
  {
    day: "Day 2",
    title: "The 11-Minute Protocol",
    description: "A daily scientific ritual. Combine breathwork and frequency audio to lock in your new reality.",
    icon: (
      <svg viewBox="0 0 64 64" className="w-12 h-12" fill="none">
        <path d="M32 8 L32 56" stroke="#FFD700" strokeWidth="2" opacity="0.3"/>
        <circle cx="32" cy="20" r="6" stroke="#00FFFF" strokeWidth="1.5" opacity="0.6"/>
        <circle cx="32" cy="32" r="8" stroke="#FFD700" strokeWidth="2" opacity="0.8"/>
        <circle cx="32" cy="44" r="6" stroke="#8A2BE2" strokeWidth="1.5" opacity="0.6"/>
        <path d="M20 32 Q 26 22, 32 32 Q 38 42, 44 32" stroke="#FFD700" strokeWidth="1" opacity="0.4"/>
      </svg>
    ),
  },
];

export function ModulesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={sectionRef} className="relative py-24 px-4 flex flex-col items-center justify-center overflow-hidden z-10">
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        style={{ y: bgY }}
      >
        <div className="absolute top-[50%] left-[-10%] w-[600px] h-[600px] bg-[var(--color-neon-cyan)] rounded-full mix-blend-screen filter blur-[200px] opacity-10"></div>
      </motion.div>

      <div className="w-full max-w-4xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Curriculum
          </h2>
          <p className="text-gray-400 text-lg">
            A precise neurological protocol to shift your paradigm.
          </p>
        </motion.div>

        <div className="flex flex-col gap-8 w-full relative">
          {/* Vertical Line */}
          <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent transform md:-translate-x-1/2"></div>

          {modules.map((mod, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                type: "spring",
                stiffness: 80,
                damping: 18,
                delay: index * 0.08 
              }}
              className={`relative flex flex-col md:flex-row items-center justify-between w-full ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="w-full md:w-5/12 hidden md:block"></div>
              
              {/* Timeline Node */}
              <div className="absolute left-0 md:left-1/2 w-14 h-14 bg-[var(--color-space-900)] rounded-full border-2 border-white/20 flex items-center justify-center transform md:-translate-x-1/2 shadow-[0_0_20px_rgba(255,255,255,0.1)] z-10">
                <span className="text-xs font-bold text-gradient-gold">{mod.day}</span>
              </div>

              <div className="w-full md:w-5/12 pl-20 md:pl-0">
                <GlassCard className="p-6 md:p-8 hover:border-yellow-500/30 transition-colors duration-300">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 mt-1 glass-panel rounded-xl p-3">
                      {mod.icon}
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{mod.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{mod.description}</p>
                    </div>
                  </div>
                </GlassCard>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
