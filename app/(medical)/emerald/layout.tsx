import type { Metadata } from "next";
import { Albert_Sans } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import AOSProvider from "../delphos-implants/_components/AOSProvider";
import { VideoProvider } from "../../_context/VideoContext";

const albertSans = Albert_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-albert",
});

export const metadata: Metadata = {
  title: "Emerald Supply",
  description: "Complete DME Solutions Designed for Comfort and Reliability",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${albertSans.variable}`}>
      <body className={`${albertSans.className} overflow-x-hidden`} >
        <Header />
        <VideoProvider>
          <AOSProvider>{children}</AOSProvider>
        </VideoProvider>
      </body>
    </html>
  );
}
