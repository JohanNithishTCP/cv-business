import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Topbar from "./_components/Topbar";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

const urbanist = Urbanist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FutureMed Global",
  description: "Next generation medical equipment",
  icons: {
    icon: "/future-med/logo.png",
  },
};

import { AOSInit } from "./_components/AOSInit";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${urbanist.className} antialiased flex flex-col min-h-screen`}
      >
        <AOSInit />
        {/* <Topbar />*/}
        <Header />
        <main className="flex-1 w-full flex flex-col items-center">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
