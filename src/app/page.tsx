import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import HowItWorks from "@/components/HowItWorks";
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
        <HowItWorks />
        <BentoGrid />
        <WhyDifferent />
        <Pricing />
        <CTABand />
      </main>
      <Footer />
    </>
  );
}
