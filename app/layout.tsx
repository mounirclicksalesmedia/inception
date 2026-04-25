import type { Metadata } from "next";
import { Inter, Inter_Tight, JetBrains_Mono, Cormorant_Garamond, Almarai } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import CursorBlob from "@/components/CursorBlob";
import LocaleHtml from "@/components/LocaleHtml";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400", "500"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

const almarai = Almarai({
  subsets: ["arabic"],
  variable: "--font-almarai",
  weight: ["300", "400", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Inception — Marketing & Brand Strategy in Riyadh",
  description:
    "A creative marketing agency in Riyadh, Saudi Arabia — building brands with the gravity of legacy and the velocity of now.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${interTight.variable} ${jetbrainsMono.variable} ${cormorant.variable} ${almarai.variable}`}
    >
      <body>
        <LocaleHtml />
        <Loader />
        <Nav />
        {children}
        <Footer />
        <CursorBlob />
      </body>
    </html>
  );
}
