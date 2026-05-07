import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";
import SmoothAOS from "./_components/SmoothAOS";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Ceek Womens Health",
  description: "Ceek Womens Health | Ceek is a global medical technology company dedicated to improving patient outcomes through innovative solutions",
  icons: {
    icon: "/ceek/favicon.png",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <Navbar />
        <SmoothAOS />
        {children}
      </body>
    </html>
  );
}
