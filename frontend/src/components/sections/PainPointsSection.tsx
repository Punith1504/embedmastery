"use client";

import { motion } from "framer-motion";
import { GlassCard } from "../ui/GlassCard";
import { AntiGravityWrapper } from "../animations/AntiGravityWrapper";

const painPoints = [
  {
    id: 1,
    problem: "Income Plateau",
    description: "Working harder but your bank balance stays exactly the same?",
    solution: "Quantum Wealth Attunement",
    delay: 0,
  },
  {
    id: 2,
    problem: "Invisible Barriers",
    description: "Constantly hitting a wall right before major breakthroughs?",
    solution: "Subconscious Unblocking",
    delay: 0.2,
  },
  {
    id: 3,
    problem: "Chronic Burnout",
    description: "Running on empty, trapped in survival mode anxiety?",
    solution: "Alpha State Mastery",
    delay: 0.4,
  },
];

export function PainPointsSection() {
  return (
    <section className="relative py-24 px-4 flex flex-col items-center justify-center overflow-hidden z-10">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[30%] right-[10%] w-[500px] h-[500px] bg-[var(--color-neon-violet)] rounded-full mix-blend-screen filter blur-[150px] opacity-10"></div>
      </div>

      <div className="w-full max-w-6xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Stuck in the Matrix?
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Hover the cards to reveal the neurological paradigm shift.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full perspective-1000">
          {painPoints.map((point) => (
            <AntiGravityWrapper key={point.id} delay={point.delay} duration={5} yOffset={8}>
              <div className="relative group w-full h-80 [perspective:1000px]">
                <motion.div 
                  className="w-full h-full relative transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"
                >
                  {/* Front: Problem */}
                  <div className="absolute inset-0 backface-hidden">
                    <GlassCard className="h-full p-8 flex flex-col items-center justify-center text-center border-t-red-500/30">
                      <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mb-6">
                        <span className="text-3xl">⚠️</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">{point.problem}</h3>
                      <p className="text-gray-400">{point.description}</p>
                    </GlassCard>
                  </div>

                  {/* Back: Solution */}
                  <div className="absolute inset-0 h-full w-full backface-hidden [transform:rotateY(180deg)]">
                    <GlassCard className="h-full p-8 flex flex-col items-center justify-center text-center border-t-green-500/50 bg-[rgba(20,255,100,0.05)]">
                      <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                        <span className="text-3xl">✨</span>
                      </div>
                      <h3 className="text-2xl font-bold text-gradient-gold mb-4">The Solution</h3>
                      <p className="text-white text-lg font-semibold">{point.solution}</p>
                    </GlassCard>
                  </div>
                </motion.div>
              </div>
            </AntiGravityWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
