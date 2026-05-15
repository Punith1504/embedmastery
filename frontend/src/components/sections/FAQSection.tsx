"use client";

import { useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { GlassCard } from "../ui/GlassCard";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Is this just 'positive thinking'?",
    answer: "No. This is neuroscience combined with quantum mechanics. We use frequency tuning to physically alter your brain's neural pathways, shifting you into the Alpha state where real manifestation occurs.",
  },
  {
    question: "How soon will I see results?",
    answer: "Participants often report immediate psychological relief after Day 1. Tangible material results (like career breakthroughs or unexpected income) typically align within 21 to 45 days of consistent practice.",
  },
  {
    question: "I have tried manifestation before and failed. Why will this work?",
    answer: "Most methods ignore the subconscious blockages. You cannot out-manifest a subconscious mind that believes you don't deserve success. We clear the foundational blocks first.",
  },
  {
    question: "Is the ₹99 fee a subscription?",
    answer: "Absolutely not. It is a one-time payment for the full 2-Day Live Masterclass plus the ₹4,999 worth of bonuses. No hidden charges.",
  },
];

function FAQVisualSVG() {
  return (
    <svg viewBox="0 0 200 200" className="w-32 h-32 mx-auto mb-8 opacity-40" fill="none">
      <circle cx="100" cy="100" r="70" stroke="url(#faqGrad)" strokeWidth="1" opacity="0.5">
        <animate attributeName="r" values="70;75;70" dur="4s" repeatCount="indefinite"/>
      </circle>
      <text x="100" y="115" textAnchor="middle" fill="url(#faqGrad)" fontSize="60" fontWeight="bold" opacity="0.6">?</text>
      <circle cx="100" cy="100" r="50" stroke="#FFD700" strokeWidth="0.5" opacity="0.3" strokeDasharray="4 6">
        <animateTransform attributeName="transform" type="rotate" values="0 100 100;360 100 100" dur="20s" repeatCount="indefinite"/>
      </circle>
      <defs>
        <linearGradient id="faqGrad" x1="0" y1="0" x2="200" y2="200">
          <stop stopColor="#FFD700"/>
          <stop offset="1" stopColor="#00FFFF"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section ref={sectionRef} className="relative py-24 px-4 flex flex-col items-center justify-center overflow-hidden z-10 max-w-4xl mx-auto">
      <motion.div className="absolute top-[30%] right-[-20%] w-[400px] h-[400px] bg-[var(--color-neon-violet)] rounded-full mix-blend-screen filter blur-[150px] opacity-10 pointer-events-none" style={{ y: bgY }} />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-4"
      >
        <FAQVisualSVG />
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Factual & <span className="text-gradient-gold">Frictionless</span>
        </h2>
        <p className="text-gray-400 text-lg">
          Clear answers to logical questions. No fluff.
        </p>
      </motion.div>

      <div className="w-full flex flex-col gap-4 mt-8">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <GlassCard className="transition-all duration-300 hover:border-yellow-500/20">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left p-6 flex items-center justify-between focus:outline-none cursor-pointer"
              >
                <span className="text-lg font-bold text-white pr-4">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-6 h-6 text-yellow-500" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 border-t border-white/10 mt-2">
                      <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
