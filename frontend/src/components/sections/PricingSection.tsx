"use client";

import { motion } from "framer-motion";
import { GlassCard } from "../ui/GlassCard";
import { MagneticButton } from "../ui/MagneticButton";
import { handlePayment } from "../../lib/payment";
import { Check, Gift } from "lucide-react";

export function PricingSection() {
  return (
    <section id="pricing" className="relative py-24 px-4 flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-neon-gold)] rounded-full mix-blend-screen filter blur-[200px] opacity-10"></div>
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Transform Your Reality Today
          </h2>
          <p className="text-gray-400 text-lg">
            Join the 2-Day Masterclass and get exclusive bonuses worth <span className="text-gradient-gold font-bold">₹4,999</span> for FREE.
          </p>
        </motion.div>

        {/* 3D Tilt Wrapper could be applied here if using a 3D library, but we use framer motion for hover tilt */}
        <motion.div 
          whileHover={{ rotateX: 2, rotateY: -2, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="w-full max-w-lg perspective-1000"
        >
          <GlassCard className="p-8 md:p-12 border-t-2 border-t-yellow-500/50 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <div className="flex flex-col items-center text-center">
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
              <p className="text-xs text-gray-500 mt-4">100% secure payment powered by Razorpay.</p>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
