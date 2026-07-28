import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import g1 from "@/assets/gallery-1.jpeg";
import g2 from "@/assets/gallery-2.jpeg";
import g3 from "@/assets/gallery-3.jpeg";
import g4 from "@/assets/gallery-4.jpeg";
import g5 from "@/assets/gallery-5.jpeg";
import g6 from "@/assets/gallery-6.png";
import { SectionHeader } from "./Reveal";

const images = [g1, g2, g3, g4, g5, g6];

export function Gallery() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="galeria" className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Galeria"
          title="Resultados que falam por si"
          subtitle="Uma coleção de trabalhos realizados com o padrão Coyotes."
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 [grid-auto-flow:dense]">
          {images.map((src, i) => {
            const span = [
              "md:col-span-2 md:row-span-2",
              "",
              "md:row-span-2",
              "",
              "md:col-span-2",
              "",
            ][i];
            return (
              <motion.button
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
                onClick={() => setOpen(i)}
                className={`group relative overflow-hidden rounded-2xl bg-card aspect-square ${span}`}
              >
                <img
                  src={src}
                  alt={`Trabalho ${i + 1}`}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all">
                  <div className="text-xs uppercase tracking-widest text-brand">Ver detalhes</div>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {open !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] grid place-items-center bg-background/80 backdrop-blur-xl p-6"
            onClick={() => setOpen(null)}
          >
            <motion.img
              key={open}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={images[open]}
              alt="Preview"
              onClick={(e) => e.stopPropagation()}
              className="max-h-[85vh] max-w-[90vw] rounded-2xl object-contain"
            />
            <button
              onClick={() => setOpen(null)}
              className="absolute top-6 right-6 h-11 w-11 rounded-full glass-strong grid place-items-center hover:bg-white/10"
            >
              <X className="h-4 w-4" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setOpen((v) => (v === null ? 0 : (v - 1 + images.length) % images.length));
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full glass-strong grid place-items-center hover:bg-white/10"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setOpen((v) => (v === null ? 0 : (v + 1) % images.length));
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full glass-strong grid place-items-center hover:bg-white/10"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
