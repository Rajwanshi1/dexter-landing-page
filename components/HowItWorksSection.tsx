import { BarChart3, Zap, ArrowRight } from "lucide-react";
import { ScanIcon } from "./ScanIcon";
import { ScoreIcon } from "./ScoreIcon";
import { ExecuteIcon } from "./ExecuteIcon";

export function HowItWorksSection() {
  const steps = [
    {
      title: "Scan",
      description: "Monitors lending pools, tracking APR, incentives, and volatility across protocols.",
      icon: "custom"
    },
    {
      title: "Score", 
      description: "Calculates projected net yield post-fees, surfacing only capital-efficient, high-reward paths.",
      icon: "score"
    },
    {
      title: "Execute",
      description: "Atomically moves funds between strategies via smart account, fully non-custodial.",
      icon: "execute"
    }
  ];

  return (
    <section id="how-it-works" className="section-padding" style={{ backgroundColor: '#bded63' }}>
      <div className="container-dexter">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-black/15 border border-black/20 rounded-full mb-6 lg:mb-8">
            <Zap className="w-3 h-3 text-black" />
            <span className="text-[10px] sm:text-[16px] text-black font-mono font-medium uppercase tracking-wide">How It Works</span>
          </div>
          
          <h2 className="text-[26px] sm:text-headline font-display mb-6 lg:mb-8" style={{ color: '#000000' }}>
            Three steps to autonomous yield
          </h2>
        </div>

        {/* Steps Layout */}
        <div className="relative max-w-6xl mx-auto">
          {/* Desktop: 3-column grid with dividers */}
          <div className="hidden lg:grid lg:grid-cols-3 lg:gap-16 xl:gap-20">
            {steps.map((step, index) => (
              <div key={step.title} className="relative text-center">
                {/* Vertical divider (except for last item) */}
                {index < steps.length - 1 && (
                  <div 
                    className="absolute right-0 top-0 w-px bg-black/30 h-full transform translate-x-8 xl:translate-x-10"
                    style={{ height: '100%' }}
                  />
                )}
                
                {/* Icon + Title Row - Side by Side with Perfect Alignment */}
                <div className="flex items-center justify-center mb-6" style={{ gap: '14px' }}>
                  {/* Icon Container - Fixed 48px dimensions for perfect consistency */}
                  <div 
                    className="flex-shrink-0 flex items-center justify-center" 
                    style={{ 
                      width: '48px', 
                      height: '48px',
                      minWidth: '48px',
                      minHeight: '48px'
                    }}
                  >
                    {step.icon === "custom" ? (
                      <ScanIcon size={48} />
                    ) : step.icon === "score" ? (
                      <ScoreIcon size={48} />
                    ) : step.icon === "execute" ? (
                      <ExecuteIcon size={48} />
                    ) : null}
                  </div>
                  
                  {/* Title - Perfectly aligned to icon baseline */}
                  <h3 
                    className="font-semibold flex items-center" 
                    style={{ 
                      fontSize: '26px', 
                      lineHeight: '1.3',
                      color: '#000000',
                      fontWeight: '600',
                      height: '48px', // Match icon height for perfect alignment
                      margin: 0,
                      padding: 0
                    }}
                  >
                    {step.title}
                  </h3>
                </div>

                {/* Description - Centered with optimal spacing */}
                <div className="text-center px-2">
                  <p style={{ 
                    fontSize: '18px', 
                    lineHeight: '1.6',
                    color: '#2D2D2D',
                    fontWeight: '400',
                    margin: 0
                  }}>
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile & Tablet: Optimized responsive layout */}
          <div className="lg:hidden px-4 sm:px-6 space-y-6 sm:space-y-8">
            {steps.map((step, index) => (
              <div key={step.title} className="w-full">
                {/* Mobile Icon + Title Layout */}
                <div className="flex flex-col items-center text-center mb-3 sm:mb-4">
                  {/* Very Small Screens: Icon above title */}
                  <div className="flex flex-col items-center gap-3 sm:hidden">
                    <div 
                      className="flex items-center justify-center" 
                      style={{ 
                        width: '36px', 
                        height: '36px',
                        minWidth: '36px',
                        minHeight: '36px'
                      }}
                    >
                      {step.icon === "custom" ? (
                        <ScanIcon size={36} />
                      ) : step.icon === "score" ? (
                        <ScoreIcon size={36} />
                      ) : step.icon === "execute" ? (
                        <ExecuteIcon size={36} />
                      ) : null}
                    </div>
                    
                    <h3 
                      className="font-semibold" 
                      style={{ 
                        fontSize: '22px', 
                        lineHeight: '1.3',
                        color: '#000000',
                        fontWeight: '600',
                        margin: 0
                      }}
                    >
                      {step.title}
                    </h3>
                  </div>

                  {/* Standard Mobile: Icon + title side by side, centered */}
                  <div className="hidden sm:flex items-center gap-3 justify-center">
                    <div 
                      className="flex items-center justify-center" 
                      style={{ 
                        width: '40px', 
                        height: '40px',
                        minWidth: '40px',
                        minHeight: '40px'
                      }}
                    >
                      {step.icon === "custom" ? (
                        <ScanIcon size={40} />
                      ) : step.icon === "score" ? (
                        <ScoreIcon size={40} />
                      ) : step.icon === "execute" ? (
                        <ExecuteIcon size={40} />
                      ) : null}
                    </div>
                    
                    <h3 
                      className="font-semibold flex items-center" 
                      style={{ 
                        fontSize: '24px', 
                        lineHeight: '1.3',
                        color: '#000000',
                        fontWeight: '600',
                        height: '40px',
                        margin: 0
                      }}
                    >
                      {step.title}
                    </h3>
                  </div>
                </div>

                {/* Description - Center-aligned with reduced spacing */}
                <div className="text-center max-w-sm mx-auto">
                  <p style={{ 
                    fontSize: '17px', 
                    lineHeight: '1.5',
                    color: '#2D2D2D',
                    fontWeight: '400',
                    margin: 0
                  }}>
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}