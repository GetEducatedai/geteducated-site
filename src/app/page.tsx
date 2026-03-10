import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TestimonialMarquee from "@/components/TestimonialMarquee";
import FloatingTopics from "@/components/FloatingTopics";
import BentoGrid from "@/components/BentoGrid";
import HowItWorks from "@/components/HowItWorks";
import CourseCarousel from "@/components/CourseCarousel";
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
        <TestimonialMarquee />
        <FloatingTopics />
        <BentoGrid />
        <HowItWorks />
        <CourseCarousel />
        <WhyDifferent />
        <Pricing />
        <CTABand />
      </main>
      <Footer />
    </>
  );
}
