import { motion } from "framer-motion";

// ── Hub / radar diagram with Dexter at center ──

function DexterHubDiagram() {
  const cx = 200;
  const cy = 200;

  const rings = [
    { r: 52, label: "INTELLIGENCE", opacity: 0.55, dash: "3 4", strokeWidth: 1.2 },
    { r: 105, label: "STRATEGY", opacity: 0.38, dash: "5 6", strokeWidth: 1 },
    { r: 155, label: "EXECUTION", opacity: 0.25, dash: "6 7", strokeWidth: 0.8 },
  ];

  const protocols = [
    { name: "Scallop", color: "#06B6D4", angle: -90 },
    { name: "Suilend", color: "#4F46E5", angle: -30 },
    { name: "Navi", color: "#8B5CF6", angle: 30 },
    { name: "Cetus", color: "#EF4444", angle: 90 },
    { name: "Aftermath", color: "#F59E0B", angle: 150 },
    { name: "Alphalend", color: "#10B981", angle: 210 },
  ];

  const outerR = 160;

  return (
    <motion.div
      className="w-full"
      style={{ aspectRatio: "1/1" }}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ type: "spring", stiffness: 70, damping: 18, duration: 0.9 }}
    >
      <svg
        viewBox="-20 -20 440 440"
        fill="none"
        className="w-full h-full"
      >
        {/* ── Concentric capability rings ── */}
        {rings.map((ring, i) => (
          <circle
            key={i}
            cx={cx}
            cy={cy}
            r={ring.r}
            stroke="#bded63"
            strokeWidth={ring.strokeWidth}
            strokeDasharray={ring.dash}
            fill="none"
            opacity={ring.opacity}
          />
        ))}

        {/* ── Ring labels — upper arc, bolder ── */}
        {rings.map((ring) => (
          <g key={ring.label}>
            {/* Background pill for readability */}
            <rect
              x={cx - 38}
              y={cy - ring.r - 14}
              width={76}
              height={14}
              rx={3}
              fill="#0C0C0D"
              fillOpacity={0.7}
            />
            <text
              x={cx}
              y={cy - ring.r - 4}
              textAnchor="middle"
              fill="#bded63"
              fontSize="8.5"
              fontFamily="IBM Plex Mono"
              fontWeight="500"
              opacity={0.7}
              letterSpacing="0.05em"
            >
              {ring.label}
            </text>
          </g>
        ))}

        {/* ── Radar pulse expanding outward ── */}
        <motion.circle
          cx={cx}
          cy={cy}
          fill="none"
          stroke="#bded63"
          strokeWidth="1"
          animate={{ r: [20, outerR], opacity: [0.3, 0] }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
        <motion.circle
          cx={cx}
          cy={cy}
          fill="none"
          stroke="#bded63"
          strokeWidth="0.7"
          animate={{ r: [20, outerR], opacity: [0.2, 0] }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeOut",
            delay: 2.25,
          }}
        />

        {/* ── Center: Dexter glow ── */}
        <motion.circle
          cx={cx}
          cy={cy}
          fill="#bded63"
          animate={{
            r: [24, 34, 24],
            fillOpacity: [0.06, 0.15, 0.06],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <circle cx={cx} cy={cy} r={18} fill="#bded63" fillOpacity={0.9} />
        <image
          href="/dexter_icon.png"
          x={cx - 14}
          y={cy - 14}
          width={28}
          height={28}
          style={{ borderRadius: "50%" }}
        />

        {/* ── Protocol nodes on outer ring ── */}
        {protocols.map((proto, i) => {
          const rad = (proto.angle * Math.PI) / 180;
          const x = cx + Math.cos(rad) * outerR;
          const y = cy + Math.sin(rad) * outerR;
          const isRight = x > cx + 20;
          const isLeft = x < cx - 20;
          const anchor = isRight ? "start" : isLeft ? "end" : "middle";
          const lx = isRight ? 16 : isLeft ? -16 : 0;
          const ly = !isRight && !isLeft ? (y < cy ? -14 : 18) : 5;

          return (
            <g key={proto.name}>
              {/* Connection line to center */}
              <line
                x1={x}
                y1={y}
                x2={cx}
                y2={cy}
                stroke={proto.color}
                strokeWidth="0.6"
                opacity={0.15}
              />

              {/* Particle flowing inward */}
              <motion.circle
                r={3}
                fill={proto.color}
                animate={{
                  cx: [x, cx],
                  cy: [y, cy],
                  opacity: [0, 0.8, 0],
                  r: [3, 4, 1.5],
                }}
                transition={{
                  duration: 3.5,
                  delay: i * 0.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Node dot */}
              <motion.circle
                cx={x}
                cy={y}
                r={5.5}
                fill={proto.color}
                animate={{ fillOpacity: [0.45, 0.85, 0.45] }}
                transition={{
                  duration: 3,
                  delay: i * 0.35,
                  repeat: Infinity,
                }}
              />

              {/* Label */}
              <text
                x={x + lx}
                y={y + ly}
                textAnchor={anchor}
                fill="#E0E0E0"
                fontSize="9"
                fontFamily="IBM Plex Mono"
                fontWeight="400"
                opacity={0.7}
              >
                {proto.name}
              </text>
            </g>
          );
        })}
      </svg>
    </motion.div>
  );
}

// ── Capability data ──

const capabilities = [
  {
    number: "01",
    title: "Real-Time Intelligence",
    description:
      "Ingests the full Sui DeFi state — every pool, every rate, every incentive — and surfaces the highest risk-adjusted opportunities in real time.",
  },
  {
    number: "02",
    title: "Prompt-to-Strategy",
    description:
      "Describe your goal in plain English. Dexter builds multi-step strategies, simulates them against live on-chain state, and shows expected outcomes.",
  },
  {
    number: "03",
    title: "Non-Custodial Execution",
    description:
      "Your wallet, your keys. Dexter executes through your smart account with type-safe guardrails — sessioned, scoped, instantly revocable.",
  },
];

export function SolutionSection() {
  return (
    <section
      id="solution"
      className="section-padding relative overflow-hidden"
    >
      <div className="container-dexter">
        {/* Headline — full-width centered */}
        <motion.div
          className="text-center mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
          <h2 className="text-[26px] sm:text-display font-display text-foreground mb-4">
            Meet Dexter
          </h2>
          <p
            className="text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed"
            style={{ color: "#bded63" }}
          >
            Your AI-powered portfolio manager on Sui. It watches what you
            can't, builds what you wouldn't, and executes while you sleep.
          </p>
        </motion.div>

        {/* Two-column: capabilities left (narrower), diagram right (wider) */}
        <div
          className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-10 lg:gap-6 items-center max-w-6xl mx-auto"
        >
          {/* ── Left: Capability cards ── */}
          <div className="space-y-6 sm:space-y-8 order-2 lg:order-1 lg:pr-4">
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
                className="flex gap-5 items-start"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  delay: i * 0.15,
                }}
              >
                {/* Number + accent bar */}
                <div className="flex flex-col items-center pt-1 flex-shrink-0">
                  <span
                    className="text-xs font-mono font-semibold tracking-wider mb-2"
                    style={{ color: "#bded63" }}
                  >
                    {cap.number}
                  </span>
                  <div
                    className="w-[2px] flex-1 rounded-full min-h-[40px]"
                    style={{ backgroundColor: "rgba(189, 237, 99, 0.25)" }}
                  />
                </div>

                {/* Content */}
                <div>
                  <h3
                    className="text-lg lg:text-xl font-semibold font-display mb-2"
                    style={{ color: "#bded63" }}
                  >
                    {cap.title}
                  </h3>
                  <p className="text-sm sm:text-body text-muted-foreground leading-relaxed">
                    {cap.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ── Right: Hub diagram ── */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end overflow-hidden">
            <div className="w-full max-w-xs sm:max-w-sm lg:max-w-md xl:max-w-lg">
              <DexterHubDiagram />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
