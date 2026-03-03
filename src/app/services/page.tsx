import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

export const metadata: Metadata = {
  title: "Services — GetEducated.ai | AI Agents, Branding & Software",
  description:
    "We build custom AI agents, brand systems, and software that grow your business while you sleep. Book a free strategy call today.",
  openGraph: {
    title: "Services — GetEducated.ai | AI Agents, Branding & Software",
    description:
      "We build custom AI agents, brand systems, and software that grow your business while you sleep.",
    type: "website",
  },
};

export default function ServicesPage() {
  return (
    <>
      <Nav />
      <main>
        <Services />
      </main>
      <Footer />
      <Chatbot />
    </>
  );
}
