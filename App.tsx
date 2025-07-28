import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { MetricsSection } from "./components/MetricsSection";
import { HowItWorksSection } from "./components/HowItWorksSection";
import { FinalCTASection } from "./components/FinalCTASection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Header />
      <HeroSection />
      <MetricsSection />
      <HowItWorksSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
}