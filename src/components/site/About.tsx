import { motion } from "framer-motion";
import { MapPin, Instagram, Phone, ArrowUpRight } from "lucide-react";
import fachada from "@/assets/fachada.png";
import { site } from "@/lib/site-data";
import { SectionHeader } from "./Reveal";

export function About() {
  return (
    <section id="sobre" className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Sobre a Coyotes"
          title="Uma garagem obcecada por detalhes"
          subtitle="No coração de Extrema/MG, unimos técnica, produtos profissionais e um cuidado quase artesanal com cada veículo que passa por aqui."
        />

        <div className="grid lg:grid-cols-12 gap-6 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 relative rounded-[2rem] overflow-hidden aspect-[4/3] glass"
          >
            <motion.img
              src={fachada}
              alt="Fachada Coyotes Lava Rápido — Av. Brasil, 225, Extrema/MG"
              className="absolute inset-0 h-full w-full object-cover"
              initial={{ scale: 1.15 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2.4, ease: "easeOut" }}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-2">
              <Badge icon={MapPin}>{site.address} · {site.city}</Badge>
              <Badge icon={Phone}>{site.phone}</Badge>
              <Badge icon={Instagram}>{site.instagramHandle}</Badge>
            </div>
            <div className="absolute top-6 left-6 inline-flex items-center gap-2 rounded-full glass-red px-3 py-1.5">
              <span className="h-2 w-2 rounded-full bg-brand animate-pulse" />
              <span className="text-[10px] uppercase tracking-[0.25em] text-foreground/90">Estabelecimento oficial</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="lg:col-span-5 flex flex-col gap-4"
          >
            <div className="glass-strong rounded-[2rem] p-8 relative overflow-hidden grain flex-1">
              <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-brand/20 blur-3xl" />
              <div className="relative">
                <h3 className="font-display text-2xl font-bold leading-tight">
                  Mais que um lava-rápido:<br />
                  <span className="text-gradient">uma experiência.</span>
                </h3>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                  Somos referência em estética automotiva na região de Extrema/MG. Atendemos
                  desde a lavagem semanal do dia a dia até proteção cerâmica de longa duração
                  em veículos premium — sempre com o mesmo padrão de acabamento.
                </p>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Nosso espaço conta com estacionamento próprio, ambiente de espera confortável
                  e uma equipe treinada para tratar cada carro como se fosse o nosso.
                </p>

                <div className="mt-6 grid grid-cols-3 gap-3">
                  <Metric value="4.9★" label="Google" />
                  <Metric value="+70" label="Avaliações" />
                  <Metric value="+5" label="Anos" />
                </div>
              </div>
            </div>

<a
  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${site.address}, Extrema, MG`,
  )}`}
  target="_blank"
  rel="noreferrer"
              className="group relative rounded-2xl glass-red px-6 py-4 flex items-center justify-between hover:glow-red transition-all">
              <div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Onde estamos</div>
                <div className="text-sm font-semibold">{site.address} · Centro · Extrema/MG</div>
              </div>
              <ArrowUpRight className="h-5 w-5 text-brand transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Badge({ icon: Icon, children }: { icon: typeof MapPin; children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full glass-strong px-3 py-1.5 text-[11px] text-foreground/90">
      <Icon className="h-3 w-3 text-brand" />
      {children}
    </span>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl glass px-3 py-3 text-center">
      <div className="font-display text-lg font-black text-gradient">{value}</div>
      <div className="text-[9px] uppercase tracking-widest text-muted-foreground mt-0.5">{label}</div>
    </div>
  );
}
