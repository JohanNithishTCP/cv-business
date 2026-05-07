import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { AOSInit } from "./_components/AOSInit";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  icons: {
    icon: `/kap-medical/images/logo.png`,
    shortcut: `/kap-medical/images/logo.png`,
    apple: `/kap-medical/images/logo.png`,
  },
  title: "Kap Medical",
  description: "KAP Medical we deliver high-performance surgical instruments engineered for accuracy, durability, and uncompromising quality.",
};
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-dm-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} antialiased`}
      >
        <AOSInit />
        {children}
      </body>
    </html>
  );
}
