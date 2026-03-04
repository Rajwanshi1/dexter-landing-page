import { motion } from "framer-motion";

const stats = [
  { value: "7+", label: "Protocols Integrated" },
  { value: "100%", label: "Non-Custodial" },
  { value: "Live", label: "On Sui Network" },
];

export function StatsStrip() {
  return (
    <div className="relative overflow-hidden" style={{ backgroundColor: "#0C0C0D" }}>
      <div className="container-dexter py-5">
        <div className="flex items-center justify-center gap-8 sm:gap-16 lg:gap-24">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="flex items-center gap-3"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: i * 0.1,
              }}
            >
              <span
                className="text-lg sm:text-xl font-bold font-display"
                style={{ color: "#bded63" }}
              >
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm font-mono uppercase tracking-wider text-muted-foreground">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
