import { useMemo, useState } from "react";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import {
  Droplets,
  Sparkles,
  Shield,
  Scissors,
  Plus,
} from "lucide-react";

import { services, type ServiceCategory } from "@/lib/site-data";
import { SectionHeader } from "./Reveal";

const categories: (ServiceCategory | "Todos")[] = [
  "Todos",
  "Lavagem",
  "Polimento",
  "Vitrificação",
  "Estética",
  "Extras",
];

const catIcons: Record<string, typeof Droplets> = {
  Lavagem: Droplets,
  Polimento: Sparkles,
  Vitrificação: Shield,
  Estética: Scissors,
  Extras: Plus,
};

export function Services() {
  const [filter, setFilter] =
    useState<(typeof categories)[number]>("Todos");

  const list = useMemo(
    () =>
      filter === "Todos"
        ? services
        : services.filter((service) => service.category === filter),
    [filter],
  );

  return (
    <section id="servicos" className="relative px-6 py-32">
      <div className="absolute inset-x-0 top-40 -z-10 h-96 bg-[radial-gradient(ellipse_at_center,rgba(230,40,40,0.08),transparent_70%)]" />

      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Serviços"
          title="O tratamento certo para cada veículo"
          subtitle="Conheça os serviços oferecidos pelo Coyotes Lava Rápido e Estética."
        />

        <LayoutGroup>
          <div className="mb-12 flex flex-wrap justify-center gap-2">
            {categories.map((category) => {
              const active = filter === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setFilter(category)}
                  className="relative rounded-full px-5 py-2 text-sm transition-colors"
                >
                  {active && (
                    <motion.span
                      layoutId="cat-pill"
                      className="absolute inset-0 rounded-full bg-brand"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}

                  <span
                    className={
                      active
                        ? "relative font-medium text-primary-foreground"
                        : "relative text-muted-foreground hover:text-foreground"
                    }
                  >
                    {category}
                  </span>
                </button>
              );
            })}
          </div>
        </LayoutGroup>

        <motion.div
          layout
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {list.map((service, index) => {
              const Icon = catIcons[service.category] ?? Droplets;

              return (
                <motion.article
                  key={service.name}
                  layout
                  initial={{
                    opacity: 0,
                    y: 20,
                    filter: "blur(10px)",
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                  }}
                  exit={{
                    opacity: 0,
                    y: -10,
                    filter: "blur(10px)",
                  }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.02,
                  }}
                  whileHover={{ y: -4 }}
                  className="group relative min-h-[230px] overflow-hidden rounded-2xl p-6 glass"
                >
                  <div className="absolute -right-24 -top-24 h-48 w-48 rounded-full bg-brand/10 opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100" />

                  <div className="relative flex h-full flex-col">
                    <div className="mb-8 flex items-start justify-between">
                      <div className="grid h-11 w-11 place-items-center rounded-xl glass">
                        <Icon className="h-4 w-4 text-brand" />
                      </div>

                      <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
                        {service.category}
                      </span>
                    </div>

                    <h3 className="font-display text-xl font-semibold">
                      {service.name}
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>

                    <div className="mt-auto pt-8">
                      <div className="h-px bg-gradient-to-r from-brand/50 via-white/10 to-transparent" />
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}