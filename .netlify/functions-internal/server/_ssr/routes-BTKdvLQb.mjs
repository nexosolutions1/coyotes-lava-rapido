import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { a as useScroll, c as AnimatePresence, i as useMotionValue, n as useSpring, o as motion, r as useTransform, s as LayoutGroup, t as useInView } from "../_libs/framer-motion.mjs";
import { C as Check, E as ArrowRight, S as ChevronLeft, T as ArrowUpRight, _ as Gem, a as Sparkles, b as Clock, c as Scissors, d as Phone, f as MessageCircle, g as Heart, h as Image, i as Star, l as Quote, m as Instagram, n as Wrench, o as Shield, p as MapPin, r as Users, s as ShieldCheck, t as X, u as Plus, v as ExternalLink, w as Award, x as ChevronRight, y as Droplets } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BTKdvLQb.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var site = {
	name: "Coyotes",
	fullName: "Coyotes Lava Rápido e Estacionamento",
	tagline: "Estética Automotiva Premium",
	subtitle: "Detalhamento, polimento e vitrificação com o padrão que carros exigentes merecem.",
	whatsapp: "5535991621299",
	whatsappUrl: "https://wa.me/5535991621299?text=Ol%C3%A1%20Coyotes%2C%20quero%20agendar%20um%20servi%C3%A7o.",
	instagram: "https://instagram.com/coyotes.lavarapido",
	instagramHandle: "@coyotes.lavarapido",
	phone: "(35) 99162-1299",
	phoneRaw: "+5535991621299",
	address: "Av. Brasil, 225",
	district: "Centro",
	city: "Extrema — MG",
	cep: "37640-052",
	hours: "Seg — Sáb · 08h às 18h",
	mapsQuery: "Coyotes Lava Rápido, Av. Brasil, 225, Centro, Extrema - MG, 37640-052",
	mapsUrl: "https://www.google.com/maps/search/?api=1&query=Coyotes+Lava+R%C3%A1pido+Av+Brasil+225+Centro+Extrema+MG+37640-052",
	mapsEmbed: "https://www.google.com/maps?q=Av.+Brasil,+225,+Centro,+Extrema+-+MG,+37640-052&output=embed",
	rating: 4.9,
	reviewsCount: 70
};
var differentiators = [
	{
		title: "Atendimento Premium",
		desc: "Cada cliente tratado como único — do agendamento à entrega."
	},
	{
		title: "Produtos Profissionais",
		desc: "Linhas certificadas de detalhamento automotivo importadas."
	},
	{
		title: "Equipe Especializada",
		desc: "Detalhadores treinados para veículos exigentes."
	},
	{
		title: "Estrutura Completa",
		desc: "Estacionamento coberto, ambiente climatizado e área de espera."
	},
	{
		title: "Acabamento Impecável",
		desc: "Obsessão pelos detalhes que ninguém mais percebe."
	},
	{
		title: "Confiança Comprovada",
		desc: "4,9 ★ no Google com mais de 70 avaliações reais."
	}
];
var services = [
	{
		name: "Ducha P",
		price: 40,
		category: "Lavagem",
		description: "Lavagem externa rápida para veículos pequenos."
	},
	{
		name: "Ducha G",
		price: 55,
		category: "Lavagem",
		description: "Lavagem externa rápida para veículos grandes."
	},
	{
		name: "Padrão G",
		price: 85,
		category: "Lavagem",
		description: "Lavagem completa externa e interna — porte grande."
	},
	{
		name: "Padrão GG",
		price: 100,
		category: "Lavagem",
		description: "Lavagem completa externa e interna — porte extra."
	},
	{
		name: "Cera",
		price: 30,
		category: "Estética",
		description: "Aplicação de cera protetora para brilho intenso."
	},
	{
		name: "Polimento de Farol",
		price: 120,
		category: "Polimento",
		description: "Recuperação da transparência dos faróis."
	},
	{
		name: "Higienização só Banco",
		price: 220,
		category: "Estética",
		description: "Limpeza profunda de bancos com produtos técnicos."
	},
	{
		name: "Higienização Completa",
		price: 350,
		category: "Estética",
		description: "Higienização integral do interior do veículo."
	},
	{
		name: "Polimento de Lataria P",
		price: 450,
		category: "Polimento",
		description: "Correção de pintura para veículos pequenos."
	},
	{
		name: "Polimento de Lataria G",
		price: 600,
		category: "Polimento",
		description: "Correção de pintura para veículos grandes."
	},
	{
		name: "Vitrificação P",
		price: 1600,
		category: "Vitrificação",
		description: "Proteção cerâmica de longa duração — porte pequeno."
	},
	{
		name: "Vitrificação G",
		price: 1900,
		category: "Vitrificação",
		description: "Proteção cerâmica de longa duração — porte grande."
	},
	{
		name: "Descontaminação de Vidros",
		price: 30,
		category: "Estética",
		description: "Remoção de resíduos e manchas de vidros."
	},
	{
		name: "Descontaminação de Rodas",
		price: 50,
		category: "Estética",
		description: "Limpeza técnica das rodas."
	},
	{
		name: "Descontaminação de Rodas Completa",
		price: 240,
		category: "Estética",
		description: "Tratamento profundo com desmontagem."
	},
	{
		name: "Aplicação de Shiny",
		price: 10,
		category: "Extras",
		description: "Brilho e proteção para pneus."
	},
	{
		name: "Lavagem Interna de Capô",
		price: 40,
		category: "Extras",
		description: "Limpeza da parte interna do capô."
	},
	{
		name: "Lavagem Interna da Tampa de Combustível",
		price: 5,
		category: "Extras",
		description: "Limpeza detalhada da tampa e bocal."
	},
	{
		name: "Lavagem do Motor",
		price: 140,
		category: "Extras",
		description: "Higienização técnica do compartimento do motor."
	},
	{
		name: "Descontaminação de Painel",
		price: 15,
		category: "Extras",
		description: "Limpeza e revitalização do painel."
	},
	{
		name: "Remoção de Adesivo",
		price: 30,
		category: "Extras",
		description: "Remoção segura sem danificar a pintura."
	},
	{
		name: "Lavagem Moto",
		price: 50,
		category: "Lavagem",
		description: "Lavagem completa para motocicletas."
	},
	{
		name: "Hidratação Banco de Couro",
		price: 15,
		category: "Estética",
		description: "Hidratação e nutrição de bancos de couro."
	},
	{
		name: "Restauração de Couro Completa",
		price: 1e3,
		category: "Estética",
		description: "Restauração premium para couro danificado."
	}
];
var stats = [
	{
		value: "4.9★",
		label: "Google Reviews"
	},
	{
		value: "+70",
		label: "Avaliações reais"
	},
	{
		value: "+5.000",
		label: "Veículos atendidos"
	},
	{
		value: "+5 anos",
		label: "de experiência"
	}
];
var process = [
	{
		step: "01",
		title: "Recebimento",
		desc: "Recebemos seu veículo com protocolo profissional."
	},
	{
		step: "02",
		title: "Avaliação",
		desc: "Análise técnica detalhada da pintura e interior."
	},
	{
		step: "03",
		title: "Execução",
		desc: "Serviço realizado por equipe especializada."
	},
	{
		step: "04",
		title: "Entrega",
		desc: "Inspeção final e entrega com o padrão Coyotes."
	}
];
var googleReviews = [
	{
		name: "Lucas Gabriel",
		reviews: 1,
		time: "3 meses atrás",
		rating: 5,
		text: "Muito bom a lavagem o atendimento preço, com certeza o melhor de extrema."
	},
	{
		name: "Rodney Júnior",
		localGuide: true,
		reviews: 21,
		photos: 2,
		time: "1 ano atrás",
		rating: 5,
		text: "Sou do Mato Grosso do Sul e fui muito bem atendido pelo pessoal. Atenciosos e prestativos, tornaram minha experiência excelente. Recomendo!",
		reactions: { pray: 1 }
	},
	{
		name: "Anna Leticia Brito",
		localGuide: true,
		reviews: 24,
		photos: 5,
		time: "1 ano atrás",
		rating: 5,
		text: "Lavagem de alta qualidade, tenho dois cachorros Golden que andam no carro e eles fazem milagre! Atendimento mil! Super indico!"
	},
	{
		name: "Iraildes Santos",
		reviews: 10,
		photos: 1,
		time: "1 ano atrás",
		edited: true,
		rating: 5,
		text: "Foi ótima, tudo muito limpo, organizado, serviço de altíssima qualidade. Só elogios e gratidão. Parabéns a todos os envolvidos.",
		reactions: { pray: 1 }
	},
	{
		name: "Edson de Almeida",
		reviews: 1,
		photos: 2,
		time: "1 ano atrás",
		rating: 5,
		text: "Bom serviço. Atendimento e atenção perfeitos. Super recomendo 😃😃😃"
	},
	{
		name: "Thiago Carvalho",
		reviews: 5,
		time: "1 ano atrás",
		edited: true,
		rating: 5,
		text: "Atendimento excelente, trabalhos executados nos nossos carros com excelência, o ambiente muito agradável para aguardar a finalização do carro."
	},
	{
		name: "Mayara Salgado",
		reviews: 5,
		time: "1 ano atrás",
		rating: 5,
		text: "Super indico eles são maravilhosos estão de parabéns pelo excelente trabalho."
	},
	{
		name: "Wilder Gaspar",
		reviews: 1,
		time: "1 ano atrás",
		rating: 5,
		text: "Recomendo a todos deixar seu carro sobre o cuidado deles. Serviço de excelência e ótimo atendimento."
	},
	{
		name: "Bianca Beatriz",
		reviews: 1,
		time: "1 ano atrás",
		rating: 5,
		text: "Trabalho IMPECÁVEL, sensação é de estar com carro zero, fresquinho da loja 😂 Vocês arrasaram, obrigada pelo ótimo trabalho 🫶",
		reactions: { heart: 1 }
	},
	{
		name: "Alessandra Corrêa",
		reviews: 3,
		photos: 1,
		time: "1 ano atrás",
		edited: true,
		rating: 5,
		text: "Maravilha... Equipe muito atenciosa e fazem um trabalho de ótima qualidade.",
		reactions: { pray: 1 }
	},
	{
		name: "Mk Mac",
		reviews: 1,
		time: "8 meses atrás",
		rating: 5,
		text: "Atendimento impecável! Sem palavras.",
		reactions: { heart: 1 }
	},
	{
		name: "SIMONE CRISTINA",
		reviews: 4,
		time: "1 ano atrás",
		rating: 5,
		text: "Trabalho excelente. Ótimos profissionais. Super recomendo!!!"
	},
	{
		name: "Fernando Freire",
		reviews: 3,
		time: "1 ano atrás",
		rating: 5,
		text: "Muito bom meu carro ficou top demais, ótimos produtos.",
		reactions: { pray: 1 }
	},
	{
		name: "Alexandra Amaral",
		reviews: 9,
		photos: 1,
		time: "1 ano atrás",
		rating: 5,
		text: "Atendimento ímpar!!! Ótimo serviço."
	},
	{
		name: "Igor Patrick",
		reviews: 2,
		photos: 2,
		time: "1 ano atrás",
		rating: 5,
		text: "Excelente lugar, limpinho, organizado, passa uma credibilidade excelente, e o melhor, serviço de primeira."
	},
	{
		name: "Cicero Junior",
		reviews: 3,
		time: "1 ano atrás",
		rating: 5,
		text: "Muito bom top super indico nota 10."
	},
	{
		name: "Lilian",
		reviews: 4,
		time: "1 ano atrás",
		rating: 5,
		text: "Excelente atendimento, ótimos profissionais. Super recomendo.",
		reactions: { pray: 1 }
	},
	{
		name: "Lucas Dibe",
		reviews: 3,
		time: "1 ano atrás",
		rating: 5,
		text: "Atendimento excelente. Lavagem top! Com certeza voltarei mais vezes."
	},
	{
		name: "Cristina Flores",
		reviews: 8,
		time: "1 ano atrás",
		rating: 5,
		text: "Excelente atendimento em todos os sentidos."
	},
	{
		name: "Lucas Pereira",
		reviews: 2,
		photos: 2,
		time: "1 ano atrás",
		rating: 5,
		text: "Lugar bacana, atenção da galera é show de bola. Muitas opções de cuidados com os autos."
	},
	{
		name: "Nancy Regiane Santos",
		reviews: 4,
		time: "1 ano atrás",
		edited: true,
		rating: 5,
		text: "Melhor lava rápido e estacionamento da cidade, os meninos super atenciosos e meu carro limpo e com segurança."
	},
	{
		name: "Adenilton Reis",
		reviews: 1,
		time: "1 ano atrás",
		rating: 5,
		text: "Excelente atendimento, serviço impecável."
	},
	{
		name: "Wane Kelly",
		reviews: 2,
		time: "1 ano atrás",
		rating: 5,
		text: "Trabalho muito bom. Prestativos. Super recomendo 👏🏼👏🏼."
	},
	{
		name: "Davi Craveiro",
		reviews: 3,
		time: "1 ano atrás",
		rating: 5,
		text: "Excelente atendimento e muito boa lavagem.",
		reactions: { pray: 1 }
	},
	{
		name: "Fred Medrado",
		reviews: 1,
		time: "1 ano atrás",
		rating: 5,
		text: "Trabalho top! Lavagem e a restauração do farol excelente 👏👏👏👏."
	},
	{
		name: "Gata Malhada",
		reviews: 1,
		time: "1 ano atrás",
		rating: 5,
		text: "Trabalho excelente, voltarei mais vezes.",
		reactions: { pray: 1 }
	},
	{
		name: "Mateus Quaresma",
		reviews: 3,
		time: "1 ano atrás",
		rating: 5,
		text: "Atendimento diferenciado. Espaço aconchegante para aguardar o veículo.",
		reactions: { pray: 1 }
	},
	{
		name: "Everty Matheus",
		reviews: 1,
		photos: 1,
		time: "1 ano atrás",
		rating: 5,
		text: "Muito bom, o melhor da cidade.",
		reactions: { pray: 1 }
	},
	{
		name: "Laina Anne",
		reviews: 1,
		time: "1 ano atrás",
		rating: 5,
		text: "Recomendo, trabalho muito bom.",
		reactions: { pray: 1 }
	},
	{
		name: "Camila Paula",
		reviews: 3,
		time: "1 ano atrás",
		rating: 5,
		text: "Ótimo atendimento!"
	},
	{
		name: "Silvia Mariano",
		reviews: 1,
		time: "1 ano atrás",
		rating: 5,
		text: "Gostei da lavagem, muito capricho!!"
	},
	{
		name: "Pedro Facioni",
		localGuide: true,
		reviews: 132,
		photos: 119,
		time: "1 ano atrás",
		rating: 5,
		text: "Lavagem muito boa."
	},
	{
		name: "Pedrooliveira Henrique",
		reviews: 1,
		time: "1 ano atrás",
		rating: 5,
		text: "Top excelente trabalho."
	},
	{
		name: "Jancarla Santos",
		reviews: 3,
		photos: 30,
		time: "1 ano atrás",
		rating: 5,
		text: "Trabalho excelente 😄🙂."
	},
	{
		name: "Cibele Doblas",
		reviews: 4,
		time: "1 ano atrás",
		rating: 5,
		text: "Super recomendo!!! 😁",
		reactions: { pray: 1 }
	},
	{
		name: "Leyla Macyel",
		reviews: 1,
		photos: 1,
		time: "1 ano atrás",
		rating: 5,
		text: "Nota 100000000..0000...00000"
	},
	{
		name: "Elemy Keila Lima",
		reviews: 6,
		photos: 4,
		time: "1 ano atrás",
		rating: 5,
		text: "Perfeito!",
		reactions: { pray: 1 }
	},
	{
		name: "Vitor Maia",
		reviews: 1,
		time: "1 ano atrás",
		rating: 5,
		text: "Excelente!"
	},
	{
		name: "Daiana Almeida",
		reviews: 3,
		time: "1 ano atrás",
		rating: 5,
		text: "Excelente."
	}
];
googleReviews.slice(0, 6).map((r) => ({
	name: r.name,
	role: `${r.reviews} ${r.reviews === 1 ? "avaliação" : "avaliações"}`,
	text: r.text
}));
var faqs = [
	{
		q: "Quanto tempo dura uma vitrificação?",
		a: "Nossas proteções cerâmicas duram de 12 a 36 meses, dependendo do pacote escolhido e da manutenção."
	},
	{
		q: "Preciso agendar?",
		a: "Sim. Trabalhamos com agenda controlada para garantir excelência em cada atendimento. Fale conosco pelo WhatsApp."
	},
	{
		q: "Onde vocês ficam?",
		a: "Av. Brasil, 225 — Centro, Extrema/MG. Estacionamento próprio no local."
	},
	{
		q: "Quais formas de pagamento?",
		a: "Dinheiro, PIX, débito e crédito. Parcelamos os pacotes acima de R$500."
	},
	{
		q: "O polimento remove todos os riscos?",
		a: "Riscos superficiais sim. Riscos profundos podem ser atenuados — avaliamos caso a caso antes do orçamento."
	}
];
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function Logo({ className, size = 40 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: "/coyoteslogo.png",
		alt: "Coyotes Lava Rápido",
		width: size,
		height: size,
		className: cn("object-contain select-none", className),
		draggable: false
	});
}
var nav = [
	{
		label: "Início",
		href: "#hero"
	},
	{
		label: "Serviços",
		href: "#servicos"
	},
	{
		label: "Galeria",
		href: "#galeria"
	},
	{
		label: "Avaliações",
		href: "#avaliacoes"
	},
	{
		label: "Contato",
		href: "#contato"
	}
];
function Header() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 24);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.header, {
		initial: {
			y: -30,
			opacity: 0
		},
		animate: {
			y: 0,
			opacity: 1
		},
		transition: {
			duration: .6,
			ease: "easeOut"
		},
		className: cn("fixed top-0 left-0 right-0 z-50 transition-all duration-500", scrolled ? "py-3" : "py-5"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: cn("grid grid-cols-[auto_1fr_auto] items-center gap-4 rounded-2xl px-4 py-2.5 transition-all duration-500", scrolled ? "glass-strong shadow-[0_20px_60px_-30px_rgba(0,0,0,0.8)]" : "bg-transparent border border-transparent"),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#hero",
						className: "flex items-center gap-3 group min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative shrink-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 rounded-full blur-lg bg-brand/40 opacity-0 group-hover:opacity-100 transition-opacity" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {
								size: 128,
								className: "relative h-32 w-32"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hidden sm:block min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display font-black text-[15px] tracking-tight leading-tight truncate",
								children: "COYOTES"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[10px] uppercase tracking-[0.18em] text-muted-foreground truncate",
								children: "Lava Rápido & Estética"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "hidden lg:flex items-center justify-center gap-1",
						children: nav.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: n.href,
							className: "px-3.5 py-2 text-[13px] text-muted-foreground hover:text-foreground transition-colors relative group",
							children: [n.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-x-3.5 -bottom-0.5 h-px bg-brand scale-x-0 group-hover:scale-x-100 transition-transform origin-left" })]
						}, n.href))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 justify-self-end",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: site.mapsUrl,
								target: "_blank",
								rel: "noreferrer",
								className: "hidden md:inline-flex h-10 items-center gap-2 rounded-full glass px-4 text-[12px] text-muted-foreground hover:text-foreground transition-colors",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3.5 w-3.5 text-brand" }), " Extrema/MG"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: site.whatsappUrl,
								target: "_blank",
								rel: "noreferrer",
								className: "hidden sm:inline-flex items-center gap-2 rounded-full bg-brand px-4 py-2.5 text-[13px] font-medium text-primary-foreground transition-all hover:scale-[1.03] hover:glow-red",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4" }), " Agendar"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "lg:hidden p-2 rounded-lg glass",
								onClick: () => setOpen((v) => !v),
								"aria-label": "Menu",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1.5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("block h-0.5 w-5 bg-foreground transition-transform", open && "translate-y-2 rotate-45") }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("block h-0.5 w-5 bg-foreground transition-opacity", open && "opacity-0") }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("block h-0.5 w-5 bg-foreground transition-transform", open && "-translate-y-2 -rotate-45") })
									]
								})
							})
						]
					})
				]
			}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: {
					opacity: 0,
					y: -10
				},
				animate: {
					opacity: 1,
					y: 0
				},
				className: "lg:hidden mt-2 glass-strong rounded-2xl p-3 flex flex-col",
				children: nav.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: n.href,
					onClick: () => setOpen(false),
					className: "px-3 py-3 text-sm text-muted-foreground hover:text-foreground",
					children: n.label
				}, n.href))
			})]
		})
	});
}
var phrases = [
	"Preparando o ambiente...",
	"Aquecendo os motores...",
	"Bem-vindo à Coyotes."
];
function Loader() {
	const [progress, setProgress] = (0, import_react.useState)(0);
	const [phraseIdx, setPhraseIdx] = (0, import_react.useState)(0);
	const [done, setDone] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: !done && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		initial: { opacity: 1 },
		exit: { opacity: 0 },
		transition: { duration: .8 },
		className: "fixed inset-0 z-[100] bg-background grid place-items-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(230,40,40,0.15),transparent_60%)]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 carbon opacity-40" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative flex flex-col items-center gap-8 px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							scale: .85,
							opacity: 0
						},
						animate: {
							scale: 1,
							opacity: 1
						},
						transition: { duration: .7 },
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 blur-2xl bg-brand/40 rounded-full animate-pulse-glow" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {
							size: 140,
							className: "relative h-32 w-32 drop-shadow-[0_0_30px_rgba(230,40,40,0.5)]"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-72 h-[2px] bg-white/10 rounded-full overflow-hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							className: "h-full bg-gradient-to-r from-brand via-brand-glow to-brand",
							style: { width: `${progress * 100}%` }
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
						mode: "wait",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
							initial: {
								opacity: 0,
								y: 6
							},
							animate: {
								opacity: 1,
								y: 0
							},
							exit: {
								opacity: 0,
								y: -6
							},
							className: "text-xs text-muted-foreground tracking-[0.3em] uppercase",
							children: phrases[phraseIdx]
						}, phraseIdx)
					})
				]
			})
		]
	}) });
}
var mavecao_default = "/assets/mavecao-BfNv-9OW.png";
var coyotes_default = "/assets/coyotes-if665bKI.png";
function Hero() {
	const ref = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"]
	});
	const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
	const opacity = useTransform(scrollYProgress, [0, .8], [1, 0]);
	const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
	const mx = useMotionValue(0);
	const my = useMotionValue(0);
	const px = useSpring(useTransform(mx, [-1, 1], [-20, 20]), {
		stiffness: 60,
		damping: 20
	});
	const py = useSpring(useTransform(my, [-1, 1], [-15, 15]), {
		stiffness: 60,
		damping: 20
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "hero",
		ref,
		onMouseMove: (e) => {
			const r = e.currentTarget.getBoundingClientRect();
			mx.set(((e.clientX - r.left) / r.width - .5) * 2);
			my.set(((e.clientY - r.top) / r.height - .5) * 2);
		},
		className: "relative min-h-screen w-full overflow-hidden grain",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				style: {
					y,
					scale
				},
				className: "absolute inset-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
						src: mavecao_default,
						alt: "Ford Maverick clássico do cliente Coyotes",
						fetchPriority: "high",
						className: "h-full w-full object-cover object-center",
						style: {
							x: px,
							y: py
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(5,5,5,0.9)_100%)]" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 overflow-hidden pointer-events-none",
				children: Array.from({ length: 20 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
					className: "absolute h-1 w-1 rounded-full bg-brand/60",
					style: {
						left: `${i * 53 % 100}%`,
						top: `${i * 31 % 100}%`
					},
					animate: {
						y: [
							0,
							-30,
							0
						],
						opacity: [
							.2,
							.8,
							.2
						]
					},
					transition: {
						duration: 4 + i % 5,
						repeat: Infinity,
						delay: i * .2
					}
				}, i))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				style: { opacity },
				className: "relative z-10 min-h-screen flex flex-col items-center justify-center px-6 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							delay: .3,
							duration: .8
						},
						className: "inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-muted-foreground mb-24",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-brand animate-pulse" }), site.tagline]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
						src: coyotes_default,
						alt: "Coyotes",
						initial: {
							opacity: 0,
							y: 30,
							scale: .9
						},
						animate: {
							opacity: 1,
							y: 0,
							scale: 1
						},
						transition: {
							delay: .5,
							duration: 1,
							ease: "easeOut"
						},
						className: "w-[58vw] max-w-[460px] md:w-[40vw] h-auto select-none drop-shadow-[0_8px_30px_rgba(0,0,0,0.55)]",
						draggable: false
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							delay: .8,
							duration: .8
						},
						className: "mt-14 max-w-xl text-base md:text-lg text-muted-foreground",
						children: site.subtitle
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							delay: 1.1,
							duration: .8
						},
						className: "mt-10 flex flex-col sm:flex-row items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: site.whatsappUrl,
							target: "_blank",
							rel: "noreferrer",
							className: "group inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-medium text-primary-foreground transition-all hover:scale-105 hover:glow-red",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4" }),
								"Agendar pelo WhatsApp",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" })
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#servicos",
							className: "inline-flex items-center gap-2 rounded-full glass px-7 py-3.5 text-sm font-medium hover:bg-white/10 transition-colors",
							children: "Ver Serviços"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: { opacity: 0 },
						animate: { opacity: 1 },
						transition: { delay: 2 },
						className: "absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs text-muted-foreground uppercase tracking-widest",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Scroll" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							animate: { y: [
								0,
								8,
								0
							] },
							transition: {
								duration: 1.6,
								repeat: Infinity
							},
							className: "h-8 w-px bg-gradient-to-b from-brand to-transparent"
						})]
					})
				]
			})
		]
	});
}
var fachada_default = "/assets/fachada-fGzzzvCu.png";
var variants = {
	hidden: {
		opacity: 0,
		y: 30,
		filter: "blur(10px)"
	},
	visible: {
		opacity: 1,
		y: 0,
		filter: "blur(0px)",
		transition: {
			duration: .8,
			ease: [
				.22,
				1,
				.36,
				1
			]
		}
	}
};
function Reveal({ children, delay = 0, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		variants,
		initial: "hidden",
		whileInView: "visible",
		viewport: {
			once: true,
			margin: "-80px"
		},
		transition: { delay },
		className,
		children
	});
}
function SectionHeader({ eyebrow, title, subtitle }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-2xl text-center mb-16",
		children: [
			eyebrow && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1 w-1 rounded-full bg-brand" }), eyebrow]
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: .1,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-4xl md:text-6xl font-bold tracking-tighter",
					children: title
				})
			}),
			subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: .2,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 text-base text-muted-foreground",
					children: subtitle
				})
			})
		]
	});
}
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "sobre",
		className: "relative py-32 px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: "Sobre a Coyotes",
				title: "Uma garagem obcecada por detalhes",
				subtitle: "No coração de Extrema/MG, unimos técnica, produtos profissionais e um cuidado quase artesanal com cada veículo que passa por aqui."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid lg:grid-cols-12 gap-6 items-stretch",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						x: -30
					},
					whileInView: {
						opacity: 1,
						x: 0
					},
					viewport: {
						once: true,
						margin: "-80px"
					},
					transition: {
						duration: .9,
						ease: [
							.22,
							1,
							.36,
							1
						]
					},
					className: "lg:col-span-7 relative rounded-[2rem] overflow-hidden aspect-[4/3] glass",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
							src: fachada_default,
							alt: "Fachada Coyotes Lava Rápido — Av. Brasil, 225, Extrema/MG",
							className: "absolute inset-0 h-full w-full object-cover",
							initial: { scale: 1.15 },
							whileInView: { scale: 1 },
							viewport: { once: true },
							transition: {
								duration: 2.4,
								ease: "easeOut"
							},
							loading: "lazy"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-transparent" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute bottom-6 left-6 right-6 flex flex-wrap gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
									icon: MapPin,
									children: [
										site.address,
										" · ",
										site.city
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									icon: Phone,
									children: site.phone
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									icon: Instagram,
									children: site.instagramHandle
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute top-6 left-6 inline-flex items-center gap-2 rounded-full glass-red px-3 py-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-brand animate-pulse" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] uppercase tracking-[0.25em] text-foreground/90",
								children: "Estabelecimento oficial"
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						x: 30
					},
					whileInView: {
						opacity: 1,
						x: 0
					},
					viewport: {
						once: true,
						margin: "-80px"
					},
					transition: {
						duration: .9,
						delay: .1
					},
					className: "lg:col-span-5 flex flex-col gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "glass-strong rounded-[2rem] p-8 relative overflow-hidden grain flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-24 -right-24 w-64 h-64 rounded-full bg-brand/20 blur-3xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
									className: "font-display text-2xl font-bold leading-tight",
									children: [
										"Mais que um lava-rápido:",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-gradient",
											children: "uma experiência."
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-sm text-muted-foreground leading-relaxed",
									children: "Somos referência em estética automotiva na região de Extrema/MG. Atendemos desde a lavagem semanal do dia a dia até proteção cerâmica de longa duração em veículos premium — sempre com o mesmo padrão de acabamento."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm text-muted-foreground leading-relaxed",
									children: "Nosso espaço conta com estacionamento próprio, ambiente de espera confortável e uma equipe treinada para tratar cada carro como se fosse o nosso."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-6 grid grid-cols-3 gap-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
											value: "4.9★",
											label: "Google"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
											value: "+70",
											label: "Avaliações"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
											value: "+5",
											label: "Anos"
										})
									]
								})
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${site.address}, Extrema, MG`)}`,
						target: "_blank",
						rel: "noreferrer",
						className: "group relative rounded-2xl glass-red px-6 py-4 flex items-center justify-between hover:glow-red transition-all",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[10px] uppercase tracking-[0.25em] text-muted-foreground",
							children: "Onde estamos"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-sm font-semibold",
							children: [site.address, " · Centro · Extrema/MG"]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-5 w-5 text-brand transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" })]
					})]
				})]
			})]
		})
	});
}
function Badge({ icon: Icon, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "inline-flex items-center gap-1.5 rounded-full glass-strong px-3 py-1.5 text-[11px] text-foreground/90",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-3 w-3 text-brand" }), children]
	});
}
function Metric({ value, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl glass px-3 py-3 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "font-display text-lg font-black text-gradient",
			children: value
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-[9px] uppercase tracking-widest text-muted-foreground mt-0.5",
			children: label
		})]
	});
}
var icons = [
	Sparkles,
	Gem,
	Users,
	Wrench,
	Award,
	ShieldCheck
];
function Differentiators() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative py-32 px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: "Diferenciais",
				title: "Padrão que define excelência",
				subtitle: "Cada detalhe pensado para que seu veículo receba o cuidado que merece."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5",
				children: differentiators.map((d, i) => {
					const Icon = icons[i] ?? Check;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * .05,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							whileHover: { y: -6 },
							transition: {
								type: "spring",
								stiffness: 200,
								damping: 20
							},
							className: "group relative glass rounded-3xl p-8 h-full overflow-hidden",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-px rounded-3xl bg-gradient-to-br from-brand/40 to-transparent blur-xl" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "h-12 w-12 rounded-2xl glass grid place-items-center mb-6 group-hover:bg-brand/20 transition-colors",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5 text-brand" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-xl font-semibold mb-2",
										children: d.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-muted-foreground leading-relaxed",
										children: d.desc
									})
								]
							})]
						})
					}, d.title);
				})
			})]
		})
	});
}
var categories = [
	"Todos",
	"Lavagem",
	"Polimento",
	"Vitrificação",
	"Estética",
	"Extras"
];
var catIcons = {
	Lavagem: Droplets,
	Polimento: Sparkles,
	Vitrificação: Shield,
	Estética: Scissors,
	Extras: Plus
};
function Services() {
	const [filter, setFilter] = (0, import_react.useState)("Todos");
	const list = (0, import_react.useMemo)(() => filter === "Todos" ? services : services.filter((service) => service.category === filter), [filter]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "servicos",
		className: "relative px-6 py-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-0 top-40 -z-10 h-96 bg-[radial-gradient(ellipse_at_center,rgba(230,40,40,0.08),transparent_70%)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
					eyebrow: "Serviços",
					title: "O tratamento certo para cada veículo",
					subtitle: "Conheça os serviços oferecidos pelo Coyotes Lava Rápido e Estética."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LayoutGroup, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-12 flex flex-wrap justify-center gap-2",
					children: categories.map((category) => {
						const active = filter === category;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setFilter(category),
							className: "relative rounded-full px-5 py-2 text-sm transition-colors",
							children: [active && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
								layoutId: "cat-pill",
								className: "absolute inset-0 rounded-full bg-brand",
								transition: {
									type: "spring",
									stiffness: 300,
									damping: 30
								}
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: active ? "relative font-medium text-primary-foreground" : "relative text-muted-foreground hover:text-foreground",
								children: category
							})]
						}, category);
					})
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					layout: true,
					className: "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
						mode: "popLayout",
						children: list.map((service, index) => {
							const Icon = catIcons[service.category] ?? Droplets;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
								layout: true,
								initial: {
									opacity: 0,
									y: 20,
									filter: "blur(10px)"
								},
								animate: {
									opacity: 1,
									y: 0,
									filter: "blur(0px)"
								},
								exit: {
									opacity: 0,
									y: -10,
									filter: "blur(10px)"
								},
								transition: {
									duration: .4,
									delay: index * .02
								},
								whileHover: { y: -4 },
								className: "group relative min-h-[230px] overflow-hidden rounded-2xl p-6 glass",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-24 -top-24 h-48 w-48 rounded-full bg-brand/10 opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative flex h-full flex-col",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mb-8 flex items-start justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "grid h-11 w-11 place-items-center rounded-xl glass",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4 text-brand" })
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[10px] uppercase tracking-widest text-muted-foreground",
												children: service.category
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-display text-xl font-semibold",
											children: service.name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 text-sm leading-relaxed text-muted-foreground",
											children: service.description
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-auto pt-8",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px bg-gradient-to-r from-brand/50 via-white/10 to-transparent" })
										})
									]
								})]
							}, service.name);
						})
					})
				})
			]
		})]
	});
}
var images = [
	"/assets/gallery-1-Cq3rMSOD.jpeg",
	"/assets/gallery-2-CkVdCmUW.jpeg",
	"/assets/gallery-3-Crp2Pba5.jpeg",
	"/assets/gallery-4-8FoxCX6q.jpeg",
	"/assets/gallery-5-DMXfR2dx.jpeg",
	"/assets/gallery-6-j5V-MxHu.png"
];
function Gallery() {
	const [open, setOpen] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "galeria",
		className: "relative py-32 px-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: "Galeria",
				title: "Resultados que falam por si",
				subtitle: "Uma coleção de trabalhos realizados com o padrão Coyotes."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 [grid-auto-flow:dense]",
				children: images.map((src, i) => {
					const span = [
						"md:col-span-2 md:row-span-2",
						"",
						"md:row-span-2",
						"",
						"md:col-span-2",
						""
					][i];
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.button, {
						initial: {
							opacity: 0,
							scale: .95
						},
						whileInView: {
							opacity: 1,
							scale: 1
						},
						viewport: {
							once: true,
							margin: "-40px"
						},
						transition: {
							duration: .6,
							delay: i * .06
						},
						onClick: () => setOpen(i),
						className: `group relative overflow-hidden rounded-2xl bg-card aspect-square ${span}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src,
								alt: `Trabalho ${i + 1}`,
								loading: "lazy",
								className: "absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs uppercase tracking-widest text-brand",
									children: "Ver detalhes"
								})
							})
						]
					}, i);
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: open !== null && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			initial: { opacity: 0 },
			animate: { opacity: 1 },
			exit: { opacity: 0 },
			className: "fixed inset-0 z-[80] grid place-items-center bg-background/80 backdrop-blur-xl p-6",
			onClick: () => setOpen(null),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
					initial: {
						scale: .9,
						opacity: 0
					},
					animate: {
						scale: 1,
						opacity: 1
					},
					exit: {
						scale: .9,
						opacity: 0
					},
					src: images[open],
					alt: "Preview",
					onClick: (e) => e.stopPropagation(),
					className: "max-h-[85vh] max-w-[90vw] rounded-2xl object-contain"
				}, open),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setOpen(null),
					className: "absolute top-6 right-6 h-11 w-11 rounded-full glass-strong grid place-items-center hover:bg-white/10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: (e) => {
						e.stopPropagation();
						setOpen((v) => v === null ? 0 : (v - 1 + images.length) % images.length);
					},
					className: "absolute left-4 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full glass-strong grid place-items-center hover:bg-white/10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "h-5 w-5" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: (e) => {
						e.stopPropagation();
						setOpen((v) => v === null ? 0 : (v + 1) % images.length);
					},
					className: "absolute right-4 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full glass-strong grid place-items-center hover:bg-white/10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-5 w-5" })
				})
			]
		}) })]
	});
}
function Counter({ value }) {
	const ref = (0, import_react.useRef)(null);
	const inView = useInView(ref, {
		once: true,
		margin: "-40px"
	});
	const [display, setDisplay] = (0, import_react.useState)(value);
	(0, import_react.useEffect)(() => {
		if (!inView) return;
		const match = value.match(/([+]?)(\d+(?:\.\d+)?)(.*)/);
		if (!match) return;
		const [, prefix, num, suffix] = match;
		const target = parseFloat(num);
		const start = performance.now();
		const dur = 1600;
		const tick = (t) => {
			const p = Math.min(1, (t - start) / dur);
			const eased = 1 - Math.pow(1 - p, 3);
			const current = target * eased;
			const formatted = num.includes(".") ? current.toFixed(1) : Math.floor(current).toLocaleString("pt-BR");
			setDisplay(`${prefix}${formatted}${suffix}`);
			if (p < 1) requestAnimationFrame(tick);
		};
		requestAnimationFrame(tick);
	}, [inView, value]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		ref,
		children: display
	});
}
function Stats() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "sobre",
		className: "relative py-32 px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-6xl",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "glass-strong rounded-[2rem] p-10 md:p-16 grain relative overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-32 -left-32 w-96 h-96 rounded-full bg-brand/20 blur-3xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative grid grid-cols-2 md:grid-cols-4 gap-8",
					children: stats.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						transition: {
							delay: i * .1,
							duration: .6
						},
						className: "text-center md:text-left",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-4xl md:text-6xl font-bold text-gradient",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, { value: s.value })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 text-xs md:text-sm text-muted-foreground uppercase tracking-widest",
							children: s.label
						})]
					}, s.label))
				})]
			})
		})
	});
}
function Process() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative py-32 px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-5xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: "Processo",
				title: "Como cuidamos do seu carro"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-brand/30 to-transparent md:-translate-x-1/2" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-10 md:space-y-20",
					children: process.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							x: i % 2 === 0 ? -30 : 30
						},
						whileInView: {
							opacity: 1,
							x: 0
						},
						viewport: {
							once: true,
							margin: "-80px"
						},
						transition: { duration: .7 },
						className: `relative pl-16 md:pl-0 md:grid md:grid-cols-2 md:gap-16 items-center ${i % 2 === 1 ? "md:[&>*:first-child]:col-start-2" : ""}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: i % 2 === 1 ? "md:text-right" : "",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "inline-flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-5xl md:text-7xl font-bold text-brand/30",
									children: p.step
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-2xl font-semibold",
									children: p.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted-foreground max-w-xs mt-1",
									children: p.desc
								})] })]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute left-6 md:left-1/2 top-6 h-4 w-4 rounded-full bg-brand animate-pulse-glow md:-translate-x-1/2" })]
					}, p.step))
				})]
			})]
		})
	});
}
function useSlidesPerView() {
	const [n, setN] = (0, import_react.useState)(3);
	(0, import_react.useEffect)(() => {
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
function Testimonials() {
	const spv = useSlidesPerView();
	const [page, setPage] = (0, import_react.useState)(0);
	const total = googleReviews.length;
	const pages = Math.max(1, Math.ceil(total / spv));
	(0, import_react.useEffect)(() => {
		setPage(0);
	}, [spv]);
	const timer = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		timer.current = window.setInterval(() => setPage((p) => (p + 1) % pages), 6500);
		return () => {
			if (timer.current) window.clearInterval(timer.current);
		};
	}, [pages]);
	const visible = googleReviews.slice(page * spv, page * spv + spv);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "avaliacoes",
		className: "relative py-32 px-6 overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-24 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-brand/10 blur-[120px] pointer-events-none" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center mb-14",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-[11px] uppercase tracking-[0.25em] text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoogleGIcon, {}), " Google Reviews"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 flex justify-center gap-1",
						children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-6 w-6 fill-brand text-brand drop-shadow-[0_0_10px_rgba(230,40,40,0.6)]" }, i))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-4 font-display font-bold text-[clamp(2.2rem,5vw,4rem)] leading-[0.95] tracking-tighter",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gradient",
							children: site.rating.toString().replace(".", ",")
						}), " de 5 estrelas"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-sm md:text-base text-muted-foreground max-w-2xl mx-auto",
						children: [
							"Mais de ",
							site.reviewsCount,
							" avaliações reais. Cada comentário abaixo foi publicado por clientes reais da Coyotes no Google — sem edição, sem filtro."
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, {
						className: "absolute -top-8 -left-4 h-40 w-40 text-brand/10 pointer-events-none",
						strokeWidth: 1
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative overflow-hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
							mode: "wait",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								initial: {
									opacity: 0,
									x: 40
								},
								animate: {
									opacity: 1,
									x: 0
								},
								exit: {
									opacity: 0,
									x: -40
								},
								transition: {
									duration: .5,
									ease: [
										.22,
										1,
										.36,
										1
									]
								},
								className: "grid gap-5",
								style: { gridTemplateColumns: `repeat(${spv}, minmax(0, 1fr))` },
								children: visible.map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReviewCard, { review: r }, `${page}-${i}`))
							}, page)
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between mt-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex gap-1.5",
							children: Array.from({ length: pages }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setPage(i),
								"aria-label": `Página ${i + 1}`,
								className: `h-1.5 rounded-full transition-all ${i === page ? "w-8 bg-brand" : "w-1.5 bg-white/20 hover:bg-white/40"}`
							}, i))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setPage((p) => (p - 1 + pages) % pages),
								className: "h-11 w-11 rounded-full glass grid place-items-center hover:bg-white/10 transition-colors",
								"aria-label": "Anterior",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "h-4 w-4" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setPage((p) => (p + 1) % pages),
								className: "h-11 w-11 rounded-full bg-brand grid place-items-center hover:glow-red transition-all",
								"aria-label": "Próxima",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-4 w-4 text-primary-foreground" })
							})]
						})]
					})
				]
			})]
		})]
	});
}
function ReviewCard({ review }) {
	const initial = review.name.charAt(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
		whileHover: { y: -6 },
		transition: {
			type: "spring",
			stiffness: 220,
			damping: 22
		},
		className: "group relative glass-strong rounded-3xl p-7 h-full flex flex-col overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-px rounded-3xl bg-gradient-to-br from-brand/30 via-transparent to-brand/20 blur-md" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, {
				className: "absolute top-4 right-4 h-24 w-24 text-brand/5 pointer-events-none",
				strokeWidth: 1
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative flex items-start gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-12 w-12 rounded-full bg-gradient-to-br from-brand to-brand-glow grid place-items-center text-primary-foreground font-bold text-lg shrink-0 shadow-[0_0_20px_-4px_rgba(230,40,40,0.6)]",
						children: initial
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1.5 flex-wrap",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold text-sm truncate",
								children: review.name
							}), review.localGuide && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1 rounded-full bg-white/8 px-1.5 py-0.5 text-[9px] uppercase tracking-widest text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "h-2.5 w-2.5" }), " Local Guide"]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-[11px] text-muted-foreground flex items-center gap-1.5 flex-wrap",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								review.reviews,
								" ",
								review.reviews === 1 ? "avaliação" : "avaliações"
							] }), review.photos ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "·" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-0.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, { className: "h-2.5 w-2.5" }), review.photos]
							})] }) : null]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoogleGIcon, { className: "h-4 w-4 shrink-0" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mt-4 flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex gap-0.5",
					children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-3.5 w-3.5 fill-brand text-brand" }, i))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "text-[11px] text-muted-foreground",
					children: [review.edited ? "Editado · " : "", review.time]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "relative mt-4 text-[14px] leading-relaxed text-foreground/90 flex-1",
				children: [
					"“",
					review.text,
					"”"
				]
			}),
			review.reactions && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mt-4 pt-4 border-t border-white/5 flex items-center gap-3 text-[11px] text-muted-foreground",
				children: [review.reactions.heart ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "inline-flex items-center gap-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "h-3 w-3 fill-brand text-brand" }),
						" ",
						review.reactions.heart
					]
				}) : null, review.reactions.pray ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "inline-flex items-center gap-1",
					children: ["🙏 ", review.reactions.pray]
				}) : null]
			})
		]
	});
}
function GoogleGIcon({ className = "h-3.5 w-3.5" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 24 24",
		className,
		"aria-hidden": true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: "#4285F4",
				d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.75h3.57c2.08-1.92 3.28-4.74 3.28-8.07z"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: "#34A853",
				d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.75c-.99.66-2.26 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: "#FBBC05",
				d: "M5.84 14.12c-.22-.66-.35-1.36-.35-2.12s.13-1.46.35-2.12V7.04H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.96l3.66-2.84z"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: "#EA4335",
				d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.04l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38z"
			})
		]
	});
}
function Location() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contato",
		className: "relative py-32 px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: "Localização",
				title: "Venha nos visitar",
				subtitle: "Estamos no coração de Extrema/MG, com estacionamento próprio."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid lg:grid-cols-5 gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						x: -20
					},
					whileInView: {
						opacity: 1,
						x: 0
					},
					viewport: { once: true },
					transition: { duration: .7 },
					className: "lg:col-span-3 relative rounded-3xl overflow-hidden glass aspect-[4/3] lg:aspect-auto min-h-[440px]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
							title: "Mapa Coyotes — Av. Brasil, 225, Extrema/MG",
							src: site.mapsEmbed,
							className: "absolute inset-0 h-full w-full grayscale contrast-125 opacity-90",
							loading: "lazy",
							referrerPolicy: "no-referrer-when-downgrade"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 pointer-events-none bg-gradient-to-tr from-background/70 via-transparent to-brand/10" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute top-5 left-5 glass-strong rounded-full px-4 py-2 flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-brand animate-pulse" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[11px] uppercase tracking-widest",
								children: "Aberto agora"
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						x: 20
					},
					whileInView: {
						opacity: 1,
						x: 0
					},
					viewport: { once: true },
					transition: {
						duration: .7,
						delay: .1
					},
					className: "lg:col-span-2 glass-strong rounded-3xl p-8 flex flex-col",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 mb-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {
								size: 48,
								className: "h-12 w-12"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display text-xl font-bold leading-tight",
								children: site.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[11px] uppercase tracking-widest text-muted-foreground",
								children: "Lava Rápido & Estética"
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-4 flex-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									icon: MapPin,
									label: "Endereço",
									value: `${site.address} · ${site.district}`,
									extra: `${site.city} · CEP ${site.cep}`
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									icon: Phone,
									label: "Telefone",
									value: site.phone
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									icon: Clock,
									label: "Horário",
									value: site.hours
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									icon: Instagram,
									label: "Instagram",
									value: site.instagramHandle
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: site.mapsUrl,
								target: "_blank",
								rel: "noreferrer",
								className: "flex items-center justify-between rounded-2xl glass px-5 py-3.5 hover:bg-white/10 transition-colors",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm font-medium",
									children: "Abrir no Google Maps"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-4 w-4 text-brand" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: site.whatsappUrl,
								target: "_blank",
								rel: "noreferrer",
								className: "flex items-center justify-between rounded-2xl bg-brand px-5 py-3.5 hover:glow-red transition-all",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm font-medium text-primary-foreground",
									children: "Falar no WhatsApp"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4 text-primary-foreground" })]
							})]
						})
					]
				})]
			})]
		})
	});
}
function Row({ icon: Icon, label, value, extra }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-start gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "h-9 w-9 rounded-lg glass grid place-items-center shrink-0",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4 text-brand" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-[10px] uppercase tracking-widest text-muted-foreground",
					children: label
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-sm font-medium",
					children: value
				}),
				extra && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs text-muted-foreground mt-0.5",
					children: extra
				})
			]
		})]
	});
}
function FAQ() {
	const [open, setOpen] = (0, import_react.useState)(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative py-32 px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-3xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: "FAQ",
				title: "Perguntas frequentes"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-3",
				children: faqs.map((f, i) => {
					const isOpen = open === i;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 10
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						transition: { delay: i * .05 },
						className: "glass rounded-2xl overflow-hidden",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setOpen(isOpen ? null : i),
							className: "w-full flex items-center justify-between gap-4 px-6 py-5 text-left",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium",
								children: f.q
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
								animate: { rotate: isOpen ? 45 : 0 },
								className: "h-8 w-8 rounded-full glass grid place-items-center shrink-0",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4 text-brand" })
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
							initial: false,
							children: isOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								initial: {
									height: 0,
									opacity: 0
								},
								animate: {
									height: "auto",
									opacity: 1
								},
								exit: {
									height: 0,
									opacity: 0
								},
								transition: {
									duration: .3,
									ease: "easeOut"
								},
								className: "overflow-hidden",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "px-6 pb-6 text-sm text-muted-foreground leading-relaxed",
									children: f.a
								})
							})
						})]
					}, f.q);
				})
			})]
		})
	});
}
var cta_bg_default = "/assets/cta-bg-9ZWRF7jl.jpg";
function CTA() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative min-h-[80vh] flex items-center px-6 py-32 overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "absolute inset-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: cta_bg_default,
				alt: "",
				className: "h-full w-full object-cover",
				loading: "lazy"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/40" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-5xl text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h2, {
					initial: {
						opacity: 0,
						y: 30,
						filter: "blur(20px)"
					},
					whileInView: {
						opacity: 1,
						y: 0,
						filter: "blur(0px)"
					},
					viewport: { once: true },
					transition: { duration: 1 },
					className: "font-display font-bold text-[clamp(2.5rem,8vw,7rem)] leading-[0.95] tracking-tighter",
					children: [
						"Seu carro merece ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gradient",
							children: "mais que uma lavagem."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
					initial: {
						opacity: 0,
						y: 20
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					transition: {
						delay: .2,
						duration: .8
					},
					className: "mt-6 text-lg text-muted-foreground",
					children: "Ele merece uma experiência."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.a, {
					href: site.whatsappUrl,
					target: "_blank",
					rel: "noreferrer",
					initial: {
						opacity: 0,
						y: 20
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					transition: {
						delay: .4,
						duration: .8
					},
					whileHover: { scale: 1.04 },
					className: "mt-12 inline-flex items-center gap-3 rounded-full bg-brand px-10 py-5 text-base font-medium text-primary-foreground animate-pulse-glow",
					children: ["Agendar Agora", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-5 w-5" })]
				})
			]
		})]
	});
}
var nova_nexo_logo_default = "/assets/nova-nexo-logo-6L4Oqsqi.png";
var NOVA_NEXO_INSTAGRAM = "https://www.instagram.com/novanexoofc";
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "relative border-t border-white/5 px-6 pb-10 pt-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/60 to-transparent" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-7xl items-start gap-12 md:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {
								size: 56,
								className: "h-14 w-14"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display text-xl font-black leading-tight",
								children: site.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[11px] uppercase tracking-widest text-muted-foreground",
								children: site.tagline
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground",
							children: "Detalhamento automotivo premium em Extrema/MG. Cada carro é tratado como se fosse o nosso."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 flex gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: site.instagram,
									target: "_blank",
									rel: "noreferrer",
									"aria-label": "Instagram do Coyotes Lava Rápido",
									className: "grid h-11 w-11 place-items-center rounded-full glass transition-colors hover:bg-white/10",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "h-4 w-4" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: site.whatsappUrl,
									target: "_blank",
									rel: "noreferrer",
									"aria-label": "WhatsApp do Coyotes Lava Rápido",
									className: "grid h-11 w-11 place-items-center rounded-full bg-brand transition-all hover:glow-red",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4 text-primary-foreground" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: `tel:${site.phoneRaw}`,
									"aria-label": "Telefone do Coyotes Lava Rápido",
									className: "grid h-11 w-11 place-items-center rounded-full glass transition-colors hover:bg-white/10",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" })
								})
							]
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2.5 text-sm text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mb-3 text-[11px] uppercase tracking-widest text-foreground/80",
								children: "Contato"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-0.5 h-3.5 w-3.5 shrink-0 text-brand" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
									site.address,
									" · ",
									site.district,
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									site.city,
									" · CEP ",
									site.cep
								] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-3.5 w-3.5 text-brand" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: site.phone })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "h-3.5 w-3.5 text-brand" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: site.instagramHandle })]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex md:justify-end",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: NOVA_NEXO_INSTAGRAM,
							target: "_blank",
							rel: "noreferrer",
							"aria-label": "Conheça a Nova Nexo",
							className: "group relative inline-flex items-center gap-4 overflow-hidden rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-[#07131f] via-[#091a2a] to-[#071019] px-5 py-3 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:shadow-[0_0_30px_rgba(0,180,255,.18)]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-cyan-400/10 to-cyan-500/5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: nova_nexo_logo_default,
									alt: "Nova Nexo",
									className: "relative h-11 w-11 object-contain transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative flex flex-col leading-none",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10px] uppercase tracking-[0.35em] text-gray-500",
										children: "Desenvolvido por"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-1 font-display text-base font-bold tracking-[0.18em] text-cyan-300 transition-colors group-hover:text-cyan-200",
										children: "NOVA NEXO"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
									xmlns: "http://www.w3.org/2000/svg",
									viewBox: "0 0 24 24",
									fill: "none",
									stroke: "currentColor",
									strokeWidth: "2",
									className: "relative ml-1 h-4 w-4 text-cyan-400 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M7 17L17 7" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M8 7h9v9" })]
								})
							]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto mt-14 flex max-w-7xl flex-col justify-between gap-3 border-t border-white/5 pt-6 text-xs text-muted-foreground md:flex-row md:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" ",
					site.fullName,
					". Todos os direitos reservados."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: NOVA_NEXO_INSTAGRAM,
					target: "_blank",
					rel: "noreferrer",
					"aria-label": "Site desenvolvido pela Nova Nexo",
					className: "inline-flex items-center gap-1.5 transition-colors hover:text-cyan-400",
					children: ["Desenvolvido por", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
						className: "font-semibold tracking-wider text-foreground",
						children: "NOVA NEXO"
					})]
				})]
			})
		]
	});
}
function WhatsFloat() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.a, {
		href: site.whatsappUrl,
		target: "_blank",
		rel: "noreferrer",
		initial: {
			scale: 0,
			opacity: 0
		},
		animate: {
			scale: 1,
			opacity: 1
		},
		transition: {
			delay: 2.6,
			type: "spring",
			stiffness: 200
		},
		className: "fixed bottom-6 right-6 z-40 group",
		"aria-label": "Falar no WhatsApp",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 rounded-full bg-brand animate-ping opacity-30" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "relative flex items-center gap-2 rounded-full bg-brand pl-4 pr-5 py-3 text-primary-foreground shadow-lg glow-red",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-5 w-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "hidden group-hover:inline text-sm font-medium",
				children: "Fale conosco"
			})]
		})]
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Loader, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Differentiators, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Services, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gallery, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stats, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Process, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Location, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQ, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTA, {})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsFloat, {})
	] });
}
//#endregion
export { Index as component };
