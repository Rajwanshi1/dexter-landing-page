import { Button } from "./ui/button";
import { ArrowRight, Sparkles, Wallet } from "lucide-react";

export function FinalCTASection() {
  // Disabled launch handler - no functionality until launch
  const handleLaunchDexter = () => {
    // Placeholder - no action until launch
  };

  return (
    <section
      id="get-started"
      className="py-20 lg:py-32 border-t border-border"
    >
      <div className="container-dexter">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Header */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-dexter-primary-soft border border-dexter-primary/20 rounded-full">
              <Sparkles className="w-3 h-3 text-dexter-primary" />
              <span className="text-[10px] sm:text-[16px] text-dexter-primary font-mono font-medium uppercase tracking-wide">
                Ready to Start
              </span>
            </div>

            <h2 className="text-[26px] sm:text-display font-display text-foreground leading-tight">
              Still managing yield{" "}
              <span className="text-gradient">manually</span>?
            </h2>

            <p className="text-subhead text-muted-foreground max-w-2xl mx-auto">
              Let Dexter handle the complexity while you focus
              on what matters.
              <span className="text-foreground">
                {" "}
                Deploy your autonomous agent in{" "}
                <span style={{ color: "#BDED63" }}>
                  seconds.
                </span>
              </span>
            </p>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={handleLaunchDexter}
              className="hidden bg-dexter-primary text-black hover:bg-dexter-primary/90 border-0 hover-lift pulse-ring cursor-not-allowed"
            >
              <Wallet className="w-4 h-4 mr-2" />
              Launch Dexter
            </Button>
            <Button
              variant="outline"
              className="bg-transparent border-[1.5px] border-dexter-primary text-white hover:bg-transparent dark:hover:bg-transparent hover-lift rounded-lg text-button cursor-pointer transition-all duration-200 hover:shadow-[0_0_0_1px_#bded63,0_0_10px_rgba(189,237,99,0.2)] dark:bg-transparent dark:border-dexter-primary dark:text-white"
              style={{
                backgroundColor: "transparent !important",
                borderColor: "#bded63 !important",
                color: "#ffffff !important",
              }}
              asChild
            >
              <a
                href="https://docs.dexterai.xyz/"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Documentation
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}