import type { Metadata, Viewport } from "next";
import { playfair, inter } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "ESTATE ONE GROUP | Luxury Real Estate Excellence",
  description:
    "Experience unparalleled luxury real estate services. Premium properties, exceptional service, and timeless elegance in every transaction.",
  keywords: [
    "luxury real estate",
    "premium properties",
    "estate one group",
    "high-end homes",
    "exclusive listings",
  ],
};

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
