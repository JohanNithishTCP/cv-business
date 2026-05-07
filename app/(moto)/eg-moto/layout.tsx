import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import AosProvider from "./_components/AosProvider";
import { VideoProvider } from "../../_context/VideoContext";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nihon Kohden | Fighting Disease with Electronics",
  description: "Nihon Kohden is Japan's leading manufacturer, developer and distributor of medical electronic equipment.",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} font-sans`} suppressHydrationWarning>
      <body className="bg-white font-sans antialiased">
        <AosProvider>
          <VideoProvider website="nihon">
            <div className="relative w-full flex flex-col min-h-screen">
              <Header />
              <main className="flex-grow">{children}</main>
              <Footer />
            </div>
          </VideoProvider>
        </AosProvider>
      </body>
    </html>
  );
}
