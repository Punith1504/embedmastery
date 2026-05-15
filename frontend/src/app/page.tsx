import { HeroSection } from "@/components/sections/HeroSection";
import { PainPointsSection } from "@/components/sections/PainPointsSection";
import { ModulesSection } from "@/components/sections/ModulesSection";
import { MentorSection } from "@/components/sections/MentorSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { PricingSection } from "@/components/sections/PricingSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-slate-950 selection:bg-[var(--color-pastel-pink)] selection:text-slate-900 overflow-x-hidden text-slate-200">
      <HeroSection />
      <PainPointsSection />
      <ModulesSection />
      <MentorSection />
      <FAQSection />
      <PricingSection />
    </main>
  );
}
