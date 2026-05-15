"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { AntiGravityWrapper } from "../animations/AntiGravityWrapper";
import { GlassCard } from "../ui/GlassCard";
import { Heart, Landmark, Sprout } from "lucide-react";

function MentorAuraSVG() {
  return (
    <svg viewBox="0 0 300 300" className="absolute inset-0 w-full h-full pointer-events-none" fill="none">
      <circle cx="150" cy="150" r="80" stroke="url(#auraGrad)" strokeWidth="1" opacity="0.3">
        <animate attributeName="r" values="80;90;80" dur="4s" repeatCount="indefinite"/>
      </circle>
      <circle cx="150" cy="150" r="100" stroke="url(#auraGrad)" strokeWidth="0.8" opacity="0.2">
        <animate attributeName="r" values="100;115;100" dur="5s" repeatCount="indefinite"/>
      </circle>
      <circle cx="150" cy="150" r="130" stroke="url(#auraGrad)" strokeWidth="0.5" opacity="0.1">
        <animate attributeName="r" values="130;140;130" dur="6s" repeatCount="indefinite"/>
      </circle>
      <defs>
        <linearGradient id="auraGrad" x1="0" y1="0" x2="300" y2="300">
          <stop stopColor="#FFD700"/>
          <stop offset="0.5" stopColor="#8A2BE2"/>
          <stop offset="1" stopColor="#00FFFF"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

export function MentorSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1]);

  return (
    <section ref={sectionRef} className="relative py-24 px-4 flex flex-col md:flex-row items-center justify-center overflow-hidden z-10 max-w-6xl mx-auto gap-12">
      
      {/* Mentor Image & Aura */}
      <div className="relative w-full md:w-1/2 flex items-center justify-center min-h-[500px]">
        {/* Parallax glow */}
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-tr from-yellow-400 to-yellow-600 rounded-full mix-blend-screen filter blur-[80px] opacity-40"
          style={{ y: bgY }}
        />
        
        {/* Animated SVG Aura Rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80">
          <MentorAuraSVG />
        </div>

        {/* Isolated Mentor Image */}
        <AntiGravityWrapper yOffset={15} duration={7}>
          <motion.div 
            className="relative z-10 w-64 h-80 rounded-b-full bg-gradient-to-b from-white/10 to-transparent border-t border-x border-white/20 flex flex-col items-center justify-end overflow-hidden shadow-[0_0_50px_rgba(255,215,0,0.1)]"
            style={{ scale: imageScale }}
          >
            <img 
              src="/mentor.png" 
              alt="Mentor Gowrishankar" 
              className="absolute inset-0 w-full h-full object-cover object-top opacity-90 mix-blend-screen mix-blend-lighten"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-space-900)] via-transparent to-transparent opacity-80"></div>
          </motion.div>
        </AntiGravityWrapper>

        {/* Floating Icons */}
        <div className="absolute top-[20%] left-[15%]">
          <AntiGravityWrapper yOffset={10} duration={5} delay={1}>
            <GlassCard className="p-3 rounded-2xl border-green-500/30">
              <Sprout className="w-6 h-6 text-green-400" />
            </GlassCard>
          </AntiGravityWrapper>
        </div>

        <div className="absolute top-[30%] right-[15%]">
          <AntiGravityWrapper yOffset={12} duration={6} delay={0.5}>
            <GlassCard className="p-3 rounded-2xl border-yellow-500/30">
              <Landmark className="w-6 h-6 text-yellow-400" />
            </GlassCard>
          </AntiGravityWrapper>
        </div>

        <div className="absolute bottom-[20%] left-[20%]">
          <AntiGravityWrapper yOffset={8} duration={4} delay={2}>
            <GlassCard className="p-3 rounded-2xl border-red-500/30">
              <Heart className="w-6 h-6 text-red-400" />
            </GlassCard>
          </AntiGravityWrapper>
        </div>
      </div>

      {/* Mentor Bio */}
      <div className="w-full md:w-1/2 flex flex-col items-start text-left">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Meet <span className="text-gradient-gold">Gowrishankar</span>
          </h2>
          
          <GlassCard className="p-8 mt-8 border-l-4 border-l-yellow-500 bg-white/5">
            <p className="text-gray-300 text-lg mb-4 leading-relaxed">
              Master of Quantum Physics & Ancient Wisdom. For over a decade, Gowrishankar has helped thousands rewire their neural pathways to effortlessly attract wealth and health.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              No wishful thinking. Just pure bio-frequency alignment. Join him to crack the exact scientific code.
            </p>
          </GlassCard>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-8">
            {[
              { value: "10+", label: "Years" },
              { value: "5K+", label: "Trained" },
              { value: "97%", label: "Success" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                <GlassCard className="p-4 text-center">
                  <p className="text-2xl font-extrabold text-gradient-gold">{stat.value}</p>
                  <p className="text-xs text-gray-500 mt-1 uppercase tracking-widest">{stat.label}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

    </section>
  );
}
