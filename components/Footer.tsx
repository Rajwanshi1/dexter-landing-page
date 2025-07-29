import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import Vector from "../imports/Vector";
import { Button } from "./ui/button";

export function Footer() {
  const handleJoinX = () => {
    window.open("https://x.com/dexterOnSui", "_blank");
  };

  const handleJoinDiscord = () => {
    window.open("https://discord.gg/UtFT9qV2", "_blank");
  };

  return (
    <footer className="border-t border-border">
      <div className="container-dexter">
        <div className="py-6 lg:py-6">
          {/* Simple Footer Layout */}
          <div className="flex flex-col items-center space-y-8 lg:flex-row lg:justify-between lg:items-center lg:space-y-0">
            
            {/* Left: Logo & Brand */}
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 flex-shrink-0">
                <Vector />
              </div>
              <div className="text-button font-display">
                <span className="text-foreground">DEXTER</span>
              </div>
            </div>
            
            {/* Center: Community */}
            <div className="flex flex-col items-center space-y-4 lg:space-y-0">
              <div className="flex items-center gap-6">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button
                        onClick={handleJoinX}
                        className="group flex items-center gap-2 text-muted-foreground hover:text-dexter-primary smooth-transition"
                      >
                        <img src="/x.png" alt="X" className="w-[14px] h-[14px]" />
                        <span className="text-sm">Follow us on X</span>
                      </button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="text-sm">Follow @dexterOnSui</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button
                        onClick={handleJoinDiscord}
                        className="group flex items-center gap-2 text-muted-foreground hover:text-dexter-primary smooth-transition"
                      >
                        <img src="/discord_icon_transparent.png" alt="Discord" className="w-4 h-4" />
                        <span className="text-sm">Join Discord</span>
                      </button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="text-sm">Join our Discord</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
            
            {/* Right: Copyright */}
            <div className="text-center lg:text-right">
              <p className="text-sm text-muted-foreground">
                © 2025 Dexter. Built for autonomous yield optimization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}