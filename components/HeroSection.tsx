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

  const imageConfig = {
    desktop: {
      translateX: 12,
      translateY: 15,
      scale: 1.12,
      opacity: 0.9,
    },
    mobile: {
      translateX: 0,
      translateY: 18,
      scale: 1.0,
      opacity: 0.3,
    },
  };

  const desktopScale = isHovered
    ? imageConfig.desktop.scale * 1.03
    : imageConfig.desktop.scale;

  const featurePills = [
    {
      label: "AI-NATIVE INTELLIGENCE",
      description: "Ingests full Sui DeFi state. Reasons like a trading desk.",
    },
    {
      label: "PROMPT-TO-STRATEGY",
      description: "Describe it in plain English. Dexter builds & simulates it.",
    },
    {
      label: "NON-CUSTODIAL AUTONOMY",
      description: "No vaults. No custody. Type-safe guardrails you control.",
    },
  ];

  return (
    <section id="hero" className="relative overflow-hidden pt-16 lg:pt-0">
      {/* Background */}
      <div className="absolute inset-0 bg-midnight-carbon" />

      {/* Floating gradient orbs behind mascot */}
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

      {/* Dexter Pixel Background */}
      <div className="absolute inset-0 flex items-center justify-center lg:justify-end">
        {/* Mobile Image */}
        <div
          className="block lg:hidden w-full h-full bg-center bg-no-repeat pointer-events-none"
          style={{
            backgroundImage: `url(/Dexter_pixel.png)`,
            backgroundPosition: "center center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            opacity: imageConfig.mobile.opacity,
            transform: `translateX(${imageConfig.mobile.translateX}%) translateY(${imageConfig.mobile.translateY}%) scale(${imageConfig.mobile.scale})`,
            maskImage:
              "radial-gradient(circle at center, white 20%, transparent 70%)",
            WebkitMaskImage:
              "radial-gradient(circle at center, white 20%, transparent 70%)",
          }}
        />
        {/* Desktop Image with parallax */}
        <motion.div
          className="hidden lg:block w-full h-full max-w-5xl bg-center bg-cover bg-no-repeat pointer-events-auto"
          style={{
            backgroundImage: `url(/Dexter_pixel.png)`,
            backgroundPosition: "center right",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            opacity: imageConfig.desktop.opacity,
            y: mascotY,
            transform: `translateX(${imageConfig.desktop.translateX}%) translateY(${imageConfig.desktop.translateY}%) scale(${desktopScale})`,
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

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-midnight-carbon/70 via-transparent to-midnight-carbon/70 lg:bg-gradient-to-r lg:from-midnight-carbon/90 lg:via-midnight-carbon/40 lg:to-transparent pointer-events-none" />

      <div
        className="container-dexter relative z-10 flex items-center"
        style={{ minHeight: "calc(100vh - 25px)" }}
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8">
            <div className="space-y-6 lg:space-y-6">
              {/* Headline with staggered word animation */}
              <h1
                className="text-[2.75rem] leading-[1.1] lg:text-display font-display text-foreground text-center lg:text-left px-4 lg:px-0"
                style={{ textShadow: "0 2px 8px rgba(0,0,0,0.8)" }}
              >
                {["Your", "on-chain", "AI"].map((word, i) => (
                  <motion.span
                    key={word}
                    className="inline-block mr-3"
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
              <motion.div
                className="text-lg lg:text-xl text-white lg:text-dexter-grey max-w-lg leading-relaxed text-center lg:text-left mx-auto lg:mx-0 px-4 lg:px-0"
                style={{ textShadow: "0 2px 6px rgba(0,0,0,0.8)" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <p>
                  AI that watches every protocol, builds strategies you can't,
                  and moves your capital before you'd even notice.
                </p>
              </motion.div>
            </div>

            {/* CTA */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 px-4 lg:px-0"
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
                className="w-full sm:flex-1 lg:flex-none lg:w-auto bg-dexter-primary text-black hover:bg-dexter-primary/90 hover-lift min-h-[52px] lg:min-h-[48px] rounded-full text-button font-medium transition-all duration-200 px-8"
                onClick={handleTryBeta}
              >
                <span className="text-black font-semibold tracking-wide">LIVE BETA</span>
              </Button>
            </motion.div>

            {/* Feature Pills */}
            <div className="pt-4 lg:pt-6 border-t border-border mx-4 lg:mx-0">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-6">
                {featurePills.map((pill, i) => (
                  <motion.div
                    key={pill.label}
                    className="space-y-2 flex flex-col text-center lg:text-left"
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
                    <p className="text-base lg:text-sm text-white lg:text-dexter-grey leading-relaxed">
                      {pill.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Empty for background visual */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="w-full max-w-lg h-0 sm:h-[400px] lg:h-[600px] relative"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
