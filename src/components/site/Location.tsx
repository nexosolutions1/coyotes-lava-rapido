import { MapPin, Phone, MessageCircle, Clock, ExternalLink, Instagram } from "lucide-react";
import { motion } from "framer-motion";
import { site } from "@/lib/site-data";
import { SectionHeader } from "./Reveal";
import { Logo } from "./Logo";

export function Location() {
  return (
    <section id="contato" className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Localização" title="Venha nos visitar" subtitle="Estamos no coração de Extrema/MG, com estacionamento próprio." />

        <div className="grid lg:grid-cols-5 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3 relative rounded-3xl overflow-hidden glass aspect-[4/3] lg:aspect-auto min-h-[440px]"
          >
            <iframe
              title="Mapa Coyotes — Av. Brasil, 225, Extrema/MG"
              src={site.mapsEmbed}
              className="absolute inset-0 h-full w-full grayscale contrast-125 opacity-90"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-background/70 via-transparent to-brand/10" />
            <div className="absolute top-5 left-5 glass-strong rounded-full px-4 py-2 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-brand animate-pulse" />
              <span className="text-[11px] uppercase tracking-widest">Aberto agora</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-2 glass-strong rounded-3xl p-8 flex flex-col"
          >
            <div className="flex items-center gap-3 mb-6">
              <Logo size={48} className="h-12 w-12" />
              <div>
                <div className="font-display text-xl font-bold leading-tight">{site.name}</div>
                <div className="text-[11px] uppercase tracking-widest text-muted-foreground">Lava Rápido & Estética</div>
              </div>
            </div>

            <div className="space-y-4 flex-1">
              <Row icon={MapPin} label="Endereço" value={`${site.address} · ${site.district}`} extra={`${site.city} · CEP ${site.cep}`} />
              <Row icon={Phone} label="Telefone" value={site.phone} />
              <Row icon={Clock} label="Horário" value={site.hours} />
              <Row icon={Instagram} label="Instagram" value={site.instagramHandle} />
            </div>

            <div className="mt-6 space-y-2">
              <a href={site.mapsUrl} target="_blank" rel="noreferrer"
                className="flex items-center justify-between rounded-2xl glass px-5 py-3.5 hover:bg-white/10 transition-colors">
                <span className="text-sm font-medium">Abrir no Google Maps</span>
                <ExternalLink className="h-4 w-4 text-brand" />
              </a>
              <a href={site.whatsappUrl} target="_blank" rel="noreferrer"
                className="flex items-center justify-between rounded-2xl bg-brand px-5 py-3.5 hover:glow-red transition-all">
                <span className="text-sm font-medium text-primary-foreground">Falar no WhatsApp</span>
                <MessageCircle className="h-4 w-4 text-primary-foreground" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Row({ icon: Icon, label, value, extra }: { icon: typeof MapPin; label: string; value: string; extra?: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="h-9 w-9 rounded-lg glass grid place-items-center shrink-0">
        <Icon className="h-4 w-4 text-brand" />
      </div>
      <div className="min-w-0">
        <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{label}</div>
        <div className="text-sm font-medium">{value}</div>
        {extra && <div className="text-xs text-muted-foreground mt-0.5">{extra}</div>}
      </div>
    </div>
  );
}
