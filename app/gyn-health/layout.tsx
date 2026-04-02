import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import AosInit from "./_components/AosInit";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gyn Health - Women for Women",
  description: "Specialized healthcare for women at every stage of life.",
  icons: {
    icon: `/gyn-health/logo.png`,
    shortcut: `/gyn-health/logo.png`,
    apple: `/gyn-health/logo.png`,
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
        className={`${montserrat.variable} font-sans antialiased`}
      >
        <AosInit />
        {children}
      </body>
    </html>
  );
}
