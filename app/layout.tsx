import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clinical Visuals Business",
  description: "Innovative clinical visualization and healthcare solutions.",
  icons: {
    icon: 'https://cdn.clinicalvisuals.com/siteImages/clinical-visuals-favicon-logo.svg',
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
