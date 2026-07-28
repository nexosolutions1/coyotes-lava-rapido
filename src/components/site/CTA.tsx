import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import cta from "@/assets/cta-bg.jpg";
import { site } from "@/lib/site-data";

export function CTA() {
  return (
    <section className="relative min-h-[80vh] flex items-center px-6 py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img src={cta} alt="" className="h-full w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/40" />
      </div>

      <div className="relative mx-auto max-w-5xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30, filter: "blur(20px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="font-display font-bold text-[clamp(2.5rem,8vw,7rem)] leading-[0.95] tracking-tighter"
        >
          Seu carro merece <br />
          <span className="text-gradient">mais que uma lavagem.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-6 text-lg text-muted-foreground"
        >
          Ele merece uma experiência.
        </motion.p>
        <motion.a
          href={site.whatsappUrl}
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          whileHover={{ scale: 1.04 }}
          className="mt-12 inline-flex items-center gap-3 rounded-full bg-brand px-10 py-5 text-base font-medium text-primary-foreground animate-pulse-glow"
        >
          Agendar Agora
          <ArrowRight className="h-5 w-5" />
        </motion.a>
      </div>
    </section>
  );
}
