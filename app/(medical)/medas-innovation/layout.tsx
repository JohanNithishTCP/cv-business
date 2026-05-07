import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { VideoProvider } from "../../_context/VideoContext";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});

export const metadata: Metadata = {
  title: "Medas Innovation - Improving Healthcare with Innovative Solutions",
  description: "High quality, innovative medical products MADE IN GERMANY",
  icons: {
    icon: "/medas-innovation/assets/medas-favicon.png",
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
        className={`${poppins.variable} antialiased`}
      >
        <VideoProvider>

          {children}
        </VideoProvider>
      </body>
    </html>
  );
}
