import { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X, Wallet } from "lucide-react";
import { MessageCircle } from "lucide-react";
import Vector from "../imports/Vector";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "How it Works", href: "#how-it-works" },
    { label: "Docs", href: "https://docs.dexterai.xyz/" }
  ];

  // Disabled launch handler - no functionality until launch
  const handleLaunchDexter = () => {
    // Placeholder - no action until launch
  };

  const handleTwitterClick = () => {
    window.open('https://twitter.com/dexter', '_blank');
  };

  const handleDiscordClick = () => {
    window.open('https://discord.gg/VhU5WEMRgZ', '_blank');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-dexter border-b border-border">
      <div className="container-dexter">
        <div className="flex items-center h-16 lg:h-20 relative">
          {/* Logo with Vector Icon */}
          <div className="flex items-center gap-3">
            {/* Vector Logo */}
            <div className="w-6 h-6 lg:w-7 lg:h-7 flex-shrink-0">
              <Vector />
            </div>
            
            {/* Text Logo */}
            <div className="text-button font-display">
              <span className="text-foreground">DEXTER</span>
            </div>
          </div>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden lg:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                {...(item.href.startsWith('http') && { target: '_blank', rel: 'noopener noreferrer' })}
                className="text-body text-muted-foreground hover:text-foreground smooth-transition relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-dexter-primary group-hover:w-full transition-all duration-300 ease-out" />
              </a>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="hidden lg:flex items-center gap-4 ml-auto">
            <button
              onClick={handleTwitterClick}
              className="p-2 text-muted-foreground hover:text-foreground smooth-transition hover-lift"
              aria-label="Follow on Twitter"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </button>
            <button
              onClick={handleDiscordClick}
              className="p-2 text-muted-foreground hover:text-foreground smooth-transition hover-lift"
              aria-label="Join Discord"
            >
              <MessageCircle className="w-5 h-5" />
            </button>
          </div>

          {/* CTA Button - Hidden */}
          <div className="hidden">
            <Button 
              onClick={handleLaunchDexter}
              className="bg-dexter-primary text-black hover:bg-dexter-primary/90 border-0 hover-lift pulse-ring cursor-not-allowed"
            >
              <Wallet className="w-4 h-4 mr-2" />
              Launch Dexter
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
              {/* Mobile Social Icons */}
              <div className="flex items-center gap-4 px-4 pt-4 border-t border-border">
                <button
                  onClick={handleTwitterClick}
                  className="flex items-center gap-2 p-2 text-muted-foreground hover:text-foreground smooth-transition"
                  aria-label="Follow on Twitter"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  <span className="text-body">Twitter</span>
                </button>
                <button
                  onClick={handleDiscordClick}
                  className="flex items-center gap-2 p-2 text-muted-foreground hover:text-foreground smooth-transition"
                  aria-label="Join Discord"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span className="text-body">Discord</span>
                </button>
              </div>
              <div className="px-4 pt-4 hidden">
                <Button 
                  onClick={handleLaunchDexter}
                  className="w-full bg-dexter-primary text-black hover:bg-dexter-primary/90 border-0 cursor-not-allowed"
                >
                  <Wallet className="w-4 h-4 mr-2" />
                  Launch Dexter
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}