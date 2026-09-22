import { BenefitsSection } from "./components/sections/BenefitsSection";
import { CheckClickCount } from "./components/sections/CheckClickCount";
import { Footer } from "./components/layout/Footer";
import { HeroSection } from "./components/sections/HeroSection";
import { HowItWorks } from "./components/sections/HowItWorks";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <HeroSection />
      <CheckClickCount />
      <HowItWorks />
      <BenefitsSection />
      <Footer />
    </main>
  );
}
