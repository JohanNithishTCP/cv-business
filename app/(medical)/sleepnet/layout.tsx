import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import AOSInit from "./_components/AOSInit";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
});

export const metadata: Metadata = {
  title: "Sleepnet",
  description: "Sleepnet Corporation - Breathe Easier. Live Better.",
  icons: {
    icon: `/sleepnet/favicon.png`,
    shortcut: `/sleepnet/favicon.png`,
    apple: `/sleepnet/favicon.png`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${oswald.variable} antialiased min-h-screen flex flex-col font-sans`}>
        <AOSInit />
        <Header />
        <div className="flex-1">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
