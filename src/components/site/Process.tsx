import { motion } from "framer-motion";
import { process } from "@/lib/site-data";
import { SectionHeader } from "./Reveal";

export function Process() {
  return (
    <section className="relative py-32 px-6">
      <div className="mx-auto max-w-5xl">
        <SectionHeader eyebrow="Processo" title="Como cuidamos do seu carro" />

        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-brand/30 to-transparent md:-translate-x-1/2" />
          <div className="space-y-10 md:space-y-20">
            {process.map((p, i) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7 }}
                className={`relative pl-16 md:pl-0 md:grid md:grid-cols-2 md:gap-16 items-center ${i % 2 === 1 ? "md:[&>*:first-child]:col-start-2" : ""}`}
              >
                <div className={i % 2 === 1 ? "md:text-right" : ""}>
                  <div className="inline-flex items-center gap-3">
                    <span className="font-display text-5xl md:text-7xl font-bold text-brand/30">{p.step}</span>
                    <div>
                      <h3 className="font-display text-2xl font-semibold">{p.title}</h3>
                      <p className="text-sm text-muted-foreground max-w-xs mt-1">{p.desc}</p>
                    </div>
                  </div>
                </div>
                <span className="absolute left-6 md:left-1/2 top-6 h-4 w-4 rounded-full bg-brand animate-pulse-glow md:-translate-x-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
