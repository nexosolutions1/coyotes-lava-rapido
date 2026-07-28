import { createFileRoute } from "@tanstack/react-router";

import { Header } from "@/components/site/Header";
import { Loader } from "@/components/site/Loader";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Differentiators } from "@/components/site/Differentiators";
import { Services } from "@/components/site/Services";
import { Gallery } from "@/components/site/Gallery";
import { Stats } from "@/components/site/Stats";
import { Process } from "@/components/site/Process";
import { Testimonials } from "@/components/site/Testimonials";
import { Location } from "@/components/site/Location";
import { FAQ } from "@/components/site/FAQ";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";
import { WhatsFloat } from "@/components/site/WhatsFloat";

export const Route = createFileRoute("/")({
  component: Index,

  head: () => ({
    meta: [
      {
        title:
          "Coyotes Lava Rápido — Estética Automotiva Premium em Extrema/MG",
      },
      {
        name: "description",
        content:
          "Detalhamento, polimento e vitrificação de alto padrão em Extrema/MG. 4,9★ no Google com mais de 70 avaliações reais. Agende pelo WhatsApp.",
      },
      {
        property: "og:title",
        content:
          "Coyotes Lava Rápido — Estética Automotiva Premium",
      },
      {
        property: "og:description",
        content:
          "Padrão premium em detalhamento automotivo. Av. Brasil, 225 · Extrema/MG.",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:url",
        content: "/",
      },
    ],

    links: [
      {
        rel: "canonical",
        href: "/",
      },
    ],
  }),
});

function Index() {
  return (
    <>
      <Loader />
      <Header />

      <main>
        <Hero />
        <About />
        <Differentiators />
        <Services />
        <Gallery />
        <Stats />
        <Process />
        <Testimonials />
        <Location />
        <FAQ />
        <CTA />
      </main>

      <Footer />
      <WhatsFloat />
    </>
  );
}