import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import AOSInit from "./_components/AOSInit";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Soniquence",
  description: "Soniquence - The Future of Surgical Technology",
  icons: {
    icon: `/soniquence/favicon.webp`,
    shortcut: `/soniquence/favicon.webp`,
    apple: `/soniquence/favicon.webp`,
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
        className={`${ibmPlexSans.variable} antialiased`}
      >
        <AOSInit />
        {children}
      </body>
    </html>
  );
}

