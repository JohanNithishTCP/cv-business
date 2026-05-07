import type { Metadata } from "next";
import { Sora, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";
import LenisProvider from "./_components/LenisProvider";
import AOSProvider from "./_components/AOSProvider";
import { VideoProvider } from "../../_context/VideoContext";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sora",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Delphos Implants",
  description: "Innovative medical devices for Cranio-Maxillofacial and Orthopedic surgeries.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${sora.variable} ${manrope.variable}`}>
      <body className={`${manrope.className} overflow-x-hidden`} >
        <VideoProvider>
          <Navbar />
          <LenisProvider>
            <AOSProvider>{children}</AOSProvider>
          </LenisProvider>
        </VideoProvider>
      </body>
    </html>
  );
}
