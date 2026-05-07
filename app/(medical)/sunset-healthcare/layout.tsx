import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const fontPrimary = Outfit({
  variable: "--font-primary",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Sunset Healthcare Solutions",
  description: "A Trusted Leader in HME Solutions Since 2004",
  icons: {
    icon: "/sunset-healthcare/logo.png",
  },
};

import { AosInit } from "./_components/AosInit";
import { VideoProvider } from "../../_context/VideoContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontPrimary.variable} antialiased`}>
        <VideoProvider>   {/* if needed use directly the below line  <VideoProvider website="sunset-healthcare" > */}
          <AosInit />
          {children}
        </VideoProvider>
      </body>
    </html>
  );
}
