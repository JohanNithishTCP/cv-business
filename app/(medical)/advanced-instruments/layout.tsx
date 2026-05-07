import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import AOSInit from "./_components/AOSInit";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  icons: {
    icon: "/advanced-instruments/images/advanced-logo.png",
  },
  title: "Advanced Instrumentations | Medical Solutions for Healthcare Needs",
  description: "Providing high-quality medical equipment and solutions worldwide.",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} font-sans`} suppressHydrationWarning>
      <body className="min-h-screen bg-white font-sans antialiased text-[#4a4a4a]">
        <AOSInit />
        <div className="overflow-x-hidden relative w-full">
          {children}
        </div>
      </body>
    </html>
  );
}
