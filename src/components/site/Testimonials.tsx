import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, ImageIcon, Award, Quote, Heart } from "lucide-react";
import { googleReviews, site, type GoogleReview } from "@/lib/site-data";
import { SectionHeader } from "./Reveal";

function useSlidesPerView() {
  const [n, setN] = useState(3);
  useEffect(() => {
    const compute = () => {
      const w = window.innerWidth;
      setN(w >= 1024 ? 3 : w >= 640 ? 2 : 1);
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);
  return n;
}

export function Testimonials() {
  const spv = useSlidesPerView();
  const [page, setPage] = useState(0);
  const total = googleReviews.length;
  const pages = Math.max(1, Math.ceil(total / spv));
  useEffect(() => { setPage(0); }, [spv]);

  const timer = useRef<number | null>(null);
  useEffect(() => {
    timer.current = window.setInterval(() => setPage((p) => (p + 1) % pages), 6500);
    return () => { if (timer.current) window.clearInterval(timer.current); };
  }, [pages]);

  const visible = googleReviews.slice(page * spv, page * spv + spv);

  return (
    <section id="avaliacoes" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-brand/10 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
            <GoogleGIcon /> Google Reviews
          </div>
          <div className="mt-6 flex justify-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-6 w-6 fill-brand text-brand drop-shadow-[0_0_10px_rgba(230,40,40,0.6)]" />
            ))}
          </div>
          <h2 className="mt-4 font-display font-bold text-[clamp(2.2rem,5vw,4rem)] leading-[0.95] tracking-tighter">
            <span className="text-gradient">{site.rating.toString().replace(".", ",")}</span> de 5 estrelas
          </h2>
          <p className="mt-3 text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            Mais de {site.reviewsCount} avaliações reais. Cada comentário abaixo foi publicado por clientes reais da Coyotes no Google — sem edição, sem filtro.
          </p>
        </div>

        <div className="relative">
          <Quote className="absolute -top-8 -left-4 h-40 w-40 text-brand/10 pointer-events-none" strokeWidth={1} />

          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={page}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="grid gap-5"
                style={{ gridTemplateColumns: `repeat(${spv}, minmax(0, 1fr))` }}
              >
                {visible.map((r, i) => (
                  <ReviewCard key={`${page}-${i}`} review={r} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-between mt-8">
            <div className="flex gap-1.5">
              {Array.from({ length: pages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i)}
                  aria-label={`Página ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all ${i === page ? "w-8 bg-brand" : "w-1.5 bg-white/20 hover:bg-white/40"}`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button onClick={() => setPage((p) => (p - 1 + pages) % pages)}
                className="h-11 w-11 rounded-full glass grid place-items-center hover:bg-white/10 transition-colors" aria-label="Anterior">
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button onClick={() => setPage((p) => (p + 1) % pages)}
                className="h-11 w-11 rounded-full bg-brand grid place-items-center hover:glow-red transition-all" aria-label="Próxima">
                <ChevronRight className="h-4 w-4 text-primary-foreground" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ReviewCard({ review }: { review: GoogleReview }) {
  const initial = review.name.charAt(0);
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 220, damping: 22 }}
      className="group relative glass-strong rounded-3xl p-7 h-full flex flex-col overflow-hidden"
    >
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-brand/30 via-transparent to-brand/20 blur-md" />
      </div>
      <Quote className="absolute top-4 right-4 h-24 w-24 text-brand/5 pointer-events-none" strokeWidth={1} />

      <div className="relative flex items-start gap-3">
        <div className="h-12 w-12 rounded-full bg-gradient-to-br from-brand to-brand-glow grid place-items-center text-primary-foreground font-bold text-lg shrink-0 shadow-[0_0_20px_-4px_rgba(230,40,40,0.6)]">
          {initial}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="font-semibold text-sm truncate">{review.name}</span>
            {review.localGuide && (
              <span className="inline-flex items-center gap-1 rounded-full bg-white/8 px-1.5 py-0.5 text-[9px] uppercase tracking-widest text-muted-foreground">
                <Award className="h-2.5 w-2.5" /> Local Guide
              </span>
            )}
          </div>
          <div className="text-[11px] text-muted-foreground flex items-center gap-1.5 flex-wrap">
            <span>{review.reviews} {review.reviews === 1 ? "avaliação" : "avaliações"}</span>
            {review.photos ? (<><span>·</span><span className="inline-flex items-center gap-0.5"><ImageIcon className="h-2.5 w-2.5" />{review.photos}</span></>) : null}
          </div>
        </div>
        <GoogleGIcon className="h-4 w-4 shrink-0" />
      </div>

      <div className="relative mt-4 flex items-center gap-2">
        <div className="flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-3.5 w-3.5 fill-brand text-brand" />
          ))}
        </div>
        <span className="text-[11px] text-muted-foreground">
          {review.edited ? "Editado · " : ""}{review.time}
        </span>
      </div>

      <p className="relative mt-4 text-[14px] leading-relaxed text-foreground/90 flex-1">
        “{review.text}”
      </p>

      {review.reactions && (
        <div className="relative mt-4 pt-4 border-t border-white/5 flex items-center gap-3 text-[11px] text-muted-foreground">
          {review.reactions.heart ? (
            <span className="inline-flex items-center gap-1"><Heart className="h-3 w-3 fill-brand text-brand" /> {review.reactions.heart}</span>
          ) : null}
          {review.reactions.pray ? (
            <span className="inline-flex items-center gap-1">🙏 {review.reactions.pray}</span>
          ) : null}
        </div>
      )}
    </motion.article>
  );
}

function GoogleGIcon({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.75h3.57c2.08-1.92 3.28-4.74 3.28-8.07z"/>
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.75c-.99.66-2.26 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
      <path fill="#FBBC05" d="M5.84 14.12c-.22-.66-.35-1.36-.35-2.12s.13-1.46.35-2.12V7.04H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.96l3.66-2.84z"/>
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.04l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38z"/>
    </svg>
  );
}
