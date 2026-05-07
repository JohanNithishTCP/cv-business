import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Demos",
  description: "Custom demos for New businesses",
  icons: {
    icon: '/tcp-logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
    </>
  );
}
