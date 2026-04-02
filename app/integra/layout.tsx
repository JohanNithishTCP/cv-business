import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Integra LifeSciences",
  description: "Integra LifeSciences",
  icons: {
    icon: "/integra/logo.png",
  },
};

import AosInit from "./_components/AosInit";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${hankenGrotesk.variable} antialiased font-sans`}
      >
        <AosInit />
        {children}
      </body>
    </html>
  );
}
