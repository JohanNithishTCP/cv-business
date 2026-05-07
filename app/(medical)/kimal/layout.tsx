import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kimal | Healthcare Innovation",
  description: "Delivering healthcare innovation and exceeding our customers' expectations.",
};

import AosInit from "./_components/AosInit";
import { VideoProvider } from "../../_context/VideoContext";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} font-sans`} suppressHydrationWarning>
      <body className="min-h-screen bg-white font-sans antialiased text-[#4b5563]">
        <VideoProvider>
          <AosInit />
          <div className="overflow-x-hidden relative w-full">
            {children}
          </div>
        </VideoProvider>
      </body>
    </html>
  );
}
