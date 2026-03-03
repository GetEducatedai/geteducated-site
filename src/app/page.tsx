import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import BentoGrid from "@/components/BentoGrid";
import WhyDifferent from "@/components/WhyDifferent";
import HowItWorks from "@/components/HowItWorks";
import Masterclass from "@/components/Masterclass";
import Courses from "@/components/Courses";
import Pricing from "@/components/Pricing";
import FoundingMember from "@/components/FoundingMember";
import Events from "@/components/Events";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <BentoGrid />
        <WhyDifferent />
        <HowItWorks />
        <Masterclass />
        <Courses />
        <Pricing />
        <FoundingMember />
        <Events />
      </main>
      <Footer />
      <Chatbot />
    </>
  );
}
