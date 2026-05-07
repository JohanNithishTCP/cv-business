import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  icons: {
    icon: "/mci/images/fav.png",
  },
  title: "MCI - Medical Concept Innovation inc.",
  description: "Innovative Solutions, Life-Changing Results Through Advanced Medical Technology. Precision Medical Solutions.",
};

import AOSInit from "./_components/AOSInit";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={outfit.variable} suppressHydrationWarning>
      <body className="min-h-screen bg-white font-sans antialiased">
        <AOSInit />
        <div className="overflow-x-hidden relative w-full">
          {children}
        </div>
      </body>
    </html>
  );
}
