"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative py-24 px-4 flex flex-col items-center justify-center overflow-hidden z-10 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Factual & <span className="text-gradient-gold">Frictionless</span>
        </h2>
        <p className="text-gray-400 text-lg">
          Clear answers to logical questions. No fluff.
        </p>
      </motion.div>

      <div className="w-full flex flex-col gap-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <GlassCard className="transition-all duration-300">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left p-6 flex items-center justify-between focus:outline-none"
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
