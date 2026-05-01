// TODO Sprint 1: all components below need refactor with new design tokens (Opus)
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Properties } from "@/components/properties";
import { Services } from "@/components/services";
import { About } from "@/components/about";
import { Testimonials } from "@/components/testimonials";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Properties />
        <Services />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
