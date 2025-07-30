import { Button } from "./ui/button";
import { useState } from "react";

export function HeroSection() {
  const [isHovered, setIsHovered] = useState(false);

  const handleJoinDiscord = () => {
    window.open("https://discord.gg/UtFT9qV2", "_blank");
  };

  // Image positioning and scaling configuration
  const imageConfig = {
    desktop: {
      translateX: 12, // percentage
      translateY: 15, // percentage
      scale: 1.12, // scaling factor
      opacity: 0.9
    },
    mobile: {
      translateX: 0, // center horizontally
      translateY: 18, // center vertically
      scale: 1.0, // maintain original size
      opacity: 0.3 // slightly more transparent for better text readability
    }
  };

  const desktopScale = isHovered ? imageConfig.desktop.scale * 1.03 : imageConfig.desktop.scale;

  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-20 lg:pt-0"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-midnight-carbon" />

      {/* Dexter Pixel Background - Responsive positioning */}
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
            maskImage: "radial-gradient(circle at center, white 20%, transparent 70%)",
            WebkitMaskImage: "radial-gradient(circle at center, white 20%, transparent 70%)",
          }}
        />
        {/* Desktop Image */}
        <div 
          className="hidden lg:block w-full h-full max-w-5xl bg-center bg-cover bg-no-repeat pointer-events-auto"
          style={{
            backgroundImage: `url(/Dexter_pixel.png)`,
            backgroundPosition: "center right",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            opacity: imageConfig.desktop.opacity,
            transform: `translateX(${imageConfig.desktop.translateX}%) translateY(${imageConfig.desktop.translateY}%) scale(${desktopScale})`,
            maskImage: "radial-gradient(ellipse at center, white 20%, transparent 70%)",
            WebkitMaskImage: "radial-gradient(ellipse at center, white 20%, transparent 70%)",
            transition: "transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
      </div>

      {/* Gradient overlay - adjusted for mobile */}
      <div className="absolute inset-0 bg-gradient-to-b from-midnight-carbon/70 via-transparent to-midnight-carbon/70 lg:bg-gradient-to-r lg:from-midnight-carbon/90 lg:via-midnight-carbon/40 lg:to-transparent pointer-events-none" />

      <div className="container-dexter relative z-10 flex items-center min-h-screen">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8 animate-fade-in-up">
            <div className="space-y-6 lg:space-y-6">
              {/* Headline - Mobile optimized */}
              <h1
                className="text-[2.75rem] leading-[1.1] lg:text-display font-display text-foreground text-center lg:text-left px-4 lg:px-0"
                style={{
                  textShadow: "0 2px 8px rgba(0,0,0,0.8)",
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

              {/* Subhead - Mobile optimized */}
              <div
                className="text-lg lg:text-xl text-white lg:text-dexter-grey max-w-lg leading-relaxed text-center lg:text-left mx-auto lg:mx-0 px-4 lg:px-0"
                style={{
                  textShadow: "0 2px 6px rgba(0,0,0,0.8)",
                }}
              >
                <p>
                  A personalized DeFi agent for the highest
                  <br />
                  risk-adjusted yield.
                </p>
              </div>
            </div>

            {/* CTAs - Mobile optimized */}
            <div className="flex flex-col sm:flex-row gap-4 px-4 lg:px-0">
              <Button
                variant="default"
                className="w-full sm:flex-1 lg:flex-none lg:w-auto bg-dexter-primary text-black hover:bg-dexter-primary/90 hover-lift min-h-[52px] lg:min-h-[48px] rounded-lg text-button font-medium transition-all duration-200"
                onClick={handleJoinDiscord}
              >
                <img
                  src="/discord_icon_transparent.png"
                  alt="Discord"
                  className="w-5 h-5 filter-black"
                  style={{ marginRight: "6px" }}
                />
                <span className="text-black">Join Discord</span>
              </Button>
            </div>

            {/* Key Features - Mobile optimized */}
            <div className="pt-6 lg:pt-8 border-t border-border mx-4 lg:mx-0">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-6">
                <div className="space-y-2 flex flex-col text-center lg:text-left">
                  <div className="text-sm font-bold tracking-wide">
                    <span style={{ color: "#BDED63" }}>
                      24/7 ACTIVE
                    </span>
                  </div>
                  <p className="text-base lg:text-sm text-white lg:text-dexter-grey leading-relaxed">
                    Highest yield, guaranteed
                  </p>
                </div>
                <div className="space-y-2 flex flex-col text-center lg:text-left">
                  <div className="text-sm font-bold tracking-wide">
                    <span style={{ color: "#BDED63" }}>
                      AUTO-REALLOCATION
                    </span>
                  </div>
                  <p className="text-base lg:text-sm text-white lg:text-dexter-grey leading-relaxed">
                    Moves capital as markets shift
                  </p>
                </div>
                <div className="space-y-2 flex flex-col text-center lg:text-left">
                  <div className="text-sm font-bold tracking-wide">
                    <span style={{ color: "#BDED63" }}>
                      SELF-CUSTODIAL
                    </span>
                  </div>
                  <p className="text-base lg:text-sm text-white lg:text-dexter-grey leading-relaxed">
                    Agent executes on smart accounts
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
      </div>
    </section>
  );
}