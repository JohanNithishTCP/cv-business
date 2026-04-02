import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const urbanist = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Beyond Air",
  description: "The Magic of Breathing ",
  icons: {
    icon: "/beyond-air/assets/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${urbanist.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
