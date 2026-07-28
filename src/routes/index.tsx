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