"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { GlassCard } from "../ui/GlassCard";
import { MagneticButton } from "../ui/MagneticButton";
import { handlePayment } from "../../lib/payment";
import { Check, Gift, Shield } from "lucide-react";

function PricingSVG() {
  return (
    <svg viewBox="0 0 300 300" className="absolute -top-10 -right-10 w-48 h-48 opacity-20 pointer-events-none" fill="none">
      <circle cx="150" cy="150" r="100" stroke="#FFD700" strokeWidth="0.8" opacity="0.4">
        <animate attributeName="r" values="100;110;100" dur="5s" repeatCount="indefinite"/>
      </circle>
      <path d="M150 60 L170 120 H230 L180 155 L200 220 L150 180 L100 220 L120 155 L70 120 H130 Z" stroke="#FFD700" strokeWidth="0.5" opacity="0.3">
        <animateTransform attributeName="transform" type="rotate" values="0 150 150;360 150 150" dur="40s" repeatCount="indefinite"/>
      </path>
    </svg>
  );
}

export function PricingSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgScale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1.2]);
  const cardY = useTransform(scrollYProgress, [0, 0.5], [60, 0]);

  return (
    <section ref={sectionRef} id="pricing" className="relative py-24 px-4 flex flex-col items-center justify-center overflow-hidden">
      <motion.div 
        className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-neon-gold)] rounded-full mix-blend-screen filter blur-[200px] opacity-10 pointer-events-none"
        style={{ scale: bgScale }}
      />

      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Claim Your Reality
          </h2>
          <p className="text-gray-400 text-lg">
            Unlock the Masterclass + <span className="text-gradient-gold font-bold">₹4,999 in Bonuses</span> for FREE today.
          </p>
        </motion.div>

        <motion.div 
          whileHover={{ rotateX: 2, rotateY: -2, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="w-full max-w-lg perspective-1000"
          style={{ y: cardY }}
        >
          <GlassCard className="p-8 md:p-12 border-t-2 border-t-yellow-500/50 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden">
            <PricingSVG />
            <div className="flex flex-col items-center text-center relative z-10">
              <h3 className="text-2xl font-bold text-white mb-2">Masterclass Access</h3>
              <div className="flex items-end gap-2 mb-8">
                <span className="text-5xl font-extrabold text-gradient-gold">₹99</span>
                <span className="text-gray-500 line-through text-xl mb-1">₹1,999</span>
              </div>

              <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8"></div>

              <ul className="w-full text-left space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-green-500/20 p-1 rounded-full"><Check className="w-4 h-4 text-green-400" /></div>
                  <span className="text-gray-200">2-Day Live Interactive Sessions</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-green-500/20 p-1 rounded-full"><Check className="w-4 h-4 text-green-400" /></div>
                  <span className="text-gray-200">Scientific Manifestation Blueprint</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-yellow-500/20 p-1 rounded-full"><Gift className="w-4 h-4 text-yellow-400" /></div>
                  <span className="text-gray-200">Bonus 1: Wealth Reprogramming Audio <span className="text-xs text-yellow-500 block">(Worth ₹1,999)</span></span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-yellow-500/20 p-1 rounded-full"><Gift className="w-4 h-4 text-yellow-400" /></div>
                  <span className="text-gray-200">Bonus 2: Private Community Access <span className="text-xs text-yellow-500 block">(Worth ₹3,000)</span></span>
                </li>
              </ul>

              <MagneticButton 
                className="w-full py-4 bg-white text-[var(--color-space-900)] text-lg shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
                onClick={handlePayment}
              >
                ENROLL NOW FOR ₹99
              </MagneticButton>
              <p className="text-xs text-gray-500 mt-4 flex items-center gap-1">
                <Shield className="w-3 h-3" /> 100% secure payment powered by Razorpay.
              </p>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
