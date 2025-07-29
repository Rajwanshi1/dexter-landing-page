import { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import Vector from "../imports/Vector";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "How it Works", href: "#how-it-works" },
    { label: "Docs", href: "https://docs.dexterai.xyz/" }
  ];

  const navLinkClass = "text-body text-muted-foreground hover:text-foreground smooth-transition relative group";
  const logoTextColorClass = "text-foreground";

  const handleJoinX = () => {
    window.open("https://x.com/dexterOnSui", "_blank");
  };

  const handleJoinDiscord = () => {
    window.open("https://discord.gg/UtFT9qV2", "_blank");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-dexter border-b border-border">
      <div className="container-dexter">
        <div className="flex items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-[26px] h-[26px] lg:w-[30px] lg:h-[30px] flex-shrink-0">
              <Vector />
            </div>
            <div className="text-[19px] font-semibold tracking-wide font-display relative top-[2px]">
              <span className={logoTextColorClass}>DEXTER</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                {...(item.href.startsWith('http') && { target: '_blank', rel: 'noopener noreferrer' })}
                className={navLinkClass}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-dexter-primary group-hover:w-full transition-all duration-300 ease-out" />
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-2 ml-auto">
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

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-muted-foreground hover:text-foreground smooth-transition ml-auto"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-dexter">
            <nav className="py-4 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  {...(item.href.startsWith('http') && { target: '_blank', rel: 'noopener noreferrer' })}
                  className="block text-body text-muted-foreground hover:text-foreground smooth-transition px-4 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex items-center justify-center gap-4 px-4 pt-4 border-t border-border">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleJoinX}
                  className="bg-dexter-graphite/50 hover:bg-dexter-graphite text-muted-foreground hover:text-foreground rounded-full"
                >
                  <img src="/x.png" alt="X" className="h-[29px] w-[29px]" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleJoinDiscord}
                  className="bg-dexter-graphite/50 hover:bg-dexter-graphite text-muted-foreground hover:text-foreground rounded-full"
                >
                  <img src="/discord_icon_transparent.png" alt="Discord" className="h-[29px] w-[29px]" />
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}