import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
    icon: `/bytec-healthcare/favicon.png`,
    shortcut: `/bytec-healthcare/favicon.png`,
    apple: `/bytec-healthcare/favicon.png`,
  },
  title: "Bytec Healthcare | Premium Mobile Medical Platforms",
  description: "Standard mobile workstations and ergonomic product line for today's modern healthcare environments.",
};



import AosInit from "./_components/AosInit";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AosInit />
        {children}
      </body>
    </html>
  );
}
