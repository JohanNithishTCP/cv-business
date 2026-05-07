import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./_components/SmoothScroll";
import AosProvider from "./_components/AosProvider";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import { VideoProvider } from "../../_context/VideoContext";

const onest = Onest({
  subsets: ["latin"],
  variable: "--font-onest",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Horizon Med Tech | Quality. Knowledge. Outcomes.",
  description: "Welcome to Horizon Med Tech. Explore our Products and Training.",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${onest.variable} font-sans`} suppressHydrationWarning>
      <body className="min-h-screen bg-white font-sans antialiased text-[#4a4a4a]">
        <SmoothScroll>
          <AosProvider>
            <VideoProvider website="horizon-med-tech">
              <div className="overflow-x-hidden relative w-full flex flex-col min-h-screen">
                <Header />
                <main className="flex-grow">{children}</main>
                <Footer />
              </div>
            </VideoProvider>
          </AosProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
