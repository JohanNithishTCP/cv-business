import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

import { AosInit } from "./_components/AosInit";

export const metadata: Metadata = {
  icons: {
    icon: "/histologics/images/histologics-logo.png",
  },
  title: "Histologics",
  description: "Saving Lives Worldwide with Kylon Tissue-Based Devices",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} font-sans antialiased`}>
        <AosInit />
        {children}
      </body>
    </html>
  );
}
