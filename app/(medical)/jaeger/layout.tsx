import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./_components/Navbar";
import { Exo, Rubik } from "next/font/google";

import SmoothAOS from "./_components/SmoothAOS";
import { VideoProvider } from "../../_context/VideoContext";

const exo = Exo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-exo",
});

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal"],
  variable: "--font-rubik",
});

export const metadata: Metadata = {
  title: "Jaeger",
  description: "Jaeger Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${exo.variable} ${rubik.variable}`}>
      <body className={rubik.className}>
        <Navbar />
        <SmoothAOS />
        <VideoProvider>{children}</VideoProvider>
      </body>
    </html>
  );
}
