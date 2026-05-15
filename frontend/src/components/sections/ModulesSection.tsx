"use client";

import { motion } from "framer-motion";
import { GlassCard } from "../ui/GlassCard";

const modules = [
  {
    day: "Day 1",
    title: "The Science of Frequency",
    description: "Understand how brainwaves and electromagnetic fields govern what you attract. Learn to tune into the 'Alpha State' on command.",
  },
  {
    day: "Day 1",
    title: "Subconscious Unblocking",
    description: "Identify and permanently delete deeply ingrained limiting beliefs about money, success, and relationships.",
  },
  {
    day: "Day 2",
    title: "Quantum Goal Setting",
    description: "Stop wishing, start materializing. A scientific framework to plant your goals into the quantum field for rapid manifestation.",
  },
  {
    day: "Day 2",
    title: "The 11-Minute Daily Ritual",
    description: "A plug-and-play daily protocol combining breathwork, visualization, and frequency audio to lock in your new reality.",
  },
];

export function ModulesSection() {
  return (
    <section className="relative py-24 px-4 flex flex-col items-center justify-center overflow-hidden z-10">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[50%] left-[-10%] w-[600px] h-[600px] bg-[var(--color-neon-cyan)] rounded-full mix-blend-screen filter blur-[200px] opacity-10"></div>
      </div>

      <div className="w-full max-w-4xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            What You Will Learn
          </h2>
          <p className="text-gray-400 text-lg">
            A precise, scientific curriculum designed to reprogram your reality.
          </p>
        </motion.div>

        <div className="flex flex-col gap-8 w-full relative">
          {/* Vertical Line */}
          <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent transform md:-translate-x-1/2"></div>

          {modules.map((mod, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: index * 0.1 
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
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3">{mod.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{mod.description}</p>
                </GlassCard>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
