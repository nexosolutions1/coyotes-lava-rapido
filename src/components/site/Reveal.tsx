import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const variants: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

export function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center mb-16">
      {eyebrow && (
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-5">
            <span className="h-1 w-1 rounded-full bg-brand" />
            {eyebrow}
          </div>
        </Reveal>
      )}
      <Reveal delay={0.1}>
        <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tighter">
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.2}>
          <p className="mt-5 text-base text-muted-foreground">{subtitle}</p>
        </Reveal>
      )}
    </div>
  );
}
