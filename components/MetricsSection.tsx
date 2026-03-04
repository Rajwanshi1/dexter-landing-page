import { BarChart3 } from "lucide-react";
import { motion } from "framer-motion";
import { ScrollReveal } from "./motion/ScrollReveal";
import { CountUp } from "./motion/CountUp";

export function MetricsSection() {
  return (
    <section id="metrics" className="section-padding relative overflow-hidden">
      <div className="section-divider-glow absolute top-0 left-0 right-0" />
      <div className="container-dexter">
        <div className="relative">
          {/* Centered Pill Tag */}
          <ScrollReveal className="text-center mb-8 sm:mb-12 lg:mb-16 px-4 sm:px-0">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 bg-dexter-primary-soft border border-dexter-primary/20 rounded-full page-bubble">
              <BarChart3 className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-dexter-primary" />
              <span className="text-[10px] sm:text-[16px] text-dexter-primary font-mono font-medium uppercase tracking-wide">
                STRATEGY PERFORMANCE
              </span>
            </div>
          </ScrollReveal>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center px-4 sm:px-0">
            {/* Left Content */}
            <ScrollReveal direction="left">
              <div className="space-y-4 sm:space-y-6 text-center lg:text-left">
                <div className="space-y-1 sm:space-y-2">
                  <h2 className="leading-none flex flex-col">
                    <span className="text-[26px] sm:text-[72px] lg:text-[80px] font-medium text-dexter-primary font-display">
                      Highest
                    </span>
                    <span className="text-[26px] sm:text-[72px] lg:text-[80px] font-medium text-white font-display">
                      guaranteed APRs
                    </span>
                  </h2>
                </div>

                <div className="space-y-2 max-w-[90%] sm:max-w-lg mx-auto lg:mx-0 px-4 sm:px-0">
                  <p className="text-xl text-dexter-grey leading-relaxed">
                    Yield strategy performance on $1K, benchmarked with
                    historical WAL yield data.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Right Protocol Table */}
            <ScrollReveal direction="right">
              <div className="flex justify-center lg:justify-end px-4 sm:px-0">
                <div className="w-full max-w-lg">
                  <ProtocolTable />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProtocolTable() {
  const protocols = [
    {
      name: "Dexter",
      apr: 49.7,
      earnings: 497.0,
      logoColor: "#bded63",
    },
    {
      name: "Scallop",
      apr: 41.73,
      earnings: 417.3,
      logoColor: "#06B6D4",
    },
    {
      name: "Suilend",
      apr: 39.45,
      earnings: 394.5,
      logoColor: "#4F46E5",
    },
    {
      name: "Navi",
      apr: 37.23,
      earnings: 372.3,
      logoColor: "#8B5CF6",
    },
    {
      name: "Alphalend",
      apr: 11.66,
      earnings: 116.6,
      logoColor: "#10B981",
    },
    {
      name: "Aftermath",
      apr: 8.7,
      earnings: 87.0,
      logoColor: "#F59E0B",
    },
    {
      name: "Cetus",
      apr: 6.9,
      earnings: 69.0,
      logoColor: "#EF4444",
    },
  ];

  return (
    <div className="w-full">
      {/* Table Header */}
      <div className="grid grid-cols-3 gap-2 sm:gap-4 px-2 sm:px-4 py-2 sm:py-3 mb-1 sm:mb-2">
        <span className="text-[10px] sm:text-label text-muted-foreground font-mono font-medium uppercase tracking-wide">
          PROTOCOL
        </span>
        <span className="text-[10px] sm:text-label text-muted-foreground text-center font-mono font-medium uppercase tracking-wide">
          AVG APR
        </span>
        <span className="text-[10px] sm:text-label text-muted-foreground text-right font-mono font-medium uppercase tracking-wide">
          1y YIELD
        </span>
      </div>

      {/* Protocol Rows */}
      <div className="space-y-0">
        {protocols.map((protocol, index) => {
          const opacity =
            index === 0 ? 1 : Math.max(0.2, 1 - index * 0.15);
          const isLastRow = index === protocols.length - 1;
          const isDexter = protocol.name === "Dexter";

          return (
            <motion.div
              key={protocol.name}
              className={isDexter ? "bg-dexter-primary-soft rounded-md shimmer" : ""}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: index * 0.08,
              }}
            >
              <div
                className="relative px-2 sm:px-4 py-2 sm:py-3 transition-all duration-500 smooth-transition bg-transparent hover:bg-muted/5"
                style={{ opacity }}
              >
                <div className="grid grid-cols-3 items-center gap-2 sm:gap-4">
                  {/* Protocol Name with Dot */}
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <div
                      className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full flex-shrink-0"
                      style={{ backgroundColor: protocol.logoColor }}
                    />
                    <span
                      className="text-[11px] sm:text-label text-foreground font-normal leading-tight"
                      style={{ textTransform: "none" }}
                    >
                      {protocol.name}
                    </span>
                  </div>

                  {/* AVG APR with CountUp */}
                  <div className="text-center">
                    <span
                      className="text-[11px] sm:text-label font-normal leading-tight"
                      style={{ textTransform: "none", color: "#bded63" }}
                    >
                      <CountUp
                        target={protocol.apr}
                        suffix="%"
                        decimals={protocol.apr % 1 === 0 ? 1 : 2}
                        duration={1.2}
                      />
                    </span>
                  </div>

                  {/* Earnings with CountUp */}
                  <div className="text-right">
                    <span
                      className="text-[11px] sm:text-label text-dexter-primary font-normal leading-tight"
                      style={{ textTransform: "none" }}
                    >
                      <CountUp
                        target={protocol.earnings}
                        prefix="+$"
                        decimals={2}
                        duration={1.4}
                      />
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
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
