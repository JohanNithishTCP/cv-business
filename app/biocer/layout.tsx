import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  icons: {
    icon: `/biocer/favicon.png`,
    shortcut: `/biocer/favicon.png`,
    apple: `/biocer/favicon.png`,
  },
  title: "BioCer",
  description: "BioCer",
};

import AOSInitializer from "./_components/AOSInitializer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en">
      <body className={`${sora.variable} antialiased`} >
        <AOSInitializer />
        {children}
      </body>
    </html>
  );
}
