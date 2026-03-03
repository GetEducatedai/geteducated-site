import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Masterclass from "@/components/Masterclass";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title:
    "Free Masterclass — Build a Profitable AI Consulting Business | GetEducated.ai",
  description:
    "The complete system for positioning yourself as an AI expert, landing $5K-$15K clients, and delivering world-class solutions — even if you're completely non-technical.",
  openGraph: {
    title:
      "Free Masterclass — Build a Profitable AI Consulting Business | GetEducated.ai",
    description:
      "The complete system for positioning yourself as an AI expert, landing $5K-$15K clients, and delivering world-class solutions — even if you're completely non-technical.",
    type: "website",
  },
};

export default function MasterclassPage() {
  return (
    <>
      <Nav />
      <main>
        <Masterclass />
      </main>
      <Footer />
    </>
  );
}
