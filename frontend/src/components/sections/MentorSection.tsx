"use client";

import { motion } from "framer-motion";
import { AntiGravityWrapper } from "../animations/AntiGravityWrapper";
import { GlassCard } from "../ui/GlassCard";
import { Heart, Landmark, Sprout } from "lucide-react";

export function MentorSection() {
  return (
    <section className="relative py-24 px-4 flex flex-col md:flex-row items-center justify-center overflow-hidden z-10 max-w-6xl mx-auto gap-12">
      
      {/* Mentor Image & Aura */}
      <div className="relative w-full md:w-1/2 flex items-center justify-center min-h-[500px]">
        {/* Glowing Aura */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-tr from-yellow-400 to-yellow-600 rounded-full mix-blend-screen filter blur-[80px] opacity-40"></div>
        
        {/* Isolated Mentor Image placeholder */}
        <AntiGravityWrapper yOffset={15} duration={7}>
          <div className="relative z-10 w-64 h-80 rounded-b-full bg-gradient-to-b from-white/10 to-transparent border-t border-x border-white/20 flex flex-col items-center justify-end overflow-hidden shadow-[0_0_50px_rgba(255,215,0,0.1)]">
            <div className="w-full h-full flex items-end justify-center pb-4 text-white/50 text-sm">
              [Mentor Image]
            </div>
          </div>
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
            Meet Your Mentor, <br/>
            <span className="text-gradient-gold">Gowrishankar</span>
          </h2>
          
          <GlassCard className="p-8 mt-8 border-l-4 border-l-yellow-500 bg-white/5">
            <p className="text-gray-300 text-lg mb-4 leading-relaxed">
              For over a decade, Gowrishankar has studied the intersection of quantum physics, ancient wisdom, and modern neuroscience. He has helped thousands reprogram their subconscious minds to attract wealth, health, and profound peace.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              This isn't about wishing on a star. It's about aligning your bio-frequency to match the reality you desire. Join him for two days, and learn the exact formula.
            </p>
          </GlassCard>
        </motion.div>
      </div>

    </section>
  );
}
