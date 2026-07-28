import { useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import heroCar from "@/assets/mavecao.png";
import coyotes from "@/assets/coyotes.png";
import { site } from "@/lib/site-data";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const px = useSpring(useTransform(mx, [-1, 1], [-20, 20]), { stiffness: 60, damping: 20 });
  const py = useSpring(useTransform(my, [-1, 1], [-15, 15]), { stiffness: 60, damping: 20 });

  return (
    <section
      id="hero"
      ref={ref}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        mx.set(((e.clientX - r.left) / r.width - 0.5) * 2);
        my.set(((e.clientY - r.top) / r.height - 0.5) * 2);
      }}
      className="relative min-h-screen w-full overflow-hidden grain"
    >
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <motion.img
          src={heroCar}
          alt="Ford Maverick clássico do cliente Coyotes"
          fetchPriority="high"
          className="h-full w-full object-cover object-center"
          style={{ x: px, y: py }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(5,5,5,0.9)_100%)]" />
      </motion.div>

      {/* floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-brand/60"
            style={{ left: `${(i * 53) % 100}%`, top: `${(i * 31) % 100}%` }}
            animate={{ y: [0, -30, 0], opacity: [0.2, 0.8, 0.2] }}
            transition={{ duration: 4 + (i % 5), repeat: Infinity, delay: i * 0.2 }}
          />
        ))}
      </div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-muted-foreground mb-24"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse" />
          {site.tagline}
        </motion.div>

        <motion.img
        src={coyotes}
          alt="Coyotes"
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
          className="w-[58vw] max-w-[460px] md:w-[40vw] h-auto select-none drop-shadow-[0_8px_30px_rgba(0,0,0,0.55)]"
          draggable={false}
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-14 max-w-xl text-base md:text-lg text-muted-foreground"
        >
          {site.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-3"
        >
          <a
            href={site.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-medium text-primary-foreground transition-all hover:scale-105 hover:glow-red"
          >
            <MessageCircle className="h-4 w-4" />
            Agendar pelo WhatsApp
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#servicos"
            className="inline-flex items-center gap-2 rounded-full glass px-7 py-3.5 text-sm font-medium hover:bg-white/10 transition-colors"
          >
            Ver Serviços
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs text-muted-foreground uppercase tracking-widest"
        >
          <span>Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="h-8 w-px bg-gradient-to-b from-brand to-transparent"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
