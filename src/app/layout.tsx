import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
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
      className={`${instrumentSans.variable}`}
    >
      <body className="font-display antialiased bg-cream text-ink overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
