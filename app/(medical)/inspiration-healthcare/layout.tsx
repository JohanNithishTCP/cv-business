import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Inspiration Healthcare",
  description: "Inspiration Healthcare - A global provider of medical technology",
  icons: {
    icon: "/inspiration-healthcare/assets/inspiration-favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
