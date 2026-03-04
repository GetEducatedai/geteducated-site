import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact — GetEducated.ai",
  description: "Get in touch with the GetEducated.ai team. All inquiries welcome.",
};

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main className="pt-16">
        <Contact />
      </main>
      <Footer />
    </>
  );
}
