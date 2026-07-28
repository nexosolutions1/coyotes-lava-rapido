import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { stats } from "@/lib/site-data";

function Counter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (!inView) return;
    const match = value.match(/([+]?)(\d+(?:\.\d+)?)(.*)/);
    if (!match) return;
    const [, prefix, num, suffix] = match;
    const target = parseFloat(num);
    const start = performance.now();
    const dur = 1600;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      const current = target * eased;
      const formatted = num.includes(".") ? current.toFixed(1) : Math.floor(current).toLocaleString("pt-BR");
      setDisplay(`${prefix}${formatted}${suffix}`);
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, value]);

  return <span ref={ref}>{display}</span>;
}

export function Stats() {
  return (
    <section id="sobre" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="glass-strong rounded-[2rem] p-10 md:p-16 grain relative overflow-hidden">
          <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-brand/20 blur-3xl" />
          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="text-center md:text-left"
              >
                <div className="font-display text-4xl md:text-6xl font-bold text-gradient">
                  <Counter value={s.value} />
                </div>
                <div className="mt-2 text-xs md:text-sm text-muted-foreground uppercase tracking-widest">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
