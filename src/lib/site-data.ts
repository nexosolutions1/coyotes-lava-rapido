// Central site data. All content lives here so it can later be
// swapped for a CMS/admin panel without touching components.

export type ServiceCategory =
  | "Lavagem"
  | "Polimento"
  | "Vitrificação"
  | "Estética"
  | "Extras";

export interface Service {
  name: string;
  price: number;
  category: ServiceCategory;
  description: string;
}

export const site = {
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
  reviewsCount: 70,
};

export const differentiators = [
  { title: "Atendimento Premium", desc: "Cada cliente tratado como único — do agendamento à entrega." },
  { title: "Produtos Profissionais", desc: "Linhas certificadas de detalhamento automotivo importadas." },
  { title: "Equipe Especializada", desc: "Detalhadores treinados para veículos exigentes." },
  { title: "Estrutura Completa", desc: "Estacionamento coberto, ambiente climatizado e área de espera." },
  { title: "Acabamento Impecável", desc: "Obsessão pelos detalhes que ninguém mais percebe." },
  { title: "Confiança Comprovada", desc: "4,9 ★ no Google com mais de 70 avaliações reais." },
];

export const services: Service[] = [
  { name: "Ducha P", price: 40, category: "Lavagem", description: "Lavagem externa rápida para veículos pequenos." },
  { name: "Ducha G", price: 55, category: "Lavagem", description: "Lavagem externa rápida para veículos grandes." },
  { name: "Padrão G", price: 85, category: "Lavagem", description: "Lavagem completa externa e interna — porte grande." },
  { name: "Padrão GG", price: 100, category: "Lavagem", description: "Lavagem completa externa e interna — porte extra." },
  { name: "Cera", price: 30, category: "Estética", description: "Aplicação de cera protetora para brilho intenso." },
  { name: "Polimento de Farol", price: 120, category: "Polimento", description: "Recuperação da transparência dos faróis." },
  { name: "Higienização só Banco", price: 220, category: "Estética", description: "Limpeza profunda de bancos com produtos técnicos." },
  { name: "Higienização Completa", price: 350, category: "Estética", description: "Higienização integral do interior do veículo." },
  { name: "Polimento de Lataria P", price: 450, category: "Polimento", description: "Correção de pintura para veículos pequenos." },
  { name: "Polimento de Lataria G", price: 600, category: "Polimento", description: "Correção de pintura para veículos grandes." },
  { name: "Vitrificação P", price: 1600, category: "Vitrificação", description: "Proteção cerâmica de longa duração — porte pequeno." },
  { name: "Vitrificação G", price: 1900, category: "Vitrificação", description: "Proteção cerâmica de longa duração — porte grande." },
  { name: "Descontaminação de Vidros", price: 30, category: "Estética", description: "Remoção de resíduos e manchas de vidros." },
  { name: "Descontaminação de Rodas", price: 50, category: "Estética", description: "Limpeza técnica das rodas." },
  { name: "Descontaminação de Rodas Completa", price: 240, category: "Estética", description: "Tratamento profundo com desmontagem." },
  { name: "Aplicação de Shiny", price: 10, category: "Extras", description: "Brilho e proteção para pneus." },
  { name: "Lavagem Interna de Capô", price: 40, category: "Extras", description: "Limpeza da parte interna do capô." },
  { name: "Lavagem Interna da Tampa de Combustível", price: 5, category: "Extras", description: "Limpeza detalhada da tampa e bocal." },
  { name: "Lavagem do Motor", price: 140, category: "Extras", description: "Higienização técnica do compartimento do motor." },
  { name: "Descontaminação de Painel", price: 15, category: "Extras", description: "Limpeza e revitalização do painel." },
  { name: "Remoção de Adesivo", price: 30, category: "Extras", description: "Remoção segura sem danificar a pintura." },
  { name: "Lavagem Moto", price: 50, category: "Lavagem", description: "Lavagem completa para motocicletas." },
  { name: "Hidratação Banco de Couro", price: 15, category: "Estética", description: "Hidratação e nutrição de bancos de couro." },
  { name: "Restauração de Couro Completa", price: 1000, category: "Estética", description: "Restauração premium para couro danificado." },
];

export const stats = [
  { value: "4.9★", label: "Google Reviews" },
  { value: "+70", label: "Avaliações reais" },
  { value: "+5.000", label: "Veículos atendidos" },
  { value: "+5 anos", label: "de experiência" },
];

export const processSteps = [
  { step: "01", title: "Recebimento", desc: "Recebemos seu veículo com protocolo profissional." },
  { step: "02", title: "Avaliação", desc: "Análise técnica detalhada da pintura e interior." },
  { step: "03", title: "Execução", desc: "Serviço realizado por equipe especializada." },
  { step: "04", title: "Entrega", desc: "Inspeção final e entrega com o padrão Coyotes." },
];
// legacy export alias
export const process = processSteps;

export interface GoogleReview {
  name: string;
  reviews: number;
  photos?: number;
  localGuide?: boolean;
  time: string;
  edited?: boolean;
  rating: 5;
  text: string;
  reactions?: { heart?: number; pray?: number };
}

export const googleReviews: GoogleReview[] = [
  { name: "Lucas Gabriel", reviews: 1, time: "3 meses atrás", rating: 5,
    text: "Muito bom a lavagem o atendimento preço, com certeza o melhor de extrema." },
  { name: "Rodney Júnior", localGuide: true, reviews: 21, photos: 2, time: "1 ano atrás", rating: 5,
    text: "Sou do Mato Grosso do Sul e fui muito bem atendido pelo pessoal. Atenciosos e prestativos, tornaram minha experiência excelente. Recomendo!",
    reactions: { pray: 1 } },
  { name: "Anna Leticia Brito", localGuide: true, reviews: 24, photos: 5, time: "1 ano atrás", rating: 5,
    text: "Lavagem de alta qualidade, tenho dois cachorros Golden que andam no carro e eles fazem milagre! Atendimento mil! Super indico!" },
  { name: "Iraildes Santos", reviews: 10, photos: 1, time: "1 ano atrás", edited: true, rating: 5,
    text: "Foi ótima, tudo muito limpo, organizado, serviço de altíssima qualidade. Só elogios e gratidão. Parabéns a todos os envolvidos.",
    reactions: { pray: 1 } },
  { name: "Edson de Almeida", reviews: 1, photos: 2, time: "1 ano atrás", rating: 5,
    text: "Bom serviço. Atendimento e atenção perfeitos. Super recomendo 😃😃😃" },
  { name: "Thiago Carvalho", reviews: 5, time: "1 ano atrás", edited: true, rating: 5,
    text: "Atendimento excelente, trabalhos executados nos nossos carros com excelência, o ambiente muito agradável para aguardar a finalização do carro." },
  { name: "Mayara Salgado", reviews: 5, time: "1 ano atrás", rating: 5,
    text: "Super indico eles são maravilhosos estão de parabéns pelo excelente trabalho." },
  { name: "Wilder Gaspar", reviews: 1, time: "1 ano atrás", rating: 5,
    text: "Recomendo a todos deixar seu carro sobre o cuidado deles. Serviço de excelência e ótimo atendimento." },
  { name: "Bianca Beatriz", reviews: 1, time: "1 ano atrás", rating: 5,
    text: "Trabalho IMPECÁVEL, sensação é de estar com carro zero, fresquinho da loja 😂 Vocês arrasaram, obrigada pelo ótimo trabalho 🫶",
    reactions: { heart: 1 } },
  { name: "Alessandra Corrêa", reviews: 3, photos: 1, time: "1 ano atrás", edited: true, rating: 5,
    text: "Maravilha... Equipe muito atenciosa e fazem um trabalho de ótima qualidade.",
    reactions: { pray: 1 } },
  { name: "Mk Mac", reviews: 1, time: "8 meses atrás", rating: 5,
    text: "Atendimento impecável! Sem palavras.", reactions: { heart: 1 } },
  { name: "SIMONE CRISTINA", reviews: 4, time: "1 ano atrás", rating: 5,
    text: "Trabalho excelente. Ótimos profissionais. Super recomendo!!!" },
  { name: "Fernando Freire", reviews: 3, time: "1 ano atrás", rating: 5,
    text: "Muito bom meu carro ficou top demais, ótimos produtos.", reactions: { pray: 1 } },
  { name: "Alexandra Amaral", reviews: 9, photos: 1, time: "1 ano atrás", rating: 5,
    text: "Atendimento ímpar!!! Ótimo serviço." },
  { name: "Igor Patrick", reviews: 2, photos: 2, time: "1 ano atrás", rating: 5,
    text: "Excelente lugar, limpinho, organizado, passa uma credibilidade excelente, e o melhor, serviço de primeira." },
  { name: "Cicero Junior", reviews: 3, time: "1 ano atrás", rating: 5,
    text: "Muito bom top super indico nota 10." },
  { name: "Lilian", reviews: 4, time: "1 ano atrás", rating: 5,
    text: "Excelente atendimento, ótimos profissionais. Super recomendo.", reactions: { pray: 1 } },
  { name: "Lucas Dibe", reviews: 3, time: "1 ano atrás", rating: 5,
    text: "Atendimento excelente. Lavagem top! Com certeza voltarei mais vezes." },
  { name: "Cristina Flores", reviews: 8, time: "1 ano atrás", rating: 5,
    text: "Excelente atendimento em todos os sentidos." },
  { name: "Lucas Pereira", reviews: 2, photos: 2, time: "1 ano atrás", rating: 5,
    text: "Lugar bacana, atenção da galera é show de bola. Muitas opções de cuidados com os autos." },
  { name: "Nancy Regiane Santos", reviews: 4, time: "1 ano atrás", edited: true, rating: 5,
    text: "Melhor lava rápido e estacionamento da cidade, os meninos super atenciosos e meu carro limpo e com segurança." },
  { name: "Adenilton Reis", reviews: 1, time: "1 ano atrás", rating: 5,
    text: "Excelente atendimento, serviço impecável." },
  { name: "Wane Kelly", reviews: 2, time: "1 ano atrás", rating: 5,
    text: "Trabalho muito bom. Prestativos. Super recomendo 👏🏼👏🏼." },
  { name: "Davi Craveiro", reviews: 3, time: "1 ano atrás", rating: 5,
    text: "Excelente atendimento e muito boa lavagem.", reactions: { pray: 1 } },
  { name: "Fred Medrado", reviews: 1, time: "1 ano atrás", rating: 5,
    text: "Trabalho top! Lavagem e a restauração do farol excelente 👏👏👏👏." },
  { name: "Gata Malhada", reviews: 1, time: "1 ano atrás", rating: 5,
    text: "Trabalho excelente, voltarei mais vezes.", reactions: { pray: 1 } },
  { name: "Mateus Quaresma", reviews: 3, time: "1 ano atrás", rating: 5,
    text: "Atendimento diferenciado. Espaço aconchegante para aguardar o veículo.", reactions: { pray: 1 } },
  { name: "Everty Matheus", reviews: 1, photos: 1, time: "1 ano atrás", rating: 5,
    text: "Muito bom, o melhor da cidade.", reactions: { pray: 1 } },
  { name: "Laina Anne", reviews: 1, time: "1 ano atrás", rating: 5,
    text: "Recomendo, trabalho muito bom.", reactions: { pray: 1 } },
  { name: "Camila Paula", reviews: 3, time: "1 ano atrás", rating: 5, text: "Ótimo atendimento!" },
  { name: "Silvia Mariano", reviews: 1, time: "1 ano atrás", rating: 5, text: "Gostei da lavagem, muito capricho!!" },
  { name: "Pedro Facioni", localGuide: true, reviews: 132, photos: 119, time: "1 ano atrás", rating: 5, text: "Lavagem muito boa." },
  { name: "Pedrooliveira Henrique", reviews: 1, time: "1 ano atrás", rating: 5, text: "Top excelente trabalho." },
  { name: "Jancarla Santos", reviews: 3, photos: 30, time: "1 ano atrás", rating: 5, text: "Trabalho excelente 😄🙂." },
  { name: "Cibele Doblas", reviews: 4, time: "1 ano atrás", rating: 5, text: "Super recomendo!!! 😁", reactions: { pray: 1 } },
  { name: "Leyla Macyel", reviews: 1, photos: 1, time: "1 ano atrás", rating: 5, text: "Nota 100000000..0000...00000" },
  { name: "Elemy Keila Lima", reviews: 6, photos: 4, time: "1 ano atrás", rating: 5, text: "Perfeito!", reactions: { pray: 1 } },
  { name: "Vitor Maia", reviews: 1, time: "1 ano atrás", rating: 5, text: "Excelente!" },
  { name: "Daiana Almeida", reviews: 3, time: "1 ano atrás", rating: 5, text: "Excelente." },
];

// Legacy testimonials alias (kept for backwards-compat imports)
export const testimonials = googleReviews.slice(0, 6).map((r) => ({
  name: r.name, role: `${r.reviews} ${r.reviews === 1 ? "avaliação" : "avaliações"}`, text: r.text,
}));

export const faqs = [
  { q: "Quanto tempo dura uma vitrificação?", a: "Nossas proteções cerâmicas duram de 12 a 36 meses, dependendo do pacote escolhido e da manutenção." },
  { q: "Preciso agendar?", a: "Sim. Trabalhamos com agenda controlada para garantir excelência em cada atendimento. Fale conosco pelo WhatsApp." },
  { q: "Onde vocês ficam?", a: "Av. Brasil, 225 — Centro, Extrema/MG. Estacionamento próprio no local." },
  { q: "Quais formas de pagamento?", a: "Dinheiro, PIX, débito e crédito. Parcelamos os pacotes acima de R$500." },
  { q: "O polimento remove todos os riscos?", a: "Riscos superficiais sim. Riscos profundos podem ser atenuados — avaliamos caso a caso antes do orçamento." },
];
