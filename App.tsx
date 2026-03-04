import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { StatsStrip } from "./components/StatsStrip";
import { ProblemSection } from "./components/ProblemSection";
import { SolutionSection } from "./components/SolutionSection";
import { ArchitectureSection } from "./components/ArchitectureSection";
import { FAQSection } from "./components/FAQSection";
import { FinalCTASection } from "./components/FinalCTASection";
import { Footer } from "./components/Footer";
import "./styles/effects.css";

export default function App() {
  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Header />
      <HeroSection />
      <StatsStrip />
      <div className="section-divider-glow" />
      <ProblemSection />
      <div className="section-divider-glow" />
      <SolutionSection />
      <div className="section-divider-glow" />
      <ArchitectureSection />
      <FinalCTASection />
      <div className="section-divider-glow" />
      <FAQSection />
      <Footer />
    </div>
  );
}
