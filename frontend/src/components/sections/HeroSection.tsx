"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { AntiGravityWrapper } from "../animations/AntiGravityWrapper";
import { MagneticButton } from "../ui/MagneticButton";
import { GlassCard } from "../ui/GlassCard";
import { Timer, Users } from "lucide-react";

function HeroSVG() {
  return (
    <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full pointer-events-none opacity-30" fill="none">
      {/* Sacred geometry background */}
      <circle cx="200" cy="200" r="150" stroke="url(#heroGrad)" strokeWidth="0.5" opacity="0.4">
        <animate attributeName="r" values="150;160;150" dur="6s" repeatCount="indefinite"/>
      </circle>
      <circle cx="200" cy="200" r="100" stroke="url(#heroGrad)" strokeWidth="0.8" opacity="0.3">
        <animate attributeName="r" values="100;108;100" dur="4s" repeatCount="indefinite"/>
      </circle>
      <polygon points="200,80 280,260 120,260" stroke="#FFD700" strokeWidth="0.5" opacity="0.15">
        <animateTransform attributeName="transform" type="rotate" values="0 200 200;360 200 200" dur="30s" repeatCount="indefinite"/>
      </polygon>
      <polygon points="200,280 280,100 120,100" stroke="#00FFFF" strokeWidth="0.5" opacity="0.15">
        <animateTransform attributeName="transform" type="rotate" values="360 200 200;0 200 200" dur="30s" repeatCount="indefinite"/>
      </polygon>
      <defs>
        <linearGradient id="heroGrad" x1="0" y1="0" x2="400" y2="400">
          <stop stopColor="#FFD700"/>
          <stop offset="1" stopColor="#00FFFF"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

export function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const orbY1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const orbY2 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20 pb-16 overflow-hidden">
      {/* Parallax Background Glowing Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div style={{ y: orbY1 }} className="absolute top-[20%] left-[20%] w-96 h-96 bg-[var(--color-neon-violet)] rounded-full mix-blend-screen filter blur-[100px] opacity-20 orb-1"></motion.div>
        <motion.div style={{ y: orbY2 }} className="absolute bottom-[20%] right-[20%] w-96 h-96 bg-[var(--color-neon-cyan)] rounded-full mix-blend-screen filter blur-[100px] opacity-20 orb-2"></motion.div>
        <motion.div style={{ y: orbY1 }} className="absolute top-[40%] left-[50%] w-80 h-80 bg-[var(--color-neon-gold)] rounded-full mix-blend-screen filter blur-[120px] opacity-10 orb-1" ></motion.div>
      </div>

      <motion.div 
        className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        
        {/* Urgency Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 flex items-center gap-4 flex-wrap justify-center"
        >
          <div className="glass-panel px-4 py-2 rounded-full flex items-center gap-2 text-sm text-red-300 border-red-500/30">
            <Timer className="w-4 h-4 animate-pulse" />
            <span>Registration Closing Soon</span>
          </div>
          <div className="glass-panel px-4 py-2 rounded-full flex items-center gap-2 text-sm text-yellow-300 border-yellow-500/30">
            <Users className="w-4 h-4" />
            <span>Only 12 Seats Left</span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6"
        >
          <span className="block text-white mb-2 leading-tight">Reprogram Your Reality</span>
          <span className="block text-gradient-gold text-3xl md:text-5xl mt-4">
            The 2-Day Scientific Manifestation Protocol
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10"
        >
          Stop hoping. Start commanding. Learn the exact neuro-frequency formula to attract wealth, health, and profound peace on autopilot.
        </motion.p>

        {/* Hero Image Card with Anti-Gravity + SVG overlay */}
        <div className="w-full max-w-4xl mb-12">
          <AntiGravityWrapper yOffset={10} duration={8}>
            <GlassCard className="aspect-video flex items-center justify-center p-2 relative overflow-hidden group">
              <img 
                src="/hero_art.png" 
                alt="Manifestation Liquid Glass Art" 
                className="w-full h-full object-cover rounded-xl opacity-90 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-space-900)] to-transparent opacity-60"></div>
              <HeroSVG />
              <div className="absolute w-20 h-20 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md border border-white/20 group-hover:scale-110 transition-transform duration-500 cursor-pointer shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent ml-2"></div>
              </div>
            </GlassCard>
          </AntiGravityWrapper>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <MagneticButton 
            className="px-10 py-5 bg-gradient-to-r from-yellow-500 to-yellow-600 text-[var(--color-space-900)] text-xl shadow-[0_0_40px_rgba(255,215,0,0.4)] hover:shadow-[0_0_60px_rgba(255,215,0,0.6)]"
            onClick={() => {
              document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span className="flex items-center gap-2">
              JOIN NOW FOR ₹99
              <motion.span 
                animate={{ scale: [1, 1.2, 1] }} 
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                🔥
              </motion.span>
            </span>
          </MagneticButton>
        </motion.div>

      </motion.div>
    </section>
  );
}
