import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./_components/Navbar";
import SmoothAOS from "./_components/SmoothAOS";
import { Outfit } from "next/font/google";
import { VideoProvider } from "../../_context/VideoContext";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // choose weights you need
});
export const metadata: Metadata = {
  title: "Arcomed",
  description: "Arcomed Medical Devices Inc.",
  icons: {
    icon: "/arcomed/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.className} overflow-hidden `}>
        {" "}
        <VideoProvider>
          <Navbar />
          <SmoothAOS />
          {children}
        </VideoProvider>
      </body>
    </html>
  );
}
