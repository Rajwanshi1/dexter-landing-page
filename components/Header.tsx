import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import Vector from "../imports/Vector";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const handleJoinX = () => {
    window.open("https://x.com/DexterAgents", "_blank");
  };

  const handleJoinDiscord = () => {
    window.open("https://discord.gg/uKNSKVUaee", "_blank");
  };

  const handleTryBeta = () => {
    window.open("https://app.dexterai.xyz/", "_blank");
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-dexter border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container-dexter">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="w-[24px] h-[24px] sm:w-[26px] sm:h-[26px] lg:w-[30px] lg:h-[30px] flex-shrink-0">
              <Vector />
            </div>
            <div className="text-[17px] sm:text-[19px] font-semibold tracking-wide font-display relative top-[2px]">
              <span className="text-foreground">DEXTER</span>
            </div>
          </div>

          {/* CTA Button — Desktop */}
          <div className="hidden lg:flex items-center gap-2">
            <Button
              variant="default"
              onClick={handleTryBeta}
              className="bg-dexter-primary text-black hover:bg-dexter-primary/90 rounded-lg px-4 py-2 text-sm font-medium"
            >
              Try BETA
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleJoinX}
              className="bg-dexter-graphite/50 hover:bg-dexter-graphite text-muted-foreground hover:text-foreground rounded-full"
            >
              <img src="/x.png" alt="X" className="h-[20px] w-[20px]" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleJoinDiscord}
              className="bg-dexter-graphite/50 hover:bg-dexter-graphite text-muted-foreground hover:text-foreground rounded-full"
            >
              <img src="/discord_icon_transparent.png" alt="Discord" className="h-[24px] w-[24px]" />
            </Button>
          </div>

          {/* Mobile: CTA + Menu */}
          <div className="flex items-center gap-2 lg:hidden">
            <Button
              variant="default"
              onClick={handleTryBeta}
              className="bg-dexter-primary text-black hover:bg-dexter-primary/90 rounded-lg px-3 py-1.5 text-xs font-medium"
            >
              Try BETA
            </Button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-muted-foreground hover:text-foreground smooth-transition min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-dexter">
            <div className="py-5 px-2">
              <div className="flex items-center justify-center gap-3">
                <Button
                  variant="ghost"
                  onClick={handleJoinX}
                  className="bg-dexter-graphite/50 hover:bg-dexter-graphite text-muted-foreground hover:text-foreground rounded-full flex items-center gap-2 px-4 min-h-[44px]"
                >
                  <img src="/x.png" alt="X" className="h-5 w-5" />
                  <span className="text-sm">X</span>
                </Button>
                <Button
                  variant="ghost"
                  onClick={handleJoinDiscord}
                  className="bg-dexter-graphite/50 hover:bg-dexter-graphite text-muted-foreground hover:text-foreground rounded-full flex items-center gap-2 px-4 min-h-[44px]"
                >
                  <img src="/discord_icon_transparent.png" alt="Discord" className="h-5 w-5" />
                  <span className="text-sm">Discord</span>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
