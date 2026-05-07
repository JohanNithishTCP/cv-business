import Navbar from "./_components/Navbar";

import "./globals.css";
import { Open_Sans } from "next/font/google";

import { Metadata } from "next";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});
export const metadata: Metadata = {
  title: "Dimeda",
  description:
    "Dimeda delivers advanced medical and clean room solutions with high precision and quality.",
  icons: {
    icon: "/dimeda/logo.png",
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body className={`${openSans.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
