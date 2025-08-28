import { Calendar, Sparkles } from "lucide-react";

export function FinalCTASection() {
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

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-dexter-primary-soft border border-dexter-primary/20 rounded-full page-bubble">
              <Calendar className="w-4 h-4 text-dexter-primary" />
              <span className="text-sm sm:text-lg text-dexter-primary font-mono font-medium uppercase tracking-wide">
                Launching Soon
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}