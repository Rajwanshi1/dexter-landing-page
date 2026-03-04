import { motion, useMotionValue, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

export function FinalCTASection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax: quote marks drift gently against scroll
  const quoteY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const bgShift = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);

  const handleTryBeta = () => {
    window.open("https://app.dexterai.xyz/", "_blank");
  };

  return (
    <section
      ref={sectionRef}
      id="get-started"
      className="relative overflow-hidden"
      style={{
        paddingTop: "clamp(4rem, 8vw, 7rem)",
        paddingBottom: "clamp(4rem, 8vw, 7rem)",
        background:
          "linear-gradient(160deg, #c8f05e 0%, #bded63 30%, #a8d94a 70%, #9cce3e 100%)",
      }}
    >
      {/* Animated gradient orbs — slow ambient movement */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          width: "50vw",
          height: "50vw",
          maxWidth: 600,
          maxHeight: 600,
          top: "-15%",
          right: "-10%",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,255,255,0.18) 0%, transparent 65%)",
          filter: "blur(40px)",
        }}
        animate={{
          x: [0, 30, -10, 0],
          y: [0, -20, 15, 0],
          scale: [1, 1.05, 0.97, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute pointer-events-none"
        style={{
          width: "40vw",
          height: "40vw",
          maxWidth: 480,
          maxHeight: 480,
          bottom: "-10%",
          left: "-8%",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(0,0,0,0.04) 0%, transparent 60%)",
          filter: "blur(30px)",
        }}
        animate={{
          x: [0, -20, 15, 0],
          y: [0, 25, -10, 0],
          scale: [1, 0.96, 1.04, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Subtle radial light from center — tied to scroll */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(255,255,255,0.14) 0%, transparent 70%)",
          y: bgShift,
        }}
      />

      <div className="container-dexter relative">
        <div className="max-w-5xl mx-auto relative">
          {/* Opening quote — parallax drift */}
          <motion.span
            className="absolute font-display select-none pointer-events-none"
            style={{
              fontSize: "clamp(160px, 20vw, 280px)",
              lineHeight: 0.8,
              color: "#000000",
              top: "-0.35em",
              left: "-0.05em",
              fontWeight: 700,
              y: quoteY,
            }}
            initial={{ opacity: 0, scale: 0.8, filter: "blur(8px)" }}
            whileInView={{ opacity: 0.07, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 50, damping: 20 }}
          >
            &ldquo;
          </motion.span>

          {/* Closing quote — parallax drift (inverted) */}
          <motion.span
            className="absolute font-display select-none pointer-events-none"
            style={{
              fontSize: "clamp(160px, 20vw, 280px)",
              lineHeight: 0.8,
              color: "#000000",
              bottom: "-0.6em",
              right: "-0.05em",
              fontWeight: 700,
              y: useTransform(scrollYProgress, [0, 1], [-30, 30]),
            }}
            initial={{ opacity: 0, scale: 0.8, filter: "blur(8px)" }}
            whileInView={{ opacity: 0.07, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 50,
              damping: 20,
              delay: 0.2,
            }}
          >
            &rdquo;
          </motion.span>

          {/* Content */}
          <div className="text-center relative z-10 space-y-10">
            {/* Decorative line — draws in then pulses gently */}
            <motion.div
              className="mx-auto"
              style={{
                width: 48,
                height: 3,
                backgroundColor: "rgba(0,0,0,0.18)",
                borderRadius: 2,
              }}
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            />

            {/* Quote lines — staggered reveal with character */}
            <div className="space-y-1">
              {[
                { text: "AI agents will take over finance.", delay: 0.15 },
                { text: "Crypto will be their rails.", delay: 0.3 },
              ].map(({ text, delay }) => (
                <motion.p
                  key={text}
                  className="font-display italic leading-tight"
                  style={{
                    color: "#1a1a1a",
                    fontSize: "clamp(1.5rem, 4vw, 2.75rem)",
                    fontWeight: 400,
                    letterSpacing: "-0.01em",
                  }}
                  initial={{ opacity: 0, y: 28, filter: "blur(4px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 80,
                    damping: 20,
                    delay,
                  }}
                >
                  {text}
                </motion.p>
              ))}

              <motion.p
                className="font-display italic leading-tight"
                style={{
                  color: "#1a1a1a",
                  fontSize: "clamp(1.5rem, 4vw, 2.75rem)",
                  letterSpacing: "-0.01em",
                  fontWeight: 400,
                }}
                initial={{ opacity: 0, y: 28, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 80,
                  damping: 20,
                  delay: 0.45,
                }}
              >
                We make it happen{" "}
                <span
                  className="not-italic"
                  style={{ fontWeight: 700, color: "#000000" }}
                >
                  at Dexter.
                </span>
              </motion.p>
            </div>

            {/* CTA Button — enters with spring, ambient glow pulse */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 16,
                delay: 0.7,
              }}
            >
              <motion.button
                onClick={handleTryBeta}
                className="group relative inline-flex items-center gap-3 px-10 py-3.5 rounded-full cursor-pointer font-semibold tracking-wide text-button"
                style={{
                  backgroundColor: "#0C0C0D",
                  color: "#bded63",
                }}
                animate={{
                  boxShadow: [
                    "0 4px 20px rgba(0,0,0,0.2), 0 0 0 0 rgba(0,0,0,0)",
                    "0 4px 24px rgba(0,0,0,0.25), 0 0 40px rgba(0,0,0,0.06)",
                    "0 4px 20px rgba(0,0,0,0.2), 0 0 0 0 rgba(0,0,0,0)",
                  ],
                }}
                transition={{
                  boxShadow: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
                whileHover={{
                  y: -2,
                  boxShadow:
                    "0 8px 32px rgba(0,0,0,0.3), 0 0 0 1px rgba(0,0,0,0.1)",
                  transition: { duration: 0.25, ease: "easeOut" },
                }}
                whileTap={{ scale: 0.97 }}
              >
                LIVE BETA
                <motion.svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  initial={{ x: 0 }}
                  whileHover={{ x: 3 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                  />
                </motion.svg>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
