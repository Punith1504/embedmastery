"use client";

import { motion } from "framer-motion";
import { AntiGravityWrapper } from "../animations/AntiGravityWrapper";
import { MagneticButton } from "../ui/MagneticButton";
import { GlassCard } from "../ui/GlassCard";
import { Timer, Users } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20 pb-16 overflow-hidden">
      {/* Background Glowing Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[20%] left-[20%] w-96 h-96 bg-[var(--color-neon-violet)] rounded-full mix-blend-screen filter blur-[100px] opacity-20 orb-1"></div>
        <div className="absolute bottom-[20%] right-[20%] w-96 h-96 bg-[var(--color-neon-cyan)] rounded-full mix-blend-screen filter blur-[100px] opacity-20 orb-2"></div>
        <div className="absolute top-[40%] left-[50%] w-80 h-80 bg-[var(--color-neon-gold)] rounded-full mix-blend-screen filter blur-[120px] opacity-10 orb-1" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center">
        
        {/* Urgency Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 flex items-center gap-4"
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

        {/* Video Placeholder Card with Anti-Gravity */}
        <div className="w-full max-w-4xl mb-12">
          <AntiGravityWrapper yOffset={10} duration={8}>
            <GlassCard className="aspect-video flex items-center justify-center p-2 relative overflow-hidden group">
              <img 
                src="/hero_art.png" 
                alt="Manifestation Liquid Glass Art" 
                className="w-full h-full object-cover rounded-xl opacity-90 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-space-900)] to-transparent opacity-60"></div>
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

      </div>
    </section>
  );
}
