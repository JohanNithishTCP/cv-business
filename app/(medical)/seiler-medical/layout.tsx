import type { Metadata } from "next";

import "./globals.css";
import Navbar from "./_components/Navbar";
import { Outfit } from "next/font/google";
import { VideoProvider } from "../../_context/VideoContext";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // choose weights you need
});

export const metadata: Metadata = {
  title: "Welcome to Seiler Medical",
  description: "Seiler Medical is a leading provider of high-quality medical devices and solutions, dedicated to improving patient care and advancing healthcare technology. With a commitment to innovation and excellence, Seiler Medical offers a wide range of products designed to meet the diverse needs of healthcare professionals and patients worldwide.",
  icons: {
    icon: "seiler/seiler-favicon.webp",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.className} antialiased`}>
        <VideoProvider>
          <Navbar />
          {children}
        </VideoProvider>
      </body>
    </html>
  );
}
