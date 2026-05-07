import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./_components/Navbar";
import { Exo, Outfit } from "next/font/google";

import SmoothAOS from "./_components/SmoothAOS";
import { VideoProvider } from "../../_context/VideoContext";

const exo = Exo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-exo",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Vectracor",
  description: "Vectracor Website",
  icons: {
    icon: "/vectracor/vectracor-favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${exo.variable} ${outfit.variable}`}>
      <body className={outfit.className}>
        <Navbar />
        <SmoothAOS />
        <VideoProvider>{children}</VideoProvider>
      </body>
    </html>
  );

}
