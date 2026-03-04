import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import StickyCTA from "@/components/StickyCTA";
import ActivityFeed from "@/components/ActivityFeed";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "GetEducated.ai — Learn AI. Build Income. Lead the Future.",
  description:
    "The anti-university for AI creators. Learn real AI skills, build real income, lead the future. Community, courses, templates, and collaborations.",
  openGraph: {
    title: "GetEducated.ai — Learn AI. Build Income. Lead the Future.",
    description:
      "The anti-university for AI creators. Learn real AI skills, build real income, lead the future.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable}`}
    >
      <body className="font-display antialiased bg-dark-bg text-light-text overflow-x-hidden">
        <SmoothScroll>
          {children}
        </SmoothScroll>
        <StickyCTA />
        <ActivityFeed />
      </body>
    </html>
  );
}
