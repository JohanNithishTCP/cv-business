import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "NOxBOX® - Precision Medical Devices for ENT & Plastic Surgery Excellence",
  description: "NOxBOX® specializes in inhaled nitric oxide delivery and monitoring systems, providing innovative solutions for ENT and plastic surgery applications. Our precision medical devices are designed to enhance patient care and surgical outcomes.",
  icons: {
    icon: "/noxbox/assets/logo.png",
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
        className={`${manrope.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
