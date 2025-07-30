import { Button } from "./ui/button";
import { Sparkles, Wallet } from "lucide-react";

export function FinalCTASection() {
  // Disabled launch handler - no functionality until launch
  const handleLaunchDexter = () => {
    // Placeholder - no action until launch
  };

  return (
    <section
      id="get-started"
      className="border-t border-border section-padding"
    >
      <div className="container-dexter">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Header */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-dexter-primary-soft border border-dexter-primary/20 rounded-full page-bubble">
              <Sparkles className="w-3 h-3 text-dexter-primary" />
              <span className="text-[10px] sm:text-[16px] text-dexter-primary font-mono font-medium uppercase tracking-wide">
                Ready to Start
              </span>
            </div>

            <h2 className="text-[26px] sm:text-display font-display text-foreground leading-tight">
              Still managing yield{" "}
              <span className="text-gradient">manually</span>?
            </h2>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
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
            <p className="inline-block text-3xl font-bold font-mono uppercase tracking-wide bg-dexter-carbon border border-dexter-primary rounded-full px-6 py-3">
              <span style={{ color: "white" }}>Launching this </span>
              <span style={{ color: "#BDED63" }}>August</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}