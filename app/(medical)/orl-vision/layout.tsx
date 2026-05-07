import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./_components/Navbar";
import { Outfit } from "next/font/google"; // ✅ import
import SmoothAOS from "./_components/SmoothAOS";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // choose weights you need
});

export const metadata: Metadata = {
  title: "ORL Vision",
  description: "ORL Vision - Advanced ENT and Hearing Care Solutions",
  icons: {
    icon: "/orlvision/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} antialiased`}>
        {" "}
        {/* ✅ apply here */}
        <Navbar />
        {children}
      </body>
    </html>
  );
}
