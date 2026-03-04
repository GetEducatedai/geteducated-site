import Nav from "@/components/Nav";
import Hero from "@/components/Hero";

import BentoGrid from "@/components/BentoGrid";
import WhyDifferent from "@/components/WhyDifferent";
import TestimonialMarquee from "@/components/TestimonialMarquee";
import HowItWorks from "@/components/HowItWorks";
import Masterclass from "@/components/Masterclass";
import Courses from "@/components/Courses";
import Pricing from "@/components/Pricing";
import FoundingMember from "@/components/FoundingMember";
import InstructorBio from "@/components/InstructorBio";
import Events from "@/components/Events";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <BentoGrid />
        <WhyDifferent />
        <TestimonialMarquee />
        <HowItWorks />
        <Masterclass />
        <Courses />
        <Pricing />
        <FoundingMember />
        <InstructorBio />
        <Events />
      </main>
      <Footer />
      <Chatbot />
    </>
  );
}
