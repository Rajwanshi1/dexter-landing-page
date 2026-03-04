import { motion } from "framer-motion";
import { Shield, Lightbulb, Boxes, Lock } from "lucide-react";
import { StaggerContainer } from "./motion/StaggerContainer";

const pillars = [
  {
    icon: Shield,
    title: "On-Chain Guardrails",
    description:
      "User-defined constraints enforced by Move's type system: exposure limits, protocol allowlists, drawdown thresholds.",
  },
  {
    icon: Lightbulb,
    title: "Pre-Execution Simulation",
    description:
      "Every strategy dry-run against current on-chain state before capital commits. Expected outcomes, risks, and failure modes.",
  },
  {
    icon: Boxes,
    title: "Atomic Execution",
    description:
      "PTBs eliminate partial execution risk entirely. Full success or full revert. No stuck positions.",
  },
  {
    icon: Lock,
    title: "Non-Custodial Always",
    description:
      "Assets never leave your wallet. No deposits, no vaults, no wrappers. Agent permissions are sessioned, scoped, instantly revocable.",
  },
];

const cardVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 20,
    },
  },
};

export function SafetySection() {
  return (
    <section id="safety" className="section-padding relative overflow-hidden">
      <div className="container-dexter">
        <motion.div
          className="text-center mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
          <h2 className="text-[26px] sm:text-display font-display text-foreground mb-4">
            Safety & Trust
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            Defense-in-depth: safety enforced at every layer, not just audited once.
          </p>
        </motion.div>

        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto"
          staggerDelay={0.15}
        >
          {pillars.map((pillar) => (
            <motion.div
              key={pillar.title}
              variants={cardVariant}
              whileHover={{
                y: -4,
                boxShadow: "0 8px 30px rgba(189, 237, 99, 0.1)",
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
              className="bg-dexter-carbon rounded-lg p-6 lg:p-8 border border-border"
            >
              <motion.div
                className="mb-4"
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 12,
                  delay: 0.1,
                }}
              >
                <pillar.icon className="w-8 h-8" style={{ color: "#bded63" }} />
              </motion.div>
              <h3 className="text-lg font-semibold text-foreground mb-3 font-display">
                {pillar.title}
              </h3>
              <p className="text-body text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
