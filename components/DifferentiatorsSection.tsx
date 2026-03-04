import { motion } from "framer-motion";
import { Wand2, ShoppingBag } from "lucide-react";
import { StaggerContainer } from "./motion/StaggerContainer";

const cards = [
  {
    icon: Wand2,
    title: "Prompt-to-Strategy",
    description:
      "Describe your DeFi goal in plain English. Dexter translates it into an executable, multi-protocol strategy — tested before your capital moves.",
    bullets: [
      { bold: "Natural language", rest: "to multi-protocol PTB" },
      { bold: "Visual builder", rest: "for step-by-step construction" },
      { bold: "Simulation engine", rest: "tests against live state" },
      { bold: "Templates", rest: "for common yield patterns" },
    ],
    direction: "left" as const,
  },
  {
    icon: ShoppingBag,
    title: "Strategy Marketplace",
    description:
      "A creator economy for DeFi strategies. Publish what works, earn when others use it, and let the best ideas rise to the top.",
    bullets: [
      { bold: "Publish & earn", rest: "fees from strategy usage" },
      { bold: "Performance ranked", rest: "by risk-adjusted returns" },
      { bold: "Community curated", rest: "with voting and reviews" },
      { bold: "Flywheel", rest: "— better strategies attract more users" },
    ],
    direction: "right" as const,
  },
];

const cardVariant = (direction: "left" | "right") => ({
  hidden: { opacity: 0, x: direction === "left" ? -40 : 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 20,
    },
  },
});

export function DifferentiatorsSection() {
  return (
    <section
      id="differentiators"
      className="section-padding relative overflow-hidden"
      style={{ backgroundColor: "#bded63" }}
    >
      <div className="container-dexter">
        <motion.div
          className="text-center mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
          <h2
            className="text-[26px] sm:text-display font-display mb-4"
            style={{ color: "#000000" }}
          >
            What Sets Dexter Apart
          </h2>
          <p
            className="text-lg lg:text-xl max-w-3xl mx-auto"
            style={{ color: "#2D2D2D" }}
          >
            Every DeFi automation tool executes pre-built strategies. Dexter lets
            anyone create them and turns that into an economy.
          </p>
        </motion.div>

        <StaggerContainer
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto"
          staggerDelay={0.2}
        >
          {cards.map((card) => (
            <motion.div
              key={card.title}
              variants={cardVariant(card.direction)}
              whileHover={{
                y: -4,
                boxShadow: "0 8px 30px rgba(0, 0, 0, 0.12)",
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
              className="rounded-lg p-6 lg:p-8 border transition-colors"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.08)",
                borderColor: "rgba(0, 0, 0, 0.12)",
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <card.icon className="w-6 h-6" style={{ color: "#000000" }} />
                <h3
                  className="text-xl font-bold font-display"
                  style={{ color: "#000000" }}
                >
                  {card.title}
                </h3>
              </div>
              <p
                className="text-body mb-6 leading-relaxed"
                style={{ color: "#2D2D2D" }}
              >
                {card.description}
              </p>
              <ul className="space-y-3">
                {card.bullets.map((bullet, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-2 text-sm"
                    style={{ color: "#2D2D2D" }}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                  >
                    <span className="mt-1" style={{ color: "#000000" }}>
                      &#8226;
                    </span>
                    <span>
                      <span
                        className="font-mono font-semibold"
                        style={{ color: "#000000" }}
                      >
                        {bullet.bold}
                      </span>{" "}
                      {bullet.rest}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
