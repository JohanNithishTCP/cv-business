import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const fontPrimary = Outfit({
  variable: "--font-primary",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Activbase",
  description: "Expert and personalised physiotherapy care in Kochi.",
  icons: {
    icon: "/activbase/logo.png",
  },
};

import { AosInit } from "./_components/AosInit";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontPrimary.variable} antialiased`}>
        <AosInit />
        {children}
      </body>
    </html>
  );
}
