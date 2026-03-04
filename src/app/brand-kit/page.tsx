import type { Metadata } from "next";
import Nav from "@/components/Nav";
import BrandKit from "@/components/BrandKit";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Brand Kit — GetEducated.ai",
  description:
    "GetEducated.ai Design System v1.0 — Colors, typography, gradients, components, and voice guidelines.",
  openGraph: {
    title: "Brand Kit — GetEducated.ai",
    description:
      "GetEducated.ai Design System v1.0 — Colors, typography, gradients, components, and voice guidelines.",
    type: "website",
  },
};

export default function BrandKitPage() {
  return (
    <>
      <Nav />
      <main>
        <BrandKit />
      </main>
      <Footer />
    </>
  );
}
