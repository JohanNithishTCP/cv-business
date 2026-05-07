import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const DM = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Vapotherm",
  description: "Innovative technology for respiratory care",
  icons: {
    icon: "/vapotherm/assets/vapotherm-favicon.png",
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
        className={`${DM.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
