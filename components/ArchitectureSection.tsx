import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import {
  Cpu,
  Brain,
  BarChart3,
  Wrench,
  Store,
  ChevronDown,
  Check,
  ArrowRight,
} from "lucide-react";
import { ScrollReveal } from "./motion/ScrollReveal";

const layers = [
  {
    icon: Cpu,
    title: "Smart Accounts",
    subtitle: "First non-custodial smart accounts for AI agents",
    descriptors: ["Non-custodial", "On-chain guardrails", "Agent-powered"],
    features: [
      "Your keys, agent acts on your behalf",
      "On-chain guardrails & spend caps",
      "Atomic multi-step transactions on Sui",
    ],
    badge: "LIVE BETA",
    accent: "#bded63",
  },
  {
    icon: Brain,
    title: "Intelligence Layer",
    subtitle: "AI reasoning meets DeFi data",
    descriptors: [
      "Intent parsing",
      "Cross-protocol signals",
      "Continuous reasoning",
    ],
    features: [
      "Natural language intent parsing",
      "Cross-protocol signal aggregation",
      "Continuous market reasoning",
    ],
    badge: null,
    accent: "#bded63",
  },
  {
    icon: BarChart3,
    title: "Portfolio Manager",
    subtitle: "Holistic position awareness",
    descriptors: ["Wallet analysis", "Opportunity scanning", "Risk profiling"],
    features: [
      "Multi-wallet aggregation",
      "Automated opportunity scanning",
      "Dynamic risk profiling & alerts",
    ],
    badge: null,
    accent: "#bded63",
  },
  {
    icon: Wrench,
    title: "Strategy Builder",
    subtitle: "Prompt-to-strategy in seconds",
    descriptors: ["Prompt-to-strategy", "Visual builder", "Simulation engine"],
    features: [
      "Natural language or visual builder",
      "Backtesting & simulation engine",
      "One-click deploy to live",
    ],
    badge: null,
    accent: "#bded63",
  },
  {
    icon: Store,
    title: "Strategy Marketplace",
    subtitle: "Publish, share & monetize strategies",
    descriptors: ["Creator economy", "Fee sharing", "Leaderboard"],
    features: [
      "One-click copy-trade with risk controls",
      "Revenue sharing for creators",
      "Transparent performance leaderboards",
    ],
    badge: null,
    accent: "#bded63",
  },
];

const springTransition = {
  type: "spring" as const,
  stiffness: 100,
  damping: 20,
};

// --- Sub-components ---

function StackItem({
  layer,
  index,
  activeIndex,
  onClick,
}: {
  layer: (typeof layers)[number];
  index: number;
  activeIndex: number;
  onClick: () => void;
}) {
  const isActive = index === activeIndex;
  const isPast = index < activeIndex;
  const Icon = layer.icon;

  return (
    <motion.div
      className="relative cursor-pointer group"
      onClick={onClick}
      layout
      transition={springTransition}
    >
      {/* Connecting line to next item */}
      {index < layers.length - 1 && (
        <div className="absolute left-6 top-full w-px h-2 z-0">
          <motion.div
            className="w-full h-full"
            animate={{
              backgroundColor:
                index < activeIndex
                  ? "rgba(189, 237, 99, 0.4)"
                  : "rgba(42, 42, 42, 0.6)",
            }}
            transition={{ duration: 0.4 }}
          />
        </div>
      )}

      {/* Main card */}
      <motion.div
        className="relative rounded-xl overflow-hidden"
        animate={{
          borderColor: isActive
            ? "rgba(189, 237, 99, 0.5)"
            : isPast
              ? "rgba(189, 237, 99, 0.15)"
              : "rgba(42, 42, 42, 0.5)",
        }}
        style={{
          border: "1px solid",
        }}
        transition={{ duration: 0.4 }}
      >
        {/* Active glow effect */}
        {isActive && (
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              background:
                "linear-gradient(135deg, rgba(189, 237, 99, 0.06) 0%, transparent 60%)",
            }}
          />
        )}

        {/* Shimmer on active */}
        {isActive && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <motion.div
              className="absolute top-0 -left-full w-1/2 h-full"
              style={{
                background:
                  "linear-gradient(90deg, transparent 0%, rgba(189, 237, 99, 0.06) 50%, transparent 100%)",
              }}
              animate={{ x: ["0%", "400%"] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        )}

        {/* Content row */}
        <div
          className="relative flex items-center gap-3.5 px-4 py-3.5"
          style={{
            backgroundColor: isActive
              ? "rgba(26, 26, 27, 0.95)"
              : "rgba(20, 20, 21, 0.7)",
          }}
        >
          {/* Icon with glow ring */}
          <div className="relative flex-shrink-0">
            <motion.div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              animate={{
                backgroundColor: isActive
                  ? "rgba(189, 237, 99, 0.12)"
                  : isPast
                    ? "rgba(189, 237, 99, 0.05)"
                    : "rgba(42, 42, 42, 0.4)",
              }}
              transition={{ duration: 0.3 }}
            >
              <Icon
                className="w-4 h-4 transition-colors duration-300"
                style={{
                  color: isActive || isPast ? "#bded63" : "#6B6B6B",
                }}
              />
            </motion.div>
            {/* Active pulse ring */}
            {isActive && (
              <motion.div
                className="absolute inset-0 rounded-lg"
                style={{ border: "1px solid rgba(189, 237, 99, 0.3)" }}
                animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            )}
          </div>

          {/* Title */}
          <motion.span
            className="text-sm font-semibold font-display transition-colors duration-300 flex-1"
            animate={{
              color: isActive ? "#FFFFFF" : isPast ? "#bded63" : "#8B8B8B",
            }}
          >
            {layer.title}
          </motion.span>

          {/* Status indicators */}
          {isPast && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: "rgba(189, 237, 99, 0.15)" }}
            >
              <Check className="w-3 h-3" style={{ color: "#bded63" }} />
            </motion.div>
          )}

          {layer.badge && (
            <motion.span
              className="px-2 py-0.5 text-[9px] font-mono font-semibold uppercase tracking-wider rounded-full flex-shrink-0"
              style={{
                backgroundColor: "rgba(189, 237, 99, 0.15)",
                color: "#bded63",
                border: "1px solid rgba(189, 237, 99, 0.3)",
              }}
              animate={isActive ? { scale: [1, 1.05, 1] } : {}}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {layer.badge}
            </motion.span>
          )}

          {isActive && (
            <motion.div
              initial={{ opacity: 0, x: -4 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex-shrink-0"
            >
              <ArrowRight
                className="w-4 h-4"
                style={{ color: "#bded63" }}
              />
            </motion.div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

function LayerDetailPanel({ activeIndex }: { activeIndex: number }) {
  const layer = layers[activeIndex];
  const Icon = layer.icon;

  return (
    <div className="flex flex-col justify-center h-full">
      {/* Progress bar */}
      <div className="flex items-center gap-2 mb-6">
        <div className="flex gap-1">
          {layers.map((_, i) => (
            <motion.div
              key={i}
              className="h-1 rounded-full"
              animate={{
                width: i === activeIndex ? 28 : i < activeIndex ? 16 : 10,
                backgroundColor:
                  i === activeIndex
                    ? "#bded63"
                    : i < activeIndex
                      ? "rgba(189, 237, 99, 0.3)"
                      : "rgba(139, 139, 139, 0.2)",
              }}
              transition={springTransition}
            />
          ))}
        </div>
        <span
          className="font-mono text-[11px] uppercase tracking-widest ml-2"
          style={{ color: "#6B6B6B" }}
        >
          {String(activeIndex + 1).padStart(2, "0")}/05
        </span>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {/* Icon + Title row */}
          <div className="flex items-center gap-3 mb-3">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{
                backgroundColor: "rgba(189, 237, 99, 0.1)",
                border: "1px solid rgba(189, 237, 99, 0.2)",
              }}
            >
              <Icon className="w-5 h-5" style={{ color: "#bded63" }} />
            </div>
            <h3 className="text-2xl lg:text-[28px] font-semibold font-display text-foreground leading-tight">
              {layer.title}
            </h3>
          </div>

          {/* Subtitle */}
          <p
            className="text-base text-muted-foreground mb-4 leading-relaxed"
            style={{ maxWidth: 380 }}
          >
            {layer.subtitle}
          </p>

          {/* Descriptor tags */}
          <div className="flex flex-wrap gap-2 mb-5">
            {layer.descriptors.map((desc, i) => (
              <motion.span
                key={desc}
                className="px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider rounded-md"
                style={{
                  backgroundColor: "rgba(42, 42, 42, 0.6)",
                  color: "#8B8B8B",
                  border: "1px solid rgba(42, 42, 42, 0.8)",
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.05 + i * 0.05, duration: 0.2 }}
              >
                {desc}
              </motion.span>
            ))}
          </div>

          {/* Feature list */}
          <div className="space-y-3">
            {layer.features.map((feature, i) => (
              <motion.div
                key={feature}
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + i * 0.07, duration: 0.25 }}
              >
                <div
                  className="w-5 h-5 rounded-md flex items-center justify-center mt-0.5 flex-shrink-0"
                  style={{
                    backgroundColor: "rgba(189, 237, 99, 0.08)",
                    border: "1px solid rgba(189, 237, 99, 0.15)",
                  }}
                >
                  <Check
                    className="w-3 h-3"
                    style={{ color: "#bded63" }}
                  />
                </div>
                <span className="text-sm text-foreground/80 leading-relaxed">
                  {feature}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function MobileLayerCard({
  layer,
  index,
}: {
  layer: (typeof layers)[number];
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const Icon = layer.icon;

  return (
    <ScrollReveal delay={index * 0.1}>
      <div
        className="rounded-xl border overflow-hidden cursor-pointer transition-colors duration-300"
        style={{
          backgroundColor: expanded
            ? "rgba(26, 26, 27, 0.95)"
            : "rgba(20, 20, 21, 0.7)",
          borderColor: expanded
            ? "rgba(189, 237, 99, 0.3)"
            : "rgba(42, 42, 42, 0.5)",
        }}
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex items-center gap-3.5 p-4">
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{
              backgroundColor: expanded
                ? "rgba(189, 237, 99, 0.12)"
                : "rgba(42, 42, 42, 0.4)",
            }}
          >
            <Icon
              className="w-4.5 h-4.5"
              style={{ color: expanded ? "#bded63" : "#8B8B8B" }}
            />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2.5 flex-wrap">
              <h3 className="text-[15px] font-semibold text-foreground font-display whitespace-nowrap">
                {layer.title}
              </h3>
              {layer.badge && (
                <motion.span
                  className="px-2 py-0.5 text-[9px] font-mono font-semibold uppercase tracking-wider rounded-full"
                  style={{
                    backgroundColor: "rgba(189, 237, 99, 0.15)",
                    color: "#bded63",
                    border: "1px solid rgba(189, 237, 99, 0.3)",
                  }}
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {layer.badge}
                </motion.span>
              )}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              {layer.descriptors.join(" · ")}
            </p>
          </div>
          <motion.div
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown className="w-4.5 h-4.5 text-muted-foreground" />
          </motion.div>
        </div>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="overflow-hidden"
            >
              <div
                className="px-4 pb-4 pt-0"
                style={{ borderTop: "1px solid rgba(42, 42, 42, 0.5)" }}
              >
                <p className="text-sm text-muted-foreground mt-3 mb-3">
                  {layer.subtitle}
                </p>
                <div className="space-y-2.5">
                  {layer.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-2.5"
                    >
                      <div
                        className="w-4 h-4 rounded flex items-center justify-center mt-0.5 flex-shrink-0"
                        style={{
                          backgroundColor: "rgba(189, 237, 99, 0.08)",
                        }}
                      >
                        <Check
                          className="w-2.5 h-2.5"
                          style={{ color: "#bded63" }}
                        />
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ScrollReveal>
  );
}

// --- Main Component ---

export function ArchitectureSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const scrollIndex = useTransform(scrollYProgress, [0, 1], [0, 5]);

  const headerOpacity = useTransform(scrollYProgress, [0, 0.06], [1, 0]);
  const headerY = useTransform(scrollYProgress, [0, 0.06], [0, -30]);

  useMotionValueEvent(scrollIndex, "change", (latest) => {
    const clamped = Math.max(0, Math.min(4, Math.floor(latest)));
    setActiveIndex(clamped);
  });

  return (
    <section id="architecture" ref={sectionRef}>
      {/* ====== DESKTOP: Scroll-pinned layout ====== */}
      <div className="hidden lg:block" style={{ height: "500vh" }}>
        <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
          {/* Ambient glow orbs */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <motion.div
              className="absolute rounded-full"
              style={{
                width: 500,
                height: 500,
                left: "10%",
                top: "20%",
                background:
                  "radial-gradient(circle, rgba(189, 237, 99, 0.03) 0%, transparent 70%)",
                filter: "blur(80px)",
              }}
              animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute rounded-full"
              style={{
                width: 400,
                height: 400,
                right: "5%",
                bottom: "15%",
                background:
                  "radial-gradient(circle, rgba(189, 237, 99, 0.02) 0%, transparent 70%)",
                filter: "blur(80px)",
              }}
              animate={{ x: [0, -20, 0], y: [0, 25, 0] }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>

          <div className="container-dexter relative z-10">
            {/* Section header — fades out on scroll */}
            <motion.div
              className="text-center mb-10"
              style={{ opacity: headerOpacity, y: headerY }}
            >
              <motion.p
                className="font-mono text-xs uppercase tracking-[0.2em] mb-3"
                style={{ color: "#bded63" }}
              >
                Architecture
              </motion.p>
              <h2 className="text-[26px] sm:text-display font-display text-foreground mb-3">
                Product Architecture
              </h2>
              <p className="text-base lg:text-lg text-muted-foreground max-w-xl mx-auto">
                Five integrated layers, from smart accounts to strategy
                marketplace.
              </p>
            </motion.div>

            {/* Split layout */}
            <div className="grid grid-cols-[1fr_1.1fr] gap-12 xl:gap-16 items-center">
              {/* LEFT: Detail panel */}
              <LayerDetailPanel activeIndex={activeIndex} />

              {/* RIGHT: Vertical stack */}
              <div className="relative">
                {/* Background grid effect */}
                <div
                  className="absolute -inset-6 rounded-2xl opacity-40"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, rgba(189, 237, 99, 0.04) 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  }}
                />

                {/* Faint vertical line behind stack */}
                <div
                  className="absolute left-6 top-4 bottom-4 w-px"
                  style={{
                    background:
                      "linear-gradient(to bottom, transparent 0%, rgba(42, 42, 42, 0.4) 15%, rgba(42, 42, 42, 0.4) 85%, transparent 100%)",
                  }}
                />

                <div className="relative space-y-2">
                  {layers.map((layer, index) => (
                    <StackItem
                      key={layer.title}
                      layer={layer}
                      index={index}
                      activeIndex={activeIndex}
                      onClick={() => setActiveIndex(index)}
                    />
                  ))}
                </div>

                {/* Bottom accent line */}
                <motion.div
                  className="mt-4 h-px mx-4"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(189, 237, 99, 0.2) 0%, transparent 70%)",
                  }}
                  animate={{ opacity: [0.4, 0.7, 0.4] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ====== MOBILE: Expandable card list ====== */}
      <div className="lg:hidden section-padding">
        <div className="container-dexter">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={springTransition}
          >
            <p
              className="font-mono text-xs uppercase tracking-[0.2em] mb-3"
              style={{ color: "#bded63" }}
            >
              Architecture
            </p>
            <h2 className="text-[26px] sm:text-display font-display text-foreground mb-3">
              Product Architecture
            </h2>
            <p className="text-base text-muted-foreground max-w-lg mx-auto">
              Five integrated layers, from smart accounts to strategy
              marketplace.
            </p>
          </motion.div>

          <div className="max-w-2xl mx-auto space-y-2.5">
            {layers.map((layer, index) => (
              <MobileLayerCard
                key={layer.title}
                layer={layer}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
