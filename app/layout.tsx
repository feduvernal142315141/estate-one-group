import type { Metadata, Viewport } from "next";
import { playfair, inter } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Estate One Group — Miami real estate, considered.",
  description:
    "Modern real estate in South Florida. Premium homes, off-market access.",
  keywords: [
    "Miami real estate",
    "South Florida real estate",
    "Estate One Group",
    "off-market homes",
    "Coral Gables",
    "Sunny Isles Beach",
  ],
};

export const viewport: Viewport = {
  themeColor: "#FAFAF7",
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
