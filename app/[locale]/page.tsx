import { setRequestLocale } from "next-intl/server";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Pillars } from "@/components/pillars";
import { Properties } from "@/components/properties";
import { About } from "@/components/about";
import { Footer } from "@/components/footer";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

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
