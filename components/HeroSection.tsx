import { Button } from "./ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import { XIcon } from "./XIcon";

export function HeroSection() {
  const handleJoinX = () => {
    window.open("https://x.com/dexterOnSui", "_blank");
  };

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
      opacity: 0.15 // slightly more transparent for better text readability
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[80vh] pt-16 lg:pt-20 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-midnight-carbon" />

      {/* Dexter Pixel Background - Responsive positioning */}
      <div className="absolute inset-0 flex items-center justify-center lg:justify-end pointer-events-none">
        {/* Mobile Image */}
        <div 
          className="block lg:hidden w-full h-full bg-center bg-no-repeat"
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
          className="hidden lg:block w-full h-full max-w-5xl bg-center bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(/Dexter_pixel.png)`,
            backgroundPosition: "center right",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            opacity: imageConfig.desktop.opacity,
            transform: `translateX(${imageConfig.desktop.translateX}%) translateY(${imageConfig.desktop.translateY}%) scale(${imageConfig.desktop.scale})`,
            maskImage: "radial-gradient(ellipse at center, white 20%, transparent 70%)",
            WebkitMaskImage: "radial-gradient(ellipse at center, white 20%, transparent 70%)",
          }}
        />
      </div>

      {/* Gradient overlay - adjusted for mobile */}
      <div className="absolute inset-0 bg-gradient-to-b from-midnight-carbon/70 via-transparent to-midnight-carbon/70 lg:bg-gradient-to-r lg:from-midnight-carbon/90 lg:via-midnight-carbon/40 lg:to-transparent" />

      <div className="container-dexter relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(80vh-4rem)] lg:min-h-[calc(80vh-5rem)] py-12 lg:py-20">
          {/* Left Content */}
          <div className="space-y-8 lg:space-y-8 animate-fade-in-up">
            <div className="space-y-6 lg:space-y-6">
              {/* Headline - Mobile optimized */}
              <h1
                className="text-[3rem] leading-[1.1] lg:text-display font-display text-foreground text-center lg:text-left px-4 lg:px-0"
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
                className="lg:text-xl text-white lg:text-dexter-grey max-w-lg leading-relaxed text-center lg:text-left mx-auto lg:mx-0 px-4 lg:px-0"
                style={{
                  fontSize: "20px",
                  textShadow: "0 2px 6px rgba(0,0,0,0.8)",
                }}
              >
                <p>
                  Yield optimized 24/7 
                  <br />
                  1-click, non-custodial execution
                  <br />
                  Policy-driven, capital-efficient
                  <br />
                  <br />
                  <br />
                </p>
              </div>
            </div>

            {/* CTAs - Mobile optimized */}
            <div className="flex flex-col sm:flex-row gap-4 px-4 lg:px-0">
              <Button
                variant="outline"
                className="w-full sm:flex-1 lg:flex-none lg:w-auto bg-transparent border-[1.5px] border-dexter-primary text-white hover:bg-transparent dark:hover:bg-transparent hover-lift min-h-[52px] lg:min-h-[48px] rounded-lg text-button cursor-pointer transition-all duration-200 hover:shadow-[0_0_0_1px_#bded63,0_0_10px_rgba(189,237,99,0.2)] dark:bg-transparent dark:border-dexter-primary dark:text-white font-medium"
                asChild
              >
                <a
                  href="#how-it-works"
                >
                  How it Works
                </a>
              </Button>
            </div>

            {/* Key Features - Mobile optimized */}
            <div className="pt-8 border-t border-border mx-4 lg:mx-0">
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