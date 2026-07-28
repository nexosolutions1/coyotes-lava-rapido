import { Instagram, MessageCircle, Phone, MapPin } from "lucide-react";
import { site } from "@/lib/site-data";
import novaNexoLogo from "@/assets/nova-nexo-logo.png";
import { Logo } from "./Logo";

const NOVA_NEXO_INSTAGRAM = "https://www.instagram.com/novanexoofc";

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 px-6 pb-10 pt-20">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/60 to-transparent" />

      <div className="mx-auto grid max-w-7xl items-start gap-12 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <Logo size={56} className="h-14 w-14" />

            <div>
              <div className="font-display text-xl font-black leading-tight">
                {site.name}
              </div>

              <div className="text-[11px] uppercase tracking-widest text-muted-foreground">
                {site.tagline}
              </div>
            </div>
          </div>

          <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Detalhamento automotivo premium em Extrema/MG. Cada carro é tratado
            como se fosse o nosso.
          </p>

          <div className="mt-5 flex gap-2">
            <a
              href={site.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram do Coyotes Lava Rápido"
              className="grid h-11 w-11 place-items-center rounded-full glass transition-colors hover:bg-white/10"
            >
              <Instagram className="h-4 w-4" />
            </a>

            <a
              href={site.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp do Coyotes Lava Rápido"
              className="grid h-11 w-11 place-items-center rounded-full bg-brand transition-all hover:glow-red"
            >
              <MessageCircle className="h-4 w-4 text-primary-foreground" />
            </a>

            <a
              href={`tel:${site.phoneRaw}`}
              aria-label="Telefone do Coyotes Lava Rápido"
              className="grid h-11 w-11 place-items-center rounded-full glass transition-colors hover:bg-white/10"
            >
              <Phone className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="space-y-2.5 text-sm text-muted-foreground">
          <div className="mb-3 text-[11px] uppercase tracking-widest text-foreground/80">
            Contato
          </div>

          <div className="flex items-start gap-2">
            <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand" />

            <span>
              {site.address} · {site.district}
              <br />
              {site.city} · CEP {site.cep}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Phone className="h-3.5 w-3.5 text-brand" />
            <span>{site.phone}</span>
          </div>

          <div className="flex items-center gap-2">
            <Instagram className="h-3.5 w-3.5 text-brand" />
            <span>{site.instagramHandle}</span>
          </div>
        </div>

        <div className="flex md:justify-end">
          <a
            href={NOVA_NEXO_INSTAGRAM}
            target="_blank"
            rel="noreferrer"
            aria-label="Conheça a Nova Nexo"
            className="group relative inline-flex items-center gap-4 overflow-hidden rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-[#07131f] via-[#091a2a] to-[#071019] px-5 py-3 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:shadow-[0_0_30px_rgba(0,180,255,.18)]"
          >
            <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-cyan-400/10 to-cyan-500/5" />
            </div>

            <img
              src={novaNexoLogo}
              alt="Nova Nexo"
              className="relative h-11 w-11 object-contain transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
            />

            <div className="relative flex flex-col leading-none">
              <span className="text-[10px] uppercase tracking-[0.35em] text-gray-500">
                Desenvolvido por
              </span>

              <span className="mt-1 font-display text-base font-bold tracking-[0.18em] text-cyan-300 transition-colors group-hover:text-cyan-200">
                NOVA NEXO
              </span>
            </div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="relative ml-1 h-4 w-4 text-cyan-400 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
            >
              <path d="M7 17L17 7" />
              <path d="M8 7h9v9" />
            </svg>
          </a>
        </div>
      </div>

      <div className="mx-auto mt-14 flex max-w-7xl flex-col justify-between gap-3 border-t border-white/5 pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
        <span>
          © {new Date().getFullYear()} {site.fullName}. Todos os direitos
          reservados.
        </span>

        <a
          href={NOVA_NEXO_INSTAGRAM}
          target="_blank"
          rel="noreferrer"
          aria-label="Site desenvolvido pela Nova Nexo"
          className="inline-flex items-center gap-1.5 transition-colors hover:text-cyan-400"
        >
          Desenvolvido por
          <strong className="font-semibold tracking-wider text-foreground">
            NOVA NEXO
          </strong>
        </a>
      </div>
    </footer>
  );
}