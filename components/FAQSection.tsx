import { motion } from "framer-motion";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./ui/accordion";
import { ScrollReveal } from "./motion/ScrollReveal";

const faqs = [
  {
    question: "Does Dexter have custody of my assets?",
    answer:
      "No. Dexter is 100% non-custodial. Your assets never leave your wallet. The AI agent operates through a Smart Account with scoped, sessioned permissions that you can revoke at any time.",
  },
  {
    question: "Can the AI make decisions without my permission?",
    answer:
      "Only within boundaries you define. You set guardrails — exposure limits, protocol allowlists, slippage caps, and spend limits. The agent can only act within those constraints. Every action is transparent and on-chain.",
  },
  {
    question: "Is Dexter audited?",
    answer:
      "Yes. Dexter's Smart Account contracts are audited by MoveBit and built on Sui's Move language with type-safe guardrails. Every action is verifiable on-chain.",
  },
  {
    question: "Can I withdraw my funds at any time?",
    answer:
      "Yes, instantly. Since Dexter is non-custodial, your assets remain in your wallet at all times. You can revoke agent permissions or withdraw with no lock-ups or delays.",
  },
  {
    question: "What happens if a strategy fails?",
    answer:
      "Strategies execute as atomic Programmable Transaction Blocks (PTBs) on Sui. If any step fails, the entire transaction reverts — no partial execution, no stuck positions. Your capital stays safe.",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="section-padding relative overflow-hidden">
      <div className="container-dexter">
        <ScrollReveal className="text-center mb-10 lg:mb-14">
          <h2 className="text-[26px] sm:text-display font-display text-foreground mb-4">
            Frequently Asked
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Trust, safety, and how Dexter works under the hood.
          </p>
        </ScrollReveal>

        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
          <Accordion type="single" collapsible>
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border-b border-border/40"
              >
                <AccordionTrigger className="text-base font-display font-semibold text-foreground hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
