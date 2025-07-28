import { Button } from "./ui/button";
import { ArrowRight, Users } from "lucide-react";
import Arma from "../imports/Arma";

export function HeroSection() {
  const handleJoinDiscord = () => {
    window.open("https://discord.gg/VhU5WEMRgZ", "_blank");
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-16 lg:pt-20 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-midnight-carbon" />

      {/* Mobile-only gradient overlay for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-dexter-ultra-dark/40 via-transparent to-dexter-ultra-dark/60 sm:hidden pointer-events-none" />

      {/* Arma Background - Mobile opacity increased to 20% (+5%), desktop unchanged */}
      <div className="absolute inset-0 flex items-center justify-end pointer-events-none">
        <div className="w-full h-full max-w-4xl max-h-4xl opacity-20 sm:opacity-60 translate-x-1/4">
          <Arma />
        </div>
      </div>

      <div className="container-dexter relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-4rem)] lg:min-h-[calc(100vh-5rem)] py-12 lg:py-20">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 animate-fade-in-up">
            <div className="space-y-4 sm:space-y-6">
              {/* Headline - Mobile smaller, centered; desktop larger, left-aligned */}
              <h1
                className="text-[2.75rem] leading-tight sm:text-display font-display text-foreground text-center sm:text-left"
                style={{
                  textShadow: "0 2px 4px rgba(0,0,0,0.3)",
                }}
              >
                <span className="whitespace-nowrap">
                  Agents for
                </span>
                <br />
                <span style={{ color: "#BDED63" }}>
                  on-chain yield
                  <span className="animate-blink-dot">.</span>
                </span>
              </h1>

              {/* Subhead - Mobile smaller, centered; desktop unchanged */}
              <div
                className="text-lg sm:text-subhead text-muted-foreground max-w-lg leading-relaxed text-center sm:text-left mx-auto sm:mx-0"
                style={{
                  textShadow: "0 1px 2px rgba(0,0,0,0.4)",
                }}
              >
                {/* Mobile version - 3 separate lines */}
                <div className="sm:hidden space-y-1">
                  <p>
                    <span className="text-white">
                      Autonomous yield routing that finds the
                      best opportunities and executes.
                    </span>
                  </p>
                  <p>
                    <span className="text-white">
                      Risk-aware and non-custodial.
                    </span>
                  </p>
                </div>
                {/* Desktop version - original layout */}
                <p className="hidden sm:block">
                  Autonomous yield routing that finds the best
                  opportunities and executes.
                  <br />
                  Risk-aware and non-custodial.
                </p>
              </div>
            </div>

            {/* CTAs - Horizontal layout, responsive sizing */}
            <div className="flex flex-row gap-3 sm:gap-4">
              <Button
                onClick={handleJoinDiscord}
                className="flex-1 sm:flex-none sm:w-auto bg-dexter-primary hover:bg-dexter-primary/90 border-0 hover-lift pulse-ring min-h-[48px] rounded-lg text-button cursor-pointer"
                style={{ color: "#000000" }}
              >
                <Users className="w-4 h-4 mr-2" />
                Join Discord
              </Button>
              <Button
                variant="outline"
                className="flex-1 sm:flex-none sm:w-auto bg-transparent border-[1.5px] border-dexter-primary text-white hover:bg-transparent dark:hover:bg-transparent hover-lift min-h-[48px] rounded-lg text-button cursor-pointer transition-all duration-200 hover:shadow-[0_0_0_1px_#bded63,0_0_10px_rgba(189,237,99,0.2)] dark:bg-transparent dark:border-dexter-primary dark:text-white"
                style={{
                  backgroundColor: "transparent !important",
                  borderColor: "#bded63 !important",
                  color: "#ffffff !important",
                }}
                asChild
              >
                <a
                  href="#how-it-works"
                  style={{
                    backgroundColor: "transparent !important",
                    color: "#ffffff !important",
                  }}
                >
                  How it Works
                </a>
              </Button>
            </div>

            {/* Key Features - Mobile vertical stack, desktop unchanged */}
            <div className="pt-6 sm:pt-8 border-t border-border">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                <div className="space-y-2 flex flex-col text-center sm:text-left py-3 sm:py-0">
                  <div className="text-[14px] font-semibold">
                    <span style={{ color: "#BDED63" }}>
                      24/7 ACTIVE
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <span className="sm:hidden text-white">
                      Highest yield, every time
                    </span>
                    <span className="hidden sm:block">
                      Highest yield,
                      <br />
                      every time
                    </span>
                  </p>
                </div>
                <div className="space-y-2 flex flex-col text-center sm:text-left py-3 sm:py-0">
                  <div className="text-[14px] font-semibold">
                    <span style={{ color: "#BDED63" }}>
                      AUTO-REALLOCATION
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <span className="sm:hidden text-white">
                      Moves capital as markets shift
                    </span>
                    <span className="hidden sm:block">
                      Moves capital as
                      <br />
                      markets shift
                    </span>
                  </p>
                </div>
                <div className="space-y-2 flex flex-col text-center sm:text-left py-3 sm:py-0">
                  <div className="text-[14px] font-semibold">
                    <span style={{ color: "#BDED63" }}>
                      SELF-CUSTODIAL
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <span className="sm:hidden text-white">
                      Agent executes on your wallet
                    </span>
                    <span className="hidden sm:block">
                      Agent executes on
                      <br />
                      your wallet
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Empty for background visual */}
          <div className="relative flex items-center justify-center lg:justify-end">
            {/* Optional accent elements can go here */}
            <div className="w-full max-w-lg h-0 sm:h-[400px] lg:h-[600px] relative"></div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center pb-8">
          <div className="w-6 h-10 border border-border rounded-full flex justify-center">
            <div className="w-1 h-3 bg-dexter-primary rounded-full animate-gentle-pulse mt-2" />
          </div>
        </div>
      </div>
    </section>
  );
}