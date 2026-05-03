import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Pillars } from "@/components/pillars";
import { Properties } from "@/components/properties";
import { About } from "@/components/about";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Pillars />
        <Properties />
        <About />
      </main>
      <Footer />
    </>
  );
}
