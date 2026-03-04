import { motion } from "framer-motion";

// ── Animated bar chart showing volatile, shifting rates ──
function RateChaosViz() {
  const bars = [
    { color: "#06B6D4", heights: [44, 78, 30, 68, 52, 44] },
    { color: "#4F46E5", heights: [64, 34, 84, 40, 72, 64] },
    { color: "#8B5CF6", heights: [32, 60, 48, 88, 36, 32] },
    { color: "#bded63", heights: [74, 40, 64, 36, 80, 74] },
    { color: "#10B981", heights: [50, 84, 38, 62, 42, 50] },
    { color: "#F59E0B", heights: [58, 28, 76, 46, 66, 58] },
  ];
  const baseY = 108;

  return (
    <svg viewBox="0 0 220 130" fill="none" className="w-full h-full">
      {/* Grid lines */}
      {[35, 55, 75, 95].map((y) => (
        <line
          key={y}
          x1="18"
          y1={y}
          x2="202"
          y2={y}
          stroke="#2A2A2A"
          strokeWidth="0.5"
        />
      ))}

      {/* Animated bars */}
      {bars.map((bar, i) => (
        <motion.rect
          key={i}
          x={24 + i * 30}
          width="20"
          rx="2"
          fill={bar.color}
          fillOpacity="0.45"
          animate={{
            height: bar.heights,
            y: bar.heights.map((h) => baseY - h),
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.35,
          }}
        />
      ))}

      {/* Scanning sweep line */}
      <motion.line
        y1="22"
        y2={baseY + 4}
        stroke="#bded63"
        strokeWidth="1"
        animate={{ x1: [18, 202, 18], x2: [18, 202, 18] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        opacity={0.12}
      />

      {/* Flickering label */}
      <motion.text
        x="110"
        y="18"
        textAnchor="middle"
        fill="#8B8B8B"
        fontSize="7"
        fontFamily="IBM Plex Mono"
        animate={{ opacity: [0.25, 0.6, 0.25] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      >
        RATES SHIFTING...
      </motion.text>
    </svg>
  );
}

// ── Scattered protocol dots with broken, fading connections ──
function DisconnectedSignalsViz() {
  const nodes = [
    { x: 35, y: 22 },
    { x: 115, y: 16 },
    { x: 185, y: 28 },
    { x: 28, y: 72 },
    { x: 110, y: 65 },
    { x: 185, y: 78 },
    { x: 58, y: 115 },
    { x: 152, y: 110 },
  ];

  const connections: [number, number][] = [
    [0, 1],
    [1, 2],
    [0, 3],
    [1, 4],
    [2, 5],
    [3, 4],
    [4, 5],
    [3, 6],
    [5, 7],
    [6, 7],
  ];

  return (
    <svg viewBox="0 0 220 130" fill="none" className="w-full h-full">
      {/* Broken connection lines */}
      {connections.map(([from, to], i) => (
        <motion.line
          key={i}
          x1={nodes[from].x}
          y1={nodes[from].y}
          x2={nodes[to].x}
          y2={nodes[to].y}
          stroke="#8B8B8B"
          strokeWidth="0.7"
          strokeDasharray="3 5"
          animate={{ strokeOpacity: [0.06, 0.22, 0.04, 0.16, 0.06] }}
          transition={{
            duration: 5 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Protocol dots */}
      {nodes.map((node, i) => (
        <motion.circle
          key={i}
          cx={node.x}
          cy={node.y}
          r={4.5}
          fill="#8B8B8B"
          animate={{ fillOpacity: [0.15, 0.55, 0.15] }}
          transition={{ duration: 3.5, delay: i * 0.4, repeat: Infinity }}
        />
      ))}

      {/* Failed signal ripple — a node tries to broadcast but it fades */}
      <motion.circle
        cx={nodes[4].x}
        cy={nodes[4].y}
        fill="none"
        stroke="#bded63"
        strokeWidth="0.8"
        animate={{ r: [5, 40], opacity: [0.3, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeOut", delay: 1 }}
      />

      {/* Center "YOU" — isolated */}
      <circle
        cx="110"
        cy="65"
        r="17"
        fill="none"
        stroke="#EF4444"
        strokeWidth="0.8"
        strokeDasharray="3 3"
        opacity={0.2}
      />
      <text
        x="110"
        y="68"
        textAnchor="middle"
        fill="#EF4444"
        fontSize="7"
        fontFamily="IBM Plex Mono"
        opacity={0.35}
      >
        YOU
      </text>
    </svg>
  );
}

// ── Custody dilemma: vault vs manual — both problematic ──
function CustodyDilemmaViz() {
  return (
    <svg viewBox="0 0 220 130" fill="none" className="w-full h-full">
      {/* Center user dot */}
      <circle cx="110" cy="65" r="7" fill="#8B8B8B" fillOpacity="0.5" />

      {/* ── Left fork: VAULT / CUSTODY ── */}
      <motion.path
        d="M 98 58 Q 65 32 45 38"
        stroke="#EF4444"
        strokeWidth="1"
        strokeDasharray="4 3"
        fill="none"
        animate={{ strokeOpacity: [0.15, 0.45, 0.15] }}
        transition={{ duration: 3.5, repeat: Infinity }}
      />
      {/* Vault box */}
      <rect
        x="24"
        y="26"
        width="22"
        height="18"
        rx="2.5"
        stroke="#EF4444"
        strokeWidth="0.9"
        fill="none"
        opacity={0.45}
      />
      {/* Lock circle */}
      <circle
        cx="35"
        cy="35"
        r="3"
        stroke="#EF4444"
        strokeWidth="0.8"
        fill="none"
        opacity={0.45}
      />
      <line
        x1="35"
        y1="35"
        x2="35"
        y2="40"
        stroke="#EF4444"
        strokeWidth="0.8"
        opacity={0.45}
      />
      <text
        x="35"
        y="56"
        textAnchor="middle"
        fill="#EF4444"
        fontSize="7"
        fontFamily="IBM Plex Mono"
        opacity={0.5}
      >
        CUSTODY
      </text>

      {/* ── Right fork: MANUAL APPROVALS ── */}
      <motion.path
        d="M 122 58 Q 155 32 172 38"
        stroke="#F59E0B"
        strokeWidth="1"
        strokeDasharray="4 3"
        fill="none"
        animate={{ strokeOpacity: [0.15, 0.45, 0.15] }}
        transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
      />
      {/* Three approval steps — filling one by one (slowly) */}
      {[0, 1, 2].map((step) => (
        <g key={step}>
          <rect
            x={155 + step * 17}
            y="28"
            width="11"
            height="11"
            rx="1.5"
            stroke="#F59E0B"
            strokeWidth="0.7"
            fill="none"
            opacity={0.35}
          />
          <motion.path
            d={`M ${157 + step * 17} 33.5 L ${159 + step * 17} 36.5 L ${164 + step * 17} 30.5`}
            stroke="#F59E0B"
            strokeWidth="0.9"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: [0, 1, 1, 0], opacity: [0, 1, 1, 0] }}
            transition={{
              duration: 5,
              delay: step * 1.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </g>
      ))}
      <text
        x="179"
        y="52"
        textAnchor="middle"
        fill="#F59E0B"
        fontSize="7"
        fontFamily="IBM Plex Mono"
        opacity={0.5}
      >
        MANUAL
      </text>

      {/* "vs" label */}
      <text
        x="110"
        y="36"
        textAnchor="middle"
        fill="#2A2A2A"
        fontSize="10"
        fontFamily="Space Grotesk"
        fontWeight="600"
      >
        vs
      </text>

      {/* Bottom label */}
      <motion.text
        x="110"
        y="105"
        textAnchor="middle"
        fill="#8B8B8B"
        fontSize="7"
        fontFamily="IBM Plex Mono"
        animate={{ opacity: [0.2, 0.45, 0.2] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        PICK YOUR TRADEOFF
      </motion.text>
    </svg>
  );
}

// ── Section Component ──

const panels = [
  {
    viz: RateChaosViz,
    title: "Capital Inefficiency",
    caption:
      "Dozens of rates shifting every minute. No human can track it all.",
  },
  {
    viz: DisconnectedSignalsViz,
    title: "No Intelligence Layer",
    caption:
      "Cross-protocol signals exist, but nothing connects the dots.",
  },
  {
    viz: CustodyDilemmaViz,
    title: "No Safe Autonomy",
    caption: "Custody or manual control. Both fail at speed.",
  },
];

export function ProblemSection() {
  return (
    <section
      id="problem"
      className="section-padding relative overflow-hidden"
    >
      <div className="container-dexter">
        {/* Headline */}
        <motion.div
          className="text-center mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
          <h2 className="text-[26px] sm:text-display font-display text-foreground leading-tight">
            Capital moves fast.{" "}
            <span className="text-muted-foreground">
              Your portfolio doesn't.
            </span>
          </h2>
        </motion.div>

        {/* Visual panels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {panels.map((panel, i) => (
            <motion.div
              key={panel.title}
              className="rounded-xl overflow-hidden border border-border/40 bg-dexter-carbon/40"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: i * 0.15,
              }}
            >
              {/* Diagram area */}
              <div
                className="px-4 pt-5 pb-2 relative"
                style={{ aspectRatio: "5/3" }}
              >
                {/* Subtle dot-grid overlay */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-[0.04]"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, #8B8B8B 1px, transparent 1px)",
                    backgroundSize: "16px 16px",
                  }}
                />
                <panel.viz />
              </div>

              {/* Label */}
              <div className="px-5 pb-5 pt-2">
                <h3
                  className="text-base font-semibold font-display mb-1"
                  style={{ color: "#bded63" }}
                >
                  {panel.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {panel.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
