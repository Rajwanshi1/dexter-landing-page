import { motion } from "framer-motion";
import { Wand2, Zap } from "lucide-react";
import { ScrollReveal } from "./motion/ScrollReveal";

const personas = [
  {
    icon: Wand2,
    title: "Strategy Creators",
    tagline: "Build. Publish. Earn.",
    points: [
      "Build strategies with natural language or visual builder",
      "Publish to the marketplace and set your fee",
      "Earn every time someone copies your strategy",
    ],
  },
  {
    icon: Zap,
    title: "DeFi Users",
    tagline: "Discover. Execute. Relax.",
    points: [
      "Browse top-performing strategies by risk & return",
      "One-click deploy with full non-custodial control",
      "AI monitors and rebalances while you sleep",
    ],
  },
];

export function PersonaSection() {
  return (
    <section
      className="section-padding relative overflow-hidden"
      style={{ backgroundColor: "#bded63" }}
    >
      <div className="container-dexter">
        <ScrollReveal className="text-center mb-10 lg:mb-14">
          <h2
            className="text-[26px] sm:text-display font-display mb-4"
            style={{ color: "#000000" }}
          >
            Built for Two Audiences
          </h2>
          <p className="text-lg lg:text-xl max-w-2xl mx-auto" style={{ color: "#2D2D2D" }}>
            Whether you create alpha or capture it — Dexter works for you.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {personas.map((persona, i) => (
            <motion.div
              key={persona.title}
              className="rounded-lg p-6 lg:p-8 border"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.07)",
                borderColor: "rgba(0, 0, 0, 0.1)",
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: i * 0.15,
              }}
            >
              <div className="flex items-center gap-3 mb-2">
                <persona.icon className="w-6 h-6" style={{ color: "#000000" }} />
                <h3
                  className="text-xl font-bold font-display"
                  style={{ color: "#000000" }}
                >
                  {persona.title}
                </h3>
              </div>

              <p
                className="text-base font-medium mb-5 font-mono"
                style={{ color: "#2D2D2D" }}
              >
                {persona.tagline}
              </p>

              <ul className="space-y-3">
                {persona.points.map((point, j) => (
                  <li
                    key={j}
                    className="flex items-center gap-2.5 text-sm"
                    style={{ color: "#1a1a1a" }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: "#000000" }}
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
