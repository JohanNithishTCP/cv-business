import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DM Orthotics - Designing Innovative Orthotic Solutions",
  description: "DMO Orthotics are designers and manufacturers of dynamic movement orthoses (DMO) that manage the physical effects of neurological and neuromuscular conditions.",
  icons: {
    icon: "/dm-orthotics/logo.png",
  },
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${poppins.variable} ${poppins.className} font-sans antialiased text-dark min-h-screen overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
