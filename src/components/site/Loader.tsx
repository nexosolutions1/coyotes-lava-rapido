import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Logo } from "./Logo";

const phrases = [
  "Preparando o ambiente...",
  "Aquecendo os motores...",
  "Bem-vindo à Coyotes.",
];

export function Loader() {
  const [progress, setProgress] = useState(0);
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const start = Date.now();
    const duration = 2200;
    const tick = () => {
      const p = Math.min(1, (Date.now() - start) / duration);
      setProgress(p);
      setPhraseIdx(Math.min(phrases.length - 1, Math.floor(p * phrases.length)));
      if (p < 1) requestAnimationFrame(tick);
      else setTimeout(() => setDone(true), 500);
    };
    requestAnimationFrame(tick);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[100] bg-background grid place-items-center"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(230,40,40,0.15),transparent_60%)]" />
          <div className="absolute inset-0 carbon opacity-40" />
          <div className="relative flex flex-col items-center gap-8 px-6">
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="absolute inset-0 blur-2xl bg-brand/40 rounded-full animate-pulse-glow" />
              <Logo size={140} className="relative h-32 w-32 drop-shadow-[0_0_30px_rgba(230,40,40,0.5)]" />
            </motion.div>

            <div className="w-72 h-[2px] bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-brand via-brand-glow to-brand"
                style={{ width: `${progress * 100}%` }}
              />
            </div>

            <AnimatePresence mode="wait">
              <motion.p
                key={phraseIdx}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                className="text-xs text-muted-foreground tracking-[0.3em] uppercase"
              >
                {phrases[phraseIdx]}
              </motion.p>
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
