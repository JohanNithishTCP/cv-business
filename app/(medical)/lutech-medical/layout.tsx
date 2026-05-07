import type { Metadata } from "next";
import { Outfit, Rubik } from "next/font/google";
import "./globals.css";
import { VideoProvider } from "../../_context/VideoContext";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
})

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Lutech Medical",
  description: "Colposcopes | Lutech Medical",
  icons: {
    icon: "/lutech-medical/assets/lutech-favicon.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${rubik.variable}`}>
      <body
        className="antialiased"
      >
        <VideoProvider>
          {children}
        </VideoProvider>
      </body>
    </html>
  );
}
