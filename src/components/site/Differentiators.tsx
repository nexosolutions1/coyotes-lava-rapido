import { motion } from "framer-motion";
import { Check, Sparkles, Award, Wrench, Gem, ShieldCheck, Users } from "lucide-react";
import { differentiators } from "@/lib/site-data";
import { Reveal, SectionHeader } from "./Reveal";

const icons = [Sparkles, Gem, Users, Wrench, Award, ShieldCheck];

export function Differentiators() {
  return (
    <section className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Diferenciais"
          title="Padrão que define excelência"
          subtitle="Cada detalhe pensado para que seu veículo receba o cuidado que merece."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {differentiators.map((d, i) => {
            const Icon = icons[i] ?? Check;
            return (
              <Reveal key={d.title} delay={i * 0.05}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className="group relative glass rounded-3xl p-8 h-full overflow-hidden"
                >
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-brand/40 to-transparent blur-xl" />
                  </div>
                  <div className="relative">
                    <div className="h-12 w-12 rounded-2xl glass grid place-items-center mb-6 group-hover:bg-brand/20 transition-colors">
                      <Icon className="h-5 w-5 text-brand" />
                    </div>
                    <h3 className="font-display text-xl font-semibold mb-2">{d.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
