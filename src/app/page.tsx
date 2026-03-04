import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import BentoGrid from "@/components/BentoGrid";
import WhyDifferent from "@/components/WhyDifferent";
import Pricing from "@/components/Pricing";
import CTABand from "@/components/CTABand";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <BentoGrid />
        <WhyDifferent />
        <Pricing />
        <CTABand />
      </main>
      <Footer />
    </>
  );
}
