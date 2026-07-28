import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, MapPin } from "lucide-react";
import { site } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";

const nav = [
  { label: "Início", href: "#hero" },
  { label: "Serviços", href: "#servicos" },
  { label: "Galeria", href: "#galeria" },
  { label: "Avaliações", href: "#avaliacoes" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-500", scrolled ? "py-3" : "py-5")}
    >
      <div className="mx-auto max-w-7xl px-5">
        <div
          className={cn(
            "grid grid-cols-[auto_1fr_auto] items-center gap-4 rounded-2xl px-4 py-2.5 transition-all duration-500",
            scrolled ? "glass-strong shadow-[0_20px_60px_-30px_rgba(0,0,0,0.8)]" : "bg-transparent border border-transparent",
          )}
        >
          <a href="#hero" className="flex items-center gap-3 group min-w-0">
            <div className="relative shrink-0">
              <div className="absolute inset-0 rounded-full blur-lg bg-brand/40 opacity-0 group-hover:opacity-100 transition-opacity" />
              <Logo size={128} className="relative h-32 w-32" />
            </div>
            <div className="hidden sm:block min-w-0">
              <div className="font-display font-black text-[15px] tracking-tight leading-tight truncate">COYOTES</div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground truncate">Lava Rápido & Estética</div>
            </div>
          </a>

          <nav className="hidden lg:flex items-center justify-center gap-1">
            {nav.map((n) => (
              <a key={n.href} href={n.href}
                className="px-3.5 py-2 text-[13px] text-muted-foreground hover:text-foreground transition-colors relative group">
                {n.label}
                <span className="absolute inset-x-3.5 -bottom-0.5 h-px bg-brand scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 justify-self-end">
            <a href={site.mapsUrl} target="_blank" rel="noreferrer"
              className="hidden md:inline-flex h-10 items-center gap-2 rounded-full glass px-4 text-[12px] text-muted-foreground hover:text-foreground transition-colors">
              <MapPin className="h-3.5 w-3.5 text-brand" /> Extrema/MG
            </a>
            <a href={site.whatsappUrl} target="_blank" rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-brand px-4 py-2.5 text-[13px] font-medium text-primary-foreground transition-all hover:scale-[1.03] hover:glow-red">
              <MessageCircle className="h-4 w-4" /> Agendar
            </a>
            <button className="lg:hidden p-2 rounded-lg glass" onClick={() => setOpen((v) => !v)} aria-label="Menu">
              <div className="space-y-1.5">
                <span className={cn("block h-0.5 w-5 bg-foreground transition-transform", open && "translate-y-2 rotate-45")} />
                <span className={cn("block h-0.5 w-5 bg-foreground transition-opacity", open && "opacity-0")} />
                <span className={cn("block h-0.5 w-5 bg-foreground transition-transform", open && "-translate-y-2 -rotate-45")} />
              </div>
            </button>
          </div>
        </div>

        {open && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
            className="lg:hidden mt-2 glass-strong rounded-2xl p-3 flex flex-col">
            {nav.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)}
                className="px-3 py-3 text-sm text-muted-foreground hover:text-foreground">
                {n.label}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
