import { Button } from "./ui/button";
import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FloatingElement } from "./motion/FloatingElement";

export function HeroSection() {
  const [isHovered, setIsHovered] = useState(false);
  const { scrollY } = useScroll();
  const mascotY = useTransform(scrollY, [0, 500], [0, 40]);

  const handleTryBeta = () => {
    window.open("https://app.dexterai.xyz/", "_blank");
  };

  const desktopScale = isHovered ? 1.12 * 1.03 : 1.12;

  const featurePills = [
    {
      label: "AI-NATIVE",
      description: "Ingests full Sui DeFi state. Reasons like a trading desk.",
    },
    {
      label: "PROMPT-TO-STRATEGY",
      description: "Describe it in plain English. Dexter builds & simulates it.",
    },
    {
      label: "NON-CUSTODIAL",
      description: "No vaults. No custody. Type-safe guardrails you control.",
    },
  ];

  return (
    <section id="hero" className="relative overflow-hidden pt-16 lg:pt-0">
      {/* Background */}
      <div className="absolute inset-0 bg-midnight-carbon" />

      {/* Floating gradient orbs behind mascot — desktop only */}
      <FloatingElement
        className="gradient-orb absolute top-1/4 right-[15%] w-[300px] h-[300px] opacity-30 hidden lg:block"
        amplitude={20}
        duration={8}
      >
        <div className="w-full h-full" />
      </FloatingElement>
      <FloatingElement
        className="gradient-orb absolute bottom-1/3 right-[25%] w-[200px] h-[200px] opacity-20 hidden lg:block"
        amplitude={15}
        duration={10}
        delay={2}
      >
        <div className="w-full h-full" />
      </FloatingElement>

      {/* ====== MOBILE: Mascot positioned at bottom, subtle ====== */}
      <div className="absolute inset-0 lg:hidden pointer-events-none">
        {/* Subtle ambient glow instead of busy mascot */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-[55%]"
          style={{
            backgroundImage: `url(/Dexter_pixel.png)`,
            backgroundPosition: "center bottom",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            opacity: 0.12,
            maskImage:
              "linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 40%, transparent 75%)",
            WebkitMaskImage:
              "linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 40%, transparent 75%)",
          }}
        />
        {/* Ambient lime glow at bottom */}
        <motion.div
          className="absolute bottom-[5%] left-1/2 -translate-x-1/2 rounded-full"
          style={{
            width: "80vw",
            height: "40vw",
            background:
              "radial-gradient(ellipse, rgba(189, 237, 99, 0.08) 0%, transparent 70%)",
            filter: "blur(50px)",
          }}
          animate={{ scale: [1, 1.08, 1], opacity: [0.6, 1, 0.6] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* ====== DESKTOP: Mascot right side with parallax ====== */}
      <div className="absolute inset-0 hidden lg:flex items-center justify-end">
        <motion.div
          className="w-full h-full max-w-5xl bg-center bg-cover bg-no-repeat pointer-events-auto"
          style={{
            backgroundImage: `url(/Dexter_pixel.png)`,
            backgroundPosition: "center right",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            opacity: 0.9,
            y: mascotY,
            transform: `translateX(12%) translateY(15%) scale(${desktopScale})`,
            maskImage:
              "radial-gradient(ellipse at center, white 20%, transparent 70%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, white 20%, transparent 70%)",
            transition:
              "transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
      </div>

      {/* Gradient overlay — stronger on mobile for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0C0C0D] via-[#0C0C0D]/80 to-[#0C0C0D]/90 lg:bg-gradient-to-r lg:from-midnight-carbon/90 lg:via-midnight-carbon/40 lg:to-transparent pointer-events-none" />

      {/* ====== Content ====== */}
      <div
        className="container-dexter relative z-10 flex items-center"
        style={{ minHeight: "calc(100vh - 25px)" }}
      >
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full">
          {/* Left Content */}
          <div className="space-y-5 lg:space-y-8">
            {/* Headline */}
            <div className="space-y-4 lg:space-y-6">
              <h1
                className="text-[2.5rem] sm:text-[2.75rem] leading-[1.1] lg:text-display font-display text-foreground text-center lg:text-left px-2 lg:px-0"
                style={{ textShadow: "0 2px 8px rgba(0,0,0,0.8)" }}
              >
                {["Your", "on-chain", "AI"].map((word, i) => (
                  <motion.span
                    key={word}
                    className="inline-block mr-2 sm:mr-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      damping: 20,
                      delay: i * 0.12,
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
                <br />
                <motion.span
                  className="inline-block"
                  style={{ color: "#BDED63" }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                    delay: 0.36,
                  }}
                >
                  portfolio manager
                  <span className="animate-blink-dot">.</span>
                </motion.span>
              </h1>

              {/* Subhead */}
              <motion.p
                className="text-[15px] sm:text-base lg:text-xl text-white/80 lg:text-dexter-grey max-w-lg leading-relaxed text-center lg:text-left mx-auto lg:mx-0 px-2 lg:px-0"
                style={{ textShadow: "0 2px 6px rgba(0,0,0,0.8)" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                AI that watches every protocol, builds strategies you can't,
                and moves your capital before you'd even notice.
              </motion.p>
            </div>

            {/* CTA */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 px-2 lg:px-0"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 150,
                damping: 15,
                delay: 0.7,
              }}
            >
              <Button
                variant="default"
                className="w-full sm:flex-1 lg:flex-none lg:w-auto bg-dexter-primary text-black hover:bg-dexter-primary/90 hover-lift min-h-[48px] lg:min-h-[48px] rounded-full text-button font-medium transition-all duration-200 px-8"
                onClick={handleTryBeta}
              >
                <span className="text-black font-semibold tracking-wide">
                  LIVE BETA
                </span>
              </Button>
            </motion.div>

            {/* Feature Pills — compact horizontal on mobile */}
            <motion.div
              className="pt-4 lg:pt-6 border-t border-white/10 lg:border-border mx-2 lg:mx-0"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              {/* Mobile: compact 3-column grid */}
              <div className="grid grid-cols-3 gap-3 lg:hidden">
                {featurePills.map((pill, i) => (
                  <motion.div
                    key={pill.label}
                    className="text-center"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      damping: 20,
                      delay: 1.0 + i * 0.1,
                    }}
                  >
                    <div
                      className="text-[10px] font-bold tracking-wider font-mono mb-1.5"
                      style={{ color: "#BDED63" }}
                    >
                      {pill.label}
                    </div>
                    <p className="text-[11px] text-white/50 leading-snug">
                      {pill.description}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Desktop: full 3-column grid */}
              <div className="hidden lg:grid grid-cols-3 gap-6">
                {featurePills.map((pill, i) => (
                  <motion.div
                    key={pill.label}
                    className="space-y-2 text-left"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      damping: 20,
                      delay: 0.8 + i * 0.15,
                    }}
                  >
                    <div className="text-sm font-bold tracking-wide">
                      <span style={{ color: "#BDED63" }}>{pill.label}</span>
                    </div>
                    <p className="text-sm text-dexter-grey leading-relaxed">
                      {pill.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Side — spacer for desktop layout */}
          <div className="relative hidden lg:flex items-center justify-end">
            <div className="w-full max-w-lg h-[600px] relative" />
          </div>
        </div>
      </div>
    </section>
  );
}
