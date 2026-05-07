import type { Metadata } from "next";
import "./globals.css";
import { Outfit } from "next/font/google";
import { VideoProvider } from "../../_context/VideoContext";
import Navbar from "./_components/Navbar";
import SmoothAOS from "./_components/SmoothAOS";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // choose weights you need
});
export const metadata: Metadata = {
  title: "de-soutter-medical",
  description: "de-soutter-medical Medical Devices Inc.",
  icons: {
    icon: "/de-soutter-medical/logo.png",
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
        {" "}
        <Navbar />
        <SmoothAOS />
        <VideoProvider>{children}</VideoProvider>
      </body>
    </html>
  );
}
