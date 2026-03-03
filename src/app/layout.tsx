import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
  style: ["normal", "italic"],
  weight: ["400", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
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
      className={`${plusJakarta.variable} ${playfair.variable} ${inter.variable}`}
    >
      <body className="font-body antialiased bg-cream text-ink overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
