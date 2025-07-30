export function ProtocolTrustSection() {
  const protocols = [
    { name: "Aftermath", logoColor: "#F59E0B" },
    { name: "Navi", logoColor: "#8B5CF6" },
    { name: "Cetus", logoColor: "#EF4444" },
    { name: "Alphalend", logoColor: "#10B981" },
    { name: "Scallop", logoColor: "#06B6D4" },
    { name: "Suilend", logoColor: "#4F46E5" },
    { name: "Kriya", logoColor: "#FF6B6B" },
    { name: "Turbos", logoColor: "#4ECDC4" }
  ];

  const trustMetrics = [
    { label: "TOTAL VALUE LOCKED", value: "$2.4B+" },
    { label: "AUDITED PROTOCOLS", value: "100%" },
    { label: "UPTIME GUARANTEE", value: "99.9%" }
  ];

  return (
    <section id="protocols" className="bg-background border-t border-border section-padding">
      <div className="container-dexter">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-[26px] sm:text-headline font-display text-foreground mb-4 leading-tight">
            Trusted by{" "}
            <span className="text-gradient">leading protocols</span>
          </h2>
          <p className="text-subhead text-muted-foreground max-w-2xl mx-auto">
            Dexter integrates with battle-tested DeFi protocols, ensuring your funds are deployed 
            across the most secure and reliable platforms in the ecosystem.
          </p>
        </div>

        {/* Trust Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto">
          {trustMetrics.map((metric, index) => (
            <div 
              key={metric.label}
              className="text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-[32px] lg:text-[40px] font-medium text-dexter-primary mb-2">
                {metric.value}
              </div>
              <div className="text-label text-muted-foreground">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Protocol Grid */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {protocols.map((protocol, index) => (
              <div 
                key={protocol.name}
                className="flex items-center justify-center p-6 bg-card border border-border rounded-lg hover-lift smooth-transition animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3">
                  <div 
                    className="w-3 h-3 rounded-full flex-shrink-0"
                    style={{ backgroundColor: protocol.logoColor }}
                  />
                  <span className="text-label text-foreground font-normal" style={{ textTransform: 'none' }}>
                    {protocol.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}