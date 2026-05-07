import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";
import LenisProvider from "./_components/LenisProvider";
import AOSProvider from "./_components/AOSProvider";
import { VideoProvider } from "../../_context/VideoContext";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // choose weights you need
});

export const metadata: Metadata = {
  title: "Clinisupplies",
  description: "Clinisupplies",
  icons: {
    icon: "/clinisupplies/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <VideoProvider>
          {" "}
          <Navbar />
          <LenisProvider>
            <AOSProvider>{children}</AOSProvider>
          </LenisProvider>
        </VideoProvider>
      </body>
    </html>
  );
}
