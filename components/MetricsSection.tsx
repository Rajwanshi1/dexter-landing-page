import { BarChart3 } from "lucide-react";

export function MetricsSection() {
  return (
    <section id="metrics" className="py-16 lg:py-24 border-t border-border">
      <div className="container-dexter">
        {/* Section Layout */}
        <div className="relative min-h-[300px] sm:min-h-[400px] lg:min-h-[500px]">
          {/* Centered Pill Tag - Matching HeroSection styling */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-16 px-4 sm:px-0">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 bg-dexter-primary-soft border border-dexter-primary/20 rounded-full">
              <BarChart3 className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-dexter-primary" />
              <span className="text-[10px] sm:text-[16px] text-dexter-primary font-mono font-medium uppercase tracking-wide">SIMULATION SNAPSHOT</span>
            </div>
          </div>
          
          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center px-4 sm:px-0">
            {/* Left Content */}
            <div className="space-y-4 sm:space-y-6 text-center lg:text-left">
              {/* Primary Highlighted Text */}
              <div className="space-y-1 sm:space-y-2">
                <h2 className="leading-none flex flex-col">
                  <span className="text-[26px] sm:text-[72px] lg:text-[80px] font-medium text-dexter-primary font-display">Highest</span>
                  <span className="text-[26px] sm:text-[72px] lg:text-[80px] font-medium text-white font-display">guaranteed APRs</span>
                </h2>
              </div>
              
              {/* Supportive Microcopy */}
              <div className="space-y-2 max-w-[90%] sm:max-w-lg mx-auto lg:mx-0 px-4 sm:px-0">
                <p className="text-sm sm:text-base lg:text-lg text-dexter-grey leading-relaxed">
                  Simulated yield performance across integrated protocols, based on historical WAL yield data.
                </p>
              </div>
            </div>
            
            {/* Right Protocol Table */}
            <div className="flex justify-center lg:justify-end px-4 sm:px-0">
              <div className="w-full max-w-lg">
                <ProtocolTable />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProtocolTable() {
  const protocols = [
    {
      name: "Scallop",
      apr: "44.5%",
      earnings: "+$1,210.00",
      logoColor: "#06B6D4"
    },
    {
      name: "Suilend",
      apr: "40.4%",
      earnings: "+$1,050.00",
      logoColor: "#4F46E5"
    },
    {
      name: "Navi",
      apr: "40.11%",
      earnings: "+$960.00",
      logoColor: "#8B5CF6"
    },
    {
      name: "Alphalend",
      apr: "11.66%",
      earnings: "+$650.00",
      logoColor: "#10B981"
    },
    {
      name: "Aftermath",
      apr: "8.7%",
      earnings: "+$530.00",
      logoColor: "#F59E0B"
    },
    {
      name: "Cetus",
      apr: "6.9%",
      earnings: "+$420.00",
      logoColor: "#EF4444"
    }
  ];

  return (
    <div className="w-full">
      {/* Table Header */}
      <div className="grid grid-cols-3 gap-2 sm:gap-4 px-2 sm:px-4 py-2 sm:py-3 mb-1 sm:mb-2">
        <span className="text-[10px] sm:text-label text-muted-foreground font-mono font-medium uppercase tracking-wide">PROTOCOL</span>
        <span className="text-[10px] sm:text-label text-muted-foreground text-center font-mono font-medium uppercase tracking-wide">APR</span>
        <span className="text-[10px] sm:text-label text-muted-foreground text-right font-mono font-medium uppercase tracking-wide">30D YIELD</span>
      </div>
      
      {/* Protocol Rows */}
      <div className="space-y-0">
        {protocols.map((protocol, index) => {
          const opacity = index === 0 ? 1 : Math.max(0.2, 1 - (index * 0.15));
          const isLastRow = index === protocols.length - 1;
          
          return (
            <div key={protocol.name}>
              <div
                className="relative px-2 sm:px-4 py-2 sm:py-3 transition-all duration-500 smooth-transition animate-fade-in-up bg-transparent hover:bg-muted/5"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  opacity: opacity
                }}
              >
                <div className="grid grid-cols-3 items-center gap-2 sm:gap-4">
                  {/* Protocol Name with Dot */}
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <div 
                      className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full flex-shrink-0"
                      style={{ 
                        backgroundColor: protocol.logoColor 
                      }}
                    />
                    <span className="text-[11px] sm:text-label text-foreground font-normal leading-tight" style={{ textTransform: 'none' }}>
                      {protocol.name}
                    </span>
                  </div>
                  
                  {/* APR */}
                  <div className="text-center">
                    <span className="text-[11px] sm:text-label font-normal leading-tight" style={{ textTransform: 'none', color: '#bded63' }}>
                      {protocol.apr}
                    </span>
                  </div>
                  
                  {/* Earnings */}
                  <div className="text-right">
                    <span className="text-[11px] sm:text-label text-dexter-primary font-normal leading-tight" style={{ textTransform: 'none' }}>
                      {protocol.earnings}
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Separator Line */}
              {!isLastRow && (
                <div 
                  className="w-full h-px bg-border/30 mx-auto"
                  style={{ opacity: opacity * 0.5 }}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}