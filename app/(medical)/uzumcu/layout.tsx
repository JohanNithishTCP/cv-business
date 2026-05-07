import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "UZUMCU | Medical Equipment",
  description: "Advanced Operating Room Technologies and Medical Solutions",
  icons: {
    icon: "/uzumcu/images/favicon.ico",
  },
};

import AOSInitializer from "./_components/AOSInitializer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <AOSInitializer />
        {children}
      </body>
    </html>
  );
}
